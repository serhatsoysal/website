// Translation data following Single Responsibility Principle
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact'
    },
    
    // Home Page
    home: {
      hero: {
        greeting: 'Hi, I\'m',
        name: 'Serhat Soysal',
        title: 'Full-Stack Software Engineer',
        subtitle: 'Crafting scalable systems & smart interfaces',
        description: 'I build robust, scalable applications using cutting-edge technologies. Passionate about clean code, system design, and creating exceptional user experiences.',
        cta: {
          viewWork: 'View My Work',
          getInTouch: 'Get in Touch'
        }
      },
      services: {
        title: 'Professional Services',
        subtitle: 'Delivering enterprise-grade solutions with cutting-edge technologies and industry best practices.',
        fullStack: {
          title: 'Full-Stack Development',
          description: 'End-to-end application development with React, TypeScript, Spring Boot, and Node.js. Delivering scalable solutions with modern architectures, clean code practices, and comprehensive testing strategies.'
        },
        cloudNative: {
          title: 'Cloud-Native Solutions',
          description: 'Architecting and deploying highly scalable applications on AWS, Azure, and GCP. Expert in containerization with Docker, orchestration with Kubernetes, and serverless architectures.'
        },
        systemDesign: {
          title: 'System Architecture',
          description: 'Designing resilient, high-performance systems using microservices, event-driven architectures, and distributed computing patterns. Focus on scalability, reliability, and maintainability.'
        },
        devops: {
          title: 'DevOps & CI/CD',
          description: 'Implementing automated deployment pipelines, infrastructure as code, and monitoring solutions. Expertise in Jenkins, GitLab CI, GitHub Actions, and cloud-native deployment strategies.'
        },
        database: {
          title: 'Database Solutions',
          description: 'Designing and optimizing database architectures for performance and scalability. Expert in PostgreSQL, MongoDB, Redis, and database migration strategies for enterprise applications.'
        },
        apiDesign: {
          title: 'API Design & Integration',
          description: 'Creating RESTful APIs, GraphQL endpoints, and real-time communication systems. Focus on security, performance, and developer experience with comprehensive documentation.'
        },
        performance: {
          title: 'Performance Optimization',
          description: 'Analyzing and optimizing application performance, reducing load times, and implementing caching strategies. Expert in profiling, monitoring, and capacity planning.'
        },
        security: {
          title: 'Security & Compliance',
          description: 'Implementing security best practices, authentication systems, and compliance frameworks. Experience with OAuth, JWT, data encryption, and security auditing.'
        },
        consulting: {
          title: 'Technical Leadership',
          description: 'Providing strategic technical guidance, code reviews, and mentorship. Helping teams adopt best practices, improve code quality, and deliver high-quality software solutions.'
        }
      },
      stats: {
        projects: 'Projects Completed',
        experience: 'Years Experience',
        technologies: 'Technologies Used',
        clients: 'Happy Clients'
      }
    },
    
    // About Page
    about: {
      title: 'About Me',
      subtitle: 'Full-Stack Software Engineer with a passion for innovation',
      intro: 'I\'m a passionate full-stack software engineer with expertise in building scalable, high-performance applications. My journey in software development has been driven by curiosity and a desire to solve complex problems through elegant code.',
      background: {
        title: 'Background',
        content: 'With years of experience in software development, I\'ve worked on various projects ranging from microservices architectures to modern web applications. I believe in writing clean, maintainable code and following industry best practices.'
      },
      skills: {
        title: 'Technical Skills',
        backend: 'Backend Development',
        frontend: 'Frontend Development',
        cloud: 'Cloud & DevOps',
        database: 'Database Management'
      },
      approach: {
        title: 'My Approach',
        content: 'I believe in continuous learning and staying updated with the latest technologies. My approach combines technical excellence with user-centered design to create solutions that not only work well but also provide exceptional user experiences.'
      }
    },
    
    // Projects Page
    projects: {
      title: 'My Projects',
      subtitle: 'A collection of applications and solutions I\'ve built using modern technologies',
      featured: 'Featured Projects',
      allProjects: 'All Projects',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      techStack: 'Tech Stack',
      comingSoon: 'Coming Soon'
    },
    
    // Blog Page
    blog: {
      title: 'Latest Articles',
      subtitle: 'Thoughts on software development, technology, and best practices',
      readMore: 'Read More',
      readTime: 'min read',
      publishedOn: 'Published on',
      tags: 'Tags',
      backToBlog: 'Back to Blog',
      noArticles: 'No articles found.',
      searchPlaceholder: 'Search articles...'
    },
    
    // Contact Page
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s discuss your project or just say hello',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        placeholder: {
          name: 'Your full name',
          email: 'your@email.com',
          subject: 'Project discussion',
          message: 'Tell me about your project...'
        }
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        response: 'I typically respond within 24 hours',
        social: 'Social Media',
        connect: 'Let\'s connect on professional networks'
      }
    },
    
    // Footer
    footer: {
      description: 'Full-stack Software Engineer specializing in enterprise-grade solutions with React, TypeScript, Spring Boot, and cloud-native architectures. Passionate about clean code, system design, and delivering exceptional user experiences through scalable, maintainable applications.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      copyright: '© {{year}} Serhat Soysal. All rights reserved.',
      builtWith: 'Built with React & Tailwind CSS'
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      notFound: 'Page not found',
      backHome: 'Back to Home',
      learnMore: 'Learn More',
      viewAll: 'View All',
      close: 'Close',
      open: 'Open',
      toggleTheme: 'Toggle theme',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode'
    }
  },
  
  tr: {
    // Navigation
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim'
    },
    
    // Home Page
    home: {
      hero: {
        greeting: 'Merhaba, Ben',
        name: 'Serhat Soysal',
        title: 'Full-Stack Yazılım Mühendisi',
        subtitle: 'Ölçeklenebilir sistemler ve akıllı arayüzler geliştiriyorum',
        description: 'Cutting-edge teknolojileri kullanarak sağlam, ölçeklenebilir uygulamalar geliştiriyorum. Temiz kod, sistem tasarımı ve olağanüstü kullanıcı deneyimleri yaratma konusunda tutkulum.',
        cta: {
          viewWork: 'Çalışmalarımı Gör',
          getInTouch: 'İletişime Geç'
        }
      },
      services: {
        title: 'Profesyonel Hizmetler',
        subtitle: 'Cutting-edge teknolojiler ve endüstri en iyi uygulamaları ile kurumsal düzeyde çözümler sunuyorum.',
        fullStack: {
          title: 'Full-Stack Geliştirme',
          description: 'React, TypeScript, Spring Boot ve Node.js ile uçtan uca uygulama geliştirme. Modern mimariler, temiz kod uygulamaları ve kapsamlı test stratejileri ile ölçeklenebilir çözümler sunuyorum.'
        },
        cloudNative: {
          title: 'Bulut-Tabanlı Çözümler',
          description: 'AWS, Azure ve GCP üzerinde yüksek ölçeklenebilir uygulamalar tasarlıyor ve dağıtıyorum. Docker ile konteynerleştirme, Kubernetes ile orkestrasyon ve serverless mimarilerde uzmanım.'
        },
        systemDesign: {
          title: 'Sistem Mimarisi',
          description: 'Mikroservisler, event-driven mimariler ve dağıtık bilişim desenleri kullanarak dayanıklı, yüksek performanslı sistemler tasarlıyorum. Ölçeklenebilirlik, güvenilirlik ve sürdürülebilirlik odaklı.'
        },
        devops: {
          title: 'DevOps & CI/CD',
          description: 'Otomatik deployment pipeline\'ları, infrastructure as code ve monitoring çözümleri uyguluyorum. Jenkins, GitLab CI, GitHub Actions ve cloud-native deployment stratejilerinde uzmanım.'
        },
        database: {
          title: 'Veritabanı Çözümleri',
          description: 'Performans ve ölçeklenebilirlik için veritabanı mimarileri tasarlıyor ve optimize ediyorum. PostgreSQL, MongoDB, Redis ve kurumsal uygulamalar için veritabanı migrasyon stratejilerinde uzmanım.'
        },
        apiDesign: {
          title: 'API Tasarımı & Entegrasyon',
          description: 'RESTful API\'ler, GraphQL endpoint\'leri ve gerçek zamanlı iletişim sistemleri oluşturuyorum. Kapsamlı dokümantasyonla güvenlik, performans ve developer experience odaklı.'
        },
        performance: {
          title: 'Performans Optimizasyonu',
          description: 'Uygulama performansını analiz ediyor ve optimize ediyorum, yükleme sürelerini azaltıyor ve önbellekleme stratejileri uyguluyorum. Profiling, monitoring ve kapasite planlamasında uzmanım.'
        },
        security: {
          title: 'Güvenlik & Compliance',
          description: 'Güvenlik en iyi uygulamaları, kimlik doğrulama sistemleri ve compliance çerçeveleri uyguluyorum. OAuth, JWT, veri şifreleme ve güvenlik denetimi konularında deneyimliyim.'
        },
        consulting: {
          title: 'Teknik Liderlik',
          description: 'Stratejik teknik rehberlik, kod incelemeleri ve mentörlük sağlıyorum. Ekiplerin en iyi uygulamaları benimsemeleri, kod kalitesini artırmaları ve yüksek kaliteli yazılım çözümleri sunmalarına yardımcı oluyorum.'
        }
      },
      stats: {
        projects: 'Tamamlanan Proje',
        experience: 'Yıl Deneyim',
        technologies: 'Kullanılan Teknoloji',
        clients: 'Mutlu Müşteri'
      }
    },
    
    // About Page
    about: {
      title: 'Hakkımda',
      subtitle: 'İnovasyon tutkusu olan Full-Stack Yazılım Mühendisi',
      intro: 'Ölçeklenebilir, yüksek performanslı uygulamalar geliştirme konusunda uzmanlığa sahip tutkulu bir full-stack yazılım mühendisiyim. Yazılım geliştirmedeki yolculuğum merak ve karmaşık sorunları zarif kodlarla çözme arzusuyla şekillenmiştir.',
      background: {
        title: 'Geçmiş',
        content: 'Yıllarca yazılım geliştirme deneyimi ile mikroservis mimarilerinden modern web uygulamalarına kadar çeşitli projelerde çalıştım. Temiz, sürdürülebilir kod yazmaya ve endüstri en iyi uygulamalarını takip etmeye inanıyorum.'
      },
      skills: {
        title: 'Teknik Yetenekler',
        backend: 'Backend Geliştirme',
        frontend: 'Frontend Geliştirme',
        cloud: 'Bulut & DevOps',
        database: 'Veritabanı Yönetimi'
      },
      approach: {
        title: 'Yaklaşımım',
        content: 'Sürekli öğrenmeye ve en son teknolojilerle güncel kalmaya inanıyorum. Yaklaşımım teknik mükemmelliği kullanıcı odaklı tasarımla birleştirerek sadece iyi çalışmakla kalmayıp aynı zamanda olağanüstü kullanıcı deneyimleri sağlayan çözümler yaratmaktır.'
      }
    },
    
    // Projects Page
    projects: {
      title: 'Projelerim',
      subtitle: 'Modern teknolojiler kullanarak geliştirdiğim uygulama ve çözümler koleksiyonu',
      featured: 'Öne Çıkan Projeler',
      allProjects: 'Tüm Projeler',
      viewDemo: 'Demoyu Gör',
      viewCode: 'Kodu Gör',
      techStack: 'Teknoloji Yığını',
      comingSoon: 'Yakında'
    },
    
    // Blog Page
    blog: {
      title: 'Son Makaleler',
      subtitle: 'Yazılım geliştirme, teknoloji ve en iyi uygulamalar üzerine düşünceler',
      readMore: 'Devamını Oku',
      readTime: 'dakika okuma',
      publishedOn: 'Yayınlanma tarihi',
      tags: 'Etiketler',
      backToBlog: 'Bloga Dön',
      noArticles: 'Makale bulunamadı.',
      searchPlaceholder: 'Makale ara...'
    },
    
    // Contact Page
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'Projenizi tartışalım veya sadece merhaba deyin',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta Adresi',
        subject: 'Konu',
        message: 'Mesaj',
        send: 'Mesaj Gönder',
        sending: 'Gönderiliyor...',
        placeholder: {
          name: 'Adınız soyadınız',
          email: 'ornek@email.com',
          subject: 'Proje görüşmesi',
          message: 'Projeniz hakkında bana anlatın...'
        }
      },
      info: {
        title: 'İletişim Bilgileri',
        email: 'E-posta',
        response: 'Genellikle 24 saat içinde yanıt veririm',
        social: 'Sosyal Medya',
        connect: 'Profesyonel ağlarda bağlantı kuralım'
      }
    },
    
    // Footer
    footer: {
      description: 'React, TypeScript, Spring Boot ve bulut-native mimariler ile kurumsal düzeyde çözümler konusunda uzmanlaşmış Full-Stack Yazılım Mühendisi. Temiz kod, sistem tasarımı ve ölçeklenebilir, sürdürülebilir uygulamalar aracılığıyla olağanüstü kullanıcı deneyimleri sunma konusunda tutkulu.',
      quickLinks: 'Hızlı Bağlantılar',
      contact: 'İletişim',
      copyright: '© {{year}} Serhat Soysal. Tüm hakları saklıdır.',
      builtWith: 'React & Tailwind CSS ile geliştirilmiştir'
    },
    
    // Common
    common: {
      loading: 'Yükleniyor...',
      error: 'Bir şeyler ters gitti',
      notFound: 'Sayfa bulunamadı',
      backHome: 'Ana Sayfaya Dön',
      learnMore: 'Daha Fazla Bilgi',
      viewAll: 'Tümünü Gör',
      close: 'Kapat',
      open: 'Aç',
      toggleTheme: 'Temayı değiştir',
      darkMode: 'Karanlık Mod',
      lightMode: 'Açık Mod'
    }
  },

  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      projects: 'المشاريع',
      blog: 'المدونة',
      contact: 'اتصل بي'
    },
    
    // Home Page
    home: {
      hero: {
        greeting: 'مرحباً، أنا',
        name: 'سرحات سويسال',
        title: 'مهندس برمجيات متكامل',
        subtitle: 'صناعة أنظمة قابلة للتوسع وواجهات ذكية',
        description: 'أقوم ببناء تطبيقات قوية وقابلة للتوسع باستخدام التقنيات المتطورة. شغوف بالكود النظيف وتصميم الأنظمة وإنشاء تجارب مستخدم استثنائية.',
        cta: {
          viewWork: 'اطلع على أعمالي',
          getInTouch: 'تواصل معي'
        }
      },
      services: {
        title: 'الخدمات المهنية',
        subtitle: 'تقديم حلول على مستوى المؤسسات بأحدث التقنيات وأفضل الممارسات الصناعية.',
        fullStack: {
          title: 'التطوير المتكامل',
          description: 'تطوير تطبيقات شاملة باستخدام React، TypeScript، Spring Boot، و Node.js. تقديم حلول قابلة للتوسع مع المعمارية الحديثة، ممارسات الكود النظيف، واستراتيجيات الاختبار الشاملة.'
        },
        cloudNative: {
          title: 'الحلول السحابية',
          description: 'تصميم ونشر تطبيقات عالية التوسع على AWS، Azure، و GCP. خبير في الحاويات مع Docker، التنسيق مع Kubernetes، والمعماريات بدون خادم.'
        },
        systemDesign: {
          title: 'هندسة الأنظمة',
          description: 'تصميم أنظمة مرنة وعالية الأداء باستخدام الخدمات الصغيرة والمعماريات المدفوعة بالأحداث وأنماط الحوسبة الموزعة. التركيز على قابلية التوسع والموثوقية والصيانة.'
        },
        devops: {
          title: 'DevOps & CI/CD',
          description: 'تنفيذ خطوط أنابيب النشر الآلية، والبنية التحتية كرمز، وحلول المراقبة. الخبرة في Jenkins، GitLab CI، GitHub Actions، واستراتيجيات النشر السحابية الأصلية.'
        },
        database: {
          title: 'حلول قواعد البيانات',
          description: 'تصميم وتحسين معماريات قواعد البيانات للأداء وقابلية التوسع. خبير في PostgreSQL، MongoDB، Redis، واستراتيجيات ترحيل قواعد البيانات للتطبيقات المؤسسية.'
        },
        apiDesign: {
          title: 'تصميم API والتكامل',
          description: 'إنشاء RESTful APIs، نقاط GraphQL، وأنظمة التواصل في الوقت الفعلي. التركيز على الأمان والأداء وتجربة المطور مع التوثيق الشامل.'
        },
        performance: {
          title: 'تحسين الأداء',
          description: 'تحليل وتحسين أداء التطبيقات، تقليل أوقات التحميل، وتنفيذ استراتيجيات التخزين المؤقت. خبير في التشخيص والمراقبة وتخطيط السعة.'
        },
        security: {
          title: 'الأمان والامتثال',
          description: 'تنفيذ أفضل ممارسات الأمان، أنظمة المصادقة، وإطارات الامتثال. خبرة في OAuth، JWT، تشفير البيانات، ومراجعة الأمان.'
        },
        consulting: {
          title: 'القيادة التقنية',
          description: 'تقديم التوجيه التقني الاستراتيجي، مراجعات الكود، والإرشاد. مساعدة الفرق على تبني أفضل الممارسات، تحسين جودة الكود، وتقديم حلول برمجية عالية الجودة.'
        }
      },
      stats: {
        projects: 'المشاريع المكتملة',
        experience: 'سنوات الخبرة',
        technologies: 'التقنيات المستخدمة',
        clients: 'العملاء السعداء'
      }
    },
    
    // About Page
    about: {
      title: 'نبذة عني',
      subtitle: 'مهندس برمجيات متكامل شغوف بالابتكار',
      intro: 'أنا مهندس برمجيات متكامل شغوف بخبرة في بناء تطبيقات قابلة للتوسع وعالية الأداء. رحلتي في تطوير البرمجيات مدفوعة بالفضول والرغبة في حل المشاكل المعقدة من خلال الكود الأنيق.',
      background: {
        title: 'الخلفية',
        content: 'مع سنوات من الخبرة في تطوير البرمجيات، عملت على مشاريع متنوعة تتراوح من بنى الخدمات الصغيرة إلى تطبيقات الويب الحديثة. أؤمن بكتابة كود نظيف وقابل للصيانة واتباع أفضل الممارسات في الصناعة.'
      },
      skills: {
        title: 'المهارات التقنية',
        backend: 'تطوير الخلفية',
        frontend: 'تطوير الواجهة',
        cloud: 'السحابة والعمليات',
        database: 'إدارة قواعد البيانات'
      },
      approach: {
        title: 'منهجي',
        content: 'أؤمن بالتعلم المستمر والبقاء محدثاً مع أحدث التقنيات. منهجي يجمع بين التميز التقني والتصميم المتمحور حول المستخدم لإنشاء حلول لا تعمل بشكل جيد فحسب، بل تقدم أيضاً تجارب مستخدم استثنائية.'
      }
    },
    
    // Projects Page
    projects: {
      title: 'مشاريعي',
      subtitle: 'مجموعة من التطبيقات والحلول التي بنيتها باستخدام التقنيات الحديثة',
      featured: 'المشاريع المميزة',
      allProjects: 'جميع المشاريع',
      viewDemo: 'عرض تجريبي',
      viewCode: 'عرض الكود',
      techStack: 'مجموعة التقنيات',
      comingSoon: 'قريباً'
    },
    
    // Blog Page
    blog: {
      title: 'آخر المقالات',
      subtitle: 'أفكار حول تطوير البرمجيات والتكنولوجيا وأفضل الممارسات',
      readMore: 'اقرأ المزيد',
      readTime: 'دقيقة قراءة',
      publishedOn: 'نُشر في',
      tags: 'العلامات',
      backToBlog: 'العودة للمدونة',
      noArticles: 'لم يتم العثور على مقالات.',
      searchPlaceholder: 'البحث في المقالات...'
    },
    
    // Contact Page
    contact: {
      title: 'تواصل معي',
      subtitle: 'دعنا نناقش مشروعك أو فقط قل مرحباً',
      form: {
        name: 'الاسم الكامل',
        email: 'عنوان البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال...',
        placeholder: {
          name: 'اسمك الكامل',
          email: 'your@email.com',
          subject: 'مناقشة مشروع',
          message: 'أخبرني عن مشروعك...'
        }
      },
      info: {
        title: 'معلومات الاتصال',
        email: 'البريد الإلكتروني',
        response: 'عادة ما أرد خلال 24 ساعة',
        social: 'وسائل التواصل الاجتماعي',
        connect: 'دعنا نتواصل على الشبكات المهنية'
      }
    },
    
    // Footer
    footer: {
      description: 'مهندس برمجيات متكامل متخصص في الحلول على مستوى المؤسسات باستخدام React، TypeScript، Spring Boot، والهندسة المعمارية السحابية الأصلية. شغوف بالكود النظيف، تصميم الأنظمة، وتقديم تجارب مستخدم استثنائية من خلال التطبيقات القابلة للتوسع والقابلة للصيانة.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بي',
      copyright: '© {{year}} سرحات سويسال. جميع الحقوق محفوظة.',
      builtWith: 'مبني باستخدام React و Tailwind CSS'
    },
    
    // Common
    common: {
      loading: 'جارٍ التحميل...',
      error: 'حدث خطأ ما',
      notFound: 'الصفحة غير موجودة',
      backHome: 'العودة للرئيسية',
      learnMore: 'تعلم المزيد',
      viewAll: 'عرض الكل',
      close: 'إغلاق',
      open: 'فتح',
      toggleTheme: 'تبديل المظهر',
      darkMode: 'المظهر الداكن',
      lightMode: 'المظهر الفاتح'
    }
  },

  it: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'Chi Sono',
      projects: 'Progetti',
      blog: 'Blog',
      contact: 'Contatti'
    },
    
    // Home Page
    home: {
      hero: {
        greeting: 'Ciao, sono',
        name: 'Serhat Soysal',
        title: 'Ingegnere Software Full-Stack',
        subtitle: 'Creo sistemi scalabili e interfacce intelligenti',
        description: 'Sviluppo applicazioni robuste e scalabili utilizzando tecnologie all\'avanguardia. Appassionato di codice pulito, progettazione di sistemi e creazione di esperienze utente eccezionali.',
        cta: {
          viewWork: 'Vedi i Miei Lavori',
          getInTouch: 'Contattami'
        }
      },
      services: {
        title: 'Cosa Faccio',
        subtitle: 'Sviluppo applicazioni robuste e scalabili utilizzando tecnologie moderne e best practices.',
        fullStack: {
          title: 'Sviluppo Full-Stack',
          description: 'Creazione di applicazioni end-to-end con React, Spring Boot e framework moderni.'
        },
        cloudNative: {
          title: 'Soluzioni Cloud-Native',
          description: 'Progettazione e distribuzione di applicazioni scalabili su AWS, Docker e Kubernetes.'
        },
        systemDesign: {
          title: 'Architettura dei Sistemi',
          description: 'Creazione di sistemi efficienti e manutenibili con microservizi e architetture distribuite.'
        }
      },
      stats: {
        projects: 'Progetti Completati',
        experience: 'Anni di Esperienza',
        technologies: 'Tecnologie Utilizzate',
        clients: 'Clienti Soddisfatti'
      }
    },
    
    // About Page
    about: {
      title: 'Chi Sono',
      subtitle: 'Ingegnere Software Full-Stack con passione per l\'innovazione',
      intro: 'Sono un ingegnere software full-stack appassionato con esperienza nella creazione di applicazioni scalabili e ad alte prestazioni. Il mio percorso nello sviluppo software è guidato dalla curiosità e dal desiderio di risolvere problemi complessi attraverso codice elegante.',
      background: {
        title: 'Background',
        content: 'Con anni di esperienza nello sviluppo software, ho lavorato su vari progetti che spaziano dalle architetture di microservizi alle moderne applicazioni web. Credo nella scrittura di codice pulito e manutenibile e nel seguire le migliori pratiche del settore.'
      },
      skills: {
        title: 'Competenze Tecniche',
        backend: 'Sviluppo Backend',
        frontend: 'Sviluppo Frontend',
        cloud: 'Cloud & DevOps',
        database: 'Gestione Database'
      },
      approach: {
        title: 'Il Mio Approccio',
        content: 'Credo nell\'apprendimento continuo e nel rimanere aggiornato con le ultime tecnologie. Il mio approccio combina eccellenza tecnica con design centrato sull\'utente per creare soluzioni che non solo funzionano bene, ma forniscono anche esperienze utente eccezionali.'
      }
    },
    
    // Projects Page
    projects: {
      title: 'I Miei Progetti',
      subtitle: 'Una raccolta di applicazioni e soluzioni che ho costruito utilizzando tecnologie moderne',
      featured: 'Progetti in Evidenza',
      allProjects: 'Tutti i Progetti',
      viewDemo: 'Vedi Demo',
      viewCode: 'Vedi Codice',
      techStack: 'Stack Tecnologico',
      comingSoon: 'Prossimamente'
    },
    
    // Blog Page
    blog: {
      title: 'Ultimi Articoli',
      subtitle: 'Riflessioni sullo sviluppo software, tecnologia e best practices',
      readMore: 'Leggi di Più',
      readTime: 'min di lettura',
      publishedOn: 'Pubblicato il',
      tags: 'Tag',
      backToBlog: 'Torna al Blog',
      noArticles: 'Nessun articolo trovato.',
      searchPlaceholder: 'Cerca articoli...'
    },
    
    // Contact Page
    contact: {
      title: 'Contattami',
      subtitle: 'Parliamo del tuo progetto o semplicemente salutaci',
      form: {
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        subject: 'Oggetto',
        message: 'Messaggio',
        send: 'Invia Messaggio',
        sending: 'Invio in corso...',
        placeholder: {
          name: 'Il tuo nome completo',
          email: 'tua@email.com',
          subject: 'Discussione progetto',
          message: 'Parlami del tuo progetto...'
        }
      },
      info: {
        title: 'Informazioni di Contatto',
        email: 'Email',
        response: 'Rispondo tipicamente entro 24 ore',
        social: 'Social Media',
        connect: 'Connettiamoci sui network professionali'
      }
    },
    
    // Footer
    footer: {
      description: 'Ingegnere Software Full-Stack specializzato in soluzioni enterprise con React, TypeScript, Spring Boot e architetture cloud-native. Appassionato di codice pulito, progettazione di sistemi e creazione di esperienze utente eccezionali attraverso applicazioni scalabili e manutenibili.',
      quickLinks: 'Link Rapidi',
      contact: 'Contatti',
      copyright: '© {{year}} Serhat Soysal. Tutti i diritti riservati.',
      builtWith: 'Costruito con React & Tailwind CSS'
    },
    
    // Common
    common: {
      loading: 'Caricamento...',
      error: 'Qualcosa è andato storto',
      notFound: 'Pagina non trovata',
      backHome: 'Torna alla Home',
      learnMore: 'Scopri di Più',
      viewAll: 'Vedi Tutto',
      close: 'Chiudi',
      open: 'Apri',
      toggleTheme: 'Cambia tema',
      darkMode: 'Modalità Scura',
      lightMode: 'Modalità Chiara'
    }
  }
}; 