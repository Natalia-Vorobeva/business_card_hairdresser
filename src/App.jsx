// App.jsx
import { useState, useEffect } from 'react'
import { Scissors, MapPin, Phone, Mail, Instagram, CalendarCheck, Clock, CheckCircle, Star, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
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
			title: "Женские стрижки",
			price: "от 1 500 ₽",
			description: "Современные техники стрижки, подбор индивидуального стиля",
			duration: "1 час",
			popular: true
		},
		{
			id: 2,
			title: "Мужские стрижки",
			price: "от 1 000 ₽",
			description: "Классические и современные мужские стрижки, стрижка машинкой",
			duration: "40 мин",
			popular: false
		},
		{
			id: 3,
			title: "Окрашивание",
			price: "от 3 500 ₽",
			description: "Сложное окрашивание, балаяж, омбре, тонирование",
			duration: "2-3 часа",
			popular: true
		},
		{
			id: 4,
			title: "Укладка",
			price: "от 1 200 ₽",
			description: "Вечерние укладки, укладка на свадьбу, повседневные варианты",
			duration: "40 мин",
			popular: false
		},
		{
			id: 5,
			title: "Уход за волосами",
			price: "от 2 000 ₽",
			description: "Профессиональные уходовые процедуры для здоровья волос",
			duration: "1 час",
			popular: true
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
			image: "https://images.unsplash.com/photo-1560851248-3c2bdbd00482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "men",
			title: "Стрижка с выбритыми висками"
		},
		{
			id: 7,
			image: "https://images.unsplash.com/photo-1519204492552-08e4c8b1d5e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "coloring",
			title: "Яркое фантазийное окрашивание"
		},
		{
			id: 8,
			image: "https://images.unsplash.com/photo-1519415711931-702deacf5be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
			date: "2 недели назад"
		},
		{
			id: 2,
			name: "Михаил Иванов",
			text: "Профессионал своего дела. Делает идеальные мужские стрижки, учитывая все пожелания. Рекомендую!",
			rating: 5,
			date: "месяц назад"
		},
		{
			id: 3,
			name: "Елена Петрова",
			text: "Делала сложное окрашивание - результат превзошел все ожидания! Мастер с золотыми руками.",
			rating: 5,
			date: "3 недели назад"
		}
	]

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Scissors className="h-8 w-8 text-amber-400" />
						<h1 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
							Luxury Hair
						</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<ScrollLink
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="hover:text-amber-300 transition-colors cursor-pointer"
						>
							Главная
						</ScrollLink>
						<ScrollLink
							to="services"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="hover:text-amber-300 transition-colors cursor-pointer"
						>
							Услуги
						</ScrollLink>
						<ScrollLink
							to="gallery"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="hover:text-amber-300 transition-colors cursor-pointer"
						>
							Галерея
						</ScrollLink>
						<ScrollLink
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="hover:text-amber-300 transition-colors cursor-pointer"
						>
							О мастере
						</ScrollLink>
						<ScrollLink
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className="hover:text-amber-300 transition-colors cursor-pointer"
						>
							Контакты
						</ScrollLink>
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Кнопка "Записаться онлайн" с размытыми краями */}
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="hidden md:block relative bg-gradient-to-r from-amber-500/90 to-amber-600/90 hover:from-amber-600/90 hover:to-amber-700/90 text-white font-semibold py-2 px-6 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer overflow-hidden"
					>
						{/* Эффект размытых краев */}
						<div className="absolute -left-2 top-0 bottom-0 w-4 bg-gradient-to-r from-amber-500/40 to-transparent blur-sm"></div>
						<div className="absolute -right-2 top-0 bottom-0 w-4 bg-gradient-to-l from-amber-600/40 to-transparent blur-sm"></div>
						<span className="relative z-10">Записаться онлайн</span>
					</ScrollLink>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden bg-gray-800 border-t border-gray-700"
						>
							<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
								<ScrollLink
									to="home"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="py-2 hover:text-amber-300 transition-colors cursor-pointer"
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
									className="py-2 hover:text-amber-300 transition-colors cursor-pointer"
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
									className="py-2 hover:text-amber-300 transition-colors cursor-pointer"
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
									className="py-2 hover:text-amber-300 transition-colors cursor-pointer"
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
									className="py-2 hover:text-amber-300 transition-colors cursor-pointer"
									onClick={() => setIsMenuOpen(false)}
								>
									Контакты
								</ScrollLink>

								<ScrollLink
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-full mt-2 cursor-pointer text-center"
									onClick={() => setIsMenuOpen(false)}
								>
									Записаться онлайн
								</ScrollLink>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			{/* Hero Section с навигационными кнопками */}
			<section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10"></div>
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
						alt="Салон красоты"
						className="w-full h-full object-cover opacity-30"
					/>
				</div>

				{/* Три градиентных кружочка слева */}

{/* 
				<div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-2">
					{[1, 2, 3].map((num) => (
						<motion.div
							key={num}
							className="relative w-12 h-12 rounded-full flex items-center justify-center"
							whileHover={{ scale: 1.1 }}
							animate={{
								boxShadow: [
									"0 0 20px rgba(245, 158, 11, 0.5)",
									"0 0 30px rgba(72, 189, 236, 0.7)",
									"0 0 20px rgba(245, 158, 11, 0.5)"
								]
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatType: "reverse"
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-[#88de8a] to-amber-900/30 rounded-full opacity-80"></div>
							<div className="absolute inset-[2px] bg-gray-900 rounded-full"></div>				

							<div className="relative z-10">
								{num === 1 ? (
									<motion.div
										className="relative w-6 h-6"
										animate={{
											y: [0, -3, 0],
										}}
										transition={{ duration: 2, repeat: Infinity }}
									>
										<div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-600 rounded-lg rotate-12"></div>
										<div className="absolute inset-[2px] bg-gray-900 rounded-lg rotate-12 flex items-center justify-center">
											<span className="text-xs font-bold text-transparent bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text -rotate-12">L</span>
										</div>
									</motion.div>
								) : num === 2 ? (
									<motion.div
										className="relative w-6 h-6"
										animate={{
											rotate: [0, 15, 0, -15, 0],
										}}
										transition={{ duration: 3, repeat: Infinity }}
									>
										<div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg"></div>
										<div className="absolute inset-[2px] bg-gray-900 rounded-lg flex items-center justify-center">
											<span className="text-xs font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text">H</span>
										</div>
									</motion.div>
								) : (
									<motion.div
										className="relative w-6 h-6"
										animate={{
											scale: [1, 1.1, 1],
											borderRadius: ["50%", "35%", "50%"]
										}}
										transition={{ duration: 2.5, repeat: Infinity }}
									>
										<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-amber-400 rounded-full"></div>
										<div className="absolute inset-[2px] bg-gray-900 rounded-full flex items-center justify-center">
											<span className="text-xs font-bold text-transparent bg-gradient-to-r from-purple-500 to-amber-400 bg-clip-text">10</span>
										</div>
									</motion.div>
								)}
							</div>
						</motion.div>
					))}
				</div> */}

				<div className="container mx-auto px-4 relative z-20">
					<div className="max-w-2xl ml-16 md:ml-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-4xl md:text-6xl font-bold mb-4">
								Профессиональный <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">парикмахер</span> с 10-летним опытом
							</h2>
							<p className="text-xl text-gray-300 mb-8">
								Создаю индивидуальный стиль, подчеркивающий вашу уникальность. Работаю с последними тенденциями парикмахерского искусства.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<ScrollLink
									to="contact"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 flex items-center justify-center cursor-pointer"
								>
									<Phone size={20} className="mr-2" /> Записаться по телефону
								</ScrollLink>
								<ScrollLink
									to="gallery"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-all cursor-pointer"
								>
									Смотреть портфолио
								</ScrollLink>
							</div>
						</motion.div>
					</div>
				</div>
			</section>


			{/* Services Section */}
			<section id="services" className="py-16 bg-gray-900/50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Мои услуги</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Предоставляю полный спектр парикмахерских услуг для женщин и мужчин.
							Индивидуальный подход к каждому клиенту.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-8 mb-8">
						<div className="md:w-1/3">
							<div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
								<h3 className="text-xl font-bold mb-4 text-amber-300">Услуги и цены</h3>
								<div className="space-y-2">
									{services.map((service, index) => (
										<button
											key={service.id}
											onClick={() => setActiveService(index)}
											className={`w-full text-left p-4 rounded-xl transition-all ${activeService === index ? 'bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-700/50' : 'hover:bg-gray-700/50'}`}
										>
											<div className="flex justify-between items-center">
												<span className="font-medium">{service.title}</span>
												<span className="text-amber-300 font-bold">{service.price}</span>
											</div>
											{activeService === index && (
												<motion.p
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: 'auto' }}
													className="mt-2 text-gray-300 text-sm"
												>
													{service.description}
												</motion.p>
											)}
										</button>
									))}
								</div>
							</div>
						</div>

						<div className="md:w-2/3">
							<div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
								<div className="flex items-center justify-between mb-6">
									<div>
										<h3 className="text-2xl font-bold">{services[activeService].title}</h3>
										{services[activeService].popular && (
											<span className="inline-block mt-1 bg-amber-900/30 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">
												Популярная услуга
											</span>
										)}
									</div>
									<div className="text-right">
										<div className="text-3xl font-bold text-amber-300">{services[activeService].price}</div>
										<div className="text-gray-400 text-sm flex items-center">
											<Clock size={14} className="mr-1" /> {services[activeService].duration}
										</div>
									</div>
								</div>

								<div className="mb-8">
									<h4 className="text-lg font-semibold mb-2">Что входит в услугу:</h4>
									<ul className="space-y-2">
										<li className="flex items-center">
											<div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
											<span>Консультация и подбор стиля</span>
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
											<span>Необходимые инструменты и материалы премиум-класса</span>
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
											<span>Профессиональное выполнение услуги</span>
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
											<span>Рекомендации по домашнему уходу</span>
										</li>
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
					</div>
				</div>
			</section>

			{/* Panoramic Gallery Section */}
			<section id="gallery" className="py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио работ</h2>
						<p className="text-gray-400 max-w-2xl mx-auto mb-8">
							Мои лучшие работы. Панорамная галерея позволяет рассмотреть каждую деталь.
						</p>

						{/* Gallery Filters */}
						<div className="flex flex-wrap justify-center gap-3 mb-8">
							{['all', 'women', 'men', 'coloring', 'styling'].map((filter) => (
								<button
									key={filter}
									onClick={() => setActiveGalleryFilter(filter)}
									className={`px-5 py-2 rounded-full transition-all ${activeGalleryFilter === filter ? 'bg-amber-500 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
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
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
							className="mySwiper"
						>
							{filteredGallery.map((item) => (
								<SwiperSlide key={item.id} className="!w-80 !h-96 rounded-2xl overflow-hidden">
									<div className="relative w-full h-full group">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						<div className="lg:w-2/5">
							<div className="relative">
								<div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
									<img
										src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
										alt="Мастер парикмахер"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-2xl w-64">
									<div className="text-4xl font-bold">10+</div>
									<div className="text-lg">лет опыта</div>
								</div>
							</div>
						</div>

						<div className="lg:w-3/5">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">О мастере</h2>
							<p className="text-gray-300 text-lg mb-6">
								Меня зовут Александра, я профессиональный парикмахер-стилист с 10-летним опытом работы.
								За свою карьеру я прошла обучение у ведущих мировых специалистов и регулярно повышаю квалификацию.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
									<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
										<Scissors className="text-amber-400" size={24} />
									</div>
									<h4 className="text-xl font-semibold mb-2">Профессионализм</h4>
									<p className="text-gray-400">
										Использую только качественные материалы и инструменты премиум-класса.
									</p>
								</div>

								<div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
									<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
										<Star className="text-amber-400" size={24} />
									</div>
									<h4 className="text-xl font-semibold mb-2">Индивидуальный подход</h4>
									<p className="text-gray-400">
										Для каждого клиента подбираю стиль, учитывая тип волос и форму лица.
									</p>
								</div>
							</div>

							<div className="mb-8">
								<h4 className="text-xl font-semibold mb-4">Отзывы клиентов</h4>
								<div className="space-y-4">
									{testimonials.map((testimonial) => (
										<div key={testimonial.id} className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
											<div className="flex justify-between items-start mb-2">
												<h5 className="font-semibold">{testimonial.name}</h5>
												<div className="flex">
													{[...Array(testimonial.rating)].map((_, i) => (
														<Star key={i} size={16} className="text-amber-400 fill-amber-400" />
													))}
												</div>
											</div>
											<p className="text-gray-400 text-sm mb-1">{testimonial.text}</p>
											<div className="text-gray-500 text-xs">{testimonial.date}</div>
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
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты и запись</h2>
							<p className="text-gray-400 max-w-2xl mx-auto">
								Свяжитесь со мной для записи или консультации. Работаю по предварительной записи.
							</p>
						</div>

						<div className="flex flex-col lg:flex-row gap-12">
							<div className="lg:w-1/2">
								<h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

								<div className="space-y-6 mb-8">
									<div className="flex items-start">
										<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
											<MapPin className="text-amber-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold text-lg mb-1">Адрес салона</h4>
											<p className="text-gray-400">ул. Красивая, 25, Центральный район</p>
											<p className="text-gray-400">Работаю в салоне "Luxury Beauty"</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
											<Phone className="text-amber-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold text-lg mb-1">Телефон для записи</h4>
											<p className="text-gray-400">+7 (999) 123-45-67</p>
											<p className="text-gray-400 text-sm">Работаю с 10:00 до 20:00, без выходных</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="w-12 h-12 bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
											<Mail className="text-amber-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold text-lg mb-1">Электронная почта</h4>
											<p className="text-gray-400">alexandra@luxuryhair.ru</p>
											<p className="text-gray-400 text-sm">Отвечаю в течение 24 часов</p>
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

							<div className="lg:w-1/2">
								<div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 relative">
									{/* Уведомление об отправке */}
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
												<option value="1">Женская стрижка</option>
												<option value="2">Мужская стрижка</option>
												<option value="3">Окрашивание</option>
												<option value="4">Укладка</option>
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
											<div className="flex gap-2">
												<input
													id="date-time"
													type="datetime-local"
													className="flex-1 bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
													onChange={(e) => {
														setSelectedDate(e.target.value);
														setDateSelected(!!e.target.value);
													}}
												/>
												<button
													type="button"
													onClick={handleDateSelect}
													className={`px-4 rounded-lg transition-all ${dateSelected ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-gray-700 hover:bg-gray-600'} border border-gray-600`}
												>
													<span className="text-white font-medium">Выбрать</span>
												</button>
											</div>
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
											className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/30"
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
				<div className="container mx-auto px-4">
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