import React,{Component} from 'react';
import ActualiteItem from "./actualiteItem";
class Actualite extends Component {
  constructor() {
    super()
    this.state={actus:[]}
  }
  componentWillMount(){
    var xhr=new XMLHttpRequest();
    var items=[];
    xhr.open("GET","http://localhost/rrphp/json/actualite/list",true);
    var that=this;
    xhr.onload=function () {
      var data=JSON.parse(xhr.response);
      console.log(data);
      for (var actu of data) {
        console.log(actu);
        items.push(<ActualiteItem titre={actu.nom_evenement} description={actu.description} date_debut={actu.date_debut} lieu={actu.lieu}/>);
      }
      that.setState({actus:items});
    }
    xhr.send();
  }
  render(){
    return (
      <div>
        {this.state.actus.length !=0? this.state.actus : 'nooon'}

      </div>
    );
  }
}
export default Actualite;

// const Actualite = ()=>({
//     render: function() {
//
//     }
//   });
