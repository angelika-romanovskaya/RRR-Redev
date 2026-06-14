import React from "react";
import { renderBadge, formatValue } from "./format";

function SensorTile({ sensor, pinned, onTogglePin }) {
  console.log('----SensorTile----');

  return (
    <div style={{ ...styles.tile, outline: pinned ? "2px solid #111" : "1px solid #eaeaea" }}>
      <div style={styles.top}>
        <div style={styles.name}>{sensor.name}</div>
        <button style={styles.pin} onClick={() => onTogglePin(sensor.id)}>
          {pinned ? "Unpin" : "Pin"}
        </button>
      </div>

      <div style={styles.row}>
        <div style={styles.badge}>{renderBadge(sensor.type)}</div>
        <div style={styles.room}>{sensor.room}</div>
      </div>

      <div style={styles.value}>{formatValue(sensor.type, sensor.value)}</div>

      <div style={styles.footer}>
        <span style={styles.small}>обновлено: {new Date(sensor.updatedAt).toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

const styles = {
  tile: { borderRadius: 16, padding: 12, background: "#fff" },
  top: { display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" },
  name: { fontWeight: 800, fontSize: 13, lineHeight: 1.2 },
  pin: { border: "1px solid #ddd", borderRadius: 10, padding: "6px 10px", background: "#fafafa", cursor: "pointer" },
  row: { display: "flex", justifyContent: "space-between", marginTop: 8 },
  badge: { fontSize: 12, opacity: 0.85 },
  room: { fontSize: 12, opacity: 0.7 },
  value: { marginTop: 10, fontSize: 22, fontWeight: 900 },
  footer: { display: "flex", justifyContent: "space-between", marginTop: 10 },
  small: { fontSize: 11, opacity: 0.65 },
};


export default React.memo(SensorTile, (prevProps, nextProps) => {
  return (
    prevProps.pinned === nextProps.pinned &&
    prevProps.sensor === nextProps.sensor
  );
});