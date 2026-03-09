import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactCompiler: true,
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.homexs.uz',
				pathname: '/**'
			}
		]
	}
};

const withNextIntil = createNextIntlPlugin('./src/config/i18n/request.ts')
export default withNextIntil(nextConfig)
