import { useAtom } from "jotai";
import React, { useState } from "react";
import TodoItem from "@/components/Todo/Item";
import {
	TodoContainer,
	TodoContainerAddItemButton,
	TodoContainerAddItemInput,
	TodoContainerAddItemWrapper,
	TodoContainerListWrapper,
	TodoContainerNoResult,
	TodoContainerTitle,
} from "@/components/Todo/Wrapper/style";
import { getTodoAtoms } from "@/store";
import { ITodoListItem } from "@/store/todo/type";

export default function TodoWrapper() {
	const { todoListAtom } = getTodoAtoms();
	const [todoList] = useAtom(todoListAtom);
	const [todoText, setTodoText] = useState("");
	const { getTodoListLastIndexAtom, setAddTodoListAtom } = getTodoAtoms();

	const [todoListLastIndex] = useAtom(getTodoListLastIndexAtom);
	const [, addTodoListAtom] = useAtom(setAddTodoListAtom);

	const handleChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoText(e.target.value);
	};

	const handleClickAddTodo = () => {
		if (!todoText) {
			return;
		}

		const todoItem: ITodoListItem = {
			id: todoListLastIndex + 1,
			title: todoText,
			complete: false,
		};

		addTodoListAtom(todoItem);
		setTodoText("");
	};

	return (
		<div>
			<TodoContainer>
				<TodoContainerTitle>Todo List</TodoContainerTitle>

				<TodoContainerListWrapper>
					{todoList.length > 0 ? (
						todoList.map((todoValue) => {
							return <TodoItem key={todoValue.id} {...todoValue} />;
						})
					) : (
						<TodoContainerNoResult>목록이 없습니다</TodoContainerNoResult>
					)}
				</TodoContainerListWrapper>
			</TodoContainer>

			<TodoContainerAddItemWrapper>
				<TodoContainerAddItemInput
					value={todoText}
					onChange={handleChangeTodoInput}
					placeholder="할 일 입력"
				/>
				<TodoContainerAddItemButton onClick={handleClickAddTodo}>
					추가
				</TodoContainerAddItemButton>
			</TodoContainerAddItemWrapper>
		</div>
	);
}
