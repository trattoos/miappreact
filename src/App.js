import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.1)'
}

const estilo = (bg = '#333') => ({
  backgroundColor : bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({ children }) => {
  return (
    <li style={{...estilo2, ...estilo()}} class='clase-li'>{children}</li>
  )
}
const App = () => {
  const valor = 'triste'
  return (
    <ul className='clase-css'>
      <Li estado='feliz'>Valor de li</Li>
    </ul>
  );
}

export default App;
