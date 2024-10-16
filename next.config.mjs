/** @type {import("next").NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
                'url-loader',
            ],
        });

        return config;
    },
    images: {
        domains: ['image.shop.kt.com'],
    },
    basePath: '',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/direct',
                permanent:false
            },
        ];
    },
};

export default nextConfig;
