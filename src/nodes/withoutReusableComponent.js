import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const DatabaseNode = ({ id, data }) => {
  // Example state for database connection name and query type
  const [connectionName, setConnectionName] = useState(data?.connectionName || id.replace('db-', 'db_'));
  const [queryType, setQueryType] = useState(data?.queryType || 'SELECT');

  const handleConnectionChange = (e) => {
    setConnectionName(e.target.value);
  };

  const handleQueryTypeChange = (e) => {
    setQueryType(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 120, border: '1px solid black', padding: '8px', boxSizing: 'border-box' }}>
      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-connection`}
        style={{ top: '50%' }}
      />

      <div>
        <strong>Database</strong>
      </div>

      <div style={{ marginTop: 8 }}>
        <label>
          Connection:
          <input 
            type="text" 
            value={connectionName} 
            onChange={handleConnectionChange} 
            style={{ width: '100%' }}
          />
        </label>
      </div>

      <div style={{ marginTop: 8 }}>
        <label>
          Query Type:
          <select value={queryType} onChange={handleQueryTypeChange} style={{ width: '100%' }}>
            <option value="SELECT">SELECT</option>
            <option value="INSERT">INSERT</option>
            <option value="UPDATE">UPDATE</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-queryResult`}
        style={{ top: '50%' }}
      />
    </div>
  );
};
