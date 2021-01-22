import createDataContext from "./createDataContext";
import dadosApi from "../api/dados";
import React, { useState } from "react";

const familyReducer = (state, action) => {
  switch (action.type) {
    case "register":
      return state;

    case "readFamilies":
      return action.payload;

    case "findFamily":
      return state;

    default:
      return state;
  }
};

const RegisterFamily = (dispatch) => async (values, loading, callback) => {
  await dadosApi.post("/novafamilia", values);

  dispatch({ type: "register", payload: { values } });

  if (loading) loading();
  if (callback) callback();
};

const ReadFamilies = (dispatch) => async (callback) => {
  const families = await dadosApi.get("/familias");

  dispatch({ type: "readFamilies", payload: families.data });
  if (callback) callback();
};

const FindFamily = (dispatch) => () => {
  console.log(this.state);

  dispatch({ type: "findFamily" });
};

const DisableFamily = (dispatch) => async (id) => {
  const response = await dadosApi.post("/familia/disable", id);

  console.log(response.data);

  dispatch({ type: "register" });
  dispatch;
};

export const { Context, Provider } = createDataContext(
  familyReducer,
  { RegisterFamily, ReadFamilies, FindFamily, DisableFamily },
  []
);
