import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const PuzzleRoom = () => {
  const images = [
    { id: 1, src: '/images/cabinet.png', name: 'ארון' },
    { id: 2, src: '/images/cart.png', name: 'עגלה' },
    { id: 3, src: '/images/light.png', name: 'אור' },
    { id: 4, src: '/images/chair.png', name: 'כיסא' },
    { id: 5, src: '/images/puzzle.jpg', name: 'פאזל' },
  ];

  const [positions, setPositions] = useState(
    images.map((image, index) => ({
      ...image,
      top: 100 * index,
      left: 100 * index,
    }))
  );

  // Function that will update the position of an element when it is dropped  
  const moveImage = (id: number, left: number, top: number) => {
    setPositions((prevPositions) =>
      prevPositions.map((pos) =>
        pos.id === id ? { ...pos, left, top } : pos
      )
    );
  };

  const [, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item: { id: number }, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        const left = Math.round(delta.x);
        const top = Math.round(delta.y);
        moveImage(item.id, left, top);
      }
    },
  }));

  return (
    <div ref={drop} style={{ position: 'relative', height: '800px', border: '1px solid #000' }}>
      {images.map((image) => {
        const [{ isDragging }, drag] = useDrag(() => ({
          type: 'ITEM',
          item: { id: image.id },  
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
        }));

        return (
          <div
            key={image.id}
            ref={drag}
            style={{
              position: 'absolute',
              top: positions.find((pos) => pos.id === image.id)?.top,
              left: positions.find((pos) => pos.id === image.id)?.left,
              cursor: 'move',
              opacity: isDragging ? 0.5 : 1,
            }}
          >
            <img src={image.src} alt={image.name} style={{ width: 100, height: 100 }} />
          </div>
        );
      })}
    </div>
  );
};

export default PuzzleRoom;
