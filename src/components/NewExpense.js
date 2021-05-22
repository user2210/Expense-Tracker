import React from "react";
import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const savedExpData = (enteredExpData) => {
    const expData = {
      ...enteredExpData,
      id: Math.random().toString(),
    };
    //console.log(expData);
    props.addedExpData(expData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={savedExpData} />
    </div>
  );
};

export default NewExpense;
