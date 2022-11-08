import React, { useState } from 'react';
import TertiaryButton from '../../../buttons/TertiaryButton';
import Text from '../../../texts/Text';
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
	Icon,
} from './styled';
import { ItemTimelineType } from './types';

const ItemTimeline = ({
	title,
	secondaryTitle,
	tertiaryTitle,
	active,
	clear,
	id,
}: ItemTimelineType) => {
	const [hoverClose, setHoverClose] = useState(false);

	const IconCheck = () => {
		return (
			<Icon>
				<CheckIcon />
			</Icon>
		);
	};

	return (
		<Container>
			<ProgressBar Icon={IconCheck} active={active} />
			<BoxItem>
				<SubTitle>
					<Text>{secondaryTitle}</Text>
				</SubTitle>
				<Title>
					<Text size={17} weight={'semi-bold'}>
						{title}
					</Text>
				</Title>

				{active && tertiaryTitle && typeof tertiaryTitle != 'string' && (
					<SubTitle>
						<Link href={tertiaryTitle.link}>
							<ButtonItem>
								<ContentButton>
									<Text>{tertiaryTitle?.options?.price}</Text>
									<BoxCurrency>
										<Text>{tertiaryTitle?.options?.currency}</Text>
									</BoxCurrency>
								</ContentButton>
							</ButtonItem>
						</Link>
					</SubTitle>
				)}
			</BoxItem>

			{active && tertiaryTitle && (
				<BoxClear
					onClick={() => clear(id)}
					onMouseOver={() => setHoverClose(true)}
					onMouseOut={() => setHoverClose(false)}
				>
					<IconClear
						name="close-icon"
						size={15}
						color={hoverClose ? 'black' : '#888'}
					/>
				</BoxClear>
			)}
		</Container>
	);
};

export default ItemTimeline;
