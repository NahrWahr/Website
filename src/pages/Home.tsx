import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <div className="content-box home-hero">

      {/* Profile Image */}
      <div className="home-profile-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}images/profile.jpg`}
          alt="Rahul Narwar"
          className="home-profile-img"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 280'><rect width='280' height='280' fill='%23e9dfc5'/><circle cx='140' cy='110' r='50' fill='%23cbb4a6'/><path d='M40 280 C40 180, 240 180, 240 280' fill='%23cbb4a6'/><text x='140' y='140' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23725b48' font-weight='bold'>Drop profile.jpg into</text><text x='140' y='160' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23725b48' font-weight='bold'>/public/images/</text></svg>";
          }}
        />
      </div>

      {/* Biography */}
      <div className="home-bio">
        <div className="home-bio-header">
          <h2 className="home-name">Rahul Narwar</h2>
          <p className="home-tagline">
            Analog &amp; Mixed-Signal IC Design
          </p>
        </div>

        <section className="home-intro">
          <p>
            I design and model high-speed analog systems and circuits. This is a curated collection of my work spanning transistor-level design, layout characterization, and system simulation.
          </p>
        </section>

        {/* Links */}
        <div className="home-links">
          <a href="https://www.linkedin.com/in/rahul-narwar-8627a8219/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://github.com/NahrWahr" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="mailto:rnarwar.137@gmail.com">
            Email ↗
          </a>
          <a href={`${import.meta.env.BASE_URL}documents/RahulNarwar_Resume_AN.pdf`} target="_blank" rel="noreferrer" className="home-resume-link">
            Resume (PDF) ⤵
          </a>
        </div>
      </div>

      {/* History Timeline */}
      <div className="home-timeline-section">
        <h3 className="home-timeline-heading">
          History &amp; Education
        </h3>
        <Timeline />
      </div>

    </div>
  );
}
