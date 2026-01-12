import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ["zip_code"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Get API key from environment variables
    const apiKey = process.env.NEXT_PUBLIC_JYBEK_API_KEY;
    if (!apiKey) {
      console.error(
        "NEXT_PUBLIC_JYBEK_API_KEY environment variable is not set"
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare payload for external API
    const payload = {
      street: body.street || "",
      apt_suite: body.apt_suite || "",
      city: body.city || "",
      state: body.state || "",
      zip_code: body.zip_code,
      contact_full_name: body.contact_full_name || "",
      contact_phone: body.contact_phone || "",
      contact_email: body.contact_email || "",
      relationship_to_recipient: body.relationship_to_recipient || "",
      care_recipient_full_name: body.care_recipient_full_name || "",
      care_recipient_phone: body.care_recipient_phone || "",
      care_recipient_email: body.care_recipient_email || "",
    };

    // Make request to external API
    const response = await fetch(
      "https://connect.jybekhomecares.com/leads/populate-from-api/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apiKey,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit lead to external service" },
        { status: response.status }
      );
    }

    const result = await response.json();

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      data: result,
    });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
