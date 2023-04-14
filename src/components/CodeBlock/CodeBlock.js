import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xt256 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBlockText, CodeBlockBG,CodeBlockHeader } from "./CodeBlock.Styled";

const CodeBlock = () => {
    const codeHeader = `NodeJs C:/shell/service.exe`;

  const codeString = ` User@dudi1896 ~/Home
  $ node server.js && strip listen
  > Ready! Waiting for requests...
  2023-04-13 14:39;39 [200] payment_intent.created
  2023-04-13 14:39;39 [200] charge.succeeded
  2023-04-13 14:39;39 [200] payment_intent.succeeded
  `;
  return (
    <>
      <CodeBlockBG>
        <CodeBlockText>
        {/* <CodeBlockHeader>{codeHeader}</CodeBlockHeader> */}
          <SyntaxHighlighter language="bash" style={xt256} wrapLongLines={true}>
            {codeString}
          </SyntaxHighlighter>
        </CodeBlockText>
      </CodeBlockBG>
    </>
  );
};

export default CodeBlock;
