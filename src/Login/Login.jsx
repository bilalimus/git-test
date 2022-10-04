import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';


function Login() {
    const [errorMessage, setErrorMessage] = useState(false);
    const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
  
    return (
        <App>
          
          <Forma >
            <h3>Вход в TaskTracker</h3>
            {errorMessage && <p style={{fontWeight:'bold' ,color: 'red', fontSize: 15}}>Login or password isn't correct</p>}
            <input
              placeholder="Укажите адрес электронной почты"
              type="email"
              {...register("email", { required: "Поле обязательно к заполнению" })}
            />
    
            <div>{errors?.email?.message}</div>
    
            <input
              placeholder="Введите пароль"
              type="password"
              {...register("password", {
                required: "Поле обязательно к заполнению",
              })}
            />
    
            <div>
              {errors?.password?.message}
            </div>
    
            <Send type="submit" value="Войти" />
    
            <p>
              Нет аккаунта? 
            </p>
          </Forma>
        </App>
      );
    }
    
    const App = styled.div`
      margin-top: 150px;
    
      img {
        width: 170px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
      }
    `;
    const Forma = styled.form`
      width: 400px;
      height: 400px;
      box-shadow: 0px 0px 2px 0px black;
      margin: 0 auto;
      border-radius: 20px;
      text-align: center;
      h3 {
        margin-bottom: 30px;
        padding-top: 30px;
        font-size: 23px;
        text-align: center;
      }
      input {
        width: 300px;
        height: 40px;
        border: 1px solid green;
        border-radius: 5px;
        font-size: 17px;
        :active{
          border: solid violet
        }
      }
      div{
        color: red;
        height: 30px;
        padding-top: 6px;
        font-weight: bold;
      }
    `;
    const Send = styled.input`
      background-color: green;
      cursor: pointer;
      color: white;
    `;
    


export default Login