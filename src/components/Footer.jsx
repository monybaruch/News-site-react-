import './footer.css';
const Footer = () => {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <h2>Fill Your World with Positive News : Fox News</h2>
        </div>
        <div>
          <h3>Email Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form>
            <input type="email" placeholder="Enter Email!" />
            <input type="submit" value="Subscribe" className="btn btn-primary" />
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Join Our Club</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptates.</p>
          <a href="" className="btn btn-secondary">
            Join Now
          </a>
        </div>
        <div>
          <p>Copyright &copy; 2023, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
