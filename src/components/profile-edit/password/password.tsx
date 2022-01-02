import { useRouter } from "next/router"
import { Button } from "../../button/button"
import { PasswordInput } from "../../password-input/password-input"
import { ProfileEditTap } from "../../profile-edit-tap/profile-edit-tap"

import styles from "./password.module.scss"

export const EditPasswordComponent = ({ handleSubmit, formHandler, register, errors, getValues }: any) => {
  const router = useRouter()

  function checkPassowrdConfirmHandler(value: any) {
    const { newPassword } = getValues()
    console.log(newPassword)
    return newPassword === value || "كلمة المرور غير متطابقه"
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="heading heading-bold heading-3  mb-3" dir="rtl">
          تعديل الحساب
        </h2>
        <div className="col-md-9">
          <form action="" onSubmit={handleSubmit(formHandler)} className={`${styles.form} shadow_sm`} dir="rtl">
            <div className="form-group mb-3">
              <PasswordInput register={register} name="oldPassword" title="كلمة المرور القديمة" forget={true} error={errors.oldPassword} message={errors?.oldPassword?.message} requiredMessage="يجب أدخال كلمة المرور القديمة" />
            </div>
            <div className="form-group mb-3">
              <PasswordInput register={register} name="newPassword" errors={errors} title="كلمة المرور الجديدة" error={errors.newPassword} message={errors?.newPassword?.message} requiredMessage="يجب أدخال كلمة المرور الجديدة" getValues={getValues} />
              {/* {errors && <span className={styles.errorMessage}>{errors.message}</span>} */}
              {/* <input type="password" {...register("newPassword")} name="newPassword" placeholder="newpassword" /> */}
            </div>
            <div className="form-group mb-3">
              <PasswordInput
                register={register}
                name="confirmNewPassword"
                errors={errors}
                title="تأكيد كلمة المرور الجديدة"
                error={errors.confirmNewPassword}
                message={errors?.confirmNewPassword?.message}
                requiredMessage="يجب ادخال تأكيد كلمة المرور"
                checkPassowrdConfirmHandler={checkPassowrdConfirmHandler}
                getValues={getValues}
                validate={{
                  checkPassword: (value: string) => {
                    const { newPassword } = getValues()
                    return newPassword === value || "كلمات السر لا تتطابق"
                  },
                }}
              />
              {/* <input
                {...register("confirmNewPassword", {
                  
                })}
                type="password"
                name="confirmNewPassword"
                id=""
                placeholder="confirm new password"
              />
              {errors.confirmNewPassword && <span>{errors.confirmNewPassword.message}</span>} */}
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
