import { SignIn } from 'app/blog-sign-in/SignIn'
import type { NextApplicationPage } from './_app'

const UserLogin: NextApplicationPage = () => <SignIn type='USER' />

export default UserLogin

UserLogin.requireAuth = false
UserLogin.authType = 'USER'
