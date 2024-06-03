function TodoItem1() {
    let todoName = 'By Milk';
    let todoDate = '12/3/2024';
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
export default TodoItem1;
