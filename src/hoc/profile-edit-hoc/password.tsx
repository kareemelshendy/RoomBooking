import { useForm } from "react-hook-form"
import { EditPasswordComponent } from "../../components/profile-edit/password/password"

export const EditPasswordHOC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm({
    mode: "onBlur",
  })

  

  function formHandler(data: any) {
    console.log(data)
    reset()

    
  }
  return (
    <>
      <EditPasswordComponent register={register} handleSubmit={handleSubmit} errors={errors} formHandler={formHandler} getValues={getValues} />
    </>
  )
}
