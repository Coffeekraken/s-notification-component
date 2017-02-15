# SNotificationComponent

Extends **SWebComponent**

Display nice and fully customizable toast like notification.
Features :
- Align on the side you want
- Quick title, body and icon options
- Actions management
- Dismissable option allow to dismiss notification by click on it


### Example
```html
	<s-notification title="Hello World" body="Pellentesque fringilla velit at tempor eleifend. Vestibulum finibus lacus et."></s-notification>
```
Author : Olivier Bossel <olivier.bossel@gmail.com>




## Attributes

Here's the list of available attribute to set on the element.

### title

Specify the notification title

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### body

Specify the body of the notification

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### action

Default action on click

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### value

Specify the value that will be passed with the dismiss event when the notification is dismissed by clicking on it

Type : **{ Mixed }**

Default : **null**


### defaultAction

Specify the default action object

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**


### actions

Specify some actions
Action object:
```
{
	label : 'Ok',
	dismiss : true,
	data : 'Any data you want to pass on click',
	href : null,
	target : '_blank'
}
```

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **[]**


### dismissable

Set if is dismissable by clicking on it or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**


### type

Specify the notification type

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### timeout

Specify the live time of the notification

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **null**


### side

Specify the side where the notification has to appear

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **tr**


### onDismiss

Callback on dismiss

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**




## Methods


### notify

Notification factory


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
props  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The notification property object  |  required  |

Return **{ SNotificationComponent }** The notification dom element

#### Example
```js
	import SNotificationComponentClass from 'coffeekraken-s-notification-component/class'
SNotificationComponentClass.notify({
	title : "Hello World",
	body : "In eleifend, tellus scelerisque auctor ultrices, velit neque porttitor ante, non fermentum ligula sem in mauris. Quisque nunc sem, tincidunt."
});
```

### dismiss

Dismiss the notification


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
data  |  **{ Mixed }**  |  The data passed to the dismiss  |  optional  |  null

Default : **null) {**