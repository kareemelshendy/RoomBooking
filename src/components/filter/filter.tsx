import { Form } from "react-bootstrap"
import styles from "./filter.module.scss"

import DatePicker from "react-datepicker"
import { Controller } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css"

export const Filter = ({ handleSubmit, filterHandler, register, toDate, setToDate, showToDate, setShowToDate, fromDate, setFromDate, showFromDate, setShowFromDate, setShow, control }: any) => {
  return (
    <>
      <div className={`container ${styles.form_container}`}>
        <form className={`form shadow-sm ${styles.form}`} onSubmit={handleSubmit(filterHandler)}>
          <div className={styles.button}>
            <button type="submit" className="btn btn-primary w-100">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className={`${styles.group}`}>
            <div className={styles.label}>
              <label htmlFor="numberOfUsers">الأفراد</label>
              <i className="fas fa-user"></i>
            </div>
            <Form.Select aria-label="Default select" dir="rtl" {...register("numberOfUsers")}>
              <option value="">عدد الآفراد</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Select>
          </div>
          <div className={` ${styles.group}`}>
            <div className={styles.label}>
              <label htmlFor="fromDate">التاريخ</label>
              <i className="far fa-calendar"></i>
            </div>
            <div className={styles.date}>
              <Controller
                name="toDate"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => {
                  return (
                    <DatePicker
                      onChange={(e) => {
                        field.onChange(e)
                        if (field.name == "toDate") {
                          setToDate(e)
                        }
                        setShowToDate(false)
                      }}
                      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                      selected={field.value}
                      // minDate={new Date()}
                      minDate={new Date()}
                      className={`${styles.datePicker} shadow`}
                    />
                  )
                }}
              />
              <h4 className={styles.location} onClick={() => setShowToDate(!showToDate)}>
                الي تاريخ{" "}
              </h4>
            </div>
          </div>

          <div className={` ${styles.group} ${styles.datePicker_container}`}>
            <div className={styles.label}>
              <label htmlFor="fromDate">التاريخ</label>

              <i className="far fa-calendar"></i>
            </div>

            <div className={styles.date}>
              <Controller
                name="fromDate"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => {
                  return (
                    <DatePicker
                      onChange={(e) => {
                        field.onChange(e)
                        if (field.name == "fromDate") {
                          setFromDate(e)
                        }
                        setShowFromDate(false)
                      }}
                      minDate={new Date()}
                      selected={field.value}
                      maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                      className={`${styles.datePicker} shadow`}
                    />
                  )
                }}
              />
              <h4 className={styles.location}>من تاريخ</h4>
            </div>
          </div>
          <div
            className={styles.group}
            onClick={() => {
              setShow(true)
            }}
          >
            <div className={styles.label}>
              <label htmlFor="numberOfUsers">الموقع</label>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4 className={styles.location} onSubmit={handleSubmit(filterHandler)}>
              إبحث عن المكان
            </h4>
          </div>
        </form>

        {/* <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} /> */}
      </div>
    </>
  )
}
