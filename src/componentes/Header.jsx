const Header = (props) => {
    return (
        <header>
            <div className="box1">
                <div className="logo">
                    <img src={props.image} className="imagen" alt="logo" />
                </div>
                <div className="titlee">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
