import * as Enzyme from 'enzyme'
import * as React from 'react'
import ReactIs from 'react-is'
import TextInput from './TextInput'

describe('src/components/TextInput', () => {
	it('should exist', () => {
		expect(TextInput).toBeDefined()
	})

	it('should be a React component', () => {
		expect(ReactIs.isValidElementType(TextInput))
	})

	it('should render without crashing', () => {
		expect(() => <TextInput />).not.toThrow()
	})

	it('should render an <input> element', () => {
		const wrapper = Enzyme.shallow(
			<TextInput />
		)

		expect(wrapper.find('input').length).toBe(1)
	})
})
