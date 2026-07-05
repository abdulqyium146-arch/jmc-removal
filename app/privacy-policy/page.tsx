import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE_URL, BUSINESS_NAME, BUSINESS_EMAIL, BUSINESS_ADDRESS, BUSINESS_PHONE } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | JMC Removals",
  description: "JMC Removals privacy policy — how we collect, use and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto prose-content">
          <h1>Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

          <h2>1. Who We Are</h2>
          <p>
            {BUSINESS_NAME} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a removal company based at {BUSINESS_ADDRESS.street}, {BUSINESS_ADDRESS.area}, {BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.postcode}. You can contact us at {BUSINESS_EMAIL} or by calling {BUSINESS_PHONE}.
          </p>

          <h2>2. What Information We Collect</h2>
          <p>We collect information you provide when:</p>
          <ul>
            <li>Requesting a quote via our website form</li>
            <li>Calling or emailing us</li>
            <li>Making a booking</li>
          </ul>
          <p>This may include your name, address, phone number, email address and details about your move.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to your enquiries</li>
            <li>Process and manage your booking</li>
            <li>Contact you about your move</li>
          </ul>

          <h2>4. How We Store Your Information</h2>
          <p>We store your information securely and retain it only as long as necessary to provide our services and comply with legal obligations. We will not sell your personal data to third parties.</p>

          <h2>5. Your Rights</h2>
          <p>Under UK GDPR, you have the right to access, correct or delete your personal data. To exercise these rights, contact us at {BUSINESS_EMAIL}.</p>

          <h2>6. Cookies</h2>
          <p>Our website uses essential cookies to ensure it functions properly. We do not use tracking or advertising cookies without your consent.</p>

          <h2>7. Contact</h2>
          <p>If you have questions about this policy, contact us at {BUSINESS_EMAIL} or {BUSINESS_PHONE}.</p>
        </div>
      </div>
    </div>
  );
}
