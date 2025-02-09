export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-[#FAF9F6] p-8 rounded-lg shadow-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#2A2826] mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-white border border-[#E5E2DD] rounded-lg focus:outline-none focus:border-[#2A2826] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#2A2826] mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white border border-[#E5E2DD] rounded-lg focus:outline-none focus:border-[#2A2826] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#2A2826] mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 bg-white border border-[#E5E2DD] rounded-lg focus:outline-none focus:border-[#2A2826] transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#2A2826] text-white rounded-lg hover:bg-[#33302E] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 