import styled from 'styled-components'

export const ModalStyled = styled.div`
	background-color: #dbdbdbaa;
	display: ${(props) => (props.token ? 'initial' : 'none')};
	font-size: 1.2rem;
	height: 100%;

	position: absolute;
	top: 0;
	width: 100%;
	z-index: 10;

	div {
		align-items: center;
		background-color: #149f8d;
		border-radius: 5px;
		bottom: 0;

		display: flex;
		flex-direction: column;
		height: 8rem;
		justify-content: space-between;

		left: 0;
		margin: auto;
		padding: 1rem 2rem;
		position: absolute;

		right: 0;
		top: 0;
		width: 60%;

		button {
			background-color: #31ff6c;
			border: none;
			border-radius: 20px;
			color: white;

			cursor: pointer;
			font-weight: 700;
			height: 30%;
			width: 70%;

			&:hover {
				background: #11c054;
			}
		}
	}
`
