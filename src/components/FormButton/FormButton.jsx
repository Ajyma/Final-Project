import React from 'react'
import cls from './FormButton.module.scss'

const FormButton = ({handleSubmit}) => {
  return (
    <button className={cls.go} onClick={handleSubmit}>
      Отправить
    </button>
  )
}

export default FormButton