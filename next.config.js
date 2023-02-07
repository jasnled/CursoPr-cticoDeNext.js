/** @type {import('next').NextConfig} */
const nextConfig = {   //son las reglas que va tener next para leer nuestro proyecto
  reactStrictMode: true,
  env: {   //variables de entorno
    customKey: 'customValue',  // para que cuando yo necesite a nivel de produccion tener acceso a estos valores
  },
  basePath: '/dist',  // donde se encuentra nuestro proyecto
  compress: true, //la forma en la que vamos a presentar y comprimir nuestro proyecto. Si se tiene activo va a utilizar el protocolo gzip
  async redirects(){// redirecciones cuando se controla de next hay urls que se necesitan enviar a otra seccion
    return [
      {
        source:'/hola',  // cuando se ingresa en el siguiente end point
        destination: 'https://github.com/jasnled', // se redirecciona a la RUTA indicada, por ejmplo './' o un url
        permanent: true, //indica si esta redireccion es permanente

      }
    ]
  },

}

module.exports = nextConfig
