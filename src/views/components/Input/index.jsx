import "./styles.css";

export default function Input({ label, error, ...rest }) {
  return (
    <div className="input-container">
      {label && <span>{label}</span>}
      <input type="text" {...rest} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
