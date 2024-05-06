import { Link, NavLink } from "react-router-dom"
import AppRouter from "./router/AppRouter"

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
