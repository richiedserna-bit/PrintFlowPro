export default function StatusBadge({ status }) {

  const styles = {
    Completed: {
      badge: "bg-green-100 text-green-700",
      dot: "bg-green-500",
    },

    Printing: {
      badge: "bg-blue-100 text-blue-700",
      dot: "bg-blue-500",
    },

    Waiting: {
      badge: "bg-yellow-100 text-yellow-700",
      dot: "bg-yellow-500",
    },
  };


  const current = styles[status] || styles.Waiting;


  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
        ${current.badge}
      `}
    >

      <span
        className={`
          w-2
          h-2
          rounded-full
          ${current.dot}
        `}
      ></span>

      {status}

    </span>
  );
}