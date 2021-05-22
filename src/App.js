import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tissue Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const receivedExpData = (savedExp) => {
    const expenseData1 = {
      ...savedExp,
      ...expenses,
    };
    console.log(expenseData1);
  };
  return (
    <div>
      <NewExpense addedExpData={receivedExpData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
