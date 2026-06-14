const ROOMS = ['Kitchen', 'Living', 'Bedroom', 'Office', 'Bath']
const TYPES = ['temp', 'humidity', 'co2', 'noise']

export function createSensors (count) {
  const arr = []
  for (let i = 0; i < count; i++) {
    const type = TYPES[i % TYPES.length]
    const room = ROOMS[i % ROOMS.length]
    arr.push({
      id: `S${i}`,
      name: `${room} #${String(i).padStart(3, '0')}`,
      room,
      type,
      value: initialValue(type),
      updatedAt: Date.now()
    })
  }
  return arr
}

export function tickSensors (prev) {
  const now = Date.now()
  let hasChanges = false
  const next =  prev.map(s => {
    const shouldUpdate = Math.random() < 0.18
    if (!shouldUpdate) return s
    const value = mutateValue(s.type, s.value)

    if (value === s.value) return s
    
    hasChanges = true
    return { ...s, value, updatedAt: now }
  })

   return hasChanges ? next : prev
}

export function expensiveRulesEval (sensors, co2Limit) {
  let junk = 0
  for (let i = 0; i < 90000; i++) junk += Math.sqrt(i) % 7

  const alerts = []
  const roomScore = new Map()

  for (const s of sensors) {
    const score = (roomScore.get(s.room) ?? 0) + scoreSensor(s, co2Limit)
    roomScore.set(s.room, score)

    if (s.type === 'co2' && s.value > co2Limit) {
      alerts.push({
        id: s.id,
        room: s.room,
        name: s.name,
        message: `CO₂ ${Math.round(s.value)} > ${co2Limit}`
      })
    }
  }

  let worstRoom = 'n/a'
  let worst = -Infinity
  for (const [room, sc] of roomScore.entries()) {
    if (sc > worst) {
      worst = sc
      worstRoom = room
    }
  }

  return {
    alerts,
    worstRoom,
    stuffinessScore: Math.round((worst + junk) % 1000)
  }
}

function initialValue (type) {
  if (type === 'temp') return 18 + Math.random() * 7
  if (type === 'humidity') return 35 + Math.random() * 25
  if (type === 'co2') return 500 + Math.random() * 600
  return 25 + Math.random() * 35
}

function mutateValue (type, v) {
  const n = Math.random() - 0.5
  if (type === 'temp') return clamp(v + n * 1.2, 14, 30)
  if (type === 'humidity') return clamp(v + n * 6, 20, 80)
  if (type === 'co2') return clamp(v + n * 120, 400, 2000)
  return clamp(v + n * 10, 10, 95)
}

function clamp (x, a, b) {
  return Math.max(a, Math.min(b, x))
}

function scoreSensor (s, co2Limit) {
  if (s.type === 'co2') return Math.max(0, s.value - co2Limit) / 10
  if (s.type === 'temp') return Math.abs(s.value - 22) * 2
  if (s.type === 'humidity') return Math.abs(s.value - 45)
  return s.value / 10
}
