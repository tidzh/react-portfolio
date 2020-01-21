import React, { useState } from "react";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "./WYSIWYG.css";

const WYSIWYG = ({ input, placeholder }) => {
  const _editorState = () => {
    let editorState = EditorState.createEmpty();
    if (input.value) {
      const blocksFromHTML = convertFromHTML(input.value);
      const content = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      editorState = EditorState.createWithContent(content);
    }
    return editorState;
  };

  const [editorState, setEditorState] = useState(_editorState());

  const onEditorStateChange = editorState => {
    input.onChange(stateToHTML(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
      placeholder={placeholder ? placeholder : "Описание"}
    />
  );
};

export default WYSIWYG;
