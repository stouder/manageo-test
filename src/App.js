import logo from './logo.svg';
import './App.css';
import PersonnList from './PersonnList';
import FormPersonn from './FormPersonn';
import { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            isUpdateForm: false
        }
    }

    //methode appeler une fois que le composant est sur le dom
    componentDidMount() {
        this.initList();
    }

    //Mise à jour du comosant
    componentDidUpdate() {
        //this.setState(this.state.people);
    }

    //fonction d'initialisation des données
    initList = () => {
        this.setState({
            people: [
                { id: 1, name: 'Fabien', firstname: 'stouder', email: 'fabien.stouder@gmail.com' },
                { id: 2, name: 'Anne-Laure', firstname: 'Michel', email: 'fabien.stouder@gmail.com' },
                { id: 3, name: 'Juliette', firstname: 'Michel', email: 'fabien.stouder@gmail.com' },
                { id: 4, name: 'Florian', firstname: 'Michel', email: 'fabien.stouder@gmail.com' }
            ]
        })
    }

    //fonction qui enleve de la liste la personne avec id passé en parametre
    delete = (id) => {
        const people = this.state.people.filter(i => i.id !== id);
        this.setState({ people });
    }

    //fonction qui modifie dans la liste la personne avec id passé en parametre
    update = (id) => {
        this.setState({ isUpdateForm: true });
    }

    render() {
        return ( < div className = "App" >
                <
                PersonnList people = { this.state.people }
                deleteById = { this.delete }
                updateById = { this.update }
                />   { this.state.isUpdateForm ? < FormPersonn / >: "false"
            } <
            /div> )
    }
}

export default App;