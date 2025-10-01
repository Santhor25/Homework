import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { name: "Clean Code", ISBN: "9780132350884", author: "Robert C. Martin", editorial: "Prentice Hall" },
    { name: "The Pragmatic Programmer", ISBN: "9780201616224", author: "Andy Hunt", editorial: "Addison-Wesley" },
    { name: "Refactoring", ISBN: "9780201485677", author: "Martin Fowler", editorial: "Addison-Wesley" },
  ]
};

const bookStackSlice = createSlice({
  name: 'bookStack',
  initialState,
  reducers: {
    pushBook: (state, action) => {
      state.books.push(action.payload); 
    },
  }
});

export const { pushBook } = bookStackSlice.actions;

export default bookStackSlice.reducer;
