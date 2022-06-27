import React, { useState } from 'react';
import SecondaryButton from '../../buttons/SecondaryButton';

import {
	BoxModal,
	BoxTitle,
	BoxTop,
	ButtonClose,
	Container,
	BoxHeader,
	BoxChildren,
	BoxScroll,
	CloseIcon,
	BoxHeaderText,
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
		animate: false,
	});

	const close = () => {
		setState({ ...state, animate: false, visible: false });

		onClose && onClose();
	};

	const open = () => {
		setState({ ...state, visible: true, animate: true });
		onOpen && onOpen();
	};

	const touchOutside = () => {
		setState({ ...state, closeOnTouchOutside: true });
		close();
	};

	return (
		<>
			<SecondaryButton title="Abrir Modal" onClick={open} />
			<BoxModal visible={state.visible} onClick={touchOutside}>
				<Container
					animate={state.animate}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<BoxTop>
						<BoxTitle>{title}</BoxTitle>
						{!disableClose && (
							<ButtonClose>{<CloseIcon onClick={close} />}</ButtonClose>
						)}
					</BoxTop>
					<BoxScroll>
						<BoxHeader coverImage={coverImage}>
							{headerText && <BoxHeaderText>{headerText}</BoxHeaderText>}
						</BoxHeader>
						{Children && (
							<BoxChildren>
								<Children />
							</BoxChildren>
						)}
					</BoxScroll>
				</Container>
			</BoxModal>
		</>
	);
};

export default PrimaryModal;
