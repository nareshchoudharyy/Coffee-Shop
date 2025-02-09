import Container from "@/components/Container";

export default function LocationInfo() {
  return (
    <Container className="py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#FAF9F6] p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-light text-[#2A2826] mb-6">Our Location</h2>
          <div className="space-y-4 text-[#4A4845]">
            <p>123 Coffee Street</p>
            <p>New York, NY 10001</p>
            <p>Tel: (555) 123-4567</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-light text-[#2A2826] mb-4">Hours</h3>
            <div className="space-y-2 text-[#4A4845]">
              <p>Monday - Friday: 7am - 8pm</p>
              <p>Saturday: 8am - 9pm</p>
              <p>Sunday: 8am - 7pm</p>
            </div>
          </div>
        </div>
        <div className="bg-[#E5E2DD] h-[400px] rounded-lg flex items-center justify-center text-[#4A4845]">
          Map placeholder
        </div>
      </div>
    </Container>
  );
} 