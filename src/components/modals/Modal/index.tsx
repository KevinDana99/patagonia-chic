import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useIsElementScrollable } from '../../../hooks/useIsElementScrollable';
import CloseButton from '../../buttons/iconButtons/CloseButton';
import SecondaryButton from '../../buttons/SecondaryButton';
import Text from '../../texts/Text';
import { useShowOverflowGradient } from './hooks/useShowOverflowGradient';
import {
	BoxModal,
	BoxTitle,
	BoxTop,
	ButtonCloseContainer,
	Container,
	BoxHeader,
	BoxChildren,
	BoxScroll,
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
	className,
}: ModalType) => {
	const [state, setState] = useState<ModalStateType>({
		visible: visibleProp,
		animate: false,
	});

	const scrollBoxRef = useRef(null);
	const [showOverflowGradient, setScrollTop, isScrollable] =
		useShowOverflowGradient(scrollBoxRef);

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

	return (
		<>
			{renderOpenButton && (
				<SecondaryButton
					title={texts?.buttonTitle ?? ''}
					onClick={open}
					arrowIconDirection={'right'}
				/>
			)}

			<BoxModal
				visible={state.visible}
				transitionTime={ANIMATION_TIME_MILLIS}
				animate={state.animate}
				onClick={closeOnTouchOutside ? closeAction ?? close : undefined}
			>
				<Container
					className={className}
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
							<ButtonCloseContainer>
								<CloseButton onClick={closeAction ?? close} />
							</ButtonCloseContainer>
						)}
					</BoxTop>

					<BoxScroll
						ref={scrollBoxRef}
						onScroll={setScrollTop}
						isScrollable={isScrollable}
					>
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

								{showOverflowGradient && <BoxDownModal />}
							</BoxChildren>
						)}
					</BoxScroll>
				</Container>
			</BoxModal>
		</>
	);
};

export default PrimaryModal;
