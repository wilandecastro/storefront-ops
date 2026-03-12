import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import { describe, it, expect } from 'vitest'

describe('Home Page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText(/Next.js logo/i)
    expect(logo).toBeInTheDocument()
  })
})
