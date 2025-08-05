import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const CertificationSection: React.FC = () => {
  const certifications = ['ACC', 'BCC', 'CCC', 'CCC+', 'ECC'];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
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
              Also offering comprehensive certification programs recognized by government authorities. 
              Boost your career with trusted credentials that employers value.
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-r from-teal-500 to-navy-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">{cert}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                  {cert} Certification
                </h3>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Recognized</h3>
              <p className="text-gray-600">Official certifications accepted by government and private sectors</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Advancement</h3>
              <p className="text-gray-600">Enhance your resume and increase job opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Standard</h3>
              <p className="text-gray-600">Widely accepted credentials across various industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;