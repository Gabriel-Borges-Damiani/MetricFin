import { createSlice } from "@reduxjs/toolkit";

const createEmptyMonth = () => ({
  salary: "",
  extraIncome: "",
  expenses: {
    moradia: "",
    alimentacao: "",
    transporte: "",
    saude: "",
    lazer: "",
    educacao: "",
    compras: "",
    outros: "",
  },
  saved: "",
  invested: "",
});

const getCurrentMonth = () => {
  const today = new Date();

  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0",
  )}`;
};

const financeSlice = createSlice({
  name: "finance",

  initialState: {
    months: {},
    selectedMonth: getCurrentMonth(),
  },

  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },

    updateMonth: (state, action) => {
      const { month, values } = action.payload;
      state.months[month] = values;
    },

    updateMonthField: (state, action) => {
      const { month, field, value } = action.payload;

      if (!state.months[month]) {
        state.months[month] = createEmptyMonth();
      }

      state.months[month][field] = value;
    },

    updateMonthExpense: (state, action) => {
      const { month, field, value } = action.payload;

      if (!state.months[month]) {
        state.months[month] = createEmptyMonth();
      }

      state.months[month].expenses[field] = value;
    },

    resetMonth: (state, action) => {
      delete state.months[action.payload];
    },
  },
});

export const {
  setSelectedMonth,
  updateMonth,
  updateMonthField,
  updateMonthExpense,
  resetMonth,
} = financeSlice.actions;

export default financeSlice.reducer;
