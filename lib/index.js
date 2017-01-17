'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decorateComponentWithProps = require('decorate-component-with-props');

var _decorateComponentWithProps2 = _interopRequireDefault(_decorateComponentWithProps);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _LinkAdd = require('./LinkAdd');

var _LinkAdd2 = _interopRequireDefault(_LinkAdd);

var _linkStrategy = require('./linkStrategy');

var _linkStrategy2 = _interopRequireDefault(_linkStrategy);

var _linkifyStrategy = require('./linkifyStrategy');

var _linkifyStrategy2 = _interopRequireDefault(_linkifyStrategy);

var _styles = {
  "link": "draftJsLinkifyPlugin__link__2ittM",
  "addLink": "draftJsLinkifyPlugin__addLink__2Io_C",
  "addLinkPopover": "draftJsLinkifyPlugin__addLinkPopover__3iEzU",
  "addLinkClosedPopover": "draftJsLinkifyPlugin__addLinkClosedPopover__2R8cc",
  "addLinkButton": "draftJsLinkifyPlugin__addLinkButton__1esVb",
  "addLinkPressedButton": "draftJsLinkifyPlugin__addLinkPressedButton__2gEY5 draftJsLinkifyPlugin__addLinkButton__1esVb",
  "addLinkBottomGradient": "draftJsLinkifyPlugin__addLinkBottomGradient__3JTvy",
  "addLinkInput": "draftJsLinkifyPlugin__addLinkInput__1_gQs",
  "addLinkInputError": "draftJsLinkifyPlugin__addLinkInputError__3S-Nj",
  "addLinkConfirmButton": "draftJsLinkifyPlugin__addLinkConfirmButton__3cYcY",
  "addLinkError": "draftJsLinkifyPlugin__addLinkError__1DRV8",
  "addLinkErrorDisabled": "draftJsLinkifyPlugin__addLinkErrorDisabled__ROtoV"
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTheme = {
  link: _styles2.default.link
};

var linkPlugin = function linkPlugin() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Styles are overwritten instead of merged as merging causes a lot of confusion.

  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var component = config.component,
      _config$theme = config.theme,
      theme = _config$theme === undefined ? defaultTheme : _config$theme,
      _config$target = config.target,
      target = _config$target === undefined ? '_self' : _config$target;


  return {
    decorators: [{
      strategy: _linkifyStrategy2.default,
      component: (0, _decorateComponentWithProps2.default)(_Link2.default, { theme: theme, target: target, component: component })
    }, {
      strategy: _linkStrategy2.default,
      component: (0, _decorateComponentWithProps2.default)(_Link2.default, { theme: theme, target: target, component: component })
    }],
    LinkAdd: _LinkAdd2.default
  };
};

exports.default = linkPlugin;