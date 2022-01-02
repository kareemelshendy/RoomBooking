import { Modal } from "react-bootstrap"
import { Controller } from "react-hook-form"
import { Button } from "../button/button"
import DatePicker from "react-datepicker"
import { Map } from "../map/map"
import { CheckBoxInput } from "../checkboxInput/checkbox-input"

export const ClassModal = ({ showClass, setShowClass, handleButton, handleSubmit, control, register, toDate, fromDate, setFromDate, setToDate, numberOfUsers, incrementCount, decrementCount }: any) => {
  return (
    <Modal show={showClass} onHide={() => setShowClass(false)} dir="rtl">
      <form onSubmit={handleSubmit(handleButton)}>
        <Modal.Header closeButton dir="ltr">
          <Modal.Title>عوامل التصنيف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="class">
            <h4 className="label">نطاق السعر</h4>
            <div className="price">
              <div className="form-group price-group">
                <label htmlFor="">الحد الأدني للسعر</label>
                <div className="price-input">
                  <input {...register("minPrice")} type="text" className="form-control" name="minPrice" placeholder="00" />
                  <p>جنيه</p>
                </div>
              </div>
              <div className="form-group price-group">
                <label htmlFor="">الحد الأقصي للسعر</label>
                <div className="price-input">
                  <input {...register("maxPrice")} type="text" className="form-control" name="maxPrice" placeholder="00" />
                  <p>جنيه</p>
                </div>
              </div>
            </div>
          </div>
          <div className="class">
            <h4 className="label">مدة الإقامة</h4>
            <div className="date">
              <div className="form-group date-group">
                <label>من تاريخ</label>
                <div className="datePicker-cont">
                  <Controller
                    name="fromDate"
                    control={control}
                    defaultValue={fromDate}
                    render={({ field }) => {
                      return (
                        <DatePicker
                          selected={field.value}
                          onChange={(e: Date) => {
                            field.onChange(e)
                            setFromDate(e)
                          }}
                          selectsStart
                          startDate={fromDate}
                          endDate={toDate}
                          minDate={fromDate}
                          dateFormat="yyyy-MM-dd"
                          className={`datePicker shadow_sm`}
                        />
                      )
                    }}
                  />
                </div>
              </div>
              <div className="form-group date-group">
                <label >إلي تاريخ</label>
                <div className="datePicker-cont">
                  <Controller
                    name="toDate"
                    control={control}
                    defaultValue={toDate}
                    render={({ field }) => {
                      return (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => {
                            field.onChange(date)
                            setToDate(date)
                          }}
                          selectsEnd
                          startDate={fromDate}
                          endDate={toDate}
                          minDate={fromDate}
                          dateFormat="yyyy-MM-dd"
                          className={` datePicker shadow_sm`}
                        />
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="class">
            <h4 className="label">الخدمات المقدمة</h4>
            <div className="services">
              <CheckBoxInput register={register} name="roomService">
                <i className="fas fa-bed"></i>
                روم سيرفس{" "}
              </CheckBoxInput>
              <CheckBoxInput register={register} name="wifi">
                <i className="fas fa-wifi"></i>
                واي فاي{" "}
              </CheckBoxInput>
              <CheckBoxInput register={register} name="pool">
                <i className="fas fa-swimming-pool"></i>
                حمام سباحه
              </CheckBoxInput>
              <CheckBoxInput register={register} name="irConditioning">
                <i className="fas fa-snowflake"></i> تكييف
              </CheckBoxInput>
              <CheckBoxInput register={register} name="balcony">
                <i className="fas fa-building"></i>
                بلكونة
              </CheckBoxInput>
              <CheckBoxInput register={register} name="kitchen">
                <i className="fas fa-utensils"></i>
                مطبخ{" "}
              </CheckBoxInput>
              <CheckBoxInput register={register} name="parking">
                <i className="fas fa-car"></i>
                باركينج
              </CheckBoxInput>
            </div>
          </div>

          <div className="class">
            <h4 className="label">عدد الأفراد</h4>
            <div className="users">
              <button
                type="button"
                className="button"
                onClick={() => {
                  decrementCount()
                }}
              >
                <i className="fas fa-minus"></i>
              </button>
              <input {...register("numberOfUsers")} type="text" name="numberOfUsers" value={numberOfUsers} id="" />

              <button
                type="button"
                className="button"
                onClick={() => {
                  incrementCount()
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="class">
            <h4 className="label">
              العنوان علي الخريطة<span>*</span>
            </h4>
            <div className="map">
              <Map borderRadius='border-r'/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="button">
            <Button bgColor="btn-primary" width="w-100" padding="p-9" type="submit">
              إظهار النتائج
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
