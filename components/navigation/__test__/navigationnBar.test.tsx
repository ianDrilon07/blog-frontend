import { screen, render } from '@testing-library/react'
import { publicNavbar } from 'data'
import NavigationBar from '../navigationBar'

describe('<NavigationBar />', () => {
  beforeEach(() => {
    render(<NavigationBar />)
  })

  test('renders logo and search input', () => {
    const logo = screen.getByLabelText('navbar-logo')
    const searchInput = screen.getByPlaceholderText('Search Post')
    expect(logo).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })

  test('renders login and sign up links', () => {
    const loginLink = screen.getByText('Login')
    const signUpLink = screen.getByText('Sign Up')
    expect(loginLink).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })

  it('it should render the logo  that redirects to home', () => {
    expect(screen.getByLabelText('navbar-logo')).toBeInTheDocument()
  })

  test('renders correct number of links', () => {
    render(<NavigationBar navlink={publicNavbar} />)
    expect(publicNavbar.length).toBe(publicNavbar.length)
  })
})
