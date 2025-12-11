// App.jsx
import { useState, useEffect } from 'react'
import { Scissors, MapPin, Phone, Mail, Instagram, CalendarCheck, Clock, CheckCircle, Star, ChevronLeft, ChevronRight, Menu, X, Users, Award, Sparkles } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const App = () => {
	const [activeService, setActiveService] = useState(0)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeGalleryFilter, setActiveGalleryFilter] = useState('all')
	const [selectedDate, setSelectedDate] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [dateSelected, setDateSelected] = useState(false);

	// Имитация загрузки данных
	useEffect(() => {
		document.title = "Luxury Hair | Салон красоты"
	}, [])

	// Данные услуг
	const services = [
		{
			id: 1,
			title: "Женская стрижка",
			price: "от 1 500 ₽",
			description: "Современные техники стрижки, подбор индивидуального стиля",
			duration: "1 час",
			popular: true,
			details: [
				"Консультация и подбор стиля",
				"Мытье головы с профессиональной косметикой",
				"Стрижка по выбранной технике",
				"Сушка и укладка"
			]
		},
		{
			id: 2,
			title: "Мужская стрижка",
			price: "от 1 000 ₽",
			description: "Классические и современные мужские стрижки",
			duration: "40 мин",
			popular: false,
			details: [
				"Консультация по выбору стиля",
				"Точная стрижка машинкой и ножницами",
				"Оформление бороды и усов",
				"Укладка с профессиональными средствами"
			]
		},
		{
			id: 3,
			title: "Окрашивание волос",
			price: "от 3 500 ₽",
			description: "Сложное окрашивание, балаяж, омбре, тонирование",
			duration: "2-3 часа",
			popular: true,
			details: [
				"Диагностика состояния волос",
				"Подбор цвета по тону кожи",
				"Профессиональное окрашивание",
				"Уходовые процедуры после окрашивания"
			]
		},
		{
			id: 4,
			title: "Укладка",
			price: "от 1 200 ₽",
			description: "Вечерние укладки, свадебные прически",
			duration: "40 мин",
			popular: false,
			details: [
				"Консультация по выбору прически",
				"Мытье и подготовка волос",
				"Создание укладки",
				"Фиксация профессиональными средствами"
			]
		},
		{
			id: 5,
			title: "Уход за волосами",
			price: "от 2 000 ₽",
			description: "Профессиональные уходовые процедуры",
			duration: "1 час",
			popular: true,
			details: [
				"Диагностика состояния волос",
				"Подбор уходовых средств",
				"Профессиональная маска",
				"Рекомендации по домашнему уходу"
			]
		}
	]

	// Данные для галереи
	const galleryItems = [
		{
			id: 1,
			image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "women",
			title: "Женская стрижка каре"
		},
		{
			id: 2,
			image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "men",
			title: "Мужской классический стиль"
		},
		{
			id: 3,
			image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "coloring",
			title: "Окрашивание балаяж"
		},
		{
			id: 4,
			image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "styling",
			title: "Вечерняя укладка"
		},
		{
			id: 5,
			image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "women",
			title: "Длинные волосы с градуировкой"
		},
		{
			id: 6,
			image: "https://avatars.mds.yandex.net/i?id=eb88c59f7535e5f0f905108b6e232e5a7a1eb328-8486953-images-thumbs&n=13",
			category: "women",
			title: "Стрижка с выбритыми висками"
		},
		{
			id: 7,
			image: "https://avatars.mds.yandex.net/i?id=2da9a0a7965fdc1431c7118ad269aabc12a196ad-9106703-images-thumbs&n=13",
			category: "coloring",
			title: "Яркое фантазийное окрашивание"
		},
		{
			id: 8,
			image: "https://avatars.mds.yandex.net/i?id=dcb4348f14cc69817192045afdd07a8d704473a7-16420753-images-thumbs&n=13",
			category: "styling",
			title: "Свадебная укладка"
		}
	]

	const handleDateSelect = () => {
		const dateInput = document.getElementById('date-time');
		if (dateInput.value) {
			setSelectedDate(dateInput.value);
			setDateSelected(true);
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// Здесь обычно отправка на сервер
		console.log('Form submitted');
		setIsSubmitted(true);

		// Сброс через 5 секунд
		setTimeout(() => {
			setIsSubmitted(false);
		}, 5000);
	};

	// Фильтрация галереи
	const filteredGallery = activeGalleryFilter === 'all'
		? galleryItems
		: galleryItems.filter(item => item.category === activeGalleryFilter)

	// Отзывы клиентов
	const testimonials = [
		{
			id: 1,
			name: "Анна Смирнова",
			text: "Лучший парикмахер в городе! Всегда ухожу довольной, мои волосы выглядят потрясающе после каждого визита.",
			rating: 5,
			date: "2 недели назад",
			avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
		},
		{
			id: 2,
			name: "Михаил Иванов",
			text: "Профессионал своего дела. Делает идеальные мужские стрижки, учитывая все пожелания. Рекомендую!",
			rating: 5,
			date: "месяц назад",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
		},
		{
			id: 3,
			name: "Елена Петрова",
			text: "Делала сложное окрашивание - результат превзошел все ожидания! Мастер с золотыми руками.",
			rating: 5,
			date: "3 недели назад",
			avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
		}
	]

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
			{/* Header */}
		
			<header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
					{/* Логотип - адаптированный для мобильных */}
					<div className="flex items-center space-x-2">
						<Scissors className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-400 flex-shrink-0" />
						<h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent whitespace-nowrap">
							Luxury Hair
						</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
						<ScrollLink
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="text-sm xl:text-base hover:text-amber-300 transition-colors cursor-pointer font-medium"
						>
							Главная
						</ScrollLink>
						<ScrollLink
							to="services"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="text-sm xl:text-base hover:text-amber-300 transition-colors cursor-pointer font-medium"
						>
							Услуги
						</ScrollLink>
						<ScrollLink
							to="gallery"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="text-sm xl:text-base hover:text-amber-300 transition-colors cursor-pointer font-medium"
						>
							Галерея
						</ScrollLink>
						<ScrollLink
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="text-sm xl:text-base hover:text-amber-300 transition-colors cursor-pointer font-medium"
						>
							О мастере
						</ScrollLink>
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="text-sm xl:text-base hover:text-amber-300 transition-colors cursor-pointer font-medium"
						>
							Контакты
						</ScrollLink>
					</nav>

					{/* Кнопка "Записаться онлайн" - показывается на средних и больших экранах */}
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="hidden md:block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2 px-4 lg:px-6 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer whitespace-nowrap text-sm lg:text-base"
					>
						Записаться онлайн
					</ScrollLink>

					{/* Mobile menu button */}
					<button
						className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
					>
						{isMenuOpen ? (
							<X size={24} className="text-gray-300" />
						) : (
							<Menu size={24} className="text-gray-300" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
						>
							<div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
								<ScrollLink
									to="home"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="py-3 px-4 hover:text-amber-300 hover:bg-gray-800/50 transition-colors cursor-pointer rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									Главная
								</ScrollLink>
								<ScrollLink
									to="services"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="py-3 px-4 hover:text-amber-300 hover:bg-gray-800/50 transition-colors cursor-pointer rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									Услуги
								</ScrollLink>
								<ScrollLink
									to="gallery"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="py-3 px-4 hover:text-amber-300 hover:bg-gray-800/50 transition-colors cursor-pointer rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									Галерея
								</ScrollLink>
								<ScrollLink
									to="about"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="py-3 px-4 hover:text-amber-300 hover:bg-gray-800/50 transition-colors cursor-pointer rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									О мастере
								</ScrollLink>
								<ScrollLink
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="py-3 px-4 hover:text-amber-300 hover:bg-gray-800/50 transition-colors cursor-pointer rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									Контакты
								</ScrollLink>

								{/* Кнопка для мобильных */}
								<ScrollLink
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer text-center mt-2"
									onClick={() => setIsMenuOpen(false)}
								>
									Записаться онлайн
								</ScrollLink>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* Hero Section */}
			{/* Hero Section */}
<section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10"></div>
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Салон красоты"
      className="w-full h-full object-cover opacity-30"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    />
  </div>

  {/* Три градиентных кружочка слева - адаптированы */}
  <div className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-1 sm:space-y-2">
    {[1, 2, 3].map((num) => (
      <motion.div
        key={num}
        className="relative w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center 
                   opacity-40 xs:opacity-50 sm:opacity-60 md:opacity-70 lg:opacity-80 xl:opacity-100 
                   transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: [
            "0 0 8px rgba(245, 158, 11, 0.2)",
            "0 0 15px rgba(72, 189, 236, 0.4)",
            "0 0 8px rgba(245, 158, 11, 0.2)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-[#88de8a] to-amber-900/30 rounded-full"></div>
        <div className="absolute inset-[1px] sm:inset-[2px] bg-gray-900 rounded-full"></div>

        <div className="relative z-10">
          {num === 1 ? (
            <motion.div
              className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-600 rounded-lg rotate-12"></div>
              <div className="absolute inset-[1px] sm:inset-[2px] bg-gray-900 rounded-lg rotate-12 flex items-center justify-center">
                <span className="text-[6px] xs:text-[7px] sm:text-[10px] md:text-xs font-bold text-transparent bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text -rotate-12">L</span>
              </div>
            </motion.div>
          ) : num === 2 ? (
            <motion.div
              className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              animate={{
                rotate: [0, 15, 0, -15, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg"></div>
              <div className="absolute inset-[1px] sm:inset-[2px] bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-[6px] xs:text-[7px] sm:text-[10px] md:text-xs font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text">H</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              animate={{
                scale: [1, 1.1, 1],
                borderRadius: ["50%", "35%", "50%"]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-amber-400 rounded-full"></div>
              <div className="absolute inset-[1px] sm:inset-[2px] bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-[6px] xs:text-[7px] sm:text-[10px] md:text-xs font-bold text-transparent bg-gradient-to-r from-purple-500 to-amber-400 bg-clip-text">10</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    ))}
  </div>

  <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 relative z-20">
    <div className="max-w-full lg:max-w-2xl ml-0 
                    xs:ml-10 sm:ml-12 md:ml-14 lg:ml-16 xl:ml-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
          Профессиональный{' '}
          <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            парикмахер
          </span>{' '}
          с 10-летним опытом
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl">
          Создаю индивидуальный стиль, подчеркивающий вашу уникальность. Работаю с последними тенденциями парикмахерского искусства.
        </p>
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2.5 xs:py-3 px-4 xs:px-5 sm:px-6 md:px-8 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 flex items-center justify-center cursor-pointer text-xs xs:text-sm sm:text-base"
          >
            <Phone size={16} xs:size={18} sm:size={20} className="mr-1 xs:mr-2" /> 
            <span className="whitespace-nowrap">Записаться по телефону</span>
          </ScrollLink>
          <ScrollLink
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-2.5 xs:py-3 px-4 xs:px-5 sm:px-6 md:px-8 rounded-full transition-all cursor-pointer text-xs xs:text-sm sm:text-base text-center"
          >
            <span className="whitespace-nowrap">Смотреть портфолио</span>
          </ScrollLink>
        </div>
      </motion.div>
    </div>
  </div>
</section>

			{/* Services Section */}
			<section id="services" className="py-16 bg-gray-900/50">
				<div className="container mx-auto px-6 sm:px-8 lg:px-12">
					<div className="mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Мои услуги</h2>
						<p className="text-gray-400 max-w-2xl">
							Предоставляю полный спектр парикмахерских услуг для женщин и мужчин. Индивидуальный подход к каждому клиенту.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
									<div>
										<h3 className="text-2xl font-bold">{services[activeService].title}</h3>
										{services[activeService].popular && (
											<span className="inline-block mt-2 bg-amber-900/30 text-amber-300 text-sm font-semibold px-3 py-1 rounded-full">
												Популярная услуга
											</span>
										)}
									</div>
									<div className="text-left sm:text-right">
										<div className="text-3xl font-bold text-amber-300">{services[activeService].price}</div>
										<div className="text-gray-400 text-sm flex items-center sm:justify-end">
											<Clock size={16} className="mr-1" /> {services[activeService].duration}
										</div>
									</div>
								</div>

								<p className="text-gray-300 mb-6">{services[activeService].description}</p>

								<div className="mb-8">
									<h4 className="text-lg font-semibold mb-4">Что входит в услугу:</h4>
									<ul className="space-y-3">
										{services[activeService].details.map((detail, index) => (
											<li key={index} className="flex items-start">
												<Sparkles className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
												<span>{detail}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="flex flex-col sm:flex-row gap-4">
									<ScrollLink
										to="contact"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer text-center"
									>
										Записаться на эту услугу
									</ScrollLink>
									<ScrollLink
										to="gallery"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className="flex-1 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-white font-semibold py-3 rounded-full transition-all cursor-pointer text-center"
									>
										Посмотреть примеры работ
									</ScrollLink>
								</div>
							</div>
						</div>

						<div className="lg:col-span-1">
							<div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 h-full">
								<h3 className="text-xl font-bold mb-6 text-amber-300">Услуги и цены</h3>
								<div className="space-y-3">
									{services.map((service, index) => (
										<button
											key={service.id}
											onClick={() => setActiveService(index)}
											className={`w-full text-left p-4 rounded-xl transition-all ${activeService === index
												? 'bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-700/50'
												: 'hover:bg-gray-700/50 border border-transparent'
												}`}
										>
											<div className="flex justify-between items-center">
												<div className="flex items-center">
													<div className={`w-2 h-2 rounded-full mr-3 ${activeService === index ? 'bg-amber-400' : 'bg-gray-500'}`}></div>
													<span className="font-medium">{service.title}</span>
												</div>
												<span className={`font-bold ${activeService === index ? 'text-amber-300' : 'text-gray-400'}`}>{service.price}</span>
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Panoramic Gallery Section */}
			<section id="gallery" className="py-16">
				<div className="container mx-auto px-6 sm:px-8 lg:px-12">
					<div className="mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио работ</h2>
						<p className="text-gray-400 max-w-2xl">
							Мои лучшие работы. Панорамная галерея позволяет рассмотреть каждую деталь.
						</p>

						{/* Gallery Filters */}
						<div className="flex flex-wrap gap-3 mt-8">
							{['all', 'women', 'men', 'coloring', 'styling'].map((filter) => (
								<button
									key={filter}
									onClick={() => setActiveGalleryFilter(filter)}
									className={`px-4 py-2 rounded-full transition-all text-sm ${activeGalleryFilter === filter ? 'bg-amber-500 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
								>
									{filter === 'all' && 'Все работы'}
									{filter === 'women' && 'Женские стрижки'}
									{filter === 'men' && 'Мужские стрижки'}
									{filter === 'coloring' && 'Окрашивание'}
									{filter === 'styling' && 'Укладки'}
								</button>
							))}
						</div>
					</div>

					{/* Swiper Gallery */}
					<div className="py-8">
						<Swiper
							effect={'coverflow'}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={'auto'}
							loop={true}
							coverflowEffect={{
								rotate: 20,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
							className="mySwiper"
						>
							{filteredGallery.map((item) => (
								<SwiperSlide key={item.id} className="!w-72 !h-80 md:!w-80 md:!h-96 rounded-2xl overflow-hidden">
									<div className="relative w-full h-full group">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
											loading="eager"
											decoding="async"
											fetchpriority="high"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
											<div>
												<h3 className="text-xl font-bold text-white">{item.title}</h3>
												<div className="flex items-center mt-2">
													<div className="w-8 h-1 bg-amber-400 mr-2"></div>
													<span className="text-amber-300 text-sm">Подробнее</span>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-black">
				<div className="container mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="relative mb-8 lg:mb-0">
								<div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
										alt="Мастер парикмахер"
										className="w-full h-full object-cover"
										loading="eager"
										decoding="async"
										fetchpriority="high"
									/>
								</div>
								<div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 md:p-6 rounded-2xl w-48 md:w-64">
									<div className="text-3xl md:text-4xl font-bold">10+</div>
									<div className="text-base md:text-lg">лет опыта</div>
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">О мастере</h2>
							<p className="text-gray-300 text-lg mb-8">
								Меня зовут Александра, я профессиональный парикмахер-стилист с 10-летним опытом работы.
								За свою карьеру я прошла обучение у ведущих мировых специалистов и регулярно повышаю квалификацию.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
									<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
										<Award className="text-amber-400" size={24} />
									</div>
									<h4 className="text-xl font-semibold mb-2">Сертифицированный мастер</h4>
									<p className="text-gray-400 text-sm">
										Международные сертификаты L'Oréal, Schwarzkopf, Wella
									</p>
								</div>

								<div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
									<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
										<Users className="text-amber-400" size={24} />
									</div>
									<h4 className="text-xl font-semibold mb-2">Более 5000 клиентов</h4>
									<p className="text-gray-400 text-sm">
										Довольных результатом работы
									</p>
								</div>
							</div>

							<div className="mb-8">
								<h4 className="text-xl font-semibold mb-4">Отзывы клиентов</h4>
								<div className="space-y-4">
									{testimonials.map((testimonial) => (
										<div key={testimonial.id} className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
											<div className="flex items-start mb-3">
												<div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
													<img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
												</div>
												<div className="flex-1">
													<div className="flex justify-between items-start">
														<h5 className="font-semibold">{testimonial.name}</h5>
														<div className="flex">
															{[...Array(testimonial.rating)].map((_, i) => (
																<Star key={i} size={16} className="text-amber-400 fill-amber-400" />
															))}
														</div>
													</div>
													<p className="text-gray-400 text-sm mt-1">{testimonial.text}</p>
													<div className="text-gray-500 text-xs mt-2">{testimonial.date}</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-16">
				<div className="container mx-auto px-6 sm:px-8 lg:px-12">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты и запись</h2>
							<p className="text-gray-400 max-w-2xl mx-auto">
								Свяжитесь со мной для записи или консультации. Работаю по предварительной записи.
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
							<div>
								<h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

								<div className="space-y-6 mb-8">
									<div className="flex items-start">
										<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
											<MapPin className="text-amber-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold text-lg mb-1">Адрес салона</h4>
											<p className="text-gray-400">ул. Красивая, 25, Центральный район</p>
											<p className="text-gray-400 text-sm">Салон "Luxury Beauty"</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
											<Phone className="text-amber-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold text-lg mb-1">Телефон для записи</h4>
											<p className="text-gray-400">+7 (999) 123-45-67</p>
											<p className="text-gray-400 text-sm">Ежедневно с 10:00 до 20:00</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
											<Mail className="text-amber-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold text-lg mb-1">Электронная почта</h4>
											<p className="text-gray-400">alexandra@luxuryhair.ru</p>
											<p className="text-gray-400 text-sm">Отвечаю в течение дня</p>
										</div>
									</div>
								</div>

								<div className="mb-8">
									<h4 className="font-semibold text-lg mb-4">Социальные сети</h4>
									<div className="flex space-x-4">
										<a href="#" className="w-12 h-12 bg-gray-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all">
											<Instagram size={22} />
										</a>
										<a href="#" className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
											<span className="font-bold">VK</span>
										</a>
										<a href="#" className="w-12 h-12 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all">
											<span className="font-bold">TG</span>
										</a>
									</div>
								</div>

								<div className="bg-gray-800/50 p-5 rounded-xl">
									<h4 className="font-semibold text-lg mb-3">График работы</h4>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-gray-400">Понедельник - Пятница</span>
											<span className="font-medium">10:00 - 20:00</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-400">Суббота</span>
											<span className="font-medium">11:00 - 19:00</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-400">Воскресенье</span>
											<span className="font-medium">11:00 - 18:00</span>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-gray-800/30 p-6 md:p-8 rounded-2xl border border-gray-700 relative h-full">
									<AnimatePresence>
										{isSubmitted && (
											<motion.div
												initial={{ opacity: 0, y: -20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
											>
												<div className="bg-gradient-to-r from-green-500/90 to-emerald-600/90 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 backdrop-blur-sm">
													<CheckCircle size={20} />
													<span className="font-semibold">Сообщение отправлено!</span>
												</div>
											</motion.div>
										)}
									</AnimatePresence>

									<h3 className="text-2xl font-bold mb-6">Онлайн запись</h3>
									<form onSubmit={handleSubmit} className="space-y-5">
										<div>
											<label className="block text-gray-300 mb-2">Ваше имя</label>
											<input
												type="text"
												className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
												placeholder="Имя"
												required
											/>
										</div>

										<div>
											<label className="block text-gray-300 mb-2">Телефон</label>
											<input
												type="tel"
												className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
												placeholder="+7 (999) 123-45-67"
												required
											/>
										</div>

										<div>
											<label className="block text-gray-300 mb-2">Услуга</label>
											<select className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
												<option value="">Выберите услугу</option>
												{services.map(service => (
													<option key={service.id} value={service.id}>{service.title}</option>
												))}
											</select>
										</div>

										<div>
											<div className="flex justify-between items-center mb-2">
												<label className="block text-gray-300">Желаемая дата и время</label>
												{dateSelected && (
													<motion.div
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														className="flex items-center space-x-1 text-amber-300 text-sm"
													>
														<CalendarCheck size={16} />
														<span>Выбрано</span>
													</motion.div>
												)}
											</div>
											<input
												id="date-time"
												type="datetime-local"
												className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
												onChange={(e) => {
													setSelectedDate(e.target.value);
													setDateSelected(!!e.target.value);
												}}
											/>
											{selectedDate && (
												<motion.p
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													className="text-amber-300 text-sm mt-2"
												>
													Выбрано: {new Date(selectedDate).toLocaleString('ru-RU')}
												</motion.p>
											)}
										</div>

										<button
											type="submit"
											className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/30 mt-4"
										>
											Отправить заявку на запись
										</button>

										<p className="text-gray-400 text-sm text-center">
											Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
										</p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 border-t border-gray-800 bg-gray-900">
				<div className="container mx-auto px-6 sm:px-8 lg:px-12">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<Scissors className="h-6 w-6 text-amber-400" />
							<h3 className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
								Luxury Hair
							</h3>
						</div>

						<div className="text-gray-400 text-center md:text-right">
							<p>© 2026 Luxury Hair. Все права защищены.</p>
							<p className="text-sm mt-1">Сайт создан для презентации услуг парикмахера</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App