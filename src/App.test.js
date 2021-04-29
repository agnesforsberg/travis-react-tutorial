import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('test 2 buttons render', () => {
  render(<App />)
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(2)
})

test('test number plus 1', () => {
    render(<App/>)
    const plusButton = screen.getByRole('button', {name: '+'})
    const number = screen.getByText('1')
    fireEvent(plusButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
    expect(number.textContent).toBe('2')
})

test('test number minus 1', () => {
    render(<App/>)
    const minusButton = screen.getByRole('button', {name: '-'})
    const number = screen.getByText('1')
    fireEvent(minusButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
    expect(number.textContent).toBe('0')
})

