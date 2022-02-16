import styled from "@emotion/styled";

export const TodoItemWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 10px 0;
	border-bottom: 1px solid #ccc;
`;

export const TodoItemCheckbox = styled.input`
	width: 16px;
	height: 16px;
`;

export const TodoItemTitle = styled.p`
	font-size: 14px;
	margin-left: 6px;
`;
