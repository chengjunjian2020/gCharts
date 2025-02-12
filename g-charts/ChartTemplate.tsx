import { useEffect, useRef } from 'react';

import rmstCharts, { ChartRoot } from './core';

const ChartTemplate = ({ option }) => {
  const insRef = useRef<ChartRoot>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ins = rmstCharts.init(containerRef.current);
    insRef.current = ins;
  }, []);

  useEffect(() => {
    insRef.current.setOption(option);
  }, [option]);

  return (
    <div
      ref={containerRef}
      className="chart-container"
      style={{ flexShrink: 0 }}
    ></div>
  );
};

export default ChartTemplate;
