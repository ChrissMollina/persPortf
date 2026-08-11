// About section with bio and skill tags
export default function About({ profile }) {
  return (
    <section id="about">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">About</h2>

        {/* Bio paragraph */}
        <p className="about-text">{profile.about}</p>

        {/* Skill tags */}
        <ul className="skill-list">
          {profile.skills.map((skillName) => (
            <li key={skillName} className="skill-tag">
              {skillName}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
