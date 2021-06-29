import React, { useState } from "react";

import ExpenseItem from "./ExpenesItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseFilter.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2019");

  const yearChangeHandler = (year) => {
    // console.log("Expenses.js");
    // console.log(year);
    setEnteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        {/* selected={enteredYear} means you're passing the value back to
         * ExpenseFilter as props, so it'll reflect the chosen 2019 year
         * in the drop down menu.Otherwise, it'll automatically be 2022.
         *
         * Access this value in ExpensesFilter by doing value={props.selected}
         *
         * This is called two-way binding because you first passed value from
         * ExpenseFilter to Expenses, now you're passing value back from
         * Expenses to ExpenseFilter.
         */}
        <ExpenseFilter
          selected={enteredYear}
          onFilterExpense={yearChangeHandler}
        />

        {/* Map every expense items into an ExpenseItem */}
        {props.items
          .filter(
            (expense) => expense.date.getFullYear().toString() === enteredYear
          )
          .map((expense) => (
            <ExpenseItem
              key={expense.id} // It's important to always add a key when you're mapping out a list of items
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}

        {/* Hard-coding the values in */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
