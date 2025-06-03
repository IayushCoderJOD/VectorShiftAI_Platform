// textNode.js

import { useEffect, useRef, useState } from 'react';
import { Handle, Position } from 'reactflow';
import AutoResizeTextarea from '../reusableComps/AutoResizeTextArea';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.currText || '{{input}}');

  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const extractVariables = (currText) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)].map(match => match[1]);
    return [...new Set(matches)];
  };

  useEffect(() => {
    setVariables(extractVariables(currText));
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
    setVariables(extractVariables(currText));
  }, [currText]);

  console.log("variables",variables)


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="node-box node-dark">
      <div className="node-header">
        <span>Text</span>
      </div>
      <div>
        <label className="node-label">
          Text:
          <AutoResizeTextarea value={currText} onChange={handleTextChange} type="text"
            className="node-input" />
        </label>
      </div>
      {variables.map((variable) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={variable}
          style={{ top: 40 + variables.indexOf(variable) * 20 }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}

