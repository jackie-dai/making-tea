import "/Users/jacki/Desktop/School/Classes/Summer25/Art23/exp20/Tea/src/components/textBlock.css"
import {useState} from 'react'

export default function TextBlock(props) {
    const [clicked, setClicked] = useState(false);

    function dropDown() {
        setClicked(!clicked);
    }

    return (
        <div className="container">
            
            <div className="headerContainer">
                <h2 className="blackText">{props.title}</h2>
                {clicked ? 
                (<img onClick={() => dropDown()} className="caret" src="/public/caret-down.png"></img>) :
                (<img onClick={() => dropDown()} className="caret" src="/public/caret-right.png"></img>
                )}
            </div>      
            
            {clicked && <p className="blackText">{props.text}</p>}
        </div>
    )
}