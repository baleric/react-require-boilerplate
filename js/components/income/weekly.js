//import additional scripts
define(["jquery","react", "ReactDOM",'jsx!global'] , function ($,React,ReactDOM,global) {

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
            <p>
              Weekly Income Component (generated id = {this.props.message}) and time = {new Date().toLocaleTimeString()}
            </p>
          )
        }
      });
      
      setInterval(function(){
        doRender(_this);
      }, (Math.floor(Math.random() * 6) + 1 ) * 1000)

      function doRender(_this){
        var newID = global.genId(_this);
        ReactDOM.render(<Weekly message={newID} />, document.getElementById(newID));
      }
      
    }

    

    return {        
        init: init
    }

});









    