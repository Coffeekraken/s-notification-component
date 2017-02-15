Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _prependChild = require('coffeekraken-sugar/js/dom/prependChild');

var _prependChild2 = _interopRequireDefault(_prependChild);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _getAnimationProperties = require('coffeekraken-sugar/js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 		SNotificationComponent
 * @extends 	SWebComponent
 * Display nice and fully customizable toast like notification.
 * Features :
 * - Align on the side you want
 * - Quick title, body and icon options
 * - Actions management
 * - Dismissable option allow to dismiss notification by click on it
 *
 * @example 	html
 * <s-notification title="Hello World" body="Pellentesque fringilla velit at tempor eleifend. Vestibulum finibus lacus et."></s-notification>
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

//
// * @event
//  * @name 		dismiss
//  * Event dispatched when the notification is dismissed. A value is attached to this event if provided.
// */

var SNotificationComponent = function (_SWebComponent) {
	_inherits(SNotificationComponent, _SWebComponent);

	function SNotificationComponent() {
		_classCallCheck(this, SNotificationComponent);

		return _possibleConstructorReturn(this, (SNotificationComponent.__proto__ || Object.getPrototypeOf(SNotificationComponent)).apply(this, arguments));
	}

	_createClass(SNotificationComponent, [{
		key: 'componentWillMount',


		/**
   * Component will mount
  	 * @definition 		SWebComponent.componentWillMount
   * @protected
   */
		value: function componentWillMount() {
			_get(SNotificationComponent.prototype.__proto__ || Object.getPrototypeOf(SNotificationComponent.prototype), 'componentWillMount', this).call(this);
			this._refs = {};
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			var _this2 = this;

			_get(SNotificationComponent.prototype.__proto__ || Object.getPrototypeOf(SNotificationComponent.prototype), 'componentMount', this).call(this);

			// create the container
			this._createContainer();

			// handle content
			this._buildHtml();

			// add class
			this.classList.add(this._componentNameDash);

			// add type class
			if (this.props.type) {
				this.classList.add(this._componentNameDash + '--' + this.props.type);
			}

			// if the notification has an action, add the interactive class
			if (this.props.action || this.props.dismissable) {
				this.classList.add(this._componentNameDash + '--interactive');
			}

			// push the element inside his container
			if (this.props.side.substr(0, 1) === 'b') {
				(0, _prependChild2.default)(this, this._refs.container);
			} else {
				this._refs.container.appendChild(this);
			}

			// handle dismissable
			if (this.props.dismissable) {
				this.addEventListener('click', function (e) {
					_this2.dismiss();
				});
			}

			// listen for click on dismiss elements inside notification
			[].forEach.call(this.querySelectorAll('[' + this._componentNameDash + '-dismiss]'), function (dismissElm) {
				dismissElm.addEventListener('click', function (e) {
					var idx = e.currentTarget.getAttribute(_this2._componentNameDash + '-action-idx');
					_this2.dismiss(_this2.props.actions[idx].value);
					e.stopPropagation();
				});
			});

			// handle timeout
			if (this.props.timeout) {
				this._dismissTimeout = setTimeout(function () {
					// dismiss the notification
					_this2.dismiss();
				}, this.props.timeout);
			}
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   * @protected
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			_get(SNotificationComponent.prototype.__proto__ || Object.getPrototypeOf(SNotificationComponent.prototype), 'componentUnmount', this).call(this);
		}

		/**
   * Component will receive prop
   * @definition 		SWebComponent.componentWillReceiveProp
   * @protected
   */

	}, {
		key: 'componentWillReceiveProp',
		value: function componentWillReceiveProp(name, newVal, oldVal) {
			switch (name) {}
		}

		/**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition 		SWebComponent.render
   * @protected
   */

	}, {
		key: 'render',
		value: function render() {
			_get(SNotificationComponent.prototype.__proto__ || Object.getPrototypeOf(SNotificationComponent.prototype), 'render', this).call(this);
		}

		/**
   * Create the notifications container if needed
   */

	}, {
		key: '_createContainer',
		value: function _createContainer() {
			if (SNotificationComponent.notificationsContainers[this.props.side]) {
				this._refs.container = SNotificationComponent.notificationsContainers[this.props.side];
				return;
			}
			var containerElm = document.createElement('div');
			containerElm.className = this._componentNameDash + '-container';
			containerElm.classList.add(this._componentNameDash + '--' + this.props.side);
			// save reference for others notifications
			SNotificationComponent.notificationsContainers[this.props.side] = containerElm;
			// append to document
			document.body.appendChild(containerElm);
			// save the reference
			this._refs.container = containerElm;
		}

		/**
   * Build the notification html
   */

	}, {
		key: '_buildHtml',
		value: function _buildHtml() {
			var _this3 = this;

			// template
			var metasHtml = [];
			metasElm = document.createElement('div'), actionsHtml = [], actionsElm = document.createElement('ul');
			if (this.props.icon) {
				metasHtml = metasHtml.concat(['<i class="' + this.props.icon + ' ' + this._componentNameDash + '__icon"></i>']);
			}
			if (this.props.title) {
				metasHtml = metasHtml.concat(['<h1 class="' + this._componentNameDash + '__title">', this.props.title, '</h1>']);
			}
			if (this.props.body) {
				metasHtml = metasHtml.concat(['<p class="' + this._componentNameDash + '__body">', this.props.body, '</p>']);
			}
			if (this.props.actions.length) {
				// create actions
				this.props.actions.forEach(function (action, idx) {
					// extend default action with action
					action = (0, _merge2.default)({}, _this3.props.actionsProps, action);
					// create the action html
					actionsHtml = actionsHtml.concat(['<li class="' + _this3._componentNameDash + '__action" ' + (action.dismiss ? _this3._componentNameDash + '-dismiss' : "") + ' ' + _this3._componentNameDash + '-action-idx="' + idx + '">', '<a class="' + _this3._componentNameDash + '__action-link ' + (action.class ? action.class : '') + '" ' + (action.href ? 'href="' + action.href + '"' : '') + ' ' + (action.target ? 'target="' + action.target + '"' : '') + '>', action.label, '</a>', '</li>']);
				});
			}

			// append classes
			metasElm.className = this._componentNameDash + '__metas';
			actionsElm.className = this._componentNameDash + '__actions';

			// create structure
			metasElm.innerHTML = metasHtml.join("\n");
			actionsElm.innerHTML = actionsHtml.join("\n");

			// inject the html
			if (this.props.title || this.props.body) {
				(0, _prependChild2.default)(metasElm, this);
			}
			if (this.props.actions.length) {
				this.appendChild(actionsElm);
			}
			// this.innerHTML = template.join("\n");
		}

		/**
   * Dismiss the notification
   * @param 		{Mixed} 		[data=null]		The data passed to the dismiss
   */

	}, {
		key: 'dismiss',
		value: function dismiss() {
			var _this4 = this;

			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			// handle data
			if (!data) data = this.props.value;
			// clear the dismiss timeout
			clearTimeout(this._dismissTimeout);
			// adding out class
			this.classList.add(this._componentNameDash + '--out');
			var animationProps = (0, _getAnimationProperties2.default)(this);
			setTimeout(function () {
				// dismiss the notification
				_this4.parentNode.removeChild(_this4);
			}, animationProps.totalDuration);
			// callback
			this.props.onDismiss && this.props.onDismiss(data);
			// dispatch event
			this.dispatchComponentEvent('dismiss', data);
		}
	}], [{
		key: 'notify',


		/**
   * Static notification factory
   * @param 		{Object} 		props 		The notification property object
   * @param 		{String} 		[tagname=s-notification] 	The component tagname to create
   * @return 		{SNotificationComponent} 		The notification dom element
   * @example 	js
   * import SNotificationComponentClass from 'coffeekraken-s-notification-component/class'
   * SNotificationComponentClass.notify({
   * 	title : "Hello World",
   * 	body : "In eleifend, tellus scelerisque auctor ultrices, velit neque porttitor ante, non fermentum ligula sem in mauris. Quisque nunc sem, tincidunt."
   * });
   */
		value: function notify(props) {
			var tagname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's-notification';

			var notificationElm = document.createElement(tagname);
			notificationElm.setProps(props);
			// append to body
			document.body.appendChild(notificationElm);
			// return the notification elm
			return notificationElm;
		}

		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */


		/**
   * Store the different notifications containers
   * groupes by side
   * @protected
   */

	}, {
		key: 'css',


		/**
   * Css
   * @protected
   */
		value: function css(componentName, componentNameDash) {
			return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tdisplay : block;\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container {\n\t\t\t\tposition: fixed;\n\t\t\t\tz-index:10;\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container.' + componentNameDash + '--tr {\n\t\t\t\ttop: 0; right:0;\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container.' + componentNameDash + '--tl {\n\t\t\t\ttop: 0; left:0;\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container.' + componentNameDash + '--t {\n\t\t\t\ttop: 0; left:50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container.' + componentNameDash + '--br {\n\t\t\t\tbottom: 0; right:0;\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container.' + componentNameDash + '--bl {\n\t\t\t\tbottom: 0; left:0;\n\t\t\t}\n\t\t\t.' + componentNameDash + '-container.' + componentNameDash + '--b {\n\t\t\t\tbottom: 0; left:50%;\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t}\n\t\t\t.' + componentNameDash + '--interactive {\n\t\t\t\tcursor:pointer;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__actions {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-flow: row wrap;\n\t\t\t\tlist-style: none;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__action {\n\t\t\t\tflex:1 1 auto;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t';
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {

				/**
     * Specify the notification title
     * @prop
     * @type 		{String}
     */
				title: null,

				/**
     * Specify the body of the notification
     * @prop
     * @type 		{String}
     */
				body: null,

				/**
     * Specify the value that will be passed with the dismiss event when the notification is dismissed by clicking on it
     * or when clicking an action that has no value assigned.
     * @prop
     * @type 		{Mixed}
     */
				value: null,

				/**
     * Specify the default action object
     * @prop
     * @type 		{Object}
     */
				actionsProps: {},

				/**
     * Specify some actions
     * Action object:
     * ```
     * {
     * 	label : 'Ok',
     * 	dismiss : true,
     * 	data : 'Any data you want to pass on click',
     * 	href : null,
     * 	target : '_blank'
     * }
     * ```
     * @prop
     * @type 		{String}
     */
				actions: [],

				/**
     * Set if is dismissable by clicking on it or not
     * @prop
     * @type 		{Boolean}
     */
				dismissable: true,

				/**
     * Specify the notification type for styling purpose
     * @prop
     * @type 		{String}
     */
				type: null,

				/**
     * Specify the life time of the notification
     * @prop
     * @type 		{Number}
     */
				timeout: null,

				/**
     * Specify the side where the notification has to appear
     * @prop
     * @type 		{String}
     * @values 		tl | t | tr | bl | b | br
     */
				side: 'tr',

				/**
     * Callback on dismiss
     * @prop
     * @type 		{Function}
     */
				onDismiss: null

			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   * @protected
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SNotificationComponent;
}(_SWebComponent3.default);

SNotificationComponent.notificationsContainers = {};
exports.default = SNotificationComponent;