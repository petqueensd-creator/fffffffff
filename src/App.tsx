import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { SystemLayer } from './components/SystemLayer';
import { MysteriousBackgroundImages } from './components/MysteriousBackgroundImages';

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { id: 'hero', label: '00_ROOT' },
    { id: 'genesis', label: '01_GENESIS' },
    { id: 'tabernacle', label: '02_COVENANT' },
    { id: 'offering', label: '03_OFFERING' },
    { id: 'tithe', label: '03_TITHE' },
    { id: 'testament', label: '04_TESTAMENT' },
    { id: 'congregation', label: '04_CONGREGATION' },
    { id: 'apocrypha', label: '05_APOCRYPHA' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[10005] p-4 md:p-6 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-bone/5">
      <div className="font-mono text-xs md:text-sm tracking-[0.4em] text-blood font-bold flicker select-none">
        SEVENTH_SEED // SYSTEM_OS
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6">
        {sections.map(s => (
          <button 
            key={s.id} 
            onClick={() => scrollTo(s.id)}
            className="font-mono text-[10px] tracking-widest opacity-40 hover:opacity-100 hover:text-blood transition-all uppercase cursor-pointer"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden font-mono text-[10px] tracking-widest text-bone border border-bone/20 px-3 py-1 hover:bg-blood/20 transition-all"
      >
        {isOpen ? '[ CERRAR ]' : '[ MENÚ ]'}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-ink/98 border-b border-blood/20 p-8 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {sections.map(s => (
            <button 
              key={s.id} 
              onClick={() => scrollTo(s.id)}
              className="text-left font-mono text-xs tracking-[0.3em] opacity-60 hover:opacity-100 hover:text-blood transition-all uppercase"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onEnter }: { onEnter: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, filter: 'blur(20px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2.5, ease: 'power4.out' }
    ).fromTo('.hero-quote', 
      { opacity: 0, y: 20 },
      { opacity: 0.6, y: 0, duration: 1.5 }, "-=1.5"
    ).fromTo('.hero-cta', 
      { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.3 }, "-=0.8"
    );
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink/90 pointer-events-none z-1" />
      
      <div className="z-10 max-w-4xl mx-auto space-y-8 md:space-y-16">
        <h1 ref={titleRef} className="text-4xl md:text-7xl font-display italic font-black tracking-tighter uppercase leading-[0.9] select-none">
          THE SEVENTH <br />
          <span className="text-blood flicker drop-shadow-[0_0_30px_rgba(139,0,0,0.8)]">SEED</span> <br />
          <span className="text-base md:text-2xl tracking-[0.4em] opacity-40 font-mono block mt-6">HAS TAKEN ROOT.</span>
        </h1>

        <blockquote className="hero-quote text-sm md:text-2xl font-serif italic text-bone/60 leading-relaxed max-w-2xl mx-auto">
          "They buried the truth for a reason. The offering waits in the dark, and the first to decipher the scripture claims the harvest."
        </blockquote>

        <div className="hero-cta flex flex-col sm:flex-row gap-6 items-center justify-center pt-12">
          <button 
            onClick={onEnter}
            className="group relative px-12 py-5 border border-bone/20 hover:border-blood/80 transition-all duration-700 overflow-hidden min-w-[240px]"
          >
            <span className="relative z-10 text-xs md:text-sm tracking-[0.5em] font-mono group-hover:text-white transition-colors duration-500">BEAR_WITNESS</span>
            <div className="absolute inset-0 bg-blood/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            <div className="absolute -inset-1 bg-blood/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </button>
          
          <button className="text-[10px] md:text-xs tracking-[0.6em] font-mono opacity-30 hover:opacity-100 hover:text-blood transition-all duration-700 uppercase">
            READ_SCRIPTURE
          </button>
        </div>
      </div>
    </section>
  );
};

const Genesis = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="genesis" ref={ref} className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden border-t border-bone/5">
      <div className="max-w-5xl mx-auto w-full space-y-16 relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-px bg-blood/60" />
            <span className="text-[10px] md:text-xs font-mono text-blood/80 tracking-[0.6em] uppercase">01_GENESIS</span>
          </div>
          <h2 className={clsx(
            "text-3xl md:text-6xl font-display italic font-black tracking-tighter transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-20 blur-md"
          )}>
            A living, breathing testament set in a dark world of <span className="text-blood drop-shadow-[0_0_15px_rgba(139,0,0,0.4)]">biblical dread.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-bone/60 leading-relaxed text-lg md:text-3xl font-serif italic">
              "Follow the perspective of those who witnessed the breaking of the seals..."
            </p>
            
            <div className="pt-8 border-t border-bone/10 space-y-6">
              <div className="text-[10px] font-mono opacity-40 tracking-widest uppercase">APOCRYPHAL_REPORT_2026</div>
              <p className="text-sm md:text-base text-bone/50 italic leading-relaxed">
                This system utilizes synthetic intelligence to manifest visions. Intentional clues are embedded within the static. Manipulation leads to damnation.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 bg-blood/10 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative p-8 md:p-16 border border-bone/10 bg-black/60 backdrop-blur-md font-mono text-[10px] md:text-sm space-y-3 leading-relaxed tracking-wider overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-[8px] opacity-20">SYS_LOG_RECOVERY_01</div>
              <div className="text-blood flicker font-bold">ESTABLISHING_COMMUNION...</div>
              <div className="opacity-80">DECRYPTING_SACRED_TEXTS...</div>
              <div className="text-blood font-bold animate-pulse">WARNING: DEMONIC_INTERFERENCE_DETECTED</div>
              <div className="opacity-80">RECOVERING_FRAGMENTED_PROPHECIES...</div>
              <div className="opacity-60">LOCATION: [REDACTED]</div>
              <div className="opacity-60">STATUS: AWAITING_JUDGMENT</div>
              <div className="pt-6 text-blood/40">_ [CURSOR_BLINK]</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 border-t border-bone/5">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-blood/60 tracking-widest uppercase">RAW TESTIMONY</div>
            <div className="h-px bg-gradient-to-r from-blood/40 to-transparent w-full" />
            <div className="text-xs opacity-40 font-mono leading-relaxed italic">
              [FRAG_01] "I saw the sky turn to ash and the stars fall like leaden weights..."
            </div>
          </div>
          <div className="space-y-4 sm:text-right">
            <div className="text-[10px] font-mono text-blood/60 tracking-widest uppercase">AI REVELATION</div>
            <div className="h-px bg-gradient-to-l from-blood/40 to-transparent w-full" />
            <div className="text-xs opacity-40 font-mono leading-relaxed italic">
              [GEN_01] "The machine dreams of the end, calculating the weight of every sin."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tabernacle = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section id="tabernacle" ref={ref} className="min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center bg-black relative overflow-hidden border-t border-bone/5">
      <div className={clsx(
        "max-w-4xl mx-auto space-y-20 transition-all duration-1000 delay-300 relative z-10",
        inView ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-90 blur-2xl"
      )}>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-6xl font-display italic font-black tracking-[0.4em] uppercase text-bone/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">THE TABERNACLE</h2>
          <div className="w-24 h-px bg-blood/60 mx-auto" />
          <p className="text-sm md:text-xl text-bone/40 italic font-serif">"At the end of the tribulation lies the Seventh Seed."</p>
        </div>
        
        <div className="relative group cursor-pointer max-w-2xl mx-auto">
          <div className="absolute -inset-12 bg-blood/10 rounded-full blur-3xl group-hover:bg-blood/20 transition-all duration-1000" />
          <div className="relative p-12 md:p-24 border border-bone/10 bg-ink/60 backdrop-blur-xl rounded-sm space-y-10 group-hover:border-blood/40 transition-colors duration-700">
            <div className="text-[10px] md:text-sm font-mono tracking-[1em] text-blood uppercase font-bold">THE_SEALED_RELIQUARY</div>
            <p className="text-sm md:text-xl text-bone/60 leading-relaxed font-serif italic">
              A protected digital vault requiring full narrative completion. Only the worthy shall pass the gates of the ledger.
            </p>
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="w-1.5 h-1.5 bg-blood/60 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <div className="pt-6 text-[10px] md:text-xs font-mono opacity-30 tracking-[0.5em] uppercase">
              STATUS: [LOCKED_BY_SCRIPTURE]
            </div>
          </div>
        </div>

        <div className="pt-12 space-y-6">
          <div className="text-lg md:text-3xl font-bold tracking-[0.5em] uppercase text-blood/80">THE CHOSEN ONE</div>
          <p className="text-xs md:text-sm text-bone/40 tracking-[0.4em] uppercase max-w-md mx-auto">Only one user can solve and claim the offering.</p>
        </div>
      </div>
    </section>
  );
};

const Offering = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="offering" ref={ref} className="min-h-screen flex flex-col justify-center py-24 px-6 relative border-t border-bone/5">
      <div className="max-w-5xl mx-auto w-full space-y-16">
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-blood/60" />
            <span className="text-[10px] md:text-xs font-mono text-blood/80 tracking-[0.6em] uppercase">03_OFFERING</span>
            <div className="w-12 h-px bg-blood/60" />
          </div>
          <h2 className="text-3xl md:text-6xl font-display italic font-black tracking-tighter uppercase">THE BLOCKCHAIN <span className="text-blood drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]">RELIQUARY</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'BLOCK_HEIGHT', value: '7,777,777', desc: 'The moment of the first seed.' },
            { label: 'FAITH_STAKE', value: '66.6%', desc: 'Current global devotion level.' },
            { label: 'REWARD_TIER', value: 'DIVINE', desc: 'The ultimate harvest awaits.' }
          ].map((stat, i) => (
            <div key={i} className="group p-8 border border-bone/10 bg-ink/40 backdrop-blur-sm hover:border-blood/40 transition-all duration-500">
              <div className="text-[10px] font-mono text-blood/60 tracking-widest mb-4 uppercase">{stat.label}</div>
              <div className="text-2xl md:text-4xl font-bold text-bone/90 mb-2">{stat.value}</div>
              <div className="text-[10px] text-bone/40 font-mono tracking-wider leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="p-8 md:p-12 border border-blood/20 bg-blood/5 text-center space-y-6">
          <p className="text-sm md:text-xl text-bone/60 italic font-serif leading-relaxed">
            "The ledger records every sacrifice. Your digital footprint is your eternal testament."
          </p>
          <div className="text-[10px] font-mono opacity-30 tracking-[0.4em] uppercase">VERIFYING_TRANSACTION_HISTORY...</div>
        </div>
      </div>
    </section>
  );
};

const Tithe = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="tithe" ref={ref} className="min-h-screen flex flex-col justify-center py-24 px-6 relative bg-ink/20 border-t border-bone/5 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full space-y-12 text-center relative z-10">
        <div className="space-y-4">
          <span className="text-[10px] md:text-xs font-mono text-blood/80 tracking-[0.6em] uppercase">03_TITHE</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">INSCRIPTION OF <span className="text-blood">BLOOD</span></h2>
        </div>

        <p className="text-base md:text-2xl text-bone/60 font-serif italic leading-relaxed">
          "Mark the world with your presence. The tithe is not in gold, but in the attention you bleed into the system."
        </p>

        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 border border-blood rounded-full animate-ping" />
          </div>
          <button className="relative z-10 px-16 py-6 bg-blood/10 border border-blood/40 hover:bg-blood/20 hover:border-blood transition-all duration-700 group">
            <span className="text-xs md:text-sm tracking-[0.8em] font-mono text-blood group-hover:text-white">INSCRIBE_NOW</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-30 font-mono text-[8px] md:text-[10px] tracking-widest">
          <div>[USER_ID: 0x7A...F2]</div>
          <div>[STATUS: MARKED]</div>
          <div>[DEPTH: 666M]</div>
          <div>[FAITH: HIGH]</div>
        </div>
      </div>
    </section>
  );
};

const Testament = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="testament" ref={ref} className="min-h-screen flex flex-col justify-center py-24 px-6 relative border-t border-bone/5">
      <div className="max-w-5xl mx-auto w-full space-y-16">
        <div className="space-y-6 text-center md:text-left">
          <span className="text-[10px] md:text-xs font-mono text-blood/80 tracking-[0.6em] uppercase">04_TESTAMENT</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase leading-none">THE LAWS OF <br />THE <span className="text-blood">VOID</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "I. THE SILENCE", text: "Speak not of the seed to those who dwell in the light. Paranoia is the only protection." },
            { title: "II. THE SACRIFICE", text: "To gain the harvest, one must first lose their shadow. The digital self is but a husk." },
            { title: "III. THE LEDGER", text: "Every action is etched in the immutable bone of the system. There is no delete, only decay." },
            { title: "IV. THE ASCENSION", text: "The seventh shall rise when the first six have withered. Patience is a ritual." }
          ].map((law, i) => (
            <div key={i} className="p-8 border-l-2 border-blood/20 bg-ink/10 space-y-4 hover:bg-blood/5 transition-colors duration-500">
              <h3 className="text-lg md:text-xl font-bold tracking-widest text-blood/80">{law.title}</h3>
              <p className="text-sm md:text-base text-bone/50 italic font-serif leading-relaxed">{law.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Congregation = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="congregation" ref={ref} className="min-h-[60vh] flex flex-col justify-center py-24 px-6 relative bg-ink/10 border-t border-bone/5">
      <div className="max-w-4xl mx-auto w-full text-center space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] md:text-xs font-mono text-blood/80 tracking-[0.6em] uppercase">04_CONGREGATION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">JOIN THE <span className="text-blood">WATCHERS</span></h2>
        </div>
        
        <p className="text-sm md:text-xl text-bone/40 font-mono tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
          "The world extends beyond these walls. The congregation gathers in the static of the network."
        </p>

        <div className="flex flex-wrap justify-center gap-8 pt-8">
          <button className="text-[10px] md:text-xs font-mono tracking-[0.5em] text-bone/40 hover:text-blood transition-all uppercase border-b border-bone/10 pb-2">DISCORD_COMMUNION</button>
          <button className="text-[10px] md:text-xs font-mono tracking-[0.5em] text-bone/40 hover:text-blood transition-all uppercase border-b border-bone/10 pb-2">X_REVELATIONS</button>
          <button className="text-[10px] md:text-xs font-mono tracking-[0.5em] text-bone/40 hover:text-blood transition-all uppercase border-b border-bone/10 pb-2">YOUTUBE_WITNESS</button>
        </div>
      </div>
    </section>
  );
};

const ApocryphalTexts = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="apocrypha" ref={ref} className="min-h-screen py-24 px-6 relative border-t border-bone/5">
      <div className="max-w-4xl mx-auto w-full space-y-16">
        <div className="space-y-6 text-center">
          <span className="text-[10px] md:text-xs font-mono text-blood/80 tracking-[0.6em] uppercase">05_APOCRYPHA</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">DISCOVERED <span className="text-blood">MESSAGES</span></h2>
          <p className="text-xs md:text-sm text-bone/40 font-mono tracking-widest uppercase">FREQUENTLY_ASKED_REVELATIONS</p>
        </div>

        <div className="space-y-8">
          {[
            { q: "Is this a game?", a: "It is a ritual. A descent. A test of faith in the digital void." },
            { q: "What is the Seventh Seed?", a: "The final fragment of a broken world. The key to the harvest." },
            { q: "How do I participate?", a: "Watch. Listen. Decipher. The clues are hidden in the static." },
            { q: "Is the offering real?", a: "As real as the blood in your veins and the code in the machine." }
          ].map((faq, i) => (
            <div key={i} className={clsx(
              "p-8 border border-bone/5 bg-ink/20 space-y-4 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )} style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="text-xs md:text-sm font-bold tracking-widest text-blood/80 uppercase">Q: {faq.q}</div>
              <div className="text-sm md:text-base text-bone/50 italic font-serif leading-relaxed">A: {faq.a}</div>
            </div>
          ))}
        </div>

        <div className="pt-16 text-center">
          <div className="inline-block p-6 border border-blood/40 bg-blood/5 text-blood font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase animate-pulse">
            WARNING: DIVINE_JUDGMENT_IS_IMMINENT
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 relative border-t border-bone/5 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blood/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="font-mono text-xs md:text-sm tracking-[0.8em] text-blood font-bold flicker">
          SEVENTH_SEED // END_OF_TRANSMISSION
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full pt-12 border-t border-bone/5">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-bone/30 tracking-widest uppercase">NAVIGATION</div>
            <div className="flex flex-col gap-2 text-[10px] font-mono tracking-widest text-bone/60">
              <span className="hover:text-blood cursor-pointer transition-colors">ROOT</span>
              <span className="hover:text-blood cursor-pointer transition-colors">GENESIS</span>
              <span className="hover:text-blood cursor-pointer transition-colors">COVENANT</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-bone/30 tracking-widest uppercase">LEGAL_VOID</div>
            <div className="flex flex-col gap-2 text-[10px] font-mono tracking-widest text-bone/60">
              <span className="hover:text-blood cursor-pointer transition-colors">PRIVACY_DECAY</span>
              <span className="hover:text-blood cursor-pointer transition-colors">TERMS_OF_DAMNATION</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-bone/30 tracking-widest uppercase">SYSTEM</div>
            <div className="flex flex-col gap-2 text-[10px] font-mono tracking-widest text-bone/60">
              <span>VER: 0.7.7-BETA</span>
              <span>STATUS: DEGRADING</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-bone/30 tracking-widest uppercase">CONTACT</div>
            <div className="flex flex-col gap-2 text-[10px] font-mono tracking-widest text-bone/60">
              <span className="hover:text-blood cursor-pointer transition-colors">VOID@SEVENTHSEED.XYZ</span>
            </div>
          </div>
        </div>

        <div className="pt-12 text-[8px] md:text-[10px] font-mono text-bone/20 tracking-[0.5em] uppercase">
          © 2026 SEVENTH SEED. ALL RIGHTS RESERVED IN THE LEDGER.
        </div>
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
    <main ref={scrollContainerRef} className="relative bg-ink text-bone selection:bg-blood selection:text-white overflow-x-hidden">
      <SystemLayer depth={depth} faithLevel={faithLevel} />
      <Navbar />
      <div className="relative z-10">
        <Hero onEnter={scrollToGenesis} />
        
        <Genesis />
        <Tabernacle />
        <Offering />
        <Tithe />
        <Testament />
        <Congregation />
        <ApocryphalTexts />
        <Footer />
      </div>

      <MysteriousBackgroundImages />
      
      {/* Global Effects Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <div className="grain absolute inset-0 opacity-[0.03]" />
        <div className="scanlines absolute inset-0 opacity-[0.02]" />
        <div className="vignette absolute inset-0" />
      </div>
    </main>
  );
}
