import React, { FC, useEffect, useState } from 'react';
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
	labelOption,
	onChange,
}) => {
	const [listOptions, setlistOptions] =
		useState<SelectOptionType[]>(ListSelectOptions);

	useEffect(() => {
		setlistOptions(orderStock(ListSelectOptions));
	}, [ListSelectOptions]);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange && onChange(e.target.value);
	};

	return (
		<Container>
			<SelectStyled onChange={(e) => handleChange(e)}>
				<option hidden={true}>{labelOption}</option>

				{listOptions.map((item, index) => {
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

			<SpanTitleStyled>{label}</SpanTitleStyled>
		</Container>
	);
};

export default Select;
