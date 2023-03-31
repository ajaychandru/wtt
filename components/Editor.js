import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import styles from "./Editor.module.css"

const ReactQuill = dynamic(async () => {
    try {
        const module = await import('react-quill');
        const ImageCompress = await import('quill-image-compress');
        const Quill = module.default.Quill;
        Quill.register('modules/imageCompress', ImageCompress.default);
        return module;
    } catch (err) {
        console.error(err);
    }
}, { ssr: false });



function Editor(props) {

    const [value, setValue] = useState({
        cardContent:"",
        postContent:""
    });


function handleChange(content){
    setValue(content);
    props.getData(content);
    
}



    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image', 'video'],
            ['clean'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
        // Enable the imageCompress module
        imageCompress: {
            quality: 0.7,
            maxWidth: 400,
            maxHeight: 400,
            imageType: 'image/webp',
            debug: true
        }
    };
    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
    ];

    return (

      

            <ReactQuill 
               
                onChange={handleChange}
                theme="snow"
                modules={modules}
                formats={formats}
                value={value}
            />
       







    )
}

export default Editor;
