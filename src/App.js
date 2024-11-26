function App() {
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
}

function Header() {
  return (
    <nav>
      <ul className="cont">
        <li className="hamburger">
          <button>
            <a href="#header">
              <img src="ham.svg" alt="img"></img>
            </a>
          </button>
        </li>

        <li>
          <a href="#header">
            <img src="search.svg" alt="img" />
          </a>
        </li>

        <li className="logo">
          <a href="#header">BOLU</a>
        </li>

        <li>
          <a href="#header">
            <img src="love.svg" alt="img"></img>
          </a>
        </li>

        <li>
          <a href="#header">
            <img src="vertical.svg" alt="img"></img>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Search() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for notes/todo"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
