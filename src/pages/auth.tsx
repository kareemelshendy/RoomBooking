import type { NextPage } from "next"
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/router"
const Home: NextPage = () => {
  const router = useRouter()
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
            <div className="buttonsContainer mr-t-4">
              <Link href="/login">
                <a className="btn btn-light btn-p w-100 border-r">تسجيل الدخول</a>
              </Link>
              <Link href="#">
                <a className="btn border-1 border-light w-100 border-r text-white btn-p mr-t-3">إنشاء الحساب</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
