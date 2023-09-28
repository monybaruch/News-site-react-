import './nav.css';
const Nav = () => {
  return (
    <nav id="main-nav">
      <div className="container">
        <img src="./images/fox-news-logo.jpg" alt="NewsGrid" className="logo" />
        <div className="social">
          <a href="https://www.facebook.com/FoxNews/" target="_blank">
            <i className="fab fa-facebook fa-3x"></i>
          </a>
          <a href="https://www.instagram.com/foxnews/" target="_blank">
            <i className="fab fa-instagram fa-3x"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCXIJgqnII2ZOINSWNOGFThA" target="_blank">
            <i className="fab fa-youtube fa-3x"></i>
          </a>
          <a href="https://twitter.com/FoxNews" target="_blank">
            <i className="fab fa-twitter fa-3x"></i>
          </a>
        </div>
        <ul>
          <li>
            <a className="current" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="article.html">Articles</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
