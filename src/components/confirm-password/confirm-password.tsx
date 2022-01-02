import { Button } from "../button/button"
import styles from "./confirm-password.module.scss"
export const ConfirmPasswordComponent = ({ register, handleSubmit, formHandler, errors }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h2 className="heading heading-2 heading-bold mb-1">! نسيت كلمة المرور </h2>
        <p className="heaidng-4 heading-semiBold heading-lightGrey mb-3">أدخل رقم الهاتف لإسترجاعها</p>
        <form action="" className={styles.form_box} dir="ltr" onSubmit={handleSubmit(formHandler)}>
          <div className={`"form-group " ${styles.input_group}`}>
            <div className={styles.input}>
              <input {...register("number1", { required: true })} maxLength={1} minLength={1} className={`form-control input  ${errors.number1 ? "input_error" : "input_normal"}`} type="text" name="number1" id="" />
            </div>
            <div className={styles.input}>
              <input {...register("number2", { required: true })} maxLength={1} minLength={1} className={`form-control input  ${errors.number2 ? "input_error" : "input_normal"}`} type="text" name="number2" id="" />
            </div>
            <div className={styles.input}>
              <input {...register("number3", { required: true })} maxLength={1} minLength={1} className={`form-control input  ${errors.number3 ? "input_error" : "input_normal"}`} type="text" name="number3" id="" />
            </div>
            <div className={styles.input}>
              <input {...register("number4", { required: true })} maxLength={1} minLength={1} className={`form-control input  ${errors.number4 ? "input_error" : "input_normal"}`} type="text" name="number4" id="" />
            </div>
            <div className={styles.input}>
              <input {...register("number5", { required: true })} maxLength={1} minLength={1} className={`form-control input  ${errors.number5 ? "input_error" : "input_normal"}`} type="text" name="number5" id="" />
            </div>
            {/* {errors.phoneNumber && <span className="error_span">{errors.phoneNumber.message}</span>} */}
          </div>
          <Button width="w-100" padding="py-9" bgColor="btn-primary" type="submit">
            تأكيد
          </Button>
        </form>
      </div>
    </div>
  )
}
