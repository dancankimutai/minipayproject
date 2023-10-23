type Props = {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function TextField({ name, value, onChange }: Props) {
    return (
        <div className="mb-6 w-full">
            <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-988 "
            >
                Enter NFT URI
            </label>
            <input
                type="text"
                id="default-input"
                name={name}
                value={value}
            onChange={onChange}
            className = "bg-gray-50 border border-gray-300 text-gray-908 text-sm rounded-1g focus:ring-blue"
            />
        </div>);}

    export default TextField;