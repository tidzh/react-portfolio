import React from "react";
import style from "./WidgetPrices.module.scss";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TimerIcon from "@material-ui/icons/Timer";

const WidgetPrices = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} md={3}>
        <Box p={2} className={style.item}>
          <div className={style.title}>Сайт-визитка</div>
          <div className={style.price}>3 950 ₽</div>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={style.text}
          >
            Одностраничный сайт со статичной структурой, для размещения основной
            информации о компании
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
          >
            <TimerIcon fontSize="small" />
            <Box ml={0.5}>Запуск 1-2 дня</Box>
          </Box>
          <ul className={style.list}>
            <li>Адаптивная верстка (5 блоков)</li>
            <li>Доменное имя в зоне .ru/ .рф/ и др.</li>
            <li>Хостинг 1 год в подарок</li>
            <li>Техническая поддержка по тел.и e-mail 7 дн./нед</li>
            <li>CMS система управления сайтом</li>
            <li>Готовые дизайны</li>
            <li>Регистрация в поисковых системах</li>
            <li>Установка счетчика посещаемости</li>
            <li>
              Наполнение сайта (информацией по материалам Заказчика) в подарок
            </li>
            <li>Корпоративная почта ваше-имя@имя-сайта.ru</li>
          </ul>
        </Box>
      </Grid>
      <Grid item sm={6} md={3}>
        <Box p={2} className={style.item}>
          <div className={style.title}>Лендинг пейдж</div>
          <div className={style.price}>5 950 ₽</div>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={style.text}
          >
            Рекламный инструмент для запуска промо акций отдельного товара или
            услуги
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
          >
            <TimerIcon fontSize="small" />
            <Box ml={0.5}>Запуск 3-5 дня</Box>
          </Box>
          <ul className={style.list}>
            <li>Адаптивный 1-страничный сайт (20 блоков)</li>
            <li>Доменное имя в зоне .ru/ .рф/ и др.</li>
            <li>Хостинг 1 год в подарок</li>
            <li>Техническая поддержка по тел.и e-mail 7 дн./нед</li>
            <li>CMS система управления сайтом</li>
            <li>Готовые дизайны</li>
            <li>Регистрация в поисковых системах</li>
            <li>Установка счетчика посещаемости</li>
            <li>
              Наполнение сайта (информацией по материалам Заказчика) в подарок
            </li>
            <li>Корпоративная почта ваше-имя@имя-сайта.ru</li>
            <li>Резервное копирование данных</li>
          </ul>
        </Box>
      </Grid>
      <Grid item sm={6} md={3}>
        <Box p={2} className={style.item}>
          <div className={style.title}>Интернет-магазин</div>
          <div className={style.price}> 9 950 ₽</div>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={style.text}
          >
            Полнофункциональный торговый сайт с каталогом товаров и корзиной для
            онлайн-продаж товаров
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
          >
            <TimerIcon fontSize="small" />
            <Box ml={0.5}>Запуск 14-30 дней</Box>
          </Box>
          <ul className={style.list}>
            <li>Адаптивная верстка (5 блоков)</li>
            <li>Доменное имя в зоне .ru/ .рф/ и др.</li>
            <li>Хостинг 1 год в подарок</li>
            <li>Техническая поддержка по тел.и e-mail 7 дн./нед</li>
            <li>CMS система управления сайтом</li>
            <li>Готовые дизайны</li>
            <li>Регистрация в поисковых системах</li>
            <li>Установка счетчика посещаемости</li>
            <li>
              Наполнение сайта (информацией по материалам Заказчика) в подарок
            </li>
            <li>Корпоративная почта ваше-имя@имя-сайта.ru</li>
            <li> Резервное копирование данных</li>
          </ul>
        </Box>
      </Grid>
      <Grid item sm={6} md={3}>
        <Box p={2} className={style.item}>
          <div className={style.title}>SPA приложение</div>
          <div className={style.price}> 80 000 ₽</div>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className={style.text}
          >
            SPA — это новый формат ресурсов. Быстрая и плавная загрузка
            полномасштабных приложений на одной странице.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
          >
            <TimerIcon fontSize="small" />
            <Box ml={0.5}>Запуск 2-3 месяца</Box>
          </Box>
          <ul className={style.list}>
            <li>Адаптивная верстка (5 блоков)</li>
            <li>Доменное имя в зоне .ru/ .рф/ и др.</li>
            <li>Хостинг 1 год в подарок</li>
            <li>Техническая поддержка по тел.и e-mail 7 дн./нед</li>
            <li>CMS система управления сайтом</li>
            <li>Готовые дизайны</li>
            <li>Регистрация в поисковых системах</li>
            <li>Установка счетчика посещаемости</li>
            <li>
              Наполнение сайта (информацией по материалам Заказчика) в подарок
            </li>
            <li>Корпоративная почта ваше-имя@имя-сайта.ru</li>
            <li> Обучающие вебинары по сайту</li>
          </ul>
        </Box>
      </Grid>
    </Grid>
  );
};
export default WidgetPrices;
