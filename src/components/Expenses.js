import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
