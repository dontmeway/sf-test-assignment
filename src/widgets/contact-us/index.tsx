import { Button, Checkbox, Container, Input, Textarea } from '@/shared/ui'

export const ContactUsWidget = () => {
  return (
    <section id="contacts" className="!mb-[240px]">
      <div className="w-full h-[470px] relative bg-contactUs bg-cover bg-center bg-no-repeat flex items-center">
        <Container>
          <div className="grid grid-cols-2 gap-x-4">
            <div className="h-full flex items-center">
              <div className="flex flex-col max-w-md w-full space-y-5">
                <h5 className="text-xl leading-5 font-medium text-white">
                  Не стесняйтесь связаться с нами{' '}
                </h5>
                <h3 className="text-[36px] leading-[46px] text-brand-secondary font-bold">
                  Остались вопросы?
                </h3>
                <p className="text-white text-base">
                  Не нашли интересующую вас информацию, остались вопросы?
                  Напишите нам и наши специалисты подробно ответят на все ваши
                  вопросы.
                </p>
                <Button variant="outline" className="w-max">
                  Связаться в телеграм
                </Button>
              </div>
            </div>
            <div className="h-full relative">
              <Form />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

const Form = () => {
  return (
    <form
      className="w-full rounded-[20px] bg-white p-[30px] flex flex-col space-y-[50px] absolute -top-[70px] shadow-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-2 gap-x-[30px] gap-y-[50px]">
        <Input.Float labelText="Имя" />
        <Input.Float labelText="Фамилия" />
        <Input.Float labelText="Телефон" />
        <Input.Float labelText="Почта" />
      </div>

      <div className="flex flex-col space-y-[30px]">
        <h6>Какой вопрос Вас интересует?</h6>
        <div className="grid grid-cols-2 gap-5">
          <Checkbox label="Лендинг" />
          <Checkbox label="Корпоративный сайт" />
          <Checkbox label="Интернет-магазин" />
          <Checkbox label="Разработка" />
          <Checkbox label="Сайт-визитка" />
          <Checkbox label="Маркетинг" />
        </div>
      </div>

      <Textarea label="Сообщение..." />

      <Button className="w-max mx-auto">Отправит сообщение</Button>
    </form>
  )
}
