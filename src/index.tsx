import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	// @ts-ignore
	window.document.getElementById(process.env.REACT_APP_ROOT_ID),
)
