import createDataContext from "../context/createDataContext";
import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  []
);
