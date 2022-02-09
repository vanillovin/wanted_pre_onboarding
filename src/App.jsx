import './App.css';
import Toggle from './components/Toggle';
import Tag from './components/Tag';
import ClickToEdit from './components/ClickToEdit';
import Modal from './components/Modal';
import Tab from './components/Tab';
import AutoComplete from './components/AutoComplete';

function App() {
  return (
    <div className='App'>
      <AutoComplete />
      <Tab />
      <Toggle />
      <Modal />
      <Tag />
      <ClickToEdit />
    </div>
  );
}

export default App;