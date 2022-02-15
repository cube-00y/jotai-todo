import { useAtom } from "jotai";
import React from "react";
import TodoItem from "@/components/Todo/Item";
import {
	TodoContainer,
	TodoContainerNoResult,
	TodoContainerTitle,
} from "@/components/Todo/Wrapper/style";
import { getTodoAtoms } from "@/store";

export default function TodoWrapper() {
	const { todoListAtom } = getTodoAtoms();
	const [todoList] = useAtom(todoListAtom);

	return (
		<TodoContainer>
			<TodoContainerTitle>Todo List</TodoContainerTitle>

			{todoList.length > 0 ? (
				todoList.map((todoValue) => {
					return <TodoItem {...todoValue} />;
				})
			) : (
				<TodoContainerNoResult>목록이 없습니다</TodoContainerNoResult>
			)}
		</TodoContainer>
	);
}
