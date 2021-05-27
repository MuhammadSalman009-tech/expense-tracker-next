import { Card, Divider, ListItem } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext } from "../context/AppContext";
import { DELETE_EXPENSE, DELETE_INCOME } from "../ActionTypes";

function IncomeItem({ income }) {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <Card
        className={`${classes.listItem} ${classes.incomeCard} ${classes.card}`}
      >
        {income.name}
        <div>
          <span className={classes.priceBadge}>
            ${income.cost}
            {/* <Badge color="primary" badgeContent={expense.cost} /> */}
          </span>
          <span>{income.expenseType.toUpperCase()}</span>
          <span className={classes.deleteIcon}>
            <DeleteIcon
              onClick={() => {
                dispatch({
                  type: DELETE_INCOME,
                  payload: income.id,
                });
              }}
            />
          </span>
        </div>
      </Card>
    </>
  );
}

export default IncomeItem;
