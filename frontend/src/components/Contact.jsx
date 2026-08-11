// Contact section with an email link
export default function Contact({ profile }) {
  return (
    <section id="contact">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Contact</h2>

        {/* Prompt text */}
        <p>Interested in working together? Reach out.</p>

        {/* Email mailto link */}
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </section>
  );
}
