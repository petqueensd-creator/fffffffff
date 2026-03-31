import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { SystemLayer } from './components/SystemLayer';

// --- SECTIONS ---

const Hero = ({ onEnter }: { onEnter: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2, ease: 'power4.out' }
    ).fromTo('.hero-quote', 
      { opacity: 0 },
      { opacity: 0.6, duration: 1.5 }, "-=1"
    ).fromTo('.hero-cta', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }, "-=0.5"
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/80 pointer-events-none" />
      
      <div className="z-10 max-w-lg space-y-12">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
          THE SEVENTH SEED <br />
          <span className="text-blood flicker">HAS TAKEN ROOT.</span>
        </h1>

        <blockquote className="hero-quote text-sm md:text-base font-serif italic text-bone/60 leading-relaxed">
          "They buried the truth for a reason. The offering waits in the dark, and the first to decipher the scripture claims the harvest."
        </blockquote>

        <div className="hero-cta flex flex-col gap-4 items-center">
          <button 
            onClick={onEnter}
            className="group relative px-8 py-3 border border-bone/20 hover:border-blood/60 transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] font-mono">BEAR_WITNESS</span>
            <div className="absolute inset-0 bg-blood/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <button className="text-[10px] tracking-[0.4em] font-mono opacity-40 hover:opacity-100 transition-opacity duration-500">
            READ_SCRIPTURE
          </button>
        </div>
      </div>

      {/* Diegetic Navigation (Hidden in world) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 opacity-10 text-[8px] tracking-widest font-mono">
        <span>01_GENESIS</span>
        <span>02_COVENANT</span>
        <span>03_OFFERING</span>
        <span>04_APOCRYPHA</span>
      </div>
    </section>
  );
};

const Genesis = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center p-8 md:p-24 space-y-16 relative">
      <div className="max-w-2xl space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-blood/60 tracking-[0.5em]">01_GENESIS</span>
          <h2 className={clsx(
            "text-3xl md:text-5xl font-bold tracking-tight transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            A living, breathing testament set in a dark, atmospheric world of biblical dread.
          </h2>
        </div>

        <p className="text-bone/50 leading-relaxed text-sm md:text-lg">
          "Follow the perspective of those who witnessed the breaking of the seals..."
        </p>

        <div className="p-6 border border-bone/5 bg-bone/[0.02] font-mono text-[10px] md:text-xs space-y-1 leading-loose opacity-60">
          <div className="text-blood flicker">ESTABLISHING_COMMUNION...</div>
          <div>DECRYPTING_SACRED_TEXTS...</div>
          <div className="text-blood font-bold">WARNING: DEMONIC_INTERFERENCE_DETECTED</div>
          <div>RECOVERING_FRAGMENTED_PROPHECIES...</div>
          <div>LOCATION: [REDACTED]</div>
          <div>STATUS: AWAITING_JUDGMENT</div>
        </div>

        <div className="pt-8 border-t border-bone/10 space-y-4">
          <div className="text-[10px] font-mono opacity-30">APOCRYPHAL_REPORT_2026</div>
          <p className="text-[11px] text-bone/40 italic leading-relaxed">
            This system utilizes synthetic intelligence to manifest visions. Intentional clues are embedded within the static. Manipulation leads to damnation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8">
          <div className="space-y-2">
            <div className="text-[9px] font-mono text-blood/40">RAW TESTIMONY</div>
            <div className="h-px bg-bone/10 w-full" />
          </div>
          <div className="space-y-2 text-right">
            <div className="text-[9px] font-mono text-blood/40">AI REVELATION</div>
            <div className="h-px bg-bone/10 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Tabernacle = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section ref={ref} className="h-screen flex flex-col items-center justify-center p-8 text-center bg-black">
      <div className={clsx(
        "max-w-xl space-y-12 transition-all duration-1000 delay-300",
        inView ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-xl"
      )}>
        <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase">THE TABERNACLE</h2>
        <p className="text-sm text-bone/40 italic">"At the end of the tribulation lies the Seventh Seed."</p>
        
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-4 bg-blood/5 rounded-full blur-2xl group-hover:bg-blood/10 transition-all duration-700" />
          <div className="relative p-12 border border-bone/10 rounded-sm space-y-6">
            <div className="text-[10px] font-mono tracking-[0.5em] text-blood">THE_SEALED_RELIQUARY</div>
            <p className="text-xs text-bone/60 leading-relaxed">
              A protected digital vault requiring full narrative completion.
            </p>
            <div className="pt-4 text-[9px] font-mono opacity-30">
              STATUS: [LOCKED_BY_SCRIPTURE]
            </div>
          </div>
        </div>

        <div className="pt-12 space-y-2">
          <div className="text-xs font-bold tracking-widest">THE CHOSEN ONE</div>
          <p className="text-[10px] text-bone/40">Only one user can solve and claim the offering.</p>
        </div>
      </div>
    </section>
  );
};

const Offering = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center p-8 md:p-24 space-y-24">
      <div className="max-w-2xl space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-blood/60 tracking-[0.5em]">03_OFFERING</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The offering is real, verifiable, and secured by the blockchain.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border border-bone/5 bg-bone/[0.01] space-y-6">
            <div className="text-[10px] font-mono opacity-40">USDC_RELIQUARY</div>
            <div className="text-4xl font-mono font-bold text-blood">$12,450</div>
            <div className="space-y-1 text-[9px] font-mono opacity-30">
              <div>STATUS: [SEALED]</div>
              <div>NETWORK: ETH_MAINNET</div>
            </div>
          </div>

          <div className="p-8 border border-bone/5 bg-bone/[0.01] space-y-6">
            <div className="text-[10px] font-mono opacity-40">COMPOUNDING_TITHE</div>
            <div className="text-xs text-bone/60 leading-relaxed">
              The harvest grows with every witness. The scripture remains immutable.
            </div>
            <div className="text-[9px] font-mono text-blood/60 break-all">
              0x71C765...d8976F
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tithe = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blood/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-blood/10 rounded-full animate-pulse delay-700" />
      </div>

      <div className="z-10 max-w-lg space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter">THE TITHE</h2>
          <p className="text-bone/60 italic">"Become part of the narrative."</p>
        </div>

        <div className="p-12 border border-blood/20 bg-blood/[0.02] space-y-8 group cursor-pointer hover:bg-blood/[0.05] transition-all duration-700">
          <div className="text-[10px] font-mono tracking-[0.5em] text-blood">BLOOD_INSCRIPTION</div>
          <p className="text-xs text-bone/50 leading-relaxed">
            Users can leave permanent marks upon the digital scripture.
          </p>
          <div className="text-2xl font-mono">$1.00</div>
          <button className="px-8 py-2 border border-blood/40 text-[10px] font-mono tracking-widest hover:bg-blood hover:text-white transition-all duration-300">
            INSCRIBE_NOW
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-[9px] font-mono opacity-30">
          <div>40% OFFERING</div>
          <div>60% INFRASTRUCTURE</div>
        </div>

        <p className="text-[11px] text-bone/40 italic">"Every contribution fuels the mystery..."</p>
      </div>
    </section>
  );
};

const Testament = () => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center p-8 md:p-24 bg-bone/[0.02]">
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="text-[10px] font-mono text-blood">THE_TESTAMENT</div>
          <h3 className="text-xl font-bold">Immutable Ledger</h3>
          <p className="text-xs text-bone/40 leading-relaxed">Public blockchain verification ensures the offering remains untouched until the prophecy is fulfilled.</p>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-mono text-blood">THE_TESTAMENT</div>
          <h3 className="text-xl font-bold">Static Prophecy</h3>
          <p className="text-xs text-bone/40 leading-relaxed">The solution is fixed. No manipulation can alter the path to the Seventh Seed.</p>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-mono text-blood">THE_TESTAMENT</div>
          <h3 className="text-xl font-bold">Logical Integrity</h3>
          <p className="text-xs text-bone/40 leading-relaxed">A solvable mystery for those with the eyes to see and the faith to endure.</p>
        </div>
      </div>
    </section>
  );
};

const Congregation = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center p-8 md:p-24 space-y-16">
      <div className="max-w-2xl space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-blood/60 tracking-[0.5em]">04_CONGREGATION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            "The truth is not a straight line..."
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="w-px h-12 bg-blood/40" />
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest">Omnipresent Signs</h4>
              <p className="text-xs text-bone/50 leading-relaxed">Clues are hidden within metadata, source code, and the very fabric of the transmission.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-px h-12 bg-blood/40" />
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-widest">Collective Faith</h4>
              <p className="text-xs text-bone/50 leading-relaxed">Collaboration is required. No single witness can bear the weight of the full revelation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApocryphalTexts = () => {
  const faqs = [
    { q: "Is the offering real?", a: "Verifiable on-chain. Immutable. Absolute." },
    { q: "Can anyone be chosen?", a: "Only the first to decipher the scripture claims the harvest." },
    { q: "Are the signs fair?", a: "The logic is sound. The difficulty is divine." },
    { q: "Are the visions AI-generated?", a: "Synthetic manifestations of ancient dread. Clues are intentional." },
    { q: "Can I bear witness for free?", a: "The narrative is open to all. The tithe is a choice of faith." }
  ];

  return (
    <section className="min-h-screen p-8 md:p-24 space-y-24">
      <div className="max-w-2xl space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-blood/60 tracking-[0.5em]">05_APOCRYPHAL_TEXTS</span>
          <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-4 group">
              <h4 className="text-sm font-mono text-bone/80 group-hover:text-blood transition-colors duration-500">? {faq.q}</h4>
              <p className="text-xs text-bone/40 leading-relaxed pl-4 border-l border-bone/10">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="p-8 border border-blood/40 bg-blood/[0.05] text-center space-y-4">
          <div className="text-[10px] font-mono text-blood font-bold tracking-[0.3em]">DIVINE_JUDGMENT_WARNING</div>
          <p className="text-[11px] text-bone/60 italic">
            "Manipulation of the system or deceitful conduct leads to eternal damnation within the ledger."
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-24 border-t border-bone/5">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-[0.5em] flicker">SIGNAL_TERMINATED</h2>
        <p className="text-xs text-bone/40 italic">"The watchers descend from the heavens..."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
        <div className="space-y-4">
          <div className="text-[10px] font-mono text-blood/60">SCRIPTURE</div>
          <div className="flex flex-col gap-2 text-[9px] font-mono opacity-30">
            <span>GENESIS</span>
            <span>COVENANT</span>
            <span>OFFERING</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-mono text-blood/60">APOCRYPHA</div>
          <div className="flex flex-col gap-2 text-[9px] font-mono opacity-30">
            <span>CONGREGATION</span>
            <span>TESTAMENT</span>
            <span>RELIQUARY</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-mono text-blood/60">COMMANDMENTS</div>
          <div className="flex flex-col gap-2 text-[9px] font-mono opacity-30">
            <span>TERMS_OF_FAITH</span>
            <span>PRIVACY_OF_SOUL</span>
            <span>WITNESS_NOW</span>
          </div>
        </div>
      </div>

      <div className="pt-24 space-y-2 text-[8px] font-mono opacity-20 tracking-[0.5em]">
        <div>LOCATION: UNKNOWN_SECTOR_7</div>
        <div>© 2026 SEVENTH SEED // ALL RIGHTS RESERVED BY THE WATCHERS</div>
      </div>
    </footer>
  );
};

// --- MAIN APP ---

export default function App() {
  const [depth, setDepth] = useState(0);
  const [faithLevel, setFaithLevel] = useState(7);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      // Depth increases with scroll
      setDepth(Math.floor(scrollPercent * 666));
      
      // Faith level fluctuates slightly
      setFaithLevel(Math.min(100, Math.max(0, 7 + Math.floor(scrollPercent * 93) + (Math.sin(scrollTop * 0.01) * 2))));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGenesis = () => {
    const genesis = document.getElementById('genesis');
    genesis?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main ref={scrollContainerRef} className="relative bg-ink text-bone selection:bg-blood selection:text-white">
      {/* Visual Layers */}
      <div className="grain" />
      <div className="scanlines" />
      <div className="vignette" />
      
      {/* Diegetic System Layer */}
      <SystemLayer depth={depth} faithLevel={faithLevel} />

      {/* Content Sections */}
      <div className="relative z-10">
        <Hero onEnter={scrollToGenesis} />
        
        <div id="genesis">
          <Genesis />
        </div>
        
        <Tabernacle />
        <Offering />
        <Tithe />
        <Testament />
        <Congregation />
        <ApocryphalTexts />
        <Footer />
      </div>

      {/* Diegetic Navigation (Hidden / Embedded) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[10001] hidden md:flex flex-col gap-4 opacity-20 hover:opacity-100 transition-opacity duration-500">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-1 h-1 bg-bone rounded-full" />
        ))}
      </nav>
    </main>
  );
}
