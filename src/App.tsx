import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import TodoWrapper from "@/components/Todo/Wrapper";
import reset from "@/styles/reset";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function App() {
	return (
		<div>
			<Global styles={reset} />
			<Wrapper>
				<TodoWrapper />
			</Wrapper>
		</div>
	);
}
