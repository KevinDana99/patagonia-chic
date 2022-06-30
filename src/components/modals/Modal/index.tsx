import React, { useEffect, useState } from 'react';
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
	BoxDownModal,
} from './styled';
import { ModalType } from './types';

const PrimaryModal = ({
	width,
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
}: ModalType) => {
	const [state, setState] = useState<ModalType>({
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

	useEffect(() => {
		state.visible && open();
	}, []);

	return (
		<>
			<SecondaryButton title="Abrir Modal" onClick={open} />
			<BoxModal visible={state.visible} onClick={touchOutside}>
				<Container
					width={width}
					animate={state.animate}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<BoxTop>
						<BoxTitle>{title}</BoxTitle>
						{!disableClose && (
							<ButtonClose>
								{<CloseIcon onClick={closeAction ? closeAction : close} />}
							</ButtonClose>
						)}
					</BoxTop>
					<BoxScroll>
						<BoxHeader coverImage={coverImage}>
							{headerText && <BoxHeaderText>{headerText}</BoxHeaderText>}
						</BoxHeader>
						{Children && (
							<BoxChildren>
								<Children />
								<BoxDownModal />
							</BoxChildren>
						)}
					</BoxScroll>
				</Container>
			</BoxModal>
		</>
	);
};

export default PrimaryModal;
