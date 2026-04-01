import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";

const GOLD = "#F5C542";
const BLUE_DARK = "#051870";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_KEY");
    formData.append("subject", "New ClaimHorizon Inquiry");
    formData.append("from_name", "ClaimHorizon Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "Message Sent Successfully",
          description: "Our team will be in touch with you shortly.",
        });
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-white">
              Partner with Intelligence
            </h2>
            <p className="text-lg text-white/65 mb-10">
              Discover how ClaimHorizon can transform your underwriting process,
              reduce operational costs, and fortify your portfolio against fraud.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,197,66,0.12)", border: "1px solid rgba(245,197,66,0.25)" }}>
                  <Mail size={18} style={{ color: GOLD }} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <a href="mailto:info@claimhorizon.co.in"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: GOLD }}>
                    info@claimhorizon.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,197,66,0.12)", border: "1px solid rgba(245,197,66,0.25)" }}>
                  <Phone size={18} style={{ color: GOLD }} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Direct Contact</h4>
                  <p className="text-white/60 text-sm">Available Mon–Sat, 9 AM – 6 PM IST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-8 shadow-xl"
            style={{ background: "rgba(13,45,140,0.45)", border: "1px solid rgba(245,197,66,0.2)", backdropFilter: "blur(12px)" }}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 mb-4" style={{ color: GOLD }} />
                <h3 className="text-2xl font-bold mb-2 text-white">Request Received</h3>
                <p className="text-white/60 mb-6">
                  Thank you for your interest in ClaimHorizon. An enterprise specialist
                  will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-md text-sm font-semibold border"
                  style={{ borderColor: "rgba(245,197,66,0.4)", color: GOLD }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/80">Full Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Doe"
                      className="border-white/20 text-white placeholder:text-white/35"
                      style={{ background: "rgba(255,255,255,0.07)" }} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80">Company Name</Label>
                    <Input id="company" name="company" required placeholder="Acme Insurance"
                      className="border-white/20 text-white placeholder:text-white/35"
                      style={{ background: "rgba(255,255,255,0.07)" }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80">Work Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@acme.com"
                      className="border-white/20 text-white placeholder:text-white/35"
                      style={{ background: "rgba(255,255,255,0.07)" }} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+91 99999 00000"
                      className="border-white/20 text-white placeholder:text-white/35"
                      style={{ background: "rgba(255,255,255,0.07)" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/80">Message / Query</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your current inspection volume and challenges..."
                    className="min-h-[130px] resize-none border-white/20 text-white placeholder:text-white/35"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  />
                </div>

                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-bold rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ background: GOLD, color: BLUE_DARK }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      (e.currentTarget as HTMLButtonElement).style.background = BLUE_DARK;
                      (e.currentTarget as HTMLButtonElement).style.color = GOLD;
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 0 2px ${GOLD}`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = GOLD;
                    (e.currentTarget as HTMLButtonElement).style.color = BLUE_DARK;
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
