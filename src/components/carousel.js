export const Carousel = ({flight}) => (
    <>
    <div id={`carousel${flight.launch_date_unix}`} className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={flight.links.mission_patch} className="mx-auto d-block w-50 h-50" alt="No Image"/>
    </div>
    <div className="carousel-item">
      <img src={flight.links.mission_patch_small} className="mx-auto d-block w-50 h-50" alt="No Image"/>
    </div>
    {flight.links.flickr_images.map(imgs => (
      <div className="carousel-item">
        <img src={imgs} className="mx-auto d-block w-50 h-50" alt="No Image"/>
      </div>
    ))}
  </div>
  <a className="carousel-control-prev" href={`#carousel${flight.launch_date_unix}`} role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href={`#carousel${flight.launch_date_unix}`} role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  <div className="row">
    <div className="col-sm-4">
      <h4>Mission Name</h4>
      <p>{flight.mission_name}</p>
    </div>
    <div className="col-sm-4">
      <h4>Launch Year</h4>
      <p>{flight.launch_year}</p>
    </div>
    <div className="col-sm-4">
      <h4>Rocket Id</h4>
      <p>{flight.rocket.rocket_id}</p>
    </div>
    <div className="col-sm-4">
      <h4>Rocket Name</h4>
      <p>{flight.rocket.rocket_name}</p>
    </div>
    <div className="col-sm-4">
      <h4>Rocket Type</h4>
      <p>{flight.rocket.rocket_type}</p>
    </div>
    <div className="col-sm-4">
      <h4>Upcoming</h4>
      <p>{flight.upcoming ? `Yes` : `No`}</p>
    </div>
  </div>
  <p>{flight.details}</p>
  <a href={flight.links.wikipedia} className="btn btn-primary btn-block" target="_blank">More details on wikipedia</a>
</div>
</>
);