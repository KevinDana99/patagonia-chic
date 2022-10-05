import React from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import Background from './background';
import {
	Container,
	BoxTitle,
	BoxButton,
	ContentContainer,
	TextTitle,
} from './styled';
import { JumboBoxType } from './types';

const JumboBox = ({ texts, renderButton, background }: JumboBoxType) => {
	return (
		<Container>
			<Background />
			<ContentContainer>
				<BoxTitle>
					<TextTitle color="#3B3B3B" weight="semi-bold" size={36}>
						{texts?.title}
					</TextTitle>
				</BoxTitle>

				<BoxButton>
					<>
						{renderButton ? (
							renderButton
						) : (
							<PrimaryButton
								title={texts?.buttonTitle ? texts.buttonTitle : ''}
								theme="mono"
							/>
						)}
					</>
				</BoxButton>
			</ContentContainer>
		</Container>
	);
};

export default JumboBox;
