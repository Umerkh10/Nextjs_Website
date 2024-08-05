import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // Check if BUNDLE_ANALYZE is set
    if (process.env.BUNDLE_ANALYZE) {
      // Add BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `./bundles/${process.env.BUNDLE_ANALYZE}.html`,
        openAnalyzer: false,
      }));
    }

    return config;
  },
};

export default nextConfig;
