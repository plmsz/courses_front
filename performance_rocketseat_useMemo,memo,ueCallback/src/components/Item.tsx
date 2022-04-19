import { memo } from "react";

type ItemProps = {
	title: string;
	onAddItemToWishList: (item: any) => void;
	countItemsWithOne: number
};

function ItemCoponent(props: ItemProps) {
	return (
		<li>
			{props.countItemsWithOne}
			{props.title}{" "}
			<button onClick={() => props.onAddItemToWishList(props.title)}>
				Add to wishlist
			</button>
		</li>
	);
}

export const Item = memo(ItemCoponent);
