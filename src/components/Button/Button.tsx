import * as React from "react";
import ButtonContainer from "./ButtonStyled";

interface InterfaceProps {
	children: string;
	primary: boolean;
	click?: () => void;
}

const Button: React.StatelessComponent<InterfaceProps> = ({
	children,
	primary,
	click,
}) => (
	<ButtonContainer primary={primary}>
		<button onClick={click}> {children} </button>
	</ButtonContainer>
);

export default Button;
