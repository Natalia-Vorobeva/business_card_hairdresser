import bob from './assets/images/bob.webp'
import svad2 from './assets/images/svad2.webp'
import svad from './assets/images/svad.webp'
import boks from './assets/images/boks.webp'
import purpleHair from './assets/images/purple-hair.webp'
import pomp from './assets/images/pomp.webp'
import acc from './assets/images/acc.webp'
import vech from './assets/images/vech.webp'
import ombre from './assets/images/ombre.webp'
import cras2 from './assets/images/cras2.webp'
import feid from './assets/images/feid.webp'
import pikse from './assets/images/pikse.webp'


	export const testimonials = [
		{
			id: 1,
			name: "Анна Смирнова",
			text: "Лучший парикмахер в городе! Всегда ухожу довольной, мои волосы выглядят потрясающе после каждого визита.",
			rating: 5,
			date: "2 недели назад",
			avatar: svad
		},
		{
			id: 2,
			name: "Михаил Иванов",
			text: "Профессионал своего дела. Делает идеальные мужские стрижки, учитывая все пожелания. Рекомендую!",
			rating: 5,
			date: "3 недели назад",
			avatar: feid
		},
		{
			id: 3,
			name: "Елена Петрова",
			text: "Делала сложное окрашивание - результат превзошел все ожидания! Мастер с золотыми руками.",
			rating: 5,
			date: "месяц назад",
			avatar: pikse
		}
	]

export const galleryItems = [
	{
		id: 1,
		image: acc,
		category: "women",
		title: "Женская ассиметричная стрижка"
	},
	{
		id: 2,
		image: pomp,
		category: "men",
		title: "Мужской классический помпадур"
	},
	{
		id: 3,
		image: purpleHair,
		category: "coloring",
		title: "Окрашивание балаяж"
	},
	{
		id: 4,
		image: vech,
		category: "styling",
		title: "Вечерняя укладка"
	},
	{
		id: 5,
		image: boks,
		category: "men",
		title: "Стрижка с выбритыми висками"
	},
	{
		id: 6,
		image: ombre,
		category: "women",
		title: "Длинные волосы омбре"
	},	
	{
		id: 7,
		image: cras2,
		category: "coloring",
		title: "Яркое фантазийное окрашивание"
	},
	{
		id: 8,
		image: svad2,
		category: "styling",
		title: "Свадебная укладка"
	},
	{
		id: 9,
		image: bob,
		category: "women",
		title: "Женская стрижка боб"
	},
]

export const services = [
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
