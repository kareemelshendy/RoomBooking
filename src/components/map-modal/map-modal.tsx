import { Modal } from "react-bootstrap"
import { Button } from "../button/button"
import { Map } from "../map/map"

export const MapModal = ({ showMap, setShowMap }: any) => {
  return (
    <Modal show={showMap} onHide={() => setShowMap(false)} dialogClassName="map_modal">
      <Modal.Body>
        <Map />
      </Modal.Body>
      <Modal.Footer>
        <div className="location">
          <p>العين السخنة كمباوند أروما الكيلو 39</p>
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <div className="button">
          <Button  bgColor="btn-primary" width="w-100" onClick={() => setShowMap(false)}>
            تأكيد
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}
