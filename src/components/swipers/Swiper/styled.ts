/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import styled, { keyframes } from 'styled-components';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/swiper.min.css';
import 'swiper/modules/lazy/lazy.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const SwiperContainer = styled(Swiper)<
	Pick<SwiperOptions, 'pagination'>
>`
	height: 100%;
	&&& {
		--swiper-pagination-color: #fff;
		--swiper-pagination-bullet-inactive-color: #fff;
		--swiper-pagination-bullet-inactive-opacity: 0.6;
		--swiper-pagination-bullet-size: 5px;
		--swiper-pagination-bullet-width: 5px;
	}
	.swiper-pagination-bullet-active-next {
		height: 5px !important;
		width: 5px !important;
		transform: scale(1) !important;
	}
	.swiper-pagination-bullet-active-prev {
		height: 5px !important;
		width: 5px !important;
		transform: scale(1) !important;
	}
	.swiper-pagination-bullet-active-next-next {
		height: 4px !important;
		width: 4px !important;
		transform: scale(1) !important;
	}
	.swiper-pagination-bullet-active-prev-prev {
		height: 4px !important;
		width: 4px !important;
		transform: scale(1) !important;
	}
	.swiper-pagination-bullet-active {
		height: 6px !important;
		width: 6px !important;
		transform: scale(1) !important;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	-ms-transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	position: absolute;
	left: 50%;
	top: 50%;
	text-indent: 100%;
	white-space: nowrap;
	overflow: hidden;

	&[alt]::after {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		font-family: 'Helvetica';
		font-weight: 300;
		line-height: 2;
		text-align: center;
		content: attr(alt);
	}
`;

export const SliderPaginationContainer = styled.div`
	display: none;

	${Container}:hover & {
		display: block;
	}
`;

const PaginationButton = styled.div<{ show: boolean }>`
	height: 20px;
	width: 20px;
	padding: 6px;
	border-radius: 100%;
	background-color: rgba(255, 255, 255, 0.8);
	z-index: 1;
	display: ${(props) => (props.show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	animation: ${fadeIn} 300ms ease;
	cursor: pointer;
	box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
		rgba(0, 0, 0, 0.18) 0px 2px 4px !important;
`;

export const PaginationLeftButton = styled(PaginationButton)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0%;
	margin-left: 20px;

	&:hover {
		background-color: #ffffff;
		transition: all 250ms ease;
		margin-left: 19px;
		height: 21px;
		width: 21px;
	}
`;

export const PaginationRightButton = styled(PaginationButton)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0%;
	margin-right: 20px;

	&:hover {
		background-color: #ffffff;
		transition: all 300ms ease-in-out;
		margin-left: 19px;
		height: 21px;
		width: 21px;
	}
`;
