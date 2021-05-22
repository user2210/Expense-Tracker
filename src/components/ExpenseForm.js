import React, { useState } from "react";
import "../css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [initTitle, setInitTitle] = useState("");
  const [initAmount, setInitAmount] = useState("");
  const [initDate, setInitDate] = useState("");

  const titleHandler = (e) => {
    setInitTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setInitAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setInitDate(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setInitAmount("");
    setInitDate("");
    setInitTitle("");
    const expenseData = {
      title: initTitle,
      amount: initAmount,
      date: initDate,
    };
    props.onSaveData(expenseData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Expense Item"
            value={initTitle}
            onChange={titleHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Expense amount"
            min="0.01"
            step="0.01"
            value={initAmount}
            onChange={amountHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={initDate}
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={clickHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
