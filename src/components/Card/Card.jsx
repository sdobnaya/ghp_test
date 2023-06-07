import './Card.css';


function Card({name, info, isGood, src}) {
    return (
        <>
            <h1 className = { isGood }> { name }</h1>
            <img
                className = "image"
                src = { src }
                alt = "student-foto"
            />
            <p>{ info }</p>
        </>
    );
}

export default Card;
