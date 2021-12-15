import React from "react"
import Header from "../header/header"

export interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}
export default Layout
