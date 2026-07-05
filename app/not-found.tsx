import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { BUSINESS_PHONE, formatPhoneForTel } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center py-24">
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 mb-8">
        <span className="text-4xl font-extrabold text-brand-600">404</span>
      </div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 max-w-md mb-10">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. Try navigating from our homepage or give us a call.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <a href={formatPhoneForTel(BUSINESS_PHONE)} className="btn-secondary">
          <Phone className="h-4 w-4" />
          {BUSINESS_PHONE}
        </a>
      </div>
    </div>
  );
}
