import { useState } from "react";
type Language = "javascript" | "python" | "curl" | "ruby" | "rust";

type CodeExamples = {
  [K in Language]: string;
};

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState<Language>("javascript");

  const codeExamples: CodeExamples = {
    javascript: `const fetch = require('node-fetch');

const url = 'https://api.apistack.site/api/v1/quotes/quote/random';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}`,
    python: `import requests

url = 'https://api.apistack.site/api/v1/quotes/quote/random'
headers = {'accept': 'application/json'}

try:
    response = requests.get(url, headers=headers)
    data = response.json()
    print(data)
except Exception as e:
    print(e)`,
    curl: `curl --request GET \
    --url 'https://api.apistack.site/api/v1/quotes/quote/random' \
    --header 'accept: application/json'`,

    ruby: `require 'net/http'
require 'uri'
require 'json'

url = 'https://api.apistack.site/api/v1/quotes/quote/random'

begin
  uri = URI(url)
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = (uri.scheme == 'https') # Enable SSL for HTTPS

  request = Net::HTTP::Get.new(uri)
  request['Accept'] = 'application/json'

  response = http.request(request)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts data
  else
    puts "HTTP Error: #{response.code} - #{response.message}"
  end
rescue StandardError => e
  puts "An error occurred: #{e.message}"
end
`,
    rust: `use reqwest::Error;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Error> {
    let url = "https://api.apistack.site/api/v1/quotes/quote/random";

    // Send the GET request
    let response = reqest::Client::new()
        .get(url)
        .header("Accept", "application/json")
        .send()
        .await?;

    // Check if the response status is success
    if response.status().is_success() {
        let data: Value = response.json().await?;
        println!("{:#?}", data); // Pretty-print the JSON response
    } else {
        println!("HTTP Error: {}", response.status());
    }

    Ok(())
}
`,
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
        <pre className="text-slate-100 font-mono text-sm whitespace-pre ">
          {codeExamples[activeTab]}
        </pre>
      </div>
    </div>
  );
};

export default CodeTabs;
