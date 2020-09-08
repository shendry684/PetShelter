
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';
import axios from 'axios';

class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            count:0
            
        } 
    }
    componentDidMount = () => {
        axios.get(`http://localhost:8000/api/pets/${this.props.match.params._id}`)
            .then(res => {
                this.setState({
                    pet: res.data.pet
                });
            })
    }

    // like = () => {
    //     let l = { ...this.state }
    //     console.log(l);
    //     l.like = true;
    //     l.pet.like += 1;
    //     this.setState(l);
    //     axios.put(`/api/pets/${this.props.match.params._id}`, this.state.pet)
    //         .then(res => {
    //             this.componentDidMount();
    //         })
    // }

    incrementCounter= () => {
        this.setState({
        
          count:this.state.count+1
        })
      }

    adopt = () => {
        axios.delete(`http://localhost:8000/api/pets/${this.props.match.params._id}`)
            .then(res => {
                if (res.data.errors) {
                    console.log(res.data.errors.errors);
              } else {
                    this.props.history.push("/");
            }
        });
    }
    
    render() {
        let { count } =this.state
        return (
            <div>
                 <Link to={"/"} className="btn btn-primary mb-5">Home</Link>
                <h2>Details about: {this.state.pet.name}</h2>
               <br></br>
                <div>
                    <div>
                        <h4>Pet Type:{this.state.pet.pettype}</h4>
                    </div>
                    <div>
                        <h4>Description:{this.state.pet.description}</h4>
                    </div>
                    <div>
                       
                        <div>
                            <h3>Skills:</h3>
                            <li>{this.state.pet.skill1}</li>
                            <li>{this.state.pet.skill2}</li>
                            <li>{this.state.pet.skill3}</li>
                        </div>
                    </div>
                     <Like
        title = { "Like this pet"  }
        task = { this.incrementCounter } />
        <h2>Count: { count } </h2>
      
              
                    
                    <div>
                        <button onClick={this.adopt.bind(this)} className="btn btn-warning">Adopt this pet</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info