export function randomIntFromInterval({
  minValue = 1,
  maxValue = 100,
  precision = 1,
}): number {
  // min and max included
  return (
    Math.floor(
      Math.random() * (maxValue * precision - minValue * precision) +
        minValue * precision
    ) /
    (1 * precision)
  )
}
