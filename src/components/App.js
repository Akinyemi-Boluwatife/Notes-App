import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Form from "./Form";
import TodoNoteList from "./TodoNoteList";

//use this data to test the app
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
    // console.log(data);
  }
  console.log(data);

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) {
      setData((data) => []);
    } else;
  }
  return (
    <div>
      <Header />
      <Search />
      <Form onGetData={handleGetData} />
      <TodoNoteList data={data} onClearList={handleClearList} />
    </div>
  );
}

export function List({ message, data }) {
  return (
    <li
      className="list"
      style={
        message.id % 2 === 0
          ? { backgroundColor: "#fedede" }
          : { backgroundColor: "#ccf0bb" }
      }
    >
      <h3>{message.title}</h3>
      <p>{message.content}</p>
    </li>
  );
}

export default App;
