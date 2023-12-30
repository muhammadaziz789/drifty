export function CCard({ classes, width = "500", children }) {
  return (
    <div
      className={`bg-white border border-borderDarker p-5 w-full ${classes}`}
      style={{ width: width }}
    >
      {children}
    </div>
  );
}
