import { useState, useRef, useEffect } from 'react'

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

type ChatBotProps = {
  isOpen: boolean
  onClose: () => void
}

function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Xin chào! Tôi là trợ lý AI về Tư tưởng Hồ Chí Minh. Tôi có thể giúp bạn trả lời các câu hỏi về thời kỳ quá độ lên chủ nghĩa xã hội và tư tưởng của Bác Hồ. Bạn muốn hỏi gì?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Knowledge base mở rộng về nội dung bài học
  const knowledgeBase: { [key: string]: string[] } = {
    'tính chất': [
      'Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là thời kỳ cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ. Theo Hồ Chí Minh, đây là thời kỳ cải biến xã hội cũ thành xã hội mới – một xã hội chưa từng có trong lịch sử dân tộc ta.',
      'Trong thời kỳ này, dân tộc ta phải thay đổi triệt để những nếp sống, thói quen, ý nghĩ và thành kiến có rễ sâu hàng ngàn năm; phải xóa bỏ giai cấp bóc lột; phải biến một nước dốt nát, cực khổ thành một nước văn hóa cao và đời sống tươi vui, hạnh phúc.',
      'Trong điều kiện nước ta là một nước nông nghiệp lạc hậu, mới thoát khỏi ách thực dân, phong kiến, đó là cuộc biến đổi sâu sắc nhất, khó khăn nhất, thậm chí còn khó khăn, phức tạp hơn cả việc đánh giặc. Vì vậy, tiến lên chủ nghĩa xã hội không thể một sớm một chiều, không thể làm mau được mà phải làm dần dần.'
    ],
    'đặc điểm': [
      'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa. Hồ Chí Minh nhấn mạnh: "Đặc điểm to nhất của ta trong thời kỳ quá độ là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa".',
      'Bước vào thời kỳ quá độ, Việt Nam có sự tồn tại đan xen giữa các yếu tố của xã hội cũ và các yếu tố của xã hội mới trên tất cả các lĩnh vực của đời sống. Đây là giai đoạn đấu tranh gay gắt, khi các yếu tố của xã hội cũ còn hình thành một thế lực thì có khi chúng còn chiến thắng các yếu tố của xã hội mới vừa xuất hiện.',
      'Cùng với những đặc điểm khác và mục tiêu của chủ nghĩa xã hội, đặc điểm này quy định nhiệm vụ của dân tộc ta trong thời kỳ quá độ.'
    ],
    'nhiệm vụ': [
      'Nhiệm vụ của thời kỳ quá độ là đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới phù hợp với quy luật tiến lên chủ nghĩa xã hội trên tất cả các lĩnh vực của đời sống.',
      'Về chính trị: Phải xây dựng được chế độ dân chủ vì đây là bản chất của chủ nghĩa xã hội. Muốn xây dựng được chế độ dân chủ, theo Hồ Chí Minh, phải chống tất cả các biểu hiện của chủ nghĩa cá nhân, trước hết là trong Đảng và trong bộ máy chính quyền từ cấp cơ sở đến Trung ương; đồng thời phải bồi dưỡng, giáo dục để nhân dân có tri thức, có năng lực làm chủ chế độ xã hội.',
      'Về kinh tế: Trong bối cảnh nền kinh tế nước ta còn nghèo nàn, kỹ thuật lạc hậu, Hồ Chí Minh xác định nhiệm vụ quan trọng nhất của thời kỳ quá độ là cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại. Đây là quá trình xây dựng nền tảng vật chất – kỹ thuật của chủ nghĩa xã hội. Giữa cải tạo và xây dựng thì xây dựng là nhiệm vụ chủ chốt và lâu dài, đồng thời phải luôn gắn với việc thực hiện đầy đủ quyền làm chủ của nhân dân.',
      'Về văn hóa: Phải triệt để tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch của văn hóa đế quốc; đồng thời phát triển những truyền thống tốt đẹp của văn hóa dân tộc và tiếp thu những giá trị tiến bộ của văn hóa thế giới để xây dựng một nền văn hóa Việt Nam có tính dân tộc, khoa học và đại chúng.',
      'Về các quan hệ xã hội: Phải thay đổi triệt để những quan hệ cũ đã trở thành thói quen trong lối sống, nếp sống của con người; xây dựng một xã hội dân chủ, công bằng, văn minh.'
    ],
    'nguyên tắc': [
      'Xây dựng chủ nghĩa xã hội là quá trình sâu sắc nhưng phức tạp, lâu dài, khó khăn, gian khổ, đòi hỏi tính năng động, sáng tạo. Tuy nhiên, theo Hồ Chí Minh, tính năng động, sáng tạo ấy phải tuân thủ những nguyên tắc nhất định.',
      'Thứ nhất, mọi tư tưởng và hành động phải được thực hiện trên nền tảng chủ nghĩa Mác – Lênin. Hồ Chí Minh quan niệm, chủ nghĩa Mác – Lênin là khoa học về cách mạng của quần chúng bị áp bức, bóc lột; là khoa học về sự thắng lợi của chủ nghĩa xã hội ở tất cả các nước; là khoa học về xây dựng chủ nghĩa cộng sản. Người luôn nhắc nhở phải không ngừng học tập lập trường, quan điểm và phương pháp của chủ nghĩa Mác – Lênin, đồng thời cụ thể hóa cho phù hợp với điều kiện, hoàn cảnh từng lúc, từng nơi.',
      'Thứ hai, phải giữ vững độc lập dân tộc. Tự do cho đồng bào, độc lập cho Tổ quốc là mục tiêu của Hồ Chí Minh khi ra đi tìm đường cứu nước. Người khẳng định: "Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy". Đối với mỗi dân tộc, "Không có gì quý hơn độc lập, tự do". Độc lập dân tộc là mục tiêu trước hết; đồng thời là điều kiện tiên quyết để xây dựng chủ nghĩa xã hội. Ngược lại, chủ nghĩa xã hội là cơ sở bảo đảm vững chắc cho nền độc lập dân tộc.',
      'Thứ ba, phải đoàn kết, học tập kinh nghiệm của các nước anh em. Hồ Chí Minh xác định cách mạng Việt Nam là một bộ phận của lực lượng hòa bình, dân chủ, xã hội chủ nghĩa trên thế giới. Sự đoàn kết giữa các nước xã hội chủ nghĩa và phong trào cộng sản – công nhân quốc tế có ý nghĩa đặc biệt quan trọng. Tuy nhiên, việc học tập kinh nghiệm quốc tế không được rập khuôn, máy móc mà phải vận dụng một cách sáng tạo, phù hợp với điều kiện cụ thể của Việt Nam.',
      'Thứ tư, xây phải đi đôi với chống. Cùng với xây dựng các lĩnh vực của đời sống xã hội, phải kiên quyết đấu tranh chống lại mọi thế lực cản trở, phá hoại cách mạng. Người căn dặn phải luôn tỉnh táo, giữ vững lập trường, không mất cảnh giác trong hoàn cảnh hòa bình; sẵn sàng đập tan mọi âm mưu của kẻ thù để bảo vệ thành quả cách mạng và hòa bình. Đồng thời, phải đấu tranh xóa bỏ những thói quen, nếp nghĩ lạc hậu của xã hội cũ và kiên quyết chống chủ nghĩa cá nhân – thứ "vi trùng độc hại" sinh ra tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật, gây tổn hại cho cá nhân, nhân dân và tổ chức Đảng.'
    ],
    'hồ chí minh': [
      'Hồ Chí Minh (19 tháng 5 năm 1890 – 2 tháng 9 năm 1969), tên khai sinh là Nguyễn Sinh Cung, còn được biết đến với tên gọi Bác Hồ, Chủ tịch Hồ Chí Minh, là nhà cách mạng, người sáng lập Đảng Cộng sản Việt Nam, một trong những người đặt nền móng và lãnh đạo công cuộc đấu tranh giành độc lập, thống nhất cho Việt Nam trong thế kỷ 20.',
      'Người là Chủ tịch nước Việt Nam Dân chủ Cộng hòa từ năm 1945 đến 1969, Chủ tịch Ban Chấp hành Trung ương Đảng Lao động Việt Nam từ năm 1951 đến 1969. Người đã tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin và lãnh đạo nhân dân Việt Nam giành độc lập.',
      'Hồ Chí Minh sinh ra tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Người đã ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng, và sau nhiều năm hoạt động cách mạng ở nước ngoài, Người đã trở về lãnh đạo cách mạng Việt Nam.',
      'Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về cách mạng Việt Nam, là tài sản tinh thần vô giá của Đảng và dân tộc ta. Người được UNESCO công nhận là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất của Việt Nam.'
    ],
    'tham nhũng': [
      'Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên CNXH có giá trị rõ rệt đối với công tác phòng, chống tham nhũng – lãng phí hiện nay. Bởi trong thời kỳ quá độ, Người nhấn mạnh nhiệm vụ xây dựng chế độ dân chủ và đặc biệt phải chống chủ nghĩa cá nhân, quan liêu trước hết trong Đảng và bộ máy chính quyền.',
      'Nguyên tắc "xây phải đi đôi với chống" là phương châm rất phù hợp: vừa xây dựng cơ chế, chuẩn mực mới; vừa kiên quyết đấu tranh loại bỏ các biểu hiện tiêu cực cản trở sự phát triển.',
      'Ví dụ cụ thể: Giảm "tham nhũng vặt" trong giải quyết thủ tục hành chính cho người dân (cấp giấy tờ, xác nhận, hồ sơ hành chính…). Theo tinh thần "xây đi đôi với chống": Xây - công khai quy trình, thời hạn, lệ phí; minh bạch trách nhiệm từng khâu; tạo điều kiện để người dân giám sát. Chống - xử lý nghiêm hành vi nhũng nhiễu, lợi dụng quyền hạn; chấn chỉnh tác phong quan liêu.',
      'Theo yêu cầu chống chủ nghĩa cá nhân trong bộ máy: tăng rèn luyện đạo đức công vụ, đề cao tinh thần "vì dân phục vụ", coi hiệu quả phục vụ nhân dân là tiêu chí đánh giá cán bộ. Phải chống chủ nghĩa cá nhân - thứ "vi trùng độc hại" sinh ra tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật.',
      'Như vậy, tư tưởng Hồ Chí Minh không chỉ mang ý nghĩa lý luận mà còn là định hướng phương pháp để xử lý một vấn đề rất "nóng" trong đời sống hiện nay: ngăn chặn tiêu cực, củng cố dân chủ, nâng cao hiệu lực – hiệu quả quản trị và niềm tin xã hội.'
    ],
    'độc lập': [
      'Độc lập dân tộc là mục tiêu trước hết và là điều kiện tiên quyết để xây dựng chủ nghĩa xã hội. Hồ Chí Minh khẳng định: "Không có gì quý hơn độc lập, tự do".',
      'Tự do cho đồng bào, độc lập cho Tổ quốc là mục tiêu của Hồ Chí Minh khi ra đi tìm đường cứu nước. Khi nước Việt Nam Dân chủ Cộng hòa ra đời, Người khẳng định: "Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy".',
      'Chủ nghĩa xã hội là cơ sở bảo đảm vững chắc cho nền độc lập dân tộc. Ngược lại, độc lập dân tộc là điều kiện tiên quyết để xây dựng chủ nghĩa xã hội.'
    ],
    'mác lênin': [
      'Chủ nghĩa Mác – Lênin là khoa học về cách mạng của quần chúng bị áp bức, bóc lột; là khoa học về sự thắng lợi của chủ nghĩa xã hội ở tất cả các nước; là khoa học về xây dựng chủ nghĩa cộng sản.',
      'Theo Hồ Chí Minh, cuộc cách mạng do giai cấp công nhân thực hiện chỉ có thể đạt được thắng lợi khi trung thành với những nguyên tắc của chủ nghĩa Mác – Lênin. Vì vậy, Người luôn nhắc nhở phải không ngừng học tập lập trường, quan điểm và phương pháp của chủ nghĩa Mác – Lênin, đồng thời cụ thể hóa cho phù hợp với điều kiện, hoàn cảnh từng lúc, từng nơi.',
      'Mọi tư tưởng và hành động trong xây dựng chủ nghĩa xã hội phải được thực hiện trên nền tảng chủ nghĩa Mác – Lênin.'
    ],
    'dân chủ': [
      'Về chính trị, nhiệm vụ quan trọng nhất là phải xây dựng được chế độ dân chủ vì đây là bản chất của chủ nghĩa xã hội.',
      'Muốn xây dựng được chế độ dân chủ, theo Hồ Chí Minh, phải chống tất cả các biểu hiện của chủ nghĩa cá nhân, trước hết là trong Đảng và trong bộ máy chính quyền từ cấp cơ sở đến Trung ương.',
      'Đồng thời phải bồi dưỡng, giáo dục để nhân dân có tri thức, có năng lực làm chủ chế độ xã hội. Nhân dân phải được thực hiện đầy đủ quyền làm chủ trong mọi lĩnh vực của đời sống.'
    ],
    'kinh tế': [
      'Về kinh tế, trong bối cảnh nền kinh tế nước ta còn nghèo nàn, kỹ thuật lạc hậu, Hồ Chí Minh xác định nhiệm vụ quan trọng nhất của thời kỳ quá độ là cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại.',
      'Đây là quá trình xây dựng nền tảng vật chất – kỹ thuật của chủ nghĩa xã hội. Giữa cải tạo và xây dựng thì xây dựng là nhiệm vụ chủ chốt và lâu dài.',
      'Việc xây dựng kinh tế phải luôn gắn với việc thực hiện đầy đủ quyền làm chủ của nhân dân.'
    ],
    'văn hóa': [
      'Về văn hóa, phải triệt để tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch của văn hóa đế quốc.',
      'Đồng thời phát triển những truyền thống tốt đẹp của văn hóa dân tộc và tiếp thu những giá trị tiến bộ của văn hóa thế giới.',
      'Mục tiêu là xây dựng một nền văn hóa Việt Nam có tính dân tộc, khoa học và đại chúng.'
    ],
    'xây chống': [
      'Nguyên tắc "xây phải đi đôi với chống" là một trong những nguyên tắc quan trọng nhất trong xây dựng chủ nghĩa xã hội.',
      'Cùng với xây dựng các lĩnh vực của đời sống xã hội, phải kiên quyết đấu tranh chống lại mọi thế lực cản trở, phá hoại cách mạng.',
      'Phải đấu tranh xóa bỏ những thói quen, nếp nghĩ lạc hậu của xã hội cũ và kiên quyết chống chủ nghĩa cá nhân – thứ "vi trùng độc hại" sinh ra tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật.',
      'Ví dụ trong phòng chống tham nhũng: Vừa xây dựng cơ chế, chuẩn mực mới (công khai, minh bạch); vừa kiên quyết đấu tranh loại bỏ các biểu hiện tiêu cực (xử lý nghiêm hành vi nhũng nhiễu).'
    ],
    'chủ nghĩa cá nhân': [
      'Chủ nghĩa cá nhân là thứ "vi trùng độc hại" sinh ra tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật, gây tổn hại cho cá nhân, nhân dân và tổ chức Đảng.',
      'Theo Hồ Chí Minh, phải chống tất cả các biểu hiện của chủ nghĩa cá nhân, trước hết là trong Đảng và trong bộ máy chính quyền từ cấp cơ sở đến Trung ương.',
      'Trong công tác phòng chống tham nhũng, phải tăng rèn luyện đạo đức công vụ, đề cao tinh thần "vì dân phục vụ", coi hiệu quả phục vụ nhân dân là tiêu chí đánh giá cán bộ.'
    ],
    'quá độ': [
      'Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là thời kỳ cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ.',
      'Đặc điểm lớn nhất là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa.',
      'Nhiệm vụ chính là đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới phù hợp với quy luật tiến lên chủ nghĩa xã hội trên tất cả các lĩnh vực: chính trị, kinh tế, văn hóa, quan hệ xã hội.'
    ],
    'bác hồ': [
      'Bác Hồ là cách gọi thân thương mà nhân dân Việt Nam dành cho Chủ tịch Hồ Chí Minh (1890-1969).',
      'Người là nhà cách mạng, người sáng lập Đảng Cộng sản Việt Nam, Chủ tịch nước Việt Nam Dân chủ Cộng hòa từ năm 1945 đến 1969.',
      'Bác Hồ đã ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng, và sau nhiều năm hoạt động cách mạng, Người đã lãnh đạo nhân dân Việt Nam giành độc lập.'
    ],
    'nguyễn tất thành': [
      'Nguyễn Tất Thành là tên gọi của Chủ tịch Hồ Chí Minh khi Người còn trẻ, trước khi ra đi tìm đường cứu nước.',
      'Năm 1911, Nguyễn Tất Thành đã rời Tổ quốc từ Bến Nhà Rồng, bắt đầu hành trình vạn dặm xuyên qua các lục địa để tìm chân lý giải phóng dân tộc.',
      'Trong hành trình đó, Người đã tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin.'
    ],
    'bến nhà rồng': [
      'Bến Nhà Rồng là nơi Chủ tịch Hồ Chí Minh (khi đó là Nguyễn Tất Thành) ra đi tìm đường cứu nước vào năm 1911.',
      'Đây là một sự kiện lịch sử quan trọng, đánh dấu bước khởi đầu của hành trình cách mạng của Người.',
      'Từ Bến Nhà Rồng, Người đã bắt đầu hành trình vạn dặm xuyên qua các lục địa để tìm chân lý giải phóng dân tộc.'
    ],
    'năm nào': [
      'Bác Hồ ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng (Sài Gòn).',
      'Năm 1911, Nguyễn Tất Thành (tên của Bác Hồ khi đó) đã rời Tổ quốc từ Bến Nhà Rồng để bắt đầu hành trình tìm đường cứu nước.',
      'Bác Hồ sinh năm 1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.',
      'Năm 1920, Bác Hồ đã tiếp cận Luận cương của Lenin và tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin.',
      'Năm 1945, Bác Hồ đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      'Bác Hồ qua đời năm 1969 tại Hà Nội, để lại niềm tiếc thương vô hạn cho toàn thể dân tộc Việt Nam.'
    ],
    '1911': [
      'Năm 1911 là năm Bác Hồ (Nguyễn Tất Thành) ra đi tìm đường cứu nước từ Bến Nhà Rồng, Sài Gòn.',
      'Năm 1911 đánh dấu một bước ngoặt quan trọng trong lịch sử Việt Nam khi chàng thanh niên Nguyễn Tất Thành quyết định ra nước ngoài tìm con đường giải phóng dân tộc.',
      'Từ năm 1911, Bác Hồ đã bắt đầu hành trình vạn dặm xuyên qua nhiều quốc gia để tìm chân lý cách mạng.'
    ],
    '1920': [
      'Năm 1920, Bác Hồ đã tiếp cận Luận cương của Lenin tại Đại hội Tours của Đảng Xã hội Pháp.',
      'Năm 1920 là năm Bác Hồ tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin. Người đã nói: "Cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên."',
      'Năm 1920 đánh dấu bước ngoặt quan trọng khi Bác Hồ trở thành một trong những người sáng lập Đảng Cộng sản Pháp và tìm thấy ánh sáng cách mạng.'
    ],
    '1945': [
      'Năm 1945, Bác Hồ đọc Tuyên ngôn Độc lập tại quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày 2 tháng 9 năm 1945.',
      'Năm 1945 là năm lịch sử khi Việt Nam giành được độc lập sau Cách mạng Tháng Tám, dưới sự lãnh đạo của Bác Hồ và Đảng Cộng sản Việt Nam.',
      'Ngày 2 tháng 9 năm 1945, Bác Hồ đã đọc bản Tuyên ngôn Độc lập, khẳng định quyền tự do dân tộc và đặt những viên gạch đầu tiên cho chế độ mới.'
    ],
    '1969': [
      'Bác Hồ qua đời năm 1969 tại Hà Nội, để lại niềm tiếc thương vô hạn cho toàn thể dân tộc Việt Nam.',
      'Năm 1969, Chủ tịch Hồ Chí Minh từ trần, để lại di chúc lịch sử và tư tưởng vĩ đại cho các thế hệ sau.',
      'Bác Hồ mất năm 1969, nhưng tư tưởng và đạo đức của Người vẫn sống mãi trong lòng nhân dân Việt Nam.'
    ],
    'ra đi': [
      'Bác Hồ ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng, Sài Gòn.',
      'Năm 1911, Nguyễn Tất Thành (Bác Hồ) đã ra đi tìm đường cứu nước, bắt đầu hành trình vạn dặm xuyên qua các lục địa.',
      'Quyết định ra đi tìm đường cứu nước năm 1911 của Bác Hồ là một quyết định lịch sử, mở ra con đường giải phóng dân tộc Việt Nam.'
    ],
    'tìm đường cứu nước': [
      'Bác Hồ ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng, Sài Gòn.',
      'Hành trình tìm đường cứu nước của Bác Hồ bắt đầu từ năm 1911 và kéo dài nhiều năm, qua nhiều quốc gia trên thế giới.',
      'Năm 1920, trong hành trình tìm đường cứu nước, Bác Hồ đã tìm thấy con đường giải phóng dân tộc trong chủ nghĩa Mác-Lênin.'
    ],
    'sinh năm': [
      'Bác Hồ sinh năm 1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.',
      'Chủ tịch Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890 tại quê hương Nghệ An.',
      'Bác Hồ sinh năm 1890, tên khai sinh là Nguyễn Sinh Cung, sau này được biết đến với nhiều tên gọi khác nhau trong quá trình hoạt động cách mạng.'
    ],
    'mất năm': [
      'Bác Hồ qua đời năm 1969 tại Hà Nội.',
      'Chủ tịch Hồ Chí Minh từ trần ngày 2 tháng 9 năm 1969 tại Hà Nội.',
      'Bác Hồ mất năm 1969, để lại di chúc và tư tưởng vĩ đại cho dân tộc Việt Nam.'
    ],
    'khi nào': [
      'Bác Hồ ra đi tìm đường cứu nước vào năm 1911.',
      'Bác Hồ sinh năm 1890 và mất năm 1969.',
      'Năm 1920, Bác Hồ tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin.',
      'Năm 1945, Bác Hồ đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.'
    ],
    'nơi nào': [
      'Bác Hồ sinh ra tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.',
      'Bác Hồ ra đi tìm đường cứu nước từ Bến Nhà Rồng, Sài Gòn (nay là Thành phố Hồ Chí Minh).',
      'Bác Hồ đọc Tuyên ngôn Độc lập tại quảng trường Ba Đình, Hà Nội vào ngày 2 tháng 9 năm 1945.'
    ],
    'đảng cộng sản': [
      'Bác Hồ là người sáng lập Đảng Cộng sản Việt Nam.',
      'Đảng Cộng sản Việt Nam được thành lập dưới sự lãnh đạo của Bác Hồ, là đội tiên phong của giai cấp công nhân và nhân dân lao động Việt Nam.',
      'Bác Hồ đã sáng lập và lãnh đạo Đảng Cộng sản Việt Nam, đưa cách mạng Việt Nam đi đến thắng lợi.'
    ],
    'tuyên ngôn độc lập': [
      'Bác Hồ đọc Tuyên ngôn Độc lập vào ngày 2 tháng 9 năm 1945 tại quảng trường Ba Đình, Hà Nội.',
      'Tuyên ngôn Độc lập do Bác Hồ soạn thảo và đọc vào năm 1945, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      'Bản Tuyên ngôn Độc lập năm 1945 của Bác Hồ là văn kiện lịch sử quan trọng, khẳng định quyền độc lập, tự do của dân tộc Việt Nam.'
    ]
  }

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    // Xử lý đặc biệt cho câu hỏi về năm tháng
    if (lowerQuestion.includes('năm nào') || lowerQuestion.includes('khi nào') || lowerQuestion.includes('bao giờ')) {
      // Câu hỏi về năm tháng
      if (lowerQuestion.includes('ra đi') || lowerQuestion.includes('tìm đường cứu nước') || lowerQuestion.includes('rời')) {
        return 'Bác Hồ ra đi tìm đường cứu nước năm 1911 từ Bến Nhà Rồng, Sài Gòn.'
      }
      if (lowerQuestion.includes('sinh') || lowerQuestion.includes('sinh ra')) {
        return 'Bác Hồ sinh năm 1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.'
      }
      if (lowerQuestion.includes('mất') || lowerQuestion.includes('qua đời') || lowerQuestion.includes('từ trần')) {
        return 'Bác Hồ qua đời năm 1969 tại Hà Nội, để lại niềm tiếc thương vô hạn cho toàn thể dân tộc Việt Nam.'
      }
      if (lowerQuestion.includes('tuyên ngôn') || lowerQuestion.includes('độc lập')) {
        return 'Bác Hồ đọc Tuyên ngôn Độc lập vào ngày 2 tháng 9 năm 1945 tại quảng trường Ba Đình, Hà Nội.'
      }
      if (lowerQuestion.includes('lênin') || lowerQuestion.includes('luận cương')) {
        return 'Năm 1920, Bác Hồ đã tiếp cận Luận cương của Lenin và tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin.'
      }
    }
    
    // Xử lý câu hỏi về năm cụ thể
    if (lowerQuestion.includes('1911')) {
      return 'Năm 1911 là năm Bác Hồ (Nguyễn Tất Thành) ra đi tìm đường cứu nước từ Bến Nhà Rồng, Sài Gòn.'
    }
    if (lowerQuestion.includes('1920')) {
      return 'Năm 1920, Bác Hồ đã tiếp cận Luận cương của Lenin và tìm thấy con đường cứu nước trong chủ nghĩa Mác-Lênin.'
    }
    if (lowerQuestion.includes('1945')) {
      return 'Năm 1945, Bác Hồ đọc Tuyên ngôn Độc lập tại quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày 2 tháng 9 năm 1945.'
    }
    if (lowerQuestion.includes('1969')) {
      return 'Bác Hồ qua đời năm 1969 tại Hà Nội, để lại niềm tiếc thương vô hạn cho toàn thể dân tộc Việt Nam.'
    }
    
    // Tạo danh sách các từ khóa và điểm số tương ứng
    const keywordScores: { [key: string]: number } = {}
    
    // Tính điểm cho mỗi từ khóa dựa trên số lần xuất hiện và độ liên quan
    for (const keyword of Object.keys(knowledgeBase)) {
      let score = 0
      
      // Kiểm tra từ khóa chính
      if (lowerQuestion.includes(keyword)) {
        score += 10
      }
      
      // Kiểm tra các từ liên quan
      const relatedWords: { [key: string]: string[] } = {
        'tính chất': ['tính chất', 'đặc điểm gì', 'bản chất', 'bản chất gì'],
        'đặc điểm': ['đặc điểm', 'đặc điểm lớn nhất', 'đặc điểm to nhất', 'điểm nổi bật'],
        'nhiệm vụ': ['nhiệm vụ', 'nhiệm vụ gì', 'phải làm gì', 'cần làm gì', 'chính trị', 'kinh tế', 'văn hóa'],
        'nguyên tắc': ['nguyên tắc', 'nguyên tắc gì', 'nguyên lý', 'quy tắc'],
        'hồ chí minh': ['hồ chí minh', 'bác hồ', 'chủ tịch hồ chí minh', 'bác', 'người'],
        'tham nhũng': ['tham nhũng', 'chống tham nhũng', 'phòng chống tham nhũng', 'tham nhũng vặt', 'nhũng nhiễu'],
        'độc lập': ['độc lập', 'độc lập dân tộc', 'tự do', 'không có gì quý hơn'],
        'mác lênin': ['mác', 'lênin', 'mác lênin', 'chủ nghĩa mác', 'chủ nghĩa lênin'],
        'dân chủ': ['dân chủ', 'chế độ dân chủ', 'làm chủ'],
        'kinh tế': ['kinh tế', 'nền kinh tế', 'kinh tế gì'],
        'văn hóa': ['văn hóa', 'nền văn hóa', 'văn hóa gì'],
        'xây chống': ['xây chống', 'xây đi đôi với chống', 'vừa xây vừa chống'],
        'chủ nghĩa cá nhân': ['chủ nghĩa cá nhân', 'cá nhân', 'ích kỷ'],
        'quá độ': ['quá độ', 'thời kỳ quá độ', 'giai đoạn quá độ'],
        'bác hồ': ['bác hồ', 'bác', 'chủ tịch'],
        'nguyễn tất thành': ['nguyễn tất thành', 'tất thành'],
        'bến nhà rồng': ['bến nhà rồng', 'nhà rồng'],
        'năm nào': ['năm nào', 'năm', 'khi nào', 'thời gian nào', 'bao giờ', 'ra đi năm nào', 'sinh năm nào', 'mất năm nào', 'qua đời năm nào'],
        '1911': ['1911', 'một chín một một'],
        '1920': ['1920', 'một chín hai không'],
        '1945': ['1945', 'một chín bốn năm'],
        '1969': ['1969', 'một chín sáu chín'],
        'ra đi': ['ra đi', 'rời', 'khởi hành', 'bắt đầu hành trình'],
        'tìm đường cứu nước': ['tìm đường cứu nước', 'tìm đường', 'cứu nước', 'giải phóng'],
        'sinh năm': ['sinh năm', 'sinh ngày', 'ngày sinh', 'năm sinh'],
        'mất năm': ['mất năm', 'qua đời', 'từ trần', 'mất ngày'],
        'khi nào': ['khi nào', 'lúc nào', 'thời điểm nào', 'bao giờ'],
        'nơi nào': ['nơi nào', 'ở đâu', 'địa điểm nào', 'tại đâu'],
        'đảng cộng sản': ['đảng cộng sản', 'đảng', 'thành lập đảng'],
        'tuyên ngôn độc lập': ['tuyên ngôn độc lập', 'đọc tuyên ngôn', 'tuyên ngôn']
      }
      
      if (relatedWords[keyword]) {
        for (const word of relatedWords[keyword]) {
          if (lowerQuestion.includes(word)) {
            score += 5
          }
        }
      }
      
      if (score > 0) {
        keywordScores[keyword] = score
      }
    }
    
    // Tìm từ khóa có điểm cao nhất
    const sortedKeywords = Object.entries(keywordScores).sort((a, b) => b[1] - a[1])
    
    if (sortedKeywords.length > 0) {
      const bestKeyword = sortedKeywords[0][0]
      const answers = knowledgeBase[bestKeyword]
      
      // Nếu có nhiều từ khóa liên quan, kết hợp câu trả lời
      if (sortedKeywords.length > 1 && sortedKeywords[0][1] === sortedKeywords[1][1]) {
        // Có nhiều từ khóa có cùng điểm số, kết hợp câu trả lời
        const combinedAnswers: string[] = []
        for (let i = 0; i < Math.min(2, sortedKeywords.length); i++) {
          const keyword = sortedKeywords[i][0]
          combinedAnswers.push(...knowledgeBase[keyword])
        }
        return combinedAnswers[Math.floor(Math.random() * combinedAnswers.length)]
      }
      
      return answers[Math.floor(Math.random() * answers.length)]
    }

    // Câu trả lời mặc định cho các câu hỏi không tìm thấy
    const defaultAnswers = [
      'Dựa trên nội dung bài học về thời kỳ quá độ, tôi có thể giúp bạn hiểu rõ hơn về tính chất, đặc điểm, nhiệm vụ và các nguyên tắc xây dựng chủ nghĩa xã hội. Bạn có thể hỏi cụ thể hơn về một trong các chủ đề này không?',
      'Tôi có thể trả lời các câu hỏi về: tính chất của thời kỳ quá độ, đặc điểm lớn nhất, nhiệm vụ trên các lĩnh vực (chính trị, kinh tế, văn hóa), các nguyên tắc xây dựng CNXH, và liên hệ thực tiễn về phòng chống tham nhũng. Bạn muốn biết về chủ đề nào?',
      'Để tôi có thể trả lời chính xác hơn, bạn có thể hỏi về: tính chất, đặc điểm, nhiệm vụ, nguyên tắc, hoặc ví dụ về phòng chống tham nhũng theo tư tưởng Hồ Chí Minh. Bạn cũng có thể hỏi về tiểu sử và cuộc đời của Bác Hồ.',
      'Tôi có thể giúp bạn tìm hiểu về: thời kỳ quá độ lên CNXH, các nguyên tắc xây dựng CNXH, nhiệm vụ trên các lĩnh vực, và ứng dụng tư tưởng Hồ Chí Minh vào thực tiễn. Bạn muốn hỏi về chủ đề nào cụ thể?'
    ]

    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)]
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findAnswer(input),
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-[600px] bg-white dark:bg-card-dark rounded-xl shadow-2xl border-2 border-primary/20 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-white">smart_toy</span>
          </div>
          <div>
            <h3 className="font-bold text-sm">Trợ lý AI</h3>
            <p className="text-xs opacity-90">Tư tưởng Hồ Chí Minh</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-white/80 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-white/70' : 'text-slate-500'
              }`}>
                {message.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-slate-200 dark:border-slate-700 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nhập câu hỏi của bạn..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-primary hover:bg-primary/90 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">
          Ví dụ: "Bác Hồ ra đi tìm đường cứu nước năm nào?" • "Bác Hồ sinh năm nào?" • "Đặc điểm lớn nhất của thời kỳ quá độ là gì?"
        </p>
      </div>
    </div>
  )
}

export default ChatBot

