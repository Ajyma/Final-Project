import React from 'react'
import { useNavigate } from "react-router-dom";
import cls from './Register.module.scss'

const Register = () => {
  const navigate = useNavigate()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [error, setError] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name , email , password) {
      navigate('/auth/login')
    } else {
      console.log(error);
      setError('Заполните все поля!')
    }
  }

  return (
    <form className={cls.register} onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      <input 
        type="text" 
        placeholder='Имя'
        value={name}
        onChange={e => setName(e.target.value)}
      />
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
            {error}
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
          onClick={() => navigate('/auth/login')} 
          className={cls.signIn}
        >
          Вход в кабинет
        </button>
      </div>
    </form>
  )
}

export default Register