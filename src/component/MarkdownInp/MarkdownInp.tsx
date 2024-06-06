import './MarkdownInp.css'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const MarkdownInp = () =>  {
  
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({ html, text }: { html: string, text: string }) {
        console.log('handleEditorChange', html, text);
      }

    return (
        <div className='markdowninp'>
            <div className='head'>
                <span>申请书</span>
                <button>下载PDF</button>
            </div>
             <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
        </div>
    )
  }
  
  export default MarkdownInp