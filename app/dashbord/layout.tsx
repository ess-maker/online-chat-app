
import Sidebar from "./_ui/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex gap-4 w-full overflow-hidden">
        <Sidebar />
        {children}
    </main>
  )
}
