import { Carousel } from "./carousel";

export const Modal = ({flight}) => (
    <>
        <div className="modal fade" id={`modal${flight.launch_date_unix}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{flight.launch_date_unix}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Carousel flight={flight}/>
      </div>
    </div>
  </div>
</div>
    </>
);