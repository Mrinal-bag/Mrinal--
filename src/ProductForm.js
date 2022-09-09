import React, { Component } from 'react'
import ProductList from "./ProductList";
import "./ProductForm.css";
export default class ProductForm extends Component{
    constructor(props){
        super(props);
        this.state = {name:"",qty:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.add(this.state);
        this.setState({name:"",qty:""});
         
    }
    render(){
        return(
            <div className="ProductForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="pname">Item Name</label>
                    <br/>
                    <input type="text" id="pname" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="qty">Quantity</label>
                    <br/>
                    <input type="text" id="qty" name="qty" value={this.state.qty} onChange={this.handleChange}/>
                    <br/>
                    <button>Add to Cart</button>
                </form>
            </div>
        );
    }
}
