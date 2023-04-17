import { render } from '@testing-library/react'
import { SignIn } from '../SignIn'

describe('<SignIn />', () => {
  let signInElement: HTMLElement

  beforeEach(() => {
    const { getByText } = render(<SignIn type='USER' />)
    signInElement = getByText(/SignIn/)
  })

  it('it should render the component', () => {
    expect(signInElement).toBeInTheDocument()
  })

  it('it should accept ADMIN as a prop value', () => {
    const { getAllByText } = render(<SignIn type='ADMIN' />)
    const adminSignInElement = getAllByText(/SignIn/)

    expect(adminSignInElement[0]).toBeInTheDocument()
  })

  it('it should accept USER as a prop value', () => {
    expect(signInElement).toBeInTheDocument()
  })
})
