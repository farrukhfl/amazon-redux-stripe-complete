/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"fakestoreapi.com",
                port: "",
                protocol: "https"
            },
            {
                hostname: "images-eu.ssl-images-amazon.com",
                port: "",
                protocol: "https"
            }
        ]
    }
};

export default nextConfig;
