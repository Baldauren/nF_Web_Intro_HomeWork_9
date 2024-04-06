import "../App.css";

function header() {
  return (
    <div className="container">
      <header>
        <p class="header__text">Medium Alike</p>
        <a href="/index.html" class="back-arrow">
          <img src="icons/Logo.png" alt="" />
        </a>
      </header>
    </div>
  );
}
export default header;
