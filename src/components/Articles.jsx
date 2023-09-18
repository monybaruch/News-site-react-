const articles = () => {
  return (
    <section className="articles py-2">
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
              Brian Windhorst and a team of ESPN's Insiders sort out life and the news from in and around the NBA world,
              including the Oklahoma City Thunder landing Jalen Williams, an NBA competition for college law students
              and the future of Wilt Chamberlain's 100-point record.
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
  );
};
export default articles;
