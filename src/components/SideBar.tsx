import "../../public/cover.png"
import { Avatar } from "./Avatar"
export function SideBar() {
  return (
    <aside className="w-full h-72 bg-[#202024] rounded-lg overflow-hidden md:w-64">

      <img
        src="cover.png"
        alt=""
        className="w-full h-[72px] object-cover "
      />

      <div className="flex flex-col items-center mt-[-27px]">

        <Avatar src="https://github.com/Bernardo2905.png" hasBorder />


        <h6 className="mt-4 text-gray-300 font-bold">Bernardo Padilha</h6>
        <span className="text-gray-300">Web Developer</span>

      </div>

      <footer className="border-t-[1px] border-solid border-[#323238] mt-5 pt-5 px-8 pb-8">
        <a href="#" className="w-full bg-white text-primary border-[1px] border-solid border-primary rounded-lg h-[50px] py-0 px-5 flex font-bold no-underline items-center justify-center  hover:bg-primary hover:text-white duration-500">
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}