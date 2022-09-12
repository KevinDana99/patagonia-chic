import Excursions from './views/Excursions';
import ShopCart from './views/ShopCart';
import Template from './views/Template';

const mapToViews = [
	{
		name: 'Home',
		content: Template,
		onClick: () => console.log('Home'),
	},

	{
		name: 'Mi carrito',
		content: Template,
		RenderView: ShopCart,
	},

	{
		name: 'Excursiones por destino',
		content: Template,
		RenderView: Excursions,
	},

	{
		name: 'Destinos',
		content: Template,
		RenderView: Excursions,
	},

	{
		name: 'Crear mi itinerario de viaje',
		content: Template,
		navigationNode: [
			{
				name: 'Otro template',
				content: Template,
				RenderView: Excursions,
				navigationNode: [
					{
						name: 'Enlace 1',
						content: Excursions,
					},
					{
						name: 'Enlace 2',
						content: Template,
					},
					{
						name: 'Enlace 3',
						content: Template,
					},
				],
			},
		],
	},

	{
		name: 'Medios de pago y promociones',
		content: Template,
		navigationNode: [
			{
				name: 'Otro template',
				content: Template,
				navigationNode: [
					{
						name: 'Enlace 1',
						content: Template,
					},
					{
						name: 'Enlace 2',
						content: Template,
					},
					{
						name: 'Enlace 3',
						content: Template,
					},
				],
			},
		],
	},

	{
		name: 'Enlaces útiles',
		content: Template,
		navigationNode: [
			{
				name: 'Mapa de excursiones',
				content: Template,
				navigationNode: [
					{
						name: 'Enlace 1',
						content: Excursions,
					},
					{
						name: 'Enlace 2',
						content: Excursions,
					},
					{
						name: 'Enlace 3',
						content: Excursions,
					},
				],
			},
			{
				name: 'Quienes somos',
				content: Excursions,
			},
			{
				name: 'Catálogo de excursiones',
				content: Excursions,
			},
		],
	},

	{
		name: 'Ayuda',
		content: Template,
		navigationNode: [
			{
				name: 'Otro template',
				content: Template,
				navigationNode: [
					{
						name: 'Enlace 1',
						content: Template,
					},
					{
						name: 'Enlace 2',
						content: Template,
					},
					{
						name: 'Enlace 3',
						content: Template,
					},
				],
			},
		],
	},
];

export default mapToViews;
