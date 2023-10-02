import "./App.css";
import Header from "./componentes/Header";
import Gallery from "./componentes/gallery";
import Footer from "./componentes/Footer";

const data = {
    dogInAdoption: [
        {
            photo: "/imagenes/pepo.png",
            name: "Pepo",
            age: "18 meses",
            size: "medium",
            description: "Soy un perrito con un poco más de 1 añito de vida. Mestizo border collie. Ya estoy vacunado, castrado y con chip",
        },
        {
            photo: "/imagenes/m+clara.png",
            name: "María Clara",
            age: "6 meses",
            size: "medium",
            description: "Soy una bebita con 6 meses. Ya estoy vacunada, con chip y prontamente me esterilizarán.",
        },
        {
            photo: "/imagenes/pechen.png",
            name: "Pechen",
            age: "9 meses",
            size: "medium",
            description: "Soy un adolescente de casi 9 meses de vida. Ya estoy castrado, con chip y vacunado.",
        },
    ],
};

function App() {
    return (
        <>
            <Header title="Adopta un Perrito" image="/imagenes/logo1.png"></Header>
            <main>
                <Gallery dogInAdoption={data.dogInAdoption}></Gallery>
            </main>

            <Footer copy="Conoce a tu futuro compañero!! pulsando click sobre los nombres de estos amigos caninos, conoce su nombre, edad y gustos."></Footer>
        </>
    );
}

export default App;
