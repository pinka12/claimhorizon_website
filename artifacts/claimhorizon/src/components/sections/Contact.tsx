import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Web3Forms required fields
    formData.append("access_key", "YOUR_WEB3FORMS_KEY"); // User will replace this
    formData.append("subject", "New ClaimHorizon Inquiry");
    formData.append("from_name", "ClaimHorizon Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
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
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Partner with Intelligence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how ClaimHorizon can transform your underwriting process, reduce operational costs, and fortify your portfolio against fraud.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                <p className="text-muted-foreground text-sm">Fintech Valley, Level 4<br/>Innovation District</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Direct Contact</h4>
                <p className="text-muted-foreground text-sm">enterprise@claimhorizon.com<br/>+1 (800) 555-0199</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border/50 rounded-xl p-8 shadow-xl relative"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                <p className="text-muted-foreground mb-6">Thank you for your interest in ClaimHorizon. An enterprise specialist will contact you within 24 hours.</p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Doe" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" required placeholder="Acme Insurance" className="bg-background" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@acme.com" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Insurance Company Type</Label>
                  <RadioGroup defaultValue="motor" name="company_type" className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center space-x-2 border border-border/50 bg-background rounded-md px-4 py-3 flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="motor" id="type-motor" />
                      <Label htmlFor="type-motor" className="cursor-pointer">Motor</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border/50 bg-background rounded-md px-4 py-3 flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="health" id="type-health" />
                      <Label htmlFor="type-health" className="cursor-pointer">Health</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border/50 bg-background rounded-md px-4 py-3 flex-1 cursor-pointer hover:border-primary/50 transition-colors">
                      <RadioGroupItem value="general" id="type-general" />
                      <Label htmlFor="type-general" className="cursor-pointer">General</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Query</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Tell us about your current inspection volume and challenges..."
                    className="min-h-[120px] bg-background resize-none"
                  />
                </div>

                {/* Honeypot to prevent spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
