import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { useRouter } from "next/router"
import { LoginComponent } from "../../components/login/login"

interface loginData {
  phoneNumber: "string"
  password: "string"
}

export const LoginHOC = () => {
  const [valid, setValid] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched", reValidateMode: "onBlur" })

  const loginHandler = (data: loginData) => {
    console.log(data)
    reset()
    router.push("/")
  }

  return <LoginComponent register={register} handleSubmit={handleSubmit} loginHandler={loginHandler} errors={errors} valid={valid} setValid={setValid} />
}
