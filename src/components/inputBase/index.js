export default function BaseInput({ type, data, onSelect, selected }) {
  if (type === "radio") {
    return (
      <div className="flex gap-2">
        <input
          className="w-6 h-6 cursor-pointer"
          type="radio"
          name={data}
          onChange={onSelect}
          checked={selected}
        />
        <p
          className={`text-sm lg:text-base  ${
            selected ? "text-neutral-dark-grey" : "text-neutral-grey-light"
          }`}
        >
          {data}
        </p>
      </div>
    );
  }

  return (
    <div>
      <input
        type="email"
        className="py-2.5 px-3.5 rounded-input outline-none text-neutral-grey-lighter text-xs lg:py-4 lg:px-6 lg:rounded-input-lg lg:text-base"
        placeholder="Enter your email"
      />
      <button className="py-2.5 px-5 rounded-button border border-solid border-purple-300 bg-primary text-white text-xs font-bold lg:py-4 lg:px-8 lg:rounded-button-lg lg:text-base">
        Subscribes
      </button>
    </div>
  );
}
