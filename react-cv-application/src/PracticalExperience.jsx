function PracticalExperience() {
    return (
      <div className="generalInfo">
        <h3>Educational Experience</h3>
        <div className="form-group">
          <label htmlFor="company name">Company Name:</label>
          <input type="text" id="company name" name="company name" />
          <button>Edit</button>
          <button>Submit</button>
        </div>
        <div className="form-group">
          <label htmlFor="position title,">Position Title,:</label>
          <input type="text" id="position title" name="position title" />
          <button>Edit</button>
          <button>Submit</button>
        </div>
        <div className="form-group">
          <label htmlFor="main responsibilities">Main Responsibilities:</label>
          <input type="text" id="main responsibilities" name="main responsibilities" />
          <button>Edit</button>
          <button>Submit</button>
        </div>
        <div className="form-group">
          <label htmlFor="employed from">Employed from:</label>
          <input type="text" id="employed from" name="employed from" />
          <button>Edit</button>
          <button>Submit</button>
        </div>
        <div className="form-group">
          <label htmlFor="employed until">Employed until:</label>
          <input type="text" id="employed until" name="employed until" />
          <button>Edit</button>
      <button>Submit</button>
        </div>
      </div>
    );
  }
  
  export default PracticalExperience;