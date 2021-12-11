import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
	constructor() {
		super();
		console.log('App - Contructor'); // another hook

		this.onDelete = this.onDelete.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
	}
	// lifecycle hooks
	componentDidMount() {
		console.log('App - Mounted'); // this will run when the app is created
	}
	componentDidUpdate() {
		console.log('App - Updated'); // this will run when the app is update
	}
	componentWillUnmount() {
		console.log('App - Unmounted'); // this will run when something deleted
	}
	// -------------
	state = {
		counters: [
			{ id: 1, value: 3 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	handleIncrement(counter) {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counter[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	}

	handleReset() {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	}

	onDelete(counterID) {
		const counters = this.state.counters.filter((c) => c.id !== counterID);
		this.setState({ counters });
	}

	render() {
		console.log('App - Rendered');
		return (
			<React.Fragment>
				<Navbar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				/>
				<main className='container m-2'>
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.onDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
