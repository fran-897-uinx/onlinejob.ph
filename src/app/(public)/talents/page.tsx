import Link from "next/link";
import {
  Cog,
  CircuitBoard,
  Wrench,
  Factory,
  Cpu,
  Shield,
} from "lucide-react";
import { JSX } from "react";

export default function TalentsPage() {
  // Grouped categories
  const talentCategories: Record<string, string[]> = {
    "Core Automation & Controls": [
      "PLC Programmers (Siemens, Allen-Bradley, Codesys)",
      "HIMI/SCADA Developers (Ignition, Wonderwave, WinCC, iFIX)",
      "Control System Integrtors",
      "DCS Engineers(DeltaV, Honeywell, Yokogawa)",
      "Motion Control Specialists (Servo/Stepper, Robotics)",
      "Robotics Engineers (Fanuc, ABB, KUKA, UR)",
      "Drives & VFD Specialists (Siemens, ABB, Rockwell)",
      "Functional Safety Engineers (ISO 13849, IEC 61508)",
      "Safety System Engineers (SIL, TÜV-certified)",
      "Industrial Networking Specialists (EtherNet/IP, Profinet, Modbus, OPC-UA)",
    ],
    "Electrical & Panel Design": [
      "UL508A Panel Builders",
      "Electrical Designers (AutoCAD Electrical, EPLAN, SolidWorks Electrical)",
      "Switchgear Designers",
      "Power Distribution Engineers",
      "Low Voltage Controls Designers",
      "Electrical/Controls Project Managers",
      "Wiring Technicians",
      "CAD Drafters (Automation/Electrical)",
    ],
    "Commissioning & Field Roles": [
      "Commissioning Engineers",
      "Site Automation Engineers",
      "Instrumentation & Field Technicians",
      "Calibration Technicians",
      "Field Service Engineers",
      "Startup & Testing Engineers",
      "Maintenance Automation Technicians",
    ],
    "Industry-Specific Automation": [
      "Validation Engineers (Pharma/FDA/ISO)",
      "Process Control Engineers (Batch Systems, Continuous)",
      "Building Automation Engineers (BACnet, KNX, Modbus)",
      "Water/Wastewater Automation Specialists",
      "Oil & Gas Automation Engineers",
      "Food & Beverage Automation Specialists",
      "Automotive Controls Engineers",
      "Packaging Machine Automation Specialists",
      "Material Handling/Conveyor Controls Engineers",
    ],
    "Software, Data & IIoT": [
      "MES Developers (Manufacturing Execution Systems)",
      "Data Integration Engineers (OPC-UA, MQTT, REST APIs)",
      "Systems Architects (IIoT, Industry 4.0, Digital Twins",
      "Automation QA/Test Engineers",
      "Embedded Systems Developers",
      "Industrial IT Specialists (OT/IT convergence)",
      "Edge Computing Specialists",
      "Cloud Integration Engineers (Azure IoT, AWS IoT)",
      "AI/ML for Automation Engineers",
    ],
    "Emerging & Specialized Skills": [
      "Cybersecurity Specialists (OT/ICS Security, ISA/IEC 62443)",
      "Digital Twin Developers",
      "Additive Manufacturing/3D Printing Automation Engineers",
      "Vision System Engineers (Cognex, Keyence, Banner)",
      "RFID & Barcode System Integrators",
      "Wireless Industrial Networking Engineers",
      "Energy Management System Engineers",
      "Smart Grid Automation Specialists",
    ],
  };

  // Category icons map
  const categoryIcons: Record<string, JSX.Element> = {
    "Core Automation & Controls": (
      <Cog className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    ),
    "Electrical & Panel Design": (
      <CircuitBoard className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
    ),
    "Commissioning & Field Roles": (
      <Wrench className="w-6 h-6 text-green-600 dark:text-green-400" />
    ),
    "Industry-Specific Automation": (
      <Factory className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    ),
    "Software, Data & IIoT": (
      <Cpu className="w-6 h-6 text-pink-600 dark:text-pink-400" />
    ),
    "Emerging & Specialized Skills": (
      <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
    ),
  };

  const toSlug = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-16 tracking-tight">
          Explore <span className="text-blue-700 dark:text-blue-400">Automation Talents</span>
        </h1>

        {/* Loop through categories */}
        {Object.entries(talentCategories).map(([category, talents]) => (
          <div
            key={category}
            className="mb-16 border-b border-gray-200 dark:border-gray-700 pb-10"
          >
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-6 flex items-center gap-3">
              {categoryIcons[category]}
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {talents.map((talent, idx) => (
                <Link
                  key={idx}
                  href={`/talent/${toSlug(talent)}`}
                  className="block px-5 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition transform duration-300 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-700 dark:hover:text-blue-400"
                >
                  {talent}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
