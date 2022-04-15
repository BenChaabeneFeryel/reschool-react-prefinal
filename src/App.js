import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { useState } from "react";
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import DarkLightColor from './layout/admin/DarkLightColor'
import DefaultLayer from './layout/admin/DefaultLayer'
import Login from './components/Login'

const LightTheme = {
  pageBackground: "white",
  textColor: "black",
  mapColor:"white",
  iconColor:"#3CB371"
};

const DarkTheme = {
  pageBackground: "#282c36",
  textColor: "white",
  mapColor:"red",
  iconColor:"#00FF7F"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  
  const [theme, setTheme] = useState("light")
  
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <DarkLightColor theme={theme} setTheme={setTheme} />
      </ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' name='Admin' render={(props)=> <DefaultLayer {...props} /> } />
          <Route path='/login' name='Login' render={(props)=> <Login {...props} /> } />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
