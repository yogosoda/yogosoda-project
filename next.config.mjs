/** @type {import("next").NextConfig} */
const nextConfig = {
    basePath:"",
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
