import { Button, Card, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
import useStyles from "../styles";
import { EDIT_BUDGET } from "../ActionTypes";

function Budget() {
  const classes = useStyles();
  const { budget, dispatch } = useContext(AppContext);
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch({
      type: EDIT_BUDGET,
      payload: data.budget,
    });
  };
  return (
    <Card className={`${classes.card} ${classes.budgetCard}`}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          size="small"
          fullWidth
          label="Budget"
          type="number"
          color="primary"
          {...register("budget", { required: true })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.mt10}
          type="submit"
        >
          Edit
        </Button>
        {errors.budget && (
          <>
            <br />
            <span>Budget is required</span>
            <br />
          </>
        )}
      </form>
      <br />
      <strong>Budget:</strong> ${budget}
    </Card>
  );
}

export default Budget;
