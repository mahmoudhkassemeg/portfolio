import './Cards.css'
const tags = "</>"

function Card1(){
    
    return(
        <div className="card-container">
            <div className="card-content card-one">
                <h2 className="title">Coding</h2>
                <h3 className="description">{tags}</h3>
                <p>Coding used in several department other than Web Development.Such as IoT,
                     Mechatronics and even Video Production.</p>
                <p className='show'>Show More...</p>
            </div>

        </div>
    )
} export default Card1;