import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class New extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newPet: {
                name: "",
                pettype: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: "",
                likes: 0,
            },
            errors: {}
        }
    }

    change =(key, e) => {
        let p = {...this.state.newPet};
        p[key] = e.target.value;
        this.setState({newPet: p});
    }

    create = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/new", this.state.newPet)
            .then(res => {
                if (res.data.errors) {
                    this.setState({ errors: res.data.errors.errors })
                } else {
                    this.props.history.push("/");
                }
           
            });
    }

    render() {
        return (
        <form onSubmit={this.create}>
            <div>
            <h2>Know of a pet needing a home?</h2>
                    <h3>Enter Pet Details</h3>
                    
                    <label>Pet Name:</label>
                    <input type="text" onChange={this.change.bind(this, "name")} />
                    {
                        (this.state.errors.name) ?
                        <p>{this.state.errors.name.message}</p> :
                        ""
                    }
                    </div>
                    <div className="form-group">
                    <label>Pet type:</label>
                    <input type="text" onChange={this.change.bind(this, "pettype")} />
                    {
                        (this.state.errors.pettype) ?
                        <p>{this.state.errors.pettype.message}</p> :
                        ""
                    }
                    </div>
                    <div className="form-group">
                    <label>Description:</label>
                    <input type="text" onChange={this.change.bind(this, "description")} />
                    {
                        (this.state.errors.description) ?
                        <p>{this.state.errors.description.message}</p> :
                        ""
                    }
                    </div>
                    <div className="form-group">
                    <h3>Skills (optional)</h3>
                    <label>Skill 1:</label>
                    <input type="text" onChange={this.change.bind(this, "skill1")} />
                    {
                        (this.state.errors.skill1) ?
                        <p>{this.state.errors.skill1.message}</p> :
                        ""
                    }
                    </div>
                    <div className="form-group">
                    <label>Skill 2:</label>
                    <input type="text" onChange={this.change.bind(this, "skill2")} />
                    {
                        (this.state.errors.skill2) ?
                        <p>{this.state.errors.skill2.message}</p> :
                        ""
                    }
                    </div>
                    <div className="form-group"></div>
                    <label>Skill 3:</label>
                    <input type="text" onChange={this.change.bind(this, "skill3")} />
                    {
                        (this.state.errors.skill3) ?
                        <p>{this.state.errors.skill3.message}</p> :
                        ""
                    }
                     
                    <button className="btn-btn-warning" type="submit">Add Pet</button>
                   < hr />
                    <Link to={"/"}><button className="btn-btn-warning">Cancel</button></Link>
                    
                </form>
                
            
        )
        
    }
}

export default New
