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
                menubar: false,
                plugins: [
                    "mentions advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media paste code help wordcount",
                    'image code',
                ],
                toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | emoticons| help",
                content_style:
                    "body { font-family: 'Nunito Sans', sans-serif; font-size:14px }",
                emoticons_append: {
                    custom_mind_explode: {
                    keywords: ["brain", "mind", "explode", "blown"],
                    char: "🤯",
                    },
                },
                paste_block_drop: false,
                paste_data_images: true,
                paste_as_text: true,
            }}
      />
    )
}