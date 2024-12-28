import React, { createContext, Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'
import SensorContext from './contexts'

const Command = {
  STOP_SESSION : 0,
  START_SESSION : 1,
  PAUSE_SESSION : 2,
}

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const [sensorData, setSensorData] = useState({
      mq135   : [0, 0, 0, 0, 0],
      mq136   : [0, 0, 0, 0, 0],
      mq137   : [0, 0, 0, 0, 0],
      mq138   : [0, 0, 0, 0, 0],
      mq2     : [0, 0, 0, 0, 0],
      mq3     : [0, 0, 0, 0, 0],
      tgs822  : [0, 0, 0, 0, 0],
      tgs2620 : [0, 0, 0, 0, 0]
    })

  useEffect(() => {
    if ('EventSource' in window) {
      const source = new EventSource('http://127.0.0.1:5000/sensor_feed');

      source.addEventListener('message', function(e) {
        const sdata = JSON.parse(e.data);
        setSensorData(sdata);
      }, false);

      source.addEventListener('open', function(e) {
        console.log("successful connection.");
      }, false);

      source.addEventListener('error', function(e) {
        console.log(e);
      }, false);

      const post = fetch(
        'http://127.0.0.1:5000/session',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            command: Command.START_SESSION,
          })
        }

      )
    }
  }, []);


  return (
    <SensorContext.Provider value={{sensorData : sensorData}}>
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
    </SensorContext.Provider>
  )
}

export default App
