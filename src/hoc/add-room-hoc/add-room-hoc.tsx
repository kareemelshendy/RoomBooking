import { useFieldArray, useForm } from "react-hook-form"
import Select from "react-select"
import Image from "next/image"
import { CheckBoxInput } from "../../components/checkboxInput/checkbox-input"
import { Map } from "../../components/map/map"
import styles from "./add-room-hoc.module.scss"
import { useEffect, useState } from "react"
import { AddRoomForm } from "../../components/add-room-form/add-room-form"
import { useRouter } from "next/router"

export interface FormValues {
  balcony: boolean
  irConditioning: boolean
  kitchen: boolean
  numberOfUsers: string | null
  parking: boolean
  pool: boolean
  price: string
  roomDescription: string
  roomName: string
  roomService: boolean
  wifi: boolean
  images: {
    singleImage: File
  }[]
}
const defaultValues = {
  balcony: false,
  irConditioning: false,
  kitchen: false,
  numberOfUsers: "",
  parking: false,
  pool: false,
  price: "",
  roomDescription: "",
  roomName: "",
  roomService: false,
  wifi: false,
  images: [],
}

export const AddRoomHOC = () => {
  const [images, setImages] = useState<string[]>([])
  const [disabled, setDisabled] = useState<boolean>(true)
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
    setValue,
  } = useForm<FormValues>({
    defaultValues,
    mode: "onBlur",
  })

  const { fields, append, remove } = useFieldArray({
    name: "images",
    control,
  })

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ]

  const handleInput = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImages(images.concat(URL.createObjectURL(event.target.files[0])))
    }
  }

  function formHandler(data: FormValues) {
    if (data.images.length < 1) {
      setDisabled(false)
    } else {
      setDisabled(true)
      console.log(data)
      setValue("images", [])
      reset({
        balcony: false,
        irConditioning: false,
        kitchen: false,
        numberOfUsers: null,
        parking: false,
        pool: false,
        price: "",
        roomDescription: "",
        roomName: "",
        roomService: false,
        wifi: false,
      })
      setImages([])

      setTimeout(() => {
        router.push("/preview")
      }, 2000)
    }
  }

  return (
    <div className="container mt-3 mb-5 shadow_sm border-r">
      <div className="row">
        <div className={styles.create_cont} dir="rtl">
          <h2 className="heading heading-bold heading-3 mb-1">إضافة غرفة</h2>
          <p className="heading-4 heading-semiBold heading-lightGrey mb-3">أضف بيانات الغرفة المراد عرضها</p>

          <AddRoomForm formHandler={formHandler} register={register} handleSubmit={handleSubmit} options={options} control={control} errors={errors} fields={fields} append={append} handleInput={handleInput} images={images} setImages={setImages} remove={remove} disabled={disabled} setDisabled={setDisabled} isValid={isValid} />
        </div>
      </div>
    </div>
  )
}
