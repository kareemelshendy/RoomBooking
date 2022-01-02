import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { BookRoomForm } from "../../components/book-room-form/book-room-form"

export const BookRoomHOC = () => {
  const [toDate, setToDate] = useState(new Date())
  const [fromDate, setFromDate] = useState(new Date())
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode:'onBlur'
  })
  function buttonHandler(data: any) {
    const formDate = {
      comments: data.comments,
      fromDate: +dayjs(data.fromDate).startOf("day"),
      toDate: +dayjs(data.toDate).endOf("day"),
    }
    console.log(formDate)
    reset()

    setTimeout(()=>{
      router.push('/reservations/pending')
    },2000)
  }
  return (
    <div className="container mt-3 border-r shadow_sm">
      <BookRoomForm control={control} toDate={toDate} setToDate={setToDate} fromDate={fromDate} setFromDate={setFromDate} handleSubmit={handleSubmit} register={register} buttonHandler={buttonHandler} errors={errors} />
    </div>
  )
}
