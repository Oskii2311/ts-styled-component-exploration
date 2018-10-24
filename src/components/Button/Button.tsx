import * as React from "react";
import ButtonContainer from "./ButtonStyled";

interface InterfaceProps {
	children: string;
	primary: boolean;
	click?: () => void;
}

const Button = ({ children, primary, click }: InterfaceProps) => (
	<ButtonContainer primary={primary}>
		<button onClick={click}> {children} </button>
	</ButtonContainer>
);

export default Button;
