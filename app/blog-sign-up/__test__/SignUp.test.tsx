import { render, screen, waitFor } from '@testing-library/react'
import { default as userEvent } from '@testing-library/user-event'
import { SignUp } from '../SignUp'

describe('<SignUp />', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    render(<SignUp />)
  })

  it('it should display field error', async () => {
    await user.click(screen.getByRole('button', { name: /Sign up/i }))

    waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument()
      expect(screen.getByText('email is required')).toBeInTheDocument()
      expect(screen.getByText('Password is required')).toBeInTheDocument()
      expect(
        screen.getByText('/Your name must be between 1 to 50 characters long/i')
      ).toBeInTheDocument()
    })
  })

  it('renders policy and user agreements', () => {
    expect(
      screen.getByRole('link', { name: /User Agreement/i })
    ).toHaveAttribute('href', '#')
    expect(
      screen.getByRole('link', { name: /Privacy Policy/i })
    ).toHaveAttribute('href', '#')
  })
})
