export default function BillCard() {
  // Dummy data for the mock-up
  const billData = {
    title: "Postal Service Reform Act of 2022",
    number: "H.R.2614",
    category: "Government Operations",
    tags: ["Reform", "Postal Service"],
    actionDate: "2022-04-06",
    actionDescription: "Passed Senate",
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white max-w-sm">
      <h3 className="text-xl font-bold mb-2">{billData.title}</h3>
      <p className="mb-1">
        <strong>Bill Number:</strong> {billData.number}
      </p>
      <p className="mb-1">
        <strong>Category:</strong> {billData.category}
      </p>

      <div className="flex gap-2 mb-2">
        {billData.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-vivid-cerulean px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-1">
        <strong>Action Date:</strong> {billData.actionDate}
      </p>
      <p>
        <strong>Action:</strong> {billData.actionDescription}
      </p>
    </div>
  );
}
