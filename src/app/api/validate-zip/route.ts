import { NextRequest, NextResponse } from 'next/server';

interface ZipValidationResponse {
  valid: boolean;
  zipCode: string;
  city?: string;
  state?: string;
  stateAbbr?: string;
  country?: string;
  error?: string;
}

// Basic format validation for US ZIP codes
function isValidZipFormat(zip: string): boolean {
  // Accepts 5 digits or 5+4 format (12345 or 12345-6789)
  const zipRegex = /^\d{5}(?:[-\s]?\d{4})?$/;
  return zipRegex.test(zip);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const zipCode = searchParams.get('zip');

  if (!zipCode) {
    return NextResponse.json<ZipValidationResponse>(
      { valid: false, zipCode: '', error: 'ZIP code is required' },
      { status: 400 }
    );
  }

  // Clean the ZIP code (remove spaces, keep only first 5 digits for lookup)
  const cleanZip = zipCode.replace(/\s/g, '').substring(0, 5);

  // Check basic format
  if (!isValidZipFormat(zipCode)) {
    return NextResponse.json<ZipValidationResponse>(
      { valid: false, zipCode, error: 'Invalid ZIP code format' },
      { status: 400 }
    );
  }

  try {
    // Use zippopotam.us API (free, no API key required)
    const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`, {
      headers: {
        'Accept': 'application/json',
      },
      // Cache for 24 hours since ZIP data rarely changes
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json<ZipValidationResponse>(
          { valid: false, zipCode, error: 'ZIP code not found' },
          { status: 404 }
        );
      }
      throw new Error('Failed to validate ZIP code');
    }

    const data = await response.json();

    // zippopotam.us returns places array with city and state info
    const place = data.places?.[0];

    return NextResponse.json<ZipValidationResponse>({
      valid: true,
      zipCode: cleanZip,
      city: place?.['place name'] || undefined,
      state: place?.['state'] || undefined,
      stateAbbr: place?.['state abbreviation'] || undefined,
      country: data.country || 'United States',
    });
  } catch (error) {
    console.error('ZIP validation error:', error);
    
    // If external API fails, fall back to format validation only
    return NextResponse.json<ZipValidationResponse>({
      valid: true, // Format is valid, just couldn't verify
      zipCode: cleanZip,
      error: 'Could not verify ZIP code details, but format is valid',
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { zipCode } = body;

    if (!zipCode) {
      return NextResponse.json<ZipValidationResponse>(
        { valid: false, zipCode: '', error: 'ZIP code is required' },
        { status: 400 }
      );
    }

    // Clean the ZIP code
    const cleanZip = String(zipCode).replace(/\s/g, '').substring(0, 5);

    // Check basic format
    if (!isValidZipFormat(String(zipCode))) {
      return NextResponse.json<ZipValidationResponse>(
        { valid: false, zipCode: String(zipCode), error: 'Invalid ZIP code format' },
        { status: 400 }
      );
    }

    try {
      // Use zippopotam.us API
      const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`, {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          return NextResponse.json<ZipValidationResponse>(
            { valid: false, zipCode: cleanZip, error: 'ZIP code not found' },
            { status: 404 }
          );
        }
        throw new Error('Failed to validate ZIP code');
      }

      const data = await response.json();
      const place = data.places?.[0];

      return NextResponse.json<ZipValidationResponse>({
        valid: true,
        zipCode: cleanZip,
        city: place?.['place name'] || undefined,
        state: place?.['state'] || undefined,
        stateAbbr: place?.['state abbreviation'] || undefined,
        country: data.country || 'United States',
      });
    } catch {
      // If external API fails, fall back to format validation only
      return NextResponse.json<ZipValidationResponse>({
        valid: true,
        zipCode: cleanZip,
        error: 'Could not verify ZIP code details, but format is valid',
      });
    }
  } catch {
    return NextResponse.json<ZipValidationResponse>(
      { valid: false, zipCode: '', error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
