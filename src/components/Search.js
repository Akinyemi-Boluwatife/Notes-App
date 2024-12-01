export default function Search() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for notes/todo"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
