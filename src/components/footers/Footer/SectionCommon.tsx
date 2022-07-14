import React, { FC, useState } from 'react';
import {
	ContainerSectionCommon,
	LinkStyled,
	Title,
	MenuButton,
	DropdownMenu,
	ImageOpen,
	DesktopSectionCommon,
	HrStyled,
	Text,
} from './styled';
import { SectionType } from './types';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';

const SectionCommon: FC<SectionType> = ({ title, label }) => {
	const [open, setOpen] = useState(false);
	const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(!open);
	};
	return (
		<ContainerSectionCommon>
			<DesktopSectionCommon>
				<Title>{title}</Title>
				{label.map((item, index) => (
					<LinkStyled href={item.url} key={index} target={item.target}>
						<Text>{item.label}</Text>
					</LinkStyled>
				))}
			</DesktopSectionCommon>

			{/* version movil */}

			<MenuButton onClick={handleClick}>
				<Title>{title}</Title>
				<ImageOpen>
					{open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
				</ImageOpen>
			</MenuButton>
			<DropdownMenu>
				{open &&
					label.map((item, index) => (
						<LinkStyled href={item.url} key={index} target={item.target}>
							<Text>{item.label}</Text>
						</LinkStyled>
					))}
			</DropdownMenu>
			<HrStyled />
		</ContainerSectionCommon>
	);
};

export default SectionCommon;
