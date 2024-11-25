function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#header" className="hamburger">
            &#9776;
          </a>
        </li>
        <li>
          <a href="#header">
            <img src="search.svg" alt="img" />
          </a>
        </li>
        <li>
          <a href="#header" className="logo">
            JOT
          </a>
        </li>
        <li>
          <a href="#header">
            <img src="love.svg" alt="img"></img>``
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

export default App;
