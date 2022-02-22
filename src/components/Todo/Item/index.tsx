import { useAtom } from "jotai";
import React from "react";
import {
	TodoItemCheckbox,
	TodoItemTitle,
	TodoItemWrapper,
} from "@/components/Todo/Item/style";
import { getTodoAtoms } from "@/store";
import { ITodoListItem } from "@/store/todo/type";

export default function TodoItem({ id, title, complete }: ITodoListItem) {
	const { setTodoListComplete } = getTodoAtoms();

	const [, setTodoComplete] = useAtom(setTodoListComplete);

	const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoComplete({
			id,
			complete: e.target.checked,
		});
	};

	return (
		<TodoItemWrapper>
			<TodoItemCheckbox
				type="checkbox"
				defaultChecked={complete}
				onChange={handleChangeCheckbox}
			/>
			<TodoItemTitle>{title}</TodoItemTitle>
		</TodoItemWrapper>
	);
}
