import { expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import Button from './Button'

const onClick = () => {
    console.log('click click')
}

it('should render', () => {
    expect(Button).toBeTruthy()

    const wrapper = renderer.create(<Button onClick={onClick}>Primary</Button>)
    const wrapperJSON = wrapper.toJSON()

    expect(wrapperJSON.props['data-test-id']).toBe('button')
})
