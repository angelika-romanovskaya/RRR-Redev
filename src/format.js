export function formatValue (type, value) {
  if (type === 'temp') return `${value.toFixed(1)}°C`
  if (type === 'humidity') return `${Math.round(value)}%`
  if (type === 'co2') return `${Math.round(value)} ppm`
  return `${Math.round(value)} dB`
}

export function renderBadge (type) {
  if (type === 'temp') return '🌡️ temp'
  if (type === 'humidity') return '💧 humidity'
  if (type === 'co2') return '🫁 CO₂'
  return '🔊 noise'
}
