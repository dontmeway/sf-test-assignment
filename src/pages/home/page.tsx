import { HeaderWidget } from '@/widgets/header'
import { Container, ServiceCard, Stepper } from '@/shared/ui'
import { IconStartup, IconGraphic, IconTechnical } from '@/shared/assets/icons'
import { StepperWidget } from '@/widgets/stepper'
import { ContactUsWidget } from '@/widgets/contact-us'
import { NewsWidget } from '@/widgets/news'
import { Footer } from '@/widgets/footer'

export const HomePage = () => {
  return (
    <div className="w-full h-full flex-flex-col space-y-[100px]">
      <HeaderWidget />
      <main className="flex flex-grow flex-col space-y-[100px]">
        <section id="services">
          <Container>
            <div className="mx-auto grid grid-cols-3 gap-x-[30px]">
              <ServiceCard
                icon={IconStartup}
                title="Интернет-маркетинг"
                description="Практика использования всех аспектов традиционного маркетинга в Интернете, с целью продажи продукта."
              />
              <ServiceCard
                icon={IconTechnical}
                title="Разработка"
                description="Основными этапами этого процесса являются такие мероприятия, как Веб-дизайн, вёрстка страниц сайта."
              />
              <ServiceCard
                icon={IconGraphic}
                title="Веб-дизайн"
                description="Отрасль веб-разработки и разновидность дизайна, в задачи которой входит проектирование интерфейсов."
              />
            </div>
          </Container>
        </section>
        <StepperWidget />
        <ContactUsWidget />
        <NewsWidget />
      </main>
      <Footer />
    </div>
  )
}
