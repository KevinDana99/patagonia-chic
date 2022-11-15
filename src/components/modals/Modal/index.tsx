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

const ANIMATION_TIME_MILLIS = 300;

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
	visible: visibleProp = false,
	texts,
}: ModalType) => {
	const [state, setState] = useState<ModalStateType>({
		visible: visibleProp,
		animate: false,
	});

	const close = useCallback(() => {
		setState({ animate: false, visible: true });
		setTimeout(
			() => setState({ animate: false, visible: false }),
			ANIMATION_TIME_MILLIS
		);
		onClose?.();
	}, [onClose]);

	const open = useCallback(() => {
		setState({ animate: true, visible: true });
		onOpen?.();
	}, [onOpen]);

	useEffect(() => {
		(visibleProp ? open : close)();
	}, [close, open, visibleProp]);

	const touchOutside = () => {
		closeOnTouchOutside && closeAction && closeAction();
		closeOnTouchOutside && close();
	};

	return (
		<>
			{renderOpenButton && (
				<SecondaryButton title={texts?.buttonTitle ?? ''} onClick={open} />
			)}

			<BoxModal
				visible={state.visible}
				transitionTime={ANIMATION_TIME_MILLIS}
				animate={state.animate}
				onClick={touchOutside}
			>
				<Container
					width={width}
					animate={state.animate}
					transitionTime={ANIMATION_TIME_MILLIS}
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
