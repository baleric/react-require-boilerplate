//import additional scripts
define(["jquery","react", "ReactDOM",'global'] , function ($,React,ReactDOM,global) {

    //init function for page controller js
    function init(_this) {
      
      var Weekly = React.createClass({       
        getInitialState() {
          return {};
        },

        componentDidMount() {
        },

        componentWillMount() {
        },

        render() {
          return (
             <p>Weekly Statistics Component (generated id = {this.props.message})</p>
          )
        }
      });


      
      var newID = global.genId(_this);
      ReactDOM.render(<Weekly message={newID} />, document.getElementById(newID));
      
      
    }

    return {        
        init: init
    }

});









    