//import additional scripts
define(["jquery", "react", "ReactDOM", 'global'], function ($, React, ReactDOM, global) {

  //init function for page controller js
  function init(_this) {

    class Header extends React.Component {

      constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {}

      componentWillMount() {}

      render() {
        return React.createElement(
          "p",
          null,
          "Header Template (ID : ",
          this.props.message,
          ")"
        );
      }
    }

    var newID = global.genId(_this);
    ReactDOM.render(React.createElement(Header, { message: newID }), document.getElementById(newID));
  }

  return {
    init: init
  };
});