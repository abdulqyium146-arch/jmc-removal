import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_EMAIL } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms & Conditions | JMC Removals",
  description: "JMC Removals terms and conditions — the terms that govern our removal services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto prose-content">
          <h1>Terms & Conditions</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

          <h2>1. Agreement</h2>
          <p>
            These terms and conditions govern the relationship between {BUSINESS_NAME} (&quot;the Company&quot;) and the customer (&quot;you&quot;). By booking our services, you agree to these terms.
          </p>

          <h2>2. Quotations</h2>
          <p>All quotations are provided free of charge and without obligation. Quotes are valid for 30 days from the date of issue. The Company reserves the right to revise a quote if the scope of work changes.</p>

          <h2>3. Booking & Payment</h2>
          <p>A deposit may be required to secure your booking. Full payment is due on the day of the move unless otherwise agreed in writing. We accept cash, bank transfer and card payments.</p>

          <h2>4. Cancellation</h2>
          <p>Cancellations made more than 7 days before the moving date will receive a full refund of any deposit paid. Cancellations within 7 days may forfeit the deposit.</p>

          <h2>5. Insurance & Liability</h2>
          <p>The Company carries comprehensive removal insurance. Liability for loss or damage is limited to the Company&apos;s insurance policy terms. Items not declared at the time of booking may not be covered.</p>

          <h2>6. Customer Responsibilities</h2>
          <p>You are responsible for ensuring all items to be moved are properly packed unless packing has been arranged with the Company. You must ensure access to all properties is available on the moving date.</p>

          <h2>7. Complaints</h2>
          <p>Any complaints should be made in writing within 7 days of the move to {BUSINESS_EMAIL}.</p>

          <h2>8. Contact</h2>
          <p>For questions about these terms, contact us at {BUSINESS_PHONE} or {BUSINESS_EMAIL}.</p>
        </div>
      </div>
    </div>
  );
}
