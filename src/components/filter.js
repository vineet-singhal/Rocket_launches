export const Filter = ({upcomingFilter, launchFilter}) => (
    <>
        <div className='container'>
        <div className='row'>
        <div className='col-sm-4'>
        <h5>Launch Status: </h5>
        <div className="form-check-inline">
      <label className="form-check-label" for="launch_status1">
        <input type="radio" className="form-check-input" id="launch_status1" name="launch_status" value="Failure" onChange={launchFilter} />Failure
      </label>
    </div>
    <div className="form-check-inline">
      <label className="form-check-label" for="launch_status2">
        <input type="radio" className="form-check-input" id="launch_status2" name="launch_status" value="Success" onChange={launchFilter} />Success
      </label>
    </div>
    <div className="form-check-inline">
      <label className="form-check-label" for="launch_status3">
        <input type="radio" className="form-check-input" id="launch_status3" name="launch_status" value="both" onChange={launchFilter} />Both
      </label>
    </div>
    </div>

    <div className='col-sm-4'>
        <h5>Upcoming: </h5>
        <div className="form-check-inline">
      <label className="form-check-label" for="upcoming1">
        <input type="radio" className="form-check-input" id="upcoming1" name="upcoming" value="yes" onChange={upcomingFilter} />Yes
      </label>
    </div>
    <div className="form-check-inline">
      <label className="form-check-label" for="upcoming2">
        <input type="radio" className="form-check-input" id="upcoming2" name="upcoming" value="no" onChange={upcomingFilter} />No
      </label>
    </div>
    <div className="form-check-inline">
      <label className="form-check-label" for="upcoming3">
        <input type="radio" className="form-check-input" id="upcoming3" name="upcoming" value="both" onChange={upcomingFilter} />Both
      </label>
    </div>
    </div>

    <div className='col-sm-4'>
        <h5>Date: </h5>
        
    </div>

    </div>
    </div>
    </>
);