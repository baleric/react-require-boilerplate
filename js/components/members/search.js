"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import additional scripts
define(["jquery", "react", "ReactDOM", 'global'], function ($, React, ReactDOM, global) {

  //init function for page controller js
  function init(_this) {
    var Search = function (_React$Component) {
      _inherits(Search, _React$Component);

      function Search(props) {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));
      }

      _createClass(Search, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
      }, {
        key: "render",
        value: function render() {
          return React.createElement(
            "div",
            { className: "" },
            "id = ",
            this.props.message
          );
        }
      }]);

      return Search;
    }(React.Component);

    function renderComponent() {
      var newID = global.genId(_this);
      ReactDOM.render(React.createElement(Search, { message: newID }), document.getElementById(newID));
    }

    renderComponent();
  }

  return {
    init: init
  };
});