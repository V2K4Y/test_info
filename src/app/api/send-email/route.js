"use server";

import HomeContact from "@/models/HomeContact";
import { connectToDatabase } from "@/lib/mongodb";
import { getMailer } from "@/lib/mailer";

const dbConnectionPromise = connectToDatabase();

export async function submitContactForm(formData) {
  try {
    const name = formData.get("name");
    const company = formData.get("company");
    const title = formData.get("title");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const services = formData.getAll("services");
    const message = formData.get("message");

    if (!name || !company || !title || !email || !message) {
      return { success: false, error: "Missing required fields" };
    }

    // 1. Persist the homepage form submission in MongoDB
    await dbConnectionPromise;
    const createPromise = HomeContact.create({
      name,
      company,
      title,
      email,
      phone: phone || "",
      services,
      message,
    });

    // 2. Send notification email
    const mailer = getMailer();
    // Persist first; fire email asynchronously so client response is fast
    await createPromise;
    mailer
      .sendMail({
        from: email,
        to: process.env.EMAIL_TO_SENT,
        subject: `InfoBay New Lead– ${name} from ${company}`,
        html: `
        <p>Dear Team,</p>

        <p>
          A new potential client has submitted a consultation request through the InfoBay website.
          Please review the details below:
        </p>

        <h3 style="margin-top: 20px; margin-bottom: 10px;">Lead Details:</h3>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Job Title:</strong> ${title}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
          <li><strong>Requested Services:</strong> ${services.join(", ") || "None"}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>

        <p>Please take this forward and coordinate the next steps.</p>

        <p>Regards,<br>
            InfoBay Lead System
        </p>
        `,
      })
      .catch((err) => {
        console.error("Contact form email send failed:", err);
      });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error" 
    };
  }
}