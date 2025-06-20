import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

const userSlice = createSlice({
  name: "user",
  initialState: storedUser ? JSON.parse(storedUser) : null,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    logout: () => {
      localStorage.removeItem("user");
      return null;
    },
    updateUser: (state, action) => {
      const updatedUser = { ...state, ...action.payload };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    }
  }
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;