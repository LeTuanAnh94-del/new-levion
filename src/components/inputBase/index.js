export default function BaseInput() {
  return (
    <div>
      <input
        type="email"
        className="py-2.5 px-3.5 rounded-input outline-none text-neutral-grey-lighter text-xs"
        placeholder="Enter your email"
      />
      <button className="py-2.5 px-5 rounded-button border border-solid border-purple-300 bg-primary text-white text-xs font-bold">
        Subscribes
      </button>
    </div>
  );
}
