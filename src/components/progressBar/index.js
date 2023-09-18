export default function ProgressBar({ progress }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="text-neutral-grey text-sm font-bold w-full lg:text-base">
        {Math.round(progress)}% complete
      </p>
      <div className="w-full bg-purple-400 rounded-full h-4 flex items-center lg:h-5">
        <div
          className="bg-primary rounded-full h-2 mx-1 lg:h-3"
          style={{ width: `${progress}% ` }}
        ></div>
      </div>
    </div>
  );
}
