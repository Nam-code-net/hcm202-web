import { useState } from 'react'
import Header from './Header'
import ChatBot from './ChatBot'

function PageAIUsage() {
  const [showChatBot, setShowChatBot] = useState(false)

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <>
      <div className="grain-overlay"></div>
      <div className="relative flex h-auto min-h-screen w-screen flex-col overflow-x-hidden pt-[73px]">
        {/* Header chung */}
        <Header 
          currentPage="ai-usage"
          onHomeClick={() => navigate('/')}
          onLearningClick={() => navigate('/learning')}
          onAIChatClick={() => setShowChatBot(!showChatBot)}
          onAIUsageClick={() => {}}
          showChatBot={showChatBot}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-background-dark w-full flex flex-col items-center">
          {/* Hero Content */}
          <section className="relative w-full">
            <div
              className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center w-full"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(15, 35, 35, 0.85), rgba(15, 35, 35, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGlsOD-lTNRb40-_ijLxanYFBX05Wmah95WMeUU0HevNIFheq-MUhls9USTpbPgCuzCEO6jPRdvvG6A228Puo0uVYiacqcR5JfOaBDzVoxoLKB-6NQoqFkLP8P1GtLFAv3RNOCnA9_MMBD40Fa7V05oIaKiVLfbu9645UediDvnUfOa4VNsI5G3iVK0q3LSBaSIYXNmRGBBmCF4Sv2VIBrd4VKoR9_Y61Vs-oOng-eZ8hNLi1V82AYZ_4fK2R3gBzG-imOOoAeSfRj")',
              }}
            >
              <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 w-full">
                <span className="inline-block px-4 py-1 border border-accent-gold/50 rounded-full text-[10px] font-bold text-accent-gold uppercase tracking-[0.3em]">
                  AI Usage
                </span>
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight text-center">
                  Cam kết liêm chính học thuật
                  <br />
                  <span className="text-primary italic">và công cụ AI</span>
                </h1>
                <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed text-center">
                  Minh bạch về việc sử dụng công nghệ AI trong việc học tập và nghiên cứu tư tưởng Hồ Chí Minh.
                </p>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 w-full">
            {/* Section 1: Cam kết liêm chính học thuật */}
            <section className="mb-16">
              <div className="bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Cam kết liêm chính học thuật
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">1. Nguồn tài liệu và giáo trình</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Tất cả nội dung trong sản phẩm này được xây dựng dựa trên:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                      <li>Giáo trình chính thức môn Tư tưởng Hồ Chí Minh (HCM 202)</li>
                      <li>Các tác phẩm, bài viết của Chủ tịch Hồ Chí Minh</li>
                      <li>Tài liệu học thuật được công nhận và sử dụng trong giảng dạy</li>
                      <li>Các nghiên cứu khoa học về tư tưởng Hồ Chí Minh</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">2. Nguyên tắc trình bày nội dung</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Chúng tôi cam kết:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                      <li>Trình bày chính xác, trung thực các quan điểm, tư tưởng của Hồ Chí Minh</li>
                      <li>Không tự ý thêm bớt, thay đổi nội dung so với giáo trình và tài liệu gốc</li>
                      <li>Giữ nguyên tính chính xác về mặt học thuật và lịch sử</li>
                      <li>Tôn trọng nguyên văn các trích dẫn và khái niệm</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">3. Mục đích sử dụng</h3>
                    <p className="text-white/80 leading-relaxed">
                      Sản phẩm này được tạo ra với mục đích hỗ trợ học tập, nghiên cứu và lan tỏa tư tưởng Hồ Chí Minh một cách chính xác và có hệ thống. Tất cả nội dung đều phục vụ mục đích giáo dục và học thuật, không có mục đích thương mại hay chính trị.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Công cụ AI sử dụng */}
            <section className="mb-16">
              <div className="bg-card-dark rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-accent-gold">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-accent-gold text-3xl">psychology</span>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Công cụ AI được sử dụng
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-accent-gold mb-4">1. Cursor AI (Claude Sonnet 4.5)</h3>
                    <div className="bg-white/5 rounded-lg p-6 mb-4">
                      <p className="text-white/80 leading-relaxed mb-3">
                        <strong>Mục đích sử dụng:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-white/70 ml-4">
                        <li>Hỗ trợ viết code và phát triển giao diện người dùng</li>
                        <li>Tạo cấu trúc HTML/CSS/JavaScript cho website</li>
                        <li>Tối ưu hóa trải nghiệm người dùng (UX/UI)</li>
                        <li>Xử lý logic tương tác và điều hướng trang</li>
                      </ul>
                      <p className="text-white/60 text-sm mt-4 italic">
                        Lưu ý: AI chỉ hỗ trợ về mặt kỹ thuật, không can thiệp vào nội dung học thuật.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-accent-gold mb-4">2. AI Chatbot (Knowledge Base)</h3>
                    <div className="bg-white/5 rounded-lg p-6 mb-4">
                      <p className="text-white/80 leading-relaxed mb-3">
                        <strong>Mục đích sử dụng:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-white/70 ml-4">
                        <li>Trả lời câu hỏi của người học về nội dung bài học</li>
                        <li>Hỗ trợ tìm kiếm thông tin trong phạm vi giáo trình</li>
                        <li>Tạo trải nghiệm học tập tương tác</li>
                        <li>Giải thích các khái niệm và thuật ngữ</li>
                      </ul>
                      <p className="text-white/60 text-sm mt-4 italic">
                        Lưu ý: Chatbot chỉ trả lời dựa trên knowledge base được xây dựng từ giáo trình chính thức, không tự tạo nội dung mới.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-accent-gold mb-4">3. Các công cụ hỗ trợ khác</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent-gold text-sm">code</span>
                          React & TypeScript
                        </h4>
                        <p className="text-white/70 text-sm">
                          Framework và ngôn ngữ lập trình để xây dựng giao diện web hiện đại.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent-gold text-sm">palette</span>
                          Tailwind CSS
                        </h4>
                        <p className="text-white/70 text-sm">
                          Công cụ styling để tạo giao diện đẹp và responsive.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent-gold text-sm">build</span>
                          Vite
                        </h4>
                        <p className="text-white/70 text-sm">
                          Build tool để phát triển và tối ưu hóa ứng dụng web.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="material-symbols-outlined text-accent-gold text-sm">storage</span>
                          Local Storage
                        </h4>
                        <p className="text-white/70 text-sm">
                          Lưu trữ dữ liệu người dùng (tiến độ học tập, kết quả quiz) trên trình duyệt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Quy trình và đảm bảo chất lượng */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-primary/20 to-accent-gold/20 rounded-xl shadow-lg p-8 md:p-10 border-2 border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">fact_check</span>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    Quy trình đảm bảo chất lượng
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-card-dark rounded-lg p-4 border border-white/10">
                    <span className="material-symbols-outlined text-primary text-2xl">1</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Kiểm tra nguồn tài liệu</h4>
                      <p className="text-white/80 text-sm">
                        Tất cả nội dung được đối chiếu với giáo trình chính thức trước khi đưa vào sản phẩm.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card-dark rounded-lg p-4 border border-white/10">
                    <span className="material-symbols-outlined text-primary text-2xl">2</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Rà soát nội dung</h4>
                      <p className="text-white/80 text-sm">
                        Nội dung được kiểm tra kỹ lưỡng để đảm bảo tính chính xác và phù hợp với giáo trình.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card-dark rounded-lg p-4 border border-white/10">
                    <span className="material-symbols-outlined text-primary text-2xl">3</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Giới hạn phạm vi AI</h4>
                      <p className="text-white/80 text-sm">
                        AI chỉ được sử dụng cho phần kỹ thuật (code, UI), không tham gia vào việc tạo hoặc chỉnh sửa nội dung học thuật.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card-dark rounded-lg p-4 border border-white/10">
                    <span className="material-symbols-outlined text-primary text-2xl">4</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Cam kết minh bạch</h4>
                      <p className="text-white/80 text-sm">
                        Chúng tôi công khai về việc sử dụng AI và cam kết tính liêm chính học thuật trong toàn bộ sản phẩm.
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* ChatBot hiển thị ở mọi trang */}
      <ChatBot isOpen={showChatBot} onClose={() => setShowChatBot(false)} />
    </>
  )
}

export default PageAIUsage

