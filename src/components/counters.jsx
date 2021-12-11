import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		const { onReset, onIncrement, onDelete } = this.props;
		return (
			<div>
				<button onClick={onReset} className='btn btn-primary'>
					reset
				</button>

				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						counterUp={onIncrement}
						onDelete={onDelete}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
