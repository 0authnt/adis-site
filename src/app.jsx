import React, { useState } from "react";

function Section({ title, onClick, children }) {
  return (
    <div className="section">
      <h2 className="section-title" onClick={onClick}>{title}</h2>
      <p className="section-text">{children}</p>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <div className="home">
      <h1>Welcome to ADIS</h1>
      <h2 className="subtitle">Aspire. Develop. Inspire. Sustain.</h2>
      <p>Exploring self-mastery, balance, and discipline.</p>
      <div className="nav-buttons">
        <button onClick={() => setPage("stoicism")}>Stoicism</button>
        <button onClick={() => setPage("health")}>Health</button>
        <button onClick={() => setPage("faith")}>Faith</button>
        <button onClick={() => setPage("education")}>Education</button>
      </div>
    </div>
  );
}

function Stoicism({ setPage }) {
  return (
    <div>
      <h1>Stoicism</h1>
      <p>Strength without ego. Leadership with accountability.</p>
      <button onClick={() => setPage("thanks")}>Explore More</button>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function HealthPage({ setPage }) {
  return (
    <div>
      <h1>Health</h1>
      <p>Your body is the vehicle for your purpose—train it, nourish it, respect it.</p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function Faith({ setPage }) {
  return (
    <div>
      <h1>Faith</h1>
      <p>Repentance isn’t about words, it’s about change and action.</p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function Education({ setPage }) {
  return (
    <div>
      <h1>Education</h1>
      <p>Knowledge builds nations; ignorance destroys them.</p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function Majors({ setPage }) {
  return (
    <div>
      <h1>Majors</h1>
      <p>How each major aligns with purpose and service.</p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function Dress({ setPage }) {
  return (
    <div>
      <h1>Dress</h1>
      <p>Style is silent discipline.</p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function Fitness({ setPage }) {
  return (
    <div>
      <h1>Fitness</h1>
      <p>Strength of body mirrors strength of mind.</p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

function Thanks({ setPage }) {
  return (
    <div>
      <h1>Thank You</h1>
      <p>
        Thank you to Jo for introducing me to Stoicism.<br />
        Thank you to my parents for everything.<br />
        Thank you to Sam for teaching me the art of bodybuilding.<br />
        Thank you to the love of my life — you know who you are.
      </p>
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const pages = {
    home: <Home setPage={setPage} />,
    stoicism: <Stoicism setPage={setPage} />,
    health: <HealthPage setPage={setPage} />,
    faith: <Faith setPage={setPage} />,
    education: <Education setPage={setPage} />,
    majors: <Majors setPage={setPage} />,
    dress: <Dress setPage={setPage} />,
    fitness: <Fitness setPage={setPage} />,
    thanks: <Thanks setPage={setPage} />,
  };
  return <div className="app-container">{pages[page]}</div>;
}
