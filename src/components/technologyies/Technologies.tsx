import { use } from "react";
import type { Technology } from "../../types/Technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { use, useState } from "react";

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
const handleAddToStack = (technology: Technology) => {
  setSelectedTechnologies((pre) => [
    ...pre,
    technology,
  ]);
};
  return (
    <section className="max-w-7xl mx-auto px-6">
      
      <div className=" mb-5">
        <h2 className="text-3xl font-bold">
          Explore  <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
        </h2>

        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

  {/* Technology Cards */}
  <div className="lg:col-span-3">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onAddToStack={handleAddToStack}
        />
      ))}

    </div>
  </div>

  {/* Your Stack */}
  <div className="lg:col-span-1">
    <YourStack selectedTechnologies={selectedTechnologies} />
  </div>

</div>


    </section>
  );
};

export default Technologies;