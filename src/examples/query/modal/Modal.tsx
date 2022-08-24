import React from 'react';
import {
	CloseModalContainer,
	CloseModalIcon,
	Container,
	PlaceListMobileContainer,
} from './styled';
import { ListModalType } from '../../../components/querys/SearchQuery/types';

const Modal = ({ closeModal, children, visible }: ListModalType) => {
	return (
		<Container visible={visible}>
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
		</Container>
	);
};

export default Modal;
