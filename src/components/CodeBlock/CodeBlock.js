import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBlockBG, SubHeader, HeaderClipBoard } from "./CodeBlock.Styled";
import { SvgBGDesign, SvgWrapper } from "../../global";
import { faCheck, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const date = new Date();

const dateString = date
  .toISOString()
  .replace(/T/, " ")
  .replace(/\..+/, "");

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
  const [copy, setCopy] = useState(false);
  return (
    <>
      <CodeBlockBG>
        <SvgWrapper>
          <SvgBGDesign>{codeHeader}</SvgBGDesign>
          <SubHeader>{codeSubHead}</SubHeader>

          {copy ? (
            <HeaderClipBoard>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <p>Copied!</p>
            </HeaderClipBoard>
          ) : (
            <HeaderClipBoard
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <FontAwesomeIcon icon={faClipboard} />
              <p>Copy Code</p>
            </HeaderClipBoard>
          )}
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
