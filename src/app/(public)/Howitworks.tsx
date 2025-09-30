// components/HowItWorks.tsx
export function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 capitalize text-gray-900 dark:text-gray-100">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md hover:shadow-blue-800/30 cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4 font-bold">1.</div>
            <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Post a Project or Job
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Describe your PLC/HMI/SCADA needs.
            </p>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md hover:shadow-blue-800/30 cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4 font-bold">2.</div>
            <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Match with Experts
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse engineers with the right certifications.
            </p>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md hover:shadow-blue-800/30 cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4 font-bold">3.</div>
            <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Collaborate Securely
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Share drawings, code, and project docs safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
