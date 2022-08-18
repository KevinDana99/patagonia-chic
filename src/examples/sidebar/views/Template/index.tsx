import React from 'react';
import { SecondaryButton } from '../../../../components';
import { SidebarPropsType } from '../../../../components/navbars/SideBar/types';
import { Title } from './styled';

const Template = ({ next, navigationNode, RenderView }: SidebarPropsType) => {
	return (
		<>
			{navigationNode?.map((e, index) => {
				return (
					<SecondaryButton
						key={index}
						title={e.name}
						onClick={() =>
							next &&
							next(e.content, {
								title: e.name,
								next,
								navigationNode: e.navigationNode,
							})
						}
					/>
				);
			})}

			{RenderView && <RenderView />}
		</>
	);
};

export default Template;
