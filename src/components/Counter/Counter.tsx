import * as React from "react";
import CounterContainer from "./CounterStyled";

interface InterfaceProps {
	clicksCount: number;
}

class Counter extends React.Component<InterfaceProps, {}> {
	public render() {
		return <CounterContainer>{this.props.clicksCount}</CounterContainer>;
	}
}

export default Counter;
