import React, { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Trophy, ChevronRight, CheckCircle2, MessageCircle, ExternalLink, ShoppingCart, Award, Settings, Layers, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Product } from './types';

// Data definitions with high-performance photos and Mercado Livre store links
const products: Product[] = [
  {
    id: 'kit-futevolei',
    name: 'Futsangão',
    description: 'Diversão para toda a família em qualquer lugar! O Futsangão é a solução prática e completa para quem quer jogar futevôlei e vôlei com facilidade e rapidez. Leve, portátil e resistente, ele transforma qualquer espaço em uma quadra de diversão.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/v1779913122/D_NQ_NP_2X_673951-MLB84788106224_052025-F-redinha-futsango-para-futevlei_ivno3u.webp',
    mlUrl: 'https://produto.mercadolivre.com.br/MLB-5483916920-redinha-futsango-para-futevlei-_JM?searchVariation=188889741825&pdp_filters=official_store%3A332702#polycard_client=search-desktop&be_origin=backend&searchVariation=188889741825&search_layout=grid&position=4&type=item&tracking_id=6ce2895e-18d0-4f7d-9a41-305cc4d68e23',
    category: 'kits'
  },
  {
    id: 'rede-profissional',
    name: 'Rede de Futevôlei e Vôlei de Praia (4 Faixas)',
    description: 'Rede profissional oficial com costura ultra-resistente em lonas impermeáveis de alta gramatura. Cabo de aço opcional para excelente tensionamento, perfeito para qualquer clima com proteção solar anti-UV.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1779916189/D_NQ_NP_2X_730082-MLB85087239301_052025-F-rede-de-vlei-e-futevlei-simples-sango_xskkdt.webp',
    mlUrl: 'https://produto.mercadolivre.com.br/MLB-4072113561-rede-de-vlei-e-futevlei-simples-sango-_JM?searchVariation=188081520357&pdp_filters=official_store%3A332702#polycard_client=search-desktop&be_origin=backend&searchVariation=188081520357&search_layout=grid&position=2&type=item&tracking_id=808b4387-341d-4701-b450-fd306b56a12b',
    category: 'redes'
  },
  {
    id: 'fita-demarcacao',
    name: 'Fita de Demarcação para Quadra (16x8m)',
    description: 'Fitas oficiais para demarcação de quadras de areia de vôlei, futevôlei ou beach tennis. Confeccionadas em polipropileno de alta tenacidade com ilhós niquelados anti-ferrugem e pinos metálicos inclusos.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1779916189/D_NQ_NP_2X_906266-MLA109268055592_042026-F-fita-de-demarcaco-16x8-sango-redes-esportivas_tedtj5.webp',
    mlUrl: 'https://produto.mercadolivre.com.br/MLB-4068166425-fita-de-demarcaco-16x8-sango-redes-esportivas-_JM?searchVariation=188040064075&pdp_filters=official_store%3A332702#polycard_client=search-desktop&be_origin=backend&searchVariation=188040064075&search_layout=grid&position=5&type=item&tracking_id=907ecb65-7350-4f49-a1f5-2a9905c6cf8e',
    category: 'acessorios'
  },
  {
    id: 'mastro-regulavel',
    name: 'Postes / Mastro Regulável Copa em Aço',
    description: 'Postes robustos profissionais para vôlei e futevôlei de areia. Possuem sistema inovador e prático de regulagem de altura por trilho deslizante para ajuste preciso das modalidades, pintados com tinta eletrostática epóxi.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1780401172/10_npbvtz.png',
    mlUrl: 'https://wa.me/554896818147?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+Postes+Mastro+Regul%C3%A1vel+Copa+em+A%C3%A7o%21',
    category: 'kits'
  },
  {
    id: 'par-antenas',
    name: 'Par de Antenas de Fibra de Vidros Oficial',
    description: 'Par de antenas oficiais flexíveis para demarcação de rede. Confeccionadas em fibra de vidro flexível e resistente, acompanhadas por capas protetoras de alta resistência de fixação rápida em qualquer rede esportiva.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1779915466/vara_twm8e5.webp',
    mlUrl: 'https://www.mercadolivre.com.br/par-de-antenas-para-volei-e-futevolei--fibra-de-vidro/up/MLBU3188945843?pdp_filters=official_store%3A332702#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=7&type=product&tracking_id=49da3447-88b9-4871-bf6e-17319183a959&wid=MLB5401137750&sid=search',
    category: 'acessorios'
  },
  {
    id: 'rede-protecao',
    name: 'Redes de Proteção para Arenas e Quadras',
    description: 'Redes de contenção de altíssima resistência produzidas em fios de Polietileno (PE) virgem de alta densidade 100% Nylon com tratamento anti-UV. Sob medida para fechamento lateral, fundos e teto de quadras esportivas.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1779915466/rededeprotecao_aczfwe.webp',
    mlUrl: 'https://wa.me/554896818147?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+Redes+de+Prote%C3%A7%C3%A3o+para+Arenas+e+Quadras%21',
    category: 'personalizadas'
  },
  {
    id: 're-personalizada',
    name: 'Redes Esportivas Personalizadas',
    description: 'Exclusividade para sua Arena ou Clube! Fabricação sob medida com a inserção de logomarcas, faixas personalizadas com as cores do seu evento, torneio ou patrocinador. Alta definição e costura industrial.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1780400597/Captura_de_tela_2026-06-02_084311_obc1vj.png',
    mlUrl: 'https://wa.me/554896818147?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+Redes+Esportivas+Personalizadas%21',
    category: 'personalizadas'
  },
  {
    id: 'rede-pickleball',
    name: 'Rede de Pickleball Oficial',
    description: 'Rede oficial de Pickleball confeccionada sob rigorosas normas internacionais. Fios de alta tenacidade com tratamento anti-UV, lona superior de PVC emborrachado com costura quádrupla e cabo de aço galvanizado para estiramento perfeito.',
    imageUrl: 'https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1780400378/_128096434_gettyimages-1243628730_jjin5q.jpg',
    mlUrl: 'https://wa.me/554896818147?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+Rede+de+Pickleball+Oficial%21',
    category: 'redes'
  },
  {
    id: 'rede-padel',
    name: 'Rede de Pádel Profissional de Alta Resistência',
    description: 'Especialmente desenvolvida para arenas de Pádel. Fabricada em fios de polipropileno virgem, possui tratamento extra contra raios solares, lonas laterais protetoras e design planejado para absorver impactos sem deformação.',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=600',
    mlUrl: 'https://wa.me/554896818147?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+Rede+de+P%C3%A1del+Profissional%21',
    category: 'redes'
  }
];

export default function App() {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterStatus, setNewsletterStatus] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const heroSlides = [
    {
      badge: "DESDE 2020 • FABRICANTE NACIONAL",
      subtitle: "SANGÃO REDES ESPORTIVAS",
      title: "Construindo Redes de Campeões",
      description: "Somos especialistas consolidados em futevôlei, vôlei de praia e beach tennis. Entregamos tecnologia com cabo de aço de tensionamento rápido, triplo tratamento anti-UV e costura marítima reforçada para suportar as duras condições de quadras litorâneas.",
      imgLeft: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=700",
      imgRight: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=700",
      leftLabel: "BEACH TENNIS OFICIAL",
      rightLabel: "FUTEVÔLEI COPA PRO"
    },
    {
      badge: "ENGENHARIA COPA COSTA SUL",
      subtitle: "INFRAESTRUTURA PARA ARENAS",
      title: "Sua Quadra no Padrão do Elite",
      description: "Do mastro regulável com trilho deslizante de ajuste milimétrico rápido ao rastelo nivelador ultra-reforçado de liga metálica leve. Fornecemos kits completos e soluções de fechamento com fios de alta densidade nobres e nylon 100%.",
      imgLeft: "https://images.unsplash.com/photo-1593787406536-3676a152d9cb?auto=format&fit=crop&q=80&w=700",
      imgRight: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=700",
      leftLabel: "MODELO DE CORTE OFICIAL",
      rightLabel: "MASTRO REFORÇADO REGULÁVEL"
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterStatus(false);
      }, 4000);
    }
  };

  return (
    <div id="root-container" className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white relative">
      
      {/* Floating WhatsApp Button */}
      <a 
        id="whatsapp-floater"
        href="https://wa.me/554896818147" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-red-600 hover:bg-red-700 px-5 py-4 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:scale-105 transition-all duration-300"
        aria-label="Contato pelo WhatsApp"
      >
        <span className="font-display font-black text-[10px] uppercase tracking-widest border-r border-white/20 pr-3 hidden md:block text-white">WhatsApp de Plantão</span>
        <MessageCircle className="w-5 h-5 text-white animate-pulse" />
      </a>

      {/* Nav Header (Styled like the premium layout head) */}
      <header id="main-header" className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-black/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo with clean styling */}
          <div className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1779915533/Prancheta_1_2x_f0t4mv.png" 
              alt="Sangão Redes" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-[11px] font-display font-bold uppercase tracking-widest text-zinc-400">
            <a href="#inicio" className="px-3.5 py-2 hover:text-white hover:border-b hover:border-red-600 transition-all">INÍCIO</a>
            <span className="text-zinc-800">|</span>
            <a href="#produtos" className="px-3.5 py-2 hover:text-white hover:border-b hover:border-red-600 transition-all">PRODUTOS</a>
            <span className="text-zinc-800">|</span>
            <a href="#diferenciais" className="px-3.5 py-2 hover:text-white hover:border-b hover:border-red-600 transition-all">ENGENHARIA</a>
            <span className="text-zinc-800">|</span>
            <a href="#contato" className="px-3.5 py-2 hover:text-white hover:border-b hover:border-red-600 transition-all">CONTATO</a>
          </nav>

          {/* Right quick button */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/554896818147"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-display text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded transition-all"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>
      </header>

      {/* Hero Cover (Strict Mockup Centered Visual Style) */}
      <section id="inicio" className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center isolate overflow-hidden border-b border-zinc-900">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover md:object-contain bg-black -z-25"
          src="https://res.cloudinary.com/dyae9e66f/video/upload/v1779911621/fa%C3%A7a_anima%C3%A7%C3%A3o_comece_termine_frame_202605271631_kznlqz.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Dark overlay to ensure text contrast while making the video fully visible */}
        <div className="absolute inset-0 bg-black/50 -z-15" />
        
        {/* Dynamic golden grid line layer behind assets */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #3f3f46 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative z-10 text-center w-full">
          
          {/* Centered Large Subtitle */}
          <div className="text-zinc-500 font-display text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            SANGÃO REDES ESPORTIVAS
          </div>

          {/* Centered Display Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
            A rede liga o esporte <br />
            <span className="text-red-600">ao coração</span>
          </h1>

          {/* Centered Description */}
          <p className="text-zinc-300 text-xs md:text-sm max-w-2xl leading-relaxed mb-10 px-4 font-medium">
            Especialistas em futevôlei, vôlei, beach tennis, pickleball e pádel. 
            Redes profissionais de altíssima durabilidade com triplo tratamento anti-UV e cabo de aço de tensionamento rápido de fábrica.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a 
              href="https://wa.me/554896818147" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-705 text-white font-display text-[10px] md:text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:scale-[1.02]"
            >
              <span>FAZER ORÇAMENTO</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="#produtos" 
              className="w-full sm:w-auto border border-zinc-800 hover:border-red-650 hover:bg-red-600/5 text-zinc-300 hover:text-white font-display text-[10px] md:text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-sm transition-all text-center hover:scale-[1.02]"
            >
              VER PRODUTOS
            </a>
          </div>

        </div>
      </section>

      {/* Row of 4 Core Pillars/Icons (Replicating Our Team, Awards, Coaches, Rules layout) */}
      <section id="pilares" className="px-6 py-16 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-black border border-zinc-900 hover:border-red-600 p-6 md:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-3">01. Kits de Areia</h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Soluções práticas móveis como o Futsangão e Mastros Regulantes Copas de fáceis montagens e ajustes de altura rápidos para qualquer espaço de lazer.
              </p>
            </div>
            <a href="#produtos" className="inline-flex items-center gap-1.5 font-display text-[9px] font-block uppercase tracking-widest text-red-500 hover:text-white transition-colors">
              <span>Detalhes</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-black border border-zinc-900 hover:border-red-600 p-6 md:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-3">02. Redes Oficiais</h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Fabricação de redes com modelo oficial de 4 faixas grossas impermeáveis de alta gramatura e cabo tensor extra de aço nobre opcional.
              </p>
            </div>
            <a href="#produtos" className="inline-flex items-center gap-1.5 font-display text-[9px] font-block uppercase tracking-widest text-red-500 hover:text-white transition-colors">
              <span>Detalhes</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-black border border-zinc-900 hover:border-red-600 p-6 md:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-3">03. Acabamento Real</h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Anilhas e ilhós de puro latão niquelado à prova de ferrugem, faixas costuradas com fios de alta tenacidade e proteção total ultravioleta.
              </p>
            </div>
            <a href="#diferenciais" className="inline-flex items-center gap-1.5 font-display text-[9px] font-block uppercase tracking-widest text-red-500 hover:text-white transition-colors">
              <span>Detalhes</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-black border border-zinc-900 hover:border-red-600 p-6 md:p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-3">04. Arenas de Elite</h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                Redes personalizadas com logos e cores corporativas de patrocinadores sob medida, além de grades em PE de alta contenção aérea integral.
              </p>
            </div>
            <a href="#contato" className="inline-flex items-center gap-1.5 font-display text-[9px] font-block uppercase tracking-widest text-red-500 hover:text-white transition-colors">
              <span>Detalhes</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>

      {/* Main Product Catalog Section */}
      <section id="produtos" className="px-6 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              PORTFÓLIO <span className="text-red-600">DE FÁBRICA</span>
            </h2>
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest max-w-xl mx-auto">
              Selecione as categorias e conheça nossa gama oficial de infraestruturas profissionais de areia.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto">
            {[
              { id: 'all', label: 'TODOS' },
              { id: 'redes', label: 'REDES PROFISSIONAIS' },
              { id: 'kits', label: 'KITS & MASTROS' },
              { id: 'acessorios', label: 'ACESSÓRIOS' },
              { id: 'personalizadas', label: 'SOB MEDIDA' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-3 rounded-sm text-[10px] font-display font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                    : 'bg-zinc-950 border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Layout of products */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products
              .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
              .map((product, idx) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.02 }}
                  className="bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden flex flex-col hover:border-red-600 transition-all duration-300 group shadow-md"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-900 border-b border-zinc-900">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-[8px] font-display font-black uppercase tracking-widest text-white px-2.5 py-1 rounded-sm">
                      {product.category === 'personalizadas' ? 'Sob Medida' : 'LOJA OFICIAL'}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div className="mb-6">
                      <h3 className="text-xs font-display font-black uppercase tracking-widest text-white group-hover:text-red-500 transition-colors mb-2 leading-snug line-clamp-2 min-h-[32px]">
                        {product.name}
                      </h3>
                      <p className="text-zinc-500 text-[11px] leading-relaxed line-clamp-4 min-h-[66px]">
                        {product.description}
                      </p>
                    </div>

                    {/* Button trigger */}
                    <a 
                      href={product.mlUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-zinc-900 border border-zinc-800 hover:bg-red-600 hover:border-red-600 text-white font-display text-[9px] font-black uppercase tracking-widest p-3 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {product.mlUrl.includes('wa.me') ? (
                        <>
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Solicitar Orçamento</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Ver no Mercado Livre</span>
                          <ExternalLink className="w-3" />
                        </>
                      )}
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>

        </div>
      </section>

      {/* Middle Callout Banner (Replicating "Looking for a good team? Join Our Club!") */}
      <section className="relative px-6 py-28 bg-zinc-950 border-t border-b border-zinc-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-red-500 font-mono text-[10px] uppercase tracking-widest mb-3 font-bold">PROJETOS PROFISSIONAIS E ARENAS DO BRASIL</p>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-tight text-white mb-6">
            Equipe Sua Arena com o Melhor Material e Durabilidade do Sul
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-10">
            Trabalhamos em conjunto com organizadores de torneios e federações catarinenses para entregar redes de alta tenacidade sem desgaste de maresia. Fale no canal direto da nossa gerência.
          </p>
          <a
            href="https://wa.me/554896818147"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>FALAR DIRETAMENTE COM VENDEDOR</span>
          </a>
        </div>
      </section>

      {/* Welcome / Latest News / Technical Pillars Content (Replicating exact 3-columns layout) */}
      <section id="diferenciais" className="px-6 py-24 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          
          {/* Column 1: Welcome / About */}
          <div>
            <div className="border-b border-zinc-950 pb-4 mb-8">
              <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-red-600 pl-3">DE ONDE VIEMOS</h3>
            </div>
            
            {/* Double Images side-by-side */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="aspect-square bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=300" 
                  alt="Areia Quadra" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?auto=format&fit=crop&q=80&w=300" 
                  alt="Redes Oficiais" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed mb-6">
              Sediada em Araranguá/SC, a <strong>Sangão Redes Esportivas</strong> surgiu para combater a fragilidade de redes comuns de areia expostas ao sol de alto desgaste do litoral catarinense.
            </p>
            <p className="text-zinc-500 text-[11px] leading-relaxed mb-8">
              Nosso laboratório desenvolve acabamentos marítimos e lonas grossas blindadas contra raios UV, permitindo que condomínios e arenas operem continuamente sem desgaste.
            </p>
          </div>

          {/* Column 2: Highlights/Latest News */}
          <div>
            <div className="border-b border-zinc-950 pb-4 mb-8">
              <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-red-600 pl-3">PRODUTOS EM DESTAQUE</h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  date: "CATEGORIA: KITS COMPLETOS",
                  title: "Futsangão - Prático e Versátil",
                  desc: "Mastros móveis, fitas reguladoras completas que transformam gramados, areias e espaços de quintais em arenas esportivas em segundos."
                },
                {
                  date: "CATEGORIA: REDES PRO",
                  title: "Vôlei de Praia e Futevôlei 4 Faixas",
                  desc: "Contendo faixas de selos grossos à d\'água de alta gramatura de lona, cabos de tensionamento preciso e resistência solar profissional."
                },
                {
                  date: "CATEGORIA: MANUTENÇÃO",
                  title: "Rastelo Nivelador Nível Profissional",
                  desc: "Preparador e limpador robusto de areia em liga de aço leve e pintura epóxi epoxídica de longa durabilidade sob sol e névoa."
                }
              ].map((news, idx) => (
                <div key={idx} className="border-b border-zinc-900 pb-5 last:border-0 last:pb-0">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{news.date}</div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wide text-white mb-2 hover:text-red-500 transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-zinc-550 text-[11px] leading-relaxed line-clamp-3">
                    {news.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4">
              <a 
                href="#produtos" 
                className="inline-flex items-center gap-1.5 font-display text-[9px] font-black uppercase tracking-widest text-red-500 hover:text-white transition-colors"
              >
                <span>VER TODO PORTFÓLIO DE PRODUTOS</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Technical Pillars/Pillars List (What we do) */}
          <div>
            <div className="border-b border-zinc-950 pb-4 mb-8">
              <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-red-600 pl-3">DIFERENCIAIS TÉCNICOS</h3>
            </div>

            <div className="space-y-6">
              
              {/* Item 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden shrink-0 flex items-center justify-center text-red-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[10px] uppercase tracking-wider text-white mb-1">PROTEÇÃO MÁXIMA ANTI-UV</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">
                    Tratamento nobre no polietileno virgem e filamentos contra a radiação ultravioleta severa, garantindo no mínimo de 2 a 3 anos a mais de vida útil sob sol pleno do litoral catarinense.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden shrink-0 flex items-center justify-center text-red-500">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[10px] uppercase tracking-wider text-white mb-1">ILHÓS E ARGOLAS ANTIMARÍTIMAS</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">
                    Argolas e ilhoses fabricados de puro niquelamento em latão, prevenindo que a salinidade e a umidade constante corroam ou oxidem os pontos chaves de tensionamento.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden shrink-0 flex items-center justify-center text-red-500">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[10px] uppercase tracking-wider text-white mb-1">LIGA E REVESTIMENTO SÓLIDO</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">
                    Mastros, pinos e estruturas em aço com cobertura eletrostática de pó de poliéster de cura (Tinta Epóxi), eliminando riscos de desbotamento das cores e oxidação rápida.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden shrink-0 flex items-center justify-center text-red-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-black text-[10px] uppercase tracking-wider text-white mb-1">GARANTIA INTEGRAL DE REFORÇO</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">
                    Oferecemos de 3 a 6 meses de garantia contra defeitos reais físicos de fabricação direto, reforçando a seriedade em cada linha tecida e soldada.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* Leads / Budget Request Contact Form Area */}
      <section id="contato" className="px-6 py-24 bg-black">
        <div className="max-w-3xl mx-auto">
          
          {/* Contact Details Side */}
          <div className="flex flex-col items-center text-center">
            <div className="border-b border-zinc-900 pb-4 mb-8 w-full max-w-sm">
              <span className="text-red-500 font-mono text-[9px] font-black uppercase tracking-widest block">SANGÃO ATENDIMENTO</span>
              <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-l-2 border-red-600 pl-3 mt-1 inline-block">INFORMAÇÕES COMERCIAIS</h3>
            </div>
            
            <div className="space-y-8 w-full max-w-md flex flex-col items-center">
              
              {/* Contact phone */}
              <div className="flex gap-4 items-center text-left w-full justify-center">
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-900 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div className="min-w-[200px]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">WHATSAPP VENDAS</span>
                  <a href="https://wa.me/554896818147" target="_blank" rel="noopener noreferrer" className="text-lg font-display font-black text-white hover:text-red-500 transition-colors">+55 48 9681-8147</a>
                </div>
              </div>

              {/* Contact email */}
              <div className="flex gap-4 items-center text-left w-full justify-center">
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-900 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-[200px]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">SECRETARIA GERAL / MKT</span>
                  <a href="mailto:sangaoredes.mkt@gmail.com" className="text-lg font-display font-black text-white hover:text-red-500 transition-colors">sangaoredes.mkt@gmail.com</a>
                </div>
              </div>

              {/* Local */}
              <div className="flex gap-4 items-center text-left w-full justify-center">
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-900 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-[200px]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">FÁBRICA MATRIZ</span>
                  <p className="text-lg font-display font-black text-white">Araranguá, SC • Costa Sul</p>
                </div>
              </div>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm mt-12 max-w-xl">
              <div className="text-[11px] leading-relaxed text-zinc-400">
                <strong>Vendas no Mercado Livre:</strong> Nós somos um dos maiores fornecedores oficiais de rede de praia no país com medalha de Lojas Certificadas e entregas imediatas com seguro de fábrica integral.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sponsors Row (Replicating Coke, Nike, Ford, citytv visual aligned layout) */}
      <section className="px-6 py-14 bg-zinc-950 border-t border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-zinc-650 font-mono text-[9px] uppercase tracking-widest block">SELO DE QUALIDADE E MARCAS PARCEIRAS</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-50 transition-opacity">
            <span className="font-display font-black text-zinc-400 text-sm tracking-widest leading-none border border-zinc-800 px-4 py-2 uppercase">MERCADO LIVRE</span>
            <span className="font-display font-black text-zinc-400 text-sm tracking-widest leading-none border border-zinc-800 px-4 py-2 uppercase">FUTEBOL SUL SC</span>
            <span className="font-display font-black text-zinc-400 text-sm tracking-widest leading-none border border-zinc-800 px-4 py-2 uppercase">BEACH CATARINA</span>
            <span className="font-display font-black text-zinc-400 text-sm tracking-widest leading-none border border-zinc-800 px-4 py-2 uppercase">ARENA ARARANGUÁ</span>
          </div>
        </div>
      </section>

      {/* Rich Footer styled like mockup with central capture and separator indices */}
      <footer className="px-6 pt-20 pb-12 bg-black border-t border-zinc-950">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-3 gap-12 pb-16 border-b border-zinc-900 items-start">
            
            {/* Left Col: Emblem */}
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dyae9e66f/image/upload/q_auto/f_auto/v1779915533/Prancheta_1_2x_f0t4mv.png" 
                alt="Sangão Redes" 
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Central Col: Search/Inquiry sign up (mockup visual detail matching image) */}
            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-4 text-center lg:text-left font-bold">RECEBA NOVIDADES E LOTES COMPANHIAS</span>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5 justify-center lg:justify-start">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Seu E-mail Corporativo" 
                  required
                  className="bg-zinc-950 border border-zinc-900 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-red-650 min-w-[200px] placeholder:text-zinc-700"
                />
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 text-white font-display text-[9px] font-black uppercase tracking-widest px-4 py-3 rounded-sm transition-all cursor-pointer"
                >
                  CADASTRAR
                </button>
              </form>
              {newsletterStatus && (
                <span className="text-[9px] text-green-500 font-mono mt-2 block text-center lg:text-left">E-mail registrado com sucesso!</span>
              )}
            </div>

            {/* Right Col: Navigation Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-display font-bold uppercase tracking-widest text-zinc-500 justify-center lg:justify-end">
              <a href="#inicio" className="hover:text-red-500 transition-colors">Início</a>
              <span className="text-zinc-800">/</span>
              <a href="#produtos" className="hover:text-red-500 transition-colors">Produtos</a>
              <span className="text-zinc-800">/</span>
              <a href="#diferenciais" className="hover:text-red-500 transition-colors">Engenharia</a>
              <span className="text-zinc-800">/</span>
              <a href="#apoio" className="hover:text-red-500 transition-colors">Apoio Esportivo</a>
              <span className="text-zinc-800">/</span>
              <a href="#contato" className="hover:text-red-500 transition-colors">Fale de Fábrica</a>
            </div>

          </div>

          {/* Under Footer Metadata and CNPJ */}
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-650 text-center gap-4">
            <p className="text-zinc-500">
              CNPJ 36.208.029/0001-00 • SANGÃO REDES ESPORTIVAS SUL DE SC
            </p>
            <div className="flex items-center gap-6 text-zinc-500">
              <p>© 2026 TODOS DIREITOS RESERVADOS SANGÃO</p>
              <span className="text-red-600 font-bold">•</span>
              <p className="text-white">ARARANGUÁ / SC</p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
