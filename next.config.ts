import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true
}

const withNextIntil = createNextIntlPlugin()
export default withNextIntil(nextConfig)
