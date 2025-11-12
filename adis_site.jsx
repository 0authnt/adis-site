import { useState } from "react";

export default function AdisSite() {
  const [page, setPage] = useState("home"); // Track which page to display

  // Mapping between page names and their corresponding components
  const pages = {
    home: <Home setPage={setPage} />, 
    stoicism: <Stoicism setPage={setPage} />, 
    health: <HealthPage setPage={setPage} />, 
    faith: <Faith setPage={setPage} />, 
    education: <Education setPage={setPage} />, 
    majors: <Majors setPage={setPage} />, 
    dress: <Dress setPage={setPage} />, 
    fitness: <Fitness setPage={setPage} />, 
    thanks: <Thanks setPage={setPage} />
  };

  // Render the currently selected page
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans px-8 py-10">
      {pages[page]}
    </div>
  );
}

function Home({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">“Ted, I'm gonna teach you how to live.”</h1>
      <p>
        I always wanted someone to teach me how to live. I had parents, I just had a remarkably hard time listening. Maybe it was the rough relationship with my dad or the rough life in general, but I always wanted someone to teach me what to do growing up. The person I am today is from learning that nobody was going to be able to do that for me, but me. My parents certainly molded me into the man I am today; though I was a rough kid, I will be eternally grateful to them for doing so. Still, I like to believe that I had—and likely still have—more lessons to learn in life.

Through learning the hard way, I’ve taken down a few things worth sharing with the world (or whoever has a few minutes to read this).
      </p>

      {/* Subtitle slogan section for ADIS */}
      <h2 className="text-2xl text-center text-amber-400 font-semibold tracking-wide mt-8 mb-4">
        Aspire. Develop. Inspire. Sustain.
      </h2>

      {/* Section links for each principle */}
      <Section title="1. Stoicism" onClick={() => setPage("stoicism")}>
        It’s not just an ideology. It’s a way of life. We as men must be strong if we are to lead — in our families, our work, and our communities. Strength without ego, leadership with accountability.
      </Section>

      <Section title="2. Health is Wealth" onClick={() => setPage("health")}>
        Imagine you could have any car, but it’s the only one you’ll ever drive. You’d maintain it with care. Your body deserves the same respect — train it, feed it, and keep it ready for life’s demands.
      </Section>

      <Section title="3. Faith" onClick={() => setPage("faith")}>
        Faith grounds us. I believe in God, and I’ve learned repentance isn’t about words — it’s about change. Separate from what drags you down and walk with intent.
      </Section>

      <Section title="4. Education" onClick={() => setPage("education")}>
        Education separates man from animal. It’s our duty to pursue it — to understand politics, economy, and our society. A well‑educated people make stronger citizens.
      </Section>

      {/* Navigation footer for additional sections */}
      <div className="border-t border-zinc-700 pt-8 mt-10 text-center space-y-2">
        <p className="uppercase tracking-widest text-zinc-400 text-sm">Explore More</p>
        <div className="flex justify-center gap-6">
          <button onClick={() => setPage("majors")} className="hover:underline">Majors</button>
          <button onClick={() => setPage("dress")} className="hover:underline">How to Dress</button>
          <button onClick={() => setPage("fitness")} className="hover:underline">How to Lift / Eat</button>
          <button onClick={() => setPage("thanks")} className="hover:underline">Thank You</button>
        </div>
      </div>
    </div>
  );
}

// Section component for clickable section headers
function Section({ title, onClick, children }) {
  return (
    <div className="space-y-2">
      <h2 onClick={onClick} className="text-xl font-semibold text-amber-400 cursor-pointer hover:underline">{title}</h2>
      <p className="text-zinc-200 leading-relaxed">{children}</p>
    </div>
  );
}

// Define missing Majors component to fix ReferenceError
function Majors({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Majors</h1>
      <p>Explore how different majors connect with real‑world impact and entrepreneurial thinking.</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Finance:</strong> Learn trading, use Bloomberg tools, and join investment communities like GFAM.</li>
        <li><strong>Business:</strong> Start ventures through Shopify or LLC formation; collaborate with fashion and marketing peers.</li>
        <li><strong>Tech:</strong> Expand your knowledge across sectors. Remember — code for people, not just for code’s sake.</li>
        <li><strong>Insurance:</strong> Study coverage fundamentals; understand risk management early.</li>
        <li><strong>Resume Tips:</strong> <a href="https://capd.mit.edu/resources/resume-samples-and-guidelines/" className="text-blue-400 underline">MIT Resume Guide</a></li>
        <li><strong>Talks:</strong> <a href="https://www.ted.com/topics/motivation" className="text-blue-400 underline">TED Talks on Motivation</a></li>
      </ul>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function Stoicism({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Stoicism</h1>
      <p>It's not just a remarkable ideology. It is truly a way of life. We as men must be strong if we are to lead. We lead on all levels every day. We lead our wives when we take them to dinner, we keep them safe when we walk on the street and make sure they're loved and protected. As it is our responsibility. We lead teams of colleagues to accomplish tasks and goals to benefit a greater good. Some of us lead teams to save lives, while having to maintain the safety of the very lives on their team. To be a strong man and know how to lead and make good decisions, I believe stoicism is an important stepping stone on this path.</p>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function HealthPage({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Health is Wealth</h1>
      <p>Imagine someone were to buy you any car you could want, the only condition is that it is the only car you'll ever be allowed to drive again. You'd take care of that car wouldn't you? The same goes for your body, for your mind and for your soul. Workout, train your body so that in any scenario you're prepared to help others. If a tree falls you and 3 men can lift it versus you needing 7.</p>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function Faith({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Faith</h1>
      <p>Faith is important, I as a Christian believe my faith has helped me navigate this world and helps me to understand right from wrong. We're humans. We're not perfect nor will we ever be. We make mistakes and it's important to accept them, and more importantly take accountability for them. Going to church doesn't magically wash off your sin and neither will 10 hail marys. True repentance and working to better yourself and to not make the same mistakes you've made is the key to a better future. Not just for yourself but for those around you. And only when you work hard to separate yourself from those that do not have the same goals as you, those that may be wrapped in sin with no intentions of escaping will you find peace in your heart.</p>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function Education({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      <p>Education is a priority above all, it separates us from animals. To be a good member of your community, i believe one should be educated. I believe we should all work to strengthen the education of others. I believe topics pertaining to politics, society as a whole & the economy we live in are important to prioritize as conversation amongst each other. This way we as a people are knowledgeable on the affairs of this country and can do our duty as citizens of this country to help our politicians by voting for the right party members. We can do better to make informed decisions about our personal finances to prevent the need for social welfare. I believe that education is the key to raising the bottom line and retaining this countries #1 spot.</p>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function Dress({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">How to Dress</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><a href="https://www.pinterest.com" className="text-blue-400 underline">Fits & Style Boards</a></li>
        <li><a href="https://www.gq.com/style" className="text-blue-400 underline">GQ Style Guides</a></li>
        <li><a href="https://www.asos.com" className="text-blue-400 underline">ASOS – Affordable Streetwear</a></li>
      </ul>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function Fitness({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">How to Lift / Eat</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><a href="https://www.stronglifts.com/5x5/" className="text-blue-400 underline">Workout Plan – StrongLifts 5x5</a></li>
        <li><a href="https://www.bodybuilding.com" className="text-blue-400 underline">Bodybuilding Resources</a></li>
        <li><a href="https://www.precisionnutrition.com/" className="text-blue-400 underline">How to Build a Diet</a></li>
        <li><a href="https://examine.com/supplements/whey-protein/" className="text-blue-400 underline">Protein Comparison & Science</a></li>
      </ul>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}

function Thanks({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Thank You</h1>
      <p>Thank you to Jo for introducing me to stoicism. You were also crucial to my academic and spiritual journey.</p>
      <p>Thank you to my parents, I can't tell you how lucky I am to have you. I hope one day I really make you proud and do something incredible.</p>
      <p>Thank you to Sam, you taught me that being a gym bro didn't mean I had to act like some meathead. You showed me that there is a true art to bodybuilding and for that I will always be grateful.</p>
      <p>Thank you to the love of my life. You know exactly who you are. The thought of you brings me peace, you are a constant reminder that I can and should always work hard to be a better person. I will always love you and I will always have a place for you in my heart. You're an incredible woman and I hope you're doing well.</p>
      <button onClick={() => setPage("home")} className="text-sm text-zinc-400 hover:underline">← Back</button>
    </div>
  );
}
