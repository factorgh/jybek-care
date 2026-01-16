"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Cookie } from "lucide-react";

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay to avoid immediate popup
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    onDecline?.();
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Icon and Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    We use cookies
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 max-w-2xl">
                    We use cookies and similar technologies to help personalize
                    content, tailor and measure ads, and provide a better
                    experience. By clicking accept, you agree to this, as
                    outlined in our{" "}
                    <a
                      href="/privacy"
                      className="text-brand-600 dark:text-brand-400 hover:underline font-medium"
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Detailed Cookie Options */}
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-3"
                  >
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Essential Cookies
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Required for the site to function
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                      />
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Cookie className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Analytics Cookies
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Help us improve our website
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                      />
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Cookie className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Marketing Cookies
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Used for advertising purposes
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 lg:flex-row lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition-colors text-sm lg:text-base"
                >
                  Accept All
                </button>

                <button
                  onClick={handleDecline}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors text-sm lg:text-base"
                >
                  Decline
                </button>

                <button
                  onClick={handleCustomize}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-colors text-sm lg:text-base"
                >
                  {showDetails ? "Hide Details" : "Customize"}
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
