/** @type {import('next').NextConfig} */
const nextConfig = {   //son las reglas que va tener next para leer nuestro proyecto
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'http://placeimg.com'],
  }
}

module.exports = nextConfig
