import 'babel-polyfill'
import 'coffeekraken-sugar/js/features/all'
import SNotificationComponent from '../../../dist/index'

SNotificationComponent.notify({
	title: 'Woops',
	body: 'Something went wrong...'
})
