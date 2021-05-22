import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../css/ExpenseItem.css";
import Card from "./Card";
//import "../css/Card.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
    </Card>
  );
};

export default ExpenseItem;
