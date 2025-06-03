import { useState } from 'react';
import ReusableNode from './ReusableNode';
import AutoResizeTextarea from '../reusableComps/AutoResizeTextArea';

export const ApiNode = ({ id, data }) => {
  const [apiUrl, setApiUrl] = useState(data?.apiUrl || 'https://jsonplaceholder.typicode.com/todos/');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <ReusableNode
      id={id}
      title="API Request"
      inputs={[{ id: 'trigger' }]}
      outputs={[{ id: 'response' }]}
      content={
        <div>
          <label>
            URL:

             <AutoResizeTextarea    value={apiUrl} onChange={(e) => setApiUrl(e.target.value)} type="text"
            className="node-label" />
          </label>
          <label>
            Method:
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              style={{ width: '100%' }}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>
      }
    />
  );
};
