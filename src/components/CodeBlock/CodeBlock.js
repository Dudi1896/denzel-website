import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBlockBG,SubHeader } from "./CodeBlock.Styled";
import { SvgBGDesign, SvgWrapper } from "../../global";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const date = new Date();

const dateString = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');

const dateTimeString = `${dateString}`;

const codeHeader = `NORMAL`;
const codeSubHead = `Server.js`;

const codeString = ` User@dudi1896 ~/Home
$ node server.js && strip listen
> Ready! Waiting for requests...
${dateTimeString} [200] payment_intent.created
${dateTimeString} [200] charge.succeeded
${dateTimeString} [200] payment_intent.succeeded
`;

const CodeBlock = () => {

  return (
    <>
      <CodeBlockBG>
        <SvgWrapper>
          <SvgBGDesign>{codeHeader}</SvgBGDesign>
          <SubHeader>{codeSubHead}</SubHeader>
          <SubHeader>
            <FontAwesomeIcon icon={faClipboard}/> </SubHeader>
        </SvgWrapper>
        <SyntaxHighlighter
          language="bash"
          style={atomOneDarkReasonable}
          wrapLongLines={true}
          customStyle={{
            padding: "25px 0px 15px 15px",
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
