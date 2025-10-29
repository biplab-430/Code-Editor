import React from "react";
import Editor from "./Editor";
import LocalStorage from "./LocalStorage";

function CodeEditor() {
  // Persist HTML, CSS, and JavaScript using LocalStorage Hook
  const [html, setHtml] = LocalStorage("html", "<h1>Hello World</h1>");
  const [css, setCss] = LocalStorage("css", "body { background-color: lightblue; }");
  const [js, setJs] = LocalStorage("js", "console.log('Hello from JavaScript');");

  const srcCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `;

  return (
    <div>
      {/* Code Editors for HTML, CSS, JS */}
      <Editor heading="HTML" icon="/" color="red" value={html} onChange={setHtml} />
      <Editor heading="CSS" icon="*" color="blue" value={css} onChange={setCss} />
      <Editor heading="JavaScript" icon="()" color="yellow" value={js} onChange={setJs} />

      {/* Live Output */}
      <iframe
        srcDoc={srcCode}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="300px"
      />
    </div>
  );
}

export default CodeEditor;
