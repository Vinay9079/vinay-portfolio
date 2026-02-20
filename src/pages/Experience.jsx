import { motion } from "framer-motion";

const Experience = () => {
  const jobs = [
    { comp: "Learn and Build", role: "Python Developer Intern", date: "2025 - Present", desc: "Working on advanced Python modules and AI integration." },
    { comp: "Lit-Amor", role: "HR Manager Intern", date: "2025", desc: "Managed team dynamics and operational workflows." },
    { comp: "Learn and Build", role: "Python Language Intern", date: "June - July 2025", desc: "Core Python development and logic building." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 px-10 text-white">
      <h2 className="text-5xl font-bold mb-12 text-center font-sora">
        Professional <span className="text-[#7000ff]">Journey</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {jobs.map((job, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00f2ff] transition-all backdrop-blur-lg"
          >
            <span className="text-[#00f2ff] font-mono text-sm">{job.date}</span>
            <h3 className="text-2xl font-bold mt-2 font-sora">{job.role}</h3>
            <p className="text-[#7000ff] mb-4">{job.comp}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;