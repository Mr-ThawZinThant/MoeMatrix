import React from 'react';

interface ItemProps {
  name: string;
  description: string;
}

const Item: React.FC<ItemProps> = ({ name, description }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Item;

