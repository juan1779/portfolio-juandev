/**
 * @JuanSantil Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} caseURL Url del para info del caso
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @JuanSantil Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/tricer.png',
		title: 'Tricer',
		skills: ['Liquid', 'Tailwind'],
		descripcion:
			"Join us on this journey to maximize your performance and enjoy nature to the fullest. With Tricer, you'll be equipped to conquer every adventure.",
		demoURL: 'https://tricer.com/',
		repoURL: '',
		caseURL: "/blog/tricer/",
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/cosmetics.png',
		title: 'Grande Cosmetics',
		skills: ['Liquid', 'Sass'],
		descripcion:
			"Living grande means claiming your confidence & building a life that’s bigger than beauty. It means treating yourself better than you did yesterday",
		demoURL: 'https://grandecosmetics.com/',
		repoURL: '',
		caseURL: "/blog/cosmetics/",
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/sweet.png',
		title: 'Restaurant',
		skills: ['Liquid', 'Tailwind'],
		descripcion:
			"Santil Sweet is a tasting store oriented to a world full of flavor and joy which offers a wide variety of sweets. Password to enter: tohbla",
		demoURL: 'https://santil-sweets.myshopify.com/',
		repoURL: 'https://github.com/juan1779/santil-sweets',
		caseURL: "/blog/sweet",
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/cook.png',
		title: 'Restaurant',
		skills: ['React', 'Tailwind'],
		descripcion:
			"Welcome to our online gourmet marketplace featuring a wide selection of the finest foods and spices from around the world.",
		demoURL: 'https://landing-food.netlify.app/',
		repoURL: 'https://github.com/juan1779/Landing-food',
		caseURL: "/blog/restaurant/",
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/secure.png',
		title: 'Landing Page',
		skills: ['React', 'Tailwind'],
		descripcion:
			"Unleash the power of blockchain technology with our services. Whether you're a business looking to streamline your operations.",
		demoURL: 'https://landing-page-block.netlify.app/',
		repoURL: 'https://github.com/juan1779/LandingPage',
		caseURL: '/blog/secure',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/login.png',
		title: 'Login',
		skills: ['React', 'CSS'],
		descripcion:
			"This project is a login simulation created using React, Redux, and localStorage. The application allows users to sign in and out.",
		demoURL: 'https://login-react-redux-localstorage.netlify.app/',
		repoURL: 'https://github.com/juan1779/Login-React',
		caseURL: '/blog/login/',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/referente.png',
		title: 'El Referente',
		skills: ['Wordpress', 'JavaScript', 'PHP'],
		descripcion:
			'El Referente is the leading magazine on startups and innovation in Spain, created and managed by a dynamic team of journalists based in Madrid.',
		demoURL: 'https://elreferente.es/',
		repoURL: '',
		caseURL: '/blog/referente/',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/lovedrops.png',
		title: 'LoveDrops',
		skills: ['Wordpress', 'JavaScript', 'PHP'],
		descripcion:
			'We are driven by a simple yet profound belief: love, kindness, and compassion have the power to transform the world.',
		demoURL: 'https://www.lovedrops.org/',
		repoURL: '',
		caseURL: '/blog/lovedrops/',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/jamie.png',
		title: 'Jamie Stern',
		skills: ['Wordpress', 'JavaScript', 'PHP'],
		descripcion:
			'At Jamie Stern view every project as an opportunity to prove ourselves to our customers and we do so by offering exceptional quality.',
		demoURL: 'https://jamiesterndesign.com/',
		repoURL: '',
		caseURL: '/blog/jamie/',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Liquid: 'logos:shopify',
	PHP: 'skill-icons:php-dark',
	Wordpress: 'skill-icons:wordpress',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
