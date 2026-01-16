import { useState } from 'react'
import ChatBot from './ChatBot'
import Header from './Header'

type PageSocialismContentProps = {
  onBack?: () => void
}

function PageSocialismContent({ onBack }: PageSocialismContentProps) {
  const [activeSection, setActiveSection] = useState('tinh-chat')
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showChatBot, setShowChatBot] = useState(false)
  const [aiHintQuestionId, setAIHintQuestionId] = useState<number | null>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
  }

  const quizQuestions = [
    {
      id: 1,
      question: 'Theo Hồ Chí Minh, đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là gì?',
      options: [
        'Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa',
        'Từ một nước công nghiệp phát triển tiến lên chủ nghĩa xã hội',
        'Từ một nước thuộc địa tiến lên chủ nghĩa tư bản',
        'Từ một nước phong kiến tiến lên chủ nghĩa xã hội'
      ],
      correct: 0
    },
    {
      id: 2,
      question: 'Nguyên tắc nào được Hồ Chí Minh nhấn mạnh trong việc xây dựng chủ nghĩa xã hội?',
      options: [
        'Xây phải đi đôi với chống',
        'Chỉ tập trung xây dựng, không cần chống',
        'Chỉ tập trung chống, không cần xây',
        'Xây và chống tách biệt hoàn toàn'
      ],
      correct: 0
    },
    {
      id: 3,
      question: 'Nhiệm vụ quan trọng nhất về kinh tế trong thời kỳ quá độ theo Hồ Chí Minh là gì?',
      options: [
        'Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại',
        'Giữ nguyên nền kinh tế cũ',
        'Chỉ phát triển công nghiệp',
        'Chỉ phát triển nông nghiệp'
      ],
      correct: 0
    },
    {
      id: 4,
      question: 'Theo Hồ Chí Minh, điều kiện tiên quyết để xây dựng chủ nghĩa xã hội là gì?',
      options: [
        'Giữ vững độc lập dân tộc',
        'Phát triển kinh tế trước',
        'Xây dựng văn hóa trước',
        'Học tập kinh nghiệm nước ngoài'
      ],
      correct: 0
    },
    {
      id: 5,
      question: 'Ví dụ về vận dụng tư tưởng Hồ Chí Minh trong phòng, chống tham nhũng là gì?',
      options: [
        'Giảm "tham nhũng vặt" trong giải quyết thủ tục hành chính cho người dân',
        'Chỉ tập trung vào tham nhũng lớn',
        'Không cần công khai quy trình',
        'Chỉ xử lý mà không cần xây dựng cơ chế mới'
      ],
      correct: 0
    }
  ]

  const calculateScore = () => {
    let correct = 0
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.options[q.correct]) {
        correct++
      }
    })
    return Math.round((correct / quizQuestions.length) * 100)
  }

  return (
    <>
      <div className="grain-overlay"></div>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pt-[73px]">
        {/* Header chung */}
        <Header 
          currentPage="learning"
          onHomeClick={() => {
            window.history.pushState({}, '', '/')
            if (onBack) onBack()
          }}
          onLearningClick={() => {}}
          onAIChatClick={() => setShowChatBot(!showChatBot)}
          onAIUsageClick={() => {
            window.history.pushState({}, '', '/ai-usage')
            window.dispatchEvent(new PopStateEvent('popstate'))
          }}
          showChatBot={showChatBot}
        />

        <div className="flex flex-1">
          {/* Left Side Navigation - Coursera Style */}
          <aside className="hidden lg:flex w-80 flex-col border-r border-white/10 bg-background-dark/80 backdrop-blur-sm sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-gold text-xl font-black leading-tight mb-1">
                  Thời kỳ quá độ
                </h1>
                <p className="text-white/90 text-xs font-medium uppercase tracking-widest">
                  Lên chủ nghĩa xã hội ở Việt Nam
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Tiến độ học tập</span>
                  <span className="text-xs font-bold text-gold">{readingProgress}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="bg-gold h-full transition-all duration-500 rounded-full"
                    style={{ width: `${readingProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Course Outline */}
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection('tinh-chat')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeSection === 'tinh-chat'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${
                    activeSection === 'tinh-chat' ? 'text-white' : 'text-white/90'
                  }`}>
                    {activeSection === 'tinh-chat' ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      activeSection === 'tinh-chat' ? 'text-white' : 'text-white'
                    }`}>Tính chất</p>
                    <p className={`text-[10px] mt-0.5 ${
                      activeSection === 'tinh-chat' ? 'text-white/90' : 'text-white/80'
                    }`}>Thời kỳ quá độ</p>
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection('dac-diem')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeSection === 'dac-diem'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${
                    activeSection === 'dac-diem' ? 'text-white' : 'text-white/90'
                  }`}>
                    {activeSection === 'dac-diem' ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      activeSection === 'dac-diem' ? 'text-white' : 'text-white'
                    }`}>Đặc điểm</p>
                    <p className={`text-[10px] mt-0.5 ${
                      activeSection === 'dac-diem' ? 'text-white/90' : 'text-white/80'
                    }`}>Lớn nhất của thời kỳ quá độ</p>
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection('nhiem-vu')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeSection === 'nhiem-vu'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${
                    activeSection === 'nhiem-vu' ? 'text-white' : 'text-white/90'
                  }`}>
                    {activeSection === 'nhiem-vu' ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      activeSection === 'nhiem-vu' ? 'text-white' : 'text-white'
                    }`}>Nhiệm vụ</p>
                    <p className={`text-[10px] mt-0.5 ${
                      activeSection === 'nhiem-vu' ? 'text-white/90' : 'text-white/80'
                    }`}>Các lĩnh vực</p>
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection('nguyen-tac')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeSection === 'nguyen-tac'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${
                    activeSection === 'nguyen-tac' ? 'text-white' : 'text-white/90'
                  }`}>
                    {activeSection === 'nguyen-tac' ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      activeSection === 'nguyen-tac' ? 'text-white' : 'text-white'
                    }`}>Nguyên tắc</p>
                    <p className={`text-[10px] mt-0.5 ${
                      activeSection === 'nguyen-tac' ? 'text-white/90' : 'text-white/80'
                    }`}>Xây dựng CNXH</p>
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection('lien-he')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    activeSection === 'lien-he'
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span className={`material-symbols-outlined text-sm ${
                    activeSection === 'lien-he' ? 'text-white' : 'text-white/90'
                  }`}>
                    {activeSection === 'lien-he' ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <div className="flex-1">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      activeSection === 'lien-he' ? 'text-white' : 'text-white'
                    }`}>Liên hệ thực tiễn</p>
                    <p className={`text-[10px] mt-0.5 ${
                      activeSection === 'lien-he' ? 'text-white/90' : 'text-white/80'
                    }`}>Phòng chống tham nhũng</p>
                  </div>
                </button>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      scrollToSection('quiz')
                      setShowQuiz(true)
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-accent-gold/20 hover:bg-accent-gold/30 text-accent-gold transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">quiz</span>
                    <div className="flex-1 text-left">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent-gold">Bài kiểm tra</p>
                      <p className="text-[10px] text-accent-gold/70 mt-0.5">5 câu hỏi</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-background-dark">
            {/* Hero Content */}
            <section className="relative">
              <div
                className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
                data-alt="Abstract vintage map of Vietnam in sepia tones with ink splatters"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(15, 35, 35, 0.85), rgba(15, 35, 35, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGlsOD-lTNRb40-_ijLxanYFBX05Wmah95WMeUU0HevNIFheq-MUhls9USTpbPgCuzCEO6jPRdvvG6A228Puo0uVYiacqcR5JfOaBDzVoxoLKB-6NQoqFkLP8P1GtLFAv3RNOCnA9_MMBD40Fa7V05oIaKiVLfbu9645UediDvnUfOa4VNsI5G3iVK0q3LSBaSIYXNmRGBBmCF4Sv2VIBrd4VKoR9_Y61Vs-oOng-eZ8hNLi1V82AYZ_4fK2R3gBzG-imOOoAeSfRj")',
                }}
              >
                <div className="max-w-4xl flex flex-col items-center gap-6">
                  <span className="inline-block px-4 py-1 border border-accent-gold/50 rounded-full text-[10px] font-bold text-accent-gold uppercase tracking-[0.3em]">
                    Bài học 3
                  </span>
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                    Tư tưởng Hồ Chí Minh về{' '}
                    <span className="text-primary italic">Thời kỳ quá độ</span>
                    <br />
                    lên chủ nghĩa xã hội ở Việt Nam
                  </h1>
                  <p className="text-white/80 text-base md:text-lg max-w-2xl font-light leading-relaxed">
                    Khám phá tính chất, đặc điểm, nhiệm vụ và các nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ theo tư tưởng Hồ Chí Minh.
                  </p>
                </div>
              </div>
            </section>

            {/* Video Section */}
            <section className="py-12 px-6 md:px-12 bg-background-dark">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">
                    Video
                  </span>
                  <h2 className="text-white text-2xl md:text-3xl font-black mt-2">Video tài liệu</h2>
                </div>
                <div className="flex justify-center">
                  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/y00L9b0hqKc"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
              {/* Section 1: Tính chất */}
              <section 
                id="tinh-chat" 
                className="mb-16 scroll-mt-24"
                onMouseEnter={() => {
                  setActiveSection('tinh-chat')
                  setReadingProgress(Math.max(readingProgress, 20))
                }}
              >
                <div className="bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">info</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      a) Tính chất, đặc điểm và nhiệm vụ của thời kỳ quá độ
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4">– Tính chất của thời kỳ quá độ:</h3>
                      <p className="text-white/90 leading-relaxed mb-4">
                        Đây là thời kỳ cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ.
                      </p>
                      <p className="text-white/80 leading-relaxed">
                        Theo Hồ Chí Minh, thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là thời kỳ cải biến xã hội cũ thành xã hội mới – một xã hội chưa từng có trong lịch sử dân tộc ta. Thời kỳ này, dân tộc ta phải thay đổi triệt để những nếp sống, thói quen, ý nghĩ và thành kiến có rễ sâu hàng ngàn năm; phải xóa bỏ giai cấp bóc lột; phải biến một nước dốt nát, cực khổ thành một nước văn hóa cao và đời sống tươi vui, hạnh phúc. Trong điều kiện nước ta là một nước nông nghiệp lạc hậu, mới thoát khỏi ách thực dân, phong kiến, đó là cuộc biến đổi sâu sắc nhất, khó khăn nhất, thậm chí còn khó khăn, phức tạp hơn cả việc đánh giặc. Vì vậy, tiến lên chủ nghĩa xã hội không thể một sớm một chiều, không thể làm mau được mà phải làm dần dần.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Đặc điểm */}
              <section 
                id="dac-diem" 
                className="mb-16 scroll-mt-24"
                onMouseEnter={() => {
                  setActiveSection('dac-diem')
                  setReadingProgress(Math.max(readingProgress, 40))
                }}
              >
                <div className="bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-accent-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-accent-gold text-3xl">star</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      – Đặc điểm của thời kỳ quá độ:
                    </h2>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed mb-4 font-semibold">
                    Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed">
                    Bước vào thời kỳ quá độ, Việt Nam cũng có những đặc điểm giống như các nước khác, đó là sự tồn tại đan xen giữa các yếu tố của xã hội cũ và các yếu tố của xã hội mới trên tất cả các lĩnh vực của đời sống; là giai đoạn đấu tranh gay gắt, khi các yếu tố của xã hội cũ còn hình thành một thế lực thì có khi chúng còn chiến thắng các yếu tố của xã hội mới vừa xuất hiện. Tuy nhiên, từ thực tiễn xã hội Việt Nam, Hồ Chí Minh nhấn mạnh: &quot;Đặc điểm to nhất của ta trong thời kỳ quá độ là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa&quot;. Cùng với những đặc điểm khác và mục tiêu của chủ nghĩa xã hội, đặc điểm này quy định nhiệm vụ của dân tộc ta trong thời kỳ quá độ.
                  </p>
                </div>
              </section>

              {/* Section 3: Nhiệm vụ */}
              <section 
                id="nhiem-vu" 
                className="mb-16 scroll-mt-24"
                onMouseEnter={() => {
                  setActiveSection('nhiem-vu')
                  setReadingProgress(Math.max(readingProgress, 60))
                }}
              >
                <div className="bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">task_alt</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      – Nhiệm vụ của thời kỳ quá độ:
                    </h2>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed mb-6">
                    Đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới phù hợp với quy luật tiến lên chủ nghĩa xã hội trên tất cả các lĩnh vực của đời sống, trong đó:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">gavel</span>
                        Về chính trị:
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        phải xây dựng được chế độ dân chủ vì đây là bản chất của chủ nghĩa xã hội. Muốn xây dựng được chế độ dân chủ, theo Hồ Chí Minh, phải chống tất cả các biểu hiện của chủ nghĩa cá nhân, trước hết là trong Đảng và trong bộ máy chính quyền từ cấp cơ sở đến Trung ương; đồng thời phải bồi dưỡng, giáo dục để nhân dân có tri thức, có năng lực làm chủ chế độ xã hội.
                      </p>
                    </div>

                    <div className="bg-accent-gold/5 dark:bg-accent-gold/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-accent-gold mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">trending_up</span>
                        Về kinh tế:
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        trong bối cảnh nền kinh tế nước ta còn nghèo nàn, kỹ thuật lạc hậu, Hồ Chí Minh xác định nhiệm vụ quan trọng nhất của thời kỳ quá độ là cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại. Đây là quá trình xây dựng nền tảng vật chất – kỹ thuật của chủ nghĩa xã hội. Giữa cải tạo và xây dựng thì xây dựng là nhiệm vụ chủ chốt và lâu dài, đồng thời phải luôn gắn với việc thực hiện đầy đủ quyền làm chủ của nhân dân.
                      </p>
                    </div>

                    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">palette</span>
                        Về văn hóa:
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        phải triệt để tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch của văn hóa đế quốc; đồng thời phát triển những truyền thống tốt đẹp của văn hóa dân tộc và tiếp thu những giá trị tiến bộ của văn hóa thế giới để xây dựng một nền văn hóa Việt Nam có tính dân tộc, khoa học và đại chúng.
                      </p>
                    </div>

                    <div className="bg-accent-gold/5 dark:bg-accent-gold/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-accent-gold mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">groups</span>
                        Về các quan hệ xã hội:
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        phải thay đổi triệt để những quan hệ cũ đã trở thành thói quen trong lối sống, nếp sống của con người; xây dựng một xã hội dân chủ, công bằng, văn minh.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Nguyên tắc */}
              <section 
                id="nguyen-tac" 
                className="mb-16 scroll-mt-24"
                onMouseEnter={() => {
                  setActiveSection('nguyen-tac')
                  setReadingProgress(Math.max(readingProgress, 80))
                }}
              >
                <div className="bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-accent-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-accent-gold text-3xl">rule</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      b) Một số nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ
                    </h2>
                  </div>
                  
                  <p className="text-white/80 leading-relaxed mb-6">
                    Xây dựng chủ nghĩa xã hội là quá trình sâu sắc nhưng phức tạp, lâu dài, khó khăn, gian khổ, đòi hỏi tính năng động, sáng tạo. Tuy nhiên, theo Hồ Chí Minh, tính năng động, sáng tạo ấy phải tuân thủ những nguyên tắc nhất định.
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-bold text-primary mb-3">Thứ nhất, mọi tư tưởng và hành động phải được thực hiện trên nền tảng chủ nghĩa Mác – Lênin.</h3>
                      <p className="text-white/80 leading-relaxed">
                        Hồ Chí Minh quan niệm, chủ nghĩa Mác – Lênin là khoa học về cách mạng của quần chúng bị áp bức, bóc lột; là khoa học về sự thắng lợi của chủ nghĩa xã hội ở tất cả các nước; là khoa học về xây dựng chủ nghĩa cộng sản. Theo Người, cuộc cách mạng do giai cấp công nhân thực hiện chỉ có thể đạt được thắng lợi khi trung thành với những nguyên tắc của chủ nghĩa Mác – Lênin. Vì vậy, Người luôn nhắc nhở phải không ngừng học tập lập trường, quan điểm và phương pháp của chủ nghĩa Mác – Lênin, đồng thời cụ thể hóa cho phù hợp với điều kiện, hoàn cảnh từng lúc, từng nơi.
                      </p>
                    </div>

                    <div className="border-l-4 border-accent-gold pl-6">
                      <h3 className="text-lg font-bold text-accent-gold mb-3">Thứ hai, phải giữ vững độc lập dân tộc.</h3>
                      <p className="text-white/80 leading-relaxed">
                        Tự do cho đồng bào, độc lập cho Tổ quốc là mục tiêu của Hồ Chí Minh khi ra đi tìm đường cứu nước. Khi nước Việt Nam Dân chủ Cộng hòa ra đời, Người khẳng định: &quot;Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy&quot;. Đối với mỗi dân tộc, &quot;Không có gì quý hơn độc lập, tự do&quot;. Độc lập dân tộc là mục tiêu trước hết; đồng thời là điều kiện tiên quyết để xây dựng chủ nghĩa xã hội. Ngược lại, chủ nghĩa xã hội là cơ sở bảo đảm vững chắc cho nền độc lập dân tộc.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-bold text-primary mb-3">Thứ ba, phải đoàn kết, học tập kinh nghiệm của các nước anh em.</h3>
                      <p className="text-white/80 leading-relaxed">
                        Hồ Chí Minh xác định cách mạng Việt Nam là một bộ phận của lực lượng hòa bình, dân chủ, xã hội chủ nghĩa trên thế giới. Sự đoàn kết giữa các nước xã hội chủ nghĩa và phong trào cộng sản – công nhân quốc tế có ý nghĩa đặc biệt quan trọng. Tuy nhiên, việc học tập kinh nghiệm quốc tế không được rập khuôn, máy móc mà phải vận dụng một cách sáng tạo, phù hợp với điều kiện cụ thể của Việt Nam.
                      </p>
                    </div>

                    <div className="border-l-4 border-accent-gold pl-6">
                      <h3 className="text-lg font-bold text-accent-gold mb-3">Thứ tư, xây phải đi đôi với chống.</h3>
                      <p className="text-white/80 leading-relaxed">
                        Cùng với xây dựng các lĩnh vực của đời sống xã hội, phải kiên quyết đấu tranh chống lại mọi thế lực cản trở, phá hoại cách mạng. Người căn dặn phải luôn tỉnh táo, giữ vững lập trường, không mất cảnh giác trong hoàn cảnh hòa bình; sẵn sàng đập tan mọi âm mưu của kẻ thù để bảo vệ thành quả cách mạng và hòa bình. Đồng thời, phải đấu tranh xóa bỏ những thói quen, nếp nghĩ lạc hậu của xã hội cũ và kiên quyết chống chủ nghĩa cá nhân – thứ &quot;vi trùng độc hại&quot; sinh ra tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật, gây tổn hại cho cá nhân, nhân dân và tổ chức Đảng.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Liên hệ thực tiễn */}
              <section 
                id="lien-he" 
                className="mb-16 scroll-mt-24"
                onMouseEnter={() => {
                  setActiveSection('lien-he')
                  setReadingProgress(Math.max(readingProgress, 95))
                }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-accent-gold/20 rounded-xl shadow-lg p-8 md:p-10 border-2 border-primary/30">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">link</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      Liên hệ thực tiễn: Phòng, chống tham nhũng – lãng phí trong bộ máy nhà nước hiện nay
                    </h2>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên CNXH có giá trị rõ rệt đối với công tác phòng, chống tham nhũng – lãng phí hiện nay. Bởi trong thời kỳ quá độ, Người nhấn mạnh nhiệm vụ xây dựng chế độ dân chủ và đặc biệt phải chống chủ nghĩa cá nhân, quan liêu trước hết trong Đảng và bộ máy chính quyền. Đồng thời, nguyên tắc &quot;xây phải đi đôi với chống&quot; là phương châm rất phù hợp: vừa xây dựng cơ chế, chuẩn mực mới; vừa kiên quyết đấu tranh loại bỏ các biểu hiện tiêu cực cản trở sự phát triển.
                  </p>

                  <div className="bg-card-dark rounded-lg p-6 mb-6 border border-white/10">
                    <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">lightbulb</span>
                      Ví dụ: Giảm &quot;tham nhũng vặt&quot; trong giải quyết thủ tục hành chính cho người dân
                    </h3>
                    <p className="text-white/60 mb-4 italic">
                      (cấp giấy tờ, xác nhận, hồ sơ hành chính…)
                    </p>
                    <p className="text-white/80 leading-relaxed mb-4">
                      <strong>Vấn đề thực tế:</strong> Một số nơi còn tình trạng gây phiền hà, kéo dài thời gian, đòi hỏi hồ sơ lòng vòng hoặc phát sinh &quot;chi phí không chính thức&quot;, làm giảm niềm tin của người dân và gây lãng phí thời gian, tiền bạc xã hội.
                    </p>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-white/90 leading-relaxed mb-3 font-semibold">
                        Vận dụng tư tưởng Hồ Chí Minh để giải quyết:
                      </p>
                      <div className="space-y-3">
                        <div>
                          <p className="text-white/80 leading-relaxed mb-2">
                            <strong>Theo tinh thần &quot;xây đi đôi với chống&quot;:</strong>
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                            <li><strong>Xây:</strong> công khai quy trình, thời hạn, lệ phí; minh bạch trách nhiệm từng khâu; tạo điều kiện để người dân giám sát.</li>
                            <li><strong>Chống:</strong> xử lý nghiêm hành vi nhũng nhiễu, lợi dụng quyền hạn; chấn chỉnh tác phong quan liêu.</li>
                          </ul>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                          <strong>Theo yêu cầu chống chủ nghĩa cá nhân trong bộ máy:</strong> tăng rèn luyện đạo đức công vụ, đề cao tinh thần &quot;vì dân phục vụ&quot;, coi hiệu quả phục vụ nhân dân là tiêu chí đánh giá cán bộ.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed font-medium">
                    Như vậy, tư tưởng Hồ Chí Minh không chỉ mang ý nghĩa lý luận mà còn là định hướng phương pháp để xử lý một vấn đề rất &quot;nóng&quot; trong đời sống hiện nay: ngăn chặn tiêu cực, củng cố dân chủ, nâng cao hiệu lực – hiệu quả quản trị và niềm tin xã hội.
                  </p>
                </div>
              </section>

              {/* Quiz Section */}
              <section 
                id="quiz" 
                className="mb-16 scroll-mt-24"
                onMouseEnter={() => {
                  setActiveSection('quiz')
                  setReadingProgress(100)
                }}
              >
                <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-2 border-accent-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-accent-gold text-3xl">quiz</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                      Bài kiểm tra
                    </h2>
                  </div>

                  {!showQuiz ? (
                    <div className="text-center py-12">
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Hoàn thành các phần học trên để làm bài kiểm tra
                      </p>
                      <button
                        onClick={() => setShowQuiz(true)}
                        className="bg-accent-gold hover:bg-accent-gold/90 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all"
                      >
                        Bắt đầu làm bài
                      </button>
                    </div>
                  ) : quizSubmitted ? (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-primary/20 to-accent-gold/20 rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                          Kết quả bài kiểm tra
                        </h3>
                        <div className="text-5xl font-black text-primary mb-2">
                          {calculateScore()}%
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                          Bạn đã trả lời đúng {quizQuestions.filter((q) => quizAnswers[q.id] === q.options[q.correct]).length} / {quizQuestions.length} câu hỏi
                        </p>
                      </div>

                      <div className="space-y-6">
                        {quizQuestions.map((q) => {
                          const isCorrect = quizAnswers[q.id] === q.options[q.correct]
                          return (
                            <div
                              key={q.id}
                              className={`border-2 rounded-lg p-6 ${
                                isCorrect
                                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                  : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                              }`}
                            >
                              <div className="flex items-start gap-3 mb-4">
                                <span
                                  className={`material-symbols-outlined text-2xl ${
                                    isCorrect ? 'text-green-600' : 'text-red-600'
                                  }`}
                                >
                                  {isCorrect ? 'check_circle' : 'cancel'}
                                </span>
                                <div className="flex-1">
                                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                    Câu {q.id}: {q.question}
                                  </h4>
                                  <div className="space-y-2 mt-3">
                                    {q.options.map((option, idx) => {
                                      const isSelected = quizAnswers[q.id] === option
                                      const isCorrectAnswer = idx === q.correct
                                      return (
                                        <div
                                          key={idx}
                                          className={`p-3 rounded-lg ${
                                            isCorrectAnswer
                                              ? 'bg-green-200 dark:bg-green-900/40 border-2 border-green-500'
                                              : isSelected && !isCorrectAnswer
                                                ? 'bg-red-200 dark:bg-red-900/40 border-2 border-red-500'
                                                : 'bg-slate-100 dark:bg-slate-800'
                                          }`}
                                        >
                                          <div className="flex items-center gap-2">
                                            <span
                                              className={`material-symbols-outlined text-sm ${
                                                isCorrectAnswer
                                                  ? 'text-green-600'
                                                  : isSelected
                                                    ? 'text-red-600'
                                                    : 'text-slate-400'
                                              }`}
                                            >
                                              {isCorrectAnswer
                                                ? 'check_circle'
                                                : isSelected
                                                  ? 'cancel'
                                                  : 'radio_button_unchecked'}
                                            </span>
                                            <span
                                              className={`${
                                                isCorrectAnswer
                                                  ? 'font-bold text-green-800 dark:text-green-300'
                                                  : isSelected
                                                    ? 'text-red-800 dark:text-red-300'
                                                    : 'text-slate-600 dark:text-slate-400'
                                              }`}
                                            >
                                              {option}
                                              {isCorrectAnswer && ' (Đáp án đúng)'}
                                            </span>
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div className="flex gap-4 justify-center pt-6">
                        <button
                          onClick={() => {
                            setShowQuiz(false)
                            setQuizSubmitted(false)
                            setQuizAnswers({})
                          }}
                          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all"
                        >
                          Làm lại bài
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Vui lòng trả lời các câu hỏi sau. Bạn có thể xem lại nội dung bài học trước khi trả lời.
                      </p>

                      {quizQuestions.map((q) => (
                        <div
                          key={q.id}
                          className="border border-slate-300 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-900/50"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="font-bold text-slate-900 dark:text-white flex-1">
                              Câu {q.id}: {q.question}
                            </h4>
                            <button
                              onClick={() => {
                                setAIHintQuestionId(aiHintQuestionId === q.id ? null : q.id)
                                setShowChatBot(true)
                              }}
                              className="ml-4 flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-semibold transition-all"
                              title="Nhận gợi ý từ AI"
                            >
                              <span className="material-symbols-outlined text-sm">lightbulb</span>
                              AI gợi ý
                            </button>
                          </div>
                          
                          {aiHintQuestionId === q.id && (
                            <div className="mb-4 p-3 bg-accent-gold/10 border-l-4 border-accent-gold rounded-lg">
                              <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                                💡 <strong>Gợi ý:</strong> Hãy mở chatbot AI ở góc phải màn hình và hỏi về chủ đề liên quan đến câu hỏi này. 
                                Ví dụ: "{q.question.split('?')[0]}?" hoặc hỏi về các khái niệm trong câu hỏi.
                              </p>
                            </div>
                          )}
                          <div className="space-y-3">
                            {q.options.map((option, idx) => (
                              <label
                                key={idx}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                                  quizAnswers[q.id] === option
                                    ? 'bg-primary/20 border-2 border-primary'
                                    : 'bg-white dark:bg-slate-800 border-2 border-transparent hover:border-primary/50'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`question-${q.id}`}
                                  value={option}
                                  checked={quizAnswers[q.id] === option}
                                  onChange={(e) =>
                                    setQuizAnswers({ ...quizAnswers, [q.id]: e.target.value })
                                  }
                                  className="w-4 h-4 text-primary"
                                />
                                <span className="text-slate-700 dark:text-slate-300">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="flex gap-4 justify-center pt-6">
                        <button
                          onClick={handleQuizSubmit}
                          disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
                          className="bg-accent-gold hover:bg-accent-gold/90 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-all"
                        >
                          Nộp bài
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Footer Info */}
              <footer className="mt-24 pt-12 border-t border-white/10 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80">
                  Sản phẩm sáng tạo môn HCM 202
                </p>
                <p className="text-[9px] text-white/60 mt-2">
                  Cam kết liêm chính học thuật - Nội dung được trình bày chính xác theo tư liệu học thuật
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
      
      {/* AI ChatBot */}
      <ChatBot isOpen={showChatBot} onClose={() => setShowChatBot(false)} />
    </>
  )
}

export default PageSocialismContent


