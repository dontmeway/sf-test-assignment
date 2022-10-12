import { Container, NewsCard } from '@/shared/ui'

export const NewsWidget = () => {
  return (
    <section id="blog">
      <Container>
        <div className="flex flex-col space-y-[50px]">
          <div className="flex flex-col space-y-5">
            <h6 className="text-lg font-medium text-brand-black">Блог</h6>
            <h4 className="text-3xl font-bold text-brand-black">
              Актуальные новости
            </h4>
          </div>
          <div className="grid grid-cols-3 gap-x-8">
            <NewsCard
              imageSrc="/news_1.png"
              date="12.07.2022"
              title="40 русскоязычных YouTube каналов о дизайне"
              tag="#Дизайн"
              description="Друзья, собрал для вас 40 русскоязычных You Tube каналов о дизайне. Акцент на теоретическую часть: лекции, интервью."
            />
            <NewsCard
              imageSrc="/news_2.png"
              date="14.07.2022"
              title="Главные новости недели: Unpacked 2022, карта Ozon"
              tag="#Разработка"
              description="Обсудили новые складные смартфоны,
              зачем Ozon делает карту, а Сбер — 
              очередной аналог TikTok."
            />
            <NewsCard
              imageSrc="/news_3.png"
              date="13.07.2022"
              title="Помогаем локальным брендам выйти на рынок и заявить о себе"
              description="Новый московский бренд домашнего текстиля: от разработки айдентики и упаковки до создания сайта."
              tag="#Маркетинг"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
