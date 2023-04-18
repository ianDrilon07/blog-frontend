import { render, screen, waitFor } from '@testing-library/react'
import { default as userEvent } from '@testing-library/user-event'
import { SignIn } from '../SignIn'

describe('<SignIn />', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    render(<SignIn type='USER' />)
  })

  it('display required field error', async () => {
    await user.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument()
      expect(screen.getByText('Password is required')).toBeInTheDocument()
    })
  })
})
