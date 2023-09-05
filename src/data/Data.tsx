
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
        github: "https://github.com/ptijjo/projet-7-kasa",
        url: "",
        image: "./assets/kasa/details.png",
        description: "",
    },
    {
        id: 2,
        titre: "Créez une application de streaming de films ",
        stack: ["REACT", "SASS", "NODEJS", "EXPRESS, MONGODB"],
        github: "",
        url: "",
        image: "./assets/app_cinema/cinema.png",
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
        titre: "Créez une réseau social mobile ",
        stack: ["REACT", "SASS", "NODEJS", "EXPRESS, MONGODB"],
        github: "",
        url: "",
        image: "./assets/react_cook/reactCook.png",
        description: "",
    },


]

export default Data;