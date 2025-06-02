import { useState } from 'react';
import ReusableNode from './ReusableNode';

export const TimerNode = ({ id, data }) => {
  const [seconds, setSeconds] = useState(data?.seconds || 5);

  return (
    <ReusableNode
      id={id}
      title="Timer"
      inputs={[{ id: 'start' }]}
      outputs={[{ id: 'timeout' }]}
      content={
        <div>
          <label>
            Seconds:
            <input
              type="number"
              min={1}
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </label>
          <small>Wait time before triggering output</small>
        </div>
      }
    />
  );
};
