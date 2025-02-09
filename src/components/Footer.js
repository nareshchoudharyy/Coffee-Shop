import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-warm-beige border-t border-charcoal/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="py-16">
                    {/* Logo and Social Links */}
                    <div className="text-center mb-12">
                        <h3 className="font-display text-2xl text-coffee mb-6">BREW & CO</h3>
                        <div className="flex justify-center gap-8">
                            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                                <Link
                                    key={social}
                                    href="#"
                                    className="text-charcoal/60 hover:text-coffee transition-colors"
                                >
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Essential Links */}
                    <div className="max-w-2xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                            <Link href="/menu" className="text-charcoal/70 hover:text-coffee transition-colors">Menu</Link>
                            <Link href="/about" className="text-charcoal/70 hover:text-coffee transition-colors">About</Link>
                            <Link href="/location" className="text-charcoal/70 hover:text-coffee transition-colors">Location</Link>
                            <Link href="/contact" className="text-charcoal/70 hover:text-coffee transition-colors">Contact</Link>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center space-y-3 text-charcoal/70">
                            <p>123 Coffee Street, New York, NY 10001</p>
                            <p>Mon-Fri: 7am - 8pm  •  Sat-Sun: 8am - 9pm</p>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-charcoal/10 py-6">
                    <div className="text-center text-charcoal/60 text-sm">
                        <p>© 2024 Brew & Co. All rights reserved. Made with ❤️ by 
                            <Link 
                                href="https://github.com/nareshchoudharyy" 
                                className="text-coffee ml-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Naresh Choudhary
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 