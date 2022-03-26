import "./styles.css";

export default function Button({ label, ...rest }) {
  return <button {...rest}>{label}</button>;
}
