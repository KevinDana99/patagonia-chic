import React, { useState } from 'react';
import Logo from '../../../examples/navbar/logo';
import ShopCart from '../../../examples/sidebar/views/ShopCart';
import Excursions from '../../../examples/sidebar/views/Excursions';
import { SideBarType, ViewType } from './types';

import {
	Container,
	BoxControls,
	Content,
	BoxClose,
	BoxLogo,
	IconClose,
	ItemContent,
	Hr,
	BtnItemContent,
	BtnItemContentNormal,
	BoxBackground,
	ButtonBack,
	IconBack,
} from './styled';

const SideBar = ({ closeAction, activeSidebar }: SideBarType) => {
	const [state, setState] = useState<ViewType>({
		views: [],
		props: {},
	});

	const next = (view: React.FC, props: Object) => {
		const newViews = state.views;
		newViews.push(view);
		setState({ ...state, views: newViews, props: { ...props } });
	};

	const back = () => {
		const backState = state.views.filter(
			(view) => view != state.views[state.views.length - 1]
		);

		setState({ ...state, views: backState });
	};
	return (
		<>
			<BoxBackground
				activeSidebar={activeSidebar}
				onClick={closeAction}
			></BoxBackground>
			<Container activeSidebar={activeSidebar}>
				<BoxControls>
					{state.views.length == 0 ? (
						<BoxLogo>
							<Logo />
						</BoxLogo>
					) : (
						<ButtonBack onClick={back}>
							<IconBack />
							Atrás
						</ButtonBack>
					)}
					<BoxClose>
						<IconClose onClick={closeAction} />
					</BoxClose>
				</BoxControls>
				<Hr />

				<Content>
					{state.views.length == 0 ? (
						<>
							<ItemContent>
								<BtnItemContentNormal onClick={closeAction}>
									Home
								</BtnItemContentNormal>
							</ItemContent>
							<ItemContent>
								<BtnItemContent
									title={'Mi carrito'}
									onClick={() => next(ShopCart, { next: next })}
								/>
							</ItemContent>
							<ItemContent>
								<BtnItemContent
									title={'Excursiones por destino'}
									onClick={() => next(Excursions, { title: 'Extursiones' })}
								/>
							</ItemContent>
							<ItemContent>
								<BtnItemContent title={'Crear itinerario de mi viaje'} />
							</ItemContent>
							<ItemContent>
								<BtnItemContent title={'Medios de pago y promociones'} />
							</ItemContent>
							<ItemContent>
								<BtnItemContent title="Enlaces utiles" />
							</ItemContent>
							<ItemContent>
								<BtnItemContent title={'Ayuda'} />
							</ItemContent>
						</>
					) : (
						state.views.map((CurrentView, index) => {
							return (
								index == state.views.length - 1 && (
									<CurrentView key={index} {...state.props} />
								)
							);
						})
					)}
				</Content>
			</Container>
		</>
	);
};

export default SideBar;
