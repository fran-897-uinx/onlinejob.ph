// components/Testimonial.tsx
export function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-600 dark:text-gray-100">
          What people are saying
        </h2>
        <div className="flex justify-center items-center mb-18">
          <span className="border-2 border-green-400 w-16"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              “PLC Hire connected us with a Siemens programmer for a water
              treatment project — seamless onboarding.”
            </p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">Employer</h4>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "I found consistent contract work with top integrators through PLC
              Hire.”
            </p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">Automation Engineer</h4>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "We scaled our controls team quickly during a large commissioning
              project thanks to PLC Hire's talent pool.”
            </p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">System Integrator</h4>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "Finding UL508A panel builders used to be a bottleneck — PLC Hire
              made the process effortless.”
            </p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">Panel Shop Owner</h4>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              "I was placed on a robotics commissioning project within a week. The opportunities keep coming.”
            </p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">Commissioning Engineer</h4>
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="border border-blue-800 text-blue-900 dark:text-blue-300 transition uppercase rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer p-3.5 px-12 font-bold">
            SEE MORE REAL RESULT
          </button>
        </div>
      </div>
    </section>
  );
}
