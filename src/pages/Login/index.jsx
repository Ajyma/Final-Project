import React from 'react'
import { useNavigate } from "react-router-dom";
import cls from './Login.module.scss'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [error, setError] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email , password) {
      navigate('/')
    } else {
      console.log(error);
      setError('Заполните все поля!')
    }
  }

  return (
    <form className={cls.register} onSubmit={handleSubmit}>
      <h1>Войти в кабинет</h1>
      <input 
        type="email" 
        placeholder='Электронная почта'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder='Пароль'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {
        error && (
          <h4 className={cls.error}>
            Неверный логин или пароль
          </h4>
        )
      }
      <div>
        <button  
          type='submit'
          className={cls.go}
        >
          Отправить
        </button>
        <button 
          onClick={() => navigate('/auth/register')} 
          className={cls.signIn}
        >
          Регистрация
        </button>
      </div>
    </form>
  )
}

export default Login