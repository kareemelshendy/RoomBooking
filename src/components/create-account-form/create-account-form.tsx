import Link from "next/link"
import { Button } from "../button/button"
import { ImageInput } from "../image-input/image-input"
import { PasswordInput } from "../password-input/password-input"
import styles from "./create-account-form.module.scss"
export const CreateAccountForm = ({ control, register, errors, handleSubmit, formHandler, handleImageInput, image, setImage, getValues, setValue }: any) => {
  return (
    <>
      <form action="" onSubmit={handleSubmit(formHandler)} className={`form mt-3 text-end ${styles.form}`}>
        <div className="form-group mb-2" dir="rtl">
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
        <div className={`form-group ${styles.group} mb-2`}>
          <label htmlFor="username">
            <span className={styles.span_red}>*</span>الإسم
          </label>
          <input
            {...register("username", {
              required: "يجب إدخال الإسم",
              minLength: { value: 5, message: "الاسم يجد ان يكون علي الأقل 5 أحروف" },
              maxLength: {
                value: 30,
                message: "الاسم يجب أن لا يزيد عن 30 حرف",
              },
            })}
            type="text"
            name="username"
            className={`form-control input  ${errors.username ? "input_error" : "input_normal"}`}
            dir="rtl"
            placeholder="أدخل الإسم"
          />
          {errors.username && <span className={styles.errorMessage}>{errors.username.message}</span>}
        </div>
        <div className={`form-group ${styles.group} mb-2`}>
          <label htmlFor="phoneNumber">
            <span className={styles.span_red}>*</span>رقم الهاتف
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
            className={`form-control input  ${errors.phoneNumber ? "input_error" : "input_normal"}`}
            dir="rtl"
            placeholder="أدخل رقم الهاتف"
          />
          {errors.phoneNumber && <span className={styles.errorMessage}>{errors.phoneNumber.message}</span>}
        </div>
        <div className="mb-2">
          <PasswordInput title="كلمة المرور" register={register} error={errors.password} message={errors?.password?.message} forget={false} name="password" requiredMessage="يجب إدخال كلمة المرور" placeholder="أدخل كلمة المرور" />
        </div>
        <div className="mb-2">
          <PasswordInput
            title="تأكيد كلمة المرور"
            register={register}
            error={errors.confirmPassword}
            message={errors?.confirmPassword?.message}
            forget={false}
            name="confirmPassword"
            requiredMessage="يجب إدخال تأكيد كلمة المرور"
            placeholder="تأكيد كلمة المرور"
            validate={{
              checkPassword: (value: string) => {
                const { password } = getValues()
                return password === value || "كلمات السر لا تتطابق"
              },
            }}
          />
        </div>

        <div className="d-flex">
          <Button mt="mt-3" bgColor="btn-primary" width="w-100" type="submit" padding="py-9">
            إنشاء حساب
          </Button>
        </div>
        <p className={`${styles.haveAccount} mt-2`}>
          لديك حساب بالفعل !
          <Link href="/login">
            <a className={`${styles.new}`}> تسجيل الدخول</a>
          </Link>{" "}
        </p>
      </form>
    </>
  )
}
