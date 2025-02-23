import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
      language: "en",
      toolbarButtonSize: "medium",
      toolbarAdaptive: false,
      showCharsCounter: true,
      showWordsCounter: true,
      showXPathInStatusbar: false,
      askBeforePasteHTML: true,
      askBeforePasteFromWord: true,
      height: 500,
    }),
    [placeholder]
  );

  function handleSumbit() {
    console.log(content);
  }

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{ margin: "20px" }}
      >
        <button
          className="btn btn-primary me-md-2 "
          onClick={handleSumbit}
          type="button"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default TextEditor;
