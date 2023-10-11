function EducationalExperience() {
    return (
      <div className="generalInfo">
        <h3>Educational Experience</h3>
        <div className="form-group">
          <label htmlFor="school name">School Name:</label>
          <input type="text" id="school name" name="school name" />
          <button>Edit</button>
          <button>Submit</button>
        </div>
        <div className="form-group">
          <label htmlFor="title of study ">Title of Study:</label>
          <input type="text" id="title of study " name="title of study " />
          <button>Edit</button>
          <button>Submit</button>
        </div>
        <div className="form-group">
          <label htmlFor="date of study">Date of study:</label>
          <input type="text" id="date of study" name="date of study" />
          <button>Edit</button>
          <button>Submit</button>
        </div>

      </div>
    );
  }
  
  export default EducationalExperience;