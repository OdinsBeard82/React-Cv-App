function GeneralInfo() {
  return (
   <div> <h1>CV-Application</h1>
    <div className="generalInfo">
      <h3>General Information</h3>
      <div className="form-group">
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" name="Name" />
        <button>Edit</button>
        <button>Submit</button>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <button>Edit</button>
        <button>Submit</button>
      </div>
      <div className="form-group">
        <label htmlFor="number">Number:</label>
        <input type="text" id="number" name="number" />
        <button>Edit</button>
      <button>Submit</button>
      </div>
    </div>
    </div>
  );
}

export default GeneralInfo;

