import React from "react";

import Portrait from "../../assets/images/portrait.jpg";
import { StyledWelcome } from "./Welcome.styled.jsx";
import About from "../About/About.jsx";
import LazyShow from "../../Hooks/LazyShow";

const Welcome = ({ element }) => {
  return (
    <main>
      <StyledWelcome>
        <div ref={element}>
          <img src={Portrait} alt="portrait" className="welcome--logo" />
       
          <div class="page">
            <p data-scroll="in">Denzel Udemba</p>
            <p
              class="reveal--2 words chars splitting"
              aria-hidden="true"
              data-scroll="in"
              data-splitting=""
              style="--word-total:2; --char-total:12;"
            >
              <span class="word" data-word="Random" style="--word-index:0;">
                <span
                  class="char"
                  data-char="D"
                  style='--char-index:0; --count:1; --char-0:"≥"; --char-1:"¶"; --char-2:"/"; --char-3:"˚"; --char-4:"░"; --char-5:"≤"; --char-6:"¢"; --char-7:"•"; --char-8:"≥"; --char-9:"˚";'
                >
                  D
                </span>
                <span
                  class="char"
                  data-char="e"
                  style='--char-index:1; --count:3; --char-0:"<"; --char-1:"…"; --char-2:"–"; --char-3:"`"; --char-4:"¶"; --char-5:"ƒ"; --char-6:"•"; --char-7:"?"; --char-8:"˜"; --char-9:"˜";'
                >
                  e
                </span>
                <span
                  class="char"
                  data-char="n"
                  style='--char-index:2; --count:1; --char-0:"░"; --char-1:"æ"; --char-2:"≥"; --char-3:"å"; --char-4:"÷"; --char-5:"–"; --char-6:"∫"; --char-7:"µ"; --char-8:"å"; --char-9:"▒";'
                >
                  n
                </span>
                <span
                  class="char"
                  data-char="z"
                  style='--char-index:3; --count:4; --char-0:"≈"; --char-1:"¬"; --char-2:"<"; --char-3:"…"; --char-4:"∞"; --char-5:"/"; --char-6:"?"; --char-7:"˙"; --char-8:"ß"; --char-9:"≈";'
                >
                  z
                </span>
                <span
                  class="char"
                  data-char="e"
                  style='--char-index:4; --count:4; --char-0:"?"; --char-1:"™"; --char-2:"–"; --char-3:"/"; --char-4:"˚"; --char-5:"▒"; --char-6:"˜"; --char-7:"?"; --char-8:"░"; --char-9:"÷";'
                >
                  e
                </span>
                <span
                  class="char"
                  data-char="l"
                  style='--char-index:5; --count:4; --char-0:"∆"; --char-1:"§"; --char-2:"ç"; --char-3:"∫"; --char-4:"µ"; --char-5:"™"; --char-6:"`"; --char-7:"§"; --char-8:"˙"; --char-9:"▓";'
                >
                  l
                </span>
              </span>
              <span class="whitespace"> </span>
              <span class="word" data-word="iteration" style="--word-index:1;">
                <span
                  class="char"
                  data-char="U"
                  style='--char-index:6; --count:3; --char-0:"∆"; --char-1:"∂"; --char-2:"?"; --char-3:"¶"; --char-4:"░"; --char-5:"…"; --char-6:"`"; --char-7:"≤"; --char-8:"∆"; --char-9:"≠";'
                >
                  U
                </span>
                <span
                  class="char"
                  data-char="d"
                  style='--char-index:7; --count:5; --char-0:"˚"; --char-1:"∂"; --char-2:"¶"; --char-3:"˚"; --char-4:">"; --char-5:"•"; --char-6:"`"; --char-7:"`"; --char-8:">"; --char-9:"░";'
                >
                  d
                </span>
                <span
                  class="char"
                  data-char="e"
                  style='--char-index:8; --count:3; --char-0:"•"; --char-1:"≥"; --char-2:"•"; --char-3:"∫"; --char-4:"•"; --char-5:"/"; --char-6:"∆"; --char-7:"∆"; --char-8:"∞"; --char-9:"µ";'
                >
                  e
                </span>
                <span
                  class="char"
                  data-char="m"
                  style='--char-index:9; --count:3; --char-0:"¶"; --char-1:"ç"; --char-2:">"; --char-3:"å"; --char-4:"¬"; --char-5:"≤"; --char-6:"∞"; --char-7:"≥"; --char-8:"˚"; --char-9:">";'
                >
                  M
                </span>
                <span
                  class="char"
                  data-char="b"
                  style='--char-index:10; --count:4; --char-0:"ª"; --char-1:"™"; --char-2:"`"; --char-3:"…"; --char-4:"<"; --char-5:"√"; --char-6:"≥"; --char-7:"≠"; --char-8:"÷"; --char-9:"å";'
                >
                  b
                </span>
                <span
                  class="char"
                  data-char="a"
                  style='--char-index:11; --count:5; --char-0:"¡"; --char-1:"≠"; --char-2:"˜"; --char-3:"æ"; --char-4:"…"; --char-5:"ƒ"; --char-6:"░"; --char-7:"ƒ"; --char-8:"√"; --char-9:"≥";'
                >
                  a
                </span>   
              </span>
            </p>
          </div>

        </div>
      </StyledWelcome>
    </main>
  );
};

export default Welcome;
