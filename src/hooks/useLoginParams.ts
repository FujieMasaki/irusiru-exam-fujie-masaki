import { useState } from "react";
import { CurrentUserManager } from "../recoil";
import { userFactory } from "../mock";

type LoginFormData = {
  username: string;
  password: string;
};

type LoginFormHandlers = [
  error: string,
  handleOnSubmit: () => void,
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof LoginFormData
  ) => void
];

export const useLoginParams = (): LoginFormHandlers => {
  const [params, setParams] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleOnSubmit = () => {
    if (params.password === "") {
      setError("Password is required.");
      return;
    }

    if (params.username === "admin") {
      CurrentUserManager.set(userFactory("admin"));
    } else {
      CurrentUserManager.set(userFactory("general"));
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "username" | "password"
  ) => setParams({ ...params, [key]: e.target.value });

  return [error, handleOnSubmit, handleOnChange];
};
