import styled from "styled-components";

const ButtonContainer = styled<{ primary: boolean }, "div">("div")`
	width: 200px;
	margin: 20px auto;
	text-align: center;
	font-size: 50px;
	display: inline-block;
	button {
		width: 100px;
		height: 30px;
		border: none;
		border-radius: 4px;
		background: ${props => (props.primary ? "#fff" : "#ccc")};
		cursor: pointer;
		&:hover {
			background: ${props => (props.primary ? "#ccc" : "#fff")};
		}
	}
`;

export default ButtonContainer;
