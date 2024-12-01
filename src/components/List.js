export default function List({ message, data }) {
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
