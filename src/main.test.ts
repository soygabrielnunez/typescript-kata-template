import { HelloWorld } from './main'

describe('main.ts', () => {
  it('should say hello world', () => {
    expect(HelloWorld()).toBe('Hello, World!')
  })
})
