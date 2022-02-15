import styled from "@emotion/styled";

export const TodoContainer = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #ccc;
	padding: 16px;
`;

export const TodoContainerTitle = styled.p`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const TodoContainerNoResult = styled.p`
	font-size: 14px;
	margin: 10px 0;
`;
