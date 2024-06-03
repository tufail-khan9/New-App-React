function MapMethod() {
  let fooditems = ["dal", "sugar", "surf", "lemon max"];
  return (
    <>
      <h2>Kitchen Items</h2>
      <ul className="list-group">
        {fooditems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default MapMethod;
