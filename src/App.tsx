import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CyclesProvider } from './context/cycles'
import { ResponsivenessProvider } from './context/responsiveness'
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter'

axeAccessibilityReporter()

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResponsivenessProvider>
        <CyclesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CyclesProvider>
      </ResponsivenessProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
