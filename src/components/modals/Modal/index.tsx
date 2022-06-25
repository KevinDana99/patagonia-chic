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

	const touchOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		e.target && setState({ ...state, visible: true });
		close();
	};

	closeAction && close();

	return state.visible ? (
		<BoxModal visible={state.visible} onClick={touchOutside}>
			<Container
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
						{headerText && headerText}
					</BoxHeader>
					{Children && (
						<BoxChildren>
							<Children />
						</BoxChildren>
					)}
				</BoxScroll>
			</Container>
		</BoxModal>
	) : (
		<SecondaryButton onClick={open} title={'Abrir modal'} />
	);
};

export default PrimaryModal;
