export default function BillCard({ bill }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white max-w-sm">
      <h3 className="text-xl font-bold mb-2">{bill.title}</h3>
      <p className="mb-1">
        <strong>Bill Number:</strong> {bill.number}
      </p>
      <p className="mb-1">
        <strong>Category:</strong> {bill.category}
      </p>

      <div className="flex gap-2 mb-2">
        {bill.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-vivid-cerulean px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-1">
        <strong>Action Date:</strong> {bill.actionDate}
      </p>
      <p>
        <strong>Action:</strong> {bill.actionDescription}
      </p>
    </div>
  );
}
