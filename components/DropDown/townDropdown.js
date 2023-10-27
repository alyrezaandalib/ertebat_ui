export default function TownDropdown({ options, label , setTown , id}) {
    const handleChang = (e) => {
        setTown(e.target.value)
    };

    const townOptions = options.filter(option => option.province_id === id)
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
                {townOptions.map((option) => (
                    <option key={option.id} value={option.slug}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
