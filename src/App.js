import { PipelineToolbar } from './toolbar';
import { SubmitButton } from './submit';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { PipelineUI } from './ui';

function App() {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
