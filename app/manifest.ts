import type { MetadataRoute } from "next";
import { BUSINESS_NAME, SITE_URL } from "@/lib/utils";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: "JMC Removals",
    description: "Professional house removals, man & van and house clearance in Warrington, Cheshire.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      { src: "/icon.svg",  sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon.png",  sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
