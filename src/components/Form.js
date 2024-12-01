import { useState } from "react";

export default function Form({ onGetData }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [typeOfContent, setTypeOfContent] = useState("Note");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;

    const newMessage = {
      id: new Date().getUTCSeconds(),
      content,
      title,
      typeOfContent,
    };

    onGetData(newMessage);

    setContent("");
    setTypeOfContent("Note");
    setTitle("");
  }
  const [deploy, setDeploy] = useState(false);
  function deployment() {
    setDeploy(!deploy);
  }

  return (
    <div className="form-inp-wrapper">
      {deploy ? (
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
      ) : null}
      <div className="add-note/todo" onClick={deployment}>
        <button className="btn-note-list">
          {" "}
          <span> {deploy ? "X" : "+"} </span>{" "}
        </button>
      </div>
    </div>
  );
}
