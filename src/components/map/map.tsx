import React, { useCallback, useRef, useState } from "react"
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api"
import { formatRelative } from "date-fns"
import { SearchMap } from "../mapSearch/mapSearch"
import styles from "./map.module.scss"
import { Button } from "../button/button"

export const Map = ({ setShow, search, button, borderRadius}: any) => {
  const [markers, setMarkers] = useState<any[]>([])
  const [selected, setSelected] = useState<any>(null)
  const mapRef = useRef()
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDV4nR0Jv2wf4rMCOULcnUTEbPKTYxxrTs",
    libraries: ["places"],
  })

  const center = {
    lat: 31.257111,
    lng: 32.295341,
  }

  const options = {
    disableDefaultUI: true,
    // zoomControl: true,
  }

  const onMapClick = useCallback((event: any) => {
    setMarkers((markers) => {
      return [...markers, { lat: event.latLng?.lat(), lng: event.latLng?.lng(), time: new Date() }]
    })
  }, [])

  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  if (loadError) return <div>Error loading maps</div>
  if (!isLoaded) return <div>Loading Maps</div>

  function confirmHandler() {
    setShow(false)
  }

  return (
    <>
      <GoogleMap
        center={center}
        zoom={8}
        options={options}
        onClick={(event) => {
          onMapClick(event)
        }}
        onLoad={onMapLoad}
        mapContainerClassName={`${styles.map} ${borderRadius}`}
      >
        <button className={styles.search} type="submit">
          <i className="fas fa-search"></i>
        </button>
        <SearchMap />
        {markers?.map((marker) => (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            key={marker.time.toISOString()}
            onClick={() => {
              setSelected(marker)
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected?.lat, lng: selected?.lng }}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <div>
              <h2>Room Spotted!</h2>
              <p>spotted {formatRelative(selected?.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
        {button && (
          <div className={styles.bottom}>
            <div className={styles.location}>
              <h2 className="heading heading-4 heading-darkGrey">العين السخنة كمباوند أروما الكيلو 39</h2>
              <i className="fas fa-map-marker-alt"></i>
            </div>

            <Button padding="btn-p" bgColor="btn-primary" width="w-50" onClick={confirmHandler}>
              تأكيد
            </Button>
          </div>
        )}
      </GoogleMap>
    </>
  )
}
