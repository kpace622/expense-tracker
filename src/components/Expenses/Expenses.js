import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			<ExpenseItem title={props.data[0].title} date={props.data[0].date} amount={props.data[0].amount}></ExpenseItem>
			<ExpenseItem title={props.data[1].title} date={props.data[1].date} amount={props.data[1].amount}></ExpenseItem>
			<ExpenseItem title={props.data[2].title} date={props.data[2].date} amount={props.data[2].amount}></ExpenseItem>
			<ExpenseItem title={props.data[3].title} date={props.data[3].date} amount={props.data[3].amount}></ExpenseItem>
		</Card>
	)
}

export default Expenses;