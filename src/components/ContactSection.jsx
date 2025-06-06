import {
  Mail, MapPin, Phone, Send,
} from "lucide-react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I’ll get back to you soon...",
      });
      setIsSubmitting(false);
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking to hire a motivated data scientist? I’m actively seeking opportunities 
          where I can contribute, learn, and grow professionally. Feel free to reach out 
          if you're looking for someone who’s passionate about data and ready to take on 
          real-world challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-primary" />,
                  title: "Email",
                  value: "robertvilchis787@gmail.com",
                  link: "mailto:robertvilchis787@gmail.com",
                },
                {
                  icon: <Phone className="h-6 w-6 text-primary" />,
                  title: "Phone",
                  value: "+52 (55) 8169 7312",
                  link: "tel:+525581697312",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                  title: "Location",
                  value: "Mexico City (CDMX), Mexico",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/roberto-atonatiuh-solis-vilchis" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin size={24} className="text-muted-foreground hover:text-primary transition" />
                </a>
                <a href="https://t.me/data_robert" target="_blank" aria-label="Telegram">
                  <FaTelegram size={24} className="text-muted-foreground hover:text-primary transition" />
                </a>
                <a href="https://github.com/Roberto13-Vil" target="_blank" aria-label="GitHub">
                  <FaGithub size={24} className="text-muted-foreground hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/robertvilchis787@gmail.com"
              method="POST"
              className="space-y-6"
              target="_blank"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Example: Roberto Vilchis..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Example: robertvilchis787@gmail.com..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Example: Hello, I’d like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2 transition-transform"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
