import withBundleAnalyzer from '@next/bundle-analyzer';

const config = {
  enabled: process.env.ANALYZE === 'true',
};

export default withBundleAnalyzer(config)({
  // Your existing Next.js config here
});
