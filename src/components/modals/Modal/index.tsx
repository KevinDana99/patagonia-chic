import React, { FC } from 'react';
import { CloseIcon } from './styled';
import {
	BoxModal,
	BoxTitle,
	BoxTop,
	ButtonClose,
	Container,
	BoxHeader,
	BoxChildren,
	BoxPrueba,
} from './styled';
import { modalType } from './types';

const PrimaryModal = ({
	headerText,
	Children,
	closeAction,
	closeOnTouchOutside,
	coverImage,
	disableClose,
	onClose,
	onOpen,
	title,
	visible = false,
}: modalType) => {
	return (
		<BoxModal>
			<Container>
				<BoxTop>
					<BoxTitle>{title}</BoxTitle>
					<ButtonClose>{<CloseIcon />}</ButtonClose>
				</BoxTop>
				<BoxPrueba>
					<BoxHeader coverImage={coverImage}>
						{headerText && headerText}
					</BoxHeader>
					{Children && (
						<BoxChildren>
							<Children />
						</BoxChildren>
					)}
				</BoxPrueba>
			</Container>
		</BoxModal>
	);
};

export default PrimaryModal;
