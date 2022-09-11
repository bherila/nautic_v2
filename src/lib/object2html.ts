import { escapeHtml } from "@hapi/hoek";

export default function object2html(obj: any) {
  return (
    "<table>" +
    Object.keys(obj)
      .map((key) => `<tr><td>${key}</td><td>${escapeHtml(obj[key])}</td>`)
      .join("\n") +
    "</table>"
  );
}
