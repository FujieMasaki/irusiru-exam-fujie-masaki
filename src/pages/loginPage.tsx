import React from 'react';
import { useLoginParams } from '../hooks';
export const LoginPage = () => {
    // 問題④以下の変数・関数の型がUNION型になっています。適切な型になるよう修正してください
    const [
        error,
        handleOnSubmit,
        handleOnChange
    ] = useLoginParams()


    return (
        <div>
            <input 
                type='text' 
                onChange={(e) => (handleOnChange as ((e: React.ChangeEvent<HTMLInputElement>, key: "username" | "password") => void))(e, "username")} 
                placeholder="Username" 
            />
            <input 
                type='password' 
                onChange={(e) => (handleOnChange as ((e: React.ChangeEvent<HTMLInputElement>, key: "username" | "password") => void))(e, "password")} 
                placeholder="Password" 
            />
            <button onClick={(handleOnSubmit as (() => void))}>Login</button>
            {error && <div style={{color: 'red'}}>{error as string}</div>}
        </div>
    );
}