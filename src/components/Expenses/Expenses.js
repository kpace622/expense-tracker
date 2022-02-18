import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
	const [ filterYear, setFilterYear ] = useState('2020')  

	const filteredExpenses = props.data.filter(expense => {
		return expense.date.getFullYear().toString() === filterYear;
	})

	const onFilterYear = (filteredYear) => {
		setFilterYear(filteredYear)
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter selected={filterYear} onFilterYear={onFilterYear}/>
				{filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
			</Card>
		</div>
	)
}

export default Expenses;