import Excursions from './views/Excursions';
import ShopCart from './views/ShopCart';
import Template from './views/Template';

const mapToViews = [
	{
		name: 'Excursiones',
		content: Template,
		RenderView: Excursions,
	},

	{
		name: 'Template',
		content: Template,
		navigationNode: [
			{
				name: 'Otro template',
				content: Template,
				RenderView: Excursions,
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
