import { useState } from 'react';
import ReusableNode from './ReusableNode';
import AutoResizeTextarea from '../reusableComps/AutoResizeTextArea';

export const DatabaseNode = ({ id, data }) => {
  const [connectionName, setConnectionName] = useState(data?.connectionName || id.replace('db-', 'db_'));
  const [queryType, setQueryType] = useState(data?.queryType || 'SELECT');

  return (
    <ReusableNode
      id={id}
      title="Database"
      inputs={[{ id: 'connection' }]}
      outputs={[{ id: 'queryResult' }]}
      content={
        <div>
          <label>
            Connection:
            <AutoResizeTextarea    value={connectionName}   onChange={(e) => setConnectionName(e.target.value)} type="text"
            className="node-label" />
          </label>
          <label>
            Query Type:
            <select
              value={queryType}
              onChange={(e) => setQueryType(e.target.value)}
              style={{ width: '100%' }}
              className='node-select'
            >
              <option value="SELECT">SELECT</option>
              <option value="INSERT">INSERT</option>
              <option value="UPDATE">UPDATE</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>
      }
    />
  );
};
