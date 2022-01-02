import React, { useState } from "react"
import { useRouter } from "next/router"
import { Container, Modal, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../button/button"
const Header = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(false)
  }
  return (
    <>
      <header className="sticky-top">
        <Navbar bg="white" expand="md" sticky="top" className="navbar shadow_sm">
          <Container className="flex-row-reverse">
            <Link href="/">
              <Navbar.Brand>
                <Image src="/Shape-header.png" width="51px" height="47px" objectFit="cover" alt="الصورة الشخصية" />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  className="profile-dropdown"
                  title={
                    <div className="dropdown">
                      <div className="profile">
                        <Image src="/person.jpg" width="47px" height="47px" objectFit="cover" className="dropdown-img" alt="" />
                        <p className="dropdown-text">
                          مرحبا محمد
                          <i className=" fas fa-chevron-down dropdown-down"></i>
                        </p>
                      </div>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link href="/profile">
                    <a className="profile-item dropdown-item" role="link">
                      الملف الشخصي
                    </a>
                  </Link>

                  <Link href="/incoming-requests/pending">
                    <a className="profile-item dropdown-item">الطلبات الواردة</a>
                  </Link>

                  <Link href="/reservations/pending">
                    <a className="profile-item dropdown-item">حجوزاتي</a>
                  </Link>
                  <Link href="/favorite">
                    <a className="profile-item dropdown-item">المفضلات</a>
                  </Link>

                  <NavDropdown.Item
                    className="profile-item"
                    onClick={() => {
                      setShow(true)
                    }}
                  >
                    تسجيل الخروج
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="notifications-dropdown"
                  title={
                    <div className="dropdown">
                      <div className="notifications">
                        {/* <FontAwesomeIcon icon={faBell} className="icon" /> */}
                        <i className="fas fa-bell  icon"></i>

                        <div className="number">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link href="/notifications">
                    <a className="notification dropdown-item">
                      <p className="text" dir="rtl">
                        تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                      </p>
                      <p className="time">12:43 am</p>
                    </a>
                  </Link>
                  <Link href="/notifications">
                    <a className="notification dropdown-item">
                      <p className="text" dir="rtl">
                        تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                      </p>
                      <p className="time">12:43 am</p>
                    </a>
                  </Link>
                  <Link href="/notifications">
                    <a className="notification dropdown-item">
                      <p className="text" dir="rtl">
                        تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                      </p>
                      <p className="time">12:43 am</p>
                    </a>
                  </Link>
                  <Link href="/notifications">
                    <a className="notification dropdown-item">
                      <p className="text" dir="rtl">
                        تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                      </p>
                      <p className="time">12:43 am</p>
                    </a>
                  </Link>
                  <Link href="/notifications">
                    <a className="notification dropdown-item">
                      <p className="text" dir="rtl">
                        تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                      </p>
                      <p className="time">12:43 am</p>
                    </a>
                  </Link>
                </NavDropdown>
                <NavDropdown
                  className="chat-dropdown"
                  title={
                    <div className="dropdown">
                      <div className="chat">
                        <i className="fas fa-comment-dots icon"></i>
                        <div className="number">
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1" className="messages" dir="rtl">
                    <div className="messages-img">
                      <Image src="/person.jpg" width="47px" height="47px" objectFit="cover" alt="" className="image" />
                    </div>
                    <div className="chat-content">
                      <h3 className="username">محمد عبد القادر</h3>
                      <p
                        className="
                  message"
                      >
                        الغرفة كويسة ونضيفة عايز احجزها بعد اذنك ممكن استلمها امته
                      </p>
                    </div>

                    <div className="number">
                      <p>5</p>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.1" className="messages" dir="rtl">
                    <div className="messages-img">
                      <Image src="/person.jpg" width="47px" height="47px" objectFit="cover" alt="" className="image" />
                    </div>
                    <div className="chat-content">
                      <h3 className="username">محمد عبد القادر</h3>
                      <p
                        className="
                  message"
                      >
                        الغرفة كويسة ونضيفة عايز احجزها بعد اذنك ممكن استلمها امته
                      </p>
                    </div>

                    <div className="number">
                      <p>5</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" className="messages" dir="rtl">
                    <div className="messages-img">
                      <Image src="/person.jpg" width="47px" height="47px" objectFit="cover" alt="" className="image" />
                    </div>
                    <div className="chat-content">
                      <h3 className="username">محمد عبد القادر</h3>
                      <p
                        className="
                  message"
                      >
                        {" "}
                        الغرفة كويسة ونضيفة عايز احجزها بعد اذنك ممكن استلمها امته
                      </p>
                    </div>

                    <div className="number">
                      <p>5</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" className="messages" dir="rtl">
                    <div className="messages-img">
                      <Image src="/person.jpg" width="47px" height="47px" objectFit="cover" alt="" className="image" />
                    </div>
                    <div className="chat-content">
                      <h3 className="username">محمد عبد القادر</h3>
                      <p
                        className="
                  message"
                      >
                        {" "}
                        الغرفة كويسة ونضيفة عايز احجزها بعد اذنك ممكن استلمها امته
                      </p>
                    </div>

                    <div className="number">
                      <p>5</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link href="/add-room">
                  <a className="heading-4 heading-bold heading-primary">إضافة غرفة +</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Modal show={show} onHide={handleShow} dialogClassName="disable">
        <Modal.Header closeButton>
          <Modal.Title>تسجيل الخروج</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل تريد تسجيل الخروج ؟</Modal.Body>
        <Modal.Footer>
          <div className="button">
            <Button borderColor="border-primary" textColor="text-primary" width="w-100" padding="py-9" onClick={handleShow}>
              تراجع
            </Button>
          </div>
          <div className="button">
            <Button
              bgColor="btn-primary"
              width="w-100"
              padding="py-9"
              onClick={() => {
                setShow(false)
                router.push("/auth")
              }}
            >
              خروج
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header
