import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseFilter.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2019");

  const yearChangeHandler = (year) => {
    setEnteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString === enteredYear;
  });

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
        {/* Outputting conditional content  */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
