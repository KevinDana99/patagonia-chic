import React from 'react';
import { SidebarPropsType } from '../../../../components/navbars/SideBar/types';
import Excursions from './../Excursions';

const ShopCart = ({ next }: SidebarPropsType) => {
	return (
		<div>
			<button
				onClick={() => next && next(Excursions, { title: 'Excursiones' })}
			>
				Ir a Excursiones
			</button>
			<div>Mi carrito</div>
			<div>Otra navegacion</div>
		</div>
	);
};

export default ShopCart;
