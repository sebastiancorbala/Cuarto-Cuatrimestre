import './App.css'; //estilos globales
import TablaPokemon from './components/DataPokemon'; //el componente tabla de pokemones
import { ThemeProvider, createTheme } from '@mui/material/styles';// Importa ThemeProvider y createTheme de MUI


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>{/* Envuelve la aplicación con el ThemeProvider. Lo puse porque sino me daba error y el chatgpt me dijo que lo pusiera */}
      <div className="App">
        <TablaPokemon /> {/*el componente de la tabla pokemon */}
      </div>
    </ThemeProvider>
  );
}

export default App;
