import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const MainFrame = styled.div`
	width: 100%;
    display: flex;
	flex-direction: column;
    justify-content: space-between;
	background-color: var(--primary-background);

	padding: 3rem 5rem;

	min-height: calc(100vh - 60px);

	h1 {
		font-size: 3rem;
	}

	h6 {
		font-size: 24px;
	}
`;


export const CollectionsGrid = styled.div`
	margin-top: 3rem;
	min-width: 100%;
    display: grid;
	grid-template-columns: auto auto auto auto auto auto;
	grid-row-gap: 3.5rem;

`;

