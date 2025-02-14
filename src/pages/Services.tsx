import React from "react";
import clinicalcare from "../assets/images/clinicalcare.png";
import foodnutrition from "../assets/images/foodnutrition.png";
import palliativecare from "../assets/images/palliativecare.png";
import psychologicalsupport from "../assets/images/psychologicalsupport.png";
import pediatriccare from "../assets/images/pediatric-care.png";
import hivprevention from "../assets/images/hivprevention.png";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 text-center bg-white dark:bg-gray-800 shadow-xl rounded-xl">
      <h2 className="text-5xl font-extrabold mb-12 text-blue-900 dark:text-blue-300 animate-fadeInDown">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border border-blue-200 rounded-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 animate-fadeInUp">
          <img src={clinicalcare} alt="Clinical and Basic Nursing Care" className="mx-auto mb-4 h-16 w-16" />
          <h3 className="text-2xl font-semibold mb-4">Clinical and Basic Nursing Care</h3>
          <p className="text-gray-700 dark:text-gray-300">Comprehensive, compassionate care provided by skilled nursing professionals.</p>
        </div>
        <div className="p-6 border border-blue-200 rounded-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 animate-fadeInUp delay-100">
          <img src={palliativecare} alt="Palliative Care" className="mx-auto mb-4 h-16 w-16" />
          <h3 className="text-2xl font-semibold mb-4">Palliative, Pain Relief, and Symptom Management</h3>
          <p className="text-gray-700 dark:text-gray-300">Relieving pain and symptoms to improve the quality of life for patients.</p>
        </div>
        <div className="p-6 border border-blue-200 rounded-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 animate-fadeInUp delay-200">
          <img src={psychologicalsupport} alt="Psychological Support" className="mx-auto mb-4 h-16 w-16" />
          <h3 className="text-2xl font-semibold mb-4">Psychological Support and Counseling</h3>
          <p className="text-gray-700 dark:text-gray-300">Professional mental health support for patients and their families.</p>
        </div>
        <div className="p-6 border border-blue-200 rounded-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 animate-fadeInUp delay-300">
          <img src={pediatriccare} alt="Pediatric Care" className="mx-auto mb-4 h-16 w-16" />
          <h3 className="text-2xl font-semibold mb-4">Specialized Pediatric Care</h3>
          <p className="text-gray-700 dark:text-gray-300">Expert care tailored to the needs of children and adolescents.</p>
        </div>
        <div className="p-6 border border-blue-200 rounded-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 animate-fadeInUp delay-400">
          <img src={hivprevention} alt="HIV Prevention" className="mx-auto mb-4 h-16 w-16" />
          <h3 className="text-2xl font-semibold mb-4">Prevention of HIV Transmission</h3>
          <p className="text-gray-700 dark:text-gray-300">Education, testing, and preventive care to reduce HIV transmission.</p>
        </div>
        <div className="p-6 border border-blue-200 rounded-lg hover:shadow-xl transition duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-900 animate-fadeInUp delay-500">
          <img src={foodnutrition} alt="Food and Nutrition" className="mx-auto mb-4 h-16 w-16" />
          <h3 className="text-2xl font-semibold mb-4">Food and Nutrition</h3>
          <p className="text-gray-700 dark:text-gray-300">Nutritional guidance and support for healthier living and recovery.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

