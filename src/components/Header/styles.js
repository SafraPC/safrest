import styled, { css } from "styled-components";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const MyNavBar = styled(Navbar)`
	height: 86px;
	background-color: ${props=>props.theme.headerColor};
	max-width: 100vw !important;
	border: 0 !important;

	@media (max-width: 995px) {
		height: auto;
	}

	.headerTitle {
		height: auto;
		width: auto;
		cursor: pointer !important;
		z-index: 10;

		> a label {
			color: white !important;
			text-transform: uppercase;
			padding: 1rem;
			cursor: pointer !important;
			font-size: 26px;
		}
	}
`;

const textsCss = css`
	font-size: 16px;
	font-weight: 500;
	color: white;
`;

export const MyNav = styled(Nav)`
div.switchLinks {
		height: 86px !important;
		padding: 0rem 0.5rem !important;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		top: 0;
		border-radius: 0.3rem;
		>div{
			margin-left:1rem;
		}
		@media(min-width:1000px){
		margin-right:2rem;	
		}
}
	div.headerLinks {
		height: 86px !important;
		padding: 0rem 0.5rem !important;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		position: sticky;
		top: 0;
		transition: background-color 0.2s ease-in-out;
		border-radius: 0.3rem;

		&:hover {
			background-color: ${props=>props.theme.headerHover};
		}
		@media (max-width: 995px) {
			height: 60px !important;
			padding: 0.5rem !important;
		}
	}
	span.texts {
		${textsCss}
		> a {
			font-size: 16px;
			font-weight: 500;
			color: white !important;
		}
	}
`;

export const MyNavDropdown = styled(NavDropdown)`
	&.headerSuperLink {
		min-height: 86px !important;
		padding: 0rem 0.5rem !important;
		display: flex;
		flex-direction: column;
		text-align: center;
		background-color: var(--color-freela-pink);
		justify-content: center;
		cursor: pointer;
		position: sticky;
		top: 0;
		color: white !important;
		transition: background-color 0.2s ease-in-out;
		border-radius: 0.2rem;
		line-height: 30px;
	}
	&.texts a {
		font-size: 16px;
		font-weight: 500;
		color: white !important;
	}
`;
