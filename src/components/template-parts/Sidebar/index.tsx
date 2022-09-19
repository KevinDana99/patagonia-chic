import React, { useState } from 'react';
import { SideBarType, ViewType } from './types';

import {
	IconClose,
	ItemContent,
	BoxBackground,
	ButtonBack,
	IconBack,
	SidebarContainer,
	SidebarContent,
	LogoContainer,
	CloseIconContainer,
	SidebarHeader,
	SidebarHeaderDivider,
	SidebarHeaderContent,
	ItemButton,
	SidebarMenuTitle,
	Language,
	WorldIcon,
} from './styled';
import Logo from '../../logos/Logo';
import { sidebarTexts } from './sidebarTexts';
import { LanguageLabel } from '../Footer/styled';
import Text from '../../texts/Text';

const Sidebar = ({
	closeAction,
	activeSidebar,
	mapToViews,
	language,
}: SideBarType) => {
	const [viewStack, setViewStack] = useState<ViewType>({
		views: [],
		props: [],
	});

	const next = (view: React.FC, props: Object) => {
		const newViews = viewStack.views;
		newViews.push(view);
		const newProps = viewStack.props;
		newProps.push(props);
		setViewStack({ ...viewStack, views: newViews, props: newProps });
	};

	const back = () => {
		const backView = viewStack.views;
		backView.pop();
		const backProp = viewStack.props;
		backProp.pop();
		setViewStack({ ...viewStack, views: backView, props: backProp });
	};

	return (
		<>
			<BoxBackground activeSidebar={activeSidebar} onClick={closeAction}>
				<SidebarContainer activeSidebar={activeSidebar}>
					<SidebarHeader>
						<SidebarHeaderContent>
							{viewStack.views.length == 0 ? (
								<LogoContainer>
									<Logo size={125} />
								</LogoContainer>
							) : (
								<ButtonBack onClick={back}>
									<IconBack />
									{sidebarTexts.goBack}
								</ButtonBack>
							)}
							<CloseIconContainer>
								<IconClose onClick={closeAction} />
							</CloseIconContainer>
						</SidebarHeaderContent>
						<SidebarHeaderDivider />
						{viewStack.views.length === 1 && (
							<SidebarMenuTitle>{viewStack.props[0]?.title}</SidebarMenuTitle>
						)}
					</SidebarHeader>
					<SidebarContent>
						{viewStack.views.length === 0 ? (
							<>
								{mapToViews?.map((menuItem, index) => {
									const { onClick, name, content, navigationNode, RenderView } =
										menuItem;

									return (
										<ItemContent
											key={index}
											onClick={() =>
												onClick
													? onClick()
													: next(content, {
															next,
															title: name,
															navigationNode: navigationNode,
															RenderView: RenderView,
													  })
											}
										>
											<ItemButton title={name} />
										</ItemContent>
									);
								})}
							</>
						) : (
							viewStack.views.map((CurrentView, index) => {
								return (
									index == viewStack.views.length - 1 && (
										<CurrentView
											key={index}
											{...viewStack.props[viewStack.props.length - 1]}
										/>
									)
								);
							})
						)}
					</SidebarContent>
					<Language>
						<WorldIcon />
						<LanguageLabel>
							<Text
								size={14}
								weight={'semi-bold'}
							>{`${language.label} - ${language.symbol} ${language.currency}`}</Text>
						</LanguageLabel>
					</Language>
				</SidebarContainer>
			</BoxBackground>
		</>
	);
};

export default Sidebar;
