import React, { FC, useState } from 'react';

import SecondaryButton from '../../buttons/SecondaryButton';

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
	const [state, setState] = useState<modalType>({
		visible,
		closeOnTouchOutside,
	});

	const close = () => {
		setState({ ...state, visible: false });
		onClose && onClose();
	};

	const open = () => {
		setState({ ...state, visible: true });
		onOpen && onOpen();
	};

	const touchOutside = () => {
		setState({ ...state, visible: true });
		close();
	};

	return state.visible ? (
		<BoxModal visible={state.visible} onClick={touchOutside}>
			<Container>
				<BoxTop>
					<BoxTitle>{title}</BoxTitle>
					{!disableClose && (
						<ButtonClose>{<CloseIcon onClick={close} />}</ButtonClose>
					)}
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
	) : (
		<SecondaryButton onClick={open} title={'Abrir modal'} />
	);
};

export default PrimaryModal;
