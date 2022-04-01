import styled from "styled-components";

export const Card = styled.div`

	width: 160px !important;
	height: 180px;
	border: 2px solid;
	border-radius: 10px;

	padding: 0.5rem;

	display: flex;
	flex-direction: column;
	align-items: flex-end !important;
	justify-content: flex-end !important;

	background-color: var(--secondary-background);

	text-decoration: none;

	position: relative;
`;

export const CardTitle = styled.a`
	text-align: center;
	width: 100% !important;
	font-size: 15px;
	margin-bottom: 0.5rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const CardPicture = styled.a`

	width: 90px !important;
	height: 90px !important;
	border: 3px solid;
	border-radius: 50%;

	background-image: url(${props => props.picture});
	background-size: contain;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -130%);
`;

export const CardInfo = styled.div`
	height: auto;	
	display: flex;
	flex-direction: row !important;
	align-items: center;
	justify-content: center;
	margin-bottom: 0.5rem;

	a {
		font-size: 20px !important;
		margin-bottom: 0.3rem !important;
		text-align: center;
		font-weight: 700;
		text-decoration: none;
	}

	div {
		margin-right: 10px;
	}

	span {
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 11px;
		text-align: center;
	}	
`;

export const CardLinks = styled.div`

	width: 100%;
	display: flex;
	justify-content: flex-end;

	img {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}

	button {
		width: 20px;
		height: 20px;
		background-color: transparent;
	}
`;