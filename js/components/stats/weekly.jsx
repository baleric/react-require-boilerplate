//import additional scripts
define(["jquery","react", "ReactDOM",'global'] , function ($,React,ReactDOM,global) {

    //init function for page controller js
    function init(_this) {
      
      class Weekly extends React.Component {

        constructor(props) {
          super(props);
          // This binding is necessary to make `this` work in the callback
        }

        componentDidMount(){} 

        render() {
          return (
            <div>
              Placeholder new for new Component (ID : {this.props.message})
            </div>
          )
        }
      }

      var newID = global.genId(_this);
      ReactDOM.render(<Weekly message={newID} />, document.getElementById(newID));
      
      
    }

    return {        
        init: init
    }

});









    