import Image from "next/image";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function Home() {
  const specialties = [
    { name: "Artisanal Coffee", description: "Sourced from premium beans" },
    { name: "Fresh Pastries", description: "Baked daily in-house" },
    { name: "Cozy Ambiance", description: "Perfect for work or relaxation" },
  ];
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#FAF9F6] overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
              alt="Coffee shop interior"
              fill
              priority
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <Container className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-display text-warm-beige mb-6 animate-fade-in">
                BREW & CO
              </h1>
              <p className="text-xl md:text-2xl text-gold/90 font-light mb-8 animate-fade-in-delay">
                A modern coffee experience
              </p>
              <div className="space-x-4 animate-fade-in-delay-2">
                <Link href="/menu" className="btn-primary">
                  View Menu
                </Link>
                <Link href="/about" className="btn-outline">
                  About Us
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* About Section - Redesigned */}
        <section className="py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-light text-[#2A2826] mb-4">Our Story</h2>
              <p className="text-[#4A4845]">A journey of passion and craftsmanship</p>
            </div>
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Left Image */}
              <div className="md:col-span-5 space-y-4">
                <div className="relative h-[300px] overflow-hidden rounded-lg group">
                  <Image
                    src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg"
                    alt="Cafe ambiance"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg group">
                  <Image
                    src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
                    alt="Coffee preparation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Center Content */}
              <div className="md:col-span-7 space-y-6 px-4 md:px-8">
                <div className="space-y-6">
                  <p className="text-[#4A4845] leading-relaxed">
                    Welcome to Brew & Co, where modern aesthetics meet artisanal coffee. Founded in 2023, 
                    our journey began with a simple vision: to create a space that celebrates the art of 
                    coffee-making while providing a serene escape from the bustling city life.
                  </p>
                  <p className="text-[#4A4845] leading-relaxed">
                    Every cup we serve is a testament to our dedication to quality and craftsmanship. 
                    Our baristas are passionate about their craft, ensuring each beverage is prepared 
                    with precision and care.
                  </p>
                  <div className="grid grid-cols-3 gap-8 py-8">
                    <div className="text-center">
                      <h3 className="text-3xl font-light text-[#2A2826] mb-2">2023</h3>
                      <p className="text-sm text-[#4A4845]">Established</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-light text-[#2A2826] mb-2">15+</h3>
                      <p className="text-sm text-[#4A4845]">Coffee Varieties</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-light text-[#2A2826] mb-2">1000+</h3>
                      <p className="text-sm text-[#4A4845]">Happy Customers</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link 
                      href="/about"
                      className="inline-flex items-center gap-2 text-[#2A2826] border-b border-[#D4D1CC] pb-1 hover:border-[#2A2826] transition-colors group"
                    >
                      Learn more about our journey 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Specialties Section */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg"
              alt="Coffee preparation"
              fill
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <Container className="relative z-10">
            <h2 className="text-3xl font-light text-white text-center mb-16">Our Specialties</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <div 
                  key={specialty.name}
                  className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl mb-2 text-white">{specialty.name}</h3>
                  <p className="text-gray-300">{specialty.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <Container>
            <h2 className="text-3xl font-light text-[#2A2826] text-center mb-16">Cafe Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-64 group overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg"
                  alt="Cafe interior"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative h-64 group overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
                  alt="Coffee preparation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative h-64 group overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg"
                  alt="Coffee beans"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative h-64 group overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg"
                  alt="Pastries"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Menu Highlights with Background Image */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg"
              alt="Cafe ambiance"
              fill
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <Container className="relative z-10">
            <h2 className="text-3xl font-light mb-12 text-center text-white">Menu Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Signature Latte', 'Artisan Pastries', 'Pour Over'].map((item, index) => (
                <div 
                  key={item} 
                  className="p-6 border border-white/20 rounded-lg backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl mb-2 text-white">{item}</h3>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-24 bg-[#FAF9F6]">
          <Container>
            <h2 className="text-3xl font-light text-[#2A2826] text-center mb-16">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "The best coffee I've ever had! The atmosphere is perfect for both work and relaxation.",
                  author: "Sarah M."
                },
                {
                  text: "Amazing pastries and friendly staff. This has become my go-to spot for morning coffee.",
                  author: "John D."
                },
                {
                  text: "A hidden gem! The attention to detail in every cup is remarkable.",
                  author: "Emily R."
                }
              ].map((review, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-[#4A4845] mb-4 italic">"{review.text}"</p>
                  <p className="text-[#2A2826] font-medium">- {review.author}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Location & Contact Section - Redesigned */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg"
              alt="Cafe exterior"
              fill
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-light text-white mb-4">Visit Us</h2>
              <p className="text-[#D4D1CC]">Experience the perfect blend of comfort and craftsmanship</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Location Info */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-xl mb-4">Location</h3>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3">
                        <span>📍</span>
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Brew+and+Co+123+Coffee+Street+NY+10001" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-warm-beige hover:text-white transition-colors"
                        >
                          123 Coffee Street<br />
                          New York, NY 10001
                        </a>
                      </p>
                      <p className="flex items-center gap-3">
                        <span>📞</span>
                        <a 
                          href="tel:+15551234567"
                          className="text-warm-beige hover:text-white transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-4">Hours</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-white">Weekdays</p>
                        <p className="text-warm-beige">7:00 AM - 8:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-white">Weekends</p>
                        <p className="text-warm-beige">8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/location"
                    className="inline-block px-6 py-3 bg-white text-[#2A2826] rounded-lg hover:bg-[#D4D1CC] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg mt-4"
                  >
                    Get Directions →
                  </Link>
                </div>
              </div>

              {/* Map or Image */}
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
                  alt="Cafe atmosphere"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-lg">Join us for a cup of excellence</p>
                    <p className="text-[#D4D1CC] text-sm mt-2">Free WiFi • Outdoor Seating • Pet Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

