import Badge from "react-bootstrap/Badge";

const Tags = ({ color1, textButton }) => {
    return (
        <>
            <Badge bg={color1}>{textButton}</Badge>
        </>
    );
};

export default Tags;
