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
		imgSrc: '../../../public/img/cook.png',
		title: 'Restaurant',
		skills: ['React', 'Tailwind'],
		descripcion:
			"Welcome to our online gourmet marketplace featuring a wide selection of the finest foods and spices from around the world. Explore our curated collection of culinary delights and discover the flavors that will elevate your cooking.",
		demoURL: 'https://landing-food.netlify.app/',
		repoURL: 'https://github.com/juan1779/Landing-food',
		caseURL: "/blog/restaurant/",
		anim: 'fade-right',
	},
	{
		imgSrc: '../../../public/img/secure.png',
		title: 'Landing Page',
		skills: ['React', 'Tailwind'],
		descripcion:
			"Unlock the power of blockchain technology with our comprehensive suite of services. Whether you're an enterprise looking to streamline operations or a startup seeking to disrupt your industry, our team of blockchain experts can help you leverage this transformative innovation. ",
		demoURL: 'https://landing-page-block.netlify.app/',
		repoURL: 'https://github.com/juan1779/LandingPage',
		caseURL: '/blog/secure',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/public/img/login.png',
		title: 'Login',
		skills: ['React', 'Tailwind'],
		descripcion:
			"This project is a login simulation created using React, Redux, and localStorage. The application allows users to sign in and out, with their login status and user data stored in the browser's localStorage",
		demoURL: 'https://login-react-redux-localstorage.netlify.app/',
		repoURL: 'https://github.com/juan1779/Login-React',
		caseURL: '/blog/login/',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
		title: 'Coffe Store',
		skills: ['React', 'CSS'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		caseURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Coffe Store',
		skills: ['React', 'CSS'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		caseURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Restaurant',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		caseURL: '',
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
