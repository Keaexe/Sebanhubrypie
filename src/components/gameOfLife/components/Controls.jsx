import "../style.css";

export default function Controls({ onTick, onPlay, onPause, onReset }) {
  return (
    <div className="controls">
      <button id="tickB" onClick={onTick}>
        Step
      </button>
      <button id="playB" onClick={onPlay}>
        Play
      </button>
      <button id="pauseB" onClick={onPause}>
        Pause
      </button>
      <button id="resetB" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
