export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">
        SAZO Admin
      </h1>

      <div className="flex items-center gap-4">
        <span>관리자</span>
      </div>
    </header>
  );
}