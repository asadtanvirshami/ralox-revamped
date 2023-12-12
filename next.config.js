/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // inline files smaller than 8kb
            fallback: 'file-loader', // fallback to file-loader for larger files
            publicPath: '/_next/static/images', // the path on the server where the file will be
            outputPath: 'static/images', // the path on the server where the file will be
            name: '[name].[hash].[ext]', // the file name
          },
        },
      ],
    });

    if (!isServer) {
      // Prevent file-loader from being applied to svg files that are imported as React components.
      // This enables importing SVGs as React components with `import Logo from '../public/logo.svg';`
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
};

module.exports = nextConfig;
