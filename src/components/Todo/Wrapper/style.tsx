import styled from "@emotion/styled";

export const TodoContainer = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #ccc;
	padding: 16px;
	margin-bottom: 20px;
`;

export const TodoContainerTitle = styled.p`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const TodoContainerListWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 400px;
	overflow-y: auto;
`;

export const TodoContainerNoResult = styled.p`
	font-size: 14px;
	margin: 10px 0;
`;

export const TodoContainerAddItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TodoContainerAddItemInput = styled.input`
	width: 0;
	flex-grow: 1;
	margin-right: 16px;
	line-height: 30px;
	padding: 0 8px;
`;

export const TodoContainerAddItemButton = styled.button`
	width: 60px;
	font-size: 14px;
	line-height: 30px;
`;
