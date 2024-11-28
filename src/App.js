const message = [
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
  {
    id: 4,
    Type: "Todo",
    Title: "mth102",
    content:
      "The topic is about introduction to algebra and how to derive their formula ",
  },
];
function App() {
  return (
    <div>
      <Header />
      <Search />
      <Form />
      <TodoNoteList />
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
    <div className="form-inp-wrapper">
      <form className="form-inp" onSubmit={handleSubmit} name="info">
        <textarea
          placeholder="write the content..."
          cols="35"
          rows="7"
        ></textarea>
        <input type="text" placeholder="Please write the title"></input>
        <select className="to-no">
          <option value="note">Note</option>
          <option value="Todo">Todo</option>
        </select>
      </form>
      <div className="add-note/todo">
        <button className="btn-note-list">+</button>
      </div>
    </div>
  );
}

function TodoNoteList() {
  return (
    <div className="todonotelist">
      <ul className="list-container">
        {message.map((mess) => (
          <List message={mess} key={mess.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ message }) {
  return (
    <li
      className="list"
      style={
        message.id % 2 === 0
          ? { backgroundColor: "#fedede" }
          : { backgroundColor: "#ccf0bb" }
      }
    >
      <h3>{message.Title}</h3>
      <p>
        {message.id}. {message.content}
      </p>
    </li>
  );
}

export default App;
