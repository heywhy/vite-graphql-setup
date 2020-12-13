import '@testing-library/jest-dom'
import Index from '../Index.vue'
import App from 'src/App.vue'
import { fireEvent, render } from '@testing-library/vue'

const routes = [{ path: '/', component: Index }]

test('renders index page', async () => {
  const { findByText, findByAltText } = render(App, { routes })
  expect(await findByAltText('Vue logo')).toBeInTheDocument()
  expect(await findByText('count is: 0')).toBeInTheDocument()
})

test('increment count on button clicked', async () => {
  const { findByText, findByTestId } = render(App, { routes })
  const btn = await findByTestId('count-btn')

  await fireEvent.click(btn)
  expect(await findByText('count is: 1')).toBeInTheDocument()
})
