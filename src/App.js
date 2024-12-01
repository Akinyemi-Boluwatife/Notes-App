import { useState } from "react";

const message1 = [
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
  const [data, setData] = useState([]);

  function handleGetData(message) {
    setData((data) => [...data, message]);
    console.log(data);
  }

  return (
    <div>
      <Header />
      <Search />
      <Form onGetData={handleGetData} />
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

function Form({ onGetData }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [typeOfContent, setTypeOfContent] = useState("Note");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;

    const newMessage = { content, title, typeOfContent };

    onGetData(newMessage);

    setContent("");
    setTypeOfContent("Note");
    setTitle("");
  }

  return (
    <div className="form-inp-wrapper">
      <form className="form-inp" onSubmit={handleSubmit} name="info">
        <textarea
          placeholder="write the content..."
          cols="35"
          rows="7"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Input title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <select
          className="to-no"
          value={typeOfContent}
          onChange={(e) => setTypeOfContent(e.target.value)}
        >
          <option value="note">Note</option>
          <option value="Todo">Todo</option>
        </select>
        <button type="submit" className="sub">
          Submit
        </button>
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
        {message1.map((mess) => (
          <List message={mess} key={mess.id} />
        ))}
      </ul>
      <div className="sort">
        <select>
          <option value="id">Sort by how you inputed the list</option>
          <option value="title">Sort alphabetically</option>
        </select>
        <button>Clear List</button>
      </div>
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
