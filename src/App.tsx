import { useState, useEffect } from 'react'
import PageSocialismContent from './PageSocialismContent'
import PageAIUsage from './PageAIUsage'
import Header from './Header'
import ChatBot from './ChatBot'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [showChatBot, setShowChatBot] = useState(false)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleLocationChange)
    
    // Check path on mount
    handleLocationChange()

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
  }

  if (currentPath === '/learning') {
    return <PageSocialismContent onBack={() => navigate('/')} />
  }

  if (currentPath === '/ai-usage') {
    return <PageAIUsage />
  }

  return (
    <div className="relative flex flex-col w-screen min-h-screen overflow-x-hidden">
      {/* Header chung */}
      <Header 
        currentPage="home"
        onHomeClick={() => navigate('/')}
        onLearningClick={() => navigate('/learning')}
        onAIUsageClick={() => navigate('/ai-usage')}
        onAIChatClick={() => setShowChatBot(!showChatBot)}
        showChatBot={showChatBot}
      />

      {/* Hero Section */}
      <section className="relative w-screen min-h-screen flex items-center justify-center pt-[73px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 grayscale opacity-40 mix-blend-overlay"
            data-alt="Dignified artistic illustration of President Ho Chi Minh"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXPARXboUJDHD-5-k4tvscFLa-qEpnf8RGZN8spjm0g5ywjEz8cz8NtuN8my8ThhaUiL-_YZsCs2TV5LviCIz5Nady3pZ-KMzFPkw7xCKok2BwZPt_MNm46llgUFovgCBjsSiaZd-jXl95ZeyKm1-cSKq6PDJJpT9RFB3lhktGSnhCsh0X-h5aRoqggvMXJyHlXNtWMN-rcFdVAbY9TFrRlS1uDxStObMhZnU0SNrY7bHD-J9eojtAvG3KQKvUg_0BTeC-z-udRdaP')",
              backgroundSize: 'auto 90%',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 lotus-bg"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-[900px] mt-8 md:mt-10">
          <span className="inline-block text-gold text-sm font-bold tracking-[0.5em] uppercase mb-6 opacity-80">
            Chủ tịch Hồ Chí Minh
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-8 drop-shadow-2xl">
            KHÔNG CÓ GÌ QUÝ HƠN <br />
            <span className="text-gold italic">ĐỘC LẬP, TỰ DO</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Khám phá hành trình tìm đường cứu nước và khát vọng xây dựng Chủ nghĩa xã hội của Người
            qua không gian di sản số tương tác.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary border-b-4 border-primary/50 hover:border-b-0 hover:translate-y-1 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest transition-all w-full sm:w-auto">
              Bắt đầu hành trình
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Feature Section: The Pillars */}
      <section className="py-24 px-6 md:px-20 bg-background-dark relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 mb-16 border-l-4 border-gold pl-8">
            <h2 className="text-white text-4xl font-black tracking-tight">Những trụ cột tư tưởng</h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Hệ thống lý luận về Chủ nghĩa xã hội tại Việt Nam dựa trên nền tảng tư tưởng Hồ Chí
              Minh, tập trung vào giải phóng con người và phát triển quốc gia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="historical-card p-10 rounded-xl group hover:border-gold/60 transition-all duration-500">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider group-hover:text-gold transition-colors">
                Độc lập dân tộc
              </h3>
              <p className="text-white/50 leading-relaxed">
                Nền tảng tiên quyết và điều kiện bắt buộc cho sự tồn tại, phát triển bền vững của
                quốc gia trong kỷ nguyên mới.
              </p>
            </div>

            {/* Column 2 */}
            <div className="historical-card p-10 rounded-xl group hover:border-gold/60 transition-all duration-500">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-4xl">favorite</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider group-hover:text-gold transition-colors">
                Hạnh phúc nhân dân
              </h3>
              <p className="text-white/50 leading-relaxed">
                Mục tiêu cao nhất của chế độ xã hội chủ nghĩa là chăm lo đời sống vật chất và tinh
                thần cho mọi tầng lớp nhân dân.
              </p>
            </div>

            {/* Column 3 */}
            <div className="historical-card p-10 rounded-xl group hover:border-gold/60 transition-all duration-500">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-4xl">groups</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider group-hover:text-gold transition-colors">
                Công bằng xã hội
              </h3>
              <p className="text-white/50 leading-relaxed">
                Đảm bảo quyền lợi, nghĩa vụ và cơ hội phát triển bình đẳng cho mọi công dân, không
                để ai bị bỏ lại phía sau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-20 bg-background-light dark:bg-background-dark/50 relative">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">
              Biên niên sử
            </span>
            <h2 className="text-white text-4xl font-black mt-2">Dòng chảy lý tưởng</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[29px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>

            {/* Timeline Item 1 */}
            <div className="flex gap-10 mb-16 relative">
              <div className="z-10 flex-shrink-0 w-[60px] h-[60px] rounded-full bg-background-dark border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(197,160,110,0.3)]">
                <span className="text-gold font-bold">1911</span>
              </div>
              <div className="pt-2">
                <h4 className="text-gold text-lg font-bold mb-2">
                  Bến Nhà Rồng - Ra đi tìm đường cứu nước
                </h4>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  Chàng thanh niên Nguyễn Tất Thành rời Tổ quốc, bắt đầu hành trình vạn dặm xuyên
                  qua các lục địa để tìm chân lý giải phóng dân tộc.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-10 mb-16 relative">
              <div className="z-10 flex-shrink-0 w-[60px] h-[60px] rounded-full bg-background-dark border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(197,160,110,0.3)]">
                <span className="text-gold font-bold">1920</span>
              </div>
              <div className="pt-2">
                <h4 className="text-gold text-lg font-bold mb-2">Tiếp cận Luận cương của Lenin</h4>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  &quot;Cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát
                  khóc lên.&quot; - Người đã tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-10 mb-16 relative">
              <div className="z-10 flex-shrink-0 w-[60px] h-[60px] rounded-full bg-background-dark border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(197,160,110,0.3)]">
                <span className="text-gold font-bold">1945</span>
              </div>
              <div className="pt-2">
                <h4 className="text-gold text-lg font-bold mb-2">
                  Khai sinh nước Việt Nam Dân chủ Cộng hòa
                </h4>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  Bản Tuyên ngôn Độc lập vang lên tại quảng trường Ba Đình, khẳng định quyền tự do
                  dân tộc và đặt những viên gạch đầu tiên cho chế độ mới.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-10 relative">
              <div className="z-10 flex-shrink-0 w-[60px] h-[60px] rounded-full bg-background-dark border-2 border-gold flex items-center justify-center shadow-[0_0_20px_rgba(197,160,110,0.3)]">
                <span className="text-gold font-bold">Nay</span>
              </div>
              <div className="pt-2">
                <h4 className="text-gold text-lg font-bold mb-2">Đổi mới và Hội nhập</h4>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  Việt Nam tiếp tục kiên định con đường xã hội chủ nghĩa, xây dựng đất nước giàu
                  mạnh, dân chủ, công bằng và văn minh.
                </p>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* CTA / Artifact Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-[1200px] mx-auto historical-card rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-white text-3xl font-black mb-6">
              Bạn đã sẵn sàng bước vào không gian học tập sáng tạo?
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              Hàng ngàn tài liệu quý giá, bản đồ tương tác và các bài học trực quan đang chờ đón
              bạn khám phá.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/learning')}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm transition-all hover:bg-primary/90"
              >
                Tham gia ngay
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 min-h-[300px] bg-cover bg-center grayscale contrast-125"
            data-alt="Vintage archival documents and historical maps"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs5llQK7vYpGhMBw_X-I1XnUZvqvvY2CfPn6xLmDXcUnOi-r4A6M_GeAzQsMly39S-daueRrdqeKYM52z5rx6TYHw6o00luQ0NvvplliFc73ySq9byEnvtQRU6B6i6rroGSsWCb1vE8yd0fpFTDeb721DLf843VisxanQbwCryJK-VR0xgbda1hR_j5ReTvP76UDPympGMp3W1nJXd_dfBc0WbH-tALwALmn_95RAtOC22bOBP5cG08RbLuhxExcobT2OxZ8jrQ84A')",
            }}
          ></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark border-t border-white/5 pt-12 pb-10 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80 mb-2">
            Sản phẩm sáng tạo môn HCM 202
          </p>
          <p className="text-[9px] text-white/60">
            Cam kết liêm chính học thuật - Nội dung được trình bày chính xác theo tư liệu học thuật
          </p>
        </div>
      </footer>

      {/* ChatBot hiển thị ở mọi trang */}
      <ChatBot isOpen={showChatBot} onClose={() => setShowChatBot(false)} />
    </div>
  )
}

export default App
