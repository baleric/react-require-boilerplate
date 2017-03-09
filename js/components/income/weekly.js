//import additional scripts
define(["jquery","react", "ReactDOM",'jsx!global'] , function ($,React,ReactDOM,global) {

    //init function for page controller js
    function init(_this) {
      
      var Weekly = React.createClass({    

        getInitialState() {
          return {
            data: []
          };
        },

        componentDidMount() {
        },

        componentWillMount() {
            $.ajax({
                url: _this.data('url'),
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({data: data}); // Notice this
                    console.log(this.state.data);
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(_this.data('url'), status, err.toString());
                }.bind(this)
            });
        },

        componentDidUpdate() {

        },

        render() {
          return (
            <div>
                <div>
                Weekly Income Component (generated id = {this.props.message}) and time = {new Date().toLocaleTimeString()}
                </div>
                <div>
                    <strong>{this.state.data.title}</strong>
                </div>
            </div>
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









    