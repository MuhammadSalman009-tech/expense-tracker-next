import { createContext, useReducer } from "react";
import {
  ADD_EXPENSE,
  ADD_INCOME,
  DELETE_EXPENSE,
  DELETE_INCOME,
  EDIT_BUDGET,
} from "../ActionTypes";
const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case DELETE_EXPENSE:
      const expenseId = action.payload;
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== expenseId),
      };
    case DELETE_INCOME:
      const incomeId = action.payload;
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== incomeId),
      };
    // case EDIT_BUDGET:
    //   return {
    //     ...state,
    //     budget: action.payload,
    //   };
    default:
      return state;
  }
};

const initialState = {
  budget: 0,
  expenses: [
    /*{ id: 1, name: "grocery expense", cost: 5550 }*/
  ],
  incomes: [
    /*{ id: 1, name: "grocery expense", cost: 5550 }*/
  ],
};

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        incomes: state.incomes,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
