type NodeData = {
  value: string;
  code: string;
};
const DUMMY_NODES:NodeData[] = [
  { value: "Stripe", code: "St" },
  { value: "Paypal", code: "Pp" },
  // { value: "Google Pay", code: "GP" },
  { value: "Apple Pay", code: "AP" },
  { value: "Amazon Pay", code: "Am" },
];

export default DUMMY_NODES;
