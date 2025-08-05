import React from 'react';
import { Award, Users, Target, CheckCircle, BookOpen, Lightbulb, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Years of Excellence', icon: <Award className="h-8 w-8" /> },
    { number: '500+', label: 'Students Trained', icon: <Users className="h-8 w-8" /> },
    { number: '8+', label: 'Certification Programs', icon: <BookOpen className="h-8 w-8" /> },
    { number: '95%', label: 'Job Placement Rate', icon: <Target className="h-8 w-8" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-12 w-12 text-teal-500" />,
      title: 'Innovation in Learning',
      description: 'We continuously update our curriculum and teaching methods to stay ahead of industry trends and technological advances.'
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: 'Student-Centric Approach',
      description: 'Every student is unique. We provide personalized attention and support to help each individual achieve their career goals.'
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: 'Excellence in Training',
      description: 'Our commitment to quality education ensures that our students receive the best possible training and certification.'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'We begin by understanding your current skill level and career aspirations to create a personalized learning path.'
    },
    {
      step: '02',
      title: 'Hands-on Learning',
      description: 'Our practical approach ensures you gain real-world experience through projects and interactive sessions.'
    },
    {
      step: '03',
      title: 'Certification & Support',
      description: 'Upon completion, receive government-recognized certifications and ongoing career support.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-500 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Ramzana Computers
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Empowering careers through quality computer education and professional training in Jammu & Kashmir since 2018
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ramzana Computers, we are dedicated to transforming lives through quality computer education and professional training. 
                Located in the heart of Baramulla district, we serve as a beacon of digital literacy and skill development for the youth of Jammu & Kashmir.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to bridge the digital divide by providing accessible, affordable, and industry-relevant training programs 
                that prepare our students for successful careers in the modern digital economy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-gray-900">Quality Education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-gray-900">Industry Relevant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-gray-900">Affordable Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="font-medium text-gray-900">Career Support</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3 text-teal-500">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ramzana Computers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Training Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures effective learning and successful career outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-navy-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {method.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500 to-navy-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              <Award className="h-16 w-16" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Government Recognition & Accreditation
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Ramzana Computers is proud to be recognized by government authorities and offers certifications 
              that are widely accepted across various industries and government sectors.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              {['ACC', 'BCC', 'CCC', 'CCC+', 'ECC'].map((cert) => (
                <div key={cert} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">{cert}</div>
                  <div className="text-sm text-gray-200">Certified</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful graduates who have transformed their careers with our professional training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-gradient-to-r from-teal-500 to-navy-500 hover:from-teal-600 hover:to-navy-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;