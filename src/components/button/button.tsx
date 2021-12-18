export const Button = ({ title, width, toLogin, bgColor, mt, border, borderColor, textColor, toCreateAccount,type }: any) => {
  function clickHandler() {
    if (toLogin) {
      toLogin()
    } else if (toCreateAccount) {
      toCreateAccount()
    }
  }
  return (
    <button
      className={`btn btn-p ${bgColor} ${width} ${mt}  ${border} ${borderColor} ${textColor} border-r`}
      onClick={() => {
        clickHandler()
      }}
      type={type}
    >
      {title}{" "}
    </button>
  )
}
