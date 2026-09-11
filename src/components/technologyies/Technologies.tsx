import { use } from "react";
import type { Technology } from "../../types/Technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="max-w-7xl mx-auto px-6">
      
      <div className=" mb-5">
        <h2 className="text-3xl font-bold">
          Explore  <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Choose the right technologies for your development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>

    </section>
  );
};

export default Technologies;