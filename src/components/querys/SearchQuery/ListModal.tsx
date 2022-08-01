import React from 'react';
import {
	CloseModalContainer,
	CloseModalIcon,
	PlaceListModal,
	PlaceListMobileContainer,
} from './styled';
import { ListModalType } from './types';

const ListModal = ({ closeModal, children }: ListModalType) => {
	return (
		<PlaceListModal>
			<PlaceListMobileContainer>
				<CloseModalContainer>
					<CloseModalIcon
						onClick={(e) => {
							e.stopPropagation();
							closeModal();
						}}
					/>
				</CloseModalContainer>
				{children}
			</PlaceListMobileContainer>
		</PlaceListModal>
	);
};

export default ListModal;
