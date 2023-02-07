module.exports = {
    root:true,
    env: {  //variables de entorno
        browser: true, //nos permite trabajar con el browser
        amd: true, // para el manejo de diferentes protocolos internos
        node: true,
        es6: true
    }, 
    extends:[ //me permite utilizar diferentes plugin
        'eslint:recommended', // la recomendacion por defecto
        'plugin:jsx-a11y/recommended', // el plugin de la accesibilidad
        'plugin:prettier/recommended',  // para lo que es la configuracion base de los punto y comas
        'next',
        'next/core-web-vitals',
    ],
    rules: {   //para implementar reglas
        'semi': ['error', 'always'],  // cada que no haya punto y coma saldra un error
    }
}