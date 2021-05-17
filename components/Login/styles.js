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

	div:nth-of-type(2) {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 35%;

		width: 100%;
	}
`
