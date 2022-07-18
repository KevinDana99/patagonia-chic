export type SearchQueryType = {
	places: [IPlace];
	onQuerySubmit: Function;
};

interface IPlace {
	name: string;
	id: string;
	img: string;
	province: string;
	country: string;
}
