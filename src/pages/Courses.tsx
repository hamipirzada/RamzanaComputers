import React, { useState } from 'react';
import { Monitor, FileText, Zap, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

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
  curriculum: string[];
  price: string;
}

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

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
      features: ['MS Office Suite', 'Data Entry Techniques', 'Email Management', 'Office Administration'],
      curriculum: ['Basic Computer Operations', 'MS Word Advanced', 'MS Excel Mastery', 'Data Entry Speed Training', 'Email & Internet', 'Office Communication'],
      price: 'Contact for Pricing'
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
      features: ['Accounting Software', 'Desktop Publishing', 'Business Communication', 'Advanced Excel'],
      curriculum: ['Advanced Computer Applications', 'Tally ERP 9', 'Adobe PageMaker', 'CorelDRAW Basics', 'Business Communication', 'Financial Accounting'],
      price: 'Contact for Pricing'
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
      features: ['Solar Technology', 'LED Assembly', 'Quality Testing', 'Safety Protocols'],
      curriculum: ['Solar Energy Fundamentals', 'LED Technology', 'Circuit Assembly', 'Quality Control', 'Safety Procedures', 'Troubleshooting'],
      price: 'Contact for Pricing'
    }
  ];

  const certifications = ['ACC', 'BCC', 'CCC', 'CCC+', 'ECC'];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-500 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Training Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Transform your career with our comprehensive training programs designed for success in today's digital world
          </p>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each course is carefully designed to provide practical skills and industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="transform hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-teal-600 bg-teal-100 rounded-full">
                      {course.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {course.shortDescription}
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

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-teal-500">{course.price}</span>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>{selectedCourse === course.id ? 'Hide Details' : 'View Details'}</span>
                      <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${selectedCourse === course.id ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedCourse === course.id && (
                  <div className="bg-gray-50 p-8 border-t animate-fade-in">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Course Description:</h4>
                        <p className="text-gray-600">{course.detailedDescription}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Curriculum:</h4>
                        <ul className="space-y-2">
                          {course.curriculum.map((item, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                              <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">All Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-navy-500 p-4 rounded-full">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government-Recognized Certifications
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Also offering comprehensive certification programs recognized by government authorities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="bg-white border-2 border-teal-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-teal-500 to-navy-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{cert}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{cert} Certification</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;