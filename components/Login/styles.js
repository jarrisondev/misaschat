import styled from 'styled-components'

export const LoginStyled = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;

	justify-content: space-around;

	div:nth-of-type(1) {
		text-align: center;
		width: 90%;

		h1 {
			font-size: 3rem;
		}

		p {
			font-size: 1.3rem;
		}
	}

	form {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 35%;

		width: 100%;

		p {
			font-size: 1.2rem;
			cursor: pointer;
			text-decoration: underline;
		}
	}

	button {
		background-color: #31ff6c;
		border: none;
		border-radius: 20px;
		color: white;

		cursor: pointer;
		font-size: 1.2rem;
		font-weight: 700;
		height: 13%;

		width: 50%;

		&:hover {
			background: #11c054;
		}
	}
`
