
import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeBlockBG, SubHeader, HeaderClipBoard } from "./CodeBlock.Styled";
import { SvgBGDesign, SvgWrapper } from "../../global";
import { faCheck, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const date = new Date();

const dateString = date
  .toISOString()
  .replace(/T/, " ")
  .replace(/\..+/, "");

const dateTimeString = `${dateString}`;

const codeHeader = `NORMAL`;
const codeSubHead = `Server.js`;

const first_text = `User@dudi1896 ~/Home
$ node server.js && strip listen
> Ready! Waiting for requests...
${dateTimeString} [200] payment_intent.created
${dateTimeString} [200] charge.succeeded
${dateTimeString} [200] payment_intent.succeeded
`;

const CodeBlock = () => {
  const [copy, setCopy] = useState(false);

  const textState = ["istyping"];
  const [typing1, setTyping1] = useState(textState[0]);
  const [text1, setText1] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing1 === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      } else if (text1 === first_text && typing1 === "istyping") {
        sleep(2000).then(() => {
          setTyping1(textState[1]);
        });
      } 
    }, 15);

    return () => clearTimeout(timeout);
  }, [text1, typing1]);

  return (
    <>
      <CodeBlockBG>
        <SvgWrapper>
          <SvgBGDesign>{codeHeader}</SvgBGDesign>
          <SubHeader>{codeSubHead}</SubHeader>

          {copy ? (
            <HeaderClipBoard>
              <FontAwesomeIcon icon={faCheck} />
              <p>Copied!</p>
            </HeaderClipBoard>
          ) : (
            <HeaderClipBoard
              onClick={() => {
                navigator.clipboard.writeText(first_text);
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
            minHeight: "14vh",
          }}
        >
          {text1}
        </SyntaxHighlighter>
        
      </CodeBlockBG>
    </>
  );
};

export default CodeBlock;
