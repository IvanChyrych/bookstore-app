import './styles.scss'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

export function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>  
  )
}

