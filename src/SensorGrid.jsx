import React from "react";
import SensorTile from "./SensorTile";

function SensorGrid({ sensors, pinned, onTogglePin }) {
  console.log('----SensorGrid----');
  
  return (
    <section style={styles.card}>
      <div style={styles.head}>
        <div style={styles.hTitle}>Датчики</div>
        <div style={styles.hMeta}>рендерится часто. слишком часто</div>
      </div>

      <div style={styles.grid}>
        {sensors.map((s) => (
          <SensorTile
            key={s.id}
            sensor={s}
            pinned={pinned.has(s.id)}
            onTogglePin={onTogglePin}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  card: { border: "1px solid #e6e6e6", borderRadius: 16, padding: 12 },
  head: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 },
  hTitle: { fontWeight: 800 },
  hMeta: { fontSize: 12, opacity: 0.7 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 10 },
};


export default React.memo(SensorGrid, (prevProps, nextProps) => {
  return (
    prevProps.pinned === nextProps.pinned &&
    prevProps.sensor === nextProps.sensor
  );
});