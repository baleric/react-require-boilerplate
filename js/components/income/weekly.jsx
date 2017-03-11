/** @jsx React.DOM */

//import additional scripts
define(["jquery","react", "ReactDOM",'global'] , function ($,React,ReactDOM,global) {

    //init function for page controller js
    function init(_this) {
   
      class Weekly extends React.Component {

        constructor(props) {
          super(props);
          // This binding is necessary to make `this` work in the callback
          this.getData = this.getData.bind(this);
          this.state = { 
            data : [],
            loading  : true,
            loadingText : 'Loading..'
          }
        }

        getData() {
            var theNumber = (Math.floor(Math.random()*100) + 1);
            this.setState({
               data : [],
               loading  : true
            }); 

            $.ajax({
                url: _this.data('url') + theNumber,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({
                        data: data,
                        loading: false,
                        loadingText : 'Getting new JSON..'
                    });                 
                }.bind(this),
                error: function(xhr, status, err) {

                }.bind(this)
            });
 

           var newID = global.genId(_this);
           ReactDOM.render(<Weekly message={newID} />, document.getElementById(newID));
        }

        componentDidMount(){
            this.getData(this.state.element);
        } 

        render() {
          return (
            <div className="demoTitle">

                <div className="updateTime">
                    <span className="grey">last update time</span> <br />
                    <strong>{new Date().toLocaleTimeString()}</strong>
                </div>

                <a href="#" onClick={this.getData}>
                    <img src="/img/refresh.png" className="refreshBtn" width="30" height="30" />
                </a>

                <div>
                    <div className="componentName">
                        <h2>Weekly Income Component</h2>
                        <div className="grey"> Generated Id <br />
                            <strong>{this.props.message}</strong>
                        </div>
                    </div>
                </div>

                <div className="postBackData">
                    <strong>{this.state.loading ? this.state.loadingText : ''}</strong>
                    <strong>{this.state.data.title}</strong>
                </div>

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









    