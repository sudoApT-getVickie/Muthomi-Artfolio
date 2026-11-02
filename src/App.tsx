import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import BentoHero from "./components/BentoHero";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function App() {
  return (
    <div className="app-layout">
      {/* High-Performance Bento Hero Section */}
      <BentoHero />

      {/* Selected Work Section */}
      <section id="work" className="content-section">
        <FadeInSection>
          <h2>Selected Work</h2>
        </FadeInSection>

        <div className="project-grid">
          {/* 1. HerVoice.AI */}
          <FadeInSection delay={0}>
            <div className="project-card">
              <h3>HerVoice.AI</h3>
              <p>A digital companion architecture focused on women's safety and emotional wellbeing.</p>
              <div className="tech-stack">
                <span>AI</span>
                <span>Mobile</span>
                <span>Architecture</span>
              </div>
              <a
                href="https://her-voice-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 2. Dawa Mashinani */}
          <FadeInSection delay={100}>
            <div className="project-card">
              <h3>Dawa Mashinani</h3>
              <p>An offline-first mobile ecosystem designed to streamline rural healthcare delivery.</p>
              <div className="tech-stack">
                <span>Mobile</span>
                <span>Offline-First</span>
                <span>UX</span>
              </div>
              <a
                href="https://github.com/sudoApT-getVickie/Dawa-Mashinani"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 3. Mountain Bridge Investment */}
          <FadeInSection delay={200}>
            <div className="project-card">
              <h3>Mountain Bridge Investment</h3>
              <p>A high-performance, SEO-optimized web platform for a real estate investment firm.</p>
              <div className="tech-stack">
                <span>Web Development</span>
                <span>SEO</span>
                <span>React</span>
              </div>
              <a
                href="https://mountainbridgeinvestments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 4. QejaYetu */}
          <FadeInSection delay={300}>
            <div className="project-card">
              <h3>QejaYetu</h3>
              <p>A spatial accommodation and discovery platform built for modern university students.</p>
              <div className="tech-stack">
                <span>Spatial UI</span>
                <span>Maps API</span>
                <span>Next.js</span>
              </div>
              <a
                href="https://qejayetu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 5. Shamba Shape Up */}
          <FadeInSection delay={400}>
            <div className="project-card">
              <h3>Shamba Shape Up</h3>
              <p>An interactive agricultural advisory platform delivering actionable climate and crop insights.</p>
              <div className="tech-stack">
                <span>Agritech</span>
                <span>SMS/USSD</span>
                <span>API</span>
              </div>
              <a
                href="https://github.com/sudoApT-getVickie"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 6. Twiga Data Bridge */}
          <FadeInSection delay={500}>
            <div className="project-card">
              <h3>Twiga Data Bridge</h3>
              <p>A serverless POS analytics platform and progressive web app with Python ETL pipelines and an in-app LLM copilot.</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>AWS Lambda</span>
                <span>Supabase</span>
                <span>LLM Copilot</span>
              </div>
              <a
                href="https://github.com/sudoApT-getVickie/Twiga-Data-Bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 7. Ikonex Student Management System */}
          <FadeInSection delay={600}>
            <div className="project-card">
              <h3>Ikonex SMS</h3>
              <p>A full-stack institutional portal managing student records, academic streams, subjects, and grade reporting.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Tailwind CSS</span>
              </div>
              <a
                href="https://github.com/sudoApT-getVickie/ikonex-student-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>

          {/* 8. Eleazar Barbershop */}
          <FadeInSection delay={700}>
            <div className="project-card">
              <h3>Eleazar Barbershop</h3>
              <p>An offline-first progressive web application for salon bookings with service worker caching and WhatsApp dispatch.</p>
              <div className="tech-stack">
                <span>PWA</span>
                <span>Offline-First</span>
                <span>JavaScript</span>
                <span>Service Workers</span>
              </div>
              <a
                href="https://github.com/sudoApT-getVickie/ELEAZAR-BARBERSHOP"
                target="_blank"
                rel="noopener noreferrer"
                className="view-details"
              >
                View Details &rarr;
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Bernard Victor Muthomi. All rights reserved.</p>
      </footer>
    </div>
  );
}
