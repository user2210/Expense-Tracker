import React from "react";
import "../css/ExpenseDate.css";
import Card from "./Card";
//import "../css/Card.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expense-date">
      <Card className="expense-date__day">{day}</Card>
      <Card className="expense-date__month">{month}</Card>
      <Card className="expense-date__year">{year}</Card>
    </Card>
  );
};

export default ExpenseDate;
