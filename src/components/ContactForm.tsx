import React, { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Phone, Clock, Shield, Award } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    "Technical Support",
    "System integration",
    "Server Management",
    "Web Development",
    "IT Consulting",
    "Mobile Services",
    "Data Management",
    "Other",
  ];

  // Real-time validation
  useEffect(() => {
    if (submitStatus?.type === "error") {
      setErrors(validateForm());
    }
  }, [formData, submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s+\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus({
        type: "error",
        message: "Please correct the highlighted fields.",
      });
      // Focus on first error field
      const firstError = Object.keys(validationErrors)[0];
      const errorElement = formRef.current?.querySelector(
        `[name="${firstError}"]`
      ) as HTMLElement;
      errorElement?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Enhanced fetch with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        "https://formsubmit.co/ajax/midas.prabesh@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Contact Request - ${formData.service}`,
            _template: "box",
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(await response.text());

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! We've received your message and will respond within 24 hours.",
      });

      // Track conversion (example)
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-123456789/AbC-D_efGhIjKlMnOpQrSt",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error 
          ? error.message 
          : "Network error occurred. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Field focus effects
  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    e.currentTarget.parentElement?.classList.add("ring-2", "ring-primary/50");
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    e.currentTarget.parentElement?.classList.remove("ring-2", "ring-primary/50");
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-accent-50 to-accent-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider rounded-full bg-primary/10 text-primary uppercase">
              Professional IT Support
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expert IT Solutions
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our certified professionals for reliable, enterprise-grade IT services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Why Partner With Us?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Certified Excellence</h4>
                      <p className="text-gray-600 mt-1">
                        Microsoft Gold Partners with 5+ industry certifications
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                      <p className="text-gray-600 mt-1">
                        Enterprise-grade support with 99.9% uptime SLA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Security First</h4>
                      <p className="text-gray-600 mt-1">
                        GDPR-compliant processes with end-to-end encryption
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-8 h-8 text-white" />
                  <h4 className="text-xl font-semibold text-white">Critical Support</h4>
                </div>
                <p className="text-white/90 mb-6">
                  For urgent enterprise issues, our priority response team is available 24/7.
                </p>
                <a
                  href="tel:+977-980-230-1091"
                  className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 ${isHovered ? 'animate-pulse' : ''}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Hotline: +977-980-230-1091
                </a>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-primary to-accent p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Request a Consultation
                </h3>
                <p className="text-white/90 mt-2">
                  Complete this form and we'll contact you within 2 business hours
                </p>
              </div>
              
              <div className="p-8">
                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{submitStatus.message}</p>
                      {submitStatus.type === "error" && (
                        <button
                          type="button"
                          className="mt-2 text-sm underline"
                          onClick={() => setSubmitStatus(null)}
                        >
                          Try again
                        </button>
                      )}
                    </div>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <div className={`transition-all duration-200 ${errors.name ? 'has-error' : ''}`}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                      placeholder="John Doe"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`transition-all duration-200 ${errors.email ? 'has-error' : ''}`}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                        placeholder="your@email.com"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className={`transition-all duration-200 ${errors.phone ? 'has-error' : ''}`}>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                        placeholder="+977 980000000"
                        required
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-2 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={`transition-all duration-200 ${errors.service ? 'has-error' : ''}`}>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border ${
                        errors.service ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")] bg-no-repeat bg-[right_1rem_center] bg-[length:1em]`}
                      required
                      aria-invalid={!!errors.service}
                      aria-describedby="service-error"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-2 text-sm text-red-600">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className={`transition-all duration-200 ${errors.message ? 'has-error' : ''}`}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full px-4 py-3 border ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none`}
                      placeholder="Describe your project requirements, timeline, and budget..."
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby="message-error"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Minimum 20 characters. Current: {formData.message.length}
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-medium transition-all duration-200 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 focus:ring-4 focus:ring-primary/30 shadow-md hover:shadow-lg"
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Request Professional Consultation</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="underline hover:text-primary">
                      privacy policy
                    </a>
                    . We'll never share your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;