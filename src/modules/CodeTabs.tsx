import { useState } from "react";

type Language = "javascript" | "python" | "curl";

type CodeExamples = {
  [K in Language]: string;
};

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState<Language>("javascript");

  const codeExamples: CodeExamples = {
    javascript: `const fetch = require('node-fetch');

const url = 'https://example.com/public/quotes/quote/random';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}`,
    python: `import requests

url = 'https://example.com/public/quotes/quote/random'
headers = {'accept': 'application/json'}

try:
    response = requests.get(url, headers=headers)
    data = response.json()
    print(data)
except Exception as e:
    print(e)`,
    curl: `curl --request GET \
    --url 'https://example.com/public/quotes/quote/random' \
    --header 'accept: application/json'`,
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-slate-900 rounded-lg shadow-xl">
      <div className="flex gap-1 mb-2">
        {(Object.keys(codeExamples) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveTab(lang)}
            className={`px-4 py-2 rounded-t-lg font-medium capitalize transition-colors
              ${
                activeTab === lang
                  ? "bg-slate-800 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
        <pre className="text-slate-100 font-mono text-sm whitespace-pre">
          {codeExamples[activeTab]}
        </pre>
      </div>
    </div>
  );
};

export default CodeTabs;
