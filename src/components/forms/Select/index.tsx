import React, { FC, useEffect, useState } from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import Text from '../../texts/Text';
import {
	Container,
	SelectStyled,
	SpanTitleStyled,
	IconStyled,
	OptionStyled,
} from './styled';
import { SelectOptionType, SelectPropsType } from './types';
import { orderStock } from './utils';

const Select: FC<SelectPropsType> = ({
	ListSelectOptions,
	label,
	placeholder,
	onChange,
}) => {
	const [list, setList] = useState<SelectOptionType[]>(ListSelectOptions);

	useEffect(() => {
		setList(orderStock(ListSelectOptions));
	}, [ListSelectOptions]);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newValue = list.find(
			(item) => item.value === e.target.value || item.label === e.target.value
		);
		newValue && onChange && onChange(newValue);
	};

	return (
		<Container>
			<SelectStyled onChange={(e) => handleChange(e)}>
				<option hidden={true}>{placeholder}</option>

				{list.map((item, index) => {
					return (
						<OptionStyled
							key={index}
							value={item.value ? item.value : item.label}
							disabled={item.disabled}
						>
							{item.label}
						</OptionStyled>
					);
				})}
			</SelectStyled>

			<IconStyled aria-hidden="true">&nbsp;</IconStyled>

			<SpanTitleStyled>
				<Text size={15} color={'#777'} weight={'regular'}>
					{label}
				</Text>
			</SpanTitleStyled>
		</Container>
	);
};

export default Select;
