import React from 'react';
import CustomIcon from '../../../../graphics/CustomIcon';
import Text from '../../../../texts/Text';
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation';
import {
	BoxImage,
	Image,
	BoxItemList,
	BoxSubtitle,
	Description,
	ItemList,
	SubTitle,
	Title,
} from './styled';
import { ListPropsType } from './types';

const List = ({
	list,
	handleItemSelected,
	horizontalPadding,
	edgesItemsAddedPadding,
	showItemSubtitle,
}: ListPropsType) => {
	const [keyboardSelectedIndex, setKeyboardSelectedIndex] =
		useKeyboardNavigation(list.length, (index) =>
			handleItemSelected(list[index])
		);

	return (
		<BoxItemList>
			{list.map((item, index) => {
				return (
					<ItemList
						key={index}
						onMouseOver={() => setKeyboardSelectedIndex(index)}
						onMouseMove={() => setKeyboardSelectedIndex(index)}
						onMouseOut={() => setKeyboardSelectedIndex(-1)}
						onClick={() => handleItemSelected(item)}
						selected={index === keyboardSelectedIndex}
						horizontalPadding={horizontalPadding}
						edgesItemsAddedPadding={edgesItemsAddedPadding}
					>
						<BoxImage>
							{item.img ? (
								<Image src={item.img} />
							) : (
								<CustomIcon name="island" size={25} />
							)}
						</BoxImage>
						<Description>
							<Title>
								<Text size={15} weight={'medium'}>
									{item.name}
								</Text>
							</Title>
							{showItemSubtitle && (
								<BoxSubtitle>
									<SubTitle>
										<Text size={12} weight={'regular'} color={'#888888'}>
											{item.category || `${item.province} - ${item.country}`}
										</Text>
									</SubTitle>
								</BoxSubtitle>
							)}
						</Description>
					</ItemList>
				);
			})}
		</BoxItemList>
	);
};

export default List;
