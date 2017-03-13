//import additional scripts
define(["jquery", "react", "ReactDOM", 'global'], function ($, React, ReactDOM, global) {

    //init function for page controller js
    function init(_this) {

        class Weekly extends React.Component {

            constructor(props) {
                super(props);
                // This binding is necessary to make `this` work in the callback
                this.getData = this.getData.bind(this);
                this.state = {
                    data: [],
                    loading: true,
                    loadingText: 'Loading JSON..'
                };
            }

            getData() {
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
                            loadingText: 'Getting new JSON..'
                        });
                    }.bind(this),
                    error: function (xhr, status, err) {
                        console.log(err);
                    }.bind(this)
                });

                var newID = global.genId(_this);
                ReactDOM.render(React.createElement(Weekly, { message: newID }), document.getElementById(newID));
            }

            componentDidMount() {
                this.getData(this.state.element);
            }

            render() {
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
        }

        var newID = global.genId(_this);
        ReactDOM.render(React.createElement(Weekly, { message: newID }), document.getElementById(newID));
    }

    return {
        init: init
    };
});