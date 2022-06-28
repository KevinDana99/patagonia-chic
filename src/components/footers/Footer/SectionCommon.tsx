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
} from './styled';
import { SectionType } from './types';

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
						<p>{item.label}</p>
					</LinkStyled>
				))}
			</DesktopSectionCommon>

			{/* version movil */}
			<MenuButton onClick={handleClick}>
				<Title>{title}</Title>
				<ImageOpen
					src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTg1LjM0NCAxODUuMzQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxODUuMzQ0IDE4NS4zNDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojODg4OyIgZD0iTTkyLjY3MiwxNDQuMzczYy0yLjc1MiwwLTUuNDkzLTEuMDQ0LTcuNTkzLTMuMTM4TDMuMTQ1LDU5LjMwMWMtNC4xOTQtNC4xOTktNC4xOTQtMTAuOTkyLDAtMTUuMTgNCgkJCWM0LjE5NC00LjE5OSwxMC45ODctNC4xOTksMTUuMTgsMGw3NC4zNDcsNzQuMzQxbDc0LjM0Ny03NC4zNDFjNC4xOTQtNC4xOTksMTAuOTg3LTQuMTk5LDE1LjE4LDANCgkJCWM0LjE5NCw0LjE5NCw0LjE5NCwxMC45ODEsMCwxNS4xOGwtODEuOTM5LDgxLjkzNEM5OC4xNjYsMTQzLjMyOSw5NS40MTksMTQ0LjM3Myw5Mi42NzIsMTQ0LjM3M3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="
					alt=" "
				/>
			</MenuButton>
			<DropdownMenu>
				{open &&
					label.map((item, index) => (
						<LinkStyled href={item.url} key={index} target={item.target}>
							<p>{item.label}</p>
						</LinkStyled>
					))}
			</DropdownMenu>
			{/* <HrStyled
				colorDivision={'black'}
				style={{ marginTop: '2rem', marginBottom: '-2rem', width: '100%' }}
			/> */}
			<HrStyled />
		</ContainerSectionCommon>
	);
};

export default SectionCommon;
