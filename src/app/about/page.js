import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function About() {
  const milestones = [
    { year: "2023", title: "Grand Opening", description: "Opened our doors in the heart of New York" },
    { year: "2023", title: "Artisan Partnership", description: "Partnered with local artisan roasters" },
    { year: "2024", title: "Community Hub", description: "Became a cherished community gathering spot" }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f5f3ef]">
        <PageHeader 
          title="Our Story"
          subtitle="A journey of passion and dedication"
          image="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg"
        />
        <Container className="py-16">
          {/* Mission Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              At Brew & Co, we believe in creating more than just great coffee. 
              We're crafting experiences, fostering community, and celebrating the 
              art of coffee-making in every cup we serve.
            </p>
          </div>

          {/* Journey Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {/* Journey Card */}
              <div className="bg-white/90 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-display font-medium text-coffee mb-6">Our Journey</h3>
                <div className="space-y-4">
                  <p className="text-charcoal/80 leading-relaxed">
                    Founded in 2023, Brew & Co began with a simple mission: to create a space 
                    where coffee culture meets modern aesthetics. Our journey started with a 
                    passion for exceptional coffee and a vision for creating memorable experiences.
                  </p>
                  <p className="text-charcoal/80 leading-relaxed">
                    Today, we continue to uphold our commitment to quality, sustainability, 
                    and community. Every cup we serve is a testament to our dedication to 
                    the craft of coffee-making.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="flex gap-6 items-start group"
                  >
                    <div className="bg-coffee text-warm-beige px-4 py-2 rounded min-w-[80px] text-center group-hover:bg-gold transition-colors">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="text-coffee font-display font-medium mb-1">{milestone.title}</h4>
                      <p className="text-charcoal/80">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <Image
                  src="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg"
                  alt="Barista"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-warm-beige font-medium">Our skilled baristas at work</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-[200px] rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.pexels.com/photos/240223/pexels-photo-240223.jpeg"
                    alt="Cafe interior"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
                    alt="Coffee preparation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality", description: "We source the finest beans and ingredients" },
              { title: "Community", description: "Creating a welcoming space for everyone" },
              { title: "Sustainability", description: "Committed to eco-friendly practices" }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white/90 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-display font-medium text-coffee mb-3">{value.title}</h3>
                <p className="text-charcoal/80">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
} 