/* ==========================================================================
   Minimalist Portfolio Core Logic & i18n Engine - emirceran23.github.io
   ========================================================================== */

// --- i18n Translation Dictionaries ---
const UI_TEXT = {
    en: {
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        navBack: "← Back to Showcase",
        heroTitle: "Engineering high-performance <span class=\"gradient-text\">low-latency & AI</span> systems.",
        heroDesc: "Specializing in Edge AI, Computer Vision, Multi-Agent LLM Orchestration, and Systems Programming. Building high-efficiency, reliable, and scalable software architectures.",
        heroCtaProjects: "Explore Projects",
        heroCtaGithub: "GitHub Profile",
        showcaseTitle: "Showcase",
        filterAll: "All Projects",
        filterSystems: "Systems Programming",
        filterEmbedded: "Embedded Systems",
        filterAi: "AI & Agentic Systems",
        searchPlaceholder: "Search projects...",
        viewDetails: "View Details",
        noProjects: "No projects match your search or filter criteria.",
        timeline: "Timeline",
        keyOutcome: "Key Outcome & Metrics",
        repoStatus: "Repository Status",
        statusPrivate: "🔒 Private Project",
        statusOpen: "🌐 Open Source",
        overviewHeader: "Project Overview",
        architectureHeader: "System Architecture & Layer Breakdown",
        featuresHeader: "Technical Feature & Keyword Mapping",
        galleryHeader: "Application Screenshots & Interface Showcase",
        technologiesHeader: "Technologies & Tools",
        viewSource: "View Source Repository",
        appStoreBtn: "View on App Store",
        playStoreBtn: "Google Play Store",
        privateBadge: "Private Enterprise Repository (Proprietary IP)",
        copyright: "&copy; 2026 Mustafa Emir Ceran",
        aboutTitle: "About Me",
        aboutTagline: "Computer Engineering Student & R&D Engineer",
        aboutBioHeading: "Biography",
        aboutBioText: "Computer Engineering student at Gazi University with professional experience in Health Technologies (HealthTech) and Defense Technologies. Specializing in integrating deep learning models (YOLO, MediaPipe) into Unity and real-time mobile/web applications, with a strong focus on Edge AI, Computer Vision, Multi-Agent LLM Orchestration, and Systems Programming. Dedicated to engineering robust, low-latency, and scalable systems.",
        aboutExpHeading: "Professional Experience",
        roleHavelsan: "Intern — New Technologies Team",
        descHavelsan: "Engineered two high-performance defense R&D software architectures: 1) HALP LabelVoice Cockpit Voice Analytics — Cockpit STT pipeline with VibeVoice & WavLM speaker diarization (PF/PM/ATC), multi-GPU (H100/H200) acoustic drift compensation, and an immutable PostgreSQL Git-style commit versioning engine. 2) HALP Garmin BLE Telemetry System — A raw HCI BLE driver (bypassing Windows WinRT via libusb & Zadig on Realtek RTL8761BU) streaming 25Hz bio-data with Connect IQ packet parsers.",
        roleItems: "Software Development Specialist",
        descItems: "Engineered a unified Unity diagnostic application for strabismus detection across iOS, Android, macOS, and Windows. Developed custom Kotlin/Camera2 & iOS native camera plugins, built real-time head pose/distance estimation algorithms, created a 8.6k sample eye image dataset, trained a YOLOv11 semantic segmentation model (F1 score 0.93), and designed scalable PostgreSQL database backend APIs. Presented technical infrastructure at TÜBİTAK project defenses.",
        roleGaziAi: "Vice Chair of Education & Projects Committee",
        descGaziAi: "Led student AI initiatives and project workshops. Showcased AI event projects utilizing Unity ML-Agents for reinforcement learning applications.",
        aboutEduHeading: "Education",
        degreeGazi: "B.S. in Computer Engineering (Expected Graduation: 2027)",
        gpaGazi: "GPA: 3.36 / 4.00",
        degreeAgu: "B.S. in Computer Engineering (1st Year, Lateral Transfer)",
        gpaAgu: "GPA: 3.57 / 4.00",
        schoolHigh: "Konya Tahir Büyükkörükçü Anadolu İmam Hatip Lisesi",
        degreeHigh: "Anadolu İmam Hatip School",
        extraHigh: "Received intensive Arabic prep education and qualified for immersion study at Ewan Institute in Amman, Jordan.",
        aboutSkillsHeading: "Technical Skills & Domain Expertise",
        skillCatLang: "Programming Languages",
        skillCatAi: "Artificial Intelligence & LLM",
        skillCatBackend: "Backend, Cloud & Databases",
        skillCatMobile: "Mobile, Edge AI & Game Engines",
        aboutLangTitle: "Spoken Languages & Certs",
        badgeTr: "Native",
        badgeDe: "C1 (Goethe-Zertifikat)",
        badgeEn: "C1 (YÖKDİL: 95)",
        badgeAr: "Intermediate",
        contactTitle: "Let's Connect",
        contactDesc: "Interested in collaboration, engineering discussions, or research opportunities in Edge AI, Computer Vision, and Systems Development? Feel free to reach out directly!",
        contactEmailBtn: "Send Email",
        contactLinkedinBtn: "LinkedIn Profile"
    },
    tr: {
        navProjects: "Projeler",
        navAbout: "Hakkımda",
        navContact: "İletişim",
        navBack: "← Portföye Dön",
        heroTitle: "Yüksek performanslı <span class=\"gradient-text\">düşük gecikmeli ve YZ</span> sistemleri geliştiriyorum.",
        heroDesc: "Edge AI, Bilgisayarlı Görü, Çoklu Ajanlı LLM Mimarileri ve Sistem Programlama konularında uzmanlaşıyorum. Yüksek verimli, güvenilir ve ölçeklenebilir yazılım altyapıları inşa ediyorum.",
        heroCtaProjects: "Projeleri İncele",
        heroCtaGithub: "GitHub Profilim",
        showcaseTitle: "Projeler",
        filterAll: "Tüm Projeler",
        filterSystems: "Sistem Programlama",
        filterEmbedded: "Gömülü Sistemler",
        filterAi: "Yapay Zeka & Ajan Sistemleri",
        searchPlaceholder: "Proje ara...",
        viewDetails: "Detayları Gör",
        noProjects: "Arama veya filtreleme kriterlerinize uygun proje bulunamadı.",
        timeline: "Zaman Çizelgesi",
        keyOutcome: "Temel Başarı & Metrikler",
        repoStatus: "Depo Durumu",
        statusPrivate: "🔒 Özel Proje",
        statusOpen: "🌐 Açık Kaynak",
        overviewHeader: "Proje Genel Bakışı",
        architectureHeader: "Sistem Mimarisi & Katman Detayları",
        featuresHeader: "Teknik Özellikler & Anahtar Kelime Eşleştirmesi",
        galleryHeader: "Uygulama Ekran Görüntüleri & Arayüz Galerisi",
        technologiesHeader: "Teknolojiler & Araçlar",
        viewSource: "Kaynak Kodu Görüntüle",
        appStoreBtn: "App Store'da İncele",
        playStoreBtn: "Google Play Store",
        privateBadge: "Özel Kurumsal Depo (Telifli Fikri Mülkiyet)",
        copyright: "&copy; 2026 Mustafa Emir Ceran",
        aboutTitle: "Hakkımda",
        aboutTagline: "Bilgisayar Mühendisliği Öğrencisi & Ar-Ge Yazılım Mühendisi",
        aboutBioHeading: "Biyografi",
        aboutBioText: "Gazi Üniversitesi Bilgisayar Mühendisliği öğrencisi. Sağlık Teknolojileri (HealthTech) ve Savunma Sanayii alanında profesyonel Ar-Ge deneyimine sahibim. Derin öğrenme modellerinin (YOLO, MediaPipe) Unity, mobil ve web uygulamalarına entegrasyonu; Edge AI, Bilgisayarlı Görü (Computer Vision), Çoklu Ajanlı LLM Mimarileri ve Sistem Programlama konularında uzmanlaşıyorum. Verimli, düşük gecikmeli ve ölçeklenebilir sistemler inşa etmeye odaklanıyorum.",
        aboutExpHeading: "Profesyonel Deneyim",
        roleHavelsan: "Stajyer — Yeni Teknolojiler Takımı",
        descHavelsan: "HAVELSAN Yeni Teknolojiler Takımı bünyesinde iki yüksek performanslı savunma Ar-Ge yazılım mimarisi geliştirdi: 1) HALP LabelVoice Kokpit Ses Analitiği — VibeVoice STT, WavLM konuşmacı rol ayrıştırma (PF/PM/ATC), çoklu GPU (H100/H200) ses işleme hattı ve veri kaybını önleyen PostgreSQL Git-tarzı değiştirilemez commit motoru. 2) HALP Garmin BLE Biyometri Sistemi — Windows WinRT yığınını baypas eden ham HCI BLE sürücüsü (libusb/bumble + RTL8761BU) ile 25Hz Garmin biyometri veri alma altyapısı.",
        roleItems: "Yazılım Geliştirme Uzmanı",
        descItems: "Şaşılık tespiti için iOS, Android, macOS ve Windows platformlarında çalışan ortak bir Unity tanı uygulaması geliştirdi. Özel Kotlin/Camera2 ve iOS yerel kamera eklentileri yazdı, gerçek zamanlı kafa pozisyonu ve mesafe tahmin algoritmaları oluşturdu. 8.6k göz görüntüsü veri seti hazırlayıp YOLOv11 anlamsal segmentasyon modeli eğitti (F1 skoru: 0.93) ve PostgreSQL tabanlı RESTful arka plan servisleri tasarladı. Sistem mimarisini TÜBİTAK proje savunmalarında sundu.",
        roleGaziAi: "Eğitim ve Projeler Komitesi Başkan Yardımcısı",
        descGaziAi: "Öğrenci yapay zeka topluluğunda eğitim süreçlerini ve proje atölyelerini yönetti. Unity ML-Agents ile pekiştirmeli öğrenme (Reinforcement Learning) tabanlı yapay zeka projeleri sergiledi.",
        aboutEduHeading: "Eğitim",
        degreeGazi: "Bilgisayar Mühendisliği Lisans (Tahmini Mezuniyet: 2027)",
        gpaGazi: "GNO: 3.36 / 4.00",
        degreeAgu: "Bilgisayar Mühendisliği Lisans (1. Sınıf, Yatay Geçiş)",
        gpaAgu: "GNO: 3.57 / 4.00",
        schoolHigh: "Konya Tahir Büyükkörükçü Anadolu İmam Hatip Lisesi",
        degreeHigh: "Anadolu İmam Hatip Lisesi",
        extraHigh: "Arapça hazırlık eğitimi aldı ve Ürdün Amman'daki Ewan Institute dil eğitim programına katılmaya hak kazandı.",
        aboutSkillsHeading: "Teknik Beceriler & Uzmanlık Alanları",
        skillCatLang: "Programlama Dilleri",
        skillCatAi: "Yapay Zeka & LLM",
        skillCatBackend: "Arka Plan, Bulut & Veritabanı",
        skillCatMobile: "Mobil, Edge AI & Oyun Motorları",
        aboutLangTitle: "Diller & Sertifikalar",
        badgeTr: "Ana Dil",
        badgeDe: "C1 (Goethe-Zertifikat)",
        badgeEn: "C1 (YÖKDİL: 95)",
        badgeAr: "Orta Seviye",
        contactTitle: "İletişime Geçin",
        contactDesc: "Edge AI, Bilgisayarlı Görü veya Sistem Geliştirme alanlarında iş birliği, mühendislik projeleri veya araştırma fırsatları için benimle iletişime geçebilirsiniz!",
        contactEmailBtn: "E-posta Gönder",
        contactLinkedinBtn: "LinkedIn Profilim"
    }
};

// --- Project Data Source ---
const PROJECTS = [
    {
        id: "ihlamur-trading-system",
        category: "ai-ml",
        year: "2026",
        tags: ["Python 3.12", "LangChain", "Qdrant RAG", "Redis Streams", "FastAPI", "OpenClaw", "Bybit v5 API", "Tiered LLMs (T0-T3)", "Docker"],
        image: "images/ihlamur/architecture.jpg",
        isPrivate: true,
        githubUrl: null,
        galleryType: "web",
        gallery: [
            { url: "images/ihlamur/architecture.jpg", caption: { en: "ihlamurv2 Multi-Agent Algorithmic Trading Architecture", tr: "ihlamurv2 Çok Ajanlı Algoritmik Ticaret Mimarisi" } }
        ],
        en: {
            title: "ihlamurv2 — Multi-Agent Algorithmic Trading System",
            categoryLabel: "AI & Algorithmic Trading Systems",
            shortDesc: "A multi-agent quantitative trading pipeline built in Python for Bybit Testnet. Integrates rule-based event routing, Qdrant vector RAG, a Tiered LLM Strategy Synthesizer (T0-T3), deterministic Risk Officer position guards, and an idempotent Bybit v5 execution engine.",
            overview: `ihlamurv2 is an autonomous multi-agent quantitative trading system developed in Python 3.12 for Bybit Testnet.

The platform orchestrates real-time market data WebSocket ingestion, unstructured financial news scraping, deterministic latency-aware routing, Qdrant vector retrieval-augmented generation (RAG), and dual-mode LLM decision synthesis (Strategy Synthesizer & Risk Officer) with zero human intervention required during execution.`,
            architecture: `The system is structured across five specialized engineering planes:

• 1. Gateway Plane (OpenClaw + Ops API): Serves a standalone single-page web dashboard for live PnL/positions tracking, kill-switch control, and activity feeds, while bridging Telegram bot notifications via OpenClaw webhook integration.
• 2. Ingestion Plane: Collects live Bybit v5 WebSocket market streams (klines, orderbook deltas, trades, funding, open interest) and RSS financial news feeds, normalizing raw payloads onto a Redis Streams message bus.
• 3. Analysis Plane (LangChain + Custom Cluster): A deterministic router dispatches unstructured news to LangChain chains (T1/T2 LLM) and numeric market streams to a high-throughput worker pool. Both backends write standardized AnalysisArtifacts to a Qdrant vector store.
• 4. Decision Plane (Strategy Synthesizer & Risk Officer): A Tier-3 (T3) Strategy Synthesizer queries Qdrant RAG to produce TradeProposals. A Risk Officer evaluates proposals via risk-based position sizing (equity-at-risk, 3x max leverage, 3% max stop-loss) before issuing an approved RiskVerdict.
• 5. Execution Plane (OrderManager): A deterministic, LLM-free order manager executes single atomic Bybit v5 perpetual orders with attached TP/SL (tpslMode="Full"), rate-limit token buckets (8 req/s), UUIDv5 idempotency deduplication, and atomic Redis/file kill-switch state guards.`,
            metrics: "Bybit v5 Testnet · 5-Plane Pipeline · Qdrant Vector RAG · Tiered LLM Client (T0-T3) · Redis Streams Bus · 8 req/s Token Bucket · 3x Max Leverage Guard",
            features: [
                {
                    feature: "Multi-Agent RAG Orchestration Engine",
                    keywords: "Multi-Agent Architecture, Qdrant Vector RAG, Redis Streams Bus, StrategySynthesizer (T3), RiskOfficer (T0/T3)",
                    description: "Coordinates specialized analysis and decision agents around a centralized Qdrant vector store for context-aware trade synthesis."
                },
                {
                    feature: "Deterministic Modality & Latency Router",
                    keywords: "Rule-Based Event Routing, Modality Dispatch, Latency Budgeting (<2000ms), Override Table, Shadow Pipeline",
                    description: "Dispatches market events by modality (text -> LangChain, market data -> worker cluster) while enforcing hard sub-2000ms latency budgets."
                },
                {
                    feature: "Tiered LLM Architecture & Subscription Gateway",
                    keywords: "Tiered LLM Client (T0-T3), OpenAI-Compatible Subscription Gateway, Daily Call Limit (300 calls), Prompt Caching",
                    description: "Routes LLM requests through a 4-tier cost model (T0 deterministic code to T3 Opus reasoning) backed by flat-rate subscription proxies."
                },
                {
                    feature: "Risk Officer & Circuit Breaker Protection",
                    keywords: "Risk-Based Sizing, Atomic TP/SL (tpslMode=Full), 3x Max Leverage Guard, Daily Loss Halt (-5%), Redis/File Atomic Kill Switch",
                    description: "Calculates risk-adjusted position sizes based on stop-loss distance, enforces strict leverage caps, and halts trading on loss limits or data gaps."
                },
                {
                    feature: "Idempotent OrderManager & Rate-Limit Engine",
                    keywords: "UUIDv5 OrderLinkId Dedup, Bybit v5 API, 8 req/s Token Bucket, Duplicate Order Suppression, Reconciliation Loop",
                    description: "Guarantees zero duplicate orders on Bybit Testnet using UUIDv5 client order IDs, client-side rate limits, and post-fill verification."
                },
                {
                    feature: "Immutable Audit Trail & Web Operator Dashboard",
                    keywords: "FastAPI Ops API, Single-Page Operator Dashboard, SQLite + JSONL Audit Trail, Trace ID Causality Tracking, /why Explainer",
                    description: "Logs every event, LLM completion, decision, and order with unified trace IDs to a SQLite WAL database and serves a real-time web dashboard."
                }
            ]
        },
        tr: {
            title: "ihlamurv2 — Çok Ajanlı Algoritmik Ticaret Sistemi",
            categoryLabel: "Yapay Zeka & Algoritmik Ticaret Sistemleri",
            shortDesc: "Bybit Testnet için Python ile geliştirilmiş çok ajanlı kantitatif ticaret altyapısı. Kural tabanlı olay yönlendirme, Qdrant vektör RAG, Kademeli YZ Strateji Sentezleyici (T0-T3), deterministik Risk Görevlisi denetimi ve katı Bybit v5 emir yürütme motoru sunar.",
            overview: `ihlamurv2; Bybit Testnet üzerinde çalışmak üzere Python 3.12 ile geliştirilmiş otonom çok ajanlı kantitatif ticaret platformudur.

Sistem; canlı Bybit WebSocket piyasa verilerini ve finansal haber akışlarını toplar, kural tabanlı yönlendiriciden geçirir, Qdrant vektör RAG havuzunda saklar ve çift aşamalı YZ karar sentezi (Strateji Sentezleyici & Risk Görevlisi) ile insan müdahalesiz otomatik ticaret kararları üretir.`,
            architecture: `5 uzmanlaşmış mühendislik katmanından oluşan sistem mimarisi:

• 1. Geçit Katmanı (OpenClaw + Ops API): Canlı kar/zarar ve pozisyon takibi, acil durum durdurma (kill-switch) ve işlem geçmişi sunan tek sayfa web operatör paneli ile Telegram bot bildirimlerini OpenClaw webhook'ları üzerinden bağlar.
• 2. Veri Alma Katmanı: Bybit v5 WebSocket akışlarını (mumlar, derinlik, işlemler, fonlama oranı, açık pozisyon) ve RSS haber akışlarını toplayıp Redis Streams mesaj veri yoluna normalize eder.
• 3. Analiz Katmanı (LangChain + Özel İşçi Kümesi): Kural tabanlı yönlendirici haberleri LangChain zincirlerine (T1/T2 LLM), sayısal piyasa verilerini ise yüksek başarımlı işçi kümesine iletir. Tüm analiz ajanları Qdrant vektör veritabanına standart AnalysisArtifact çıktıları yazar.
• 4. Karar Katmanı (Strateji Sentezleyici & Risk Görevlisi): Seviye-3 (T3) Strateji Sentezleyici ajan Qdrant RAG'i sorgulayarak TradeProposal oluşturur. Risk Görevlisi pozisyon büyüklüğünü risk bütçesi (3x maks kaldıraç, %3 maks stop-loss) üzerinden denetler ve onaylanan RiskVerdict çıktısını yayınlar.
• 5. Emir Yürütme Katmanı (OrderManager): YZ içermeyen deterministik emir yöneticisi, Bybit v5 üzerinde atomik TP/SL korumalı (\`tpslMode="Full"\`) tekil emirler açar; jeton kovası oran sınırlayıcıları (8 istek/sn), UUIDv5 tekil emir kimliği dillemesi ve atomik kill-switch durum kontrollerini uygular.`,
            metrics: "Bybit v5 Testnet · 5 Katmanlı Mimari · Qdrant Vektör RAG · Kademeli LLM İstemcisi (T0-T3) · Redis Streams Bus · 8 req/s Jeton Kovası · 3x Maks Kaldıraç Koruması",
            features: [
                {
                    feature: "Çok Ajanlı RAG Orkestrasyon Motoru",
                    keywords: "Çok Ajanlı Mimari, Qdrant Vektör RAG, Redis Streams Bus, StrategySynthesizer (T3), RiskOfficer (T0/T3)",
                    description: "Uzmanlaşmış analiz ve karar ajanlarını merkezi Qdrant vektör veritabanı etrafında orkestre ederek bağlama duyarlı ticaret kararları üretir."
                },
                {
                    feature: "Deterministik Veri Türü & Gecikme Yönlendiricisi",
                    keywords: "Kural Tabanlı Yönlendirme, Veri Türü Sevk, Gecikme Bütçeleme (<2000ms), Ezme Tablosu, Gölge Boru Hattı",
                    description: "Piyasa olaylarını türüne göre sevk eder (metin -> LangChain, piyasa verisi -> işçi kümesi) ve 2000ms altı sıkı gecikme bütçelerini denetler."
                },
                {
                    feature: "Kademeli LLM Mimarisi & Abonelik Geçidi",
                    keywords: "Kademeli LLM İstemcisi (T0-T3), OpenAI Uyumlu Abonelik Geçidi, Günlük Çağrı Limiti (300 çağrı), İstem Önbellekleme",
                    description: "YZ isteklerini 4 kademeli maliyet modeli üzerinden (T0 kod çözümlerinden T3 Opus muhakemesine) sabit ücretli abonelik vekillerine yönlendirir."
                },
                {
                    feature: "Risk Görevlisi & Devre Kesici Koruması",
                    keywords: "Riske Dayalı Boyutlandırma, Atomik TP/SL (tpslMode=Full), 3x Maks Kaldıraç Koruması, Günlük Kayıp Durdurma (-5%), Redis/Dosya Atomik Kill Switch",
                    description: "Stop-loss mesafesine göre riske göre ayarlanmış pozisyon boyutları hesaplar, kaldıraç limitlerini uygular ve veri kesintisinde ticareti durdurur."
                },
                {
                    feature: "Tekil Emir Yönetimi & Oran Sınırlama Motoru",
                    keywords: "UUIDv5 OrderLinkId Çiftleme Önleme, Bybit v5 API, 8 req/s Jeton Kovası, Mükerrer Emir Engelleme, Eşzamanlama Döngüsü",
                    description: "UUIDv5 istemci emir kimlikleri, istemci tarafı oran limitleri ve dolum sonrası doğrulama ile Bybit Testnet üzerinde sıfır mükerrer emir garantisi verir."
                },
                {
                    feature: "Değiştirilemez İzleme Günlüğü & Web Operatör Paneli",
                    keywords: "FastAPI Ops API, Tek Sayfa Operatör Paneli, SQLite + JSONL İzleme Günlüğü, Izleme Kimliği Nedensellik Takibi, /why Açıklayıcı",
                    description: "Her olayı, YZ tamamlamasını ve emri SQLite WAL veritabanına ortak izleme kimlikleriyle günceller ve canlı web operatör paneli sunar."
                }
            ]
        }
    },
    {
        id: "lagent-legal-ops",
        category: "ai-ml",
        year: "2026",
        tags: ["LangGraph", "FastAPI", "Next.js 14", "OpenAI GPT-4o", "pgvector", "RAG", "PostgreSQL", "Redis", "MinIO", "Docker"],
        image: "images/lagent/dashboard.png",
        isPrivate: true,
        githubUrl: null,
        galleryType: "web",
        gallery: [
            { url: "images/lagent/dashboard.png", caption: { en: "Executive Analytics & Contract Overview", tr: "Yönetici Analitiği & Sözleşme Genel Bakışı" } },
            { url: "images/lagent/analyzed_contract_mainscreen.png", caption: { en: "Contract Analysis & Risk Score Breakdown", tr: "Sözleşme Analizi & Risk Puanı Dağılımı" } },
            { url: "images/lagent/Redline_view1.png", caption: { en: "Interactive Redline Diff Viewer (Side-by-Side)", tr: "Etkileşimli Yan Yana Redline Diff Görünümü" } },
            { url: "images/lagent/Redline_view2.png", caption: { en: "Clause Counter-Proposal & AI Negotiation", tr: "Madde Revizyon Önerileri & YZ Müzakeresi" } },
            { url: "images/lagent/contracts.png", caption: { en: "Contract Repository & Processing Pipeline", tr: "Sözleşme Deposu & İşleme Boru Hattı" } },
            { url: "images/lagent/playbook.png", caption: { en: "Policy Playbook Rule Configuration", tr: "Şirket Politikası (Playbook) Kural Yapılandırması" } },
            { url: "images/lagent/playbook2.png", caption: { en: "Custom Risk Rubrics & Threshold Rules", tr: "Özel Risk Rubrikleri & Yüzde Eşik Kuralları" } },
            { url: "images/lagent/report_screen.png", caption: { en: "Executive Audit Report Generator (PDF / DOCX)", tr: "Yönetici Denetim Raporu Üreteci (PDF / DOCX)" } }
        ],
        en: {
            title: "Lagent — Multi-Agent Legal Ops Orchestrator",
            categoryLabel: "AI & Multi-Agent Systems",
            shortDesc: "An autonomous multi-agent contract review and negotiation system powered by LangGraph, FastAPI, pgvector RAG, and Next.js. Features stateful clause classification, policy compliance auditing against customizable Playbooks, AI redline diff generation, and deterministic risk rule cross-validation.",
            overview: `Lagent is an end-to-end Legal Ops orchestrator engineered to automate legal document analysis, contract risk assessment, and negotiation workflows for individuals and businesses.

Built on a stateful multi-agent architecture, the platform ingests PDF and DOCX contract files (with Tesseract OCR fallback), extracts and categorizes individual clauses using structured GPT-4o outputs, evaluates commercial and legal risks against user-defined Playbooks via RAG, generates automated redline diffs for high-risk provisions, and produces complete executive audit reports in PDF and DOCX formats.`,
            architecture: `The application is architected across six production-grade layers:

• Client Layer: Next.js 14 App Router, React 18, and Tailwind CSS with shadcn/ui. Provides real-time WebSocket progress tracking, interactive side-by-side redline diff viewers, and audit trail timelines.
• API Layer: Asynchronous FastAPI REST server with JWT security, rate-limiting, and WebSocket connection management for live progress streaming.
• Multi-Agent Orchestrator (LangGraph): Stateful execution graph orchestrating three specialized AI agents (Clause Agent, Risk Agent, Negotiation Agent).
• RAG & Vector Engine: PostgreSQL with pgvector extension using 1536-dimensional OpenAI text-embedding-3-small vectors for semantic similarity matching against Playbooks and fallback clause stores.
• Deterministic Rule Engine: A hybrid validation layer that cross-checks LLM risk classifications against hardcoded percentage thresholds and exact compliance rules to mitigate hallucinations.
• Storage & Data Layer: MinIO object storage for document files and reports, Redis 7 for state management and session caching, and PostgreSQL 16 for persistent relational data.`,
            metrics: "3-Agent LangGraph Pipeline · 1536-dim Vector RAG · Real-Time WebSocket Streaming · PDF/DOCX OCR Engine · 90%+ Test Coverage",
            features: [
                {
                    feature: "Multi-Agent Workflow Orchestration",
                    keywords: "LangGraph, StateGraph, Stateful Agent Execution, Python 3.12, AsyncIO",
                    description: "Coordinates asynchronous execution pipelines across Clause Agent, Risk Agent, and Negotiation Agent using state machine state transitions."
                },
                {
                    feature: "Automated Clause Extraction & Classification",
                    keywords: "GPT-4o Structured Outputs, Function Calling, Pydantic v2, Few-Shot Prompting, Confidence Thresholding",
                    description: "Parses unformatted contract text into discrete clauses, classifies legal categories (Indemnity, Termination, Confidentiality), and flags low-confidence (<0.7) items."
                },
                {
                    feature: "Playbook Policy Audit & RAG Retrieval",
                    keywords: "Retrieval-Augmented Generation (RAG), pgvector, OpenAI text-embedding-3-small (1536-dim), IVFFlat Indexing, Cosine Similarity",
                    description: "Performs semantic vector searches over custom Playbook rules to evaluate commercial and legal risk rubrics (Low/Medium/High)."
                },
                {
                    feature: "Hybrid Rule Engine & Cross-Validation",
                    keywords: "Deterministic Validation Engine, Hallucination Guardrails, Threshold Matching, Missing Provision Detection",
                    description: "Cross-checks LLM risk classifications against hardcoded business compliance thresholds and audits for required missing contract clauses."
                },
                {
                    feature: "Automated Revision Proposal & Redline Diff",
                    keywords: "Negotiation Agent, Low-Temperature Sampling (temp=0.3), diff-match-patch, Word-Level HTML Redline",
                    description: "Generates targeted clause counter-proposals for high-risk items and renders color-coded word-level diffs (green insertions / red deletions)."
                },
                {
                    feature: "Multi-Format Executive Reporting & Export",
                    keywords: "fpdf2 PDF Generator, python-docx, MinIO S3 Object Storage, Executive Aggregation",
                    description: "Generates PDF and DOCX summary reports and exports revised contracts with accepted AI counter-proposals directly to production DOCX documents."
                },
                {
                    feature: "Real-Time WebSocket Progress Streaming",
                    keywords: "FastAPI WebSockets, Uvicorn ASGI Server, Redis State Caching, Live Progress Hooks",
                    description: "Streams live multi-agent execution steps and percentage completion milestones directly to the React dashboard interface."
                },
                {
                    feature: "Clause Decision Flow & Audit Trail",
                    keywords: "State Machine Transitions, JSONB Audit Logs, Bulk Approval API, History Timeline",
                    description: "Enables users to approve, reject, or edit individual clause recommendations with full historical audit logging."
                }
            ]
        },
        tr: {
            title: "Lagent — Çoklu Ajanlı Sözleşme İnceleme & Müzakere Orkestratörü",
            categoryLabel: "Yapay Zeka & Çoklu Ajan Sistemleri",
            shortDesc: "LangGraph, FastAPI, pgvector RAG ve Next.js ile geliştirilmiş otonom çoklu ajanlı sözleşme inceleme ve müzakere sistemi. Durum tabanlı madde sınıflandırma, özelleştirilebilir Playbook politikalarına göre risk denetimi, yapay zeka destekli redline diff üretimi ve deterministik kural motoru çapraz doğrulaması sunar.",
            overview: `Lagent, bireylerin ve KOBİ'lerin sözleşme inceleme, risk değerlendirme ve müzakere süreçlerini otonom yapay zeka ajanlarıyla otomatikleştirmek için tasarlanmış bağımsız bir Legal Ops platformudur.

Sistem; PDF ve DOCX formatındaki sözleşmeleri (Tesseract OCR desteğiyle) yükler, maddeleri yapılandırılmış GPT-4o çıktılarıyla ayrıştırıp sınıflandırır, pgvector RAG altyapısı ile Playbook kurallarına göre ticari ve hukuki risk analizi yapar, yüksek riskli maddeler için otomatik revizyon (redline diff) önerileri üretir ve PDF/DOCX formatında kapsamlı denetim raporları sunar.`,
            architecture: `Altı üretim seviyesi katmandan oluşan sistem mimarisi:

• İstemci Katmanı: Next.js 14 App Router, React 18 ve Tailwind CSS ile shadcn/ui. Gerçek zamanlı WebSocket ilerleme takibi, etkileşimli yan yana redline diff görünümü ve denetim izi zaman çizelgesi sunar.
• API Katmanı: Asenkron FastAPI REST sunucusu, JWT güvenliği, rate-limiting ve canlı bildirimler için WebSocket bağlantı yönetimi sağlar.
• Ajan Orkestratörü (LangGraph): 3 uzman ajanı (Clause Agent, Risk Agent, Negotiation Agent) koordine eden durum makinesi akışı.
• RAG & Vektör Motoru: PostgreSQL + pgvector (1536 boyutlu OpenAI text-embedding-3-small) ile semantik benzerlik araması.
• Deterministik Kural Motoru: LLM risk sınıflandırmalarını katı kurallarla çapraz doğrulayarak halüsinasyon riskini ortadan kaldırır.
• Veri & Depolama Katmanı: MinIO nesne deposu, Redis 7 durum önbelleği ve PostgreSQL 16 kalıcı veritabanı.`,
            metrics: "3 Ajanlı LangGraph Pipeline · 1536-boyutlu Vektör RAG · Gerçek Zamanlı WebSocket Bildirimi · PDF/DOCX & OCR İşleme · 8+ Test Paketinde %90+ Kapsama",
            features: [
                {
                    feature: "Çoklu Ajanlı İş Akışı Orkestrasyonu",
                    keywords: "LangGraph, StateGraph, Durum Tabanlı Ajan Çalıştırma, Python 3.12, AsyncIO",
                    description: "Madde ayrıştırma (Clause Agent), risk analizi (Risk Agent) ve revizyon üretimi (Negotiation Agent) adımlarını durum makinesi mimarisinde asenkron olarak orkestre eder."
                },
                {
                    feature: "Otomatik Madde Ayrıştırma & Hukuki Sınıflandırma",
                    keywords: "GPT-4o Structured Outputs, Function Calling, Pydantic v2 Validasyon, Few-Shot Prompting, Confidence Thresholding",
                    description: "Sözleşme metinlerini maddelere böler; Tazminat, Gizlilik, Fesih gibi hukuki kategorilere ayırır ve %70 güven skorunun altındaki maddeleri belirsiz olarak etiketler."
                },
                {
                    feature: "Playbook Tabanlı Risk Analizi & RAG Vektör Araması",
                    keywords: "Retrieval-Augmented Generation (RAG), pgvector, OpenAI text-embedding-3-small (1536-dim), IVFFlat İndeksleme, Cosine Similarity",
                    description: "Sözleşme maddelerini şirket politikalarıyla (Playbook) semantik olarak eşleştirir, vektörel arama ile en yakın kuralları getirir ve risk seviyesini (Düşük/Orta/Yüksek) belirler."
                },
                {
                    feature: "Hibrit Kural Motoru & Çapraz Doğrulama",
                    keywords: "Deterministik Kural Motoru, Halüsinasyon Önleyici Kontroller, Yüzde Eşiği Eşleme, Eksik Hüküm Tespiti",
                    description: "LLM risk sınıflandırmalarını katı iş kurallarıyla çapraz kontrolden geçirerek yapay zeka halüsinasyonlarını önler ve zorunlu eksik sözleşme maddelerini tespit eder."
                },
                {
                    feature: "Otomatik Revizyon Önerisi & Redline Diff Üretimi",
                    keywords: "Negotiation Agent, Düşük Sıcaklık Örneklemesi (temp=0.3), diff-match-patch, Kelime Bazlı HTML Redline",
                    description: "Yüksek riskli maddeler için şirket politikasına uygun alternatif metinler üretir ve orijinal metin ile revizyon arasındaki farkları yeşil/kırmızı HTML diff ile vurgular."
                },
                {
                    feature: "Çok Formatlı Raporlama & Dışa Aktarım",
                    keywords: "fpdf2 PDF Motoru, python-docx, MinIO S3 Nesne Depolama, Yönetici Rapor Derlemesi",
                    description: "Özet ve detaylı analiz raporlarını PDF/DOCX olarak üretir; kabul edilen revizyonları sözleşmeye uygulayarak yayına hazır revize DOCX belgesi dışa aktarır."
                },
                {
                    feature: "Gerçek Zamanlı WebSocket İlerleme Bildirimi",
                    keywords: "FastAPI WebSockets, Uvicorn ASGI Sunucusu, Redis Durum Önbelleği, Canlı İlerleme Hook'ları",
                    description: "Ajanların analiz adımlarını ve tamamlanma yüzdelerini canlı olarak React arayüzüne aktarır."
                },
                {
                    feature: "Madde Bazlı Onay Akışı & Denetim İzi",
                    keywords: "Durum Makinesi Geçişleri, JSONB Denetim Günlüğü, Toplu Onay API, Geçmiş Zaman Çizelgesi",
                    description: "Kullanıcıların madde madde kabul/red/düzenleme kararları almasını sağlar ve yapılan tüm işlemlerin tarihçesini denetim günlüğünde tutar."
                }
            ]
        }
    },
    {
        id: "sentryfit-health-app",
        category: "ai-ml",
        year: "2026",
        tags: ["React Native", "TypeScript", "On-Device Pose Vision", "OpenCV", "HealthKit", "Health Connect", "LLM Vision", "IAP Subscription"],
        image: "images/sentryfit/logo.jpeg",
        isPrivate: true,
        githubUrl: null,
        appStoreUrl: "https://apps.apple.com/tr/app/sentryfit/id6759972943?l=tr",
        galleryType: "mobile",
        gallery: [
            { url: "images/sentryfit/dashboard.PNG", caption: { en: "Dashboard Screen", tr: "Dashboard / Ana Ekran" } },
            { url: "images/sentryfit/training.PNG", caption: { en: "Training Screen", tr: "Training / Antrenman Ekranı" } },
            { url: "images/sentryfit/nutrition.PNG", caption: { en: "Nutrition Screen", tr: "Nutrition / Beslenme Ekranı" } },
            { url: "images/sentryfit/exercise_analysis.PNG", caption: { en: "Form Check (Live Camera)", tr: "Form Kontrolü (Canlı Kamera)" } },
            { url: "images/sentryfit/analysis_result.PNG", caption: { en: "Exercise Analysis Result", tr: "Egzersiz Analiz Sonucu" } },
            { url: "images/sentryfit/smart-chef.PNG", caption: { en: "Smart Chef", tr: "Smart Chef / Akıllı Şef" } },
            { url: "images/sentryfit/smart_fridge.PNG", caption: { en: "Smart Fridge", tr: "Smart Fridge / Akıllı Buzdolabı" } },
            { url: "images/sentryfit/food-db.PNG", caption: { en: "Food Scanner & Logger", tr: "Besin Tarayıcı & Takip" } },
            { url: "images/sentryfit/tutorials.PNG", caption: { en: "Exercise Tutorials", tr: "Tutorials / Eğitimler" } },
            { url: "images/sentryfit/tutorial2.PNG", caption: { en: "Tutorial Step Detail", tr: "Eğitim Adım Detayı" } }
        ],
        en: {
            title: "SentryFit — AI-Powered Mobile Pose Tracking & Health Platform",
            categoryLabel: "AI & Computer Vision",
            shortDesc: "A production mobile health and fitness platform featuring real-time on-device computer vision pose detection, automated exercise rep counting, LLM food macro vision analysis, Smart Chef recipe generation, and Apple HealthKit / Health Connect synchronization.",
            overview: `SentryFit is an advanced AI-driven mobile fitness and bio-telemetry application designed to evaluate physical workout form in real-time, count exercise repetitions, track nutritional intake, and synchronize wearable health metrics.

Built as a modular React Native application (~113 source modules across 37 functional graph communities), SentryFit runs on-device pose classification to deliver immediate biomechanical feedback without streaming raw video payloads off-device.`,
            architecture: `The application is architected across five core technical subsystems:

• On-Device Video & Pose Analysis (OnDeviceVideoAnalyzer, ManagedPoseDetector): Real-time frame processing engine computing 3D skeletal joint angles. Features dedicated exercise counters (HammerCurlCounter, BicepsCurlCounter, PushUpCounter, SquatCounter, BenchPressCounter, PlankTracker) and statistical ML form classification (BicepsCurlFormClassifier).
• AI Vision Nutrition & Smart Chef (AI Food Analysis, Smart Chef Generation): Image-based meal scanner parsing food items into calorie and macronutrient totals (fetchLlmMacros(), applyLlmMacros()), alongside a Smart Chef engine generating recipes from fridge inventory.
• Wearable Bio-Telemetry (HealthService): Unified HealthKit (iOS) and Health Connect (Android) synchronization engine performing background sync for active calories, heart rate zones, and sleep analysis.
• Subscription & Entitlement Engine: In-app billing infrastructure managing active entitlements (hasActiveEntitlement()), purchase restoration, and API rate-limiting algorithms (consumeUsage()).
• Personalized Goal Setup & i18n Engine: Multi-language localization engine and dynamic nutrition/workout goal target calculators.`,
            metrics: "113 Source Modules · 37 Subsystem Graph Communities · Real-Time On-Device Pose Tracking · Apple HealthKit & Android Health Connect Integration · LLM Meal Vision Scanner",
            features: [
                {
                    feature: "On-Device Real-Time Pose & Skeleton Tracking",
                    keywords: "OnDeviceVideoAnalyzer, ManagedPoseDetector, 3D Skeletal Keypoint Estimation, Low-Latency Frame Pipeline, Zero-Network Streaming",
                    description: "Processes camera frames directly on the mobile device to estimate skeletal joint keypoints and angles without sending raw video off-device."
                },
                {
                    feature: "Exercise-Specific Repetition Counters",
                    keywords: "SquatCounter, PushUpCounter, BicepsCurlCounter, HammerCurlCounter, BenchPressCounter, PlankTracker",
                    description: "Detects movement thresholds and completed rep repetitions with millisecond precision using dedicated algorithm modules per exercise type."
                },
                {
                    feature: "Biomechanical Form Quality Classification",
                    keywords: "BicepsCurlFormClassifier, Statistical Motion Metrics (Min/Max/Mean/Std), Real-Time Bio-Feedback",
                    description: "Classifies workout execution form quality using statistical feature analysis and provides immediate warning alerts for risky posture."
                },
                {
                    feature: "AI-Powered Meal Macro Vision Scanner",
                    keywords: "LLM Vision Processing, Image Meal Analysis, Automated Macro Parsing, Nutrition Tracking",
                    description: "Analyzes meal photos via computer vision to compute automated calorie, protein, carb, and fat macronutrient breakdown totals."
                },
                {
                    feature: "Smart Chef Recipe & Inventory Engine",
                    keywords: "Smart Chef Generation, Inventory Matching Algorithm, LLM Recipe Synthesis, Macro Target Balancing",
                    description: "Generates tailored healthy recipes matching user fridge items and remaining daily calorie/macro targets."
                },
                {
                    feature: "Wearable Smartwatch & Bio-Telemetry Sync",
                    keywords: "Apple HealthKit (iOS), Android Health Connect, HealthService, Background Observers, Heart Rate Telemetry",
                    description: "Synchronizes active workout calories, heart rate zones, and sleep logs continuously via native iOS and Android health frameworks."
                },
                {
                    feature: "In-App Subscription & Usage Rate Limiter",
                    keywords: "RevenueCat IAP, Entitlement Verification, API Rate Limiter, Token Bucket Bucket Enforcement",
                    description: "Manages premium tier entitlements and enforces API rate limits for AI vision endpoints to prevent service abuse."
                },
                {
                    feature: "Personalized Goal Engine & Localization",
                    keywords: "i18n Localization Engine, Dynamic Nutrition Calculators, BMI & BMR Metrics, Adaptive Workout Planner",
                    description: "Calculates custom caloric and macro targets based on user biometric profiles and fitness goals."
                }
            ]
        },
        tr: {
            title: "SentryFit — Yapay Zeka Destekli Mobil Duruş Analizi & Sağlık Platformu",
            categoryLabel: "Yapay Zeka & Bilgisayarla Görme",
            shortDesc: "Cihaz üzerinde çalışan bilgisayarla görme duruş tespiti, otomatik egzersiz tekrar sayımı, LLM besin makro görüntü analizi, Akıllı Şef tarif üretimi ve Apple HealthKit / Health Connect entegrasyonu sunan yapay zeka destekli mobil sağlık platformu.",
            overview: `SentryFit; gerçek zamanlı fiziksel egzersiz formunu değerlendirmek, tekrar sayılarını otomatik saymak, besin alımını takip etmek ve akıllı saat biyometrik verilerini eşzamanlamak için geliştirilmiş yapay zeka destekli mobil sağlık platformudur.

113 kaynak modül ve 37 işlevsel grafik topluluğundan oluşan modüler React Native mimarisiyle tasarlanan platform, ham video verisini dışarı aktarmadan cihaz üzerinde bilgisayarla görme duruş sınıflandırması yürütür.`,
            architecture: `5 ana teknik alt sistemden oluşan yazılım mimarisi:

• Cihaz Üstü Video & Duruş Analizi (OnDeviceVideoAnalyzer, ManagedPoseDetector): İskelet eklem açılarını hesaplayan gerçek zamanlı görüntü işleme motoru. Özel egzersiz sayıcıları (HammerCurlCounter, BicepsCurlCounter, PushUpCounter, SquatCounter, BenchPressCounter, PlankTracker) ve istatistiksel ML form sınıflandırması (BicepsCurlFormClassifier) sunar.
• Yapay Zeka Görüntü Analizi & Akıllı Şef: Yemek fotoğraflarından kalori ve makro besin hesabı çıkaran tarayıcı (fetchLlmMacros(), applyLlmMacros()) ve buzdolabı envanterinden yemek tarifi üreten Akıllı Şef motoru.
• Akıllı Saat & Biyometri Senkronizasyonu (HealthService): Apple HealthKit (iOS) ve Android Health Connect entegrasyonu ile aktif kalori, nabız bölgeleri ve uyku analizini arka planda senkronize eder.
• Abonelik & Kullanım Limiti Yönetimi: Uygulama içi satın alma altyapısı (hasActiveEntitlement()) ve API kullanım limiti denetim algoritmaları (consumeUsage()).
• Kişiselleştirilmiş Hedef & i18n Altyapısı: Çok dilli i18n altyapısı ve dinamik beslenme/antrenman hedef hesaplayıcıları.`,
            metrics: "113 Kaynak Modül · 37 Grafik Topluluğu · Gerçek Zamanlı Cihaz Üstü Duruş Takibi · Apple HealthKit & Android Health Connect Entegrasyonu · LLM Görüntülü Yemek Tarayıcı",
            features: [
                {
                    feature: "Cihaz Üstü Gerçek Zamanlı Duruş & İskelet Tespiti",
                    keywords: "OnDeviceVideoAnalyzer, ManagedPoseDetector, 3D İskelet Noktası Hesabı, Düşük Gecikmeli Kare İşleme, Ağsız Yerel Çalıştırma",
                    description: "Kamera akışından ham video verisini dışarı aktarmadan, doğrudan mobil cihaz üzerinde iskelet eklem noktalarını ve açılarını hesaplar."
                },
                {
                    feature: "Egzersize Özel Otomatik Tekrar Sayım Motorları",
                    keywords: "SquatCounter, PushUpCounter, BicepsCurlCounter, HammerCurlCounter, BenchPressCounter, PlankTracker",
                    description: "Her egzersiz türü için özel algoritmalara sahip sayaç modülleri ile hareket eşiklerini ve tamamlanan tekrarları milisaniyelik hassasiyetle tespit eder."
                },
                {
                    feature: "Biyomekanik Form Sınıflandırma & İstatistiksel İyileştirme",
                    keywords: "BicepsCurlFormClassifier, İstatistiksel Hareket Metrikleri (Min/Max/Mean/Std), Gerçek Zamanlı Biyo-Geri Bildirim",
                    description: "Hareket formunu istatistiksel standart sapma ve açı analizleriyle sınıflandırır; kullanıcıya yanlış form durumunda anlık uyarı verir."
                },
                {
                    feature: "Yapay Zeka Destekli Görsel Besin & Makro Analizi",
                    keywords: "LLM Vision İşleme, Görsel Yemek Analizi, Otomatik Makro Hesabı, Beslenme Takibi",
                    description: "Yemek fotoğraflarını bilgisayarla görme ve LLM görselleriyle analiz ederek kalori, protein, karbonhidrat ve yağ değerlerini otomatik hesaplar."
                },
                {
                    feature: "Akıllı Şef Tarif Üreteci & Envanter Yönetimi",
                    keywords: "Smart Chef Generation, Envanter Eşleme Algoritması, LLM Tarif Sentezi, Makro Hedef Dengeleme",
                    description: "Kullanıcının buzdolabı envanterindeki malzemeleri ve günlük makro hedeflerini analiz ederek kişiselleştirilmiş sağlıklı yemek tarifleri üretir."
                },
                {
                    feature: "Giyilebilir Cihaz & Biyometrik Veri Senkronizasyonu",
                    keywords: "Apple HealthKit (iOS), Android Health Connect, HealthService, Arka Plan Servisleri, Nabız Bölgesi Telekomünikasyonu",
                    description: "Apple Watch ve Android akıllı saatlerden aktif kalori, nabız bölgeleri ve uyku analizlerini arka plan servisleriyle otomatik senkronize eder."
                },
                {
                    feature: "Uygulama İçi Satın Alma & Kullanım Limiti Engine",
                    keywords: "RevenueCat IAP Entegrasyonu, Hak Doğrulama (Entitlement), API Kullanım Limiti Denetimi, Token Bucket Limitleri",
                    description: "Abonelik ve hak doğrulama işlemlerini yönetir; yapay zeka servislerinin kötüye kullanımını önlemek için API kullanım limitleri uygular."
                },
                {
                    feature: "Çok Dilli i18n & Kişiselleştirilmiş Antrenman Hedefleri",
                    keywords: "i18n Yerelleştirme Motoru, Dinamik Beslenme Hesaplayıcıları, VKI & BMR Metrikleri, Uyumlu Antrenman Planlayıcı",
                    description: "Kullanıcının BMR, VKI ve hedeflerine göre beslenme ve antrenman planları oluşturur."
                }
            ]
        }
    },
    {
        id: "can-eye-eyecare",
        category: "ai-ml",
        year: "2025",
        tags: ["Unity (C#)", "OpenCV", "YOLOv11 Segmentation", "MediaPipe FaceMesh", "Camera2 API", "Socket.IO", "Multiplatform (iOS/Android/macOS/Win)"],
        image: "images/can-eye/detailed_analysis_image.png",
        isPrivate: true,
        githubUrl: null,
        appStoreUrl: "https://apps.apple.com/app/caneye",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.caneye.app",
        galleryType: "web",
        gallery: [
            { url: "images/can-eye/detailed_analysis_image.png", caption: { en: "AI Strabismus & Vision Assessment Dashboard", tr: "YZ Şaşılık & Görme Değerlendirmesi Paneli" } },
            { url: "images/can-eye/strabismus_chart.png", caption: { en: "Hirschberg Test & Pinhole Camera Calculation", tr: "Hirschberg Testi & Pinhole Kamera Hesabı" } },
            { url: "images/can-eye/socket_diag.png", caption: { en: "Real-Time Socket.IO Multiplatform Architecture", tr: "Gerçek Zamanlı Socket.IO Çok Platformlu Mimari" } },
            { url: "images/can-eye/clinic_eval_table.png", caption: { en: "Clinical Vision Evaluation & LogMAR Scaling", tr: "Klinik Görme Değerlendirmesi & LogMAR Ölçekleme" } }
        ],
        en: {
            title: "CAN-EYE — Multiplatform AI Ophthalmology & Eyecare Assessment Platform",
            categoryLabel: "AI & Medical Systems",
            shortDesc: "A multiplatform (iOS, Android, macOS, Windows) eyecare and ophthalmology diagnostic platform built with Unity (C#). Features AI-driven Hirschberg strabismus assessment via YOLOv11 semantic segmentation, OpenCV lens distortion calibration, MediaPipe 3D head pose estimation, and dynamic Snellen DPI vision distance calculation.",
            overview: `CAN-EYE is a multiplatform clinical eyecare and ophthalmology assessment platform developed with Unity (C#) for iOS, Android, macOS, and Windows.

Engineered to digitize complex eye screening protocols, CAN-EYE integrates computer vision and deep learning models to perform automated Hirschberg strabismus diagnosis, dynamic distance-calibrated Snellen/Tumbling E visual acuity testing, and real-time remote doctor-kiosk synchronization via Socket.IO.`,
            architecture: `The platform is architected across six core specialized medical engineering subsystems:

• Unity Multiplatform Engine & Native Plugins: Cross-platform C# core running on iOS, Android, macOS, and Windows with native Camera2 API Android/iOS plugin wrappers.
• Dynamic Visual Acuity Engine (Snellen & Tumbling E): Computes real-time letter dimensions based on screen DPI and viewing distance using 5 angular arc-minute optical principles (letterHeightInCm = firstLetterPixels * 2.54 / screenDpi). Features dynamic proportion scaling across 20/200 down to 20/20 acuity levels.
• AI Hirschberg Strabismus Assessment: Dual-stage flash-guided pupil reflection capture utilizing MediaPipe FaceLandmarks and MLKit FaceDetection for real-time 3D head pose alignment (Pitch, Yaw, Roll) and iris-diameter (11.7mm reference) pinhole camera distance estimation.
• YOLOv11 X-Large Semantic Segmentation Model: Custom-trained deep learning segmentation pipeline (~8,601 augmented eye images, 100 epochs, 640x640 input) extracting 3 pixel-level mask classes: Iris, Pupil, and Corneal Reflex.
• OpenCV Camera Calibration & Lens Undistortion: Corrects optical lens distortion via 20x20cm chessboard calibration grids and solves 3D-to-2D pose perspective via solvePnP for millimeter-precise corneal reflection deviation measurements.
• Real-Time Socket.IO Remote Doctor & Kiosk Protocol: Synchronizes live examination sessions, room codes, and test parameters between patient mobile clients and doctor kiosk terminals over WebSocket channels.`,
            metrics: "Multiplatform (iOS / Android / macOS / Windows) · YOLOv11 X-Large 3-Class Segmentation (8,601 images) · OpenCV Lens Undistortion · Pinhole Camera Distance Metering · Real-time Socket.IO Sync",
            features: [
                {
                    feature: "YOLOv11 Semantic Segmentation Eye Model",
                    keywords: "YOLOv11 X-Large, Semantic Segmentation, 3-Class Pixel Masks (Iris/Pupil/Reflex), 8,601 Augmented Dataset, COCO Weights",
                    description: "Custom-trained deep neural network extracting pixel-level masks for iris, pupil, and corneal light reflection under varying lighting and gaze angles."
                },
                {
                    feature: "Hirschberg Strabismus & Pinhole Distance Metering",
                    keywords: "Hirschberg Test, Pinhole Camera Model, MediaPipe FaceLandmarks, 11.7mm Reference Iris Diameter, Focal Length px/mm Conversion",
                    description: "Calculates corneal light reflection deviation from pupil center in millimeters and prism diopters using pinhole camera optical distance equations."
                },
                {
                    feature: "OpenCV Lens Distortion & Camera Matrix Calibration",
                    keywords: "OpenCV undistort, calibrateCamera, solvePnP 3D Perspective, Chessboard Calibration Grid (20x20cm), Camera Matrix Vectoring",
                    description: "Eliminates lens distortion warp effects and solves 3D head world coordinates to ensure sub-millimeter diagnostic precision."
                },
                {
                    feature: "Dynamic Snellen DPI & Distance Scaling Engine",
                    keywords: "Snellen Chart, Tumbling E, LogMAR Scaling, Screen DPI Calibration, 5 Arc-Minute Angle Calculation, Adaptive Distance Scaling",
                    description: "Dynamically scales optotype letter pixel dimensions according to screen DPI and user distance, maintaining exact 5 arc-minute eye visual angles."
                },
                {
                    feature: "Dual-Stage 3D Head Pose & Blink Validation Guard",
                    keywords: "MLKit FaceDetection, Head Pose Estimation (Pitch/Yaw/Roll), Eye Open Probability, Flash Auto-Focus Tracking, Exif Metadata Logging",
                    description: "Monitors head orientation angles in real-time and verifies eye-open state before triggering double-flash photo capture and embedding diagnostic Exif logs."
                },
                {
                    feature: "Real-Time Socket.IO Doctor-Kiosk Synchronization",
                    keywords: "Socket.IO WebSockets, Async Event Architecture, Room Code Authentication, Doctor Kiosk Remote Control, Live Session Streaming",
                    description: "Orchestrates multiplatform real-time data exchange between patient mobile apps and doctor desktop kiosks with isolated room tokens."
                },
                {
                    feature: "Multiplatform Unity Engine Architecture",
                    keywords: "Unity 3D/2D Engine, C# Architecture, Cross-Platform Deployment (iOS/Android/macOS/Windows), Native API Plugins",
                    description: "Single-codebase Unity architecture deployed across mobile stores (App Store & Play Store) and desktop platforms (macOS & Windows)."
                }
            ]
        },
        tr: {
            title: "CAN-EYE — Çok Platformlu YZ Oftalmoloji & Göz Sağlığı Değerlendirme Platformu",
            categoryLabel: "Yapay Zeka & Oftalmoloji Sistemleri",
            shortDesc: "Unity (C#) ile iOS, Android, macOS ve Windows için geliştirilmiş çok platformlu göz sağlığı ve teşhis platformu. YOLOv11 semantik segmentasyon ile YZ destekli Hirschberg şaşılık analizi, OpenCV lens bozulması kalibrasyonu, MediaPipe 3D kafa pozisyonu tahmini ve dinamik Snellen DPI mesafe hesabı sunar.",
            overview: `CAN-EYE; iOS, Android, macOS ve Windows platformlarında çalışmak üzere Unity (C#) ile geliştirilmiş çok platformlu klinik göz sağlığı ve teşhis yazılımıdır.

Klinik muayene protokollerini dijitalleştirmek amacıyla tasarlanan CAN-EYE; bilgisayarla görme ve derin öğrenme modellerini birleştirerek otonom Hirschberg şaşılık teşhisi, dinamik mesafeye göre kalibre edilen Snellen/Tumbling E görme keskinliği testleri ve Socket.IO üzerinden doktor-kiosk cihazları arasında gerçek zamanlı hasta takibi sağlar.`,
            architecture: `6 temel uzmanlaşmış tıbbi mühendislik alt sisteminden oluşan yazılım mimarisi:

• Unity Çok Platformlu Motor & Yerel Eklentiler: iOS, Android, macOS ve Windows üzerinde çalışan yerel Camera2 API Android/iOS eklenti sarmalayıcılarına sahip C# çekirdeği.
• Dinamik Görme Keskinliği Motoru (Snellen & Tumbling E): Ekran DPI ve mesafe değerlerine göre harf piksel boyutlarını 5 açısal yay dakikası prensibine göre hesaplar (letterHeightInCm = firstLetterPixels * 2.54 / screenDpi). 20/200'den 20/20 seviyesine kadar dinamik oran ölçeklemesi sunar.
• Yapay Zeka Destekli Hirschberg Şaşılık Analizi: MediaPipe FaceLandmarks ve MLKit FaceDetection ile gerçek zamanlı 3D kafa oryantasyonu kontrolü (Pitch, Yaw, Roll) ve ortalama iris çapı (11.7mm referans) üzerinden pinhole kamera mesafesi tahmini içeren çift flaşlı fotoğraf yakalama sistemi.
• YOLOv11 X-Large Semantik Segmentasyon Modeli: 3 piksel seviyesinde maske sınıfı (İris, Pupilla, Korneal Yansıma) çıkaran özel eğitilmiş derin öğrenme modeli (~8,601 genişletilmiş göz görüntüsü, 100 epoch, 640x640 girdi).
• OpenCV Kamera Kalibrasyonu & Lens Bozulması Düzeltme: 20x20cm satranç tahtası kalibrasyon ızgarası ile optik lens distorsiyonunu giderir ve solvePnP 3D-2D perspektif çözümü ile milimetrik korneal refleks sapma miktarlarını hesaplar.
• Gerçek Zamanlı Socket.IO Doktor & Kiosk Protokolü: Hasta mobil istemcileri ile doktor kiosk terminalleri arasında canlı muayene oturumlarını, oda kodlarını ve test parametrelerini WebSocket kanalları üzerinden eşzamanlar.`,
            metrics: "Çok Platformlu (iOS / Android / macOS / Windows) · YOLOv11 X-Large 3-Sınıflı Segmentasyon (8.601 resim) · OpenCV Lens Düzeltme · Pinhole Kamera Mesafe Ölçümü · Gerçek Zamanlı Socket.IO Senkronizasyonu",
            features: [
                {
                    feature: "YOLOv11 Semantik Segmentasyon Göz Modeli",
                    keywords: "YOLOv11 X-Large, Semantik Segmentasyon, 3-Sınıflı Piksel Maskeleri (İris/Pupilla/Yansıma), 8.601 Veri Seti, COCO Ağırlıkları",
                    description: "Farklı ışık ve bakış açılarında iris, göz bebeği (pupilla) ve ışık yansıması (korneal refleks) için piksel düzeyinde maskeler çıkaran özel derin sinir ağı."
                },
                {
                    feature: "Hirschberg Şaşılık & Pinhole Mesafe Ölçümü",
                    keywords: "Hirschberg Testi, Pinhole Kamera Modeli, MediaPipe FaceLandmarks, 11.7mm Referans İris Çapı, Odak Uzaklığı px/mm Dönüşümü",
                    description: "Pinhole kamera optik mesafe denklemleri ile göz bebeği merkezi ile ışık yansıması arasındaki sapmayı milimetre ve prizma diyoptri cinsinden hesaplar."
                },
                {
                    feature: "OpenCV Lens Bozulması & Kamera Matrisi Kalibrasyonu",
                    keywords: "OpenCV undistort, calibrateCamera, solvePnP 3D Perspektif, Satranç Tahtası Kalibrasyon Izgarası (20x20cm), Kamera Matrisi Vektörleme",
                    description: "Optik lens bükülme etkilerini yazılımsal olarak giderir ve milimetre altı teşhis hassasiyeti için kafa 3D dünya koordinatlarını çözer."
                },
                {
                    feature: "Dinamik Snellen DPI & Mesafe Ölçekleme Motoru",
                    keywords: "Snellen Tablosu, Tumbling E, LogMAR Ölçekleme, Ekran DPI Kalibrasyonu, 5 Açısal Dakika Hesabı, Uyumlu Mesafe Ölçekleme",
                    description: "Harf piksel boyutlarını ekran DPI ve kullanıcı mesafesine göre dinamik olarak ölçekleyerek gözdeki 5 açısal dakika yay standardını korur."
                },
                {
                    feature: "Çift Aşama 3D Kafa Pozisyonu & Göz Kırpma Doğrulama",
                    keywords: "MLKit FaceDetection, Kafa Pozisyonu Tahmini (Pitch/Yaw/Roll), Göz Açıklık Olasılığı, Flaş Odak Takibi, Exif Günlükleme",
                    description: "Kafa açılarını gerçek zamanlı izler, gözlerin açık olduğunu doğruladıktan sonra çift flaşlı fotoğraf çekimi başlatır ve Exif verilerine tanı günlüklerini ekler."
                },
                {
                    feature: "Gerçek Zamanlı Socket.IO Doktor-Kiosk Senkronizasyonu",
                    keywords: "Socket.IO WebSockets, Asenkron Olay Mimarisi, Oda Kodu Doğrulaması, Doktor Kiosk Uzaktan Kontrolü, Canlı Oturum Yayınlama",
                    description: "Hasta mobil uygulamaları ile doktor masaüstü kioskları arasında izole oda jetonlarıyla çok platformlu gerçek zamanlı veri akışı sağlar."
                },
                {
                    feature: "Çok Platformlu Unity Motoru Mimarisi",
                    keywords: "Unity 3D/2D Motoru, C# Mimarisi, Çok Platformlu Yayınlama (iOS/Android/macOS/Windows), Yerel API Eklentileri",
                    description: "Mobil mağazalarda (App Store & Play Store) ve masaüstü sistemlerde (macOS & Windows) çalışan tek kod tabanlı Unity mimarisi."
                }
            ]
        }
    },
    {
        id: "havelsan-internship-projects",
        category: "systems",
        year: "2026",
        tags: ["HAVELSAN R&D", "BLE HCI Driver", "Python (bumble / libusb)", "Garmin Connect IQ", "VibeVoice STT", "WavLM Embeddings", "PostgreSQL Commit Engine", "Multi-GPU (H100/H200)"],
        image: "images/havelsan/logo.png",
        isPrivate: true,
        githubUrl: null,
        galleryType: "web",
        gallery: [
            { url: "images/havelsan/certificate.png", caption: { en: "HAVELSAN Internship Certificate of Participation", tr: "HAVELSAN Staj Katılım Belgesi" } },
            { url: "images/havelsan/garmin_watches.jpeg", caption: { en: "Garmin Smartwatches 25Hz BLE Telemetry Setup", tr: "Garmin Akıllı Saatler 25Hz BLE Biyometri Kurulumu" } },
            { url: "images/havelsan/tplink.jpeg", caption: { en: "TP-Link UB500 (RTL8761BU) Raw HCI Dongle Hardware", tr: "TP-Link UB500 (RTL8761BU) Ham HCI Dongle Donanımı" } },
            { url: "images/havelsan/team_workplace.jpeg", caption: { en: "HAVELSAN Office Photo", tr: "HAVELSAN Ofis Fotosu" } },
            { url: "images/havelsan/presentation.jpeg", caption: { en: "HAVELSAN Internship Souvenir Photo", tr: "HAVELSAN Staj Hatıra Fotosu" } }
        ],
        en: {
            title: "HAVELSAN — Low-Latency BLE Telemetry & Cockpit Speech Analytics",
            categoryLabel: "Systems & Defense R&D",
            shortDesc: "R&D software engineering projects developed at HAVELSAN's New Technologies Team. Features a raw HCI BLE smartwatch telemetry driver for 25Hz bio-data streaming and a cockpit voice speech-to-text (STT) optimization pipeline with Git-style transcript versioning.",
            overview: `During my software engineering internship within HAVELSAN's New Technologies Team, I engineered two high-performance R&D software architectures:

1. HALP Garmin BLE Telemetry System: A low-latency 25Hz bio-telemetry ingestion engine streaming accelerometer and heart-rate sensor data from Garmin smartwatches to desktop PC hardware over Bluetooth Low Energy.
2. HALP LabelVoice Speech-to-Text & Cockpit Analytics Engine: An end-to-end cockpit voice transcription optimization system that transcribes flight audio, classifies speaker roles (PF / PM / ATC / COMPUTER), and maintains immutable Git-style transcript version history.`,
            architecture: `The system architecture spans two production-grade R&D engineering domains:

• Hardware & Low-Level BLE HCI Driver (HALP Garmin):
  - Solved Windows WinRT peripheral advertising limitations (packet truncation and random RPA masking) by bypassing the OS Bluetooth stack entirely.
  - Implemented raw HCI commands via libusb and Zadig drivers on TP-Link UB500 (Realtek RTL8761BU) using Python bumble.
  - Reduced advertising interval to 100ms for 10x capture speed and engineered 25Hz Connect IQ custom raw packet parsers with candidate blacklisting and 10s timeout recovery.

• Cockpit Speech-to-Text & Versioning Engine (HALP LabelVoice):
  - Implemented an append-only Git-style commit versioning layer (HEAD working copy + Commits snapshot table) preventing data loss during transcript editing.
  - Integrated VibeVoice STT, WavLM speaker embeddings, CTC alignment, and acoustic speech drift compensation algorithms.
  - Distributed long-duration audio chunking workloads across H100 baseline and H200 burst GPU pods without VRAM OOM exceptions.`,
            metrics: "HAVELSAN New Technologies R&D · 25Hz Low-Latency BLE Streaming · Raw HCI Driver (libusb) · VibeVoice STT & WavLM Alignment · Git-Style Commit Snapshot Versioning",
            features: [
                {
                    feature: "Raw HCI BLE Driver & Windows OS Bypass",
                    keywords: "Bluetooth Low Energy (BLE), Raw HCI Commands, libusb, Zadig WinUSB, Python bumble, TP-Link UB500 (RTL8761BU)",
                    description: "Bypasses the native Windows WinRT stack to issue raw HCI commands, enabling custom BLE advertising packet structures for Garmin smartwatch pairing."
                },
                {
                    feature: "25Hz Garmin Bio-Telemetry Ingestion & Scan State Machine",
                    keywords: "Connect IQ API 3.1.0, 25Hz Sampling, 100ms Advertising Interval, Candidate Blacklisting, 10s Timeout Recovery",
                    description: "Captures 25Hz accelerometer and heart-rate telemetry with custom Connect IQ raw packet parsers and fallback scan blacklisting."
                },
                {
                    feature: "Git-Style Immutable Transcript Commit Engine",
                    keywords: "Append-Only Commit Architecture, HEAD Working Copy, Snapshot Versioning, PostgreSQL, Revert-as-Commit Safety",
                    description: "Engineers a fail-safe transcript editing architecture where every save creates an immutable snapshot commit preventing data loss."
                },
                {
                    feature: "Cockpit STT & Speaker Role Classification",
                    keywords: "VibeVoice STT, WavLM Speaker Embeddings, CTC Acoustic Alignment, Cockpit Role Diarization (PF/PM/ATC/COMPUTER)",
                    description: "Transcribes cockpit session audio and classifies utterances into flight roles (Pilot Flying, Pilot Monitoring, Air Traffic Control, Computer)."
                },
                {
                    feature: "Multi-GPU Pipeline & Acoustic Drift Compensation",
                    keywords: "H100/H200 GPU Cluster Workloads, VRAM OOM Prevention, Audio Chunking, Acoustic Speech Drift Fix",
                    description: "Compensates for audio time drift and distributes heavy speech recognition inference jobs across multi-GPU compute clusters."
                }
            ]
        },
        tr: {
            title: "HAVELSAN — Düşük Gecikmeli BLE Biyometri & Kokpit Ses Analitiği",
            categoryLabel: "Sistem Programlama & Savunma Ar-Ge",
            shortDesc: "HAVELSAN Yeni Teknolojiler Takımı bünyesinde geliştirilen Ar-Ge yazılım projeleri. 25Hz biyometrik veri akışı için ham HCI BLE sürücüsü ve Git-tarzı versiyonlama içeren kokpit konuşma analizi (STT) optimizasyon hattı sunar.",
            overview: `HAVELSAN Yeni Teknolojiler Takımı bünyesindeki yazılım mühendisliği stajım boyunca iki kritik yüksek performanslı Ar-Ge mimarisi geliştirdim:

1. HALP Garmin BLE Biyometri Sistemi: Garmin akıllı saatlerinden PC donanımına Bluetooth Low Energy (BLE) üzerinden ivmeölçer ve nabız sensör verilerini 25Hz frekansında aktaran düşük gecikmeli veri alma motoru.
2. HALP LabelVoice Ses-Metin (STT) & Kokpit Analitiği Engine: Uçuş oturum seslerini metne dönüştüren, konuşmacı rollerini (PF / PM / ATC / COMPUTER) sınıflandıran ve Git-tarzı değiştirilemez commit geçmişi tutan kokpit ses analizi optimizasyon altyapısı.`,
            architecture: `İki uzmanlaşmış Ar-Ge mühendislik alanını kapsayan sistem mimarisi:

• Donanım & Alt Seviye BLE HCI Sürücüsü (HALP Garmin):
  - Windows WinRT paket kısıtlamalarını ve rastgele adres maskelemelerini işletim sistemi sürücüsünü tamamen baypas ederek çözdü.
  - TP-Link UB500 (Realtek RTL8761BU) üzerinde Zadig + bumble ile libusb üzerinden doğrudan ham HCI komutları çalıştırdı.
  - Reklam aralığını 100ms'ye düşürerek saat yakalama hızını 10 kat artırdı ve 25Hz Connect IQ ham paket ayrıştırıcıları ile 10 saniyelik zaman aşımı kurtarma mekanizması geliştirdi.

• Kokpit Ses-Metin (STT) & Versiyonlama Motoru (HALP LabelVoice):
  - Etiket düzenlemede veri kaybını önleyen append-only Git-tarzı commit versiyon katmanı (HEAD çalışma kopyası + Commits snapshot tablosu) tasarladı.
  - VibeVoice STT, WavLM konuşmacı gömmeleri (embeddings), CTC akustik hizalama ve konuşma kayması düzeltme algoritmalarını entegre etti.
  - Uzun ses işleme yüklerini H100 baseline ve H200 burst GPU havuzlarına VRAM OOM hatası olmadan dağıttı.`,
            metrics: "HAVELSAN Yeni Teknolojiler Ar-Ge · 25Hz Düşük Gecikmeli BLE Akışı · Ham HCI Sürücüsü (libusb) · VibeVoice STT & WavLM Hizalama · Git-Tarzı Commit Versiyonlama",
            features: [
                {
                    feature: "Ham HCI BLE Sürücüsü & Windows İşletim Sistemi Baypası",
                    keywords: "Bluetooth Low Energy (BLE), Ham HCI Komutları, libusb, Zadig WinUSB, Python bumble, TP-Link UB500 (RTL8761BU)",
                    description: "Windows WinRT yığınını baypas ederek ham HCI komutları çalıştırır ve Garmin akıllı saat eşleşmesi için özel BLE reklam paket yapıları sunar."
                },
                {
                    feature: "25Hz Garmin Biyometri Veri Alma & Tarama Durum Makinesi",
                    keywords: "Connect IQ API 3.1.0, 25Hz Örnekleme, 100ms Reklam Aralığı, Aday Kara Listeleme, 10s Zaman Aşımı Kurtarma",
                    description: "Garmin saatten 25Hz ivmeölçer ve nabız verilerini özel ham paket ayrıştırıcıları ve kara liste kurtarma durum makinesiyle toplar."
                },
                {
                    feature: "Git-Tarzı Değiştirilemez Transkript Commit Motoru",
                    keywords: "Append-Only Commit Mimarisi, HEAD Çalışma Kopyası, Snapshot Versiyonlama, PostgreSQL, Geri Alma Güvenliği",
                    description: "Transkript düzenleme sırasında her kaydetme işleminde anlık görüntü (snapshot) commit'i oluşturarak veri kaybını kesin olarak önler."
                },
                {
                    feature: "Kokpit STT & Konuşmacı Rolü Sınıflandırma",
                    keywords: "VibeVoice STT, WavLM Konuşmacı Gömmeleri, CTC Akustik Hizalama, Kokpit Rol Ayrıştırma (PF/PM/ATC/COMPUTER)",
                    description: "Kokpit ses kayıtlarını metne dönüştürür ve konuşmaları uçuş rollerine (Pilot Flying, Pilot Monitoring, Hava Trafik Kontrol, Bilgisayar) atar."
                },
                {
                    feature: "Çoklu GPU Hattı & Akustik Kayma Düzeltme",
                    keywords: "H100/H200 GPU Küme Yükleri, VRAM OOM Önleme, Ses Parçalama (Chunking), Akustik Konuşma Kayması Düzeltme",
                    description: "Ses zaman kaymalarını telafi eder ve ağır ses tanıma modellerini çoklu GPU bilgi işlem kümelerine dengeli olarak dağıtır."
                }
            ]
        }
    }
];

// --- i18n Language State Management ---
const getPreferredLanguage = () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && (savedLang === 'tr' || savedLang === 'en')) return savedLang;
    const navLang = navigator.language || navigator.userLanguage || 'en';
    return navLang.toLowerCase().startsWith('tr') ? 'tr' : 'en';
};

let currentLang = getPreferredLanguage();

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const langBadge = document.getElementById('lang-badge');
    if (langBadge) {
        langBadge.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    updateStaticTranslations();
    renderProjects();
    loadProjectDetailPage();
};

const updateStaticTranslations = () => {
    const t = UI_TEXT[currentLang];
    if (!t) return;

    const navProjects = document.getElementById('nav-projects-link');
    if (navProjects) navProjects.textContent = t.navProjects;
    
    const navAbout = document.getElementById('nav-about-link');
    if (navAbout) navAbout.textContent = t.navAbout;

    const navContact = document.getElementById('nav-contact-link');
    if (navContact) navContact.textContent = t.navContact;

    const detailBackLink = document.getElementById('detail-back-link');
    if (detailBackLink) detailBackLink.textContent = t.navBack;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;

    const heroDesc = document.getElementById('hero-desc');
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    const heroCtaProjects = document.getElementById('hero-cta-projects');
    if (heroCtaProjects) {
        heroCtaProjects.innerHTML = `
            <span>${escapeHTML(t.heroCtaProjects)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
        `;
    }

    const heroCtaGithub = document.getElementById('hero-cta-github');
    if (heroCtaGithub) {
        heroCtaGithub.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.45rem;">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>${escapeHTML(t.heroCtaGithub)}</span>
        `;
    }

    const showcaseTitle = document.querySelector('.section-title');
    if (showcaseTitle) showcaseTitle.textContent = t.showcaseTitle;

    const filterAll = document.getElementById('filter-all');
    if (filterAll) filterAll.textContent = t.filterAll;

    const filterSystems = document.getElementById('filter-systems');
    if (filterSystems) filterSystems.textContent = t.filterSystems;

    const filterEmbedded = document.getElementById('filter-embedded');
    if (filterEmbedded) filterEmbedded.textContent = t.filterEmbedded;

    const filterAi = document.getElementById('filter-ai-ml');
    if (filterAi) filterAi.textContent = t.filterAi;

    const searchInput = document.getElementById('project-search');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // About & Contact Static Translations
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

    const aboutTagline = document.getElementById('about-tagline');
    if (aboutTagline) aboutTagline.textContent = t.aboutTagline;

    const aboutBioHeading = document.getElementById('about-bio-heading');
    if (aboutBioHeading) aboutBioHeading.textContent = t.aboutBioHeading;

    const aboutBioText = document.getElementById('about-bio-text');
    if (aboutBioText) aboutBioText.textContent = t.aboutBioText;

    const aboutExpHeading = document.getElementById('about-exp-heading');
    if (aboutExpHeading) aboutExpHeading.textContent = t.aboutExpHeading;

    const roleHavelsan = document.getElementById('role-havelsan');
    if (roleHavelsan) roleHavelsan.textContent = t.roleHavelsan;

    const descHavelsan = document.getElementById('desc-havelsan');
    if (descHavelsan) descHavelsan.textContent = t.descHavelsan;

    const roleItems = document.getElementById('role-items');
    if (roleItems) roleItems.textContent = t.roleItems;

    const descItems = document.getElementById('desc-items');
    if (descItems) descItems.textContent = t.descItems;

    const roleGaziAi = document.getElementById('role-gazi-ai');
    if (roleGaziAi) roleGaziAi.textContent = t.roleGaziAi;

    const descGaziAi = document.getElementById('desc-gazi-ai');
    if (descGaziAi) descGaziAi.textContent = t.descGaziAi;

    const aboutEduHeading = document.getElementById('about-edu-heading');
    if (aboutEduHeading) aboutEduHeading.textContent = t.aboutEduHeading;

    const degreeGazi = document.getElementById('degree-gazi');
    if (degreeGazi) degreeGazi.textContent = t.degreeGazi;

    const gpaGazi = document.getElementById('gpa-gazi');
    if (gpaGazi) gpaGazi.textContent = t.gpaGazi;

    const degreeAgu = document.getElementById('degree-agu');
    if (degreeAgu) degreeAgu.textContent = t.degreeAgu;

    const gpaAgu = document.getElementById('gpa-agu');
    if (gpaAgu) gpaAgu.textContent = t.gpaAgu;

    const schoolHigh = document.getElementById('school-high');
    if (schoolHigh) schoolHigh.textContent = t.schoolHigh;

    const degreeHigh = document.getElementById('degree-high');
    if (degreeHigh) degreeHigh.textContent = t.degreeHigh;

    const extraHigh = document.getElementById('extra-high');
    if (extraHigh) extraHigh.textContent = t.extraHigh;

    const aboutSkillsHeading = document.getElementById('about-skills-heading');
    if (aboutSkillsHeading) aboutSkillsHeading.textContent = t.aboutSkillsHeading;

    const skillCatLang = document.getElementById('skill-cat-lang');
    if (skillCatLang) skillCatLang.textContent = t.skillCatLang;

    const skillCatAi = document.getElementById('skill-cat-ai');
    if (skillCatAi) skillCatAi.textContent = t.skillCatAi;

    const skillCatBackend = document.getElementById('skill-cat-backend');
    if (skillCatBackend) skillCatBackend.textContent = t.skillCatBackend;

    const skillCatMobile = document.getElementById('skill-cat-mobile');
    if (skillCatMobile) skillCatMobile.textContent = t.skillCatMobile;

    const aboutLangTitle = document.getElementById('about-lang-title');
    if (aboutLangTitle) aboutLangTitle.textContent = t.aboutLangTitle;

    const badgeTr = document.getElementById('badge-tr');
    if (badgeTr) badgeTr.textContent = t.badgeTr;

    const badgeDe = document.getElementById('badge-de');
    if (badgeDe) badgeDe.textContent = t.badgeDe;

    const badgeEn = document.getElementById('badge-en');
    if (badgeEn) badgeEn.textContent = t.badgeEn;

    const badgeAr = document.getElementById('badge-ar');
    if (badgeAr) badgeAr.textContent = t.badgeAr;

    const contactTitle = document.getElementById('contact-title');
    if (contactTitle) contactTitle.textContent = t.contactTitle;

    const contactDesc = document.getElementById('contact-desc');
    if (contactDesc) contactDesc.textContent = t.contactDesc;

    const contactEmailBtn = document.getElementById('contact-email-btn');
    if (contactEmailBtn) {
        const textNode = Array.from(contactEmailBtn.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.nodeValue = " " + t.contactEmailBtn;
    }

    const contactLinkedinBtn = document.getElementById('contact-linkedin-btn');
    if (contactLinkedinBtn) contactLinkedinBtn.textContent = t.contactLinkedinBtn;

    const footerText = document.querySelector('.footer-text');
    if (footerText) footerText.innerHTML = t.copyright;
};

// Language Toggle Event
const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'tr' ? 'en' : 'tr');
    });
}

// Active Nav Link Observer on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
});

// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
let sunIcon = null;
let moonIcon = null;

if (themeToggleBtn) {
    sunIcon = themeToggleBtn.querySelector('.sun-icon');
    moonIcon = themeToggleBtn.querySelector('.moon-icon');
}

const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (sunIcon && moonIcon) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
};

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

setTheme(getPreferredTheme());

// --- Helper Utilities ---
const escapeHTML = (str) => {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
};

const formatModalText = (text) => {
    if (!text) return '';
    const blocks = text.split(/\n\n+/);
    return blocks.map(block => {
        const lines = block.trim().split('\n');
        if (lines.length > 0 && lines.every(line => line.trim().match(/^[-•]\s+/))) {
            const listItems = lines.map(line => `<li>${escapeHTML(line.trim().replace(/^[-•]\s+/, ''))}</li>`).join('');
            return `<ul class="formatted-list">${listItems}</ul>`;
        }
        return `<p class="formatted-p">${lines.map(l => escapeHTML(l)).join('<br>')}</p>`;
    }).join('');
};

// --- Homepage Project Grid Rendering ---
const projectsGrid = document.getElementById('projects-grid');
const searchInput = document.getElementById('project-search');
const filterContainer = document.getElementById('filter-tags-container');

let activeFilter = 'all';
let searchQuery = '';

const renderProjects = () => {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const t = UI_TEXT[currentLang];
    
    const filtered = PROJECTS.filter(project => {
        const pContent = project[currentLang] || project.en;
        const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
        const matchesSearch = pContent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              pContent.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p>${t.noProjects}</p>
            </div>
        `;
        return;
    }

    filtered.forEach(project => {
        const pContent = project[currentLang] || project.en;
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('id', `card-${project.id}`);
        
        const tagHTML = project.tags.map(tag => `<span class="tech-tag">${escapeHTML(tag)}</span>`).join('');
        const isLogo = project.image && (project.image.toLowerCase().includes('logo') || project.image.toLowerCase().endsWith('.jpeg'));
        const imageHTML = project.image ? `
            <div class="card-image-wrapper ${isLogo ? 'is-logo' : ''}">
                <img src="${escapeHTML(project.image)}" alt="${escapeHTML(pContent.title)}" class="card-image ${isLogo ? 'card-logo' : ''}" loading="lazy">
            </div>
        ` : '';

        const appStoreLinkHTML = project.appStoreUrl ? `
            <a href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="appstore-link" aria-label="View on App Store" title="App Store">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 1.04-2.85 0-.15-.01-.3-.04-.44-.98.04-2.17.65-2.87 1.47-.62.72-1.07 1.86-1.07 2.9 0 .15.02.3.04.43 1.1-.09 2.24-.76 2.9-1.51z"/>
                </svg>
            </a>
        ` : '';

        const playStoreLinkHTML = project.playStoreUrl ? `
            <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="appstore-link" aria-label="View on Play Store" title="Google Play Store">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.38.214-.725.609-.92zm11.602 11.604l2.293 2.293-12.08 6.945 9.787-9.238zm0-2.836L5.424 1.337l12.08 6.945-2.293 2.294zm1.414 1.418l3.197 1.838c.683.393.683 1.032 0 1.425l-3.197 1.838-2.093-2.093 2.093-2.008z"/>
                </svg>
            </a>
        ` : '';

        const githubLinkHTML = (!project.isPrivate && project.githubUrl) ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="github-link" aria-label="View source on GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
            </a>
        ` : '';

        card.innerHTML = `
            ${imageHTML}
            <div class="card-content">
                <div class="card-top">
                    <div class="project-meta">
                        <span class="project-category">${escapeHTML(pContent.categoryLabel)}</span>
                        <span class="project-year">${escapeHTML(project.year)}</span>
                    </div>
                    <h3 class="project-title">${escapeHTML(pContent.title)}</h3>
                    <p class="project-desc">${escapeHTML(pContent.shortDesc)}</p>
                </div>
                <div class="card-bottom">
                    <div class="project-tags">
                        ${tagHTML}
                    </div>
                    <div class="project-link-group">
                        <a href="project.html?id=${encodeURIComponent(project.id)}" class="project-link view-details-btn">
                            ${t.viewDetails}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                        ${appStoreLinkHTML}
                        ${playStoreLinkHTML}
                        ${githubLinkHTML}
                    </div>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
};

if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
        const target = e.target.closest('.filter-tag');
        if (!target) return;

        filterContainer.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');

        activeFilter = target.getAttribute('data-filter');
        renderProjects();
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProjects();
    });
}

// --- Standalone Project Detail Page Loader (`project.html`) ---
const loadProjectDetailPage = () => {
    const projectDetailMain = document.getElementById('project-detail-main');
    if (!projectDetailMain) return;

    const t = UI_TEXT[currentLang];
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'lagent-legal-ops';
    
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    
    if (project) {
        const pContent = project[currentLang] || project.en;
        document.title = `${pContent.title} | Emir Ceran`;

        const tagHTML = project.tags.map(tag => `<span class="tech-tag">${escapeHTML(tag)}</span>`).join('');
        
        const isLogo = project.image && (project.image.toLowerCase().includes('logo') || project.image.toLowerCase().endsWith('.jpeg'));
        const imageBannerHTML = project.image ? `
            <div class="${isLogo ? 'detail-hero-logo-wrapper' : 'detail-hero-image-wrapper'}">
                <img src="${escapeHTML(project.image)}" alt="${escapeHTML(pContent.title)}" class="${isLogo ? 'detail-hero-logo' : 'detail-hero-image'}">
            </div>
        ` : '';

        const appStoreButtonHTML = project.appStoreUrl ? `
            <a href="${project.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="detail-appstore-btn" style="background-color: var(--text-primary); color: var(--bg-primary); border: 1px solid var(--border-color); display: inline-flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:0.5rem;">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 1.04-2.85 0-.15-.01-.3-.04-.44-.98.04-2.17.65-2.87 1.47-.62.72-1.07 1.86-1.07 2.9 0 .15.02.3.04.43 1.1-.09 2.24-.76 2.9-1.51z"/>
                </svg>
                ${t.appStoreBtn}
            </a>
        ` : '';

        const playStoreButtonHTML = project.playStoreUrl ? `
            <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="detail-playstore-btn" style="background-color: var(--text-primary); color: var(--bg-primary); border: 1px solid var(--border-color); display: inline-flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:0.5rem;">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.38.214-.725.609-.92zm11.602 11.604l2.293 2.293-12.08 6.945 9.787-9.238zm0-2.836L5.424 1.337l12.08 6.945-2.293 2.294zm1.414 1.418l3.197 1.838c.683.393.683 1.032 0 1.425l-3.197 1.838-2.093-2.093 2.093-2.008z"/>
                </svg>
                ${t.playStoreBtn}
            </a>
        ` : '';

        // Source repo button logic: hide if private
        const sourceButtonHTML = (!project.isPrivate && project.githubUrl) ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="detail-source-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.5rem;">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                ${t.viewSource}
            </a>
        ` : `
            <div class="private-repo-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                ${t.privateBadge}
            </div>
        `;

        // Render Features mapped with Technical Keywords (No raw code blocks)
        const featuresHTML = (pContent.features && pContent.features.length > 0) ? `
            <section class="detail-section">
                <h2>${t.featuresHeader}</h2>
                <div class="features-grid">
                    ${pContent.features.map(f => `
                        <div class="feature-card">
                            <div class="feature-header">
                                <h3 class="feature-title">${escapeHTML(f.feature)}</h3>
                                <div class="feature-keywords">
                                    ${f.keywords.split(',').map(k => `<span class="keyword-badge">${escapeHTML(k.trim())}</span>`).join('')}
                                </div>
                            </div>
                            <p class="feature-desc">${escapeHTML(f.description)}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        ` : '';

        const isWebGallery = project.galleryType === 'web';
        const galleryHTML = (project.gallery && project.gallery.length > 0) ? `
            <section class="detail-section">
                <h2>${t.galleryHeader}</h2>
                <div class="gallery-grid ${isWebGallery ? 'web-gallery-grid' : 'mobile-gallery-grid'}">
                    ${project.gallery.map(img => {
                        const captionText = img.caption ? (img.caption[currentLang] || img.caption.en || '') : '';
                        return `
                            <div class="gallery-card ${isWebGallery ? 'web-gallery-card' : ''}">
                                <div class="gallery-image-wrapper ${isWebGallery ? 'web-image-wrapper' : 'mobile-image-wrapper'}">
                                    <img src="${escapeHTML(img.url)}" alt="${escapeHTML(captionText)}" class="gallery-image" loading="lazy">
                                </div>
                                ${captionText ? `<p class="gallery-caption">${escapeHTML(captionText)}</p>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        ` : '';

        projectDetailMain.innerHTML = `
            <div class="detail-header">
                <a href="index.html#projects" class="back-breadcrumb" id="detail-back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    ${t.navBack}
                </a>
                <div class="detail-title-wrapper">
                    <span class="detail-category">${escapeHTML(pContent.categoryLabel)}</span>
                    <h1 class="detail-title">${escapeHTML(pContent.title)}</h1>
                    <p class="detail-lead">${escapeHTML(pContent.shortDesc)}</p>
                </div>
            </div>

            ${imageBannerHTML}

            <div class="detail-meta-grid">
                <div class="meta-item">
                    <div class="meta-item-title">${t.timeline}</div>
                    <div class="meta-item-value">${escapeHTML(project.year)}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-item-title">${t.repoStatus}</div>
                    <div class="meta-item-value">${project.isPrivate ? t.statusPrivate : t.statusOpen}</div>
                </div>
                <div class="meta-item" style="grid-column: span 2;">
                    <div class="meta-item-title">${t.keyOutcome}</div>
                    <div class="meta-item-value highlight-metrics">${escapeHTML(pContent.metrics)}</div>
                </div>
            </div>

            <div class="detail-body">
                <section class="detail-section">
                    <h2>${t.overviewHeader}</h2>
                    ${formatModalText(pContent.overview)}
                </section>

                <section class="detail-section">
                    <h2>${t.architectureHeader}</h2>
                    ${formatModalText(pContent.architecture)}
                </section>

                ${featuresHTML}

                ${galleryHTML}

                <section class="detail-section">
                    <h2>${t.technologiesHeader}</h2>
                    <div class="project-tags">
                        ${tagHTML}
                    </div>
                </section>
            </div>

            <div class="detail-footer" style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center;">
                ${appStoreButtonHTML}
                ${playStoreButtonHTML}
                ${sourceButtonHTML}
            </div>
        `;
    }
};

// --- Image Lightbox Modal Engine ---
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCloseBtn = document.getElementById('lightbox-close');
const lightboxOverlay = document.getElementById('lightbox-overlay');

const openLightbox = (src, caption) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
    }
});

// Delegation for gallery card clicks and hero image clicks
document.addEventListener('click', (e) => {
    const galleryCard = e.target.closest('.gallery-card');
    if (galleryCard) {
        const img = galleryCard.querySelector('img');
        const caption = galleryCard.querySelector('.gallery-caption');
        if (img) {
            openLightbox(img.src, caption ? caption.textContent : img.alt);
        }
        return;
    }

    const heroImageWrapper = e.target.closest('.detail-hero-image-wrapper, .detail-hero-logo-wrapper');
    if (heroImageWrapper) {
        const img = heroImageWrapper.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    }
});

// --- Initial Page Initialization ---
setLanguage(currentLang);
