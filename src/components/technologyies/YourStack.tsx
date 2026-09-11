const YourStack = () => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm sticky top-24">
      
      <div className="card-body">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="card-title">
            Your Stack
          </h2>

          <div className="badge badge-primary">
            0
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Empty State */}
        <div className="text-center py-10">
          <p className="text-base-content/60">
            Your stack is empty
          </p>

          <p className="text-sm text-base-content/40 mt-2">
            Add technologies to build your stack.
          </p>
        </div>

        {/* Remove All */}
        <button className="btn btn-outline btn-error w-full">
          Remove All
        </button>

      </div>
    </div>
  );
};

export default YourStack;