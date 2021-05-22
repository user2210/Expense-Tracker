import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "./Card";
import "../css/Card.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
          id={item.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
