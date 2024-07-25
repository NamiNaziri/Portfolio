/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SectionContent from './SectionContent';
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';


const MarkdownRenderer = ({markdownObject}) => {
  const [markdown, setMarkdown] = useState(null);
  console.log(markdownObject)
  useEffect(() => {
    fetch(markdownObject.link)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return(
  <div className="grid grid-cols-6 mt-2.5	">

    <div className="col-start-2 col-span-4 ">
     {markdown?  <ReactMarkdown remarkPlugins={[[remarkGfm,]]} children={markdown } rehypePlugins={[rehypeRaw]} />: <div className="h-screen bg-black"></div>}
   
    </div>  
  </div>)
  // <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;