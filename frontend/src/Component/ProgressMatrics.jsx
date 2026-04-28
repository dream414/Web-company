// src/components/ProgressMetrics.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: 6, label: "Years in Experience", max: 100 },
  { value: 50, label: "Clients Worldwide", max: 100 },
  { value: 97, label: "Completed Projects", max: 100 },
];

export default function ProgressMetrics() {
  const [progress, setProgress] = useState(metrics.map(() => 0));

  useEffect(() => {
    setTimeout(() => {
      setProgress(metrics.map((m) => m.value));
    }, 300);
  }, []);

  return (
  <section className="p-5 bg-black">
      <div className="max-w-5xl mx-auto space-y-12 px-6 relative bg-black">
         <div className="absolute inset-0 bg-green-600/20 rounded-full blur-3xl"></div>

        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            className="relative p-4 rounded-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >

            {/* Ranking Number + Label */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl font-extrabold text-green-400 w-12">
                {idx + 1}.
              </div>

              <motion.h3
                className="text-lg font-semibold text-gray-200"
                whileHover={{ scale: 1.05, color: "#22c55e" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {metric.label}
              </motion.h3>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">

              {/* Progress Fill (No Shadow) */}
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${(progress[idx] / metric.max) * 100}%`,
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                  delay: idx * 0.2,
                }}
              />
            </div>

            {/* Numeric Value */}
            <div className="mt-2 text-right text-gray-400 text-sm">
              {metric.value} / {metric.max}
            </div>
          </motion.div>
        ))}

      </div>
</section>
  );
}
