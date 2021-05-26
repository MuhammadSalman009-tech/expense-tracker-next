import { Divider, ListItem } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext } from "../context/AppContext";
import { DELETE_EXPENSE } from "../ActionTypes";

function ExpenseItem({ expense }) {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <ListItem className={classes.listItem}>
        {expense.name}
        <div>
          <span className={classes.priceBadge}>
            ${expense.cost}
            {/* <Badge color="primary" badgeContent={expense.cost} /> */}
          </span>
          <span className={classes.deleteIcon}>
            <DeleteIcon
              onClick={() => {
                dispatch({
                  type: DELETE_EXPENSE,
                  payload: expense.id,
                });
              }}
            />
          </span>
        </div>
      </ListItem>
      <Divider />
    </>
  );
}

export default ExpenseItem;
