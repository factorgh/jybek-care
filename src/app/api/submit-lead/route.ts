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

    // Get API key from environment variables (server-side, no NEXT_PUBLIC prefix)
    const apiKey = process.env.JYBEK_API_KEY;
    if (!apiKey) {
      console.error("JYBEK_API_KEY environment variable is not set");
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
      
      let errorMessage = "Failed to submit lead to external service";
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson && typeof errorJson === "object") {
          const firstErrorKey = Object.keys(errorJson)[0];
          const firstErrorVal = errorJson[firstErrorKey];
          if (Array.isArray(firstErrorVal) && firstErrorVal.length > 0) {
            errorMessage = firstErrorVal[0];
          } else if (typeof firstErrorVal === "string") {
            errorMessage = firstErrorVal;
          }
        }
      } catch {
        // Fallback to default message
      }

      return NextResponse.json(
        { error: errorMessage },
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
