import { useMemo, useState } from 'react';
import {
  Activity,
  Bell,
  Building2,
  ChevronRight,
  CircleDollarSign,
  Globe2,
  HeartPulse,
  Home,
  Layers3,
  Mic2,
  Radio,
  ShieldAlert,
  Sparkles,
  Users2,
  Watch,
  Wifi,
} from 'lucide-react';

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
  heroCards: string[];
  problemTitle: string;
  problemText: string;
  pains: { title: string; text: string }[];
  solutionTitle: string;
  solutionText: string;
  flow: string[];
  productTitle: string;
  productText: string;
  mvp: string[];
  expansion: string[];
  braceletTitle: string;
  braceletText: string;
  braceletCards: { title: string; text: string }[];
  emergencyTitle: string;
  emergencyText: string;
  diffTitle: string;
  diffRows: { label: string; smart: string; vb: string }[];
  marketTitle: string;
  marketText: string;
  marketCards: { value: string; label: string }[];
  businessTitle: string;
  businessCards: { title: string; text: string }[];
  pilotTitle: string;
  pilotFacts: string[];
  roadmapTitle: string;
  roadmap: string[];
  askTitle: string;
  askText: string;
  partners: string[];
  contact: string;
};

const copy: Record<Lang, Copy> = {
  ru: {
    nav: ['Problem', 'Solution', 'Product', 'Market', 'Business Model', 'Pilot', 'Contact'],
    badge: 'Investor landing page',
    heroTitle: 'VoiceBridge / Lunara Care',
    heroSubtitle: 'Платформа голосового присутствия и безопасности для пожилых людей и их семей.',
    heroLine: 'Одно касание устройства → уведомление семье → живой голосовой канал.',
    heroText:
      'Мы убираем интерфейс между пожилым человеком и его близкими: без смартфона, без экрана, без приложений на стороне папы или мамы.',
    ctaBrief: 'Запросить investor brief',
    ctaScenario: 'Посмотреть пилотный сценарий',
    heroCards: ['Папа хочет поговорить', 'Голосовое сообщение', 'SOS отправлен'],
    problemTitle: 'Проблема не в голосе. Проблема в интерфейсе.',
    problemText:
      'Пожилой человек может говорить, но часто не может легко начать связь через смартфон. Нужно найти телефон, разблокировать экран, открыть приложение, найти контакт, начать звонок и дождаться ответа. Для семьи это становится постоянной тревогой.',
    pains: [
      { title: 'Пожилой человек', text: 'Одиночество, сложные телефоны, страх нажать не туда.' },
      { title: 'Взрослые дети', text: 'Тревога на расстоянии и отсутствие быстрого живого контакта.' },
      { title: 'Care services', text: 'Нехватка персонала и позднее обнаружение тревожных ситуаций.' },
    ],
    solutionTitle: 'VoiceBridge убирает интерфейс полностью.',
    solutionText:
      'У родственника приложение. У пожилого человека домашнее устройство. Голос доходит почти мгновенно, а ответ возможен касанием, удержанием, голосом или запросом “хочу поговорить”.',
    flow: [
      'Пожилой человек касается устройства или стучит по корпусу.',
      'Родственник получает push “Папа хочет поговорить”.',
      'Родственник открывает Live Line или отвечает голосом.',
      'Устройство подтверждает действие светом, звуком и простым голосом.',
    ],
    productTitle: 'От простого голосового моста к платформе заботы.',
    productText:
      'VoiceBridge начинается с максимально простого сценария связи. Затем вокруг него добавляются ранний сигнал, браслет безопасности, домашние датчики и Lunara AI.',
    mvp: ['домашнее голосовое устройство', 'мобильное PWA-приложение родственника', 'cloud / relay platform', 'Live Line', 'Wants to talk', 'SOS'],
    expansion: ['носимый safety bracelet', 'датчики дома', 'care dashboard', 'Lunara AI', 'Personal Memory Base'],
    braceletTitle: 'Интеллектуальный браслет безопасности.',
    braceletText:
      'Браслет становится вторым контуром безопасности: он работает дома через BLE и VoiceBridge Orb, а вне дома может перейти к LoRa / LTE / long-range SOS.',
    braceletCards: [
      { title: 'Быстрый SOS', text: 'Одно удержание кнопки отправляет тревогу семье и запускает голосовой контакт.' },
      { title: 'Активность', text: 'Браслет отслеживает движение, длительную неподвижность и необычно низкую активность.' },
      { title: 'Падение', text: 'Wearable замечает резкий удар, возможное падение и отсутствие движения после него.' },
      { title: 'Подтверждение', text: 'Вибрация может подтвердить SOS, подключение семьи или получение сообщения.' },
    ],
    emergencyTitle: 'Тревога: семья узнаёт немедленно.',
    emergencyText:
      'VoiceBridge замечает SOS, тревожные фразы, необычную активность и возможные падения. Это не медицинский диагноз, а ранний повод проверить состояние близкого человека.',
    diffTitle: 'Почему это отличается от Alexa, смартфона и тревожной кнопки.',
    diffRows: [
      { label: 'Главная задача', smart: 'Информация, сервисы, умный дом', vb: 'Живой голос близкого человека' },
      { label: 'Действие пожилого человека', smart: 'Нужно помнить команды, экран или звонок', vb: 'Одно касание, жест или короткий запрос' },
      { label: 'Инициатива', smart: 'Пользователь сам запускает сценарий', vb: 'Устройство может само отправить “папа хочет поговорить”' },
      { label: 'Безопасность', smart: 'Обычно нет мониторинга активности и падений', vb: 'SOS, активность, падение, tone detection' },
      { label: 'B2B', smart: 'Закрытая экосистема', vb: 'B2B / OEM module для производителей' },
    ],
    marketTitle: 'Рынок ухода стареет быстрее, чем растёт персонал.',
    marketText: 'Initial wedge: Молдова + Румыния. Следующий шаг: Восточная Европа. Долгий горизонт: global elderly care tech.',
    marketCards: [
      { value: '3,4 млн', label: 'людей 65+ в Румынии' },
      { value: '1,2 млн', label: 'румын за рубежом' },
      { value: '$22 млрд', label: 'Global Elderly Care Tech 2024' },
      { value: '+8,5%', label: 'ежегодный рост рынка' },
    ],
    businessTitle: 'Бизнес-модель: три вектора монетизации.',
    businessCards: [
      { title: 'B2B OEM', text: 'Лицензия модуля производителям устройств. 1–2 месяца integration вместо 12–18 месяцев разработки.' },
      { title: 'B2B2C', text: 'Nursing home networks и home care operators. Подписка €20–25 / месяц на устройство.' },
      { title: 'B2C diaspora', text: 'Взрослый ребёнок за рубежом покупает устройство родителям домой.' },
    ],
    pilotTitle: 'Рабочий прототип и подготовка к пилоту.',
    pilotFacts: ['ESP32-S3', 'ES8311 codec', 'real-time bidirectional voice', 'mobile PWA application', 'первые рынки: Молдова и Румыния', 'ищем 4–5 care / home assistance партнёров'],
    roadmapTitle: '6 месяцев до пилота.',
    roadmap: ['Bridge MVP и базовая голосовая связь', 'локальная логика устройства и стабильное подключение', 'Lunara + Personal Memory Base', 'AI agents: Care Monitoring, Family Coordinator, Technical Guardian', 'sensors for smart care environment', 'first commercial pilot with care homes / home care services'],
    askTitle: 'Что мы ищем.',
    askText:
      'Seed / strategic angel / hardware-healthtech partner для первой партии устройств, деплоя платформы и пилотов в Молдове и Румынии.',
    partners: ['home care operators', 'care homes', 'elderly support organizations', 'device manufacturers for VoiceBridge Inside'],
    contact: 'Связаться с фаундером',
  },
  ro: {
    nav: ['Problem', 'Solution', 'Product', 'Market', 'Business Model', 'Pilot', 'Contact'],
    badge: 'Investor landing page',
    heroTitle: 'VoiceBridge / Lunara Care',
    heroSubtitle: 'Platformă de prezență vocală și siguranță pentru vârstnici și familiile lor.',
    heroLine: 'O atingere a dispozitivului → notificare familiei → canal vocal viu.',
    heroText:
      'Eliminăm interfața dintre persoana în vârstă și cei apropiați: fără smartphone, fără ecran, fără aplicație pe partea mamei sau tatălui.',
    ctaBrief: 'Cere investor brief',
    ctaScenario: 'Vezi scenariul pilot',
    heroCards: ['Tata vrea să vorbească', 'Mesaj vocal', 'SOS trimis'],
    problemTitle: 'Problema nu este vocea. Problema este interfața.',
    problemText:
      'Mulți vârstnici pot vorbi, dar nu pot iniția ușor legătura prin smartphone. Trebuie să găsească telefonul, să deblocheze ecranul, să deschidă aplicația, să găsească un contact și să aștepte răspunsul. Pentru familie, asta devine anxietate zilnică.',
    pains: [
      { title: 'Persoana în vârstă', text: 'Singurătate, telefoane complicate și teamă de greșeli.' },
      { title: 'Copiii adulți', text: 'Grijă la distanță și lipsa unui contact vocal rapid.' },
      { title: 'Servicii de îngrijire', text: 'Personal insuficient și detectarea târzie a situațiilor critice.' },
    ],
    solutionTitle: 'VoiceBridge elimină complet interfața.',
    solutionText:
      'Familia are aplicația. Persoana în vârstă are dispozitivul acasă. Vocea ajunge aproape instant, iar răspunsul se face prin atingere, apăsare lungă, voce sau cererea “vreau să vorbesc”.',
    flow: [
      'Persoana în vârstă atinge dispozitivul sau bate ușor în carcasă.',
      'Ruda primește push “Tata vrea să vorbească”.',
      'Ruda deschide Live Line sau răspunde vocal.',
      'Dispozitivul confirmă prin lumină, sunet și voce simplă.',
    ],
    productTitle: 'De la punte vocală simplă la platformă de îngrijire.',
    productText:
      'VoiceBridge începe cu cel mai simplu scenariu de comunicare. Apoi adaugă alertă timpurie, brățară de siguranță, senzori de casă și Lunara AI.',
    mvp: ['dispozitiv vocal pentru casă', 'aplicație mobilă PWA pentru familie', 'cloud / relay platform', 'Live Line', 'Wants to talk', 'SOS'],
    expansion: ['brățară safety bracelet', 'senzori de casă', 'care dashboard', 'Lunara AI', 'Personal Memory Base'],
    braceletTitle: 'Brățară inteligentă de siguranță.',
    braceletText:
      'Brățara este al doilea strat de siguranță: acasă funcționează prin BLE și VoiceBridge Orb, iar în afara casei poate folosi LoRa / LTE / long-range SOS.',
    braceletCards: [
      { title: 'SOS rapid', text: 'O apăsare lungă trimite alerta familiei și pornește contactul vocal.' },
      { title: 'Activitate', text: 'Monitorizează mișcarea, imobilitatea lungă și activitatea neobișnuit de scăzută.' },
      { title: 'Cădere', text: 'Wearable detectează șocul, posibila cădere și lipsa de mișcare după impact.' },
      { title: 'Confirmare', text: 'Vibrația poate confirma SOS, conectarea familiei sau primirea mesajului.' },
    ],
    emergencyTitle: 'Alertă: familia află imediat.',
    emergencyText:
      'VoiceBridge observă SOS, fraze de urgență, activitate neobișnuită și posibile căderi. Nu este diagnostic medical, ci un motiv timpuriu de verificare.',
    diffTitle: 'De ce diferă de Alexa, smartphone și butonul de panică.',
    diffRows: [
      { label: 'Scop principal', smart: 'Informații, servicii, smart home', vb: 'Vocea reală a unei persoane apropiate' },
      { label: 'Acțiunea vârstnicului', smart: 'Comenzi, ecran sau apel', vb: 'O atingere, un gest sau o cerere scurtă' },
      { label: 'Inițiativă', smart: 'Utilizatorul pornește scenariul', vb: 'Dispozitivul poate trimite “tata vrea să vorbească”' },
      { label: 'Siguranță', smart: 'De obicei fără activitate sau căderi', vb: 'SOS, activitate, cădere, tone detection' },
      { label: 'B2B', smart: 'Ecosistem închis', vb: 'B2B / OEM module pentru producători' },
    ],
    marketTitle: 'Piața de îngrijire îmbătrânește mai repede decât crește personalul.',
    marketText: 'Initial wedge: Moldova + România. Următorul pas: Europa de Est. Orizont lung: global elderly care tech.',
    marketCards: [
      { value: '3,4 mln', label: 'persoane 65+ în România' },
      { value: '1,2 mln', label: 'români în diaspora' },
      { value: '$22 mld', label: 'Global Elderly Care Tech 2024' },
      { value: '+8,5%', label: 'creștere anuală' },
    ],
    businessTitle: 'Model de business: trei direcții de monetizare.',
    businessCards: [
      { title: 'B2B OEM', text: 'Licențierea modulului către producători. 1–2 luni integrare în loc de 12–18 luni dezvoltare.' },
      { title: 'B2B2C', text: 'Rețele de care homes și home care operators. Abonament €20–25 / lună per dispozitiv.' },
      { title: 'B2C diaspora', text: 'Copilul adult din străinătate cumpără dispozitivul pentru părinți acasă.' },
    ],
    pilotTitle: 'Prototip funcțional și pregătire pentru pilot.',
    pilotFacts: ['ESP32-S3', 'ES8311 codec', 'real-time bidirectional voice', 'mobile PWA application', 'primele piețe: Moldova și România', 'căutăm 4–5 parteneri care / home assistance'],
    roadmapTitle: '6 luni până la pilot.',
    roadmap: ['Bridge MVP și comunicare vocală de bază', 'logică locală și conectare stabilă', 'Lunara + Personal Memory Base', 'AI agents: Care Monitoring, Family Coordinator, Technical Guardian', 'senzori pentru smart care environment', 'primul pilot comercial cu care homes / home care services'],
    askTitle: 'Ce căutăm.',
    askText:
      'Seed / strategic angel / hardware-healthtech partner pentru prima serie de dispozitive, deploy de platformă și piloți în Moldova și România.',
    partners: ['home care operators', 'care homes', 'elderly support organizations', 'device manufacturers for VoiceBridge Inside'],
    contact: 'Contactează fondatorul',
  },
  en: {
    nav: ['Problem', 'Solution', 'Product', 'Market', 'Business Model', 'Pilot', 'Contact'],
    badge: 'Investor landing page',
    heroTitle: 'VoiceBridge / Lunara Care',
    heroSubtitle: 'A voice presence and safety platform for older adults and their families.',
    heroLine: 'One touch on the device → family notification → live voice channel.',
    heroText:
      'We remove the interface between an older person and their family: no smartphone, no screen, no app on mum or dad’s side.',
    ctaBrief: 'Request investor brief',
    ctaScenario: 'View pilot scenario',
    heroCards: ['Dad wants to talk', 'Voice message', 'SOS sent'],
    problemTitle: 'The problem is not voice. The problem is interface.',
    problemText:
      'Many older adults can speak, but cannot easily initiate contact through a smartphone. They need to find the phone, unlock the screen, open an app, find a contact, start a call and wait. For the family, this becomes daily uncertainty.',
    pains: [
      { title: 'Older adult', text: 'Loneliness, complicated phones and fear of pressing the wrong thing.' },
      { title: 'Adult children', text: 'Anxiety at a distance and no fast live contact.' },
      { title: 'Care services', text: 'Staff overload and late detection of critical situations.' },
    ],
    solutionTitle: 'VoiceBridge removes the interface completely.',
    solutionText:
      'The family has the app. The older person has the home device. Voice arrives almost instantly, while response can be touch, long press, voice or a simple “I want to talk” signal.',
    flow: [
      'The older person touches the device or taps the case.',
      'The relative receives “Dad wants to talk”.',
      'The relative opens Live Line or replies by voice.',
      'The device confirms with light, sound and simple voice feedback.',
    ],
    productTitle: 'From a simple voice bridge to a care platform.',
    productText:
      'VoiceBridge starts with a simple communication scenario. Then it expands into early signal, safety bracelet, home sensors and Lunara AI.',
    mvp: ['home voice device', 'mobile PWA for family', 'cloud / relay platform', 'Live Line', 'Wants to talk', 'SOS'],
    expansion: ['wearable safety bracelet', 'home sensors', 'care dashboard', 'Lunara AI', 'Personal Memory Base'],
    braceletTitle: 'Intelligent safety bracelet.',
    braceletText:
      'The bracelet becomes the second safety layer: at home it works through BLE and VoiceBridge Orb, while outside it can use LoRa / LTE / long-range SOS.',
    braceletCards: [
      { title: 'Fast SOS', text: 'One long press sends an alert to the family and starts voice contact.' },
      { title: 'Activity', text: 'Tracks movement, long inactivity and unusually low activity.' },
      { title: 'Fall signal', text: 'Wearable detects sharp impact, possible fall and no movement after impact.' },
      { title: 'Confirmation', text: 'Vibration can confirm SOS, family connection or message delivery.' },
    ],
    emergencyTitle: 'Emergency: family knows immediately.',
    emergencyText:
      'VoiceBridge can notice SOS, emergency phrases, unusual activity and possible falls. It is not a medical diagnosis, it is an early reason to check on a loved one.',
    diffTitle: 'Why it is different from Alexa, smartphones and panic buttons.',
    diffRows: [
      { label: 'Main job', smart: 'Information, services, smart home', vb: 'Live voice of a real loved one' },
      { label: 'Older person action', smart: 'Commands, screen or call flow', vb: 'One touch, one gesture or short request' },
      { label: 'Initiative', smart: 'User starts the scenario', vb: 'Device can send “dad wants to talk”' },
      { label: 'Safety', smart: 'Usually no activity or fall monitoring', vb: 'SOS, activity, fall, tone detection' },
      { label: 'B2B', smart: 'Closed ecosystem', vb: 'B2B / OEM module for manufacturers' },
    ],
    marketTitle: 'The care market is aging faster than staffing can grow.',
    marketText: 'Initial wedge: Moldova + Romania. Next step: Eastern Europe. Long-term: global elderly care tech.',
    marketCards: [
      { value: '3.4M', label: 'people 65+ in Romania' },
      { value: '1.2M', label: 'Romanians abroad' },
      { value: '$22B', label: 'Global Elderly Care Tech 2024' },
      { value: '+8.5%', label: 'annual growth' },
    ],
    businessTitle: 'Business model: three monetization vectors.',
    businessCards: [
      { title: 'B2B OEM', text: 'Licensing the module to device manufacturers. 1–2 months integration instead of 12–18 months development.' },
      { title: 'B2B2C', text: 'Nursing home networks and home care operators. €20–25 monthly subscription per device.' },
      { title: 'B2C diaspora', text: 'An adult child abroad buys a device for parents at home.' },
    ],
    pilotTitle: 'Working prototype and pilot preparation.',
    pilotFacts: ['ESP32-S3', 'ES8311 codec', 'real-time bidirectional voice', 'mobile PWA application', 'first markets: Moldova and Romania', 'looking for 4–5 care / home assistance partners'],
    roadmapTitle: '6 months to pilot.',
    roadmap: ['Bridge MVP and basic voice communication', 'local device logic and stable connectivity', 'Lunara + Personal Memory Base', 'AI agents: Care Monitoring, Family Coordinator, Technical Guardian', 'sensors for smart care environment', 'first commercial pilot with care homes / home care services'],
    askTitle: 'What we are looking for.',
    askText:
      'Seed / strategic angel / hardware-healthtech partner for the first device batch, platform deployment and pilots in Moldova and Romania.',
    partners: ['home care operators', 'care homes', 'elderly support organizations', 'device manufacturers for VoiceBridge Inside'],
    contact: 'Contact the founder',
  },
};

const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}`;

function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const t = copy[lang];
  const navIds = useMemo(() => ['problem', 'solution', 'product', 'market', 'business', 'pilot', 'contact'], []);

  return (
    <main className="min-h-screen bg-[#050d17] text-slate-50">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(41,151,255,.26),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(20,184,166,.18),transparent_34%),linear-gradient(180deg,#06111f,#050d17_45%,#07101b)]" />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#06111f]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/25">
              <Radio size={18} />
            </span>
            VoiceBridge Care
          </a>
          <div className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {t.nav.map((item, i) => (
              <a key={item} href={`#${navIds[i]}`} className="transition hover:text-cyan-200">
                {item}
              </a>
            ))}
          </div>
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font700">
            {(['ru', 'ro', 'en'] as Lang[]).map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-3 py-1.5 transition ${lang === item ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-white'}`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden px-5 pb-20 pt-28 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles size={16} /> {t.badge}
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl xl:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-cyan-100/90">{t.heroSubtitle}</p>
            <p className="mt-6 max-w-2xl rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-2xl font-bold text-white shadow-[0_0_60px_rgba(34,211,238,.12)]">
              {t.heroLine}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-cyan-300 px-6 py-3 font800 text-slate-950 shadow-[0_0_40px_rgba(34,211,238,.28)] transition hover:bg-cyan-200">
                {t.ctaBrief}
              </a>
              <a href="#solution" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font800 text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                {t.ctaScenario}
              </a>
            </div>
          </div>

          <div className="relative">
            <img src={img('f1.png')} alt="VoiceBridge app and home device" className="aspect-[16/10] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/15" />
            <div className="absolute left-5 top-5 rounded-3xl border border-blue-300/30 bg-blue-500/20 p-4 shadow-[0_0_45px_rgba(59,130,246,.3)] backdrop-blur-xl">
              <div className="text-sm text-blue-100">20:46</div>
              <div className="mt-1 text-lg font800">{t.heroCards[0]}</div>
            </div>
            <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 gap-3 sm:flex">
              {t.heroCards.map((card, i) => (
                <div key={card} className={`rounded-3xl border px-5 py-4 text-center text-sm font800 backdrop-blur-xl ${i === 2 ? 'border-red-300/40 bg-red-500/25 text-red-50' : i === 1 ? 'border-emerald-300/35 bg-emerald-500/20 text-emerald-50' : 'border-blue-300/35 bg-blue-500/20 text-blue-50'}`}>
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="problem" label="Problem" title={t.problemTitle} text={t.problemText}>
        <div className="grid gap-5 md:grid-cols-3">
          {t.pains.map((pain, i) => (
            <Card key={pain.title} glow={i === 1 ? 'cyan' : i === 2 ? 'amber' : 'blue'}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                {i === 0 ? <Home /> : i === 1 ? <Users2 /> : <Building2 />}
              </div>
              <h3 className="text-2xl font900">{pain.title}</h3>
              <p className="mt-3 text-slate-300">{pain.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="solution" label="Solution" title={t.solutionTitle} text={t.solutionText} dark>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <img src={img('f2.png')} alt="VoiceBridge communication scenario" className="h-full min-h-[420px] rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/15" />
          <div className="grid gap-4">
            {t.flow.map((item, i) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-xl">
                <div className="text-sm font900 text-cyan-200">0{i + 1}</div>
                <p className="mt-2 text-lg font700 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="product" label="Product" title={t.productTitle} text={t.productText}>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureList title="MVP now" items={t.mvp} icon={<Layers3 />} />
          <FeatureList title="Platform expansion" items={t.expansion} icon={<Sparkles />} muted />
        </div>
      </Section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[.04] shadow-2xl">
          <img src={img('p1.jpg')} alt="VoiceBridge interaction modes" className="w-full object-cover" />
        </div>
      </section>

      <Section id="bracelet" label="Safety bracelet" title={t.braceletTitle} text={t.braceletText} dark>
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {t.braceletCards.map((card, i) => (
              <Card key={card.title} glow={i === 0 ? 'red' : 'cyan'}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                  {i === 0 ? <ShieldAlert /> : i === 1 ? <Activity /> : i === 2 ? <HeartPulse /> : <Watch />}
                </div>
                <h3 className="text-xl font900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
              </Card>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-red-300/20 bg-red-500/10">
            <img src={img('p2.jpg')} alt="SOS bracelet and emergency signal" className="h-full min-h-[450px] w-full object-cover opacity-90" />
            <div className="absolute left-5 top-5 rounded-3xl border border-red-300/40 bg-red-500/30 px-5 py-4 backdrop-blur-xl">
              <div className="text-sm text-red-100">Emergency Guard</div>
              <div className="text-2xl font900 text-white">SOS / Fall / Inactivity</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="emergency" label="Emergency Guard" title={t.emergencyTitle} text={t.emergencyText}>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <img src={img('p3.jpg')} alt="VoiceBridge care collage" className="rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/15" />
          <div className="space-y-4">
            {['SOS / Help request', 'Activity Detection', 'Tone Detection', 'Direct voice contact'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[.06] p-5">
                <div className="flex items-center gap-3 text-lg font900">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.7)]" />
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="difference" label="Differentiation" title={t.diffTitle} text="">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04]">
          {t.diffRows.map((row, i) => (
            <div key={row.label} className="grid gap-0 border-b border-white/10 last:border-b-0 md:grid-cols-[.7fr_1fr_1fr]">
              <div className="bg-white/[.04] p-5 font900 text-cyan-100">{row.label}</div>
              <div className="p-5 text-slate-300">{row.smart}</div>
              <div className="bg-cyan-300/10 p-5 font800 text-cyan-50">{row.vb}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="market" label="Market" title={t.marketTitle} text={t.marketText} dark>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.marketCards.map((card) => (
            <div key={card.value} className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
              <div className="text-4xl font-black text-cyan-200">{card.value}</div>
              <div className="mt-3 text-slate-300">{card.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="business" label="Business Model" title={t.businessTitle} text="">
        <div className="grid gap-5 md:grid-cols-3">
          {t.businessCards.map((card, i) => (
            <Card key={card.title} glow={i === 0 ? 'cyan' : i === 1 ? 'amber' : 'blue'}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                {i === 0 ? <Wifi /> : i === 1 ? <Building2 /> : <CircleDollarSign />}
              </div>
              <h3 className="text-2xl font900">{card.title}</h3>
              <p className="mt-3 text-slate-300">{card.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="pilot" label="Stage & Pilot" title={t.pilotTitle} text="" dark>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-3 sm:grid-cols-2">
            {t.pilotFacts.map((fact) => (
              <div key={fact} className="rounded-2xl border border-white/10 bg-white/[.06] p-4 font800 text-slate-100">
                {fact}
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[.06] p-6">
            <h3 className="text-2xl font900">{t.roadmapTitle}</h3>
            <div className="mt-5 space-y-4">
              {t.roadmap.map((item, i) => (
                <div key={item} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300 font900 text-slate-950">{i + 1}</div>
                  <p className="pt-1 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section id="contact" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,.16),rgba(245,158,11,.10))] p-8 shadow-[0_0_80px_rgba(34,211,238,.14)] lg:grid-cols-[1fr_.8fr] lg:p-12">
          <div>
            <div className="text-sm font900 uppercase tracking-[.22em] text-cyan-200">Contact</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">{t.askTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{t.askText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.partners.map((partner) => (
                <span key={partner} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200">
                  {partner}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#06111f]/70 p-6">
            <h3 className="text-2xl font900">Alexei Ivantov</h3>
            <p className="mt-1 text-slate-400">Founder, VoiceBridge / Lunara AI</p>
            <div className="mt-6 space-y-3 text-lg text-slate-100">
              <p>+373 79 676 487</p>
              <p>wertikoo@yahoo.com</p>
              <p>voicebridge.app</p>
              <p>voice-bridge.online</p>
            </div>
            <a href="mailto:wertikoo@yahoo.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font900 text-slate-950">
              {t.contact} <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        VoiceBridge / Lunara Care. Communication, presence and safety for elderly care.
      </footer>
    </main>
  );
}

function Section({ id, label, title, text, children, dark = false }: { id: string; label: string; title: string; text: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`px-5 py-20 ${dark ? 'bg-black/20' : ''}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font900 uppercase tracking-[.22em] text-cyan-300">{label}</div>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h2>
          {text && <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, glow = 'cyan' }: { children: React.ReactNode; glow?: 'cyan' | 'amber' | 'blue' | 'red' }) {
  const color = {
    cyan: 'hover:border-cyan-300/40 hover:shadow-[0_0_60px_rgba(34,211,238,.12)]',
    amber: 'hover:border-amber-300/40 hover:shadow-[0_0_60px_rgba(245,158,11,.12)]',
    blue: 'hover:border-blue-300/40 hover:shadow-[0_0_60px_rgba(59,130,246,.12)]',
    red: 'hover:border-red-300/40 hover:shadow-[0_0_60px_rgba(239,68,68,.14)]',
  }[glow];

  return <div className={`rounded-[2rem] border border-white/10 bg-white/[.055] p-6 backdrop-blur-xl transition ${color}`}>{children}</div>;
}

function FeatureList({ title, items, icon, muted = false }: { title: string; items: string[]; icon: React.ReactNode; muted?: boolean }) {
  return (
    <div className={`rounded-[2rem] border p-7 ${muted ? 'border-amber-300/20 bg-amber-300/10' : 'border-cyan-300/20 bg-cyan-300/10'}`}>
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">{icon}</span>
        <h3 className="text-2xl font900">{title}</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-black/20 p-4 text-slate-200">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
