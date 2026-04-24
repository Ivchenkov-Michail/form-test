import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              exportType: 'default',
              dimensions: false,
              icon: true,
            }
          },
        ],
        as: '*.js',
      },
    },
  },
}

export default nextConfig