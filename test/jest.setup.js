import { jest } from '@jest/globals'
import '@testing-library/jest-dom'
import 'cross-fetch/polyfill'

jest.useFakeTimers()

jest.mock('src/config', () => ({
  GRAPHQL_API_URL: 'http://test.com/graphql',
}))
