import BillCard from "./BillCard";
import bills from "./bills";

export default function BillsList() {
  return (
    <div>
      {bills.map((bill) => (
        <BillCard key={bill.id} bill={bill} />
      ))}
    </div>
  );
}
