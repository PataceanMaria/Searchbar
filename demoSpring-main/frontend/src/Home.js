import {Component} from "react";
import './App.css'
import AppNavbar from './AppNavbar'
import {Link} from 'react-router-dom';
import {Button, Container, Form} from "reactstrap";
import { withRouter } from 'react-router-dom'


class Home extends Component {
    emptyitem={
        name:''
    }

    constructor(props) {
        super(props);
        this.state = {books: [],
            filteredData: [],
            item:this.emptyitem};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handlerfilter=this.handlerfilter.bind(this);


    }

    componentDidMount() {

        fetch('/products')
            .then(response => response.json())
            .then(data => this.setState({books: data}))


    }
    handlerfilter=(event)=>{
        const{value}=event.target;
        const searchTerm = value.toLowerCase();
        const filteredData= this.state.books.filter(book=>book.name.toLowerCase().includes(searchTerm));
        const name=event.target.name;
        const val=event.target.value;
        const item={...this.state.item};
        item[name]=val;
        this.setState({item})


        this.setState({filteredData});
        console.log(this.state.filteredData);
    }


    async handleSubmit(event) {
        await fetch('/products',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.state.item),
            });
        this.props.history.push('/products');


    }

    render() {
        let bo=true;
        if(this.state.filteredData)
        {
            bo=true;
        }
        else
        {
            bo=false;
        }


        const {books, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading...</p>
        }
        const productList=books.map(book=>{
            return <div className="items" key={book.id}>

                <div className="name">
                    {book.name} </div>



            </div>
        })

        return (
            <div>
                <div >
                    <Form onSubmit={this.handleSubmit}>
                        <input type="text"   onChange={this.handlerfilter} id="name" name="name" value={this.state.item.name}/>
                        <Button color="primary" type="submit">Save</Button>
                        {bo?(
                                <ul>
                                    {this.state.filteredData.map(book=>(
                                        <li key={book.id}>
                                            Carte:{book.name}
                                        </li>
                                    ))}

                                </ul>

                            ):
                            (
                                <h1>aaaaa</h1>

                            )}

                    </Form>


                </div>

            </div>

        );

    }
}

export default Home;