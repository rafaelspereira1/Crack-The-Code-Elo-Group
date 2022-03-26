import { v4 as uuidv4 } from "uuid";

import "./styles.css";

export default function Table({ columns, rows, onRowClick }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((columns) => {
          return (
            <tr
              onClick={(event) => onRowClick && onRowClick(columns, event)}
              key={uuidv4()}
            >
              {columns.map((column) => {
                return <td key={uuidv4()}>{column}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
