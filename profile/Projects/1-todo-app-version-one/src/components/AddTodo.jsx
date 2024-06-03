function AddTodo() {
  return (
    <div class="container">
      <div className="row kg-row">
        <div className="col-3">
          <input type="text" placeholder="Enter To DoList"></input>
        </div>
        <div className="col-3">
          <input type="Date" />
        </div>
        <div className="col-1">
          <button type="button" class="btn btn-outline-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
