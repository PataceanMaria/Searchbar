import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {Component} from "react";

import ProductList from "./ProductList";


class App extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await fetch('/products');
        const body = await response.json();
        this.setState({products: body});
    }

    // render() {
    //     const {products} = this.state
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 <img src={logo} className="App-logo" alt="logo"/>
    //                 <div className="App-intro">
    //                     <h2>Products</h2>
    //                     {products.map(product =>
    //                         <div key={product.id}>
    //                             {product.name}
    //                         </div>
    //                     )}
    //                 </div>
    //             </header>
    //         </div>
    //     );
    // }

    render() {
        return (
            <Router>
                <Switch>

                    <Route path='/' exact={true}><ProductList/></Route>

                </Switch>
            </Router>
        )
    }
}

export default App;