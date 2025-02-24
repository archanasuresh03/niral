/*export default function DisplayText({ extractedText, translatedText }) {
    return (
      <div className="mt-4 w-full max-w-lg text-center bg-gray-100 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">Extracted Text:</h2>
        <p className="p-2 text-gray-700">{extractedText}</p>
        <h2 className="text-lg font-semibold text-gray-800 mt-2">Translated Text:</h2>
        <p className="p-2 text-gray-700">{translatedText}</p>
      </div>
    );
  }
  */
  export default function DisplayText({ extractedText, translatedText }) {
    return (
      <div className="mt-6 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold text-blue-600">Extracted Text</h2>
        <p className="text-lg font-medium text-gray-900 mt-2">{extractedText || "No text extracted yet."}</p>
  
        <h2 className="text-2xl font-bold text-green-600 mt-6">Translated Text</h2>
        <p className="text-lg font-medium text-gray-900 mt-2">{translatedText || "No translation available."}</p>
      </div>
    );
  }
  
  