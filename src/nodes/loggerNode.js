import { useState } from 'react';
import ReusableNode from './ReusableNode';

export const LoggerNode = ({ id, data }) => {
  const [enabled, setEnabled] = useState(data?.enabled ?? true);

  return (
    <ReusableNode
      id={id}
      title="Logger"
      inputs={[{ id: 'data' }]}
      outputs={[{ id: 'loggedData' }]}
      content={
        <div>
          <label>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            Enable Logging
          </label>
          <small>{enabled ? 'Logging enabled' : 'Logging disabled'}</small>
        </div>
      }
    />
  );
};
