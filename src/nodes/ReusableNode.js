import { Handle, Position } from 'reactflow';

const ReusableNode = ({ id, title, inputs = [], outputs = [], content, style = {} }) => {
  const inputCount = inputs.length;
  const outputCount = outputs.length;

  const getTopPosition = (index, total) => {
    return total === 1 ? '50%' : `${((index + 1) * 100) / (total + 1)}%`;
  };


  return (
    <div  className="node-box node-dark" style={style}>
      <div className="node-header">{title}</div>

      {inputs.map(({ id: inputId, label, style: inputStyle }, idx) => (
        <Handle
          key={`input-${inputId}`}
          type="target"
          position={Position.Left}
          id={`${id}-${inputId}`}
          style={{ top: getTopPosition(idx, inputCount), ...inputStyle }}
          title={label}
        />
      ))}

      <div >{content}</div>

      {outputs.map(({ id: outputId, label, style: outputStyle }, idx) => (
        <Handle
          key={`output-${outputId}`}
          type="source"
          position={Position.Right}
          id={`${id}-${outputId}`}
          style={{ top: getTopPosition(idx, outputCount), ...outputStyle }}
          title={label}
        />
      ))}
    </div>
  );
};

export default ReusableNode;
