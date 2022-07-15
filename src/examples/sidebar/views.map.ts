import Excursions from './views/Excursions';
import ShopCart from './views/ShopCart';
import Template from './views/Template';

const mapToViews = [
	{
		name: 'Template',
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
		name: 'Template',
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
		name: 'Template',
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
