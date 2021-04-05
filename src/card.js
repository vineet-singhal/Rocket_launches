export const Card = ({flight}) =>(
    <div className='col-sm-3'>
              <div className="card" >
                <img src={flight.links.mission_patch} className="card-img-top" alt="No Images"/>
                <div className="card-body">
                  <h5 className="card-title">{flight.mission_name}</h5>
                  <p className="card-text">{flight.details}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
    </div>
);