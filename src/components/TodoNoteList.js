import { useState } from "react";
import List from "./List";

export default function TodoNoteList({ data, onClearList }) {
  // if(!data.length) return <div>
  //   <p>Please input</p>
  // </div>
  const [sort, setSort] = useState("id");

  let sortedItems;
  if (sort === "id") {
    sortedItems = data;
  }
  if (sort === "title") {
    sortedItems = data.slice().sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="todonotelist">
      <ul className="list-container">
        {sortedItems.map((mess) => (
          <List message={mess} key={mess.id} />
        ))}
      </ul>
      <div className="sort">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="id">Sort by how you inputed the list</option>
          <option value="title">Sort alphabetically</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
