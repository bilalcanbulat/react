import React, { Component } from "react";

class ClassComponent extends Component {
constructor(props){
    super(props);
    this.state = {
        sayac:Number(this.props.sayi),
    }

    this.arttir=this.arttir.bind(this);
    

}
    arttir(){
        this.setState({
            sayac: this.state.sayac+1,
        });
    }

    azalt= ()=>{
        this.setState({
            sayac: this.state.sayac-1,
        });
    };
  render() {
 
      
    let {sayac}=this.state;
    return <div>
        <h1>Sayac:{sayac}</h1>
        <button onClick={this.arttir}>Arttır</button>
        <button onClick={this.azalt}>Azalt</button>

    </div>;
  }
}
export default ClassComponent;