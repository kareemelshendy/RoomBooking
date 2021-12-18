import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "../components/button/button"
const Home: NextPage = () => {
  const router = useRouter()

  function toLogin() {
    router.push("/login")
  }
  function toCreateAccount() {
    router.push("/create")
  }
  return (
    <>
      <Head>
        <title>مرحباً بك</title>
      </Head>
      <div className="home_container">
        <div className="overlay">
          <div className="content">
            <div>
              <Image src="/Shape.png" width="112px" height="102px" alt="" />
              <div className="logo-title">
                <h1 className="heading heading-1 heading-semiBold heading-white">Room Smart</h1>
                <h3 className="heading heading-3  heading-white">Booking Room</h3>
              </div>
            </div>
            <div className="buttonsContainer mt-3">
              <Button title="تسجيل الدخول" toLogin={toLogin} width="w-100" bgColor="btn-light" />
              <Button title="إنشاء الحساب" width="w-100"
              textColor='text-white' mt='mt-3' border="border-1" borderColor="border-light"
              toCreateAccount={toCreateAccount} />

              {/* <button
                className="btn  border-light w-100 border-r text-white btn-p mt-3"
                onClick={() => {
                  router.push("/create")
                }}
              >
                إنشاء الحساب
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
