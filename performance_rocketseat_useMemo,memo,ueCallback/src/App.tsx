import { useMemo, useState, useCallback } from "react";
import "./App.css";
import { Item } from "./components/Item";
import CreateAccountForm from "./components/form";

function App() {
	const [items, setItens] = useState<string[]>([]);

	const [newItem, setNewItem] = useState("");

	const [wishList, setWishList] = useState<string[]>([]);

	function addItemToList() {
		setItens([...items, `Item ${items.length}`]);
	}

  //toda vez que app é criado (ex mudança de estado do newItem), a função é recriada, com uma diferente posição na memória, logo o copmponente Item é re-renderizado mesmo sem ter mudado
	const addItemToWishList = useCallback(
		(item: string) => {
			// setWishList([...wishList, item]); //atualiazando um estado, que depende dele mesmo, ao inves de passar informação passar a função
			setWishList(state => [...state, item]);
		},[]);

	// toda vez que a pessoa digita no input a função e a contante é recalculado do zero
	const countItemsWithOne = useMemo(() => {
		console.log("teste");

		return items.filter((item) => item.includes("1")).length;
	}, [items]);

	return (
		<div>
			<input
				type="text"
				onChange={(e) => setNewItem(e.target.value)}
				value={newItem}
			/>
			<button onClick={addItemToList}>Add</button>
			<ul>
				{items.map((item) => {
					return (
						<Item
							title={item}
							key={item}
							onAddItemToWishList={addItemToWishList}
							countItemsWithOne={countItemsWithOne}
						/>
					);
				})}
			</ul>
			<p>Contagem: {countItemsWithOne}</p>

			{/* Outro exemplo de useMemo */}
			<CreateAccountForm />
		</div>
	);
}

export default App;
