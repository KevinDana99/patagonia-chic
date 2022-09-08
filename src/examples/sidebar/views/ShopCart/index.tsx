import React from 'react';
import { SecondaryButton } from '../../../../components';
import { SidebarPropsType } from '../../../../components/template-parts/Sidebar/types';

const ShopCart = ({ next, navigationNode }: SidebarPropsType) => {
	return (
		<div>
			{navigationNode?.map((e, index) => {
				return (
					<SecondaryButton
						title={e.name}
						key={index}
						onClick={() => next && next(e.content, { title: e.name, next })}
					/>
				);
			})}

			<div>Mi carrito</div>
			<div>Otra navegacion</div>
		</div>
	);
};

export default ShopCart;
