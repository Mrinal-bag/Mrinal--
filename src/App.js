import React, { Component } from 'react'
import ProductList from "./ProductList";
export default class App extends Component {
  render() {
    return (
      <div>
        <ProductList items={[
            {name:"JBL Earphones",qty:2},
            {name:"One Plus Nord 2",qty:3},
            {name:"Apple I-Phone 13",qty:1},
            {name:"Canon DSLR",qty:3},
            {name:"Dettol N-95 Mask",qty:4}
        ]}
        />
      </div>
    )
  }
}