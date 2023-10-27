export default function DropDown({
  options,
  label,
  setGender,
  setState,
  setStateId,
}) {
  const handleChang = (e) => {
    if (label === "جنسیت") {
      setGender(e.target.value);
    } else {
      setState(e.target.value);
      setStateId(e.target.selectedIndex);
    }
  };

  return (
    <div className={"my-1"}>
      <select
        required
        style={{height: "58px"}}
        onChange={handleChang}
        className="bg-gray-200 pb-3 border border-[#999] text-gray-500 text-sm rounded-lg focus:ring-accent focus:border-primary focus:outline-none block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-accent dark:focus:border-accent"
      >
        <option selected disabled value={""}>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.slug} id={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
