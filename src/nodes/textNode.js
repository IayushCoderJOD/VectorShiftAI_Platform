// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

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
          <input 
            type="text" 
            value={currText} 
            className="node-input"
            onChange={handleTextChange} 
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
