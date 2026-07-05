import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bell,
  ChefHat,
  ChevronRight,
  Clock3,
  CreditCard,
  DollarSign,
  Download,
  Globe2,
  LayoutDashboard,
  LogIn,
  Minus,
  Plus,
  Printer,
  ReceiptText,
  Settings,
  ShoppingBasket,
  Store,
  Trash2,
  Utensils,
  UsersRound
} from 'lucide-react';
import './styles.css';

const translations = {
  EN: {
    premiumConsole: 'Premium service console',
    loginCopy: 'Fast table service, live kitchen routing, receipts, and manager tools in one refined interface.',
    waiter: 'Waiter', kitchen: 'Kitchen', admin: 'Admin', cashier: 'Cashier',
    staffPin: 'Staff PIN', staffPinMeta: 'Administrator editable login PIN',
    adminPin: 'Admin PIN', adminPinMeta: 'Manager and administrator access PIN', invalidPin: 'Invalid PIN',
    enterStation: 'Enter station', station: 'station',
    tableOrdering: 'Table ordering', menuSelection: 'Menu selection', all: 'All',
    antipasti: 'Antipasti', primi: 'Primi', pizze: 'Pizze', dolci: 'Dolci', drinks: 'Drinks',
    currentCheck: 'Current check', table: 'Table', total: 'Total',
    sendToKitchen: 'Send to kitchen', sentToKitchen: 'Sent to kitchen', finalBill: 'Final bill',
    liveFireBoard: 'Live fire board', kitchenOrders: 'Kitchen orders', active: 'active',
    firing: 'Firing', plating: 'Plating', ready: 'Ready', served: 'Served',
    management: 'Management', today: 'Today at a glance', revenue: 'Revenue', covers: 'Covers', kitchenTime: 'Kitchen time',
    resetRevenue: 'Reset revenue', resetCovers: 'Reset covers',
    menuManagement: 'Menu management', menuManagementMeta: 'Edit availability and prices',
    addItem: 'Add item', itemName: 'Item name', price: 'Price', category: 'Category', deleteItem: 'Delete',
    payments: 'Payments', paymentsMeta: 'Receipts, refunds, closing',
    staffAccess: 'Staff access', staffAccessMeta: 'Roles and PINs',
    systemSettings: 'System settings', systemSettingsMeta: 'Language, taxes, printers',
    configuration: 'Configuration', language: 'Language', languageMeta: 'Interface language for staff stations',
    notifications: 'Notifications', notificationsMeta: 'Kitchen and payment alerts',
    restaurantProfile: 'Restaurant profile', receiptPrinter: 'Receipt printer', printerMeta: 'Thermal printer connected',
    currency: 'Currency', currencyMeta: 'Default tender for checks and receipts',
    paidReceipt: 'Paid receipt', check: 'Check', vat: 'VAT 8.1%', print: 'Print', download: 'Download',
    thankYou: 'Thank you for visiting our restaurant!',
    order: 'Order', bill: 'Bill',
    burrata: 'Burrata Pugliese', carpaccio: 'Carpaccio di Manzo', pizza: 'Pizza Margherita',
    carbonara: 'Spaghetti Carbonara', lasagna: 'Lasagna al Ragu', tiramisu: 'Tiramisu Classico',
    coffee: 'Coffee', espresso: 'Espresso', sparklingWater: 'Sparkling Water'
  },
  DE: {
    premiumConsole: 'Premium-Servicekonsole',
    loginCopy: 'Schneller Tischservice, Live-Kuechensteuerung, Belege und Manager-Tools in einer eleganten Oberflaeche.',
    waiter: 'Kellner', kitchen: 'Kueche', admin: 'Admin', cashier: 'Kasse',
    staffPin: 'Mitarbeiter-PIN', staffPinMeta: 'Vom Administrator bearbeitbare Login-PIN',
    adminPin: 'Admin-PIN', adminPinMeta: 'Zugangs-PIN fuer Manager und Administratoren', invalidPin: 'Ungueltige PIN',
    enterStation: 'Station betreten', station: 'Station',
    tableOrdering: 'Tischbestellung', menuSelection: 'Menueauswahl', all: 'Alle',
    antipasti: 'Antipasti', primi: 'Primi', pizze: 'Pizzen', dolci: 'Desserts', drinks: 'Getraenke',
    currentCheck: 'Aktuelle Rechnung', table: 'Tisch', total: 'Summe',
    sendToKitchen: 'An Kueche senden', sentToKitchen: 'An Kueche gesendet', finalBill: 'Endrechnung',
    liveFireBoard: 'Live-Kuechenboard', kitchenOrders: 'Kuechenbestellungen', active: 'aktiv',
    firing: 'In Arbeit', plating: 'Anrichten', ready: 'Bereit', served: 'Serviert',
    management: 'Verwaltung', today: 'Heute im Ueberblick', revenue: 'Umsatz', covers: 'Gaeste', kitchenTime: 'Kuechenzeit',
    resetRevenue: 'Umsatz zuruecksetzen', resetCovers: 'Gaeste zuruecksetzen',
    menuManagement: 'Menueverwaltung', menuManagementMeta: 'Verfuegbarkeit und Preise bearbeiten',
    addItem: 'Artikel hinzufuegen', itemName: 'Artikelname', price: 'Preis', category: 'Kategorie', deleteItem: 'Loeschen',
    payments: 'Zahlungen', paymentsMeta: 'Belege, Rueckerstattungen, Abschluss',
    staffAccess: 'Mitarbeiterzugang', staffAccessMeta: 'Rollen und PINs',
    systemSettings: 'Systemeinstellungen', systemSettingsMeta: 'Sprache, Steuern, Drucker',
    configuration: 'Konfiguration', language: 'Sprache', languageMeta: 'Oberflaechensprache fuer Personalstationen',
    notifications: 'Benachrichtigungen', notificationsMeta: 'Kuechen- und Zahlungsalarme',
    restaurantProfile: 'Restaurantprofil', receiptPrinter: 'Belegdrucker', printerMeta: 'Thermodrucker verbunden',
    currency: 'Waehrung', currencyMeta: 'Standardwaehrung fuer Rechnungen und Belege',
    paidReceipt: 'Bezahlter Beleg', check: 'Rechnung', vat: 'MwSt. 8.1%', print: 'Drucken', download: 'Herunterladen',
    thankYou: 'Vielen Dank fuer Ihren Besuch in unserem Restaurant!',
    order: 'Bestellung', bill: 'Rechnung',
    burrata: 'Burrata Pugliese', carpaccio: 'Carpaccio di Manzo', pizza: 'Pizza Margherita',
    carbonara: 'Spaghetti Carbonara', lasagna: 'Lasagne mit Ragu', tiramisu: 'Tiramisu Classico',
    coffee: 'Kaffee', espresso: 'Espresso', sparklingWater: 'Sprudelwasser'
  },
  FR: {
    premiumConsole: 'Console de service premium',
    loginCopy: 'Service de table rapide, routage cuisine en direct, recus et outils manager dans une interface raffinee.',
    waiter: 'Serveur', kitchen: 'Cuisine', admin: 'Admin', cashier: 'Caisse',
    staffPin: 'PIN employe', staffPinMeta: 'PIN de connexion modifiable par admin',
    adminPin: 'PIN admin', adminPinMeta: 'PIN acces manager et administrateur', invalidPin: 'PIN invalide',
    enterStation: 'Entrer au poste', station: 'poste',
    tableOrdering: 'Commande table', menuSelection: 'Selection du menu', all: 'Tous',
    antipasti: 'Antipasti', primi: 'Primi', pizze: 'Pizzas', dolci: 'Desserts', drinks: 'Boissons',
    currentCheck: 'Addition en cours', table: 'Table', total: 'Total',
    sendToKitchen: 'Envoyer en cuisine', sentToKitchen: 'Envoye en cuisine', finalBill: 'Addition finale',
    liveFireBoard: 'Tableau cuisine live', kitchenOrders: 'Commandes cuisine', active: 'actives',
    firing: 'En preparation', plating: 'Dressage', ready: 'Pret', served: 'Servi',
    management: 'Gestion', today: 'Aujourd hui', revenue: 'Revenu', covers: 'Couverts', kitchenTime: 'Temps cuisine',
    resetRevenue: 'Reinitialiser revenu', resetCovers: 'Reinitialiser couverts',
    menuManagement: 'Gestion du menu', menuManagementMeta: 'Modifier disponibilite et prix',
    addItem: 'Ajouter article', itemName: 'Nom article', price: 'Prix', category: 'Categorie', deleteItem: 'Supprimer',
    payments: 'Paiements', paymentsMeta: 'Recus, remboursements, cloture',
    staffAccess: 'Acces equipe', staffAccessMeta: 'Roles et PINs',
    systemSettings: 'Parametres systeme', systemSettingsMeta: 'Langue, taxes, imprimantes',
    configuration: 'Configuration', language: 'Langue', languageMeta: 'Langue de l interface pour les postes',
    notifications: 'Notifications', notificationsMeta: 'Alertes cuisine et paiement',
    restaurantProfile: 'Profil restaurant', receiptPrinter: 'Imprimante recu', printerMeta: 'Imprimante thermique connectee',
    currency: 'Devise', currencyMeta: 'Devise par defaut pour additions et recus',
    paidReceipt: 'Recu paye', check: 'Addition', vat: 'TVA 8.1%', print: 'Imprimer', download: 'Telecharger',
    thankYou: 'Merci de votre visite dans notre restaurant !',
    order: 'Commande', bill: 'Addition',
    burrata: 'Burrata des Pouilles', carpaccio: 'Carpaccio de boeuf', pizza: 'Pizza Margherita',
    carbonara: 'Spaghetti Carbonara', lasagna: 'Lasagnes au ragu', tiramisu: 'Tiramisu classique',
    coffee: 'Cafe', espresso: 'Espresso', sparklingWater: 'Eau petillante'
  },
  IT: {
    premiumConsole: 'Console di servizio premium',
    loginCopy: 'Servizio tavoli rapido, cucina live, ricevute e strumenti manager in un interfaccia raffinata.',
    waiter: 'Cameriere', kitchen: 'Cucina', admin: 'Admin', cashier: 'Cassa',
    staffPin: 'PIN staff', staffPinMeta: 'PIN di accesso modificabile da admin',
    adminPin: 'PIN admin', adminPinMeta: 'PIN accesso manager e amministratore', invalidPin: 'PIN non valido',
    enterStation: 'Entra nella postazione', station: 'postazione',
    tableOrdering: 'Ordine tavolo', menuSelection: 'Selezione menu', all: 'Tutti',
    antipasti: 'Antipasti', primi: 'Primi', pizze: 'Pizze', dolci: 'Dolci', drinks: 'Bevande',
    currentCheck: 'Conto attuale', table: 'Tavolo', total: 'Totale',
    sendToKitchen: 'Invia in cucina', sentToKitchen: 'Inviato in cucina', finalBill: 'Conto finale',
    liveFireBoard: 'Bacheca cucina live', kitchenOrders: 'Ordini cucina', active: 'attivi',
    firing: 'In preparazione', plating: 'Impiattamento', ready: 'Pronto', served: 'Servito',
    management: 'Gestione', today: 'Oggi in sintesi', revenue: 'Ricavi', covers: 'Coperti', kitchenTime: 'Tempo cucina',
    resetRevenue: 'Azzera ricavi', resetCovers: 'Azzera coperti',
    menuManagement: 'Gestione menu', menuManagementMeta: 'Modifica disponibilita e prezzi',
    addItem: 'Aggiungi articolo', itemName: 'Nome articolo', price: 'Prezzo', category: 'Categoria', deleteItem: 'Elimina',
    payments: 'Pagamenti', paymentsMeta: 'Ricevute, rimborsi, chiusura',
    staffAccess: 'Accesso staff', staffAccessMeta: 'Ruoli e PIN',
    systemSettings: 'Impostazioni sistema', systemSettingsMeta: 'Lingua, tasse, stampanti',
    configuration: 'Configurazione', language: 'Lingua', languageMeta: 'Lingua interfaccia per le postazioni',
    notifications: 'Notifiche', notificationsMeta: 'Avvisi cucina e pagamenti',
    restaurantProfile: 'Profilo ristorante', receiptPrinter: 'Stampante ricevute', printerMeta: 'Stampante termica collegata',
    currency: 'Valuta', currencyMeta: 'Valuta predefinita per conti e ricevute',
    paidReceipt: 'Ricevuta pagata', check: 'Conto', vat: 'IVA 8.1%', print: 'Stampa', download: 'Scarica',
    thankYou: 'Grazie per aver visitato il nostro ristorante!',
    order: 'Ordine', bill: 'Conto',
    burrata: 'Burrata Pugliese', carpaccio: 'Carpaccio di Manzo', pizza: 'Pizza Margherita',
    carbonara: 'Spaghetti Carbonara', lasagna: 'Lasagna al Ragu', tiramisu: 'Tiramisu Classico',
    coffee: 'Caffe', espresso: 'Espresso', sparklingWater: 'Acqua frizzante'
  },
  TR: {
    premiumConsole: 'Premium servis konsolu',
    loginCopy: 'Hizli masa servisi, canli mutfak yonlendirme, fisler ve yonetici araclari tek zarif arayuzde.',
    waiter: 'Garson', kitchen: 'Mutfak', admin: 'Admin', cashier: 'Kasa',
    staffPin: 'Personel PIN', staffPinMeta: 'Yonetici tarafindan duzenlenebilir giris PINi',
    adminPin: 'Admin PIN', adminPinMeta: 'Yonetici ve admin erisim PINi', invalidPin: 'Gecersiz PIN',
    enterStation: 'Istasyona gir', station: 'istasyonu',
    tableOrdering: 'Masa siparisi', menuSelection: 'Menu secimi', all: 'Tumu',
    antipasti: 'Baslangiclar', primi: 'Ana yemekler', pizze: 'Pizzalar', dolci: 'Tatlilar', drinks: 'Icecekler',
    currentCheck: 'Guncel hesap', table: 'Masa', total: 'Toplam',
    sendToKitchen: 'Mutfaga gonder', sentToKitchen: 'Mutfaga gonderildi', finalBill: 'Son hesap',
    liveFireBoard: 'Canli mutfak panosu', kitchenOrders: 'Mutfak siparisleri', active: 'aktif',
    firing: 'Hazirlaniyor', plating: 'Tabaklaniyor', ready: 'Hazir', served: 'Servis edildi',
    management: 'Yonetim', today: 'Bugun genel bakis', revenue: 'Gelir', covers: 'Kuver', kitchenTime: 'Mutfak suresi',
    resetRevenue: 'Geliri sifirla', resetCovers: 'Kuveri sifirla',
    menuManagement: 'Menu yonetimi', menuManagementMeta: 'Uygunluk ve fiyatlari duzenle',
    addItem: 'Urun ekle', itemName: 'Urun adi', price: 'Fiyat', category: 'Kategori', deleteItem: 'Sil',
    payments: 'Odemeler', paymentsMeta: 'Fisler, iadeler, kapanis',
    staffAccess: 'Personel erisimi', staffAccessMeta: 'Roller ve PINler',
    systemSettings: 'Sistem ayarlari', systemSettingsMeta: 'Dil, vergiler, yazicilar',
    configuration: 'Yapilandirma', language: 'Dil', languageMeta: 'Personel istasyonlari icin arayuz dili',
    notifications: 'Bildirimler', notificationsMeta: 'Mutfak ve odeme uyarilari',
    restaurantProfile: 'Restoran profili', receiptPrinter: 'Fis yazicisi', printerMeta: 'Termal yazici bagli',
    currency: 'Para birimi', currencyMeta: 'Hesaplar ve fisler icin varsayilan para birimi',
    paidReceipt: 'Odenmis fis', check: 'Hesap', vat: 'KDV 8.1%', print: 'Yazdir', download: 'Indir',
    thankYou: 'Restoraninizi ziyaret ettiginiz icin tesekkur ederiz!',
    order: 'Siparis', bill: 'Hesap',
    burrata: 'Puglia Burrata', carpaccio: 'Dana Carpaccio', pizza: 'Margherita Pizza',
    carbonara: 'Spaghetti Carbonara', lasagna: 'Ragulu Lazanya', tiramisu: 'Klasik Tiramisu',
    coffee: 'Kahve', espresso: 'Espresso', sparklingWater: 'Maden suyu'
  },
  AL: {
    premiumConsole: 'Konsola premium e sherbimit',
    loginCopy: 'Sherbim i shpejte tavoline, drejtim kuzhine live, fatura dhe mjete menaxheri ne nje nderfaqe elegante.',
    waiter: 'Kamarier', kitchen: 'Kuzhina', admin: 'Admin', cashier: 'Arka',
    staffPin: 'PIN stafi', staffPinMeta: 'PIN hyrjeje qe ndryshohet nga administratori',
    adminPin: 'PIN admini', adminPinMeta: 'PIN aksesi per menaxher dhe administrator', invalidPin: 'PIN i pavlefshem',
    enterStation: 'Hyr ne stacion', station: 'stacion',
    tableOrdering: 'Porosi tavoline', menuSelection: 'Zgjedhja e menus', all: 'Te gjitha',
    antipasti: 'Antipasti', primi: 'Pjatat kryesore', pizze: 'Picat', dolci: 'Embelsira', drinks: 'Pije',
    currentCheck: 'Fatura aktuale', table: 'Tavolina', total: 'Totali',
    sendToKitchen: 'Dergo ne kuzhine', sentToKitchen: 'U dergua ne kuzhine', finalBill: 'Fatura finale',
    liveFireBoard: 'Paneli live i kuzhines', kitchenOrders: 'Porosite e kuzhines', active: 'aktive',
    firing: 'Ne pergatitje', plating: 'Ne servirje', ready: 'Gati', served: 'U servir',
    management: 'Menaxhim', today: 'Sot ne permbledhje', revenue: 'Te ardhura', covers: 'Kliente', kitchenTime: 'Koha e kuzhines',
    resetRevenue: 'Rivendos te ardhurat', resetCovers: 'Rivendos klientet',
    menuManagement: 'Menaxhim menuje', menuManagementMeta: 'Ndrysho disponueshmerine dhe cmimet',
    addItem: 'Shto artikull', itemName: 'Emri i artikullit', price: 'Cmimi', category: 'Kategoria', deleteItem: 'Fshi',
    payments: 'Pagesa', paymentsMeta: 'Fatura, rimbursime, mbyllje',
    staffAccess: 'Akses stafi', staffAccessMeta: 'Role dhe PIN',
    systemSettings: 'Cilesimet e sistemit', systemSettingsMeta: 'Gjuha, taksat, printerat',
    configuration: 'Konfigurim', language: 'Gjuha', languageMeta: 'Gjuha e nderfaqes per stafin',
    notifications: 'Njoftime', notificationsMeta: 'Sinjalizime kuzhine dhe pagese',
    restaurantProfile: 'Profili i restorantit', receiptPrinter: 'Printer fature', printerMeta: 'Printer termik i lidhur',
    currency: 'Monedha', currencyMeta: 'Monedha e parazgjedhur per fatura',
    paidReceipt: 'Fature e paguar', check: 'Fatura', vat: 'TVSH 8.1%', print: 'Printo', download: 'Shkarko',
    thankYou: 'Faleminderit qe vizituat restorantin tone!',
    order: 'Porosi', bill: 'Fature',
    burrata: 'Burrata Pugliese', carpaccio: 'Carpaccio viçi', pizza: 'Pica Margherita',
    carbonara: 'Spaghetti Carbonara', lasagna: 'Lazanje me ragu', tiramisu: 'Tiramisu klasike',
    coffee: 'Kafe', espresso: 'Espresso', sparklingWater: 'Uje me gaz'
  }
};

const categoryKeys = {
  Antipasti: 'antipasti',
  Primi: 'primi',
  Pizze: 'pizze',
  Dolci: 'dolci',
  Drinks: 'drinks'
};

const roleKeys = {
  Waiter: 'waiter',
  Kitchen: 'kitchen',
  Admin: 'admin',
  Cashier: 'cashier'
};

const initialMenu = [
  { nameKey: 'burrata', category: 'Antipasti', price: 18, tags: ['V'], image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=80' },
  { nameKey: 'carpaccio', category: 'Antipasti', price: 24, tags: ['GF'], image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=80' },
  { nameKey: 'pizza', category: 'Pizze', price: 21, tags: ['V'], image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80' },
  { nameKey: 'carbonara', category: 'Primi', price: 26, tags: [], image: 'https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?auto=format&fit=crop&w=900&q=80' },
  { nameKey: 'lasagna', category: 'Primi', price: 29, tags: [], image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=80' },
  { nameKey: 'tiramisu', category: 'Dolci', price: 14, tags: ['V'], image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80' },
  { nameKey: 'coffee', category: 'Drinks', price: 4.5, tags: ['V'], image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80' }
];

const kitchenOrders = [
  { table: '12', time: '08:42', status: 'Firing', items: [{ qty: 2, key: 'burrata' }, { qty: 1, key: 'pizza' }, { qty: 1, key: 'tiramisu' }] },
  { table: '08', time: '06:15', status: 'Plating', items: [{ qty: 1, key: 'carbonara' }, { qty: 2, key: 'lasagna' }] },
  { table: '03', time: '03:27', status: 'Ready', items: [{ qty: 4, key: 'espresso' }, { qty: 1, key: 'sparklingWater' }] }
];

function App() {
  const [view, setView] = useState('login');
  const [role, setRole] = useState('Waiter');
  const [table, setTable] = useState('12');
  const [currency, setCurrency] = useState('CHF');
  const [language, setLanguage] = useState('EN');
  const [staffPin, setStaffPin] = useState('0000');
  const [adminPin, setAdminPin] = useState('9999');
  const [pinEntry, setPinEntry] = useState('');
  const [pinError, setPinError] = useState(false);
  const [menu, setMenu] = useState(initialMenu);
  const [order, setOrder] = useState([{ ...initialMenu[0], qty: 1 }, { ...initialMenu[2], qty: 2 }]);
  const [revenue, setRevenue] = useState(() => {
    const savedRevenue = window.localStorage.getItem('sumresto-revenue-v2');
    return savedRevenue === null ? 0 : Number(savedRevenue);
  });
  const [covers, setCovers] = useState(() => {
    const savedCovers = window.localStorage.getItem('sumresto-covers-v2');
    return savedCovers === null ? 0 : Number(savedCovers);
  });
  const [tickets, setTickets] = useState(kitchenOrders);
  const [orderNotice, setOrderNotice] = useState('');

  const total = useMemo(() => order.reduce((sum, item) => sum + item.price * item.qty, 0), [order]);
  const money = (amount) => `${currency} ${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const t = (key) => translations[language]?.[key] ?? translations.EN[key] ?? key;

  useEffect(() => {
    window.localStorage.setItem('sumresto-revenue-v2', String(revenue));
  }, [revenue]);

  useEffect(() => {
    window.localStorage.setItem('sumresto-covers-v2', String(covers));
  }, [covers]);

  const addItem = (dish) => {
    setOrder((items) => {
      const existing = items.find((item) => item.nameKey === dish.nameKey);
      if (existing) return items.map((item) => item.nameKey === dish.nameKey ? { ...item, qty: item.qty + 1 } : item);
      return [...items, { ...dish, qty: 1 }];
    });
  };

  const updateQty = (nameKey, delta) => {
    setOrder((items) => items
      .map((item) => item.nameKey === nameKey ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
      .filter((item) => item.qty > 0));
  };

  const updateMenuPrice = (nameKey, price) => {
    const nextPrice = Math.max(0, Number(price) || 0);
    setMenu((items) => items.map((item) => item.nameKey === nameKey ? { ...item, price: nextPrice } : item));
    setOrder((items) => items.map((item) => item.nameKey === nameKey ? { ...item, price: nextPrice } : item));
  };

  const addMenuItem = (item) => {
    const name = item.name.trim();
    if (!name) return;
    const nameKey = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `item-${Date.now()}`;
    const uniqueKey = menu.some((dish) => dish.nameKey === nameKey) ? `${nameKey}-${Date.now()}` : nameKey;
    setMenu((items) => [
      ...items,
      {
        nameKey: uniqueKey,
        displayName: name,
        category: item.category,
        price: Math.max(0, Number(item.price) || 0),
        tags: [],
        image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80'
      }
    ]);
  };

  const deleteMenuItem = (nameKey) => {
    setMenu((items) => items.filter((item) => item.nameKey !== nameKey));
    setOrder((items) => items.filter((item) => item.nameKey !== nameKey));
  };

  const advanceTicket = (table) => {
    const nextStatus = { Firing: 'Plating', Plating: 'Ready', Ready: 'Served' };
    setTickets((currentTickets) => currentTickets
      .map((ticket) => ticket.table === table ? { ...ticket, status: nextStatus[ticket.status] ?? ticket.status } : ticket)
      .filter((ticket) => ticket.status !== 'Served'));
  };

  const sendOrderToKitchen = () => {
    if (order.length === 0) return;
    setTickets((currentTickets) => [
      {
        table,
        time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        status: 'Firing',
        items: order.map((item) => ({ qty: item.qty, key: item.nameKey, displayName: item.displayName }))
      },
      ...currentTickets
    ]);
    setOrder([]);
    setOrderNotice('sentToKitchen');
  };

  const enterStation = () => {
    const requiredPin = role === 'Admin' ? adminPin : staffPin;
    if (pinEntry !== requiredPin) {
      setPinError(true);
      return;
    }
    setPinError(false);
    setPinEntry('');
    setView(role === 'Kitchen' ? 'kitchen' : role === 'Admin' ? 'admin' : 'order');
  };

  return (
    <main className="app-shell">
      {view !== 'login' && <TopBar role={role} setView={setView} t={t} />}
      <section className={view === 'login' ? 'screen login-screen' : 'screen'}>
        {view === 'login' && <Login role={role} setRole={setRole} enter={enterStation} t={t} pinEntry={pinEntry} setPinEntry={setPinEntry} pinError={pinError} />}
        {view === 'order' && <OrderView table={table} setTable={setTable} menu={menu} order={order} total={total} addItem={addItem} updateQty={updateQty} sendOrderToKitchen={sendOrderToKitchen} orderNotice={orderNotice} setOrderNotice={setOrderNotice} setView={setView} money={money} t={t} />}
        {view === 'kitchen' && <KitchenView tickets={tickets} advanceTicket={advanceTicket} t={t} />}
        {view === 'admin' && <AdminView setView={setView} menu={menu} updateMenuPrice={updateMenuPrice} addMenuItem={addMenuItem} deleteMenuItem={deleteMenuItem} revenue={revenue} resetRevenue={() => setRevenue(0)} covers={covers} resetCovers={() => setCovers(0)} money={money} t={t} />}
        {view === 'settings' && <SettingsView currency={currency} setCurrency={setCurrency} language={language} setLanguage={setLanguage} staffPin={staffPin} setStaffPin={setStaffPin} adminPin={adminPin} setAdminPin={setAdminPin} t={t} />}
        {view === 'receipt' && <ReceiptView table={table} order={order} total={total} money={money} t={t} />}
      </section>
      {view !== 'login' && <BottomNav view={view} setView={setView} setRole={setRole} role={role} t={t} />}
    </main>
  );
}

function Login({ role, setRole, enter, t, pinEntry, setPinEntry, pinError }) {
  return (
    <>
      <div className="brand-mark"><Utensils size={30} /></div>
      <p className="eyebrow">{t('premiumConsole')}</p>
      <h1>SumResto</h1>
      <p className="login-copy">{t('loginCopy')}</p>
      <div className="role-grid">
        {[
          ['Waiter', Utensils],
          ['Kitchen', ChefHat],
          ['Admin', LayoutDashboard],
          ['Cashier', ReceiptText]
        ].map(([name, Icon]) => (
          <button key={name} className={role === name ? 'role-card active' : 'role-card'} onClick={() => setRole(name)}>
            <Icon size={28} />
            <span>{t(roleKeys[name])}</span>
          </button>
        ))}
      </div>
      <label className="pin-field">
        <span>{role === 'Admin' ? t('adminPin') : t('staffPin')}</span>
        <input
          inputMode="numeric"
          type="password"
          value={pinEntry}
          onChange={(event) => setPinEntry(event.target.value)}
          autoComplete="off"
        />
        {pinError && <small className="field-error">{t('invalidPin')}</small>}
      </label>
      <button className="primary-action" onClick={enter}><LogIn size={20} /> {t('enterStation')}</button>
    </>
  );
}

function TopBar({ role, setView, t }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">SumResto</p>
        <strong>{t(roleKeys[role])} {t('station')}</strong>
      </div>
      <button className="icon-button" onClick={() => setView('settings')} aria-label={t('systemSettings')}><Settings size={22} /></button>
    </header>
  );
}

function OrderView({ table, setTable, menu, order, total, addItem, updateQty, sendOrderToKitchen, orderNotice, setOrderNotice, setView, money, t }) {
  return (
    <div className="order-layout">
      <div className="menu-pane">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('tableOrdering')}</p>
            <h2>{t('menuSelection')}</h2>
          </div>
          <select value={table} onChange={(e) => setTable(e.target.value)}>
            {['03', '08', '12', '21'].map((num) => <option key={num}> {num}</option>)}
          </select>
        </div>
        <div className="category-row">
          {['all', 'antipasti', 'primi', 'pizze', 'dolci', 'drinks'].map((cat) => <button key={cat}>{t(cat)}</button>)}
        </div>
        <div className="dish-grid">
          {menu.map((dish) => (
            <button className="dish-card" key={dish.nameKey} onClick={() => { addItem(dish); setOrderNotice(''); }}>
              <img src={dish.image} alt="" />
              <div>
                <span>{t(categoryKeys[dish.category])}</span>
                <strong>{dish.displayName ?? t(dish.nameKey)}</strong>
                <p>{money(dish.price)}</p>
              </div>
              <Plus className="dish-plus" size={22} />
            </button>
          ))}
        </div>
      </div>
      <aside className="order-panel">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">{t('currentCheck')}</p>
            <h2>{t('table')} {table}</h2>
          </div>
          <ShoppingBasket color="var(--primary)" />
        </div>
        <div className="order-lines">
          {order.map((item) => (
            <div className="order-line" key={item.nameKey}>
              <div>
                <strong>{item.displayName ?? t(item.nameKey)}</strong>
                <span>{money(item.price)}</span>
              </div>
              <div className="qty">
                <button onClick={() => updateQty(item.nameKey, -1)}><Minus size={16} /></button>
                <b>{item.qty}</b>
                <button onClick={() => updateQty(item.nameKey, 1)}><Plus size={16} /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="total-row"><span>{t('total')}</span><strong>{money(total)}</strong></div>
        {orderNotice && <p className="order-notice">{t(orderNotice)}</p>}
        <button className="primary-action" type="button" onClick={sendOrderToKitchen} disabled={order.length === 0}><ChefHat size={20} /> {t('sendToKitchen')}</button>
        <button className="secondary-action" onClick={() => setView('receipt')}><ReceiptText size={20} /> {t('finalBill')}</button>
      </aside>
    </div>
  );
}

function KitchenView({ tickets, advanceTicket, t }) {
  return (
    <div className="stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('liveFireBoard')}</p>
          <h2>{t('kitchenOrders')}</h2>
        </div>
        <span className="live-pill"><Bell size={16} /> {tickets.length} {t('active')}</span>
      </div>
      <div className="kitchen-grid">
        {tickets.map((ticket) => (
          <article className={`ticket ${ticket.status.toLowerCase()}`} key={ticket.table}>
            <div className="ticket-head"><span>{t('table')}</span><b>{ticket.table}</b></div>
            <p><Clock3 size={16} /> {ticket.time}</p>
            <ul>{ticket.items.map((item) => <li key={item.key}>{item.qty} {item.displayName ?? t(item.key)}</li>)}</ul>
            <button className="secondary-action" type="button" onClick={() => advanceTicket(ticket.table)}>{t(ticket.status.toLowerCase())}</button>
          </article>
        ))}
      </div>
    </div>
  );
}

function AdminView({ setView, menu, updateMenuPrice, addMenuItem, deleteMenuItem, revenue, resetRevenue, covers, resetCovers, money, t }) {
  const [newItem, setNewItem] = useState({ name: '', price: '', category: 'Primi' });

  return (
    <div className="stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('management')}</p>
          <h2>{t('today')}</h2>
        </div>
      </div>
      <div className="stats-grid">
        <Stat icon={DollarSign} label={t('revenue')} value={money(revenue)} action={<button className="stat-action" type="button" onClick={resetRevenue}>{t('resetRevenue')}</button>} />
        <Stat icon={UsersRound} label={t('covers')} value={covers} action={<button className="stat-action" type="button" onClick={resetCovers}>{t('resetCovers')}</button>} />
        <Stat icon={ChefHat} label={t('kitchenTime')} value="9m" />
      </div>
      <div className="admin-list">
        {[
          ['menuManagement', Utensils, 'menuManagementMeta', 'order'],
          ['payments', CreditCard, 'paymentsMeta', 'receipt'],
          ['staffAccess', UsersRound, 'staffAccessMeta', 'settings'],
          ['systemSettings', Settings, 'systemSettingsMeta', 'settings']
        ].map(([titleKey, Icon, metaKey, target]) => (
          <button className="admin-row" key={titleKey} onClick={() => setView(target)}>
            <Icon size={24} />
            <span><strong>{t(titleKey)}</strong><small>{t(metaKey)}</small></span>
            <ChevronRight />
          </button>
        ))}
      </div>
      <section className="menu-editor">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">{t('menuManagement')}</p>
            <h2>{t('menuSelection')}</h2>
          </div>
        </div>
        <div className="menu-edit-list">
          {menu.map((dish) => (
            <article className="menu-edit-row" key={dish.nameKey}>
              <div>
                <strong>{dish.displayName ?? t(dish.nameKey)}</strong>
                <small>{t(categoryKeys[dish.category])}</small>
              </div>
              <label>
                <span>{t('price')}</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={dish.price}
                  onChange={(event) => updateMenuPrice(dish.nameKey, event.target.value)}
                />
              </label>
              <button className="danger-button" type="button" onClick={() => deleteMenuItem(dish.nameKey)} aria-label={`${t('deleteItem')} ${dish.displayName ?? t(dish.nameKey)}`}>
                <Trash2 size={18} />
              </button>
            </article>
          ))}
        </div>
        <div className="add-menu-form">
          <label>
            <span>{t('itemName')}</span>
            <input value={newItem.name} onChange={(event) => setNewItem({ ...newItem, name: event.target.value })} />
          </label>
          <label>
            <span>{t('price')}</span>
            <input type="number" min="0" step="0.01" value={newItem.price} onChange={(event) => setNewItem({ ...newItem, price: event.target.value })} />
          </label>
          <label>
            <span>{t('category')}</span>
            <select value={newItem.category} onChange={(event) => setNewItem({ ...newItem, category: event.target.value })}>
              {Object.keys(categoryKeys).map((category) => <option key={category} value={category}>{t(categoryKeys[category])}</option>)}
            </select>
          </label>
          <button
            className="primary-action"
            type="button"
            onClick={() => {
              addMenuItem(newItem);
              setNewItem({ name: '', price: '', category: 'Primi' });
            }}
          >
            <Plus size={18} /> {t('addItem')}
          </button>
        </div>
      </section>
    </div>
  );
}

function Stat({ icon: Icon, label, value, action }) {
  return <article className="stat"><Icon size={22} /><span>{label}</span><strong>{value}</strong>{action}</article>;
}

function SettingsView({ currency, setCurrency, language, setLanguage, staffPin, setStaffPin, adminPin, setAdminPin, t }) {
  return (
    <div className="stack narrow">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('configuration')}</p>
          <h2>{t('systemSettings')}</h2>
        </div>
      </div>
      <label className="setting-row">
        <Globe2 size={24} />
        <span><strong>{t('language')}</strong><small>{t('languageMeta')}</small></span>
        <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t('language')}>
          <option value="EN">EN</option>
          <option value="DE">DE</option>
          <option value="FR">FR</option>
          <option value="IT">IT</option>
          <option value="TR">TR</option>
          <option value="AL">AL</option>
        </select>
      </label>
      <label className="setting-row">
        <UsersRound size={24} />
        <span><strong>{t('staffPin')}</strong><small>{t('staffPinMeta')}</small></span>
        <input
          className="setting-pin-input"
          inputMode="numeric"
          type="password"
          value={staffPin}
          onChange={(event) => setStaffPin(event.target.value)}
          autoComplete="new-password"
        />
      </label>
      <label className="setting-row">
        <LayoutDashboard size={24} />
        <span><strong>{t('adminPin')}</strong><small>{t('adminPinMeta')}</small></span>
        <input
          className="setting-pin-input"
          inputMode="numeric"
          type="password"
          value={adminPin}
          onChange={(event) => setAdminPin(event.target.value)}
          autoComplete="new-password"
        />
      </label>
      {[
        [Bell, 'notifications', 'notificationsMeta'],
        [Store, 'restaurantProfile', 'Sprezzatura Elite'],
        [Printer, 'receiptPrinter', 'printerMeta']
      ].map(([Icon, titleKey, bodyKey]) => (
        <label className="setting-row" key={titleKey}>
          <Icon size={24} />
          <span><strong>{t(titleKey)}</strong><small>{bodyKey === 'Sprezzatura Elite' ? bodyKey : t(bodyKey)}</small></span>
          <input type="checkbox" defaultChecked />
        </label>
      ))}
      <label className="setting-row">
        <CreditCard size={24} />
        <span><strong>{t('currency')}</strong><small>{t('currencyMeta')}</small></span>
        <select value={currency} onChange={(event) => setCurrency(event.target.value)} aria-label={t('currency')}>
          <option value="CHF">CHF</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </label>
    </div>
  );
}

function ReceiptView({ table, order, total, money, t }) {
  const tax = Math.round(total * 0.081);
  return (
    <div className="receipt-wrap">
      <article className="receipt">
        <p className="eyebrow">{t('paidReceipt')}</p>
        <h2>SumResto</h2>
        <address className="receipt-address">
          Rigakerstrassee 100, Wohlen 5610<br />
          Tel No. +41XXXXXXXXX
        </address>
        <div className="receipt-meta"><span>{t('table')} {table}</span><span>{t('check')} #0428</span></div>
        {order.map((item) => (
          <div className="receipt-line" key={item.nameKey}><span>{item.qty}x {item.displayName ?? t(item.nameKey)}</span><b>{money(item.price * item.qty)}</b></div>
        ))}
        <div className="receipt-line muted"><span>{t('vat')}</span><b>{money(tax)}</b></div>
        <div className="receipt-total"><span>{t('total')}</span><strong>{money(total + tax)}</strong></div>
        <p className="receipt-thanks">{t('thankYou')}</p>
      </article>
      <div className="receipt-actions">
        <button className="primary-action"><Printer size={20} /> {t('print')}</button>
        <button className="secondary-action"><Download size={20} /> {t('download')}</button>
      </div>
    </div>
  );
}

function BottomNav({ view, setView, setRole, role, t }) {
  const items = [
    ['order', Utensils, 'order'],
    ['kitchen', ChefHat, 'kitchen'],
    ['admin', LayoutDashboard, 'admin'],
    ['receipt', ReceiptText, 'bill']
  ];
  return (
    <nav className="bottom-nav">
      {items.map(([id, Icon, label]) => (
        <button
          key={id}
          className={view === id ? 'active' : ''}
          onClick={() => {
            if (id === 'admin' && role !== 'Admin') {
              setRole('Admin');
              setView('login');
              return;
            }
            setView(id);
          }}
        >
          <Icon size={22} />
          <span>{t(label)}</span>
        </button>
      ))}
    </nav>
  );
}

createRoot(document.getElementById('root')).render(<App />);
