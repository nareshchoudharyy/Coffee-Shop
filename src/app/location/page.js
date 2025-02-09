import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import LocationInfo from "@/components/LocationInfo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function Location() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F5F3EF]">
        <PageHeader 
          title="Visit Us"
          subtitle="Find your way to great coffee"
          image="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg"
        />
        <Container className="py-16">
          <LocationInfo />
        </Container>
      </main>
      <Footer />
    </>
  );
} 