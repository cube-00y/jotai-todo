import { TodoItemCheckbox, TodoItemWrapper } from "@/components/Todo/Item/style";
import { ITodoListItem } from "@/store/todo/type";

export default function TodoItem({ id, title, complete }: ITodoListItem) {
	return (
		<TodoItemWrapper>
			<TodoItemCheckbox type="checkbox" checked={complete} />
		</TodoItemWrapper>
	);
}
