module.exports = {
    mode: 'spa',

    /*
     ** Headers of the page
     */
    head: {
        title: 'Color Room Films',
        meta: [
            { property: 'og:title', content: 'Color Room Films' },
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Wedding Videography & Cinematography | Ocean and Monmouth County, Jackson, NJ' },
            { property: 'og:description', content: 'Wedding Videography & Cinematography | Ocean and Monmouth County, Jackson, NJ' },
            { name: 'msapplication-TileColor', content: '#26a69a' },
            { name: 'msapplication-TileImage', content: '/images/icons/ms-icon-144x144png' },
            { name: 'theme-color', content: '#26a69a' },
            { name: 'msapplication-navbutton-color', content: '#26a69a' },
            { name: 'apple-mobile-web-app-status-bar-style', content: '#26a69a' },
            { property: 'og:url', content: 'https://colorroomfilms.com' },
            { property: 'og:site_name', content: 'Color Room Films' },
            { property: 'og:image', content: 'https://colorroomfilms.com/images/heros/home/1440p.jpg' },
            { name: 'twitter:card', content: 'https://colorroomfilms.com/images/heros/home/1440p.jpg' },
            { name: 'twitter:site', content: '@colorroomfilms' },
            { name: 'twitter:creator', content: '@dinsmoredesign' },
            { property: 'fb:admins', content: '946947812026207' },
            { property: 'article:publisher', content: '946947812026207' },
            { property: 'fb:app_id', content: '946947812026207' }
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/images/icons/favicon.ico'
            },
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/images/icons/favicon.ico'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '57x57',
                href: '/images/icons/apple-icon-57x57.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '60x60',
                href: '/images/icons/apple-icon-60x60.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '72x72',
                href: '/images/icons/apple-icon-72x72.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '76x76',
                href: '/images/icons/apple-icon-76x76.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '114x114',
                href: '/images/icons/apple-icon-114x114.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '120x120',
                href: '/images/icons/apple-icon-120x120.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '144x144',
                href: '/images/icons/apple-icon-144x144.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: '/images/icons/apple-icon-152x152.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/images/icons/apple-icon-180x180.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '192x192',
                href: '/images/icons/android-icon-192x192.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/images/icons/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                href: '/images/icons/favicon-96x96.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/images/icons/favicon-16x16.png'
            },
            { rel: 'manifest', href: '/images/icons/manifest.json' },
            { rel: 'canonical', href: 'https://colorroomfilms.com' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#71cbd2' },

    /*
     ** Global CSS
     */
    css: [
        { src: 'flexboxgrid/css/flexboxgrid.min.css', lang: 'css' },
        { src: '~/assets/fonts.scss', lang: 'scss' }
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/ga.js', ssr: false }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/sitemap'
    ],

    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Sitemap module configuration
     */
    sitemap: {
        // See https://github.com/nuxt-community/sitemap-module
        generate: true,
        path: '/sitemap.xml',
        hostname: 'https://www.colorroomfilms.com',
        cacheTime: 1000 * 60 * 15,
        gzip: true
    },

    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
		},
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {
			
		}
    }
};
