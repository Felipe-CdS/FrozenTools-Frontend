import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: flex-start;

    min-height: 100%;
    width: 80px;

    box-shadow: 0px 0px 0px 2px var(--border);  
	background-color: var(--secondary-background);

	a {
		text-align: center;
	}

	img {
		height: 30px;
		margin: 12px 0;
		vertical-align: middle;
		fill: wheat;
	}
`;