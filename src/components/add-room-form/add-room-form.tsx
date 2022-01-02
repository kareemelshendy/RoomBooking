import { useEffect, useState } from "react"
import Select from "react-select"
import { CheckBoxInput } from "../checkboxInput/checkbox-input"
import { Map } from "../map/map"

import styles from "./add-room-form.module.scss"
import { Button } from "../button/button"
import { ImageInput } from "../image-input/image-input"
import { Controller } from "react-hook-form"

interface Props {
  handleSubmit: Function
  formHandler: Function
  register: Function
  options: [
    {
      value: string
      label: string
    }
  ]
}
export const AddRoomForm = ({ handleSubmit, formHandler, register, options, control, errors, fields, append, handleInput, setImages, images, remove, disabled, setDisabled, isValid }: any) => {
  return (
    <form action="" className={styles.create_form} onSubmit={handleSubmit(formHandler)}>
      <div className={styles.input_cont}>
        <div className={styles.right}>
          <div className="form-group mb-2">
            <label htmlFor="" className={styles.label}>
              {" "}
              إسم الغرفة<span>*</span>
            </label>
            <input {...register("roomName", { required: "يجب ادخال اسم الغرفة", minLength: { value: 10, message: "اقل عدد من الحروف يجب ان يكون 10 حروف" }, maxLength: { value: 60, message: "عدد الحروف يجب ان لا يتخطي ال60 حرف" } })} name="roomName" type="text" className={`form-control ${styles.input}`} placeholder="إضف إسم الغرفة" />
            {errors.roomName && <span className={styles.error}>{errors.roomName.message}</span>}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="" className={styles.label}>
              التفاصيل<span>*</span>
            </label>
            <textarea
              {...register("roomDescription", {
                required: "يحب ادخال وصف الغرفة",

                minLength: { value: 10, message: "اقل عدد من الحروف يجب ان يكون 10 حروف" },
                maxLength: { value: 300, message: "عدد الحروف يجب ان لا يتخطي ال300 حرف" },
              })}
              name="roomDescription"
              className={`form-control ${styles.textarea}`}
              placeholder="أدخل التفاصيل"
            ></textarea>

            {errors.roomDescription && <span className={styles.error}>{errors.roomDescription.message}</span>}
          </div>
          <div className={`form-group mb-2 ${styles.group}`}>
            <label htmlFor="" className={styles.label}>
              سعر الليلة<span>*</span>
            </label>
            <input
              {...register("price", {
                required: "يجب إدخال سعر الغرفة",
                validate: (value: string) => {
                  return parseInt(value) > 0 || " يجب ان يكون سعر الغرفة اكبر من الصفر "
                },
              })}
              name="price"
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="أدخل سعر الليلة"
            />
            <p>جنية</p>
            {errors.price && <span className={styles.error}>{errors.price.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="" className={styles.label}>
              عدد الأفراد<span>*</span>
            </label>
            <Controller
              name="numberOfUsers"
              control={control}
              rules={{ required: "يجب إدخال عدد الأفراد" }}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <Select isClearable {...field} menuPlacement="top" options={options} classNamePrefix="number-select" placeholder="أدخل عدد الأفراد" />
                    {fieldState.error && <span className={styles.error}>{fieldState.error.message}</span>}
                  </>
                )
              }}
            />
          </div>
        </div>

        <div className={styles.left}>
          <div className="form-group ">
            <label htmlFor="" className={styles.label_left}>
              {" "}
              الخدمات المقدمة<span>*</span>
            </label>
            <div className={styles.services}>
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
          <div className={`form-group mb-2 ${styles.image_cont}`}>
            <div className={styles.addImage}>
              <label htmlFor="" className={styles.label_left}>
                {" "}
                أضف صور للغرفة<span>*</span>
              </label>

              {fields.length < 5 && (
                <button
                  className="btn btn-primary border-r"
                  type="button"
                  onClick={() => {
                    if (fields?.length < 5) {
                      append({})
                      setDisabled(false)
                    }
                  }}
                >
                  <i className="fas fa-plus"></i>
                </button>
              )}
            </div>
            {disabled && <span className={styles.image_message}>*يجب إدخال علي الأقل صوره واحدة</span>}
            <div className={styles.image_box}>
              {fields?.map((item: any, index: number) => (
                <ImageInput
                  key={item.id}
                  control={control}
                  name={`images[${index}].singleImage`}
                  image={images[index]}
                  handleInput={handleInput}
                  setDisabled={setDisabled}
                  deleteInput={true}
                  onClick={() => {
                    if (!images[index]) {
                      remove(index)
                      if (index === 0) {
                        setDisabled(true)
                      }
                    } else {
                      const removeItem = (images: string[], i: number) => images.slice(0, i - 1).concat(images.slice(i, images.length))
                      let filteredItems = removeItem(images, index + 1)
                      setImages(filteredItems)
                      remove(index)
                      setDisabled(true)
                    }
                  }}
                />
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="" className={styles.label_left}>
              {" "}
              العنوان علي الخريطة<span>*</span>
            </label>
            <div className={styles.map}>
              <Map borderRadius='border-r' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.submit_button}>
        <Button type="submit" bgColor="btn-primary" width="w-100" padding="btn-p" disabled={disabled} isValid={isValid}>
          إضافة
        </Button>
      </div>
    </form>
  )
}
