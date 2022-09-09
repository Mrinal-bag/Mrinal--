import React, {Component} from "react";
import "./Product.css";
class Product extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.del(this.props.value,e);
    }
    render(){
        return (
            <tr className="Product">
             <td>{this.props.value.name}</td>
             <td>{this.props.value.qty}</td>
             <td className="btn">
              <button onClick={this.handleClick}>Delete</button>
             </td>
            </tr>
        );
    }
}
export default Product;