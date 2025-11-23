export default function GlassCard({ children, customStyle }) {
  return (
    <div className={`w-[75%] h-[80%] p-6 rounded-2xl 
                    bg-white/20 border border-white/10 
                    backdrop-blur-md shadow-lg 
                    flex flex-col justify-center items-center
                    relative overflow-hidden text-center gap-y-2 ${customStyle}`}>

      {/* Optional inner shadow */}
      <div className="absolute inset-0 shadow-inner rounded-2xl pointer-events-none"></div>

      {children}

      {/* Linear gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0EFEB]/10 to-[#FFF9F5]/10 rounded-2xl pointer-events-none"></div>
    </div>
  )
}
