import "../style.css";

export function Settings({ onSetTps, onResize }) {
  return (
    <div className="settings">
      <button className="tps" onClick={onSetTps}>
        Set TPS
      </button>
      <button className="resize" onClick={onResize}>
        Resize board
      </button>
    </div>
  );
}
