import React, { useState } from 'react';
import Logo from '../../../examples/navbar/logo';
import { SideBarType, ViewType } from './types';

import {
	Container,
	BoxControls,
	Content,
	BoxClose,
	BoxLogo,
	IconClose,
	ItemContent,
	Hr,
	BtnItemContent,
	BtnItemContentNormal,
	BoxBackground,
	ButtonBack,
	IconBack,
} from './styled';

const Sidebar = ({ closeAction, activeSidebar, mapToViews }: SideBarType) => {
	const [state, setState] = useState<ViewType>({
		views: [],
		props: [],
	});

	const next = (view: React.FC, props: Object) => {
		const newViews = state.views;
		newViews.push(view);
		const newProps = state.props;
		newProps.push(props);
		console.log(state.props);
		setState({ ...state, views: newViews, props: newProps });
	};

	const back = () => {
		const backView = state.views;
		backView.pop();

		const backProp = state.props;
		backProp.pop();

		setState({ ...state, views: backView, props: backProp });
	};
	return (
		<>
			<BoxBackground
				activeSidebar={activeSidebar}
				onClick={closeAction}
			></BoxBackground>
			<Container activeSidebar={activeSidebar}>
				<BoxControls>
					{state.views.length == 0 ? (
						<BoxLogo>
							<Logo />
						</BoxLogo>
					) : (
						<ButtonBack onClick={back}>
							<IconBack />
							Atrás
						</ButtonBack>
					)}
					<BoxClose>
						<IconClose onClick={closeAction} />
					</BoxClose>
				</BoxControls>
				<Hr />

				<Content>
					{state.views.length == 0 ? (
						<>
							<ItemContent>
								<BtnItemContentNormal onClick={closeAction}>
									Home
								</BtnItemContentNormal>
							</ItemContent>

							{mapToViews?.map((e, index) => {
								return (
									<ItemContent key={index}>
										<BtnItemContent
											title={e.name}
											onClick={() =>
												next(e.content, {
													next,
													title: e.name,
													navigationNode: e.navigationNode,
												})
											}
										/>
									</ItemContent>
								);
							})}
						</>
					) : (
						state.views.map((CurrentView, index) => {
							return (
								index == state.views.length - 1 && (
									<CurrentView
										key={index}
										{...state.props[state.props.length - 1]}
									/>
								)
							);
						})
					)}
				</Content>
			</Container>
		</>
	);
};

export default Sidebar;
