"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Kabasha Rutigunga Alphonse",
    title: "Managing Director",
    bio: "15+ years of experience in financial consulting and business strategy.",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Bernard Nyakenywa Obiri",
    title: "Managing Partner",
    bio: "Certified Public Accountant with expertise in regulatory compliance and auditing.",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Mutesi Cecily",
    title: "Audit Manager",
    bio: "Specialist in audit management and financial compliance.",
    image: "/professional-woman-executive-headshot.png",
  },
  {
    name: "Ringuyeneza Fidele",
    title: "Audit Manager",
    bio: "Expert in audit operations and compliance verification.",
    image: "/professional-woman-headshot-2.png",
  },
  {
    name: "Zaninka Magali",
    title: "Human Resource Manager",
    bio: "Experienced in human resource management and team development.",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Nasingizwe Elise",
    title: "Accountant",
    bio: "Skilled in accounting operations and financial record management.",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Kampire Desange",
    title: "Auditor",
    bio: "Dedicated auditor with strong attention to detail and compliance expertise.",
    image: "/professional-woman-executive-headshot.png",
  },
]

export function OurTeam() {
  return (
    <section id="our-team" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals who deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.title}</p>
                {/* <p className="text-sm text-muted-foreground">{member.bio}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
