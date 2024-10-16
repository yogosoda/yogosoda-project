/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.shop.kt.com'],
    }, // 여기에 외부 도메인을 추가
    basePath: '',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/direct',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
