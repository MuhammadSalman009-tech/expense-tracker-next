import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import useStyles from "../styles";

function Remaining() {
  const classes = useStyles();
  const { expenses, budget } = useContext(AppContext);
  const expenseTotal = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = expenseTotal > budget ? "card-danger" : "card-success";

  return (
    <Card className={`${classes.card} ${alertType}`}>
      Remaining: ${budget - expenseTotal}
    </Card>
  );
}

export default Remaining;
