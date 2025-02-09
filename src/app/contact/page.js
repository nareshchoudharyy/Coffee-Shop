import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function Contact() {
  const contactInfo = [
    { icon: "📞", title: "Phone", info: "(555) 123-4567", link: "tel:+15551234567" },
    { icon: "📧", title: "Email", info: "hello@brewandco.com", link: "mailto:hello@brewandco.com" },
    { 
      icon: "📍", 
      title: "Address", 
      info: "123 Coffee Street, NY 10001",
      // Replace with your actual Google Maps link
      link: "https://www.google.com/maps/search/?api=1&query=Brew+and+Co+123+Coffee+Street+NY+10001"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F5F3EF]">
        <PageHeader 
          title="Contact Us"
          subtitle="Get in touch with us"
          image="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg"
        />
        <Container className="py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-[#FAF9F6] p-8 rounded-lg shadow-sm h-full">
              <h2 className="text-2xl font-light text-[#2A2826] mb-8">Send us a Message</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2A2826] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DD] rounded-lg focus:outline-none focus:border-[#2A2826] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#2A2826] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DD] rounded-lg focus:outline-none focus:border-[#2A2826] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#2A2826] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={7}
                    className="w-full px-4 py-3 bg-white border border-[#E5E2DD] rounded-lg focus:outline-none focus:border-[#2A2826] transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#2A2826] text-white rounded-lg hover:bg-[#33302E] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info Section */}
            <div>
              <div className="bg-[#FAF9F6] p-8 rounded-lg shadow-sm h-full">
                <h2 className="text-2xl font-light text-[#2A2826] mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((item) => (
                    <a 
                      key={item.title}
                      href={item.link}
                      target={item.title === "Address" ? "_blank" : undefined}
                      rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 border-b border-[#E5E2DD] last:border-0 pb-4 last:pb-0 hover:text-[#2A2826] transition-colors group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                      <div>
                        <h3 className="text-[#2A2826] font-medium">{item.title}</h3>
                        <p className="text-[#4A4845] group-hover:text-[#2A2826] transition-colors">{item.info}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Opening Hours */}
                <div className="mt-8 pt-8 border-t border-[#E5E2DD]">
                  <h3 className="text-[#2A2826] font-medium mb-4">Opening Hours</h3>
                  <div className="space-y-2 text-[#4A4845]">
                    <p>Monday - Friday: 7am - 8pm</p>
                    <p>Saturday: 8am - 9pm</p>
                    <p>Sunday: 8am - 7pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
} 