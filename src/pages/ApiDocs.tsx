import React, { useState } from "react";
import { Code, ChevronRight, ChevronDown, Copy, Check } from "lucide-react";
import { apiData, CodeExample } from "@/data/apiData";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const ApiDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("articles");
  const [activeEndpoint, setActiveEndpoint] = useState<string | null>("getAll");
  const [activeLanguage, setActiveLanguage] = useState<string>("javascript");
  const [copied, setCopied] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-slate-900">
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-700 rounded-lg text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <ChevronRight
          className={`w-6 h-6 transform transition-transform ${
            isSidebarOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out w-64
         bg-slate-800 p-4 overflow-y-auto z-40`}
      >
        <div className="text-purple-500 text-2xl font-bold mb-8">APIStack</div>
        <div className="space-y-2">
          {Object.entries(apiData).map(([sectionKey, section]) => (
            <div key={sectionKey} className="space-y-1">
              <button
                onClick={() => {
                  setActiveSection(sectionKey);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg 
                  transition-colors
                  ${
                    activeSection === sectionKey
                      ? "bg-green-500 text-white"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  {section.name}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${
                    activeSection === sectionKey ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeSection === sectionKey && (
                <div className="ml-4 space-y-1">
                  {Object.entries(section.endpoints).map(
                    ([endpointKey, endpoint]) => (
                      <button
                        key={endpointKey}
                        onClick={() => {
                          setActiveEndpoint(endpointKey);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-5 px-4 py-2 rounded-lg
                           transition-colors text-sm
                        ${
                          activeEndpoint === endpointKey
                            ? "bg-slate-600 text-white"
                            : "text-slate-400 hover:bg-slate-700"
                        }`}
                      >
                        {endpoint.name}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4 lg:p-8 overflow-y-auto mt-20 md:mt-5">
        {activeSection && activeEndpoint ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <h1 className="text-2xl text-white font-bold">
                {apiData[activeSection].endpoints[activeEndpoint].name}
              </h1>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                <span
                  className={`px-2 py-1 rounded text-sm font-medium
                  ${
                    apiData[activeSection].endpoints[activeEndpoint].method ===
                    "GET"
                      ? "bg-green-500 text-white"
                      : apiData[activeSection].endpoints[activeEndpoint]
                          .method === "POST"
                      ? "bg-blue-500 text-white"
                      : apiData[activeSection].endpoints[activeEndpoint]
                          .method === "PUT"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {apiData[activeSection].endpoints[activeEndpoint].method}
                </span>
                <code className="text-slate-300">
                  {apiData[activeSection].endpoints[activeEndpoint].path}
                </code>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-300">
                {apiData[activeSection].endpoints[activeEndpoint].description}
              </p>
            </div>

            {apiData[activeSection].endpoints[activeEndpoint].params && (
              <div className="bg-slate-800 p-4 rounded-lg">
                <h2 className="text-white text-lg mb-4">Parameters</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="pb-2 text-slate-300">Name</th>
                        <th className="pb-2 text-slate-300">Type</th>
                        <th className="pb-2 text-slate-300">Required</th>
                        <th className="pb-2 text-slate-300">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apiData[activeSection].endpoints[
                        activeEndpoint
                      ].params?.map((param) => (
                        <tr
                          key={param.name}
                          className="border-b border-slate-700"
                        >
                          <td className="py-2 text-slate-300">{param.name}</td>
                          <td className="py-2 text-slate-300">{param.type}</td>
                          <td className="py-2 text-slate-300">
                            {param.required ? "Yes" : "No"}
                          </td>
                          <td className="py-2 text-slate-300">
                            {param.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-2 p-2 bg-slate-700">
                {Object.keys(
                  apiData[activeSection].endpoints[activeEndpoint].code
                ).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors
                      ${
                        activeLanguage === lang
                          ? "bg-slate-600 text-white"
                          : "text-slate-300 hover:bg-slate-600"
                      }`}
                  >
                    {lang}
                  </button>
                ))}
                <button
                  onClick={() =>
                    handleCopy(
                      apiData[activeSection].endpoints[activeEndpoint].code[
                        activeLanguage as keyof CodeExample
                      ]
                    )
                  }
                  className="ml-auto px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-600 flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-slate-300 overflow-x-auto">
                <code>
                  <SyntaxHighlighter language="javascript" style={darcula}>
                    {
                      apiData[activeSection].endpoints[activeEndpoint].code[
                        activeLanguage as keyof CodeExample
                      ]
                    }
                  </SyntaxHighlighter>
                </code>
              </pre>
            </div>
            <h1 className="text-2xl">Sample Response</h1>
            <h2 className="text-xl">
              Success Response 200( <span className="text-green-500"> OK </span>
              )
            </h2>
            <div className="bg-slate-800">
              <div className="flex flex-wrap gap-2 p-2 bg-slate-700">
                <button>json</button>
                <button
                  onClick={() =>
                    handleCopy(
                      apiData[activeSection].endpoints[activeEndpoint].code[
                        activeLanguage as keyof CodeExample
                      ]
                    )
                  }
                  className="ml-auto px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-600 flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-slate-300 overflow-x-auto">
                <code>
                  <SyntaxHighlighter language="json" style={darcula}>
                    {apiData[activeSection].endpoints[activeEndpoint].response}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </div>
          </div>
        ) : (
          <div className="text-slate-300 text-center mt-20">
            Select an endpoint from the sidebar to view its documentation
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiDocs;
