import React from "react";
import s from "./Servis.module.css";
const Servis = () => {
  return (
    <div className={s.container}>
        <div className={s.title}>
      <div className={s.first}>
        <h1> 1. Гарантия на продукцию</h1>
        <p>
          Все наши товары поставляются с гарантией качества. Мы стремимся
          обеспечить полную удовлетворенность клиентов, и в случае возникновения
          каких-либо проблем с нашей продукцией, мы готовы предложить решение.
          Если вы обнаружите дефект или несоответствие, просто свяжитесь с нашей
          службой поддержки, и мы займемся вашим вопросом незамедлительно.
        </p>
      </div>
      <div className={s.second}>
        <h1>2. Квалифицированный сервисный центр</h1>
        <p>
          Наш квалифицированный сервисный центр обеспечивает полное обслуживание
          и ремонт нашей продукции. Независимо от того, требуется ли вам
          регулярное техническое обслуживание, замена деталей или постановка
          диагностики, наши опытные техники готовы помочь вам. Мы оснастили наш
          сервисный центр самым современным оборудованием и используем только
          оригинальные запчасти, чтобы обеспечить надежность и долговечность
          ваших устройств.
        </p>
      </div>
      <div className={s.three}>
        <h1>3. Быстрый и удобный процесс обслуживания</h1>
        <p>
          Мы ценим ваше время и делаем все возможное, чтобы сделать процесс
          обслуживания максимально быстрым и удобным для вас. Наша команда
          постарается ответить на ваши вопросы и помочь вам в кратчайшие сроки.
          Мы также предлагаем различные варианты обратной связи, включая
          онлайн-чат, электронную почту и телефон, чтобы вы могли связаться с
          нами удобным для вас способом.
        </p>
      </div>
      <div className={s.four}>
        <h1>4. Постоянная поддержка клиентов</h1>
        <p>
          Мы гордимся нашей преданностью клиентам и всегда стремимся
          предоставить высококлассное обслуживание. Наша команда поддержки
          готова помочь вам с любыми вопросами или проблемами, с которыми вы
          сталкиваетесь. Мы ценим ваше мнение и всегда открыты к обратной связи.
          Ваше удовлетворение - наш приоритет. Мы заботимся о каждом клиенте и
          гарантируем, что вы получите высококачественные продукты и отличное
          обслуживание. Если у вас есть вопросы, свяжитесь с нами, и наша
          дружелюбная команда с радостью вам поможет
        </p>
      </div>
      </div>
    </div>
  );
};

export default Servis;