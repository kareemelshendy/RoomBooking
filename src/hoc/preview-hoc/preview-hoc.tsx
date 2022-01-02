import { useState } from "react"
import { PreviewComponent } from "../../components/preview/preview"

export const PreviewHOC = () => {
  const [showDisable, setShowDisable] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  function handleDisable() {
    setShowDisable(false)
  }
  function handleDelete() {
    setShowDelete(false)
  }

  return <PreviewComponent showDisable={showDisable} setShowDisable={setShowDisable} handleDisable={handleDisable} showDelete={showDelete} handleDelete={handleDelete} setShowDelete={setShowDelete} />
}
