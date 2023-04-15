import Bubble from "@/components/Shared/Bubble";
import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="flex flex-col cursor-pointer hover:shadow-2xl" style={{ ...baseStyle }}>
            <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} style={{ height: 200, border: '2px solid #000' }} />
            <div className="flex flex-col items-start p-2 gap-1">
                <span className="text-sm text-black">#0{pokemon.number}</span>
                <span className="text-xl font-bold text-black">{pokemon.name}</span>
                <span className="flex gap-2">
                    {pokemon.types.map((type) => (
                        <Bubble key={type} type={type} />
                    ))}
                </span>
            </div>
        </div>
    )
}

const baseStyle = {
    padding: "8px 10px",
    borderRadius: "4px",
    backgroundColor: "#FFFFF0",
};

export default PokemonCard;