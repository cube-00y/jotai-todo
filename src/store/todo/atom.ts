import { atom } from "jotai";
import { ITodoListItem } from "@/store/todo/type";

const todoListAtom = atom<ITodoListItem[]>([]);

export const getTodoAtoms = () => ({
	todoListAtom,
});
