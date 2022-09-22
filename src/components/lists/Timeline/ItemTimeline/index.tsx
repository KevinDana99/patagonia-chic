import React from 'react';
import TertiaryButton from '../../../buttons/TertiaryButton';
import ProgressBar from '../ProgressBar';
import {
	Container,
	Title,
	SubTitle,
	BoxItem,
	ButtonItem,
	CheckIcon,
	BoxClear,
	IconClear,
	BoxCurrency,
	Link,
	ContentButton,
} from './styled';
import { ItemTimelineType } from './types';

const ItemTimeline = ({
	title,
	secondaryTitle,
	tertiaryTitle,
	active,
}: ItemTimelineType) => {
	return (
		<Container>
			<ProgressBar Icon={CheckIcon} active={active} />
			<BoxItem>
				<SubTitle>{secondaryTitle}</SubTitle>
				<Title>{title}</Title>

				{active && tertiaryTitle && typeof tertiaryTitle != 'string' && (
					<SubTitle>
						<Link href={tertiaryTitle.link}>
							<ButtonItem>
								<ContentButton>
									{tertiaryTitle?.options?.price}
									<BoxCurrency>{tertiaryTitle?.options?.currency}</BoxCurrency>
								</ContentButton>
							</ButtonItem>
						</Link>
					</SubTitle>
				)}
			</BoxItem>

			{active && tertiaryTitle && (
				<BoxClear>
					<IconClear size={28} onClick={tertiaryTitle?.options?.clear} />
				</BoxClear>
			)}
		</Container>
	);
};

export default ItemTimeline;
