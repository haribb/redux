import store from "./store";


export const posts = (data) =>
  store.dispatch({
    type: "POST",
    payload: data,
  });

  export const photos = (data) =>
  store.dispatch({
    type: "PHOTO",
    payload: data,
  });