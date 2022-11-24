/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import styled, { keyframes } from 'styled-components';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/swiper.min.css';
import 'swiper/modules/lazy/lazy.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';
import Text from '../../texts/Text';
import { deviceSize } from '../../../constants/devicesSizes';
import CustomIcon from '../../graphics/CustomIcon';

const fadeIn = keyframes`
    from{
        transform: translateY(100%);
        background-color: #ffffff;
    }
    90%{
        transform: translateY(0%);
        background-color: #ffffff;
    }
    100%{
        background: #3b3b3b;
    }
`;

const opacityChange = keyframes`
    0%{
        opacity: 0;
    }
    75%{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	background: #3b3b3b;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 18px;
	overflow: hidden;

	@media ${deviceSize.tablet} {
		justify-content: center;
		font-size: 16px;
	}

	@media ${deviceSize.mobileL} {
		justify-content: flex-start;
		font-size: 12px;
	}
`;

export const SwiperContent = styled.div`
	animation: ${fadeIn} 0.5s ease;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Header = styled.div`
	margin-top: 50px;
	margin-bottom: 35px;
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	animation: ${opacityChange} 0.75s ease;

	@media ${deviceSize.tablet} {
		margin-bottom: 75px;
		width: 90%;
	}

	@media ${deviceSize.mobileL} {
		margin-bottom: 75px;
		width: 90%;
	}
`;

export const ImageCounterStatus = styled.div`
	margin: 0px auto;
	text-align: center;
`;

export const CounterStatusText = styled(Text)`
	color: #ffffff;
`;

export const CloseIconContainer = styled.div`
	height: 46px;
	width: 46px;
	border-radius: 100%;
	background: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0px;
	cursor: pointer;
`;

export const CloseIcon = styled(CustomIcon)`
	display: flex;
`;

export const SwiperContainer = styled(Swiper)<
	Pick<SwiperOptions, 'pagination'>
>`
	height: 60%;
	width: 80%;
	overflow: initial;
	animation: ${opacityChange} 0.75s ease;

	&&& {
		--swiper-pagination-color: #fff;
		--swiper-pagination-bullet-inactive-color: #fff;
		--swiper-pagination-bullet-inactive-opacity: 0.6;
		--swiper-pagination-bullet-size: 6px;
		--swiper-pagination-bullet-width: 6px;
		--swiper-navigation-color: #ffffff;
	}
	.swiper-pagination {
		position: absolute;
		bottom: -35px;
	}

	@media ${deviceSize.tablet} {
		width: 100%;
	}

	@media ${deviceSize.mobileL} {
		width: 100%;
		height: 35%;
		background: red;
	}
`;

export const Image = styled.img`
	width: 70%;
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

	@media ${deviceSize.tablet} {
		width: 90%;
		height: 90%;
	}

	@media ${deviceSize.mobileL} {
		width: 100%;
		height: 100%;
	}
`;

export const ImageDescription = styled(Text)`
	position: absolute;
	bottom: 10%;
	color: #ffffff;
	@media ${deviceSize.tablet} {
		bottom: 5%;
	}
`;
