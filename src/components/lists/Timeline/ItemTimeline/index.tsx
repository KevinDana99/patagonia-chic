import React from 'react';
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
	return (
		<Container>
			<ProgressBar Icon={CheckIcon} active={active} />
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
				<BoxClear>
					<IconClear size={28} onClick={() => clear(id)} />
				</BoxClear>
			)}
		</Container>
	);
};

export default ItemTimeline;
