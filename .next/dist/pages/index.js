'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\sabina.garagic\\Desktop\\Projects\\react-recipe-website\\pages\\index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res, recipeList;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get('http://localhost:8080/api/recipes');

              case 2:
                res = _context.sent;
                recipeList = res.data;
                return _context.abrupt('return', { recipeList: recipeList });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = { formData: { name: '', instructions: '' } };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'setForm',
    value: function setForm(prop) {
      var _this2 = this;

      return function (ev) {
        var state = _this2.state || {};
        var formData = state.formData || {};
        _this2.setState((0, _assign2.default)({}, state, {
          formData: (0, _assign2.default)({}, formData, (0, _defineProperty3.default)({}, prop, ev.target.value))
        }));
      };
    }
  }, {
    key: 'updateName',
    value: function updateName(_id) {
      var _this3 = this;

      return function (ev) {
        var state = _this3.state || {};
        var recipeList = _this3.state.recipeList || _this3.props.recipeList || [];
        var updatedElementIndex = recipeList.map(function (x) {
          return x._id;
        }).indexOf(_id);
        recipeList[updatedElementIndex].name = ev.target.value;
        _this3.setState(recipeList);
      };
    }
  }, {
    key: 'updateInstructions',
    value: function updateInstructions(_id) {
      var _this4 = this;

      return function (ev) {
        var state = _this4.state || {};
        var recipeList = _this4.state.recipeList || _this4.props.recipeList || [];
        var updatedElementIndex = recipeList.map(function (x) {
          return x._id;
        }).indexOf(_id);
        recipeList[updatedElementIndex].instructions = ev.target.value;
        _this4.setState(recipeList);
      };
    }
  }, {
    key: 'isFormInvalid',
    value: function isFormInvalid() {
      var state = this.state || {};
      var formData = state.formData || {};
      return !formData.name || !formData.instructions;
    }
  }, {
    key: 'add',
    value: function add() {
      var _this5 = this;

      return function (ev) {
        ev.preventDefault();
        var state = _this5.state || {};
        var formData = state.formData || {};
        _this5.setState((0, _assign2.default)({}, _this5.state, {
          formData: { name: '', instructions: '' }
        }));

        _axios2.default.post('http://localhost:8080/api/recipes', formData).then(function (res) {
          var state = _this5.state || {};
          var recipeList = _this5.state.recipeList || _this5.props.recipeList || [];
          _this5.setState((0, _assign2.default)({}, state, {
            recipeList: [res.data].concat(recipeList)
          }));
        }).catch(function (error) {
          return console.error(error.stack);
        });
      };
    }
  }, {
    key: 'remove',
    value: function remove(_id) {
      var _this6 = this;

      return function (ev) {
        _axios2.default.delete('http://localhost:8080/api/recipes/' + _id).then(function (res) {
          var state = _this6.state || {};
          var recipeList = _this6.state.recipeList || _this6.props.recipeList || [];
          _this6.setState((0, _assign2.default)({}, state, {
            recipeList: recipeList.filter(function (recipe) {
              return recipe._id != _id;
            })
          }));
        }).catch(function (error) {
          return console.error(error.stack);
        });
      };
    }
  }, {
    key: 'update',
    value: function update(_id) {
      var _this7 = this;

      return function (ev) {
        var state = _this7.state || {};
        var recipeList = _this7.state.recipeList || _this7.props.recipeList || [];
        var updatedElementIndex = recipeList.map(function (x) {
          return x._id;
        }).indexOf(_id);
        var updateFormData = { name: recipeList[updatedElementIndex].name, instructions: recipeList[updatedElementIndex].instructions };
        _axios2.default.put('http://localhost:8080/api/recipes/' + _id, updateFormData);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var formData = this.state.formData;

      var recipeList = this.state.recipeList || this.props.recipeList;
      return _react2.default.createElement('div', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'Recipe Box')), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'Recipe Box'), _react2.default.createElement('table', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('thead', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('tr', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('th', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Recipe Name'), _react2.default.createElement('th', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, 'Instructions'))), _react2.default.createElement('tbody', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, recipeList.map(function (recipe, i) {
        return _react2.default.createElement('tr', { key: i, 'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, _react2.default.createElement('td', {
          'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, _react2.default.createElement('input', { type: 'text', onChange: _this8.updateName(recipe._id), value: recipe.name, 'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        })), _react2.default.createElement('td', {
          'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, _react2.default.createElement('input', { type: 'text', onChange: _this8.updateInstructions(recipe._id), value: recipe.instructions, 'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        })), _react2.default.createElement('td', {
          'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, _react2.default.createElement('button', { onClick: _this8.remove(recipe._id), 'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, 'Delete')), _react2.default.createElement('td', {
          'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react2.default.createElement('button', { onClick: _this8.update(recipe._id), 'data-jsx': 1933799463,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, 'Update')));
      }))), _react2.default.createElement('br', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), _react2.default.createElement('div', { id: 'input-recipe', 'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement('form', { onSubmit: this.add(), 'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('input', {
        type: 'text',
        onChange: this.setForm('name'),
        value: formData.name,
        placeholder: 'Name', 'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement('input', {
        type: 'text',
        onChange: this.setForm('instructions'),
        value: formData.instructions,
        placeholder: 'Instructions', 'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement('button', { disabled: this.isFormInvalid(), 'data-jsx': 1933799463,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, 'Add'))), _react2.default.createElement(_style2.default, {
        styleId: 1933799463,
        css: 'table[data-jsx="1933799463"]{border-collapse:collapse}table[data-jsx="1933799463"],td[data-jsx="1933799463"],th[data-jsx="1933799463"]{border:1px solid black}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SlcsQUFHNEMsQUFFRix3QkFBZSxFQUZFIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9zYWJpbmEuZ2FyYWdpYy9EZXNrdG9wL1Byb2plY3RzL3JlYWN0LXJlY2lwZS13ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9yZWNpcGVzJyk7XHJcbiAgICBjb25zdCByZWNpcGVMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICByZXR1cm4geyByZWNpcGVMaXN0IH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZm9ybURhdGE6IHsgbmFtZTogJycsIGluc3RydWN0aW9uczogJycgfSB9XHJcbiAgfVxyXG5cclxuICBzZXRGb3JtKHByb3ApIHtcclxuICAgIHJldHVybiBldiA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fVxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHN0YXRlLmZvcm1EYXRhIHx8IHt9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBmb3JtRGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZm9ybURhdGEsIHtcclxuICAgICAgICAgIFtwcm9wXTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmFtZShfaWQpIHtcclxuICAgIHJldHVybiBldiA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge31cclxuICAgIGxldCByZWNpcGVMaXN0ID0gdGhpcy5zdGF0ZS5yZWNpcGVMaXN0IHx8IHRoaXMucHJvcHMucmVjaXBlTGlzdCB8fCBbXVxyXG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRJbmRleCA9IHJlY2lwZUxpc3QubWFwKHggPT4geC5faWQpLmluZGV4T2YoX2lkKTtcclxuICAgIHJlY2lwZUxpc3RbdXBkYXRlZEVsZW1lbnRJbmRleF0ubmFtZSA9IGV2LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICByZWNpcGVMaXN0XHJcbiAgICAgKTsgXHJcbiAgICB9XHJcbiAgfSAgXHJcblxyXG4gIHVwZGF0ZUluc3RydWN0aW9ucyhfaWQpIHtcclxuICAgIHJldHVybiBldiA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge31cclxuICAgIGxldCByZWNpcGVMaXN0ID0gdGhpcy5zdGF0ZS5yZWNpcGVMaXN0IHx8IHRoaXMucHJvcHMucmVjaXBlTGlzdCB8fCBbXVxyXG4gICAgY29uc3QgdXBkYXRlZEVsZW1lbnRJbmRleCA9IHJlY2lwZUxpc3QubWFwKHggPT4geC5faWQpLmluZGV4T2YoX2lkKTtcclxuICAgIHJlY2lwZUxpc3RbdXBkYXRlZEVsZW1lbnRJbmRleF0uaW5zdHJ1Y3Rpb25zID0gZXYudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgIHJlY2lwZUxpc3RcclxuICAgICApOyBcclxuICAgIH1cclxuICB9IFxyXG5cclxuICBpc0Zvcm1JbnZhbGlkKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHN0YXRlLmZvcm1EYXRhIHx8IHt9XHJcbiAgICByZXR1cm4gIWZvcm1EYXRhLm5hbWUgfHwgIWZvcm1EYXRhLmluc3RydWN0aW9uc1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgcmV0dXJuIGV2ID0+IHtcclxuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge31cclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBzdGF0ZS5mb3JtRGF0YSB8fCB7fVxyXG4gICAgICB0aGlzLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHtcclxuICAgICAgICBmb3JtRGF0YTogeyBuYW1lOiAnJywgaW5zdHJ1Y3Rpb25zOiAnJyB9XHJcbiAgICAgIH0pKSAgICAgIFxyXG5cclxuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9yZWNpcGVzJywgZm9ybURhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9XHJcbiAgICAgICAgICBjb25zdCByZWNpcGVMaXN0ID0gdGhpcy5zdGF0ZS5yZWNpcGVMaXN0IHx8IHRoaXMucHJvcHMucmVjaXBlTGlzdCB8fCBbXVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICByZWNpcGVMaXN0OiBbcmVzLmRhdGFdLmNvbmNhdChyZWNpcGVMaXN0KVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvci5zdGFjaykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmUoX2lkKSB7XHJcbiAgICByZXR1cm4gZXYgPT4ge1xyXG4gICAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcmVjaXBlcy8ke19pZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fVxyXG4gICAgICAgICAgY29uc3QgcmVjaXBlTGlzdCA9IHRoaXMuc3RhdGUucmVjaXBlTGlzdCB8fCB0aGlzLnByb3BzLnJlY2lwZUxpc3QgfHwgW11cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgcmVjaXBlTGlzdDogcmVjaXBlTGlzdC5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5faWQgIT0gX2lkKVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvci5zdGFjaykpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoX2lkKSB7XHJcbiAgICByZXR1cm4gZXYgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge31cclxuICAgICAgY29uc3QgcmVjaXBlTGlzdCA9IHRoaXMuc3RhdGUucmVjaXBlTGlzdCB8fCB0aGlzLnByb3BzLnJlY2lwZUxpc3QgfHwgW11cclxuICAgICAgY29uc3QgdXBkYXRlZEVsZW1lbnRJbmRleCA9IHJlY2lwZUxpc3QubWFwKHggPT4geC5faWQpLmluZGV4T2YoX2lkKTtcclxuICAgICAgY29uc3QgdXBkYXRlRm9ybURhdGEgPSB7IG5hbWU6IHJlY2lwZUxpc3RbdXBkYXRlZEVsZW1lbnRJbmRleF0ubmFtZSwgaW5zdHJ1Y3Rpb25zOiByZWNpcGVMaXN0W3VwZGF0ZWRFbGVtZW50SW5kZXhdLmluc3RydWN0aW9ucyB9O1xyXG4gICAgICBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcmVjaXBlcy8ke19pZH1gLCB1cGRhdGVGb3JtRGF0YSk7ICAgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZm9ybURhdGEgfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHJlY2lwZUxpc3QgPSB0aGlzLnN0YXRlLnJlY2lwZUxpc3QgfHwgdGhpcy5wcm9wcy5yZWNpcGVMaXN0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlJlY2lwZSBCb3g8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyPlJlY2lwZSBCb3g8L0hlYWRlcj5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+UmVjaXBlIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5JbnN0cnVjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlY2lwZUxpc3QubWFwKChyZWNpcGUsIGkpID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVOYW1lKHJlY2lwZS5faWQpfSB2YWx1ZT17cmVjaXBlLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnN0cnVjdGlvbnMocmVjaXBlLl9pZCl9IHZhbHVlPXtyZWNpcGUuaW5zdHJ1Y3Rpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy5yZW1vdmUocmVjaXBlLl9pZCl9PkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17dGhpcy51cGRhdGUocmVjaXBlLl9pZCl9PlVwZGF0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICA8ZGl2IGlkPVwiaW5wdXQtcmVjaXBlXCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGQoKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGb3JtKCduYW1lJyl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldEZvcm0oJ2luc3RydWN0aW9ucycpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5pbnN0cnVjdGlvbnN9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnN0cnVjdGlvbnNcIiAvPjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLmlzRm9ybUludmFsaWQoKX0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGFibGUsIHRkLCB0aCB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;