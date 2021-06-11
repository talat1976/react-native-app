import React from 'react'
import { StoreProvider } from './src/context/StoreContext'
import Navigation from './src/navigation/Navigation'

export default function App() {
   return (
      <StoreProvider>
         <Navigation />
      </StoreProvider>
   )
}
