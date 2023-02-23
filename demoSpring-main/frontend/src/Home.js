import {Component} from "react";
import './App.css'
import AppNavbar from './AppNavbar'
import {Link} from 'react-router-dom';
import {Button, Container} from "reactstrap";
import { withRouter } from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            secondsRemaining: 60,
            newDuration: "",
            timerRunning: true,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick = () => {
        if (this.state.secondsRemaining > 0 && this.state.timerRunning) {
            this.setState({
                secondsRemaining: this.state.secondsRemaining - 1,
            });
        } else {
            clearInterval(this.intervalId);
        }
    };

    handleInputChange = (event) => {
        this.setState({
            newDuration: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            secondsRemaining: parseInt(this.state.newDuration),
            newDuration: "",
            timerRunning: true,
        });
    };

    handleStop = () => {
        this.setState({
            timerRunning: false,
        });
    };

    render() {

        const { secondsRemaining, newDuration } = this.state;
        return (
            <div>
                <h2>Countdown Timer</h2>
                <div>{secondsRemaining} seconds remaining</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New duration:
                        <input
                            type="number"
                            value={1}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="submit">Set Duration</button>
                </form>
                <button onClick={this.handleStop}>Stop Timer</button>
            </div>
        );
    }
}

export default Home;