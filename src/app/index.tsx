import { Routing } from '@/pages'

import { withProviders } from './providers'

import '@/shared/assets/fonts/index.css'
import './index.css'

const App = () => <Routing />

export default withProviders(App)
