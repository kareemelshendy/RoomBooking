import Image from "next/image"
import { CreateAccountForm } from "../create-account-form/create-account-form"
import styles from "./create-account.module.scss"
export const CreateAccountComponent = ({ register, handleSubmit, control, errors, formHandler, handleImageInput ,image , setImage ,getValues ,setValue }: any) => {
  return (
    <div className={styles.login_container}>
      <div className={styles.left}>
        <div className={styles.login_logo}>
          <Image src="/Shapeblue.png" width="66px" height="60px" />
          <div className={styles.logotitle}>
            <h1 className="heading heading-3 heading-semiBold heading-blue">Room Smart</h1>
            <h3 className="heading heading-4  heading-lightGrey">Booking Room</h3>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.loginForm}>
            <h2 className="heading heading-2 heading-bold heading-secondary">سجل الدخول الآن</h2>
            <h4 className="heading heading-4 heading-semiBlod heading-lightGrey mt-1">سجل حسابك وإحجز الغرف .. أو إعرض غرفك للحجز</h4>
            <CreateAccountForm control={control} register={register} errors={errors} handleSubmit={handleSubmit} formHandler={formHandler}
            handleImageInput={handleImageInput} image={image} setImage={setImage}
            getValues={getValues} 
            setValue={setValue} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}
