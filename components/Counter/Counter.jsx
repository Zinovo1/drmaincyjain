import React from "react";
import { doctor } from "@/lib/doctor";

const Counter = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            {doctor.stats.map((stat) => (
              <div key={stat.label} className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className={`icofont ${stat.icon}`}></i>
                  <span className="h3">{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
