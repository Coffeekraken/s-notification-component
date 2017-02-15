# s-notification-classes

This file expose all the s-notification classes generation mixins to quickly style your notifications


## Mixins


### s-notification-classes

Print out the classes for notifications styling


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$colors  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The registered colors to generate  |  optional  |  default primary secondary

#### Example
```scss
	@include s-notification-classes(
	$colors : default primary secondary
);
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-notification-classes-bare

Print out the bare classes for notifications styling

#### Example
```scss
	@include s-notification-classes-bare();
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-notification-classes-style

Print out the style classes for notifications styling


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$colors  |  **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }**  |  The registered colors to generate  |  optional  |  default primary secondary

#### Example
```scss
	@include s-notification-classes-style(
	$colors : default primary secondary
);
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### s-notification-classes-animation

Print out the animation classes for notifications styling

#### Example
```scss
	@include s-notification-classes-animation();
```
Author : Olivier Bossel <olivier.bossel@gmail.com>