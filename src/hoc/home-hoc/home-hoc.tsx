import React, { useState } from "react"
import styles from "./home-hoc.module.scss"
import { Card } from "../../components/card/card"
import { Filter } from "../../components/filter/filter"
import { Map } from "../../components/map/map"
import { FilterHOC } from "../filter-hoc/filter-hoc"
import { Room } from "../../models"
import { HomeComponent } from "../../components/home/home"

export const HomeHOC = ({ rooms }: { rooms: Room[] }) => {
  const [show, setShow] = useState(false)

  const [allRooms, setAllRooms] = useState(rooms)

  function handleFav(room: any) {
    const roomIndex = allRooms.indexOf(room)
    allRooms[roomIndex].fav = !allRooms[roomIndex].fav
    const newRooms = [...allRooms]
    setAllRooms(newRooms)
  }
  return <HomeComponent allRooms={allRooms} handleFav={handleFav} show={show} setShow={setShow} />
}
