import React from 'react'
import {Component} from 'react'
import { Link } from 'react-router-dom'


export class ErrorBoundary extends Component {
    constructor(props) {
    super(props)
    this.state = {
        hasError: false,
        error: null,}
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true, error: error}
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components above and re-render with error message
    console.log('logging', error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
              <>
                <h1 className="error">Oops!!! something went boom!!</h1>
                <div className="button">
                  <Link to="/" className="btn">
                    Homepage
                  </Link>
                </div>
              </>
            );
        }
        return this.props.children
    }
}