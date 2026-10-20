export type FullscreenSwiperType = {
	imageList: Array<ImageListArray>;
	show: boolean;
	onClose: () => void;
};

type ImageListArray = {
	alt: string;
	uri: string;
	description: string;
};
