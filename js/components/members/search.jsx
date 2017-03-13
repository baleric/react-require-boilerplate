//import additional scripts
define(["jquery","react", "ReactDOM",'global'] , function ($,React,ReactDOM,global) {

    //init function for page controller js
    function init(_this) {
      
      class Search extends React.Component {

        constructor(props) {
          super(props);
        }

       

        componentDidMount(){
        } 

        render() {
          return (
            <div className="">
              id = {this.props.message}
            </div>
          )
        }
      }

      function renderComponent(){
        var newID = global.genId(_this);
        ReactDOM.render(<Search message={newID} />, document.getElementById(newID));    
      }
      
      renderComponent();      

    }   

    return {        
        init: init
    }

});
