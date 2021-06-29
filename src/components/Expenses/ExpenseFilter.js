import React from "react";

const ExpenseFilter = (props) => {
  const yearPickedHandler = (event) => {
    // console.log("In ExpenseFilter.js: " + event.target.value);
    props.onFilterExpense(event.target.value); // event.target.value == The selected year
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearPickedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
