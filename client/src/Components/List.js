import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

    class List extends Component{
        constructor(props) {
            super(props);
            this.state = {
                pets: []
            }
        }

    componentDidMount = () => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                this.setState({pets: res.data.pets});
                // this.setState({pets: this.sort(res.data.pets)});
            })
            .catch(err => {
                console.log(err);
            })
        }

        // delete = (_id) => {
        //     axios.delete(`http://localhost:8000/api/burgers/${_id}`)
        //       .then( res => {
        //         console.log(res);
        //         this.componentDidMount();
        //       })
        //       .catch( err => {
        //         console.log(err);
        //       });
        //   }

   
        // sortPets = () => {
        //     let pets = [...this.state.pets];
        //     pets = SortPets(pets, "type");
        //     this.setState({pets: pets});
        // }

    

    render() {
        return (
         
         <div>
                <h2>These pets are looking for a home!</h2>
                
                <Link to={"/new"}>Add a pet to the shelter</Link>
                
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map( pet =>
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.pettype}</td>
                                    <td>
                                        <Link to={`/pet/${pet._id}`} className="btn-btn-caution">Details</Link>

                                        <Link to={`/pets/${pet._id}/edit`} className="btn-btn-warning">Edit</Link>
                                    </td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
        </div>
        )
}
}
export default List