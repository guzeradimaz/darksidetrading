import React, { useState } from 'react';
import './index.css';
import Faq from 'react-faq-component';
import './media.css'

export const App = () => {
  const modules = [
    {
      id: '12414sdgsdg',
      num: '01',
      title: 'market structure',
      hoverTitle:
        'тренд, работа с минимумами и максимумами, свинг и минорная структура, перелом и подтверждение структуры, точка синхронизации, моментум, strong bms/fake bms',
    },
    {
      id: '12414dsgfdhgnhdhbfssdgsdg',
      num: '02',
      title: 'liquidity',
      hoverTitle:
        'что такое ликвидность? трендовая ликвидность, структурная ликвидность, internal/external liquidity, health/unhealth structural move, компрессия, swing failure pattern',
    },
    {
      id: '12414sd23t24h24gsdg',
      num: '03',
      title: 'discount',
      hoverTitle:
        'discount/premium zones, fibo + market structure, optimal trade entry',
    },
    {
      id: '12414s433fddgsdg',
      num: '04',
      title: 'GAP',
      hoverTitle:
        'баланс и имбаланс, ценовая нехватка, как определять и торговать?',
    },
    {
      id: '12414ssdvnjsf0igsdg',
      num: '05',
      title: 'point of interest',
      hoverTitle:
        'зоны спроса и предложения, валидация, return to origin, продать, чтобы купить и купить, чтобы продать, спонсированная свеча, mitigation and cause',
    },
    {
      id: '12414ssdvsv0di0svd-vdgsdg',
      num: '06',
      title: 'graphic analysys',
      hoverTitle:
        'определение зоны интереса, правила работы с зоной интереса, валидации, определение зоны интереса против тренда, рисковый и подтверждающий вход в сделку',
    },
    {
      id: '12414s-asd=-32=dgsdg',
      num: '07',
      title: 'HTF/LTF',
      hoverTitle:
        'top-down analysis, Как должен проходить анализ графика, return to swing origin',
    },
    {
      id: '12414s==3214rdgsdg',
      num: '08',
      title: 'RANGE',
      hoverTitle:
        'range, amd, 3dp, ICT classic day models, Market Maker Sell/Buy Model, Причины пересвета',
    },
    {
      id: '12414sd34t6--=vdgsdg',
      num: '09',
      title: 'risk managment',
      hoverTitle:
        'управление капиталом, работа со сделкой, Breakeven, частичное фиксирование сделки',
    },
    {
      id: '12414sd1-230t213gngsdg',
      num: '10',
      title: 'psycology',
      hoverTitle:
        'правила, опыт, дисциплина, consistency rules, бэктест, план работы после обучения',
    },
    {
      id: '124141-30tjash9gvasdgsdg',
      num: '11',
      title: 'market structure',
      hoverTitle: 'анализ проектов, сервисы для анализа. Биткоин Доминация',
    },
    {
      id: '12414a-d0gjahd-g24sdgsdg',
      num: '12',
      title: 'Swing trading',
      hoverTitle:
        'как работать с таймфреймами, внутренний стиль торговли, свинг трейдинг, свинг трейдинг со скальп входом, свинг трейдинг',
    },
    {
      id: '12414sf=a-dsvhad9vdgsdg',
      num: '13',
      title: 'trading patterns',
      hoverTitle:
        'Узнаете из чего состоят торговые паттерны, познакомимся с самыми популярными паттернами',
    },
    {
      id: '1241-s9vdhb2i44sdgsdg',
      num: '14',
      title: 'sessions',
      hoverTitle:
        'Азия, Лондон, Америка, схемы и сетапы, временная экспирация контекста',
    },
    {
      id: '12414sdg-s9dhv--b9sdsdg',
      num: '15',
      title: 'wyckoff',
      hoverTitle: 'Как торговать по Вайкоффу',
    },
    {
      id: '12414sdv-=sd9vs-dgsdg',
      num: '16',
      title: 'forex',
      hoverTitle:
        'обзор binance, обзор icmarket, sftmo, MFF, Проп трейдинг: Как получить капитал до 300,000$',
    },
    {
      id: '12414sv-sd9v-9sdvdgsdg',
      num: '17',
      title: 'trading plan',
      hoverTitle:
        'Трейдинг план, Торговая стратегия, Журнал сделок, Журнал сделок',
    },
    {
      id: '12414sv=-02ef2-f-2dgsdg',
      num: '18',
      title: 'setups',
      hoverTitle:
        'Из чего состоит Setup? Сетап в торговой системе, как создать свой сетап? Сетапы менторов, высоковероятные сетапы, высоковероятные сетапы',
    },
  ];
  return (
    <div className='root'>
      <div className='mainScreen'>
        <div className='topBar'>
          <div className='logo' />
          <nav>
            <li><a href='#modules'>Модули</a></li>
            <li><a href='#faq'>FAQ</a></li>
          </nav>
        </div>
        <div className='brickWords'>
          <p className='firstWord'>В</p>
          <div>
            <p className='secondWord'>ДЕТАЛИ</p>
            <p className='secondWord'>ПРОСТОТЕ</p>
          </div>
        </div>
        <div className='buttonBuy'>
          <a href='#anchor'><button>Забронировать место</button></a>
          <div className='buttonBuyCol'>
            <p>
              Помни, Трейдинг - это Трудный путь. Прогрессируй, эволюционируй
            </p>
            <p>
              В КАЖДОЙ СДЕЛКЕ - УРОК,
              <br />В КАЖДОМ ГРАФИКЕ - ФИЛОСОФИЯ РЫНКА И ПУЛЬС МИРА
            </p>
          </div>
        </div>
      </div>
      <div className='secondBlock'>
        <div className='textInner'>
          <div className='textInnerMainInfo'>
            <h1>Мы рассмотрим от и до:</h1>
            <ul>
              <li>Концепция по Smart Money</li>
              <li>Технический Анализ</li>
              <li>Price Action</li>
              <li>Тренд</li>
              <li>Фигуры технического анализа</li>
              <li>Свечной анализ</li>
              <li>FOREX</li>
              <li>Таймфреймы</li>
              <li>Ликвидность</li>
              <li>Ошибки трейдеров</li>
              <li>Психологию</li>
            </ul>
          </div>
          <div className='textInnerAddInfo'>
            <p>
              ЗА ДВА МЕСЯЦА НАУЧИМ ВИДЕТЬ НА ГРАФИКЕ ВОЗМОЖНОСТИ, ПОКА ДРУГИЕ
              ЧТО-ТО НА НЕМ РИСУЮТ.
            </p>
          </div>
        </div>
        <div className='textInnerLastInfo'>
          <p>Помни, что трейдинг - это самые трудные легкие деньги!</p>
        </div>
      </div>
      <div className='thirdBlock' id='modules'>
        <div className='blockWrapper'>
          <div className='programmBlock'>
            <p>
              ПРОГРАММА
              <br />
              18 МОДУЛЕЙ
            </p>
          </div>
          <div className='listBlock'>
            <p>
              ПРОГРАММА СОЗДАНА КАК ДЛЯ НАЧИНАЮЩИХ,
              <br />
              ТАК И ТРЕЙДЕРОВ С ЛЮБЫМ ОПЫТОМ ТОРГОВЛИ. <br />
              <br />
              СТУДЕНТЫ СТРУКТУРИРОВАНО ПОЛУЧАЮТ ТЕОРЕТИЧЕСКИЕ И ПРАКТИЧЕСКИЕ
              НАВЫКИ, ОВЛАДЕВАЮТ НЕОБХОДИМЫМИ ИНСТРУМЕНТАМИ ТОРГОВЛИ И
              ВОСПИТЫВАЮТ В СЕБЕ ДИСЦИПЛИНУ, КОТОРАЯ КРАЙНЕ НЕОБХОДИМА НА
              ЖЕСТОКОМ РЫНКЕ, КОТОРЫЙ НЕ ПРОЩАЕТ ОШИБОК.
            </p>
            <p>
              КУРС ПОСТОЯННО ОБНОВЛЯЕТСЯ И ТЕБЕ ВСЕГДА БУДЕТ ДОСТУПНА АКТУАЛЬНАЯ
              ВЕРСИЯ. РЫНОК МЕНЯЕТСЯ, МЕНЯЕШЬСЯ И ТЫ.
            </p>
          </div>
        </div>
        <div className='listModules'>
          <div className='modulesWrapper'>
            {modules.map((i) => (
              <ModuleItem item={i} key={i.id} />
            ))}
          </div>
        </div>
      </div>
      <div className='fouthBlock'>
        <h1>в трейдинге нет такого понятия как гарантия</h1>
        <p>все зависит только от тебя</p>
      </div>
      <div className='fifthBlock'>
        <div className='fifthBlockWrapper'>
          <h1>
            После
            <br />
            обучения ты{' '}
          </h1>
          <div className='fifthBlockWrapperText'>
            <ul>
              <li> - ПОСТРОИШЬ СВОЮ СОБСТВЕННУЮ ТОРГОВУЮ СТРАТЕГИЮ</li>
              <li>
                {' '}
                - БУДЕШЬ ИМЕТЬ ПОЖИЗНЕННЫЙ ДОСТУП К ОБНОВЛЕНИЮ МАТЕРИАЛОВ
              </li>
              <li> - ВСЕГДА НА СВЯЗИ С МЕНТОРАМИ, ДАЖЕ ПОСЛЕ ОБУЧЕНИЯ</li>
              <li> - ПРОЙДЕШЬ ЧЕЛЛЕНДЖ НА СВОЙ ПЕРВЫЙ PROP TRADING ДЕПОЗИТ</li>
              <li> - Изучишь популярные стратегии</li>
              <li> - Получишь персональную помощь лично от меня</li>
              <li> - 24/7 помощь в решении вопросов</li>
            </ul>
            <a href='#anchor'><button>Забронировать место</button></a>
          </div>
        </div>
      </div>
      <div className='sixBlock'>
        <div className='sixBlockWrapper'>
          <div className='moduleList'>
            <div className='moduleItem'>
              <h1>2</h1>
              <p>МЕСЯЦА ПЕРЕОСМЫСЛЕНИЯ РЫНКОВ</p>
            </div>
            <div className='moduleItem'>
              <h1>18</h1>
              <p>ТЕОРЕТИЧЕСКИХ И ПРАКТИЧЕСКИХ МОДУЛЕЙ</p>
            </div>
            <div className='moduleItem'>
              <h1>24/7</h1>
              <p>Поддержка</p>
            </div>
            <div className='moduleItem'>
              <h1>5</h1>
              <p>мест на один поток</p>
            </div>
            <div className='moduleItem'>
              <h1>1 на 1</h1>
              <p>
                ЛИЧНАЯ ПОДДЕРЖКА НАСТАВНИКА НА ВСЕХ ЭТАПАХ ОБУЧЕНИЯ
              </p>
            </div>
            <div className='moduleItem'>
              <h1>60</h1>
              <p>дней доступа</p>
            </div>
            <div className='moduleItem'>
              <h1>100%</h1>
              <p>фокуса на тебе</p>
            </div>
          </div>
          <h1 className='titlesix'>
            Обучение
            <br />в цифрах
          </h1>
        </div>
      </div>
      <div className='sevenBlock' id='anchor'>
        <div>
          <h1>
            Формат
            <br />
            обучения
          </h1>
          <h1>699$</h1>
        </div>
        <form>
          <h1 style={{ color: '#000' }}>Полный курс обучения</h1>
          <div className='form'>
            <div>
              <input placeholder='Имя' />
              <input placeholder='Теlegram' />
              <button>Забронировать место</button>
            </div>
            <ul>
              <li> - Теория</li>
              <li> - Практика</li>
              <li> - Закрепление</li>
            </ul>
          </div>
        </form>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

const ModuleItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className='Module'
      style={{ background: isHovered ? '#fff' : '#ffc11e' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? (
        <p style={{ fontWeight: 'bold', fontSize: 24 }}>{item.title}</p>
      ) : (
        <p>{item.hoverTitle}</p>
      )}
      <h1>{item.num}</h1>
    </div>
  );
};

const FAQ = () => {
  const data = {
    title: `FAQ ${'\n'}(Популярные вопросы)`,
    rows: [
      {
        title: 'Тяжело ли в Трейдинге?',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit.`,
      },
      {
        title: 'Когда я начну зарабатывать?',
        content:
          'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
      },
      {
        title: 'Сколько я буду зарабатывать?',
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: 'Как идёт Обучение?',
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.`,
      },
      {
        title: 'После истечении Обучения, доступ к материалам открыт?',
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.`,
      },
    ],
  };

  const styles = {
    bgColor: '#000',
    titleTextColor: '#ffc11e',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    arrowColor: '#ffc11e',
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: false,
  };

  return (
    <div className='faq' id='faq'>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className='footerInfo'>
        <ul>
          <li>
            <a href='https://youtube.com/@dark.trading?si=VliFBjTK0vuB-ZHo'>
              YOUTUBE
            </a>
          </li>
          <li>
            <a href='https://vm.tiktok.com/ZM6cFCLxC/'>TIKTOK</a>
          </li>
          <li>
            <a href='https://www.instagram.com/p/C3FjEe6MNn9/?igsh=MzRlODBiNWFlZA=='>
              instagram
            </a>
          </li>
        </ul>
        <ul>
          <li className='maestro'></li>
          <li className='applepay'></li>
          <li className='visa'></li>
          <li className='crypto'></li>
        </ul>
      </div>
      <p>Авторские права защищены (с) Darkside trading</p>
    </footer>
  );
};
