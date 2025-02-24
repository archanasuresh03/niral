import { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import DisplayText from './components/DisplayText';
export default function App() {
  const [extractedText, setExtractedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleUploadSuccess = (data) => {
    setExtractedText(data.extracted_text);
    setTranslatedText(data.translated_text);
  };
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">OCR & Translation</h1>
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        <DisplayText extractedText={extractedText} translatedText={translatedText} />
      </div>
    </div>
  );
  
}
