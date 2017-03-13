"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import additional scripts
define(["jquery", "react", "ReactDOM", 'global'], function ($, React, ReactDOM, global) {

    //init function for page controller js
    function init(_this) {
        var Weekly = function (_React$Component) {
            _inherits(Weekly, _React$Component);

            function Weekly(props) {
                _classCallCheck(this, Weekly);

                // This binding is necessary to make `this` work in the callback
                var _this2 = _possibleConstructorReturn(this, (Weekly.__proto__ || Object.getPrototypeOf(Weekly)).call(this, props));

                _this2.getData = _this2.getData.bind(_this2);
                _this2.state = {
                    data: [],
                    loading: true,
                    loadingText: 'Loading JSON..'
                };
                return _this2;
            }

            _createClass(Weekly, [{
                key: "getData",
                value: function getData() {
                    var theNumber = Math.floor(Math.random() * 100) + 1;
                    this.setState({
                        data: [],
                        loading: true
                    });

                    $.ajax({
                        url: _this.data('url') + theNumber,
                        dataType: 'json',
                        cache: false,
                        success: function (data) {
                            this.setState({
                                data: data,
                                loading: false,
                                loadingText: 'Getting new JSON.. '
                            });
                        }.bind(this),
                        error: function (xhr, status, err) {
                            console.log(err);
                        }.bind(this)
                    });

                    var newID = global.genId(_this);
                    ReactDOM.render(React.createElement(Weekly, { message: newID }), document.getElementById(newID));
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.getData(this.state.element);
                }
            }, {
                key: "render",
                value: function render() {
                    return React.createElement(
                        "div",
                        { className: "demoTitle" },
                        React.createElement(
                            "div",
                            { className: "updateTime" },
                            React.createElement(
                                "span",
                                { className: "grey" },
                                "last update time"
                            ),
                            " ",
                            React.createElement("br", null),
                            React.createElement(
                                "strong",
                                null,
                                new Date().toLocaleTimeString()
                            )
                        ),
                        React.createElement(
                            "a",
                            { href: "#", onClick: this.getData },
                            React.createElement("img", { src: "/img/refresh.png", className: "refreshBtn", width: "30", height: "30" })
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "div",
                                { className: "componentName" },
                                React.createElement(
                                    "h2",
                                    null,
                                    "Weekly Income Component"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "grey" },
                                    " Generated Id ",
                                    React.createElement("br", null),
                                    React.createElement(
                                        "strong",
                                        null,
                                        this.props.message
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "postBackData" },
                            React.createElement(
                                "strong",
                                null,
                                this.state.loading ? this.state.loadingText : ''
                            ),
                            React.createElement(
                                "strong",
                                null,
                                this.state.data.title
                            )
                        )
                    );
                }
            }]);

            return Weekly;
        }(React.Component);

        var newID = global.genId(_this);
        ReactDOM.render(React.createElement(Weekly, { message: newID }), document.getElementById(newID));
    }

    return {
        init: init
    };
});