import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Package,
  Building,
  Home,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-garant-navy text-white py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main header row */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold" />
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-garant-gold">
                  GARANT
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 hidden sm:block">
                  грузовые перевозки
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              <a
                href="#services"
                className="hover:text-garant-gold transition-colors text-sm lg:text-base"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="hover:text-garant-gold transition-colors text-sm lg:text-base"
              >
                О компании
              </a>
              <a
                href="#reviews"
                className="hover:text-garant-gold transition-colors text-sm lg:text-base"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="hover:text-garant-gold transition-colors text-sm lg:text-base"
              >
                Контакты
              </a>
            </nav>

            {/* Contact & CTA */}
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-4">
              {/* Contact info - hidden on mobile */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 text-xs xl:text-sm">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
                  <a
                    href="tel:+79788631197"
                    className="hover:text-garant-gold transition-colors whitespace-nowrap"
                  >
                    +7 (978) 863-11-97
                  </a>
                </div>
                <div className="hidden 2xl:flex items-center gap-1">
                  <Mail className="h-3 w-3 xl:h-4 xl:w-4" />
                  <a
                    href="mailto:ilyas-crimea@mail.ru"
                    className="hover:text-garant-gold transition-colors"
                  >
                    ilyas-crimea@mail.ru
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold text-xs sm:text-sm lg:text-base px-2 xs:px-3 sm:px-4 py-2 lg:px-6 lg:py-3"
                asChild
              >
                <a href="tel:+79788631197" className="whitespace-nowrap">
					<span className="hidden xs:inline sm:hidden">Позвонить сейчас</span>
                  <span className="xs:hidden sm:inline">Позвонить сейчас</span>
                  {/* <span className="xs:hidden">📞</span> */}
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="xl:hidden text-white p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="xl:hidden mt-4 pb-4 border-t border-garant-navy-light">
              <nav className="flex flex-col space-y-3 mt-4">
                <a
                  href="#services"
                  className="hover:text-garant-gold transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Услуги
                </a>
                <a
                  href="#about"
                  className="hover:text-garant-gold transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О компании
                </a>
                <a
                  href="#reviews"
                  className="hover:text-garant-gold transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a
                  href="#contacts"
                  className="hover:text-garant-gold transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
                {/* Mobile contacts */}
                <div className="lg:hidden pt-3 border-t border-garant-navy-light">
                  <div className="flex flex-col space-y-2 text-sm">
                    <a
                      href="tel:+79788631197"
                      className="hover:text-garant-gold transition-colors flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      +7 (978) 863-11-97
                    </a>
                    <a
                      href="mailto:ilyas-crimea@mail.ru"
                      className="hover:text-garant-gold transition-colors flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      ilyas-crimea@mail.ru
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-garant-navy via-garant-navy-light to-garant-navy">
          {/* Geometric shapes - responsive positioning */}
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-garant-gold/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 bg-garant-gold/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-garant-gold/15 rounded-full blur-lg animate-pulse delay-500"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201, 169, 107, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201, 169, 107, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px sm:50px 50px",
              }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-garant-gold/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
              <Truck className="h-4 w-4 sm:h-6 sm:w-6 text-garant-gold" />
              <span className="text-garant-gold font-semibold text-sm sm:text-base">
                №1 в Крыму
              </span>
            </div>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 xs:px-0">
            Грузовые{" "}
            <span className="text-garant-gold relative">
              перевозки
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-garant-gold/50 rounded-full"></div>
            </span>
          </h2>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 xs:px-4">
            Доставим быстро, точно и по доступным ценам по всему Крыму.
            Специализируемся на перевозке стройматериалов и стеклопакетов.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
            <div className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-garant-gold">
                15
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                машин в автопарке
              </div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-garant-gold">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                на связи
              </div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-garant-gold">
                10
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                лет на рынке
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 xs:px-4">
            <Button
              size="lg"
              className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold text-sm xs:text-base sm:text-lg px-4 xs:px-6 py-4 sm:px-8 sm:py-6 shadow-2xl shadow-garant-gold/20 w-full sm:w-auto min-h-[48px]"
              asChild
            >
              <a
                href="tel:+79788631197"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs xs:text-sm sm:text-base">
                  <span className="hidden xs:inline">
                    Позвонить: +7 (978) 863-11-97
                  </span>
                  <span className="xs:hidden">+7 (978) 863-11-97</span>
                </span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-garant-gold text-garant-gold hover:bg-garant-gold hover:text-garant-navy font-semibold text-sm xs:text-base sm:text-lg px-4 xs:px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto min-h-[48px]"
              asChild
            >
              <a
                href="#services"
                className="flex items-center justify-center gap-2"
              >
                Узнать больше
              </a>
            </Button>
          </div>

          {/* Special offer */}
          <div className="mt-6 sm:mt-8 inline-block bg-garant-gold text-garant-navy px-3 xs:px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg text-xs xs:text-sm sm:text-base mx-2 xs:mx-0">
            <span className="hidden xs:inline">
              🎉 Скидка 20% для новых клиентов из интернета!
            </span>
            <span className="xs:hidden">🎉 Скидка 20% если с сайта!</span>
          </div>
        </div>

        {/* Floating elements - hidden on small screens */}
        <div className="absolute top-1/4 left-4 sm:left-8 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 animate-bounce delay-300">
            <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-garant-gold" />
          </div>
        </div>

        <div className="absolute bottom-1/4 right-4 sm:right-8 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 lg:p-4 animate-bounce delay-700">
            <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-garant-gold" />
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4 sm:mb-6">
                Грузоперевозки по Крыму
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Мы предоставляем качественные услуги грузоперевозок по всей
                территории Крыма. Наша компания гарантирует надежную доставку
                ваших грузов в кратчайшие сроки. Специализируемся на перевозке
                строительных материалов, окон и стеклопакетов.
              </p>
              <div className="bg-garant-gold text-garant-navy p-4 sm:p-6 rounded-lg shadow-lg">
                <h4 className="text-xl sm:text-2xl font-bold mb-2">
                  Скидка 20%
                </h4>
                <p className="text-base sm:text-lg">
                  для клиентов, которые нашли нас в интернете!
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-garant-navy rounded-lg p-6 sm:p-8 text-white">
                <Truck className="h-16 w-16 sm:h-20 sm:w-20 text-garant-gold mb-4" />
                <h4 className="text-xl sm:text-2xl font-bold mb-4">
					Современный автопарк Газель и MAN
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Все наши автомобили Газель и MAN находятся в отличном техническом
                  состоянии и оснащены специальными рамами для безопасной
                  перевозки стекла и окон.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
              О компании
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Надежный партнер в сфере грузоперевозок по Крыму
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-garant-navy mb-2">
                      Опыт и надежность
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Многолетний опыт работы в сфере грузоперевозок
                      обеспечивает высокое качество наших услуг.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-garant-navy mb-2">
						Собственный автопарк Газель и MAN
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Весь транспорт принадлежит компании, что гарантирует
                      контроль качества и сроков доставки.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-garant-navy mb-2">
                      Работа с юр. и физ. лицами
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Обслуживаем как частных клиентов, так и крупные
                      предприятия с полным пакетом документов.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Card className="text-center p-4 sm:p-6 border-garant-gold border-2">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-3xl font-bold text-garant-gold mb-2">
                    #1
                  </div>
                  <p className="text-garant-navy font-semibold text-sm sm:text-base">
                    в Крыму
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 sm:p-6 border-garant-gold border-2">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-3xl font-bold text-garant-gold mb-2">
                    5
                  </div>
                  <p className="text-garant-navy font-semibold text-sm sm:text-base">
                    машин до 5 тонн
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 sm:p-6 border-garant-gold border-2">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-3xl font-bold text-garant-gold mb-2">
                    10
                  </div>
                  <p className="text-garant-navy font-semibold text-sm sm:text-base">
                    машин 2-3.5 тонн
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 sm:p-6 border-garant-gold border-2">
                <CardContent className="p-0">
                  <div className="text-2xl sm:text-3xl font-bold text-garant-gold mb-2">
                    24/7
                  </div>
                  <p className="text-garant-navy font-semibold text-sm sm:text-base">
                    работаем
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-garant-gold mx-auto mb-4" />
              <h4 className="text-lg sm:text-xl font-semibold text-garant-navy mb-2">
                Быстрая доставка
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Соблюдение сроков — наш приоритет
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-garant-gold mx-auto mb-4" />
              <h4 className="text-lg sm:text-xl font-semibold text-garant-navy mb-2">
                Гарантия качества
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Полная ответственность за груз
              </p>
            </div>

            <div className="text-center sm:col-span-2 lg:col-span-1">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-garant-gold mx-auto mb-4" />
              <h4 className="text-lg sm:text-xl font-semibold text-garant-navy mb-2">
                Честные цены
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Никаких скрытых доплат
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
              Услуги
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">
              Специализированные перевозки по Крыму
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow border-2 hover:border-garant-gold">
              <CardContent className="p-0">
                <Building className="h-12 w-12 sm:h-16 sm:w-16 text-garant-gold mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-garant-navy mb-3 sm:mb-4">
                  Перевозка строительных материалов
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Безопасная доставка кирпича, блоков, цемента и других
                  стройматериалов по всему Крыму
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow border-2 hover:border-garant-gold">
              <CardContent className="p-0">
                <Home className="h-12 w-12 sm:h-16 sm:w-16 text-garant-gold mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-garant-navy mb-3 sm:mb-4">
                  Перевозка окон и стеклопакетов
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Специальные рамы Газели обеспечивают безопасную
                  транспортировку хрупких грузов без повреждений
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow border-2 hover:border-garant-gold sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <Package className="h-12 w-12 sm:h-16 sm:w-16 text-garant-gold mx-auto mb-4 sm:mb-6" />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-garant-navy mb-3 sm:mb-4">
                  Доставка по Симферополю и всему Крыму
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Комплексные решения для доставки любых грузов в пределах
                  города и по всей территории полуострова
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg max-w-4xl mx-auto">
              <h4 className="text-xl sm:text-2xl font-bold text-garant-navy mb-4 sm:mb-6">
                Почему выбирают наши Газели?
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-garant-navy text-sm sm:text-base">
                      Специальное оборудование
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Рамы для стекла, крепления для стройматериалов
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-garant-navy text-sm sm:text-base">
                      Опытные водители
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Знают все дороги Крыма, аккуратная погрузка
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-garant-navy text-sm sm:text-base">
                      Страхование груза
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Полная материальная ответственность за сохранность
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-garant-gold mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-garant-navy text-sm sm:text-base">
                      Гибкие тарифы
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Почасовая оплата или фиксированная стоимость
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
            Отзывы клиентов
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
            Что говорят о нас наши клиенты
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-garant-gold text-garant-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  "Заказывали перевозку стеклопакетов. Газель была оборудована
                  специальными рамами, всё довезли без единой царапины. Водитель
                  очень аккуратный!"
                </p>
                <p className="text-garant-navy font-semibold text-sm sm:text-base">
                  — Андрей К.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-garant-gold text-garant-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  "Сотрудничаем уже несколько лет. Постоянно возим
                  стройматериалы по объектам. Надежные партнеры, всегда
                  выполняют обязательства."
                </p>
                <p className="text-garant-navy font-semibold text-sm sm:text-base">
                  — ООО "Консоль"
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-garant-gold text-garant-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  "Быстро доставили окна в Ялту. Цена честная, без накруток.
                  Очень довольны сервисом. Рекомендуем!"
                </p>
                <p className="text-garant-navy font-semibold text-sm sm:text-base">
                  — Мария С.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacts"
        className="bg-garant-navy text-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold" />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-garant-gold">
                    GARANT
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    грузовые перевозки
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Надежные грузоперевозки Газелями по всему Крыму
              </p>
            </div>

            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-garant-gold">
                Навигация
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
                  >
                    О компании
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-garant-gold">
                Контакты
              </h5>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <a
                    href="tel:+79788631197"
                    className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
                  >
                    +7 (978) 863-11-97
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <a
                    href="mailto:ilyas-crimea@mail.ru"
                    className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base break-all"
                  >
                    ilyas-crimea@mail.ru
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm sm:text-base">
                    Республика Крым
                    <br />
                    г. Симферополь
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-garant-gold">
                Заказать звонок
              </h5>
              <Button
                className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold w-full min-h-[44px] text-sm sm:text-base"
                asChild
              >
                <a href="tel:+79788631197">Позвоните прямо сейчас</a>
              </Button>
            </div>
          </div>

          <div className="border-t border-garant-navy-light mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              © 2025 GARANT. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
