import { Button, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../styles";
import { useForm } from "react-hook-form";
import { v4 as idV4 } from "uuid";
import { AppContext } from "../context/AppContext";
import { ADD_EXPENSE } from "../ActionTypes";

function AddExpense() {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const expense = {
      id: idV4(),
      name: data.name,
      cost: parseInt(data.cost),
    };
    dispatch({
      type: ADD_EXPENSE,
      payload: expense,
    });
  };

  return (
    <div className={classes.formContainer}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          label="Name"
          type="text"
          color="primary"
          className={classes.formInput}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <>
            <br />
            <span>Name is required</span>
          </>
        )}
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          label="Cost"
          type="number"
          color="primary"
          className={classes.formInput}
          {...register("cost", { required: true })}
        />
        {errors.cost && (
          <>
            <br />
            <span>Cost is required</span>
            <br />
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          className={classes.mt10}
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddExpense;
