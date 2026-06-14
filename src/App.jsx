import { useCallback,useMemo, useEffect, useState } from "react";
import { createSensors, tickSensors } from "./sim";
import SensorGrid from "./SensorGrid";


export default function App() {
  console.log("----App----");
  
  const [sensors, setSensors] = useState(() => createSensors(10));
  const [room, setRoom] = useState("all");
  const [type, setType] = useState("all");
  const [pinned, setPinned] = useState(() => new Set());
  const [co2Limit, setCo2Limit] = useState(900);
  const [tickMs, setTickMs] = useState(800);

  useEffect(() => {
    const id = setInterval(() => {
      setSensors((prev) => tickSensors(prev));
    }, tickMs);
    return () => clearInterval(id);
  }, [tickMs]);


  const visibleSensors = useMemo(() => {
    return sensors
      .filter((s) => (room === "all" ? true : s.room === room))
      .filter((s) => (type === "all" ? true : s.type === type))
      .sort((a, b) => (pinned.has(b.id) ? 1 : 0) - (pinned.has(a.id) ? 1 : 0));
  }, [sensors, room, type, pinned]);

  const rooms = useMemo(() => {
    return Array.from(new Set(sensors.map((s) => s.room)));
  }, [sensors]);

  const onTogglePin = useCallback((id) => {
    setPinned((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, [])

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <div style={styles.title}>Smart Home Control Center</div>
          <div style={styles.sub}>
            10 датчиков
          </div>
        </div>

        <div style={styles.controls}>
          <label style={styles.label}>
            Комната:
            <select value={room} onChange={(e) => setRoom(e.target.value)} style={styles.select}>
              <option value="all">Все</option>
              {rooms.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>

          <label style={styles.label}>
            Тип:
            <select value={type} onChange={(e) => setType(e.target.value)} style={styles.select}>
              <option value="all">Все</option>
              <option value="temp">Temp</option>
              <option value="humidity">Humidity</option>
              <option value="co2">CO₂</option>
              <option value="noise">Noise</option>
            </select>
          </label>

          <label style={styles.label}>
            CO₂ лимит: <b>{co2Limit}</b>
            <input
              type="range"
              min="600"
              max="1600"
              value={co2Limit}
              onChange={(e) => setCo2Limit(Number(e.target.value))}
              style={styles.range}
            />
          </label>

          <label style={styles.label}>
            Tick (мс): <b>{tickMs}</b>
            <input
              type="range"
              min="200"
              max="1500"
              step="50"
              value={tickMs}
              onChange={(e) => setTickMs(Number(e.target.value))}
              style={styles.range}
            />
          </label>
        </div>
      </header>

      <main style={styles.main}>
        <SensorGrid
          sensors={visibleSensors}
          pinned={pinned}
          onTogglePin={onTogglePin}
        />
      </main>
    </div>
  );
}

const styles = {
  page: { fontFamily: "system-ui, Arial", padding: 16, color: "#111" },
  header: { display: "flex", gap: 16, alignItems: "flex-start", justifyContent: "space-between" },
  title: { fontSize: 20, fontWeight: 800 },
  sub: { fontSize: 13, opacity: 0.8, marginTop: 4, maxWidth: 680 },
  controls: { display: "grid", gap: 10, gridTemplateColumns: "repeat(2, minmax(240px, 1fr))" },
  label: { display: "grid", gap: 6, fontSize: 13, alignContent: "start" },
  select: { padding: 8, borderRadius: 10, border: "1px solid #ddd" },
  range: { width: "100%" },
  main: { display: "grid", gridTemplateColumns: "1fr 360px", gap: 14, marginTop: 14 },
};
