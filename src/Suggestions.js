import { Component } from "react";
import deleteBox from './delete.svg'

export class Suggestions extends Component {

    // state = {
    //     suggestionItem: 
    // }
    
    deleteItem () {

    }
    render() {
        return (
            <div>
                <h2>Suggestions :</h2>
                <ul>
                    <div className="list-item list-suggestions">
                        <li>Faire du snowboard</li>
                        <img className="delete-box" alt="delete icon" src={deleteBox} width="30px" onClick={() => this.deleteItem()}></img>
                    </div>
                    <div className="list-item list-suggestions">
                        <li>Jouer aux jeux de socièté avec des amis</li>
                        <img className="delete-box" alt="delete icon" src={deleteBox} width="30px"></img>
                    </div>
                    <div className="list-item list-suggestions">
                        <li>Regarder 5 films de Noël</li>
                        <img className="delete-box" alt="delete icon" src={deleteBox} width="30px"></img>
                    </div>
                </ul>

            </div>
        )
    }
}