export const addTypeToChartOption = (option, type: 'line' | 'bar' | 'pie' | 'candlestick') => {
  return { ...option, series: [].concat(option.series).map(item => ({ ...item, type })) }
}
