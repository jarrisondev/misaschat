import styled from 'styled-components'

export const FormStyled = styled.form`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 30%;

	justify-content: space-around;
	width: 80%;

	label {
		align-items: center;
		background-color: #fafafa;
		border-radius: 5px;
		display: flex;

		height: 15%;
		width: 100%;

		img {
			padding-left: 0.5rem;
			width: 7%;
		}

		input {
			background-color: transparent;
			border: none;
			height: 100%;
			margin-left: 0.8rem;

			outline: none;
			width: 93%;

			&::placeholder {
				font-size: 1.1rem;
			}
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
		height: 15%;

		width: 50%;

		&:hover {
			background: #11c054;
		}
	}
	p {
		font-size: 1.2rem;
		text-decoration: underline;
	}
`
