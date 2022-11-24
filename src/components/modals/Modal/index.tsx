import React, { useCallback, useEffect, useState } from 'react';
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
	animated,
}: ModalType) => {
	const [state, setState] = useState<ModalStateType>({
		visible: visible,
		animate: false,
	});

	const close = () => {
		setState({ animate: false, visible: false });
		onClose && onClose();
	};

	const open = useCallback(() => {
		setState((prevState) => ({ ...prevState, visible: true }));
		onOpen && onOpen();
	}, [onOpen]);

	const openWithAnimation = useCallback(() => {
		setState((prevState) => ({ ...prevState, animate: true }));
		open();
	}, [open]);

	useEffect(() => {
		!animated && visible && open();
		animated && visible && openWithAnimation();
	}, [animated, open, openWithAnimation, visible]);

	const touchOutside = () => {
		closeOnTouchOutside && closeAction && closeAction();
		closeOnTouchOutside && close();
	};

	return (
		<>
			{renderOpenButton && (
				<SecondaryButton
					title={texts?.buttonTitle ?? ''}
					onClick={open}
					arrowIconDirection={'right'}
				/>
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
								{<CloseIcon onClick={closeAction ? touchOutside : close} />}
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
