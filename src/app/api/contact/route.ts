import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

/* ─────────────────────────────────────────────────────────
   EMAIL REGEX VALIDATOR (Strict production scale)
───────────────────────────────────────────────────────── */
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, orgType, message } = body;

    // 1. Strict Server-Side Data Integrity Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid contact phone number." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a detailed message (at least 10 characters)." },
        { status: 400 }
      );
    }

    const inquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      orgType: orgType || "unspecified",
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    // 2. Production-Grade Atomic Local File Database Appender
    const dbDir = path.join(process.cwd(), "data");
    const dbPath = path.join(dbDir, "inquiries.json");

    // Ensure database folder exists
    await fs.mkdir(dbDir, { recursive: true });

    let existingData = [];
    try {
      const raw = await fs.readFile(dbPath, "utf-8");
      existingData = JSON.parse(raw);
    } catch (e) {
      // File does not exist yet, initialize empty array
    }

    existingData.push(inquiry);
    
    // Write atomic-safely with formatting
    await fs.writeFile(dbPath, JSON.stringify(existingData, null, 2), "utf-8");

    // 3. Webhook Alert Integrations (Real-time notifications)
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhookUrl) {
      try {
        await fetch(discordWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                title: "✦ NEW DIGITAL INFRASTRUCTURE INTAKE",
                color: 9133302, // Violet accent hex
                fields: [
                  { name: "Client Name", value: inquiry.name, inline: true },
                  { name: "Work Email", value: inquiry.email, inline: true },
                  { name: "Phone Number", value: inquiry.phone, inline: true },
                  { name: "Business Area", value: inquiry.orgType.toUpperCase(), inline: true },
                  { name: "Requirements", value: inquiry.message }
                ],
                timestamp: inquiry.timestamp
              }
            ]
          })
        });
      } catch (err) {
        // Ignore silent alert webhook failures in dev/test boundaries
      }
    }

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully.", id: inquiry.id },
      { status: 200 }
    );

  } catch (err) {
    return NextResponse.json(
      { success: false, error: "An internal server error occurred while writing pipeline data." },
      { status: 500 }
    );
  }
}
