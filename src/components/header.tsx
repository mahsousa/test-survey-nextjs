export default function Header() {
  return (
    <div className="container-fluid bg-blueblack h-300">
      <div className="flex text-white items-center justify-between px-4 py-8">
        {/* Divs alinhadas à esquerda */}
        <div className="flex items-center space-x-4">
          <div>
            <i className="bi bi-list text-2xl"></i>
          </div>
          <div className="text-24 font-poppins">
            SUA <span className="font-bold text-yellow-500">LOGO</span>
          </div>
        </div>

        {/* Divs alinhadas à direita */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-bluegrey text-white rounded-full flex items-center justify-center">
            M
          </div>
          <div>Maria</div>
          <div>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="font-poppins text-12 text-grey font-medium leading-5 px-12">
        Pesquisa de Satisfação
      </div>
      <div className="font-poppins text-40 font-semibold leading-10 tracking-normal text-white text-center">
        Pesquisa de Satisfação
      </div>
    </div>
  );
}
