import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import { AppContext } from "../context/AppContext";

function ExpenseTotal() {
  const { expenses } = useContext(AppContext);
  const expenseTotal = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const classes = useStyles();
  return (
    <Card className={`${classes.card} ${classes.expensetotalCard}`}>
      Expense so for: ${expenseTotal}
    </Card>
  );
}

export default ExpenseTotal;
