import "../../public/logo.png";
export function Header() {
  return (
    <div className="w-full h-20 bg-header flex items-center justify-center py-5 px-0">
      <img src="logo.png" alt="" className="h-8" />
      <h1 className="text-white font-semibold p-1 tracking-wide">RBook</h1>
    </div>
  )
}