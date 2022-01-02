import { Children } from "react"

export const Button = ({ title, width, toLogin, bgColor = '', mt, border, borderColor, ms, textColor, onClick, type, padding, children, disabled, isValid }: any) => {
  return (
    <button type={type} className={`btn ${bgColor} ${width} ${mt} ${ms} ${padding} ${border} ${borderColor} ${textColor} border-r`} onClick={onClick} role={type} disabled={disabled}>
      {children}
    </button>
  )
}
