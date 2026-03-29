/* Type Narrowing - Type narrowing means reducing a variable’s type to a more specific type using checks.

👉 TypeScript starts with a broad type (like string | number)
👉 Then you narrow it down using conditions

*/

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai Order:${kind}`;
}

function ServeChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return "Serving default masala Chai...";
}

class kulhadChai {
  serve() {
    return `Serving Kulhad Chai...`;
  }
}
class CuttingChai {
  serve() {
    return `Serving Cutting Chai...`;
  }
}

function server(chai: kulhadChai | CuttingChai) {
  if (chai instanceof kulhadChai) {
    chai.serve();
  }
}
