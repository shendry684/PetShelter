import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pet: {
          
          name: "",
          pettype: "",
          description: "",
          skill1: "",
          skill2: "",
          skill3: ""
          
        },
          
          errors:{}
          }
        }
   
    componentDidMount = () => {
        console.log("edit.js");
        axios.get(`http://localhost:8000/api/pets/${this.props.match.params._id}`)
            .then(res => {
                this.setState({ pet: res.data.pet });
            })
            .catch( err => {
              console.log(err);
            });
        }

    change = (key, e) => {
        let p = { ...this.state.pet };
        p[key] = e.target.value;
        this.setState({ pet: p });
    }


    update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${this.state.pet._id}`, this.state.pet)
            .then(res => {
                if (res.data.errors) {
                    this.setState({ errors: res.data.errors.errors })
                } else {
                    this.props.history.push("/");
                }
            })
            .catch( err => {
              console.log(err);
            });
        }

    render() {
        return (
           <form onSubmit={this.update}>
           <div>
           <h1>Edit this Pet</h1> 
                    <label>Pet Name:</label>
                    <input type="text" onChange={this.change.bind(this, "name")} value={this.state.pet.name} />
                    {
                                this.state.errors.name ?
                                    <p>{this.state.errors.name.message}</p> :
                                    ""
                            }
                     </div>
                    <label>Pet Type:</label>
                    <input type="text" onChange={this.change.bind(this, "pettype")} value={this.state.pet.pettype} />
                    {
                                this.state.errors.pettype ?
                                    <p>{this.state.errors.pettype.message}</p> :
                                    ""
                            }
                    <label>Description:</label>
                    <input type="text" onChange={this.change.bind(this, "description")} value={this.state.pet.description} />
                    {
                                this.state.errors.description ?
                                    <p>{this.state.errors.description.message}</p> :
                                    ""
                            }
                   
                    <fieldset>
                    <h1>Skills(optional)</h1>
                
                    <label>Skill 1:</label>
                    <input type="text" onChange={this.change.bind(this, "skill1")} value={this.state.pet.skill1} />
                    {
                        (this.state.errors.skill1) ?
                            <p>{this.state.errors.skill1.message}</p> :
                            ""
                    }
                
            
                    <label>Skill 2:</label>
                    <input type="text" onChange={this.change.bind(this, "skill2")} value={this.state.pet.skill2} />
                    {
                        (this.state.errors.skill2) ?
                                <p className="error">{this.state.errors.skill2.message}</p> :
                                <p></p>
                    }
                    <label>Skill 3:</label>
                    <input type="text" onChange={this.change.bind(this, "skill3")} value={this.state.pet.skill3} />
                    
                    {
                        (this.state.errors.skill3) ?
                                <p className="error">{this.state.errors.skill3.message}</p> :
                                ""
                    }
                    </fieldset>
        
          <button  type="submit">Edit Pet</button>
          
          <Link to={`/pet/${this.props.match.params._id}`}><button >Cancel</button></Link>
              </form>
             
           
          
            
                
               
            
            
            
        )
    }
}

export default Edit