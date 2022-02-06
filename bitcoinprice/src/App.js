import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {

        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1>Lates prices from coindesk</h1>
            <h2>BTC price</h2>
            <h3>{items.bpi.USD.rate}$</h3>
            <h3>{items.bpi.EUR.rate}&euro;</h3>
            <h3>{items.bpi.GBP.rate}&pound;</h3>
            <h6>Disclaimer: {items.disclaimer}</h6>
        </div>
    );
}
}
   
export default App;
