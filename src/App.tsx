import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Building2, 
  TruckIcon, 
  Star, 
  Clock, 
  Shield, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "VK Service har gjort ett fantastiskt jobb med vår kontorsstädning. Professionella och pålitliga!",
      author: "Maria Andersson",
      company: "Tech AB"
    },
    {
      text: "Bästa flyttstädningen vi kunde önskat oss. Grundlig och noggrann service!",
      author: "Johan Nilsson",
      role: "Privatperson"
    },
    {
      text: "Regelbunden hemstädning som verkligen gör skillnad. Rekommenderas varmt!",
      author: "Anna Lindberg",
      role: "Privatperson"
    }
  ];

  const navItems = [
    { href: "#tjanster", label: "Tjänster" },
    { href: "#om-oss", label: "Om oss" },
    { href: "#priser", label: "Priser" },
    { href: "#kontakt", label: "Kontakt" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <img 
                src="https://vkservice.se/wp-content/uploads/2023/12/cropped-vkservice-logo.png" 
                alt="VK Service" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium tracking-wide transition-all duration-200
                    ${isScrolled 
                      ? 'text-gray-800 hover:text-[#9b2f2f]' 
                      : 'text-white hover:text-white/80'
                    }
                    relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                    after:h-[2px] after:w-0 after:bg-current after:transition-all
                    hover:after:w-full`}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className={`
                  px-6 py-2.5 rounded-full text-base font-medium
                  transition-all duration-300 transform hover:scale-105
                  ${isScrolled
                    ? 'bg-[#9b2f2f] text-white hover:bg-[#7a2424] shadow-md'
                    : 'bg-white text-[#9b2f2f] hover:bg-white/90'
                  }
                `}
              >
                Boka städning
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`
              md:hidden absolute left-0 right-0 top-full bg-white shadow-lg
              transition-all duration-300 transform
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-base font-medium text-gray-800 hover:text-[#9b2f2f] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full bg-[#9b2f2f] text-white px-6 py-2.5 rounded-full hover:bg-[#7a2424] 
                  transition-all transform hover:scale-105 shadow-md text-base font-medium mt-4"
              >
                Boka städning
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Rent och fräscht hem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light text-white mb-6">
              Professionell städservice i <span className="font-semibold">Värnamo</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Vi skapar rena och trivsamma miljöer för hem och företag. 
              Kvalitet, pålitlighet och kundens trygghet är våra ledord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#9b2f2f] text-white px-8 py-4 rounded-full text-lg hover:bg-[#7a2424] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group">
                Boka städning
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg hover:bg-gray-50 transition-all shadow-lg">
                Se våra priser
              </button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: <Shield className="w-6 h-6" />, text: "Försäkrade städare" },
                { icon: <Star className="w-6 h-6" />, text: "100% nöjd-kund-garanti" },
                { icon: <Clock className="w-6 h-6" />, text: "Snabb service" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-white">{feature.icon}</div>
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="tjanster" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Våra <span className="font-semibold">Tjänster</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder skräddarsydda städlösningar för alla behov
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Hemstädning",
                description: "Regelbunden eller engångsstädning för ett skinande rent hem",
                features: ["Dammsugning & moppning", "Dammtorkning", "Kök & badrum", "Fönsterputs"]
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Företagsstädning",
                description: "Professionell städning för kontor och verksamheter",
                features: ["Kontorsytor", "Konferensrum", "Personalutrymmen", "Entréer"]
              },
              {
                icon: <TruckIcon className="w-8 h-8" />,
                title: "Flyttstädning",
                description: "Grundlig städning när du flyttar in eller ut",
                features: ["Alla ytor", "Vitvaror", "Fönster", "Besiktningsgaranti"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="inline-block p-4 bg-[#9b2f2f]/10 rounded-2xl text-[#9b2f2f] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#9b2f2f] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-full hover:border-[#9b2f2f] hover:text-[#9b2f2f] transition-colors">
                  Läs mer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Vad våra <span className="font-semibold">kunder säger</span>
            </h2>
          </div>
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
                  <div className="flex items-start mb-6">
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  </div>
                  <p className="text-gray-700 text-lg mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company || testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeTestimonial ? 'bg-[#9b2f2f] w-8' : 'bg-gray-300'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Kontakta <span className="font-semibold">oss</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Vi finns här för att hjälpa dig med alla dina städbehov. 
                Kontakta oss för en kostnadsfri offert.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#9b2f2f] mr-4" />
                  <span className="text-gray-700">070-123 45 67</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#9b2f2f] mr-4" />
                  <span className="text-gray-700">info@vkservice.se</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#9b2f2f] mr-4" />
                  <span className="text-gray-700">Värnamo, Sverige</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Namn</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#9b2f2f] focus:ring focus:ring-[#9b2f2f]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#9b2f2f] focus:ring focus:ring-[#9b2f2f]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-[#9b2f2f] focus:ring focus:ring-[#9b2f2f]/20"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#9b2f2f] text-white px-6 py-3 rounded-full hover:bg-[#7a2424] transition-all transform hover:scale-105 shadow-lg"
                >
                  Skicka meddelande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <img 
                src="https://vkservice.se/wp-content/uploads/2023/12/cropped-vkservice-logo.png"
                alt="VK Service"
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 max-w-md">
                VK Service är din pålitliga partner för professionell städning i Värnamo. 
                Vi levererar kvalitet och service som överträffar dina förväntningar.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Hemstädning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Företagsstädning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Flyttstädning</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 VK Service. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;