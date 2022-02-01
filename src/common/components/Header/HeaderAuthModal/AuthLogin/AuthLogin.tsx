import React from 'react'

import { Form, Formik } from 'formik'

import { InputField } from 'src/common/components/_formik/InputField/InputField'
import { TextPhoneField } from 'src/common/components/_formik/TextPhoneField/TextPhoneField'
import { Button } from 'src/common/components/Button/Button'

import { AuthModalHeader } from '../AuthModalHeader/AuthModalHeader'

import s from './AuthLogin.module.scss'

enum FormInputNames {
  LOGIN = 'login',
  PASSWORD = 'password',
}

const FORM_INITIAL_VALUES = {
  [FormInputNames.LOGIN]: '',
  [FormInputNames.PASSWORD]: '',
}

export interface IAuthLoginProps {}

export const AuthLogin: React.FC<IAuthLoginProps> = () => {
  const handleLogin = (values: typeof FORM_INITIAL_VALUES) => {
    console.log(values)
  }

  return (
    <>
      <AuthModalHeader
        title="Добро пожаловать!"
        description="Авторизируйтесь для того, чтобы использовать все возможности сервиса"
      />

      <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleLogin}>
        <Form>
          <InputField
            name={FormInputNames.LOGIN}
            label="Номер телефона, или email"
            autoFocus
            marginBottom
          />
          <InputField
            name={FormInputNames.PASSWORD}
            label="Пароль"
            enableTextVisibilityToggle
          />

          <Button className={s.AuthLogin__submitBtn}>Войти в сервис</Button>
        </Form>
      </Formik>
    </>
  )
}
