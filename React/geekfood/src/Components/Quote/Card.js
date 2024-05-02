import "./Card.css"
export default function Card(props){
    return(
        <div className="card">
            <p className="quote">{props.quote}</p>
            <p className="author">{props.author}</p>
        </div>
    );
}
