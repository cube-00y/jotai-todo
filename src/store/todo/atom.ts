import { atom } from "jotai";
import { ITodoListItem } from "@/store/todo/type";

const todoListAtom = atom<ITodoListItem[]>([]);
const todoListLastIndex = atom<number>(0);

const getTodoListLastIndexAtom = atom((get) => get(todoListLastIndex));
const setAddTodoListAtom = atom<null, ITodoListItem>(null, (get, set, value) => {
	set(todoListAtom, [...get(todoListAtom), value]);
	set(todoListLastIndex, value.id);
});

export const getTodoAtoms = () => ({
	todoListAtom,
	getTodoListLastIndexAtom,
	setAddTodoListAtom,
});
