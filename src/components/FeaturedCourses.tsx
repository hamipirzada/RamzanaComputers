import React, { useState } from 'react';
import { Monitor, FileText, Zap, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  tag: string;
  shortDescription: string;
  detailedDescription: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  features: string[];
}

const FeaturedCourses: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const courses: Course[] = [
    {
      id: 'data-entry',
      title: 'Certified Data Entry & Office Assistant',
      tag: 'Up‑skilling Program',
      shortDescription: 'Master data entry and office software for professional success',
      detailedDescription: 'Comprehensive training in data entry, MS Office Suite, email management, and office administration. Perfect for those seeking immediate employment opportunities in the administrative sector.',
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      duration: '3 Months',
      level: 'Beginner to Intermediate',
      features: ['MS Office Suite', 'Data Entry Techniques', 'Email Management', 'Office Administration']
    },
    {
      id: 'computer-application',
      title: 'Certified Computer Application, Accounting & Publishing Assistant',
      tag: 'Professional Certification',
      shortDescription: 'Advanced computer applications with accounting and publishing skills',
      detailedDescription: 'In-depth training covering computer applications, accounting software, desktop publishing, and business communication. Ideal for aspiring professionals in accounting and publishing fields.',
      icon: <Monitor className="h-8 w-8 text-teal-500" />,
      duration: '6 Months',
      level: 'Intermediate to Advanced',
      features: ['Accounting Software', 'Desktop Publishing', 'Business Communication', 'Advanced Excel']
    },
    {
      id: 'solar-led',
      title: 'Product Assembly Assistant (Solar‑LED)',
      tag: 'Technical Certification',
      shortDescription: 'Hands-on technical training in solar-LED product assembly',
      detailedDescription: 'Practical training in solar technology and LED product assembly. Learn to assemble, test, and troubleshoot solar-LED products with industry-standard techniques and safety protocols.',
      icon: <Zap className="h-8 w-8 text-teal-500" />,
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      features: ['Solar Technology', 'LED Assembly', 'Quality Testing', 'Safety Protocols']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive courses designed to boost your career prospects
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-8">
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>

                {/* Title & Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-600 bg-teal-100 rounded-full mb-3">
                    {course.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-200">
                    {course.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 min-h-[3rem]">
                  {hoveredCard === course.id ? course.detailedDescription : course.shortDescription}
                </p>

                {/* Course Details */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Features (shown on hover) */}
                {hoveredCard === course.id && (
                  <div className="mb-6 animate-fade-in">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <Link
                  to="/courses"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-navy-500 hover:from-teal-600 hover:to-navy-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>View All Courses</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;