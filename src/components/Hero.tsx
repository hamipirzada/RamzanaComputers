import React from 'react';
import { ChevronDown, BookOpen, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Career with{' '}
            <span className="text-teal-400">Professional Training</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Master essential computer skills and earn government-recognized certifications 
            at Ramzana Computers in Jammu & Kashmir
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <BookOpen className="h-8 w-8 text-teal-400 mb-2" />
              <span className="text-2xl font-bold">3+</span>
              <span className="text-gray-300">Professional Courses</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-teal-400 mb-2" />
              <span className="text-2xl font-bold">5+</span>
              <span className="text-gray-300">Certifications</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-teal-400 mb-2" />
              <span className="text-2xl font-bold">100%</span>
              <span className="text-gray-300">Job Ready</span>
            </div>
          </div>

          <button
            onClick={scrollToCourses}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;