import React, { useRef, useState, MouseEvent, TouchEvent } from 'react';

interface SwipeableTableProps {
  children: React.ReactNode;
}

const SwipeableTable: React.FC<SwipeableTableProps> = ({ children }) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!tableRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - tableRef.current.offsetLeft);
    setScrollLeft(tableRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !tableRef.current) return;
    e.preventDefault();
    const x = e.pageX - tableRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tableRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!tableRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - tableRef.current.offsetLeft);
    setScrollLeft(tableRef.current.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !tableRef.current) return;
    // Only prevent default if the touch movement is more horizontal than vertical
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.pageX - startX);
    const deltaY = Math.abs(touch.pageY - (e.touches[0].target as HTMLElement).getBoundingClientRect().top);
    
    if (deltaX > deltaY) {
      e.preventDefault();
      const x = touch.pageX - tableRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      tableRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={tableRef}
        className="overflow-x-auto overflow-y-visible hide-scrollbar bg-white"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          overscrollBehaviorX: 'contain',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y pinch-zoom',
          borderRadius: '7px'
        }}
      >
        {children}
      </div>
      {/* Scroll indicator shadow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: tableRef.current?.scrollLeft ? 1 : 0 
        }} 
      />
    </div>
  );
};

export default SwipeableTable;