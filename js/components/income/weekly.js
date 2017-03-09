//import additional scripts
define(["jquery","react", "ReactDOM",'jsx!global'] , function ($,React,ReactDOM,global) {

    //init function for page controller js
    function init() {
      
      var Weekly = React.createClass({       
        getInitialState() {
          return {};
        },

        componentDidMount() {
          console.log('did mount');
        },

        componentWillMount() {
          console.log('will mount');
        },

        render() {
          return (
            <p>{this.props.message}</p>
          )
        }
      });


      $('[data-component="weekly"]').each(function(i){
        var newID = global.genId($(this));
        var message = 'Weekly Income Component v.' + i + ' generated id = '+newID;
        ReactDOM.render(<Weekly message={message} />, document.getElementById(newID));
      });
      
    }

    return {        
        init: init
    }

});









    