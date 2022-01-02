import { useState } from "react"
import { useForm } from "react-hook-form"
import { EditInformationComponent } from "../../components/profile-edit/information/information"

export const EditInformationHOC = () => {
  const [image, setImage] = useState<string>("https://lh3.googleusercontent.com/ogw/ADea4I4gl1omu4S7-7BP0zJn5pj0qYIwBkZ05l5INZGSng=s83-c-mo")
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      username: "كريم محمود الشندي",
      phoneNumber: "01273684675",
      image: image,
    },
  })

  function handleImageInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }
  function formHandler(data: any) {
    console.log(data)
    setImage("")
    reset({
      username: "",
      phoneNumber: "",
      image: image,
    })
  }
  return (
    <>
      <EditInformationComponent register={register} handleSubmit={handleSubmit} formHandler={formHandler} errors={errors} control={control} handleImageInput={handleImageInput} image={image} setImage={setImage} setValue={setValue} />
    </>
  )
}
