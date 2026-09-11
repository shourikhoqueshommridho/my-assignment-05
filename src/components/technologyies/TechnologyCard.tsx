import type { Technology } from "../../types/Technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack:(technology:Technology)=>void;
}

const TechnologyCard = ({ technology,onAddToStack }: TechnologyCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition duration-300">
      
      {/* Icon + Badge */}
      <div className="flex items-center justify-between p-5">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-14 h-14 object-contain"
        />

        <div className="badge badge-secondary">
          {technology.badge}
        </div>
      </div>

      {/* Card Content */}
      <div className="card-body pt-0">
        
        <h2 className="card-title">
          {technology.name}
        </h2>

        <p className="text-base-content/70">
          {technology.description}
        </p>

        {/* Category + Difficulty */}
        <div className="flex gap-2 mt-2">
          <div className="badge badge-outline">
            {technology.category}
          </div>

          <div className="badge badge-outline">
            {technology.difficulty}
          </div>
        </div>

        {/* Rating */}
        <div className="mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 font-semibold">
            {technology.rating}
          </span>
        </div>

        {/* Button */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary w-full" onClick={() => onAddToStack(technology)}>
            Add to Stack
          </button>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;