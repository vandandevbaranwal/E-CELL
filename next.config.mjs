import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    deviceSizes: [360, 390, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "ecell",
    project: "ecell-iet",
    dryRun: !process.env.SENTRY_AUTH_TOKEN,
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: false,
  }
);