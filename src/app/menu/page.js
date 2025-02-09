import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import MenuComponent from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Menu() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F5F3EF]">
        <PageHeader 
          title="Our Menu"
          subtitle="Crafted with passion, served with pride"
          image="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
        />
        <MenuComponent />
      </main>
      <Footer />
    </>
  );
} 