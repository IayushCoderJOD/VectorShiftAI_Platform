// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import AutoResizeTextarea from '../reusableComps/AutoResizeTextArea';

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
          <AutoResizeTextarea value={currText} onChange={handleTextChange} type="text"
            className="node-input" />
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
