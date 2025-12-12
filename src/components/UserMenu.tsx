import UserIcon from "../assets/usario";
import CargoIcon from "../assets/cargo";
import CerrarIcon from "../assets/cerrar";

interface UserMenuProps {
  onLogout: () => void;
  user: {
    nombre_completo?: string;
    nombre?: string;
    usuario?: string;
    rol?: string;
  };
}

const UserMenu = ({ onLogout, user }: UserMenuProps) => {
  const displayName = user?.nombre_completo || user?.nombre || user?.usuario || "Usuario";
  const displayRol = user?.rol || "Sin cargo asignado";

  return (
    <div 
      className="fixed top-16 right-6 w-72 rounded-2xl shadow-2xl overflow-hidden"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        zIndex: 999999
      }}
    >
      {/* Header con info del usuario */}
      <div 
        className="px-5 py-4"
        style={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <UserIcon width={24} height={24} fill="#ffffff" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">
              {displayName}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <CargoIcon width={14} height={14} fill="rgba(255, 255, 255, 0.6)" />
              <p className="text-xs truncate" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                {displayRol}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de opciones */}
      <div className="py-2 px-2">
        <button 
          onClick={onLogout} 
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg group-hover:bg-[rgba(255,77,77,0.2)] transition-all duration-200">
            <CerrarIcon width={18} height={18} fill="#ff4d4d" />
          </div>
          <span className="font-medium text-sm">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
