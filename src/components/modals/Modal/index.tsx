import React, { useCallback, useEffect, useState } from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
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
	renderOpenButton,
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

	const open = useCallback(() => {
		setState({ ...state, visible: true, animate: true });
		onOpen && onOpen();
	}, [onOpen, state]);

	const touchOutside = () => {
		closeOnTouchOutside && close();
	};

	useEffect(() => {
		setState({ ...state, visible });
	}, [visible]);

	return (
		<>
			{renderOpenButton && (
				<SecondaryButton title="Abrir Modal" onClick={open} />
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
						<BoxTitle>{title}</BoxTitle>
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
										{headerText}
									</BoxHeaderText>
								)}
							</BoxHeader>
						)}

						{!coverImage && headerText && (
							<BoxHeaderText>{headerText}</BoxHeaderText>
						)}

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

export default withFontStyles(PrimaryModal);
