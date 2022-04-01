import styled from "styled-components";

export const Container = styled.div`
    display: flex;
	justify-content: space-between;

    width: calc(100vw - 80px);
    min-height: 60px;
    padding: 0 20px 0 15px;

	a {
		text-align: center;
	}

	img {
		height: 40px;
		margin: 15px 0;
		vertical-align: middle;
		fill: wheat;
	}
`;

export const SearchBar = styled.form`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: calc(100vw - 35rem);

    input {
        height: 100%;
        width: 100%;
        background-color: transparent;
        font-size: 14px;
        color: var(--secondary-background);
    }

    img {
		height: 25px;
		margin: 0 15px 0 0;
		vertical-align: middle;
	}
`;

export const StatsDiv = styled.div`
    display: flex;
    align-items: center;
    vertical-align: center;
    font-weight: 700;
    height: 60px;

    * {
    margin-right: 20px;
    }

    *:last-child {
        margin-right: 0;
    }
`;

export const StatsLine = styled.div`

    display: flex;
    align-items: center;
    vertical-align: center;
    font-weight: 700;

    width: auto;

    p {
        font-size: 15px;  
        color: var(--secondary-background);      
    }

    svg {
        width: 15px;
        height: 15px;
        fill: var(--secondary-background); 
        margin-right: 5px;
    }

    span {
        width: 8px;
        height: 8px;
        background-color: green;
        border-radius: 50%;
        margin-right: 5px;
    }

    img {
        margin-right: 5px;
    }
`;

export const StyledButton = styled.div`

    img {
		height: 30px;
	}
`;