export const Card = ({flight}) =>(
    <div className='col-sm-3'>
              <div className="card" >
                <img src={flight.links.mission_patch} className="card-img-top" alt="No Images"/>
                <div className="card-body">
                  <h5 className="card-title">{flight.mission_name}</h5>
                  <p className="card-text"><h6>Launch Date: </h6>{flight.launch_date_local.split("T")[0]}</p>
                  <p className="card-text"><h6>Launch Status: </h6>{flight.launch_success ? `Success` : `Failure`}</p>
                  <a href="#" className="btn btn-primary" data-toggle="modal" data-target={`#modal${flight.launch_date_unix}`}>Go somewhere</a>
                </div>
              </div>
    </div>
);