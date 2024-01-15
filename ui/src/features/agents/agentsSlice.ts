import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { AxiosError } from "axios";

export interface Agent {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  address: string;
  phone: string;
  position: string;
  salary: number;
  startDate: string;
  id: string;
}

export interface Agents {
  agents: Agent[];
}

export interface LoadingError {
  loading: boolean;
  error: null | string;
}

export interface ErrorBase<T> {
  error?: T;
  message: T;
}

export const getAgents = createAsyncThunk("getAgents", async () => {
  try {
    const response = await api.get("/api/agents");
    return response.data;
  } catch (error) {
    const { message } = error as ErrorBase<Error | AxiosError>;
    throw message || "Error occurred";
  }
});

const initialState: Agents & LoadingError = {
  agents: [],
  loading: false,
  error: null,
};

export const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAgents.fulfilled, (state, { payload }) => {
        state.agents = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAgents.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message as string;
      });
  },
});

export default agentsSlice.reducer;
