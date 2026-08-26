import { useMemo, useState } from 'react';
import { Activity, Bell, Building2, Check, ChevronRight, CircleDollarSign, Globe2, HeartPulse, Home, Layers3, Mic2, Radio, ShieldAlert, Sparkles, Users2, Wifi } from 'lucide-react';

type Lang = 'ru' | 'ro' | 'en';

type Copy = {
  nav: string[];
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroLine: string;
  heroText: string;
  ctaBrief: string;
  ctaScenario: string;
  deviceCard: string;
  phoneCard: string;
  heroChips: string[];
  problemLabel: string;
  problemTitle: string;
  problemText: string;
  painCards: { title: string; text: string }[];
  solutionLabel: string;
  solutionTitle: string;
  solutionText: string;
  flow: string[];
  scenariosTitle: string;
  scenarios: { title: string; text: string }[];
  productLabel: string;
  productTitle: string;
  productText: string;
  mvpTitle: string;
  expansionTitle: string;
  mvpItems: string[];
  expansionItems: string[];
  diffLabel: string;
  diffTitle: string;
  diffText: string;
  tableHead: string[];
  tableRows: string[][];
  marketLabel: string;
  marketTitle: string;
  marketText: string;
  marketCards: { value: string; label: string }[];
  marketSteps: { title: string; text: string }[];
  businessLabel: string;
  businessTitle: string;
  businessText: string;
  models: { title: string; text: string }[];
  pilotLabel: string;
  pilotTitle: string;
  pilotText: string;
  pilotFacts: string[];
  roadmapLabel: string;
  roadmapTitle: string;
  roadmap: { title: string; text: string }[];
  lookingLabel: string;
  lookingTitle: string;
  lookingText: string;
  lookingItems: string[];
  contactCta: string;
  footer: string;
};

const copies: Record<Lang, Copy> = {
  ru: {
    nav: ['Problem', 'Solution', 'Product', 'Market', 'Business Model', 'Pilot', 'Contact'],
    badge: 'Investor landing · Caretech / Healthtech',
    heroTitle: 'VoiceBridge / Lunara Care',
    heroSubtitle: 'Платформа голосового присутствия и безопасности для пожилых людей и их семей.',
    heroLine: 'Одно касание устройства → уведомление семье → живой голосовой канал.',
    heroText: 'Мы убираем интерфейс между пожилым человеком и его близкими: без смартфона, без экрана, без приложений на стороне папы или мамы.',
    ctaBrief: 'Запросить investor brief',
    ctaScenario: 'Посмотреть пилотный сценарий',
    deviceCard: 'Папа хочет поговорить',
    phoneCard: 'Открыть Live Line',
    heroChips: ['ESP32-S3 prototype', 'Mobile PWA', 'Moldova + Romania pilot'],
    problemLabel: 'Problem',
    problemTitle: 'Проблема не в голосе. Проблема в интерфейсе.',
    problemText: 'Многие пожилые люди физически способны говорить, но не могут легко инициировать связь через смартфон. Нужно найти телефон, разблокировать экран, открыть приложение, найти контакт, начать звонок и дождаться ответа. Для семьи это превращается в постоянную тревогу: всё ли в порядке, почему не отвечает, когда был последний контакт.',
    painCards: [
      { title: 'Пожилой человек', text: 'Одиночество, страх технологий и слишком много действий для простого контакта.' },
      { title: 'Взрослые дети', text: 'Тревога, дистанция, отсутствие быстрого способа понять, что с родителем всё нормально.' },
      { title: 'Care services', text: 'Растущая нагрузка на персонал и позднее обнаружение тревожных ситуаций.' },
    ],
    solutionLabel: 'Solution',
    solutionTitle: 'VoiceBridge убирает интерфейс полностью.',
    solutionText: 'Один понятный физический жест запускает человеческий контакт. Устройство отвечает светом, звуком и простым голосовым подтверждением.',
    flow: ['Пожилой человек касается устройства или стучит по корпусу.', 'Родственник получает push “Папа хочет поговорить”.', 'Родственник открывает Live Line или отвечает голосом.', 'Устройство подтверждает действие светом, звуком и голосом.'],
    scenariosTitle: 'Ключевые сценарии MVP',
    scenarios: [
      { title: 'Live Line', text: 'Двусторонний живой голосовой канал между родственником и устройством.' },
      { title: 'Wants to talk', text: 'Короткий жест на устройстве отправляет семье мягкий запрос связи.' },
      { title: 'SOS / Help request', text: 'Удержание или тревожный сценарий отправляет семье срочный сигнал.' },
    ],
    productLabel: 'Product / Platform',
    productTitle: 'От простого голосового моста к платформе заботы.',
    productText: 'MVP остаётся простым: устройство, приложение и голосовой канал. Расширение строится вокруг safety bracelet, датчиков, care dashboard и Lunara AI.',
    mvpTitle: 'MVP now',
    expansionTitle: 'Platform expansion',
    mvpItems: ['Домашнее голосовое устройство', 'Мобильное PWA-приложение родственника', 'Cloud / relay platform', 'Live Line', 'Wants to talk', 'SOS'],
    expansionItems: ['Носимый safety bracelet', 'Датчики дома', 'Care dashboard', 'Lunara AI', 'Personal Memory Base'],
    diffLabel: 'Differentiation',
    diffTitle: 'Почему это не Alexa и не тревожная кнопка.',
    diffText: 'Smart speakers соединяют человека с сервисами. VoiceBridge соединяет человека с человеком. Тревожная кнопка нужна в кризисе. VoiceBridge используется каждый день как связь, присутствие и ранний сигнал.',
    tableHead: ['Критерий', 'Alexa / Google / Алиса', 'VoiceBridge'],
    tableRows: [
      ['Главная задача', 'Сервисы, информация, умный дом', 'Живой голос близкого человека'],
      ['Действие пожилого', 'Нужно помнить команду', 'Одно действие или мягкий жест'],
      ['Сторона семьи', 'Часто нужен аккаунт или устройство', 'Приложение у родственника'],
      ['Сценарий связи', 'Звонок или команда', 'Push “папа хочет поговорить”'],
      ['B2B / OEM', 'Зависимость от экосистемы', 'Модуль для интеграции в устройства'],
    ],
    marketLabel: 'Market',
    marketTitle: 'Рынок ухода стареет быстрее, чем растёт персонал.',
    marketText: 'Начальный клин: Молдова и Румыния. Следующий шаг: Восточная Европа. Долгосрочно: global elderly care tech.',
    marketCards: [
      { value: '3,4 млн', label: 'людей 65+ в Румынии' },
      { value: '1,2 млн', label: 'румын за рубежом' },
      { value: '$22 млрд', label: 'Global Elderly Care Tech 2024' },
      { value: '+8,5%', label: 'годовой рост рынка' },
    ],
    marketSteps: [
      { title: 'Initial wedge', text: 'Молдова + Румыния' },
      { title: 'Next step', text: 'Восточная Европа: Молдова, Украина, Польша' },
      { title: 'Long-term', text: 'Global elderly care tech' },
    ],
    businessLabel: 'Business Model',
    businessTitle: 'Три вектора монетизации.',
    businessText: 'Модель строится вокруг устройства, подписки и лицензирования модуля производителям.',
    models: [
      { title: 'B2B OEM', text: 'Лицензия модуля производителям устройств. 1–2 месяца integration вместо 12–18 месяцев разработки.' },
      { title: 'B2B2C', text: 'Nursing home networks и home care operators. Подписка €20–25 в месяц на устройство.' },
      { title: 'B2C diaspora', text: 'Взрослый ребёнок за рубежом покупает устройство родителям домой.' },
    ],
    pilotLabel: 'Stage & Pilot',
    pilotTitle: 'Рабочий прототип и подготовка к пилоту.',
    pilotText: 'Мы не заявляем выручку или закрытый раунд. Сейчас фокус на рабочем прототипе, первой партии устройств, пилотах и партнёрах в Молдове и Румынии.',
    pilotFacts: ['ESP32-S3', 'ES8311 codec', 'Real-time bidirectional voice', 'Mobile PWA application', 'Первый пилот с реальными семьями', '4–5 care / home assistance партнёров для feedback'],
    roadmapLabel: 'Roadmap',
    roadmapTitle: '6 месяцев до пилота.',
    roadmap: [
      { title: 'Month 1', text: 'VoiceBridge Bridge MVP, базовая голосовая связь и архитектура.' },
      { title: 'Month 2', text: 'Локальная логика устройства и стабильное подключение.' },
      { title: 'Month 3', text: 'Lunara + Personal Memory Base.' },
      { title: 'Month 4', text: 'AI agents: Care Monitoring, Family Coordinator, Technical Guardian.' },
      { title: 'Month 5', text: 'Sensors for smart care environment.' },
      { title: 'Month 6', text: 'First commercial pilot with care homes / home care services.' },
    ],
    lookingLabel: 'Contact',
    lookingTitle: 'Что мы ищем.',
    lookingText: 'Мы ищем seed / strategic angel / hardware-healthtech partner для первой партии устройств, деплоя платформы и пилотов в Молдове и Румынии.',
    lookingItems: ['Home care operators', 'Care homes', 'Elderly support organizations', 'Device manufacturers for VoiceBridge Inside'],
    contactCta: 'Связаться с фаундером',
    footer: 'Communication, presence and safety for elderly care.',
  },
  ro: {
    nav: ['Problemă', 'Soluție', 'Produs', 'Piață', 'Model', 'Pilot', 'Contact'],
    badge: 'Investor landing · Caretech / Healthtech',
    heroTitle: 'VoiceBridge / Lunara Care',
    heroSubtitle: 'Platformă de prezență vocală și siguranță pentru persoanele vârstnice și familiile lor.',
    heroLine: 'O singură atingere → notificare către familie → canal vocal live.',
    heroText: 'Eliminăm interfața dintre persoana vârstnică și cei apropiați: fără smartphone, fără ecran, fără aplicație pentru mamă sau tată.',
    ctaBrief: 'Solicită investor brief',
    ctaScenario: 'Vezi scenariul pilot',
    deviceCard: 'Tata vrea să vorbească',
    phoneCard: 'Deschide Live Line',
    heroChips: ['ESP32-S3 prototype', 'Mobile PWA', 'Pilot Moldova + România'],
    problemLabel: 'Problemă',
    problemTitle: 'Problema nu este vocea. Problema este interfața.',
    problemText: 'Multe persoane vârstnice pot vorbi, dar nu pot iniția ușor contactul prin smartphone. Trebuie să găsească telefonul, să deblocheze ecranul, să deschidă aplicația, să găsească un contact, să pornească apelul și să aștepte răspunsul. Pentru familie, asta devine o anxietate zilnică: este totul bine, de ce nu răspunde, când a fost ultimul contact.',
    painCards: [
      { title: 'Persoana vârstnică', text: 'Singurătate, teamă de tehnologie și prea mulți pași pentru un contact simplu.' },
      { title: 'Copiii adulți', text: 'Anxietate, distanță și lipsa unui mod rapid de a verifica dacă părintele este bine.' },
      { title: 'Servicii de îngrijire', text: 'Presiune tot mai mare pe personal și detectare prea târzie a situațiilor de risc.' },
    ],
    solutionLabel: 'Soluție',
    solutionTitle: 'VoiceBridge elimină interfața aproape complet.',
    solutionText: 'Un gest fizic clar pornește contactul uman. Dispozitivul răspunde prin lumină, sunet și confirmare vocală simplă.',
    flow: ['Persoana vârstnică atinge dispozitivul sau bate ușor în carcasă.', 'Familia primește push “Tata vrea să vorbească”.', 'Ruda deschide Live Line sau răspunde vocal.', 'Dispozitivul confirmă prin lumină, sunet și voce.'],
    scenariosTitle: 'Scenarii MVP',
    scenarios: [
      { title: 'Live Line', text: 'Canal vocal bidirecțional între rudă și dispozitiv.' },
      { title: 'Wants to talk', text: 'Un gest scurt trimite familiei o cerere blândă de contact.' },
      { title: 'SOS / Help request', text: 'Apăsarea lungă sau un scenariu de risc trimite familiei o alertă.' },
    ],
    productLabel: 'Produs / Platformă',
    productTitle: 'De la pod vocal simplu la platformă de îngrijire.',
    productText: 'MVP-ul rămâne simplu: dispozitiv, aplicație și canal vocal. Extinderea include bracelet de siguranță, senzori, care dashboard și Lunara AI.',
    mvpTitle: 'MVP now',
    expansionTitle: 'Platform expansion',
    mvpItems: ['Dispozitiv vocal pentru acasă', 'Aplicație PWA pentru rudă', 'Cloud / relay platform', 'Live Line', 'Wants to talk', 'SOS'],
    expansionItems: ['Safety bracelet', 'Senzori pentru casă', 'Care dashboard', 'Lunara AI', 'Personal Memory Base'],
    diffLabel: 'Diferențiere',
    diffTitle: 'De ce nu este Alexa și nu este doar un buton de panică.',
    diffText: 'Smart speakers conectează omul la servicii. VoiceBridge conectează omul la om. Butonul de panică este pentru criză. VoiceBridge poate fi folosit zilnic pentru contact, prezență și semnal timpuriu.',
    tableHead: ['Criteriu', 'Alexa / Google / Aliса', 'VoiceBridge'],
    tableRows: [
      ['Misiune', 'Servicii, informații, smart home', 'Vocea vie a unei persoane apropiate'],
      ['Acțiunea seniorului', 'Trebuie să țină minte comanda', 'Un gest simplu'],
      ['Partea familiei', 'Adesea cont sau dispozitiv dedicat', 'Aplicație pe telefonul rudei'],
      ['Scenariu de contact', 'Apel sau comandă vocală', 'Push “tata vrea să vorbească”'],
      ['B2B / OEM', 'Dependență de ecosistem', 'Modul integrabil în dispozitive'],
    ],
    marketLabel: 'Piață',
    marketTitle: 'Piața de îngrijire îmbătrânește mai repede decât crește personalul.',
    marketText: 'Primul pas: Moldova și România. Următorul pas: Europa de Est. Pe termen lung: global elderly care tech.',
    marketCards: [
      { value: '3,4 mln', label: 'persoane 65+ în România' },
      { value: '1,2 mln', label: 'români în diaspora' },
      { value: '$22 mld', label: 'Global Elderly Care Tech 2024' },
      { value: '+8,5%', label: 'creștere anuală' },
    ],
    marketSteps: [
      { title: 'Initial wedge', text: 'Moldova + România' },
      { title: 'Next step', text: 'Europa de Est: Moldova, Ucraina, Polonia' },
      { title: 'Long-term', text: 'Global elderly care tech' },
    ],
    businessLabel: 'Model de business',
    businessTitle: 'Trei direcții de monetizare.',
    businessText: 'Modelul combină hardware, abonament și licențierea modulului către producători.',
    models: [
      { title: 'B2B OEM', text: 'Licență de modul pentru producători. 1–2 luni de integrare în loc de 12–18 luni de dezvoltare.' },
      { title: 'B2B2C', text: 'Rețele de aziluri și home care operators. Abonament €20–25 pe lună per dispozitiv.' },
      { title: 'B2C diaspora', text: 'Copilul adult din străinătate cumpără dispozitivul pentru părinți acasă.' },
    ],
    pilotLabel: 'Stadiu & Pilot',
    pilotTitle: 'Prototip funcțional și pregătire pentru pilot.',
    pilotText: 'Nu declarăm venituri sau rundă închisă. Focusul este pe prototip, prima serie, piloți și parteneri în Moldova și România.',
    pilotFacts: ['ESP32-S3', 'ES8311 codec', 'Real-time bidirectional voice', 'Mobile PWA application', 'Primul pilot cu familii reale', '4–5 parteneri care / home assistance pentru feedback'],
    roadmapLabel: 'Roadmap',
    roadmapTitle: '6 luni până la pilot.',
    roadmap: [
      { title: 'Month 1', text: 'VoiceBridge Bridge MVP, comunicare vocală de bază și arhitectură.' },
      { title: 'Month 2', text: 'Logică locală a dispozitivului și conectare stabilă.' },
      { title: 'Month 3', text: 'Lunara + Personal Memory Base.' },
      { title: 'Month 4', text: 'AI agents: Care Monitoring, Family Coordinator, Technical Guardian.' },
      { title: 'Month 5', text: 'Senzori pentru smart care environment.' },
      { title: 'Month 6', text: 'First commercial pilot with care homes / home care services.' },
    ],
    lookingLabel: 'Contact',
    lookingTitle: 'Ce căutăm.',
    lookingText: 'Căutăm seed / strategic angel / hardware-healthtech partner pentru prima serie de dispozitive, deployment de platformă și piloți în Moldova și România.',
    lookingItems: ['Home care operators', 'Care homes', 'Elderly support organizations', 'Device manufacturers for VoiceBridge Inside'],
    contactCta: 'Contactează fondatorul',
    footer: 'Communication, presence and safety for elderly care.',
  },
  en: {
    nav: ['Problem', 'Solution', 'Product', 'Market', 'Business Model', 'Pilot', 'Contact'],
    badge: 'Investor landing · Caretech / Healthtech',
    heroTitle: 'VoiceBridge / Lunara Care',
    heroSubtitle: 'Voice presence and safety platform for elderly people and their families.',
    heroLine: 'One device touch → family notification → live voice channel.',
    heroText: 'We remove the interface between an elderly person and their loved ones: no smartphone, no screen, no app on mom or dad’s side.',
    ctaBrief: 'Request investor brief',
    ctaScenario: 'See pilot scenario',
    deviceCard: 'Dad wants to talk',
    phoneCard: 'Open Live Line',
    heroChips: ['ESP32-S3 prototype', 'Mobile PWA', 'Moldova + Romania pilot'],
    problemLabel: 'Problem',
    problemTitle: 'The problem is not the voice. The problem is the interface.',
    problemText: 'Many elderly people are physically able to speak, but cannot easily initiate contact through a smartphone. They need to find the phone, unlock the screen, open the app, find the contact, start the call, and wait for an answer. For families, this becomes constant anxiety: is everything okay, why is there no answer, when was the last contact.',
    painCards: [
      { title: 'Elderly person', text: 'Loneliness, fear of technology, and too many steps for a simple human contact.' },
      { title: 'Adult children', text: 'Anxiety, distance, and no fast way to know that a parent is okay.' },
      { title: 'Care services', text: 'Growing staff load and late discovery of risky situations.' },
    ],
    solutionLabel: 'Solution',
    solutionTitle: 'VoiceBridge removes the interface almost completely.',
    solutionText: 'One clear physical gesture starts human contact. The device confirms through light, sound, and a simple voice response.',
    flow: ['The elderly person touches the device or taps its body.', 'The family receives a push “Dad wants to talk”.', 'The relative opens Live Line or replies by voice.', 'The device confirms through light, sound, and voice.'],
    scenariosTitle: 'MVP scenarios',
    scenarios: [
      { title: 'Live Line', text: 'Real-time bidirectional voice channel between the family app and the device.' },
      { title: 'Wants to talk', text: 'A short gesture on the device sends a soft contact request to the family.' },
      { title: 'SOS / Help request', text: 'Long press or a risk scenario sends an urgent signal to the family.' },
    ],
    productLabel: 'Product / Platform',
    productTitle: 'From a simple voice bridge to a care platform.',
    productText: 'The MVP stays simple: device, app, and voice channel. Expansion adds a safety bracelet, sensors, care dashboard, and Lunara AI.',
    mvpTitle: 'MVP now',
    expansionTitle: 'Platform expansion',
    mvpItems: ['Home voice device', 'Mobile PWA for the relative', 'Cloud / relay platform', 'Live Line', 'Wants to talk', 'SOS'],
    expansionItems: ['Wearable safety bracelet', 'Home sensors', 'Care dashboard', 'Lunara AI', 'Personal Memory Base'],
    diffLabel: 'Differentiation',
    diffTitle: 'Why this is not Alexa and not a panic button.',
    diffText: 'Smart speakers connect people to services. VoiceBridge connects people to people. A panic button is mostly for crisis. VoiceBridge can be used every day for connection, presence, and early signal.',
    tableHead: ['Criterion', 'Alexa / Google / Алиса', 'VoiceBridge'],
    tableRows: [
      ['Main job', 'Services, information, smart home', 'Live voice of a loved one'],
      ['Elderly action', 'Remember a voice command', 'One simple gesture'],
      ['Family side', 'Often needs an account or device', 'Mobile app for the relative'],
      ['Connection scenario', 'Call or voice command', 'Push “dad wants to talk”'],
      ['B2B / OEM', 'Ecosystem dependency', 'Module for device integration'],
    ],
    marketLabel: 'Market',
    marketTitle: 'The care market is aging faster than staffing can grow.',
    marketText: 'Initial wedge: Moldova and Romania. Next step: Eastern Europe. Long-term: global elderly care tech.',
    marketCards: [
      { value: '3.4M', label: 'people 65+ in Romania' },
      { value: '1.2M', label: 'Romanians abroad' },
      { value: '$22B', label: 'Global Elderly Care Tech 2024' },
      { value: '+8.5%', label: 'annual market growth' },
    ],
    marketSteps: [
      { title: 'Initial wedge', text: 'Moldova + Romania' },
      { title: 'Next step', text: 'Eastern Europe: Moldova, Ukraine, Poland' },
      { title: 'Long-term', text: 'Global elderly care tech' },
    ],
    businessLabel: 'Business Model',
    businessTitle: 'Three monetization vectors.',
    businessText: 'The model combines hardware, subscription, and module licensing to device manufacturers.',
    models: [
      { title: 'B2B OEM', text: 'Module license for device manufacturers. 1–2 months integration instead of 12–18 months of development.' },
      { title: 'B2B2C', text: 'Nursing home networks and home care operators. €20–25 monthly subscription per device.' },
      { title: 'B2C diaspora', text: 'An adult child abroad buys the device for parents at home.' },
    ],
    pilotLabel: 'Stage & Pilot',
    pilotTitle: 'Working prototype and pilot preparation.',
    pilotText: 'We do not claim revenue, customers, MRR, or a closed round. The focus is on the working prototype, first batch, pilots, and partners in Moldova and Romania.',
    pilotFacts: ['ESP32-S3', 'ES8311 codec', 'Real-time bidirectional voice', 'Mobile PWA application', 'First pilot with real families', '4–5 care / home assistance partners for feedback'],
    roadmapLabel: 'Roadmap',
    roadmapTitle: '6 months to pilot.',
    roadmap: [
      { title: 'Month 1', text: 'VoiceBridge Bridge MVP, basic voice communication and architecture.' },
      { title: 'Month 2', text: 'Local device logic and stable connectivity.' },
      { title: 'Month 3', text: 'Lunara + Personal Memory Base.' },
      { title: 'Month 4', text: 'AI agents: Care Monitoring, Family Coordinator, Technical Guardian.' },
      { title: 'Month 5', text: 'Sensors for smart care environment.' },
      { title: 'Month 6', text: 'First commercial pilot with care homes / home care services.' },
    ],
    lookingLabel: 'Contact',
    lookingTitle: 'What we are looking for.',
    lookingText: 'We are looking for a seed / strategic angel / hardware-healthtech partner for the first device batch, platform deployment, and pilots in Moldova and Romania.',
    lookingItems: ['Home care operators', 'Care homes', 'Elderly support organizations', 'Device manufacturers for VoiceBridge Inside'],
    contactCta: 'Contact the founder',
    footer: 'Communication, presence and safety for elderly care.',
  },
};

const icons = [Users2, HeartPulse, Building2];
const scenarioIcons = [Radio, Bell, ShieldAlert];
const productIcons = [Home, Mic2, Wifi, Radio, Bell, ShieldAlert, Activity, Layers3, Building2, Sparkles, Users2];

function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const t = copies[lang];
  const navIds = ['problem', 'solution', 'product', 'market', 'business', 'pilot', 'contact'];

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-[#071627] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071627]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-teal/15 text-teal shadow-glow">
              <Mic2 size={22} />
            </span>
            <span>VoiceBridge</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navIds[index]}`} className="transition hover:text-teal">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1 text-sm">
            {(['ru', 'ro', 'en'] as Lang[]).map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-3 py-1.5 font-semibold transition ${lang === item ? 'bg-teal text-navy' : 'text-slate-300 hover:text-white'}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,214,204,.20),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(244,184,105,.18),transparent_28%),linear-gradient(180deg,#071627_0%,#0b1f34_100%)]" />
          <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">
                <Globe2 size={16} /> {t.badge}
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-mist">
                {t.heroSubtitle}
              </p>
              <p className="mt-6 max-w-2xl rounded-3xl border border-teal/25 bg-teal/10 p-5 text-xl font-bold text-teal shadow-glow">
                {t.heroLine}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {t.heroText}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal px-6 py-4 font-bold text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-[#66efe6]">
                  {t.ctaBrief} <ChevronRight size={18} />
                </a>
                <a href="#pilot" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:border-teal/60 hover:text-teal">
                  {t.ctaScenario}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {t.heroChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <HeroVisual t={t} />
          </div>
        </section>

        <Section id="problem" label={t.problemLabel} title={t.problemTitle} text={t.problemText}>
          <div className="grid gap-5 md:grid-cols-3">
            {t.painCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <article key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/10">
                  <Icon className="mb-5 text-teal" size={30} />
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="solution" label={t.solutionLabel} title={t.solutionTitle} text={t.solutionText} tone="light">
          <div className="grid gap-4 lg:grid-cols-4">
            {t.flow.map((item, index) => (
              <div key={item} className="relative rounded-3xl border border-slate-200 bg-white p-6 text-navy shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-xl font-black text-teal">{index + 1}</div>
                <p className="text-lg font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-2xl font-black text-navy">{t.scenariosTitle}</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {t.scenarios.map((item, index) => {
              const Icon = scenarioIcons[index];
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-navy">
                  <Icon className="mb-4 text-teal" size={28} />
                  <h4 className="text-xl font-black">{item.title}</h4>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="product" label={t.productLabel} title={t.productTitle} text={t.productText}>
          <div className="grid gap-6 lg:grid-cols-2">
            <ProductBox title={t.mvpTitle} items={t.mvpItems} offset={0} />
            <ProductBox title={t.expansionTitle} items={t.expansionItems} offset={6} accent />
          </div>
        </Section>

        <Section id="differentiation" label={t.diffLabel} title={t.diffTitle} text={t.diffText} tone="light">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-[1fr_1.1fr_1.1fr] bg-navy text-sm font-bold text-white md:text-base">
              {t.tableHead.map((item) => <div key={item} className="p-4 md:p-5">{item}</div>)}
            </div>
            {t.tableRows.map((row) => (
              <div key={row[0]} className="grid grid-cols-[1fr_1.1fr_1.1fr] border-t border-slate-200 text-sm md:text-base">
                <div className="bg-slate-50 p-4 font-bold text-navy md:p-5">{row[0]}</div>
                <div className="p-4 text-slate-600 md:p-5">{row[1]}</div>
                <div className="bg-teal/10 p-4 font-semibold text-navy md:p-5">{row[2]}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="market" label={t.marketLabel} title={t.marketTitle} text={t.marketText}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.marketCards.map((card) => (
              <div key={card.label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <div className="text-4xl font-black text-teal">{card.value}</div>
                <p className="mt-3 text-slate-300">{card.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.marketSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-teal/20 bg-teal/10 p-6">
                <h3 className="text-xl font-black text-teal">{step.title}</h3>
                <p className="mt-3 text-slate-200">{step.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="business" label={t.businessLabel} title={t.businessTitle} text={t.businessText} tone="light">
          <div className="grid gap-5 md:grid-cols-3">
            {t.models.map((model, index) => (
              <article key={model.title} className="rounded-3xl border border-slate-200 bg-white p-7 text-navy shadow-xl">
                <CircleDollarSign className="mb-5 text-amber" size={32} />
                <h3 className="text-2xl font-black">{model.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{model.text}</p>
                <div className="mt-6 h-1.5 rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-teal" style={{ width: `${52 + index * 17}%` }} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="pilot" label={t.pilotLabel} title={t.pilotTitle} text={t.pilotText}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.pilotFacts.map((fact) => (
              <div key={fact} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <Check className="shrink-0 text-teal" size={22} />
                <span className="font-semibold text-slate-100">{fact}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="roadmap" label={t.roadmapLabel} title={t.roadmapTitle} text="">
          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.roadmap.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <div className="mb-4 inline-flex rounded-full bg-amber/15 px-3 py-1 text-sm font-bold text-amber">{item.title}</div>
                <p className="leading-7 text-slate-200">{item.text}</p>
                <div className="mt-5 text-5xl font-black text-white/10">0{index + 1}</div>
              </div>
            ))}
          </div>
        </Section>

        <section id="contact" className="bg-mist px-5 py-24 text-navy lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-navy p-8 text-white shadow-2xl md:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16">
            <div>
              <p className="text-sm font-black uppercase tracking-[.24em] text-teal">{t.lookingLabel}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{t.lookingTitle}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.lookingText}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.lookingItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold text-slate-100">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-7">
              <h3 className="text-2xl font-black">Alexei Ivantov</h3>
              <p className="mt-2 text-slate-300">Founder, VoiceBridge / Lunara AI</p>
              <div className="mt-8 space-y-4 text-lg">
                <a className="block transition hover:text-teal" href="tel:+37379676487">+373 79 676 487</a>
                <a className="block transition hover:text-teal" href="mailto:wertikoo@yahoo.com">wertikoo@yahoo.com</a>
                <a className="block transition hover:text-teal" href="https://voicebridge.app">voicebridge.app</a>
                <a className="block transition hover:text-teal" href="https://voice-bridge.online">voice-bridge.online</a>
              </div>
              <a href="mailto:wertikoo@yahoo.com?subject=VoiceBridge%20Investor%20Brief" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal px-6 py-4 font-black text-navy transition hover:bg-[#66efe6]">
                {t.contactCta} <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071627] px-5 py-8 text-center text-sm text-slate-400">
        <p>© {year} VoiceBridge / Lunara Care. {t.footer}</p>
      </footer>
    </div>
  );
}

function HeroVisual({ t }: { t: Copy }) {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px]">
      <div className="absolute left-8 top-24 h-80 w-56 rounded-[2.2rem] border border-white/12 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
        <div className="h-full rounded-[1.7rem] bg-[#061321] p-5">
          <div className="mb-5 flex items-center justify-between text-xs text-slate-400"><span>VoiceBridge Care</span><span>20:47</span></div>
          <div className="rounded-2xl bg-teal/12 p-4">
            <p className="text-sm font-bold text-white">{t.deviceCard}</p>
            <p className="mt-2 text-xs text-slate-400">{t.phoneCard}</p>
          </div>
          <div className="mt-5 grid place-items-center rounded-2xl border border-teal/20 bg-teal/10 p-8 text-teal">
            <Mic2 size={56} />
          </div>
          <div className="mt-5 space-y-3">
            <div className="h-3 rounded-full bg-white/10" />
            <div className="h-3 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-32 grid h-72 w-72 place-items-center rounded-full border border-teal/20 bg-teal/10 shadow-glow">
        <div className="h-44 w-44 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#7ef4ec_34%,#16736e_78%)] shadow-glow" />
      </div>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520" fill="none">
        <path d="M220 260 C270 205, 310 335, 365 260" stroke="url(#wave)" strokeWidth="6" strokeLinecap="round" />
        <defs>
          <linearGradient id="wave" x1="200" x2="380" y1="260" y2="260">
            <stop stopColor="#3bd6cc" stopOpacity="0" />
            <stop offset="0.5" stopColor="#3bd6cc" />
            <stop offset="1" stopColor="#f4b869" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-16 right-10 rounded-2xl border border-amber/30 bg-amber/15 px-5 py-4 text-sm font-bold text-amber shadow-2xl">
        {t.deviceCard}
      </div>
    </div>
  );
}

function Section({ id, label, title, text, children, tone = 'dark' }: { id: string; label: string; title: string; text: string; children: React.ReactNode; tone?: 'dark' | 'light' }) {
  const isLight = tone === 'light';
  return (
    <section id={id} className={`${isLight ? 'bg-mist text-navy' : 'bg-[#071627] text-white'} px-5 py-24 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className={`text-sm font-black uppercase tracking-[.24em] ${isLight ? 'text-teal' : 'text-teal'}`}>{label}</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">{title}</h2>
          {text && <p className={`mt-6 text-lg leading-8 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function ProductBox({ title, items, offset, accent = false }: { title: string; items: string[]; offset: number; accent?: boolean }) {
  return (
    <div className={`rounded-[2rem] border p-7 ${accent ? 'border-amber/25 bg-amber/10' : 'border-teal/25 bg-teal/10'}`}>
      <h3 className={`text-3xl font-black ${accent ? 'text-amber' : 'text-teal'}`}>{title}</h3>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = productIcons[(index + offset) % productIcons.length];
          return (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <Icon className={accent ? 'text-amber' : 'text-teal'} size={22} />
              <span className="font-semibold text-slate-100">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
