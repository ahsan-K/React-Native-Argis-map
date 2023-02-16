import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {BASE_URL} from '../utils/constants'

const Login = createAsyncThunk(
    "loginAction", async () => await axios.get(`${BASE_URL}/todos/1`)
);


export default {
    Login
}