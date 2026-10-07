"use client";

import { useEffect, useState } from "react";
import { doctor } from "@/lib/doctor";

const AnnouncementBar = () => {
  const announcements = doctor.announcements || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (announcements.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  if (!announcements.length) return null;

  return (
    <div className="announcement-bar">
      <div className="container d-flex align-items-center justify-content-center">
        <p className="announcement-text mb-0 text-center">{announcements[index]}</p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
