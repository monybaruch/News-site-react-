function App() {
  return (
    <>
      <nav id="main-nav">
        <div className="container">
          <img src="./images/fox-news-logo.jpg" alt="NewsGrid" className="logo" />
          <div className="social">
            <a href="https://www.facebook.com/FoxNews/" target="_blank">
              <i className="fab fa-facebook fa-3x" />
            </a>
            <a href="https://www.instagram.com/foxnews/" target="_blank">
              <i className="fab fa-instagram fa-3x" />
            </a>
            <a href="https://www.youtube.com/channel/UCXIJgqnII2ZOINSWNOGFThA" target="_blank">
              <i className="fab fa-youtube fa-3x" />
            </a>
            <a href="https://twitter.com/FoxNews" target="_blank">
              <i className="fab fa-twitter fa-3x" />
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
      {/* Showcase Area */}
      <header id="show-case">
        <div className="container">
          <div className="showcase-container">
            <div className="showcase-content">
              <div className="category category-sports">Sports</div>
              <h1>LIONEL MESSI JOINS RARE TERRITORY BY SCORING 700TH CAREER CLUB GOAL</h1>
              <p>
                Lionel Messi added another milestone to his already prestigious résumé on Sunday. The all-time great
                scored his 700th career club goal in Paris St. Germain's 3-0 win over Marseille. Messi's milestone goal
                came in the 29th minute of Sunday's match when he received a cross from Kylian Mbappé in the center of
                the box, tapping the ball into the net from just a few yards out. The Argentinian striker was mobbed by
                his PSG teammates following the goal.
              </p>
              <a className="btn btn-primary" href="article.html">
                Read More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Articles */}
      <section id="articles" className="py-2">
        <div className="container">
          <h2>Fox News Daily Articles</h2>
          <div className="articles-container">
            <article className="card">
              <img src="images/UPS.jpg" alt="" />
              <div>
                <div className="category category-ent">Entertainment</div>
                <h3>
                  <a href="article.html">UPS employees arrested in drug trafficking investigation</a>
                </h3>
                <p>
                  Four UPS employees, including drivers and supervisors, were arrested in a federal investigation into
                  narcotics trafficking that officials say went undetected for more than a decade.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="category category-tech">Technology</div>
              <h3>
                <a href="article.html">Microsoft enters 10-year agreement with Nvidia and Nintendo</a>
              </h3>
              <img src="images/tech1.jpg" alt="" />
              <p>
                Microsoft announced it has agreed to partnerships with Nvidia and Nintendo as it tries to convince
                European Union officials to approve its $69 billion purchase of Activision Blizzard — the company behind
                the popular game franchise Call of Duty.
              </p>
            </article>
            <article className="card">
              <div className="category category-ent">Entertainment</div>
              <h3>
                <a href="article.html">SAG Awards 2023: Behind-the-Scenes Photos</a>
              </h3>
              <img src="images/ent1.avif" alt="" />
              <p>
                Checking into the White Lotus: the winners of Outstanding Performance by an Ensemble in a Drama Series.
              </p>
            </article>
            <article className="card">
              <div className="category category-sports">Sports</div>
              <h3>
                <a href="article.html">After suffering his first loss in boxing, what now for Jake Paul?</a>
              </h3>
              <img src="images/sports1.avif" alt="" />
              <p>
                Jake Paul's unbeaten streak in boxing has come to an end. Tommy Fury, the half-brother of heavyweight
                great Tyson, beat Paul, the YouTuber-turned-prizefighter, via split decision (74-75, 76-73, 76-73) in a
                close bout Sunday in Diriyah, Saudi Arabia.
              </p>
            </article>
            <article className="card">
              <div className="category category-tech">Technology</div>
              <h3>
                <a href="article.html">Apple unveils new iPhones, Apple Watches and AirPods</a>
              </h3>
              <img src="images/tech2.jpg" alt="" />
              <p>
                Throughout the event, Apple appeared to alternate between pitching its suite of products as tools for
                living our best lives and also for avoiding any number of ills that may befall customers in an uncertain
                world, ranging from car crashes to getting stranded in the wild.
              </p>
            </article>
            <article className="card">
              <div className="category category-sports">Sports</div>
              <h3>
                <a href="article.html">The Hoop Collective: OKC's other draft-night mission</a>
              </h3>
              <img src="images/sports2.jfif" alt="" />
              <p>
                Brian Windhorst and a team of ESPN's Insiders sort out life and the news from in and around the NBA
                world, including the Oklahoma City Thunder landing Jalen Williams, an NBA competition for college law
                students and the future of Wilt Chamberlain's 100-point record.
              </p>
            </article>
            <article className="card">
              <div>
                <div className="category category-ent">Entertainment</div>
                <h3>
                  <a href="article.html">Madonnas eldest sibling, Anthony Ciccone, passes away at 66</a>
                </h3>
                <p>
                  Madonnas older brother, Anthony Ciccone, passed away last Friday night. He was 66. The sad news was
                  announced by musician Joe Henry, who is married to Madonnas sister Melanie Ciccone, on Instagram last
                  Sunday, Feb. 26. No details were given about his death. Public records showed that singers brother was
                  most recently living in Michigan where he and other siblings grew up.
                </p>
              </div>
              <img src="images/madonna.jpeg" alt="" />
            </article>
          </div>
        </div>
      </section>
      {/* Footer */}
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
              <input type="submit" defaultValue="Subscribe" className="btn btn-primary" />
            </form>
          </div>
          <div>
            <h3>Site Links</h3>
            <ul className="list">
              <li>
                <a href="#">Help &amp; Support</a>
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
            <p>Copyright © 2023, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
