import { useRouter } from "next/router"
import { Button } from "../../button/button"
import { ImageInput } from "../../image-input/image-input"
import { ProfileEditTap } from "../../profile-edit-tap/profile-edit-tap"
import styles from "./information.module.scss"
export const EditInformationComponent = ({ register, handleSubmit, formHandler, errors, control, handleImageInput, image, setImage, setValue }: any) => {
  const router = useRouter()
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <h2 className="heading heading-bold heading-3  mb-3" dir="rtl">
          تعديل الحساب
        </h2>
        <div className="col-md-9">
          <form action="" onSubmit={handleSubmit(formHandler)} className={`${styles.form} shadow_sm`} dir="rtl">
            <div className="form-group mb-3">
              <label htmlFor="" className={styles.form_labelImage}>
                إختر صورة
              </label>
              <ImageInput
                name="image"
                control={control}
                handleInput={handleImageInput}
                image={image}
                onClick={() => {
                  setImage("")
                  setValue("image", null)
                }}
                deleteInput={false}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="" className={styles.form_label}>
                الإسم <span>*</span>
              </label>
              <input
                {...register("username", {
                  required: "يجب ادخال الإسم",
                  minLength: { value: 5, message: "الاسم يجد ان يكون علي الأقل 5 أحروف" },
                  maxLength: {
                    value: 30,
                    message: "الاسم يجب أن لا يزيد عن 30 حرف",
                  },
                })}
                type="text"
                name="username"
                className={`form-control ${styles.form_input}`}
                placeholder="أدخل الاسم"
              />
              {errors.username && <span className="error_span">{errors.username.message}</span>}
            </div>
            <div className="form-group mb-3">
              <label className={styles.form_label}>
                {" "}
                رقم الهاتف <span>*</span>
              </label>
              <input
                {...register("phoneNumber", {
                  required: "يجب إدخال رقم الهاتف",
                  pattern: {
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/,
                    message: "رقم الهاتف غير صالح",
                  },
                })}
                type="tel"
                name="phoneNumber"
                id=""
                className={`form-control ${styles.form_input}`}
                placeholder="أدخل رقم الهاتف"
              />
              {errors.phoneNumber && <span className="error_span">{errors.phoneNumber.message}</span>}
            </div>
            <div className={`form-group ${styles.buttons}`}>
              <div className={styles.button}>
                <Button type="submit" bgColor="btn-primary" textColor="text-white" padding="p-9" width="w-100">
                  حفظ
                </Button>
              </div>
              <div className={styles.button}>
                <Button
                  type="button"
                  border="border-primary"
                  textColor="text-primary"
                  padding="p-9"
                  width="w-100"
                  onClick={() => {
                    router.push("/profile")
                  }}
                >
                  تارجع
                </Button>
              </div>
            </div>
          </form>
        </div>
        <ProfileEditTap />
      </div>
    </div>
  )
}
