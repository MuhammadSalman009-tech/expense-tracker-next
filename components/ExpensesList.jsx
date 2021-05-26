import { List } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpensesList() {
  const { expenses } = useContext(AppContext);
  return (
    <div>
      <List>
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </List>
    </div>
  );
}

export default ExpensesList;
