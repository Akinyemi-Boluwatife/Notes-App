const list = [
  {
    id: 1,
    Type: "Todo",
    Title: "School Assignment",
    content:
      "The physics assignment is due on wednessday and it's course CODE IS PHY102, it is a 3 units course",
  },
  {
    id: 2,
    Type: "Note",
    Title: "chm102",
    content:
      "The topic is about organic and inorganic chemistry and it includes all the functions and their uses",
  },
  {
    id: 3,
    Type: "Note",
    Title: "csc102",
    content:
      "The topic is about introduction to algorithms and it specifies their uses and how to write it efficiently ",
  },
];
function App() {
  return (
    <div>
      <Header />
      <Search />
      <Form />
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
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for notes/todo"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="form-inp" onSubmit={handleSubmit}>
      <textarea placeholder="write........." cols="35" rows="7"></textarea>
      <button className="btn-note-list">+</button>
    </form>
  );
}

export default App;
