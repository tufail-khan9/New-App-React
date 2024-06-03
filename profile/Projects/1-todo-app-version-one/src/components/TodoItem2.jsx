function TodoItem2() {
    let todoName = 'Go To College';
    let todoDate = '1/7/2024';
  return (
    <div class="container">
      <div className="row kg-row">
        <div className="col-3">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-1">
          <button type="button" class="btn btn-outline-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;