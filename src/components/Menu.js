import Image from "next/image";
import Container from "@/components/Container";

export default function Menu() {
  const menuCategories = [
    {
      title: "Signature Coffee",
      items: [
        { name: "House Blend Latte", price: "$4.50", image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" },
        { name: "Caramel Macchiato", price: "$5.00", image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" },
        { name: "Vanilla Bean Latte", price: "$4.75", image: "https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg" },
      ]
    },
    {
      title: "Classic Coffee",
      items: [
        { name: "Espresso", price: "$3.00", image: "https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg" },
        { name: "Americano", price: "$3.50", image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" },
        { name: "Pour Over", price: "$4.00", image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" },
        { name: "Cold Brew", price: "$4.50", image: "https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg" },
      ]
    },
    {
      title: "Pastries",
      items: [
        { name: "Butter Croissant", price: "$3.50", image: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" },
        { name: "Almond Danish", price: "$3.75", image: "https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg" },
        { name: "Pain au Chocolat", price: "$4.00", image: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" },
      ]
    },
    {
      title: "Light Bites",
      items: [
        { name: "Avocado Toast", price: "$8.50", image: "https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg" },
        { name: "Granola Bowl", price: "$7.50", image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" },
        { name: "Breakfast Sandwich", price: "$9.00", image: "https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg" },
      ]
    },
    {
      title: "Cold Drinks",
      items: [
        { name: "Iced Matcha Latte", price: "$5.00", image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg" },
        { name: "Fresh Lemonade", price: "$4.00", image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" },
        { name: "Fruit Smoothie", price: "$6.00", image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg" },
      ]
    },
    {
      title: "Tea Selection",
      items: [
        { name: "Earl Grey", price: "$3.50", image: "https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg" },
        { name: "Green Tea", price: "$3.50", image: "https://images.pexels.com/photos/240223/pexels-photo-240223.jpeg" },
        { name: "Chamomile", price: "$3.50", image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg" },
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu", price: "$6.50", image: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" },
        { name: "Cheesecake", price: "$6.00", image: "https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg" },
        { name: "Chocolate Cake", price: "$6.00", image: "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" },
      ]
    }
  ];

  return (
    <Container className="py-16">
      {menuCategories.map((category, index) => (
        <div key={category.title} className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-light text-[#2A2826]">{category.title}</h2>
            <div className="ml-4 h-[1px] flex-grow bg-[#D4D1CC]"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <div 
                key={item.name}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-[#FAF9F6]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[#2A2826] font-medium">{item.name}</h3>
                    <span className="text-[#4A4845] font-light">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
} 