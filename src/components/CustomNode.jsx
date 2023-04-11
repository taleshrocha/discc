import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <button 
      className={`flex flex-col px-2 py-1 w-44 h-20
      shadow-md rounded-md border-2 border-stone-400 
      ${data.selected? "bg-neutral-100" : "bg-zinc-300"}
    `}
    >
      <div>
          <p className="text font-bold">{data.code} ({data.hours})</p>
          <p className="text-sm text-gray-500">{data.name}</p>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </button>
  );
}

export default memo(CustomNode);
