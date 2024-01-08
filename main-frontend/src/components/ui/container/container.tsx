import React, { ReactNode } from 'react';

interface ItemListContainerProps {
  children: ReactNode;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

export default ItemListContainer;