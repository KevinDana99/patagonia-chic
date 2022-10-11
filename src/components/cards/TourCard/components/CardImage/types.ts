import { ImageListArray } from '../../types';

export type CardImageTypes = {
	coverImage?: string | JSX.Element;
	imageList?: Array<ImageListArray>;
	date?: { month: string; day: string };
	isAddedToCart?: boolean;
	isAvailable?: boolean;
};
