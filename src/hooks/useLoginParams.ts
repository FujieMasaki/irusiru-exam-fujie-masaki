import { useState } from "react";
import { CurrentUserManager } from "../recoil";
import { userFactory } from "../mock";

export const useLoginParams = () => {
    const [params, setParams] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleOnSubmit = () => {
        if(params.password === '') {
            setError('Password is required.');
            return;
        }
        
        if(params.username === "admin") {
            CurrentUserManager.set(userFactory("admin"));
        } else {
            CurrentUserManager.set(userFactory("general"));
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, key: "username" | "password" ) => setParams({ ...params, [key]: e.target.value })

    return [
        error,
        handleOnSubmit,
        handleOnChange
    ]
}