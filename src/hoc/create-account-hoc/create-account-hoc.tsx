import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CreateAccountComponent } from "../../components/create-account/create-account"

export const CreateAccountHOC = () => {
  const [image, setImage] = useState<string>()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({})
  function handleImageInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  function formHandler(data: any) {
    console.log(data)
    setImage("")
    reset()

    setTimeout(() => {
      router.push("/")
    }, 2000)
  }
  return <CreateAccountComponent register={register} handleSubmit={handleSubmit} control={control} errors={errors} formHandler={formHandler} handleImageInput={handleImageInput} image={image} setImage={setImage} getValues={getValues} setValue={setValue} />
}
