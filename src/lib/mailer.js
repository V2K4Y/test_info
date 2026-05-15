import nodemailer from "nodemailer";

const transporterPromise =
  global.__mailerTransporter ||
  (global.__mailerTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  }));

export function getMailer() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    throw new Error("Missing GMAIL_USER or GMAIL_PASS environment variables.");
  }

  return transporterPromise;
}


