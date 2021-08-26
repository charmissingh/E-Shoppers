import React from "react";

function MessageBox(props) {
  return (
    <div>
      setTimeout(() ={">"}
      {
        <div
          class="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg"
          role="alert"
        >
          <p>{props.children}</p>
        </div>
      }
      , 5);
    </div>
  );
}

export default MessageBox;
