import { FilterHOC } from "../../hoc/filter-hoc/filter-hoc"
import { Button } from "../button/button"
import { Card } from "../card/card"
import { ClassModal } from "../class-modal/class-modal"
import { SortModal } from "../sort-modal/sort-modal"
import styles from "./search-results.module.scss"
export const SearchResultsComponent = ({ options, showSort, setShowSort, handleButton, handleSubmit, control, showClass, setShowClass, register, toDate, setToDate, fromDate, setFromDate, numberOfUsers, incrementCount, decrementCount, setValue, rooms }: any) => {
  return (
    <section id={styles.search_cont}>
      <FilterHOC />
      <div className="container mt-3 ">
        
        <div className="row">
          
        <div className={styles.searchTop}>
            <h2 className={`heading heading-3 heading-bold ${styles.searchTitle}`} dir="rtl">
              نتائج البحث
            </h2>
            <div className={styles.buttons}>
              <Button width="w-50" textColor="text-darkGrey" padding="btn-p" border="border-darkGrey" onClick={() => setShowSort(true)}>
                ترتيب
                <i className={`fas fa-sort fa-1x  ${styles.icon}`}></i>{" "}
              </Button>
              <Button
                width="w-50"
                textColor="text-darkGrey"
                padding="btn-p"
                border="border-darkGrey"
                ms="ms-1"
                onClick={() => {
                  setShowClass(true)
                }}
              >
                تصنيف
                <i className={`fas fa-sliders-v  ${styles.icon}`}></i>
              </Button>
            </div>
          </div>
        
          {rooms?.map((room: any) => {
            return (
              <div key={room.id} className="col-md-6 col-lg-3 mt-3" >
                <Card  room={room} />
              </div>
            )
          })}
        </div>
      </div>
      <SortModal options={options} showSort={showSort} setShowSort={setShowSort} handleButton={handleButton} handleSubmit={handleSubmit} control={control} />
      <ClassModal showClass={showClass} setShowClass={setShowClass} handleButton={handleButton} handleSubmit={handleSubmit} control={control} register={register} toDate={toDate} setToDate={setToDate} fromDate={fromDate} setFromDate={setFromDate} numberOfUsers={numberOfUsers} setValue={setValue} incrementCount={incrementCount} decrementCount={decrementCount} />
    </section>
  )
}
