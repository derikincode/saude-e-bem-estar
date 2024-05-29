import React, { useState } from 'react';
import './App.css';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleCssChange = (event) => {
    setCssCode(event.target.value);
  };

  const handleJsChange = (event) => {
    setJsCode(event.target.value);
  };

  return (
    <div className="App">
      <div className="Code-container">
        <div className="Code-input-container">
        <div class="TitleCode">
        <label class="html" htmlFor="html-input">HTML</label>
        </div>
          <textarea
            className="Code-input"
            value={htmlCode}
            onChange={handleHtmlChange}
            placeholder="Digite seu código HTML aqui..."
          />
        </div>
        <div className="Code-input-container">
        <div class="TitleCode">
        <label class="css" htmlFor="html-input">CSS</label>
        </div>
          <textarea
            className="Code-input"
            value={cssCode}
            onChange={handleCssChange}
            placeholder="Digite seu código CSS aqui..."
          />
        </div>
        <div className="Code-input-container">
        <div class="TitleCode">
        <label class="js" htmlFor="html-input">JS</label>
        </div>
          <textarea
            className="Code-input"
            value={jsCode}
            onChange={handleJsChange}
            placeholder="Digite seu código JavaScript aqui..."
          />
        </div>
      </div>
      <div className="Preview">
        <style>{cssCode}</style>
        <script>{jsCode}</script>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </div>
    </div>
  );
}

export default App;
