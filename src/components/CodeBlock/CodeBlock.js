import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBlockBG } from "./CodeBlock.Styled";
import { SvgBGDesign, SvgWrapper, SubHeader } from "../../global";

const CodeBlock = () => {
  const codeHeader = `NORMAL`;
  const codeSubHead = `Server.js`;


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
        <SvgWrapper>
          <SvgBGDesign>{codeHeader}</SvgBGDesign>
          <SubHeader>{codeSubHead}</SubHeader>
        </SvgWrapper>
        <SyntaxHighlighter
          language="bash"
          style={atomOneDarkReasonable}
          wrapLongLines={true}
          customStyle={{
            padding: "5px 0px 15px 15px",
            margin: "0px 1px 1px 1px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </CodeBlockBG>
    </>
  );
};

export default CodeBlock;
