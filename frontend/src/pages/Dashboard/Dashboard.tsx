import AdminLayout from "../../layouts/AdminLayout";
import Card from "../../components/ui/Card";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>

      <div className="grid grid-cols-3 gap-6">

        <Card title="오늘 주문">
          <p className="text-3xl font-bold">25건</p>
        </Card>

        <Card title="배송중">
          <p className="text-3xl font-bold">14건</p>
        </Card>

        <Card title="신규 회원">
          <p className="text-3xl font-bold">8명</p>
        </Card>

      </div>
    </AdminLayout>
  );
}