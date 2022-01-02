import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { SearchResultsComponent } from "../../components/search-results/search-results"
import { Room } from "../../models"

export const SearchResultsHOC = ({ rooms }: { rooms: Room[] }) => {
  const [showSort, setShowSort] = useState(false)
  const [showClass, setShowClass] = useState(false)
  const [toDate, setToDate] = useState(new Date())
  const [fromDate, setFromDate] = useState(new Date())
  const [numberOfUsers, setNumberOfUsers] = useState(1)
  const { register, handleSubmit, control, setValue } = useForm()

  const options = [
    { value: "ascending", label: "من الأقل إلي الأعلي" },
    { value: "descending", label: "من الأعلي إلي ألاقل" },
  ]

  const incrementCount = () => {
    setNumberOfUsers(numberOfUsers + 1)
    setValue("numberOfUsers", numberOfUsers + 1)
  }

  const decrementCount = () => {
    if (numberOfUsers > 0) {
      setNumberOfUsers(numberOfUsers - 1)
      setValue("numberOfUsers", numberOfUsers - 1)
    }
  }

  function handleButton(data: any) {
    console.log(data)
  }
  return <SearchResultsComponent options={options} showSort={showSort} setShowSort={setShowSort} handleButton={handleButton} handleSubmit={handleSubmit} control={control} showClass={showClass} setShowClass={setShowClass} register={register} toDate={toDate} setToDate={setToDate} fromDate={fromDate} setFromDate={setFromDate} numberOfUsers={numberOfUsers} incrementCount={incrementCount} decrementCount={decrementCount} setValue={setValue} rooms={rooms} />
}
