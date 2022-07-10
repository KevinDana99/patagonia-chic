import React, { useState } from 'react';
import Logo from '../../../examples/navbar/logo';
import { IoArrowBack as IconBack } from 'react-icons/io5';
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
} from './styled';

const SideBar = ({ closeAction }: SideBarType) => {
	const [props, setProps] = useState({});
	const [views, setViews] = useState<ViewType>([]);

	const next = (view: React.FC, props?: Object) => {
		setViews([...views, view]);
		setProps({ ...props });
	};

	const back = () => {
		const backState = views.filter((view) => view != views[views.length - 1]);
		setViews(backState);
	};
	return (
		<Container>
			<BoxControls>
				{views.length == 0 ? (
					<BoxLogo>
						<Logo />
					</BoxLogo>
				) : (
					<IconBack color="grey" onClick={back} />
				)}
				<BoxClose>
					<IconClose onClick={closeAction} />
				</BoxClose>
			</BoxControls>
			<Hr />

			{views.length == 0 ? (
				<Content>
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
							onClick={() => next(Excursions)}
						/>
					</ItemContent>
					<ItemContent>
						<BtnItemContent title={'Crear itinerario de mi viaje'} />
					</ItemContent>
					<ItemContent>
						<BtnItemContent title={'Medios de pago y promociones'} />
					</ItemContent>
					<ItemContent>
						<BtnItemContentNormal>Enlaces útiles</BtnItemContentNormal>
					</ItemContent>
					<ItemContent>
						<BtnItemContent title={'Ayuda'} />
					</ItemContent>
				</Content>
			) : (
				views.map((CurrentView, index) => {
					return (
						index == views.length - 1 && <CurrentView key={index} {...props} />
					);
				})
			)}
		</Container>
	);
};

export default SideBar;
