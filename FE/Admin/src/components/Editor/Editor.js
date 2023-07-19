import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Editorr(props) {
    const editorRef = useRef(null);
    const [content, setContent] = useState(
      "This is the initial content of the editor."
    );
  
    const [text, setText] = useState();
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    const onEditorChange = function (a, editor) {
      // console.log(a);
      props.content(a);
      setContent(a);
      setText(editor.getContent({ format: "text" }));
      //console.log(editor);
    };

    return (
        <Editor
            onEditorChange={onEditorChange}
            //initialValue={content}
            //outputFormat="text"

            value={content}
            onInit={(evt, editor) => (editorRef.current = editor)}
            // initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 300,
              width: "100%",
              selector: 'textarea',
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ]
            }}
      />
    )
}