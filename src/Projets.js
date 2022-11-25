import { Component } from "react";


export class Projets extends Component {

    state = {
        userInput:'',
        userList: [],
    }
    handleChange(e) {
        this.setState({userInput: e})
        // console.log(e)
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    addItem(input) {
        if (input === ''){
            return false
        } else {
            let listArray = this.state.userList;
            listArray.push(input);
            this.setState({userList: listArray, userInput:''});
            // console.log(listArray)
        }
    }
    crossOut(e) {
        const itemCrossed = e.target;
        itemCrossed.classList.toggle('crossed-out')
    }
    deleteItem () {
        let listArray = this.state.userList;
        listArray = [];
        this.setState({userList: listArray})
    }
    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="main-container">
                    <h2>Quoi d'autre?</h2>
                    <div className="input-area">
                        <label for="newItem">Ajoute un projet</label>
                        <input type="text" id="newItem"  onChange={(e) => {this.handleChange(e.target.value)}} value={this.state.userInput}/>
                    </div>                    
                    <button className="buttonAdd" onClick={() => this.addItem(this.state.userInput)}>Ajouter</button>                    
                    <div className="list-items">
                        <ul>
                            {this.state.userList.map((item, index) => (                            
                                <li className="list-item" onClick = {this.crossOut} key = {index}>{item}</li>                            
                            ))}
                        </ul>
                    </div>
                    <button className="buttonDelete" onClick={() => this.deleteItem()}>Effacer la liste</button>
                </div>
            </form>
        )
    }
}

