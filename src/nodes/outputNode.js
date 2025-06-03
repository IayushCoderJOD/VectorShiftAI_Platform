// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };
  return (
    <div className="node-box node-dark">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div className="node-header">
        <span>Output</span>
      </div>
      <div>
      <label className="node-label">
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="node-input"
          />
        </label>
        <label className="node-label">
          Type:
          <select 
          className="node-select"
          
          value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
