import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { ConfirmPasswordComponent } from "../../components/confirm-password/confirm-password"

export const ConfirmPasswordHOC = () => {
  const router= useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  function formHandler(data: any) {
    console.log(data)
    reset()

    router.push('/new-password')
  }
  return <ConfirmPasswordComponent register={register} handleSubmit={handleSubmit} errors={errors} formHandler={formHandler} />
}
