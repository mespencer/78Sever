(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Controller = require('./modules/Homepage/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.modules = {};

window.modules.Homepage = React.createElement(_Controller2.default, null);

},{"./modules/Homepage/Controller":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
  _inherits(Controller, _React$Component);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Controller).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: 'render',
    value: function render() {
      var width = void 0;
      if (this.props.width && this.props.width > 0 && this.props.width <= 12) {
        width = this.props.width;
      } else {
        width = 6;
      }

      return React.createElement(_Layout2.default, {
        title: this.props.title,
        content: this.props.children,
        width: width,
        actions: this.props.actions
      });
    }
  }]);

  return Controller;
}(React.Component);

Controller.propTypes = {
  actions: React.PropTypes.node,
  children: React.PropTypes.node,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number
};

exports.default = Controller;

},{"./Layout":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var header = React.createElement(
        "span",
        null,
        this.props.title,
        React.createElement(
          "div",
          { className: "inline-block pull-right box-header-actions" },
          this.props.actions
        )
      );

      return React.createElement(
        "div",
        { className: "col-xs-12 col-sm-" + this.props.width + " box-container" },
        React.createElement(
          ReactBootstrap.Panel,
          { header: header, className: "full-height full-width" },
          this.props.content
        )
      );
    }
  }]);

  return Layout;
}(React.Component);

Layout.propTypes = {
  actions: React.PropTypes.node,
  content: React.PropTypes.node,
  title: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired
};

exports.default = Layout;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Controller = require('../MessageBoard/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
  _inherits(Controller, _React$Component);

  function Controller() {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controller).call(this));

    _this.state = {
      config: [{ id: 0, width: 6, content: React.createElement(_Controller2.default, { width: 6, key: 0 }) }]
    };
    return _this;
  }

  _createClass(Controller, [{
    key: 'render',
    value: function render() {
      return React.createElement(_Layout2.default, { config: this.state.config });
    }
  }]);

  return Controller;
}(React.Component);

exports.default = Controller;

},{"../MessageBoard/Controller":7,"./Layout":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var boxes = this.props.config.map(function (box) {
        return box.content;
      });

      return React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "row" },
          boxes
        )
      );
    }
  }]);

  return Layout;
}(React.Component);

Layout.propTypes = {
  config: React.PropTypes.array.isRequired
};

exports.default = Layout;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
  _inherits(Controller, _React$Component);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Controller).apply(this, arguments));
  }

  _createClass(Controller, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        null,
        "Loading..."
      );
    }
  }]);

  return Controller;
}(React.Component);

exports.default = Controller;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Controller = require('../Loader/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _Controller3 = require('../Box/Controller');

var _Controller4 = _interopRequireDefault(_Controller3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controller = function (_React$Component) {
  _inherits(Controller, _React$Component);

  function Controller() {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controller).call(this));

    _this.state = {
      loading: false,
      messages: [{ id: 0, text: 'This is a message', removed: false }, { id: 1, text: 'This is a different message', removed: false }]
    };

    _this.updating = false;

    _this.updateMessages = _this.updateMessages.bind(_this);
    _this.onResponse = _this.onResponse.bind(_this);
    _this.markAsRead = _this.markAsRead.bind(_this);
    return _this;
  }

  _createClass(Controller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateMessages();
      setInterval(this.updateMessages, 5000);
    }
  }, {
    key: 'onResponse',
    value: function onResponse(data) {
      if (data) {
        this.setState({
          loading: false,
          messages: data
        });
        this.updating = false;
      }
    }
  }, {
    key: 'updateMessages',
    value: function updateMessages() {
      if (!this.updating) {
        this.updating = true;
        $.getJSON('/message/list', this.onResponse);
      }
    }
  }, {
    key: 'markAsRead',
    value: function markAsRead(index) {
      var messages = this.state.messages.slice(0);
      for (var i = 0; i < messages.length; i++) {
        if (messages[i].id === index) {
          messages[i].removed = true;
        }
      }

      this.setState({
        messages: messages
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = React.createElement(_Layout2.default, { fill: true, messages: this.state.messages, markAsRead: this.markAsRead });
      var loading = React.createElement(_Controller2.default, null);
      var actions = React.createElement(
        'span',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(ReactBootstrap.Glyphicon, { glyph: 'search' })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(ReactBootstrap.Glyphicon, { glyph: 'plus' })
        )
      );

      return React.createElement(
        _Controller4.default,
        { title: 'Message Board', width: this.props.width, actions: actions },
        this.state.loading ? loading : content
      );
    }
  }]);

  return Controller;
}(React.Component);

Controller.propTypes = {
  width: React.PropTypes.number.isRequired
};

exports.default = Controller;

},{"../Box/Controller":2,"../Loader/Controller":6,"./Layout":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.props.messages.map(function (message, index) {
        var content = React.createElement(_Message2.default, {
          id: message.id,
          text: message.text,
          markAsRead: _this2.props.markAsRead,
          key: index
        });
        return message.removed ? null : content;
      });

      return React.createElement(
        ReactBootstrap.Table,
        null,
        React.createElement(
          'tbody',
          null,
          messages
        )
      );
    }
  }]);

  return Layout;
}(React.Component);

Layout.propTypes = {
  markAsRead: React.PropTypes.func.isRequired,
  messages: React.PropTypes.array.isRequired
};

exports.default = Layout;

},{"./Message":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Message).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Message, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.markAsRead(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          this.props.text
        ),
        React.createElement(
          "td",
          { className: "close-container" },
          React.createElement(ReactBootstrap.Glyphicon, { glyph: "remove", onClick: this.handleClick })
        )
      );
    }
  }]);

  return Message;
}(React.Component);

Message.propTypes = {
  id: React.PropTypes.number.isRequired,
  markAsRead: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

exports.default = Message;

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
