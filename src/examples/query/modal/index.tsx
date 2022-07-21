import React from 'react';
import { Container, BoxModal } from './styled';
const Modal = ({ Children }: { Children: React.FC }) => {
	return (
		<Container>
			<BoxModal>
				<Children />
			</BoxModal>
		</Container>
	);
};

export default Modal;
