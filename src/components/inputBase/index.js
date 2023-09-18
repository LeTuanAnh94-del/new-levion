export default function BaseInput() {
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
