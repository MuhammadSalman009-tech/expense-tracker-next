import { createContext, useReducer } from "react";
import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_BUDGET } from "../ActionTypes";
const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:
      const id = action.payload;
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== id),
      };
    case EDIT_BUDGET:
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 0,
  expenses: [
    /*{ id: 1, name: "grocery expense", cost: 5550 }*/
  ],
};

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
