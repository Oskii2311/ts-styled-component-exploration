import * as React from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import AppStyled from "./AppStyled";

interface InterfaceState {
	clicksCount: number;
}

const initialState = { clicksCount: 0 };

class App extends React.Component<object, InterfaceState> {
	public state: InterfaceState = initialState;

	public render() {
		return (
			<AppStyled>
				<Counter clicksCount={this.state.clicksCount} />
				<Button primary={true} click={this.increment}>
					INCREMENT
				</Button>
				<Button primary={false} click={this.decrement}>
					DECREMENT
				</Button>
			</AppStyled>
		);
	}

	private increment = () => {
		let { clicksCount } = this.state;
		this.setState({ clicksCount: ++clicksCount });
	};

	private decrement = () => {
		let { clicksCount } = this.state;
		if (clicksCount <= 0) {
			return;
		}
		this.setState({ clicksCount: --clicksCount });
	};
}

export default App;
