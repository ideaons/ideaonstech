import { NextResponse } from "next/server";

// ============================================================================
// SECURE SERVER-SIDE CONFIGURATION (Never exposed to the client bundle)
// ============================================================================
const SECURE_FALLBACK_NUMBER = "918076620320"; // Secure server fallback number
const DEFAULT_MESSAGE = "Hi IDEOANS! I am visiting your website and would love to discuss custom digital infrastructure solutions for my business.";

export async function GET(request: Request) {
  try {
    // 1. Extract the secure phone number from server environment variables (or fallback)
    const whatsappNumber = process.env.WHATSAPP_NUMBER || SECURE_FALLBACK_NUMBER;
    
    // 2. Parse any custom message passed by the client if needed (optional extension)
    const { searchParams } = new URL(request.url);
    const textMessage = searchParams.get("text") || DEFAULT_MESSAGE;
    
    // 3. Construct the redirection URL securely on the server
    const targetUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    
    // 4. Perform a secure server-side redirect (302 Found)
    return NextResponse.redirect(targetUrl, 302);
  } catch (error) {
    console.error("Secure WhatsApp redirect failed:", error);
    // If anything fails, redirect securely to a clean fallback URL or your homepage
    return NextResponse.redirect(new URL("/", request.url), 302);
  }
}
