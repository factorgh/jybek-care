"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Input } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Clock,
  Heart,
  User,
  Users,
  MapPin,
  AlertCircle,
  Loader2,
} from "lucide-react";

// ZIP code validation regex (US 5-digit or 5+4 format)
const ZIP_CODE_REGEX = /^\d{5}(-\d{4})?$/;

interface ZipValidationResult {
  valid: boolean;
  city?: string;
  state?: string;
  stateAbbr?: string;
  error?: string;
}

/**
 * Lead capture form - Jybek collects user info to reach out and provide care services
 */
export function FindCareForm() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1", // Default to US
    zipCode: "",
    isForSelf: "", // 'yes' = for themselves, 'no' = for someone else
    street: "",
    aptSuite: "",
    city: "",
    state: "",
    relationshipToRecipient: "",
  });

  // ZIP validation state
  const [zipValidating, setZipValidating] = useState(false);
  const [zipValidationResult, setZipValidationResult] =
    useState<ZipValidationResult | null>(null);
  const [zipTouched, setZipTouched] = useState(false);

  // Validate ZIP code via API
  const validateZipCode = useCallback(async (zip: string) => {
    if (!ZIP_CODE_REGEX.test(zip.trim())) {
      setZipValidationResult(null);
      return;
    }

    setZipValidating(true);
    try {
      const response = await fetch(
        `/api/validate-zip?zip=${encodeURIComponent(zip.trim())}`
      );
      const data = await response.json();
      setZipValidationResult(data);
    } catch {
      // On error, allow form submission (format is valid)
      setZipValidationResult({ valid: true });
    } finally {
      setZipValidating(false);
    }
  }, []);

  // Pre-populate ZIP code from URL params and validate it
  useEffect(() => {
    const zipFromUrl = searchParams.get("zip");
    if (zipFromUrl) {
      setFormData((prev) => ({ ...prev, zipCode: zipFromUrl }));
      setZipTouched(true);
      // Validate the pre-populated ZIP
      validateZipCode(zipFromUrl);
    }
  }, [searchParams, validateZipCode]);

  // Validate ZIP code when it changes (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.zipCode.trim().length >= 5) {
        validateZipCode(formData.zipCode);
      } else {
        setZipValidationResult(null);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [formData.zipCode, validateZipCode]);

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d-]/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, zipCode: value }));
  };

  const handleRadioChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Check if ZIP is valid
  const isZipFormatValid = ZIP_CODE_REGEX.test(formData.zipCode.trim());
  const isZipValid =
    isZipFormatValid &&
    (zipValidationResult === null || zipValidationResult.valid);
  const showZipFormatError =
    zipTouched && formData.zipCode.length > 0 && !isZipFormatValid;
  const showZipApiError =
    zipTouched &&
    isZipFormatValid &&
    zipValidationResult &&
    !zipValidationResult.valid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isZipValid || zipValidating) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare the API payload based on radio button selection
      const payload = {
        street: formData.street,
        apt_suite: formData.aptSuite,
        city: formData.city || zipValidationResult?.city || "",
        state:
          formData.state ||
          zipValidationResult?.stateAbbr ||
          zipValidationResult?.state ||
          "",
        zip_code: formData.zipCode,
        // Dynamic fields based on who the care is for
        ...(formData.isForSelf === "yes"
          ? {
              contact_full_name: `${formData.firstName} ${formData.lastName}`,
              contact_phone: `${formData.countryCode}${formData.phone}`,
              contact_email: formData.email,
              relationship_to_recipient: "",
              care_recipient_full_name: "",
              care_recipient_phone: "",
              care_recipient_email: "",
            }
          : {
              contact_full_name: "",
              contact_phone: "",
              contact_email: "",
              relationship_to_recipient: formData.relationshipToRecipient,
              care_recipient_full_name: `${formData.firstName} ${formData.lastName}`,
              care_recipient_phone: `${formData.countryCode}${formData.phone}`,
              care_recipient_email: formData.email,
            }),
      };

      // Send to our secure API route instead of external API directly
      const apiKey = process.env.NEXT_PUBLIC_JYBEK_API_KEY;
      if (!apiKey) {
        console.error(
          "NEXT_PUBLIC_JYBEK_API_KEY environment variable is not set"
        );
        throw new Error("Server configuration error");
      }
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
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Failed to submit your request. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </motion.div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We&apos;ve received your information. A Jybek care specialist will
              reach out to you within 24 hours to discuss your care needs and
              how we can help.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Need to speak with us sooner?
              </p>
              <a
                href="tel:+1 888-717-5009"
                className="inline-flex items-center gap-2 text-xl font-bold text-brand-600"
              >
                <Phone className="w-5 h-5" />
                +1 888-717-5009
              </a>
            </div>

            <Link href="/">
              <Button variant="outline" size="lg">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Started with Jybek Home Care
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Share your details and our care team will reach out to discuss how
            we can help.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Request a Consultation
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Tell us a little about yourself and we&apos;ll contact you to
                discuss your care needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Is this for yourself? Radio Buttons */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Are you requesting care for yourself?
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {/* Yes - For myself */}
                  <label
                    className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.isForSelf === "yes"
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="isForSelf"
                      value="yes"
                      checked={formData.isForSelf === "yes"}
                      onChange={() => handleRadioChange("isForSelf", "yes")}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        formData.isForSelf === "yes"
                          ? "bg-brand-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                      }`}
                    >
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${
                          formData.isForSelf === "yes"
                            ? "text-brand-700 dark:text-brand-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        Yes, for myself
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        I need care services
                      </p>
                    </div>
                    {formData.isForSelf === "yes" && (
                      <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-brand-500" />
                    )}
                  </label>

                  {/* No - For someone else */}
                  <label
                    className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.isForSelf === "no"
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="isForSelf"
                      value="no"
                      checked={formData.isForSelf === "no"}
                      onChange={() => handleRadioChange("isForSelf", "no")}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        formData.isForSelf === "no"
                          ? "bg-brand-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                      }`}
                    >
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${
                          formData.isForSelf === "no"
                            ? "text-brand-700 dark:text-brand-400"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        No, for someone else
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A family member or friend
                      </p>
                    </div>
                    {formData.isForSelf === "no" && (
                      <CheckCircle className="absolute top-3 right-3 w-5 h-5 text-brand-500" />
                    )}
                  </label>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Your Contact Information
                </p>
              </div>

              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  required
                />
                <Input
                  label="Last Name"
                  placeholder="Smith"
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  required
                />
              </div>

              {/* Email */}
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange("email")}
                required
              />

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        countryCode: e.target.value,
                      }))
                    }
                    className="px-3 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                  >
                    <optgroup label="North America">
                      <option value="+1">🇺🇸 United States (+1)</option>
                      <option value="+1">🇨🇦 Canada (+1)</option>
                      <option value="+52">🇲🇽 Mexico (+52)</option>
                    </optgroup>
                    <optgroup label="Europe">
                      <option value="+44">🇬🇧 United Kingdom (+44)</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                      <option value="+49">🇩🇪 Germany (+49)</option>
                      <option value="+39">🇮🇹 Italy (+39)</option>
                      <option value="+34">🇪🇸 Spain (+34)</option>
                      <option value="+31">�🇱 Netherlands (+31)</option>
                      <option value="+41">�🇨� Switzerland (+41)</option>
                      <option value="+46">🇸🇪 Sweden (+46)</option>
                      <option value="+47">🇳🇴 Norway (+47)</option>
                      <option value="+45">🇩🇰 Denmark (+45)</option>
                      <option value="+358">🇫🇮 Finland (+358)</option>
                      <option value="+43">🇦🇹 Austria (+43)</option>
                      <option value="+32">🇧🇪 Belgium (+32)</option>
                      <option value="+351">�� Portugal (+351)</option>
                      <option value="+48">🇵🇱 Poland (+48)</option>
                    </optgroup>
                    <optgroup label="Asia">
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+86">🇨🇳 China (+86)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+82">🇰🇷 South Korea (+82)</option>
                      <option value="+65">🇸🇬 Singapore (+65)</option>
                      <option value="+60">🇲🇾 Malaysia (+60)</option>
                      <option value="+66">🇹🇭 Thailand (+66)</option>
                      <option value="+62">🇮🇩 Indonesia (+62)</option>
                      <option value="+63">🇵🇭 Philippines (+63)</option>
                      <option value="+84">🇻🇳 Vietnam (+84)</option>
                      <option value="+852">🇭🇰 Hong Kong (+852)</option>
                      <option value="+886">🇹🇼 Taiwan (+886)</option>
                    </optgroup>
                    <optgroup label="Africa">
                      <option value="+233">🇬🇭 Ghana (+233)</option>
                      <option value="+234">🇳🇬 Nigeria (+234)</option>
                      <option value="+27">🇿🇦 South Africa (+27)</option>
                      <option value="+254">🇰🇪 Kenya (+254)</option>
                      <option value="+256">🇺🇬 Uganda (+256)</option>
                      <option value="+251">🇪🇹 Ethiopia (+251)</option>
                      <option value="+20">��🇬 Egypt (+20)</option>
                      <option value="+212">🇲🇦 Morocco (+212)</option>
                      <option value="+216">🇹🇳 Tunisia (+216)</option>
                      <option value="+213">🇩🇿 Algeria (+213)</option>
                      <option value="+24">🇿🇦 South Africa (+27)</option>
                    </optgroup>
                    <optgroup label="Oceania">
                      <option value="+61">🇦🇺 Australia (+61)</option>
                      <option value="+64">🇳🇿 New Zealand (+64)</option>
                      <option value="+679">🇫🇯 Fiji (+679)</option>
                      <option value="+682">🇨🇰 Cook Islands (+682)</option>
                    </optgroup>
                    <optgroup label="South America">
                      <option value="+55">🇧🇷 Brazil (+55)</option>
                      <option value="+54">🇦🇷 Argentina (+54)</option>
                      <option value="+56">🇨🇱 Chile (+56)</option>
                      <option value="+57">🇨🇴 Colombia (+57)</option>
                      <option value="+51">🇵🇪 Peru (+51)</option>
                      <option value="+58">🇻🇪 Venezuela (+58)</option>
                      <option value="+593">🇪🇨 Ecuador (+593)</option>
                    </optgroup>
                    <optgroup label="Middle East">
                      <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                      <option value="+971">
                        🇦🇪 United Arab Emirates (+971)
                      </option>
                      <option value="+968">🇴🇲 Oman (+968)</option>
                      <option value="+973">🇧🇭 Bahrain (+973)</option>
                      <option value="+965">🇰🇼 Kuwait (+965)</option>
                      <option value="+962">🇯🇴 Jordan (+962)</option>
                      <option value="+964">🇮🇶 Iraq (+964)</option>
                    </optgroup>
                  </select>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    className="flex-1 px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Relationship field - only show when applying for someone else */}
              {formData.isForSelf === "no" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Relationship to Care Recipient
                  </label>
                  <select
                    value={formData.relationshipToRecipient}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        relationshipToRecipient: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 focus:border-brand-500 focus:ring-brand-500/10 transition-all"
                    required
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                    <option value="sibling">Sibling</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {/* ZIP Code with Validation */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  ZIP Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={handleZipChange}
                    onBlur={() => setZipTouched(true)}
                    placeholder="Enter your ZIP code"
                    maxLength={10}
                    className={`w-full px-4 py-3 text-base rounded-xl border-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-4 transition-all ${
                      showZipFormatError || showZipApiError
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                        : zipValidationResult?.valid
                        ? "border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/10"
                        : "border-gray-300 dark:border-gray-700 focus:border-brand-500 focus:ring-brand-500/10"
                    }`}
                    required
                  />
                  {/* Loading indicator */}
                  {zipValidating && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Loader2 className="w-5 h-5 text-brand-500 animate-spin" />
                    </div>
                  )}
                </div>

                {/* Format error */}
                {showZipFormatError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 text-sm text-red-500"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Please enter a valid 5-digit ZIP code
                  </motion.p>
                )}

                {/* API error (ZIP not found) */}
                {showZipApiError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 text-sm text-red-500"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {zipValidationResult?.error || "ZIP code not found"}
                  </motion.p>
                )}

                {/* Location display on success */}
                {zipValidationResult?.valid && zipValidationResult.city && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-1 text-sm text-emerald-600"
                  >
                    <MapPin className="w-4 h-4" />
                    {zipValidationResult.city},{" "}
                    {zipValidationResult.stateAbbr || zipValidationResult.state}
                  </motion.p>
                )}
              </div>

              {/* Error Display */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm font-medium">{submitError}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  fullWidth
                  size="xl"
                  disabled={!isZipValid || zipValidating || isSubmitting}
                  className={`text-base font-semibold ${
                    !isZipValid || zipValidating || isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  rightIcon={
                    isSubmitting || zipValidating ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )
                  }
                >
                  {isSubmitting
                    ? "Submitting..."
                    : zipValidating
                    ? "Validating ZIP..."
                    : "Request a Call Back"}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center gap-6 pt-4">
                {[
                  { icon: Shield, text: "Free Consultation" },
                  { icon: Clock, text: "Quick Response" },
                  { icon: Heart, text: "No Obligation" },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <item.icon className="w-4 h-4 text-emerald-500" />
                    {item.text}
                  </span>
                ))}
              </div>
            </form>
          </div>

          {/* Phone CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-white/70 mb-2">
              Want to speak with us directly?
            </p>
            <a
              href="tel:+1 888-717-5009"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-brand-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call +1 888-717-5009
            </a>
            <p className="text-white/50 text-sm mt-1">Available 24/7</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            className="dark:fill-gray-950"
          />
        </svg>
      </div>
    </section>
  );
}
