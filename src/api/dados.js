import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

let url;
if (__DEV__) {
<<<<<<< HEAD
  url = "http://d1e17c8d1fd1.ngrok.io/";
=======
  url = "http://45b7631c5de4.ngrok.io";
>>>>>>> master
} else {
  url = "";
}

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
