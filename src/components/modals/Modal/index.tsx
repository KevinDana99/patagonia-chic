import React, { useCallback, useEffect, useState } from 'react';
import Section from '../../../examples/modal/sections/Section';
import SecondaryButton from '../../buttons/SecondaryButton';
import Text from '../../texts/Text';
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
import { ModalStateType, ModalType } from './types';

const PrimaryModal = ({
	renderOpenButton,
	width,
	headerText,
	children,
	closeAction,
	closeOnTouchOutside,
	coverImage,
	disableClose,
	onClose,
	onOpen,
	title,
	visible = false,
	texts,
}: ModalType) => {
	const [state, setState] = useState<ModalStateType>({
		visible,
		closeOnTouchOutside,
		animate: false,
	});

	const close = () => {
		setState({ ...state, animate: false, visible: false });

		onClose && onClose();
	};

	const open = useCallback(() => {
		setState({ ...state, visible: true, animate: true });
		onOpen && onOpen();
	}, [onOpen, state]);

	const touchOutside = () => {
		closeOnTouchOutside && closeAction && closeAction();
		closeOnTouchOutside && close();
	};

	useEffect(() => {
		setState({ ...state, visible, animate: visible });
		visible && open();
	}, [visible]);

	return (
		<>
			{renderOpenButton && (
				<SecondaryButton title={texts.buttonTitle} onClick={open} />
			)}

			<BoxModal visible={state.visible} onClick={touchOutside}>
				<Container
					width={width}
					animate={state.animate}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<BoxTop>
						<BoxTitle>
							<Text size={17}>{title}</Text>
						</BoxTitle>
						{!disableClose && (
							<ButtonClose>
								{<CloseIcon onClick={closeAction ? closeAction : close} />}
							</ButtonClose>
						)}
					</BoxTop>

					<BoxScroll>
						{coverImage && (
							<BoxHeader coverImage={coverImage}>
								{headerText && (
									<BoxHeaderText coverImage={coverImage}>
										<Text color="white">{headerText}</Text>
									</BoxHeaderText>
								)}
							</BoxHeader>
						)}

						{!coverImage && headerText && (
							<BoxHeaderText>
								<Text color="white">{headerText}</Text>
							</BoxHeaderText>
						)}

						{children && (
							<BoxChildren>
								{children}

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
