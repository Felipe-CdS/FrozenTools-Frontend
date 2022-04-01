import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MainFrame = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
	background-color: var(--primary-background);

	min-height: calc(100vh - 60px);

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	h6 {
		font-size: 24px;
	}

`;