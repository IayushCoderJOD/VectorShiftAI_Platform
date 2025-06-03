import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import AutoResizeTextarea from '../reusableComps/AutoResizeTextArea';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data.inputType || 'Text');
  const textareaRef = useRef(null);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  }, [currName]);

  return (
    <div
      className="node-box node-dark"
      style={{
        width: '250px',
        padding: '10px',
        boxSizing: 'border-box',
      }}
    >
      <div className="node-header">
        <span>Input</span>
      </div>
      <div>
        <label className="node-label">
          Name:
          <AutoResizeTextarea  value={currName}   onChange={handleNameChange} type="text"
            className="node-input" />
          
        </label>
        <label className="node-label">
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="node-select"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};
