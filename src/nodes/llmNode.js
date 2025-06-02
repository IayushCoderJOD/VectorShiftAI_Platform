import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  return (
    <div className="node-box">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: '33.33%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: '66.66%' }}
      />
      <div className="node-header">
        <span>LLM</span>
      </div>
      <div className="node-content">
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
};
