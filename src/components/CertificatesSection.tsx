import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X, Eye } from "lucide-react";
import alphaorbit from "@/assets/alphaorbit.jpeg";
import certificate1 from "@/assets/certificate1.png";
import certificate2 from "@/assets/certificate2.png";
import certificate3 from "@/assets/certificate3.png";

const certificates = [
  { src: alphaorbit, title: "Junior Front-End Intern", issuer: "Alpha Orbit", date: "October 2025" },
  { src: certificate1, title: "MS Office 2019 (Crash Programme)", issuer: "Ruby Commercial Centre", date: "July 2023" },
  { src: certificate2, title: "Python Certificate", issuer: "Sololearn", date: "June 2025" },
  { src: certificate3, title: "Web Development Certificate", issuer: "Sololearn", date: "June 2025" },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            My <span className="text-gradient-primary">Certificates</span>
          </h2>
        </motion.div>

        {/* Flexbox envelope-style cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] rounded-xl bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-glow hover:border-primary/30 hover:-translate-y-1.5 hover:scale-[1.02]"
            >
              {/* Envelope flap accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "linear-gradient(135deg, hsl(168 80% 50% / 0.06), hsl(270 60% 60% / 0.06))",
              }} />

              {/* Card body */}
              <div className="p-6 flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} className="text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold font-display text-foreground mb-1 truncate">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{cert.issuer} · {cert.date}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={14} />
                    Click to view certificate
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              >
                <X size={16} />
              </button>
              <div className="rounded-xl overflow-hidden border border-border shadow-glow bg-card">
                <div className="p-4 border-b border-border">
                  <h3 className="text-sm font-bold font-display text-foreground">{certificates[selected].title}</h3>
                  <p className="text-xs text-muted-foreground">{certificates[selected].issuer} · {certificates[selected].date}</p>
                </div>
                <img
                  src={certificates[selected].src}
                  alt={certificates[selected].title}
                  className="w-full max-h-[70vh] object-contain bg-secondary/30"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
