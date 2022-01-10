import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../Expenses/Expenses.css';

const Expenses = (props) => {
        var data = props.item;
        data.forEach((item) => {
            console.log(item);
        })
        return(
            <Card className = "expenses">
                {data.map((_item)=> (
                    <ExpenseItem title = {_item.title} amount = {_item.amount} date={_item.date} id={_item.id}  key ={_item.id} />
                ))}
                {/* <ExpenseItem title = {props.item[0].title} amount = {props.item[0].amount} date ={props.item[0].date} ></ExpenseItem>
                <ExpenseItem title = {props.item[1].title} amount = {props.item[1].amount} date ={props.item[1].date} ></ExpenseItem>
                <ExpenseItem title = {props.item[2].title} amount = {props.item[2].amount} date ={props.item[2].date} ></ExpenseItem>
                <ExpenseItem title = {props.item[3].title} amount = {props.item[3].amount} date ={props.item[3].date} ></ExpenseItem> */}
            </Card>
        );
}

export default Expenses;