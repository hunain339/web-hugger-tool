import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/xdawddon", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Got an idea, a project, or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <div className="rounded-xl bg-card border border-border p-5 flex items-center gap-4 hover:shadow-glow hover:border-primary/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
              <Mail size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm font-medium text-foreground">
                hunainakramhussain12345@gmail.com
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-card border border-border p-5 flex items-center gap-4 hover:shadow-glow hover:border-primary/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Location</p>
              <p className="text-sm font-medium text-foreground">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="rounded-xl bg-card border border-border p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition disabled:opacity-50"
            />
          </div>

          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none disabled:opacity-50"
          />

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <CheckCircle size={16} />
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {status === "error" && errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm font-medium text-destructive"
            >
              <AlertCircle size={16} />
              {errorMsg}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
