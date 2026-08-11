// Landing hero with name, role, and tagline
export default function Hero({ profile }) {
  return (
    <header className="hero">
      <div className="container">
        {/* Name headline */}
        <h1 className="hero-name">{profile.name}</h1>

        {/* Role subtitle */}
        <p className="hero-role">{profile.role}</p>

        {/* Short tagline */}
        <p className="hero-tagline">{profile.tagline}</p>
      </div>
    </header>
  );
}
