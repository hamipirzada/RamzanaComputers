import React, { useState } from 'react';
import { Monitor, FileText, Zap, Award, Clock, Users } from 'lucide-react';

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

const Courses: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive courses designed to boost your career prospects
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                expandedCard === course.id ? 'ring-2 ring-teal-500 scale-105' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === course.id ? null : course.id)}
            >
              <div className="p-8">
                {/* Icon */}
                <div className="mb-6">{course.icon}</div>

                {/* Title & Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-600 bg-teal-100 rounded-full mb-3">
                    {course.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {course.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {expandedCard === course.id ? course.detailedDescription : course.shortDescription}
                </p>

                {/* Expanded Content */}
                {expandedCard === course.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    <div>
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
                  </div>
                )}

                {/* CTA */}
                <button className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                  {expandedCard === course.id ? 'Enroll Now' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Government Certifications */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-12 w-12 text-teal-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Government-Recognized Certifications
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Also offering comprehensive certification programs recognized by government authorities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['ACC', 'BCC', 'CCC', 'CCC+', 'ECC'].map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-white text-teal-600 font-semibold rounded-lg shadow-md"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;