interface useAccountsType {
  validateStrongPassword: (password: string) => boolean | string
}

export const useAccount = (): useAccountsType => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const validateStrongPassword = (password: string): boolean | string => {
    const formatted = password.trim() // removes whitespace

    // at least 12 characters, 1 number, 1 lowercase letter, and 1 uppercase letter
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\W\w]{8,}$/
    const errorMessage =
      'The password must 8 characters long, include number, upper and lowercase letter'

    return regex.test(formatted) || errorMessage
  }

  return {
    validateStrongPassword
  }
}
