import Image from "next/image"
import { useEffect, useState } from "react"
import { Controller } from "react-hook-form"

import styles from "./image-input.module.scss"

export const ImageInput = ({ image, setDisabled, handleInput, name, onClick, control, deleteInput }: any) => {
  return (
    <div className={styles.image_button}>
      {image ? (
        // <Image src={`https://firebasestorage.googleapis.com/v0/b/upload-image-353f8.appspot.com/o/image%2F258860479_457281102429850_709733082449488786_n.jpg?alt=media&token=c0721fa3-63f5-432e-9a81-472455e1ec4c`} layout="fill" className={styles.image} />
        <>
          <img src={image} alt="" className={styles.image} width="87px" height="87px" />
          <button className={styles.delete} type="button" onClick={onClick}>
            <i className="fas fa-times"></i>
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => {
              document.getElementById(name)?.click()
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
          {deleteInput && (
            <button className={styles.delete} role="button" onClick={onClick}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </>
      )}

      <Controller
        name={name}
        control={control}
        rules={{ required: "يجب إدخال الصورة" }}
        render={({ field, fieldState }) => {
          return (
            <>
              <input
                type="file"
                name={name}
                id={name}
                onChange={(event: any) => {
                  const file = event.target.files[0]
                  handleInput(event)
                  field.onChange(file)
                  if (setDisabled) {
                    setDisabled(false)
                  }
                }}
              />
              {fieldState.error && <span className={styles.error}>{fieldState.error.message}</span>}
            </>
          )
        }}
      />
    </div>
  )
}
