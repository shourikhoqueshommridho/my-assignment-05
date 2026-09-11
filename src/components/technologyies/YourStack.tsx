import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../../types/Technology";
import { IoMdClose } from "react-icons/io";

interface YourStackProps {
  selectedTechnologies: Technology[];
  setSelectedTechnologies:Dispatch<SetStateAction<Technology[]>>
}
const YourStack = ({selectedTechnologies,setSelectedTechnologies}:YourStackProps) => {
const handleRemoveTechnology=(technology:Technology)=>{
    const RemoveTechnology=selectedTechnologies.filter(selectedTechnology=>selectedTechnology.name != technology.name);
    setSelectedTechnologies(RemoveTechnology)
}
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm sticky top-24">
      <div className="card-body">
<div >
          <h2 className="card-title font-semibold">
            Your Stack
          </h2>

          <div>
           <h2 className="text-[#94A3B8]"> {selectedTechnologies.length} Technology Selected</h2>
          </div>
        </div>

        <div className="divider my-2"></div>
{selectedTechnologies.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-base-content/60">
              Your stack is empty
            </p>

            <p className="text-sm text-base-content/40 mt-2">
              Add technologies to build your stack.
            </p>
          </div>
        ) : (
          <div className="space-y-3 grid grid-cols-1 g">
            {selectedTechnologies.map((technology) => (
              <div key={technology.id} className='flex gap-2  items-center border-2 border-gray-200 rounded-2xl py-2 px-4'>
                <img src={technology.icon} alt=""  className="h-12.5 w-12.5"/>
                
                <div >
                    <h2 className="font-bold">{technology.name}</h2>
                    <h2>{technology.category}</h2>
                    
                </div>
<div className="mx-12">
    <span className='text-red-500 font-bold cursor-pointer' onClick={()=>handleRemoveTechnology(technology)}><IoMdClose /></span>
</div>
              </div>
            ))}
          </div>
        )}

        <button className="btn btn-outline btn-error w-full"
        onClick={() => setSelectedTechnologies([])}>
          Remove All
        </button>

      </div>
    </div>
  );
     
};

export default YourStack;