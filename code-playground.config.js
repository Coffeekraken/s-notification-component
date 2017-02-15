module.exports = {
	// server port
	port : 3002,

	// logo
	logo : null,

	// title
	title : 's-notification-component',

	// layout
	layout : 'right',

	// compile server
	compileServer : {

		// compile server port
		port : 4002

	},

	// editors
	editors : {
		html : {
			language : 'html',
			data : `
				<s-notification timeout="3000" title="Hello World" body="Nulla accumsan fermentum sagittis. Suspendisse potenti. Integer tristique metus nec dui lacinia consectetur. Nulla vitae nisi congue, sollicitudin turpis ut.">
				</s-notification>
				<s-notification side="b" type="secondary" title="Hello World" body="Sed sit amet feugiat justo, in molestie orci. Praesent facilisis sapien sed mauris bibendum, congue euismod justo efficitur. Cras hendrerit eros id leo viverra, id iaculis tellus aliquet. Nunc sagittis.">
				</s-notification>
				<s-notification dismissable="false" type="primary" title="Hello World" body="Sed sit amet feugiat justo, in molestie orci. Praesent facilisis sapien sed mauris bibendum, congue euismod justo efficitur. Cras hendrerit eros id leo viverra, id iaculis tellus aliquet. Nunc sagittis.">
				</s-notification>
			`
		},
		css : {
			language : 'sass',
			data : `
				@import 'node_modules/coffeekraken-sugar/index';
				@import './index';
				@include s-init();
				@include s-classes();
				@include s-button-classes(
					$colors : primary
				);
				@include s-notification-classes(
					$colors : default primary secondary
				);
				body {
					background : linear-gradient(to bottom, #f6f7fc 0%, #d5e1e8 40%);
				}
			`
		},
		js : {
			language : 'js',
			data : `
				import 'webcomponents.js/webcomponents-lite'
				import './dist/index'
				import SNotificationComponentClass from './dist/class'
				SNotificationComponentClass.notify({
					title : "Custom notification",
					body : "Nulla ac pretium erat, vitae accumsan ex. Cras mattis sem.",
					dismissable : false,
					timeout : 10000,
					actions : [{
						label : "Go to google",
						href : "http://google.com",
						target : "_blank",
						dismiss : false,
						class : "btn btn--block btn--primary"
					}]
				});
			`
		}
	}
}
