// toolbar.js
//optimise/
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = ({ nodes = [], style = {}, containerStyle = {} }) => {
  const defaultNodes = [
    { type: 'customInput', label: 'Input' },
    { type: 'llm', label: 'LLM' },
    { type: 'customOutput', label: 'Output' },
    { type: 'text', label: 'Text' },
    { type: 'agentNode', label: 'Agent Node' },
    { type: 'databaseNode', label: 'Database Node' },
    { type: 'apiNode', label: 'API Node' },
  { type: 'timerNode', label: 'Timer Node' },
  { type: 'loggerNode', label: 'Logger Node' },
  ];

  const nodeList = nodes.length > 0 ? nodes : defaultNodes;

  return (
    <div style={{ padding: '10px', backgroundColor:"#1d0c4a" , ...style }}>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', ...containerStyle }}>
        {nodeList.map(({ type, label }, idx) => (
          <DraggableNode key={idx} type={type} label={label} />
        ))}
      </div>
    </div>
  );
};
