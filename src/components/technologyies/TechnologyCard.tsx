import type { Technology } from "../../types/Technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack:(technology:Technology)=>void;
  isAdded:boolean;

}
const TechnologyCard = ({ technology,onAddToStack, isAdded }: TechnologyCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition duration-300">
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

     
      <div className="card-body pt-0">
        
        <h2 className="card-title">
          {technology.name}
        </h2>

        <p className="text-[#64748B]">
          {technology.description}
        </p>
<div className="flex gap-2 mt-2">
          <div className="badge badge-outline bg-[#F1F5F9]">
            {technology.category}
          </div>

          <div className="badge badge-outline">
            {technology.difficulty}
          </div>
        </div>

        
        <div className="mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 font-semibold">
            {technology.rating}
          </span>
        </div>

     
        <div className="card mt-3">
         
          <button className="btn bg-[#0A0F1D] w-full hover-3d rounded-1xl"
  disabled={isAdded}
  onClick={() => onAddToStack(technology)}
>
  <h2 className="text-[#FFFFFF]">{isAdded ? "✓ Added to Stack" : "Add to Stack"}</h2>
</button>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;