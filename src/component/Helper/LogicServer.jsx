import { useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const validationSignUp = yup.object().shape({
  username: yup.string().required("Name input must be filled"),
  email: yup
    .string()
    .required("Email input must be filled")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password input must be filled")
    .min(8, "Password input of at least 8 characters"),
  repeatPassword: yup
    .string()
    .required("Repeat Password input must be filled")
    .oneOf([yup.ref("password"), null], "Password does not match"),
});

export const validationLogin = yup.object().shape({
  usernameEmail: yup.string().required("Username / Email input must be filled"),
  password: yup.string().required("Password input must be filled"),
});

export const allMessage = () => {
  const [message, setMessage] = useState("");
  const toastMessage = (type, messages, position = "bottom-right") => {
    setMessage(
      toast[type](messages, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "toast",
      })
    );
  };

  return { toastMessage, message };
};
