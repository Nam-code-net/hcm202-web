type HeaderProps = {
  currentPage?: 'home' | 'learning' | 'ai-usage'
  onHomeClick?: () => void
  onLearningClick?: () => void
  onAIChatClick?: () => void
  onAIUsageClick?: () => void
  showChatBot?: boolean
}

function Header({ 
  currentPage = 'home', 
  onHomeClick,
  onLearningClick,
  onAIChatClick,
  onAIUsageClick,
  showChatBot = false
}: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gold text-3xl">star_rate</span>
          <h2 className="text-white text-lg font-bold uppercase tracking-widest">
            Khát vọng <span className="text-gold">Việt Nam</span>
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={onHomeClick}
            className={`text-xs font-bold uppercase tracking-[0.2em] transition-all px-3 py-2 rounded-lg ${
              currentPage === 'home'
              ? 'text-gold hover:bg-white/10 hover:scale-105'
                : 'text-gold border-b-2 border-gold pb-1 bg-gold/10'
                
            }`}
          >
            Trang chủ
          </button>
          <button
            onClick={onLearningClick}
            className={`text-xs font-bold uppercase tracking-[0.2em] transition-all px-3 py-2 rounded-lg ${
              currentPage === 'learning'
              ? 'text-gold hover:bg-white/10 hover:scale-105'
                : 'text-gold border-b-2 border-gold pb-1 bg-gold/10'
                
            }`}
          >
            Học tập
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onAIChatClick}
            className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
              showChatBot
                ? 'bg-accent-gold text-white'
                : 'bg-white/5 text-white border border-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            AI Chat Bot
          </button>
          <button
            onClick={onAIUsageClick}
            className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
              currentPage === 'ai-usage'
                ? 'bg-accent-gold text-white'
                : 'bg-white/5 text-white border border-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-sm">psychology</span>
            AI Usage
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

