import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
//import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "FPV Drone Simulator",
    discipline: "November 2026",
    description:
      "The FPV Drone Simulator project showcases advanced development using Unity and C#, offering pilots a risk-free training environment by simulating realistic flight through adapted Betaflight PID control and RC rate algorithms integrated into a custom quadrotor physics model. This innovative solution exemplifies the portfolio’s commitment to code-driven creativity and practical, high-fidelity simulation technology.",
    color: "#d9ddc8",
    image: "/FPVDroneSimulator.png",
  },
  {
    number: "02",
    title: "Drone Club One",
    discipline: "May 2026",
    description:
      "The Drone Club One project is a professionally designed and developed website built with Next.js and Supabase to seamlessly organize and host drone racing events. Featuring a PostgreSQL database integration for persistent race results and historical leaderboards, the platform is efficiently deployed on Vercel for reliable public access.",
    color: "#d5c7b5",
    image: "/DroneClubOne.png",
  },
  {
    number: "03",
    title: "ContextReader",
    discipline: "January 2026",
    description:
      "ContextReader is an EPUB reader mobile app developed using Kotlin and Android Studio as a midterm project at Full Sail University, designed to enhance reading with seamless integration of Google search and DeepL translation APIs for in-app research and translation without disrupting the user experience. This project exemplifies a commitment to innovative, user-focused solutions that bridge technology and accessibility in digital reading.",
    color: "#c5d4d0",
    image: "/ContextReader.png",
  },
  {
    number: "04",
    title: "Moogle",
    discipline: "July 2024",
    description:
      "Moogle is a robust search engine developed in C# and .NET that leverages the Vector Space Model to efficiently retrieve and rank documents by relevance. Featuring TF-IDF weighting, cosine similarity for precise relevance scoring, and a user-friendly web interface built with Razor, HTML, and CSS, this project highlights my interest in creating powerful search solutions.",
    color: "#d9c1bb",
    image: "/Moogle.png",
  },
];

export default function Home() {
  //const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <>
      <section className="mx-auto px-32 pb-20 pt-16">
        <div className="mb-12 flex items-center justify-between border-b border-[#17221b]/15 pb-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d45532]">
            About me
          </p>
          <ArrowDownRight size={20} strokeWidth={1.6} />
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-20">
          <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
            <div>
              <p className="mb-5 text-sm font-semibold text-[#17221b]/55">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-8xl leading-[0.84] tracking-[-0.065em]">
                Emrys Cruz Viera
                <span className="text-[#d45532]">.</span>
              </h1>
            </div>

            <div className="mt-12 lg:ml-auto">
              <p className="font-display text-2xl leading-[1.25] tracking-[-0.025em]">
                Computer Science student at Full Sail University | Drone, Simulation & AI Enthusiast | Former Lab Instructor Programming Contestant | Aerospace Dreamer
              </p>
              <p className="mt-6 text-[1.02rem] leading-7 text-[#17221b]/65">
                International Computer Science student at Full Sail University, originally from Cuba. I came to the U.S. with a clear mission: to master the foundations of computing and contribute to the future of technology. I'm driven by a love for low-level systems and the elegance of algorithms. For nearly two years, I taught as a student assistant, an experience that deepened my passion for mentoring and technical exploration. I've also competed as an ICPC contestant, sharpening my problem-solving skills in high-pressure environments. My academic projects have included building compilers, simulating CPUs, and designing information retrieval systems. Currently, I'm diving deep into AI and exploring its potential in quadcopter technologies. I feel especially drawn to the aerospace industry and the frontier of emerging tech. Beyond the code, I recharge by cycling through nature and dancing salsa, because creativity doesn't stop at the keyboard.
              </p>
            </div>
          </div>

          <Image
            src="/Portfolio.jpg"
            alt="Portrait of Your Name"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="bg-[#17221b] text-[#f4f1e9]">
        <div className="mx-auto px-32 py-20">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e57a58]">
                Selected projects
              </p>
              <h2 className="font-display text-5xl tracking-[-0.05em] sm:text-7xl">
                Projects
              </h2>
            </div>
          </div>

          <div>
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid gap-6 border-b border-white/15 py-10 transition-colors sm:grid-cols-[48px_180px_1fr] sm:items-center sm:gap-7 sm:py-12 lg:grid-cols-[48px_230px_1fr_0.9fr_40px] lg:gap-8"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-[#e57a58]">
                  {project.number}
                </span>
                <div className="aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-white/45">
                    {project.discipline}
                  </p>
                </div>
                <p className="max-w-[390px] text-sm leading-6 text-white/55 sm:col-start-2 lg:col-start-auto">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
