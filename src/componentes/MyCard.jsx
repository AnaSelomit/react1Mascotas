import Tags from "./Tags";

const MyCard = ({ dog, color1, textButton }) => {
    return (
        <>
            <div className="box2">
                <div className="card">
                    <img src={dog.photo} alt={dog.name} />
                    <h3>Nombre :{dog.name}</h3>
                    <h4>Edad: {dog.age}</h4>
                    <h4>Tamaño: {dog.size}</h4>
                    <p>Descripción: {dog.description}</p>
                    <Tags color1={color1} textButton={textButton}></Tags>
                </div>
            </div>
        </>
    );
};

export default MyCard;
