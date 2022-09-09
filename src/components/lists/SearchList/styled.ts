import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const BoxSearch = styled.div`
	padding-bottom: 10px;
	width: 100%;
	height: 29.02px;
	background-color: white;
	display: flex;
	align-items: center;
	border-bottom: 0.5px solid #9f9d9d;
`;

export const InputSearch = styled.input`
	margin-left: 21px;
	max-width: 180px;
	height: 21.02px;
	font-size: 15px;
	border: none;
	outline: none;
`;

export const BoxItemList = styled.div`
	margin-top: 35px;
	width: 100%;
`;

export const ItemList = styled.div`
	margin-top: 21px;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const BoxImage = styled.div`
	width: 50px;
	height: 50px;
	background-color: #f1f4f7;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Description = styled.div`
	margin-left: 13px;
`;

export const Title = styled.div`
	font-weight: 500;
	font-size: 17px;
`;

export const BoxSubtitle = styled.div`
	display: flex;
	align-items: center;
	color: #888888;
`;

export const SubTitle = styled.div`
	font-weight: 300;
	font-size: 14px;
`;

export const Divisor = styled.div`
	margin: 0px 3px;
`;

export const LoadingContainer = styled.div`
	margin-top: 35px;
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: flex-start;
	align-items: flex;
`;

export const OptionalTitle = styled(Title)`
	font-size: 20px;
	margin-bottom: 18px;
`;
