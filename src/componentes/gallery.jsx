import MyCard from "./MyCard";

const Gallery = ({ dogInAdoption }) => {
    return (
        <section className="gallery">
            <MyCard dog={dogInAdoption[0]} textButton="Pepo" color1="danger"></MyCard>
            <MyCard dog={dogInAdoption[1]} textButton="María Clara" color1="warning"></MyCard>
            <MyCard dog={dogInAdoption[2]} textButton="Pechen" color1="success"></MyCard>
        </section>
    );
};

export default Gallery;
