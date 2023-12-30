import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://connections-api.herokuapp.com
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            console.log(response)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);