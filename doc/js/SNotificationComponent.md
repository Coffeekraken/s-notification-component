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


### value

Specify the value that will be passed with the dismiss event when the notification is dismissed by clicking on it
or when clicking an action that has no value assigned.

Type : **{ Mixed }**

Default : **null**


### actionsProps

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
	href : null,
	target : '_blank'
}
```

Type : **{ Array<Object> }**

Default : **[]**


### dismissable

Set if is dismissable by clicking on it or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**


### type

Specify the notification type for styling purpose

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### timeout

Specify the life time of the notification

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **null**


### side

Specify the side where the notification has to appear

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Values : **tl,t,tr,bl,b,br**

Default : **tr**


### onDismiss

Callback on dismiss

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**




## Methods


### notify

Static notification factory. You need to have the actual component registered into your page.


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
props  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The notification property object  |  required  |
tagname  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The component tagname to create  |  optional  |  s-notification

Return **{ SNotificationComponent }** The notification dom element

#### Example
```js
	import SNotificationComponentClass from 'coffeekraken-s-notification-component/class'
SNotificationComponentClass.notify({
	title : "Hello World",
	body : "In eleifend, tellus scelerisque auctor ultrices, velit neque porttitor ante, non fermentum ligula sem in mauris. Quisque nunc sem, tincidunt."
});
```
**Static**


### dismiss

Dismiss the notification


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
data  |  **{ Mixed }**  |  The data passed to the dismiss  |  optional  |  null