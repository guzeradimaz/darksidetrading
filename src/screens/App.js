import React, { useState } from 'react';
import './index.css';
import Faq from 'react-faq-component';
import './media.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const stylesModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const App = () => {
  const baseUrl = 'https://api.telegram.org/bot6810930652:AAE-Ib0Fa_lOVPwKQi71mOkYdk3g_MNs41g/';
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const sendMessage = async (message) => {
    const url = `${baseUrl}sendMessage?chat_id=-4114922867&text=${message}`
    const res = await fetch(url)
    if (res.ok) {
      handleOpen2()
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length === 0 || inputValue2.length === 0) {
      handleOpen()
      return null;
    }
    const confirmString = `Имя: ${inputValue}, Телеграм: ${inputValue2}`
    sendMessage(confirmString)
  }
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylesModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Проверьте поля ввода!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Они не должны быть пустыми!
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylesModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Спасибо!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Сообщение успешно отправлено!<br />В ближайшее время с вами свяжутся!
          </Typography>
        </Box>
      </Modal>
      <div className='mainScreen'>
        <div className='mainScreenWrapper'>
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
          <p>Помни что Трейдинг это Риск<br />Риск Вознаграждается</p>
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
        <form onSubmit={onSubmit}>
          <h1 style={{ color: '#000' }}>Полный курс обучения</h1>
          <div className='form'>
            <div>
              <input value={inputValue} onChange={handleChange} placeholder='Имя' />
              <input value={inputValue2} onChange={handleChange2} placeholder='Теlegram' />
              <button type='submit'>Забронировать место</button>
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
        content: `Трейдинг - это не только вызов, но и возможность для самосовершенствования и финансового роста. Это искусство, где каждый день приносит новые уроки и возможности. На этом пути мы сталкиваемся с вызовами и успехами, учимся принимать риски и принимать решения в условиях неопределенности. Но каждый шаг в этом направлении приносит нам опыт и позволяет нам развиваться как трейдерам и как личностям. Давайте продолжим двигаться вперед, стремясь к новым вершинам и познавая самих себя в процессе`,
      },
      {
        title: 'Когда я начну зарабатывать?',
        content:'Начать зарабатывать в трейдинге зависит от многих факторов, включая ваш уровень знаний, опыт, стратегия торговли, терпение и умение управлять рисками. Некоторые трейдеры начинают зарабатывать уже через несколько месяцев, в то время как для других это может занять годы. Важно продолжать обучаться, тестировать свои стратегии и оставаться терпеливым. Со временем, при наличии усердия и умения, вы начнете видеть результаты своей работы.'
      },
      {
        title: 'Сколько я буду зарабатывать?',
        content: 'Как трейдер, ваш доход может значительно варьироваться в зависимости от множества факторов, таких как ваш уровень опыта, размер вашего капитала, выбранная стратегия торговли, рыночные условия и ваше умение управлять рисками.Некоторые трейдеры могут зарабатывать неплохие суммы, в то время как другие могут сталкиваться с убытками.Важно иметь реалистичные ожидания и стремиться к постепенному увеличению своего дохода с течением времени при постоянном развитии своих навыков и знаний.'
      },
      {
        title: 'Как идёт Обучение?',
        content: 'Обучение проходит индивидуально. Материал предоставляется.Только качественный материал послужит успехом развития, начинающего трейдера. Обучение проходит через сервер Discord. 2 - 3 часа в день.'
      },
      {
        title: 'После истечении Обучения, доступ к материалам открыт?',
        content: 'Абсолютно, Да. Доступ к материалам даётся безлимитно.'
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
