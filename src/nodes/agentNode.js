import ReusableNode from "./ReusableNode";

export const AgentNode = ({ id, data }) => {

  return (
    <ReusableNode
      id={id}
      title="LLM"
      inputs={[
        { id: 'system' },
        { id: 'prompt' },
      ]}
      outputs={[{ id: 'response' }]}
      content={
        <div>
          <span>This is a LLM.</span>
        </div>
      }
    />
  );
};
