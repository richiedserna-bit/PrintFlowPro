export default function StockBadge({ stock, minStock }) {
  let status = "In Stock";
  let badgeColor = "bg-green-100 text-green-700";
  let dotColor = "bg-green-500";

  if (stock === 0) {
    status = "Out of Stock";
    badgeColor = "bg-red-100 text-red-700";
    dotColor = "bg-red-500";
  } else if (stock <= minStock) {
    status = "Low Stock";
    badgeColor = "bg-yellow-100 text-yellow-700";
    dotColor = "bg-yellow-500";
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${dotColor}`}
      ></span>

      {status}
    </span>
  );
}