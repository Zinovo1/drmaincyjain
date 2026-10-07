import { doctor } from "@/lib/doctor";

const HeroStats = () => {
  const stats = doctor.heroStats || [];
  if (!stats.length) return null;

  return (
    <section className="hero-stats-bar" aria-label="Clinical highlights">
      <div className="container">
        <div className="hero-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat-item">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
