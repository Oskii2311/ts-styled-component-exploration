import * as React from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import "./App.css";

interface InterfaceState {
	clicksCount: number;
}

const initialState = { clicksCount: 0 };

class App extends React.Component<object, InterfaceState> {
	public state: InterfaceState = initialState;

	public increment = () => {
		let { clicksCount } = this.state;
		this.setState({ clicksCount: ++clicksCount });
	};

	public decrement = () => {
		let { clicksCount } = this.state;
		if (clicksCount <= 0) {
			return;
		}
		this.setState({ clicksCount: --clicksCount });
	};

	public render() {
		return (
			<div className="App">
				<Counter clicksCount={this.state.clicksCount} />
				<Button primary={true} click={this.increment}>
					INCREMENT
				</Button>
				<Button primary={false} click={this.decrement}>
					DECREMENT
				</Button>
			</div>
		);
	}
}

export default App;
