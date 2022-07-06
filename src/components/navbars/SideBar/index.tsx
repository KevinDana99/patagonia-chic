import React from 'react';
import Logo from '../../../examples/navbar/logo';

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
import { SideBarType } from './types';

const SideBar = ({ closeAction }: SideBarType) => {
	return (
		<Container>
			<BoxControls>
				<BoxLogo>
					<Logo />
				</BoxLogo>
				<BoxClose>
					<IconClose onClick={closeAction} />
				</BoxClose>
			</BoxControls>
			<Hr />
			<Content>
				<ItemContent>
					<BtnItemContentNormal>Home</BtnItemContentNormal>
				</ItemContent>
				<ItemContent>
					<BtnItemContent title={'Mi carrito'} />
				</ItemContent>
				<ItemContent>
					<BtnItemContent title={'Excursiones por destino'} />
				</ItemContent>
				<ItemContent>
					<BtnItemContent title={'Crear itinerario de mi viaje'} />
				</ItemContent>
				<ItemContent>
					<BtnItemContent title={'Medios de pago y promociones'} />
				</ItemContent>
				<ItemContent>
					<BtnItemContent title={'Enlaces útiles'} />
				</ItemContent>
				<ItemContent>
					<BtnItemContent title={'Ayuda'} />
				</ItemContent>
			</Content>
		</Container>
	);
};

export default SideBar;
