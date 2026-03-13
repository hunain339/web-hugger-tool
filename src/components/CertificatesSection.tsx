import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award } from "lucide-react";
import alphaorbit from "@/assets/alphaorbit.jpeg";
import certificate1 from "@/assets/certificate1.png";
import certificate2 from "@/assets/certificate2.png";
import certificate3 from "@/assets/certificate3.png";

const certificates = [
  { src: alphaorbit, title: "Junior Front-End Intern", issuer: "Alpha Orbit", date: "October 2025" },
  { src: certificate1, title: "MS Office 2019 (Crash Programme)", issuer: "Ruby Commercial Centre", date: "July 2023" },
  { src: certificate2, title: "Introduction to Python", issuer: "Sololearn", date: "June 2025" },
  { src: certificate3, title: "Introduction to HTML", issuer: "Sololearn", date: "June 2025" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="rounded-xl bg-card border border-border overflow-hidden hover:shadow-glow hover:border-primary/30 transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Award size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display text-foreground">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={certificates[selected].src}
            alt={certificates[selected].title}
            className="max-w-full max-h-[85vh] rounded-xl shadow-card object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
