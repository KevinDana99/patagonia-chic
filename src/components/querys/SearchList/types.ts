export interface IPlace {
	name: string;
	id?: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
}

export type PlaceListType = {
	places: Array<IPlace>;
};
