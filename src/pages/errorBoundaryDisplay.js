import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import ErrorBoundaryTestPage from './ErrorBoundaryTestPage'

function ErrorBoundaryDisplay() {
  return (
    <>
    <ErrorBoundary>
    <ErrorBoundaryTestPage heroName="Batman"/>
    <ErrorBoundaryTestPage heroName ="Superman" />
    <ErrorBoundaryTestPage heroName ="Joker" />
    </ErrorBoundary>
    </>
  )
}

export default ErrorBoundaryDisplay