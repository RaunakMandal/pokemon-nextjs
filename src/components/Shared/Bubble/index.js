const Bubble = ({ type }) => {
    return (
        <span className="px-2 py-1" style={{ ...baseStyle, ...typeStyle[type] }}>
            {type}
        </span>)
};

const baseStyle = {
    padding: "0 10px",
    borderRadius: "4px",
    fontSize: "12px",
    color: "#fff",
};

const typeStyle = {
    'Grass': {
        backgroundColor: "#78C850",
    },
    'Poison': {
        backgroundColor: "#A040A0",
    },
    'Fire': {
        backgroundColor: "#F08030",
    },
    'Flying': {
        backgroundColor: "#A890F0",
    },
    'Water': {
        backgroundColor: "#6890F0",
    },
    'Bug': {
        backgroundColor: "#A8B820",
    },
    'Normal': {
        backgroundColor: "#A8A878",
    },
    'Electric': {
        backgroundColor: "#F8D030",
    },
    'Ground': {
        backgroundColor: "#E0C068",
    },
    'Fairy': {
        backgroundColor: "#EE99AC",
    },
    'Fighting': {
        backgroundColor: "#C03028",
    },
    'Psychic': {
        backgroundColor: "#F85888",
    },
    'Rock': {
        backgroundColor: "#B8A038",
    },
    'Steel': {
        backgroundColor: "#B8B8D0",
    },
    'Ice': {
        backgroundColor: "#98D8D8",
    },
    'Ghost': {
        backgroundColor: "#705898",
    },
    'Dragon': {
        backgroundColor: "#7038F8",
    },
};


export default Bubble;