// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '80px', 
          border: '1px solid white',
          padding:"12px",
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          justifyContent: 'space-evenly', 
          flexDirection: 'column'
        }} 
        draggable
      >
          <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  