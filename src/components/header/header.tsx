import React from "react"
import { useRouter } from "next/router"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
const Header = () => {
  const router = useRouter()
  return (
    <header className="sticky-top">
      <Navbar bg="white" expand="md" sticky="top" className="navbar">
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
                title={
                  <div className="dropdown">
                    <div className="profile">
                      <Image src="/person.jpg" width="47px" height="47px" objectFit="cover" className="dropdown-img" alt="" />
                      <h2 className="dropdown-text">
                        مرحبا محمد
                        <i className=" fas fa-chevron-down dropdown-down"></i>
                      </h2>
                    </div>
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="profile" href="#action/3.1">
                  الملف الشخصي
                </NavDropdown.Item>
                <NavDropdown.Item className="profile" href="#action/3.2">
                  الطلبات الواردة
                </NavDropdown.Item>
                <NavDropdown.Item className="profile" href="#action/3.3">
                  حجوزاتي
                </NavDropdown.Item>
                <NavDropdown.Item className="profile" href="#action/3.3">
                  المفضلات
                </NavDropdown.Item>

                <NavDropdown.Item
                  className="profile"
                  onClick={() => {
                    router.push("/auth")
                  }}
                >
                  تسجيل الخروج
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <div className="dropdown">
                    <div className="dropdown-notifications">
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
                <NavDropdown.Item href="" className="notification">
                  <p className="text" dir="rtl">
                    تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                  </p>
                  <p className="time">12:43 am</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="" className="notification">
                  <p className="text" dir="rtl">
                    تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                  </p>
                  <p className="time">12:43 am</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="" className="notification">
                  <p className="text" dir="rtl">
                    تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                  </p>
                  <p className="time">12:43 am</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="" className="notification">
                  <p className="text" dir="rtl">
                    تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                  </p>
                  <p className="time">12:43 am</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="" className="notification">
                  <p className="text" dir="rtl">
                    تمت الموافقة علي طلبك لحجز غرفة "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك عرفة بالعين السخنة... " برجاء الدفع الآن
                  </p>
                  <p className="time">12:43 am</p>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <div className="dropdown">
                    <div className="dropdown-chat">
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
                    <h1 className="username">محمد عبد القادر</h1>
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
                    <h1 className="username">محمد عبد القادر</h1>
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
                    <h1 className="username">محمد عبد القادر</h1>
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
                    <h1 className="username">محمد عبد القادر</h1>
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

              <Nav.Link href="#link" className="heading-4 heading-bold heading-primary">
                إضافة غرفة +
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
