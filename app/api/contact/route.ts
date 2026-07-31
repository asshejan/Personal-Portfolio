import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";
import { sendContactEmail } from "@/lib/mail";

// Simple in-memory rate limiting per IP
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-ip";
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    // Limit to 1 request per 30 seconds
    if (lastRequest && now - lastRequest < 30000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait 30 seconds before sending another message." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { isValid, errors } = validateContactForm(body);

    if (!isValid) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }

    rateLimitMap.set(ip, now);

    const result = await sendContactEmail(body);

    return NextResponse.json({
      message: "Your message has been sent successfully!",
      simulated: result.simulated
    });
  } catch (error: any) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later or email directly." },
      { status: 500 }
    );
  }
}
