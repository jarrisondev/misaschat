import styled from 'styled-components'

export const FormStyled = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 50%;

	justify-content: space-around;
	width: 80%;

	label {
		align-items: center;
		background-color: #fafafa;
		border-radius: 5px;
		display: flex;

		height: 25%;
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
`
