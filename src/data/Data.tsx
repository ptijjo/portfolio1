
const ali: string = "https://www.rammaheshwari.com/#about";

interface projet {
    id: number,
    titre: string,
    stack: string[],
    github: string,
    url: string,
    image: string,
    description: string,
}


const Data: projet[] = [
    {
        id: 1,
        titre: "Créez une application web de location immobilière avec React",
        stack: ["REACT", "CSS", "JAVASCRIPT"],
        github: "",
        url: "",
        image: "public/assets/kasa/details.png",
        description: "Dans le dossier code_react_router vous retrouverez au format pdf le code des différentes routes disponibles de l'application. Dans le dossier code_react_kasa se trouve le code du site kasa.",
    },
    {
        id: 2,
        titre: "Créez une application de streaming de films ",
        stack: ["REACT", "SASS"],
        github: "",
        url: "./assets/app_cinema/cinema.png",
        image: "",
        description: "",
    },
    {
        id: 3,
        titre: "Créez une réseau social mobile ",
        stack: ["REACT", "SASS", "NODEJS", "EXPRESS, MONGODB"],
        github: "",
        url: "",
        image: "./assets/waxtane/reseau.png",
        description: "",
    },
    {
        id: 4,
        titre: "Maquette d'un site de réservation de restaurant",
        stack: ["HTML", "SASS"],
        github: "",
        url: "",
        image: "../assets/react_cook/reactCook.png",
        description: "",
    },


]

export default Data;