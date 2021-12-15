import { Filter } from "../../components/filter/filter"
import { useState } from "react"
import { useForm, useFormState } from "react-hook-form"
import dayjs from "dayjs"

type FormVlaues = {
  numberOfUsers: string
  fromDate: Date
  toDate: Date
}

export const FilterHOC = ({ setShow }: any) => {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())
  const [showFromDate, setShowFromDate] = useState(false)
  const [showToDate, setShowToDate] = useState(false)
  const { register, handleSubmit, control, getValues, reset } = useForm<FormVlaues>()

  function filterHandler(data: FormVlaues) {
    // console.log(data.toDate, data.fromDate)
    console.log({
      numberOfUsers: data.numberOfUsers,
      fromDate: +dayjs(data.fromDate).startOf("day"),
      toDate: +dayjs(data.toDate).endOf("day"),
    })
  }

  return <Filter register={register} handleSubmit={handleSubmit} filterHandler={filterHandler} control={control} showToDate={showToDate} setShowToDate={setShowToDate} toDate={toDate} setToDate={setToDate} showFromDate={showFromDate} setShowFromDate={setShowFromDate} fromDate={fromDate} setFromDate={setFromDate} getValues={getValues} setShow={setShow} />
}
