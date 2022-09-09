import React from 'react';
import { SidebarPropsType } from '../../../../components/navbars/SideBar/types';
import { ItemButton, ItemContent } from './styled';

const Template = ({ next, navigationNode, RenderView }: SidebarPropsType) => {
	return (
		<>
			{navigationNode?.map((e, index) => {
				return (
					<ItemContent
						key={index}
						onClick={() =>
							next &&
							next(e.content, {
								next,
								title: e.name,
								navigationNode: e.navigationNode,
								RenderView: e.RenderView,
							})
						}
					>
						<ItemButton title={e.name} />
					</ItemContent>
				);
			})}

			{RenderView && <RenderView />}
		</>
	);
};

export default Template;
