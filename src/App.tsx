import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { X, ChevronDown, Award, Sun, Users, BookOpen, Globe, HeartHandshake, ChevronUp } from 'lucide-react';
import meditatingImage from './assets/meditating.png';

// Main App component
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Mindcare Kids?",
      answer: "Mindcare Kids offers a wide range of content, including guided meditations, calming stories, and interactive activities, to help children develop emotional resilience and mindfulness skills.",
    },
    {
      question: "Is the app safe for my child?",
      answer: "Yes, the app is designed with a child-safe environment, free from ads and inappropriate content. All content is carefully curated and reviewed by child development experts.",
    },
    {
      question: "What age groups is Mindcare Kids for?",
      answer: "Our content is tailored for children aged 4-14, with specific programs designed to meet the developmental needs of different age groups.",
    },
    {
      question: "Can I use it on multiple devices?",
      answer: "Yes, your Mindcare Kids subscription allows you to access the app on multiple devices, including smartphones and tablets, so you can enjoy it on the go.",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      <div className="relative overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">
              <span className="text-pink-500">Mindery</span> Kids
            </div>
            <div className="hidden md:flex space-x-6">
              {['Home', 'Programs', 'Pricing', 'About Us', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-pink-500 transition duration-300">
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={toggleModal}
              className="bg-purple-600 text-white font-medium py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-pink-100 to-purple-100">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Mindfulness & Meditation for <span className="text-pink-500">Kids</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
                A simple and fun program for kids (4-14) to begin their mindfulness journey and learn emotional resilience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={toggleModal}
                  className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-xl"
                >
                  Start Free Trial
                </button>
                <a href="#" className="text-purple-600 font-bold py-3 px-8 rounded-full border-2 border-purple-600 hover:bg-purple-100 transition duration-300 transform hover:scale-105">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={meditatingImage} alt="Kids meditating" className="max-w-full h-auto rounded-full shadow-2xl transition-transform duration-500 transform hover:scale-105" />
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">Why Mindery Kids?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={<Award size={36} className="text-blue-500" />} title="Expert-Led Content" description="All content is created with child psychologists and meditation experts to ensure effectiveness and safety." />
              <FeatureCard icon={<Sun size={36} className="text-yellow-500" />} title="Fun & Engaging" description="Our sessions are designed to be playful and fun, using animated stories and games to hold kids' attention." />
              <FeatureCard icon={<Users size={36} className="text-green-500" />} title="For the Whole Family" description="We provide resources and guidance for parents to practice mindfulness alongside their children." />
              <FeatureCard icon={<BookOpen size={36} className="text-indigo-500" />} title="Personalized Journey" description="The app learns and adapts to your child’s progress, suggesting new activities and challenges." />
              <FeatureCard icon={<Globe size={36} className="text-teal-500" />} title="Global Community" description="Join a vibrant community of parents and children from around the world on their mindfulness journey." />
              <FeatureCard icon={<HeartHandshake size={36} className="text-pink-500" />} title="Emotional Resilience" description="Equip your child with tools to manage emotions, reduce stress, and build self-confidence." />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">What Our Families Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard name="Sarah P." quote="Mindcare has been a game-changer for my son. He is calmer and more focused now. Thank you!" />
              <TestimonialCard name="Michael R." quote="I love how simple and effective the meditations are. My daughter asks to use the app every day." />
              <TestimonialCard name="Jessica L." quote="The guided stories are magical. It's the perfect way to wind down before bedtime. Highly recommend!" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <span className="transition-transform duration-300">
                      {activeFaq === index ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="mt-2 text-gray-600 transition-opacity duration-500 ease-in-out opacity-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="text-xl font-bold mb-4">
              <span className="text-pink-500">Mindery</span> Kids
            </div>
            <div className="flex justify-center space-x-6 mb-4">
              {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">
                  {item}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mindery Kids. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={toggleModal} />

      </div>
    </div>
  );
}

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted!");
    // This is a placeholder for form submission.
    // In a real application, you would handle data here, e.g., send it to a backend.
    onClose();
    alert("Thank you for your interest! Your form has been submitted.");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-lg relative transform transition-all duration-300 scale-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors">
          <X size={24} />
        </button>
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Start Your Free Trial</h3>
          <p className="text-gray-600">Fill out the form below and we'll be in touch!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-4">
            <InputField label="Name" type="text" className="text-white bg-gray-800" placeholder="Your Name" />
            <InputField label="Email" type="email" className="text-white bg-gray-800" placeholder="Your Email" />
            <InputField label="Phone Number" type="tel" className="text-white bg-gray-800" placeholder="Your Phone Number" />
            <InputField label="Class" type="text" className="text-white bg-gray-800" placeholder="e.g. 5th Grade" />
            <div className="relative">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-white bg-gray-800" placeholder="Your Message"></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-purple-600 text-white font-bold py-3 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable Input Field Component
interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}

const InputField = ({ label, type, placeholder, className }: InputFieldProps) => (
  <div className="relative">
    <label htmlFor={label} className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      id={label}
      placeholder={placeholder}
      className={`w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${className}`}
      required
    />
  </div>
);

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="flex justify-center items-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Testimonial Card Component
interface TestimonialCardProps {
  name: string;
  quote: string;
}

const TestimonialCard = ({ name, quote }: TestimonialCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <div className="flex items-center justify-center mb-4">
      <img src="https://placehold.co/64x64/E5E7EB/6B7280?text=User" alt={name} className="w-16 h-16 rounded-full" />
    </div>
    <p className="text-gray-600 mb-4 italic text-center">"{quote}"</p>
    <p className="text-gray-800 font-semibold text-center">- {name}</p>
  </div>
);

// Mount the App to the DOM
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App