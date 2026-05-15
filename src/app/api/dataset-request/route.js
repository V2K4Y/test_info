import { connectToDatabase } from "@/lib/mongodb";
import DatasetRequest from "@/models/DatasetRequest";
import { datasetRequestSchema } from "@/lib/validation/datasetRequest";
import { buildPhone } from "@/lib/utils/phone";

const dbConnectionPromise = connectToDatabase();

export async function POST(req) {
  try {
    const body = await req.json();
    const payload = {
      firstName: body.firstName?.trim() || "",
      lastName: body.lastName?.trim() || "",
      email: body.email?.trim() || "",
      phoneNumber: body.phoneNumber?.trim?.() ?? body.phone?.trim?.() ?? "",
      category: body.category?.trim() || "",
      kind: body.kind?.trim() || "",
      source: body.source?.trim() || "",
    };

    try {
      await datasetRequestSchema.validate(payload, { abortEarly: false });
    } catch (err) {
      const message =
        err && "errors" in err ? err.errors.join(" ") : "Invalid request data";
      return new Response(
        JSON.stringify({ success: false, error: message }),
        { status: 400 }
      );
    }

    await dbConnectionPromise;

    await DatasetRequest.create({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: buildPhone("", payload.phoneNumber).trim(),
      category: payload.category,
      kind: payload.kind,
      source: payload.source,
    });

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    console.error("DatasetRequest Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}


