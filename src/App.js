import a18n from 'a18n'
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [language, setLanguage] = useState('zh');
  useEffect(async () => {
    await a18n.setLocale(language);
    setLanguage(language);
  }, []);

  const changeLanguage = async () => {
    const temp = language === 'zh' ? 'en' : 'zh';
    setLanguage(temp);
    await a18n.setLocale(temp);
    await a18n.setLocale(temp);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {a18n('学习 React')}
        </a>
        <button onClick={changeLanguage} style={{marginTop: '20px'}}>{a18n('切换语言')}</button>
      </header>
    </div>
  );
}

export default App;
