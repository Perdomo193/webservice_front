export default {
	head: {
		title: 'webservice vo',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel:'preconnect', href:'https://fonts.gstatic.com'},
			{ href:'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400&display=swap', rel:'stylesheet' }
		]
	},
	plugins: [
	        '@/plugins/bootstrap-vue.js',
	],
	server: {
		port: 8000
	},
	css: [],
	components: true,
	buildModules: [],
	modules: [],
	build: {},
	
	
	
}
