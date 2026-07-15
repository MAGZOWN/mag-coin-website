import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://coinmagbase.com/sitemap.xml",
    host: "https://coinmagbase.com",
  };
}
