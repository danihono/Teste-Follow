// Sistema completo de internacionalização para o site da Follow Advisor

// Dicionário completo de traduções
const translations = {
    'pt': {
        // Cabeçalho e Menu
        'nav-home': 'Início',
        'nav-about': 'Sobre Nós',
        'nav-services': 'Serviços',
        'nav-team': 'Equipe',
        'nav-presence': 'Presença',
        'nav-cases': 'Cases',
        'nav-advantages': 'Diferenciais',
        'nav-contact': 'Contato',
        
        // Botões especiais
        'btn-academy': 'Academy',
        'btn-followia': 'Follow IA',
        'btn-client-access': 'Acesso Clientes',
        
        // Banner Principal
        'hero-title': 'Orientação que inspira!',
        'hero-subtitle': 'Consultoria e assessoria especializada em Qualidade e Supply-Chain',
        'hero-button': 'Entre em Contato',
        
        // Sobre Nós
        'about-title': 'Sobre a Follow Advisor',
        'about-description': 'A Follow Advisor é uma empresa de consultoria e assessoria em Qualidade e Supply-Chain, atendendo desde Assuntos Regulatórios, ANVISA, Qualidade, Logística da Cadeia Fria, Licenças e órgãos anuentes, até Projetos de Supply Chain e Armazenagem. Atuamos há 7 anos no mercado com foco em ações e entregas reais, oferecendo soluções customizadas para nossos clientes.',
        'mission-title': 'Missão',
        'mission-text': 'Oferecer serviços de consultoria e assessoria para garantir qualidade nos processos, atendimento global em demandas regulatórias e segurança nas operações de nossos clientes.',
        'vision-title': 'Visão',
        'vision-text': 'Desenvolver os melhores profissionais em soluções avançadas na cadeia logística.',
        'values-title': 'Valores',
        'value-1': 'Responsabilidade',
        'value-2': 'Transparência',
        'value-3': 'Eficiência',
        'value-4': 'Ética',
        
        // Números e Estatísticas
        'stats-anvisa': 'Empresas homologadas na ANVISA',
        'stats-pharma': 'Indústrias farmacêuticas atendidas',
        'stats-audits': 'Auditorias de Qualidade realizadas',
        'stats-tons': 'Toneladas de produtos importados',
        'stats-vehicles': 'Veículos sob gestão de Qualidade',
        'stats-routes': 'Cargas com qualificação de rotas mensais',
        
        // Serviços
        'services-title': 'Soluções Customizadas',
        'services-subtitle': 'Atendimento em Português, Inglês e Espanhol (incluindo relatórios sob demanda)',
        'service-regulatory-title': 'Assuntos Regulatórios',
        'service-regulatory-desc': 'Assessoria completa em licenciamento, certificações e adequação às normas regulatórias.',
        'service-qualification-title': 'Estudos de Qualificação',
        'service-qualification-desc': 'Qualificação térmica e validação de processos conforme normas nacionais e internacionais.',
        'service-supplychain-title': 'Supply Chain e Comércio Exterior',
        'service-supplychain-desc': 'Desenvolvimento e otimização de cadeias logísticas nacionais e internacionais.',
        'service-logistics-title': 'Logística, Transportes e Armazenagem',
        'service-logistics-desc': 'Assessoria completa em operações logísticas, transporte e armazenamento.',
        'service-medical-title': 'Assessoria para Distribuidoras Médicas',
        'service-medical-desc': 'Consultoria especializada para distribuidoras de dispositivos médicos e produtos para saúde.',
        'service-quality-title': 'Qualidade',
        'service-quality-desc': 'Implementação e gestão de sistemas de qualidade e processos de certificação.',
        'service-training-title': 'Treinamento e Qualificação',
        'service-training-desc': 'Programas de capacitação e desenvolvimento de equipes técnicas e operacionais.',
        'service-storage-title': 'Armazenagem e Distribuição',
        'service-storage-desc': 'Soluções especializadas para armazenagem e distribuição de insumos farmacêuticos e alimentos.',
        'service-foreigntrade-title': 'Consultoria de Comércio Exterior',
        'service-foreigntrade-desc': 'Regimes especiais, otimização de custos logísticos e soluções para comércio internacional.',
        'service-more': 'Saiba mais',
        'service-modal-close': 'Fechar',
        'service-legal-title': 'Jurídico Corporativo',
        'service-legal-desc': 'Softlanding com parceria em escritórios de atendimento presencial, projetos de compliance e risk mitigation para questões trabalhistas',
        
        // Equipe
        'team-title': 'Time de Gestores',
        'team-subtitle': 'Profissionais SÊNIOR de Mercado, com experiência acumulada em indústrias: Farmacêutica, Química, Logística, Mineração, Fertilizantes e Tecnologia.',
        'team-member1-name': 'Dayan Ordones',
        'team-member1-role': 'Farmacêutica',
        'team-member1-specialty': 'Especialista em Cadeia Fria',
        'team-member2-name': 'Dafne Ordones',
        'team-member2-role': 'Farmacêutica',
        'team-member2-specialty': 'Assuntos Regulatórios',
        'team-member3-name': 'Marcelo Gomes',
        'team-member3-role': 'Consultor',
        'team-member3-specialty': 'Supply Chain & Comex',
        'team-additional': 'Nossa equipe também inclui 2 Farmacêuticos Especialistas e 2 analistas de Qualidade.',
        
        // Presença
        'presence-title': 'Presença Latam e América do Norte',
        'presence-subtitle': 'Atendimento nacional e internacional',
        'presence-map': 'Mapa Interativo',
        'presence-brazil': 'Brasil',
        'presence-locations-br': 'São Paulo, Interior SP, Brasília, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Recife, Salvador',
        'presence-latam': 'América Latina',
        'presence-locations-latam': 'Chile, Argentina, Colômbia, México',
        'presence-namerica': 'América do Norte',
        'presence-locations-namerica': 'EUA, Canadá',
        
        // Cases
        'cases-title': 'Cases de Sucesso',
        'cases-subtitle': 'Conheça alguns dos nossos projetos e clientes',
        
        // Vantagens
        'advantages-title': 'Por que escolher a Follow Advisor?',
        'advantage1-title': 'Experiência Comprovada',
        'advantage1-desc': '7 anos de atuação com mais de 900 auditorias realizadas',
        'advantage2-title': 'Equipe Especializada',
        'advantage2-desc': 'Profissionais com formação e experiência nas áreas de atuação',
        'advantage3-title': 'Atendimento Personalizado',
        'advantage3-desc': 'Soluções customizadas para cada cliente e necessidade',
        'advantage4-title': 'Presença Internacional',
        'advantage4-desc': 'Atendimento em toda América Latina e América do Norte',
        'advantage5-title': 'Multilíngue',
        'advantage5-desc': 'Atendimento e documentação em Português, Inglês e Espanhol',
        'advantage6-title': 'Resultados Mensuráveis',
        'advantage6-desc': 'Foco em entregas reais e resultados tangíveis',
        
        // Contato
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Estamos prontos para atender sua empresa',
        'contact-name': 'Nome',
        'contact-email': 'E-mail',
        'contact-phone': 'Telefone',
        'contact-company': 'Empresa',
        'contact-subject': 'Assunto',
        'contact-message': 'Mensagem',
        'contact-submit': 'Enviar Mensagem',
        'contact-address': 'Endereço',
        'contact-address-value': 'São Paulo, SP - Brasil',
        'contact-email-label': 'E-mail',
        'contact-email-value': 'contato@followadvisor.com',
        'contact-phone-label': 'Telefone',
        'contact-phone-value': '+55 (11) 9999-9999',
        
        // Rodapé
        'footer-rights': '© 2025 Follow Advisor. Todos os direitos reservados.',
        'footer-privacy': 'Política de Privacidade',
        'footer-terms': 'Termos de Uso',

        // Correções de chaves existentes
        'btn-follow-ia': 'Follow IA',
        'btn-client-access': 'Acesso Clientes',

        // Cases (abas)
        'cases-pharma': 'Indústria Farmacêutica',
        'cases-agro': 'Agronegócio',
        'cases-logistics': 'Logística',
        'cases-others': 'Outros Setores',
        'cases-warehouses': 'Armazéns & Auditorias',
        'case1-title': 'Indústria Farmacêutica',
        'case1-html': `
        <p><strong>Desafio:</strong> Uma multinacional farmacêutica buscava registrar seus produtos no Brasil, enfrentando barreiras regulatórias complexas junto à ANVISA, além da necessidade de estruturar sua operação local de forma eficiente e em conformidade.</p>
        <p><strong>Solução da Follow Advisor:</strong> Conduzimos o processo completo de registro de produtos junto às autoridades regulatórias, além de desenhar e executar uma estratégia de softlanding para a empresa no Brasil. Incluiu a estruturação societária, obtenção de licenças sanitárias e alinhamento com parceiros locais.</p>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Registro aprovado em tempo reduzido em relação à média do mercado.</li>
          <li>Estrutura de operação local estabelecida sem riscos regulatórios.</li>
          <li>Redução de custos de entrada de aproximadamente 15% com processos otimizados.</li>
        </ul>
        `,

        'case2-title': ' Logística',
        'case2-html': `
        <p><strong>Desafio:</strong> Transferência e softlanding de fábrica internacional para o Brasil, localizada na região Sul, dentro de um prazo crítico de 18 meses.</p>
        <p><strong>Solução da Follow Advisor:</strong> Atuamos desde o planejamento fabril até a execução, englobando: licenciamento, cadeia de suprimentos, homologação de fornecedores locais e compliance regulatório.</p>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Fábrica operando no prazo estabelecido.</li>
          <li>Cadeia de suprimentos nacional estruturada com redução de custos de importação.</li>
          <li>Operação integrada ao mercado local com atendimento às normas brasileiras.</li>
        </ul>
        `,

        'case3-title': 'Transportadoras (Homologação 0 to Win)',
        'case3-html': `
        <p><strong>Desafio:</strong> Uma transportadora precisava iniciar sua operação do zero, obtendo todas as licenças necessárias (ANVISA, órgãos ambientais e reguladores de classe de produtos) para atuar em transporte especializado.</p>
        <p><strong>Solução da Follow Advisor:</strong> Criamos o projeto 0 to Win, que incluiu:</p>
        <ul>
          <li>Estruturação documental e regulatória completa.</li>
          <li>Obtenção das licenças em tempo recorde.</li>
          <li>Definição de políticas de compliance e processos de qualidade.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Empresa habilitada em menos de 12 meses.</li>
          <li>Operação iniciada já com confiabilidade assegurada para clientes farmacêuticos e de healthcare.</li>
        </ul>
        `,

        'case4-title': 'Transportadoras (Qualidade Assegurada)',
        'case4-html': `
        <p><strong>Desafio:</strong> Uma transportadora precisava se tornar fornecedora homologada de indústrias farmacêuticas, atendendo padrões internacionais de qualidade e rastreabilidade.</p>
        <p><strong>Solução da Follow Advisor:</strong> Implementamos um sistema de Qualidade Assegurada, com:</p>
        <ul>
          <li>Procedimentos operacionais padrão (POPs).</li>
          <li>Sistema de rastreabilidade end-to-end.</li>
          <li>Treinamento de equipe em boas práticas.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Homologação em tempo reduzido por indústrias farmacêuticas.</li>
          <li>Reconhecimento como operador logístico de referência em qualidade.</li>
        </ul>
        `,

        'case5-title': 'Armazéns (Alimentos e Alergênicos)',
        'case5-html': `
        <p><strong>Desafio:</strong> Uma multinacional de alimentos precisava homologar seu armazém no Brasil, instalando sistemas de qualidade, food defense e HACCP, com foco especial no controle de alergênicos.</p>
        <p><strong>Solução da Follow Advisor:</strong> Estruturamos um programa completo de qualidade e segurança:</p>
        <ul>
          <li>Implantação de HACCP e segregação de alergênicos.</li>
          <li>Sistema de food defense em conformidade internacional.</li>
          <li>Homologação perante clientes e órgãos regulatórios.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Certificação internacional em tempo recorde.</li>
          <li>Operação habilitada para exportação e fornecimento a grandes redes.</li>
        </ul>
        `,

        'case6-title': 'Armazéns (Medicamentos)',
        'case6-html': `
        <p><strong>Desafio:</strong> Implantar e homologar um armazém dedicado a medicamentos, cumprindo normas rígidas de ANVISA e órgãos internacionais.</p>
        <p><strong>Solução da Follow Advisor:</strong></p>
        <ul>
          <li>Estruturamos o sistema de qualidade.</li>
          <li>Criamos os fluxos de armazenamento e controle de temperatura.</li>
          <li>Conduzimos auditorias internas e externas até a homologação.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Homologação internacional para clientes estratégicos.</li>
          <li>Operação de armazenagem pronta para auditorias globais.</li>
        </ul>
        `,

        'case7-title': 'Auditorias no Brasil e Exterior',
        'case7-html': `
        <p><strong>Desafio:</strong> Uma empresa brasileira precisava qualificar fornecedores e transportadores no Brasil e no exterior, garantindo conformidade com padrões internacionais de GxP</p>
        <p><strong>Solução da Follow Advisor:</strong></p>
        <ul>
          <li>Conduzimos auditorias presenciais no exterior.</li>
          <li>Estabelecemos critérios de qualificação e compliance.</li>
          <li>Estruturamos relatórios técnicos validados por órgãos locais.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Fornecedores internacionais homologados com confiabilidade.</li>
          <li>Redução de riscos regulatórios em toda a cadeia global</li>
        </ul>
        `,

        'case8-title': 'Agronegócio',
        'case8-html': `
        <p><strong>Desafio:</strong> Um conglomerado do agronegócio precisava implementar um projeto de supply chain envolvendo 12.000 containers, operações em três portos, além da importação de máquinas e equipamentos em regime de ex-tarifário. O desafio incluía ainda a criação de um Centro de Serviços Compartilhados (CSC) para 7 empresas do grupo, em um projeto avaliado em R$ 2 bilhões e 24 meses de duração.</p>
        <p><strong>Solução da Follow Advisor:</strong> Desenvolvemos o desenho estratégico e a execução do supply chain, incluindo:</p>
        <ul>
          <li>Estruturação dos regimes aduaneiros especiais.</li>
          <li>Coordenação de importação com redução de carga tributária via ex-tarifário.</li>
          <li>Implantação do CSC de Supply Chain, padronizando processos, tecnologia e compliance.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Economia superior a R$ 200 milhões em tributos e eficiência logística.</li>
          <li>Aumento da visibilidade operacional em tempo real.</li>
          <li>Integração das 7 empresas em uma governança única de supply chain.</li>
        </ul>
        `,


        // Diferenciais (título grande da seção + cards)
        'advantages-main-title': 'Vantagens de contratar nossa consultoria',
        'adv-card1-title': 'Experiência Especializada',
        'adv-card1-desc': 'Conhecimento especializado na área, oferecendo insights valiosos para sua empresa.',
        'adv-card2-title': 'Objetividade',
        'adv-card2-desc': 'Perspectiva externa e objetiva, identificando problemas e propondo soluções sem envolvimento emocional.',
        'adv-card3-title': 'Eficiência',
        'adv-card3-desc': 'Aceleração de processos, trazendo eficiência operacional e estratégica para seu negócio.',
        'adv-card4-title': 'Atualização',
        'adv-card4-desc': 'Melhores práticas, trazendo inovação e modernização para seus processos e operações.',
        'adv-card5-title': 'Foco estratégico',
        'adv-card5-desc': 'Permitimos que sua empresa mantenha seu foco principal, enquanto lidamos com aspectos específicos.',
        'adv-card6-title': 'Resolução de Problemas',
        'adv-card6-desc': 'Resolvemos desafios complexos e implementamos mudanças que trazem resultados reais.',

        // Presença
        'presence-international': 'Internacional',

        // Contato (labels e valores)
        'contact-hours': 'Horário de Funcionamento',
        'contact-hours-value': 'Segunda a Sábado, 09:00 - 18:00',
        'contact-website': 'Website',
        'contact-service': 'Atendimento',
        'contact-service-value': 'Português, Inglês e Espanhol',
        'contact-address-value': 'Vinhedo - SP',

        //Saiba mais
          'service-regulatory-more': `
  <p class="section-title">Na Follow Advisor oferecemos uma assessoria completa em assuntos regulatórios, atuando de ponta a ponta no processo de licenciamento, certificações e adequação às normas nacionais e internacionais.</p>
  <p class="section-title">Nosso time é especializado em regulamentações da ANVISA, MAPA, ANTT, Receita Federal, órgãos estaduais e internacionais, garantindo segurança jurídica e agilidade no seu negócio.</p>
  <p class="section-title">Auxiliamos desde a elaboração e revisão documental até a interlocução direta com os órgãos reguladores, sempre alinhando os requisitos legais às necessidades operacionais da sua empresa.</p>
  <b>Benefícios para sua empresa:</b>
  <ul>
    <li>Redução de riscos de penalidades e não conformidades.</li>
    <li>Aceleração no tempo de aprovação de processos.</li>
    <li>Planejamento regulatório integrado às metas estratégicas.</li>
    <li>Tranquilidade para focar no crescimento do negócio.</li>
  </ul>
`,

'service-qualification-more': `
  <p class="section-title">Realizamos a Mentoria de Qualificação térmica e Validação dos sistemas computadorizados dos Softwares utilizados em todo processo de rastreabilidade e integridade dos produtos destinados a saúde.</p>
  <p class="section-title">Nossos estudos envolvem mapas térmicos, qualificação de transporte, armazenagem, equipamentos e processos críticos, aplicando metodologias reconhecidas internacionalmente (BPx, OMS, ISO, IATA, FDA, entre outras).</p>
  <b>O que entregamos aos clientes:</b>
  <ul>
    <li>Relatórios técnicos completos e auditáveis.</li>
    <li>Confiabilidade nos processos de cadeia fria e produtos sensíveis.</li>
    <li>Atendimento aos requisitos exigidos em auditorias nacionais e internacionais.</li>
    <li>Maior segurança e rastreabilidade para o consumidor final.</li>
  </ul>
`,

'service-supplychain-more': `
  <p class="section-title">Apoiamos empresas no desenvolvimento, otimização e gestão estratégica de cadeias logísticas nacionais e internacionais, integrando processos de importação, exportação, armazenagem e transporte.</p>
  <p class="section-title">Nosso diferencial é unir experiência prática em supply chain com visão estratégica de negócios, proporcionando eficiência operacional, redução de custos e atendimento às normas globais de comércio exterior.</p>
  <b>Áreas de atuação: </b>
  <ul>
    <li>Planejamento e desenho da cadeia logística (S&OP, DDMRP, WMS, TMS).</li>
    <li>Gestão de importação e exportação, incluindo regimes especiais.</li>
    <li>Estratégias de internacionalização e abertura de novos mercados.</li>
    <li>Otimização de custos logísticos e gestão de fornecedores globais.</li>
  </ul>
  <b>Resultados esperados:</b>
  <ul>
    <li>Cadeias mais ágeis, eficientes e resilientes.</li>
    <li>Redução de custos totais da operação.</li>
    <li>Maior competitividade no mercado nacional e internacional.</li>
  </ul>
`,

'service-logistics-more': `
  <p class="section-title">Oferecemos soluções completas em logística, transporte e armazenagem, garantindo eficiência operacional, segurança dos produtos e conformidade com normas nacionais e internacionais.</p>
  <p class="section-title">Atuamos desde o planejamento estratégico até a execução das operações, adaptando cada processo à realidade do cliente.</p>
  <b>Nossas especialidades incluem: </b>
  <ul>
    <li>Gestão de armazéns (ambientais, refrigerados e produtos especiais).</li>
    <li>Operações de transporte rodoviário, aéreo e internacional.</li>
    <li>Monitoramento de indicadores (custos, sinistros, prazos, produtividade).</li>
    <li>Implementação de WMS, TMS e processos automatizados.</li>
  </ul>
  <b>Resultados para sua empresa: </b>
  <ul>
    <li>Redução de custos logísticos.</li>
    <li>Aumento da produtividade operacional.</li>
    <li>Segurança e rastreabilidade em todas as etapas da cadeia.</li>
    <li>Soluções escaláveis conforme o crescimento do negócio.</li>
  </ul>
`,

'service-medical-more': `
  <p class="section-title">A Follow Advisor oferece consultoria especializada para distribuidoras de dispositivos médicos, hospitalares e produtos para saúde, com foco na adequação regulatória, eficiência logística e qualidade operacional.</p>
  <b>Principais entregas: </b>
  <ul>
    <li>Estruturação de processos para atender às exigências da ANVISA, MAPA e órgãos internacionais.</li>
    <li>Apoio em registro de produtos, licenciamento e certificações.</li>
    <li>Gestão da cadeia fria (cold chain) para medicamentos e insumos sensíveis.</li>
    <li>Desenvolvimento de procedimentos padrão (POP) para auditorias.</li>
  </ul>
  <b>Benefícios para o setor médico: </b>
  <ul>
    <li>Garantia de conformidade regulatória e segurança dos pacientes.</li>
    <li>Operações logísticas ágeis e rastreáveis.</li>
    <li>Redução de riscos em auditorias e inspeções.</li>
    <li>Fortalecimento da reputação da empresa junto a clientes e órgãos fiscalizadores.</li>
  </ul>
`,

'service-quality-more': `
  <p class="section-title">Somos especialistas na implementação e gestão de sistemas de qualidade e certificações, essenciais para empresas que desejam atuar com excelência em mercados competitivos.</p>
  <b>Áreas de atuação: </b>
  <ul>
    <li>Implantação de sistemas de gestão da qualidade (ISO, BPF, BPDA, entre outros).</li>
    <li>Desenvolvimento de manuais, POPs e listas mestras.</li>
    <li>Auditorias internas e externas, com plano de ação para não conformidades.</li>
    <li>Preparação para certificações nacionais e internacionais.</li>
  </ul>
  <b>O que sua empresa ganha: </b>
  <ul>
    <li>Confiabilidade e credibilidade perante clientes e órgãos reguladores.</li>
    <li>Processos internos padronizados e mais eficientes.</li>
    <li>Melhoria contínua como parte da cultura organizacional.</li>
    <li>Redução de falhas, retrabalhos e custos associados à má qualidade.</li>
  </ul>
`,

'service-training-more': `
  <p class="section-title">Oferecemos programas completos de capacitação e desenvolvimento de equipes técnicas e operacionais, alinhados às exigências regulatórias e às melhores práticas do mercado.</p>
  <p>Nossos treinamentos podem ser presenciais ou online, adaptados à realidade de cada cliente, cobrindo desde temas técnicos específicos (armazenagem, transporte, cadeia fria, POPs) até gestão, liderança e cultura de qualidade.</p>
  <b>O que entregamos: </b>
  <ul>
    <li>Treinamentos sob medida para equipes operacionais e de gestão.</li>
    <li>Certificados de participação reconhecidos para auditorias e compliance.</li>
    <li>Simulações práticas e estudo de casos reais.</li>
    <li>Desenvolvimento de habilidades técnicas e comportamentais.</li>
  </ul>
  <b>Resultados esperados: </b>
  <ul>
    <li>Profissionais mais capacitados e preparados para desafios diários.</li>
    <li>Redução de erros operacionais e retrabalhos.</li>
    <li>Maior engajamento e retenção de talentos.</li>
  </ul>
`,

'service-storage-more': `
  <p class="section-title">Somos especialistas em soluções de armazenagem e distribuição de insumos farmacêuticos, hospitalares e alimentos, atendendo aos requisitos de segurança, rastreabilidade e conformidade regulatória.</p>
  <b>Nossas soluções incluem: </b>
  <ul>
    <li>Estruturação de operações de armazenagem (ambiente controlado, refrigerado ou congelado).</li>
    <li>Processos de recebimento, estocagem, separação, expedição e transporte.</li>
    <li>Gestão de cadeia fria (cold chain) com monitoramento contínuo de temperatura.</li>
    <li>Implementação de controles e relatórios auditáveis para inspeções.</li>
  </ul>
  <b>Vantagens para o cliente: </b>
  <ul>
    <li>Redução de perdas e avarias em produtos sensíveis.</li>
    <li>Operações mais ágeis e organizadas.</li>
    <li>Segurança total em todas as etapas da armazenagem e distribuição.</li>
    <li>Conformidade com ANVISA, MAPA e normas internacionais.</li>
  </ul>
`,

'service-foreigntrade-more': `
  <p class="section-title">Apoiamos empresas em todas as etapas do comércio internacional, com foco em regimes aduaneiros especiais, redução de custos logísticos e segurança nos processos de importação e exportação.</p>
  <b>Serviços oferecidos: </b>
  <ul>
    <li>Gestão de regimes especiais (Ex-tarifário, Drawback, Recof, entre outros).</li>
    <li>Estruturação de processos de importação e exportação conforme normas da Receita Federal, OMC e órgãos anuentes.</li>
    <li>Planejamento tributário para reduzir custos e aumentar a competitividade.</li>
    <li>Consultoria estratégica para internacionalização de negócios.</li>
  </ul>
  <b>Benefícios para sua empresa: </b>
  <ul>
    <li>Operações de comércio exterior seguras e eficientes.</li>
    <li>Redução de custos tributários e logísticos.</li>
    <li>Maior agilidade em liberações aduaneiras.</li>
    <li>Suporte completo para expansão global.</li>
  </ul>
`,

'service-legal-more': `
  <p class="section-title">A Follow Advisor, em parceria com escritórios jurídicos especializados, oferece suporte completo em jurídico corporativo, alinhando as práticas de compliance, governança e gestão de riscos às necessidades estratégicas da sua empresa.</p>
  <p class="section-title">Atuamos em projetos de softlanding, garantindo a segurança jurídica em processos de internacionalização, além de oferecer apoio especializado para empresas que buscam se estabelecer em novos mercados.</p>
  <b>Nossas soluções abrangem: </b>
  <ul>
    <li>Projetos de compliance corporativo e regulatório.</li>
    <li>Risk mitigation em questões trabalhistas e contratuais.</li>
    <li>Assessoria jurídica em operações societárias e comerciais.</li>
    <li>Atendimento presencial e personalizado por escritórios parceiros.</li>
  </ul>
  <b>Benefícios para o cliente: </b>
  <ul>
    <li>Redução de riscos legais e trabalhistas.</li>
    <li>Estruturação segura para expansão nacional e internacional.</li>
    <li>Aumento da confiança de investidores, clientes e parceiros.</li>
    <li>Suporte estratégico para tomada de decisão.</li>
  </ul>
`,


        },
    'en': {
        // Navigation Menu
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-team': 'Team',
        'nav-presence': 'Presence',
        'nav-cases': 'Cases',
        'nav-advantages': 'Advantages',
        'nav-contact': 'Contact',
        
        // Special Buttons
        'btn-academy': 'Academy',
        'btn-followia': 'Follow AI',
        'btn-clients': 'Client Access',
        
        // Hero Section
        'hero-title': 'Guidance that inspires!',
        'hero-subtitle': 'Specialized consulting and advisory in Quality and Supply-Chain',
        'hero-button': 'Contact Us',
        
        // About Section
        'about-title': 'About Follow Advisor',
        'about-description': 'Follow Advisor is a consulting and advisory company in Quality and Supply-Chain, serving from Regulatory Affairs, ANVISA, Quality, Cold Chain Logistics, Licenses and regulatory agencies, to Supply Chain and Storage Projects. We have been in the market for 7 years with a focus on real actions and deliveries, offering customized solutions for our clients.',
        'mission-title': 'Mission',
        'mission-text': 'To provide consulting and advisory services to ensure quality in processes, global service in regulatory demands, and security in our clients\' operations.',
        'vision-title': 'Vision',
        'vision-text': 'To develop the best professionals in advanced solutions in the logistics chain.',
        'values-title': 'Values',
        'value-1': 'Responsibility',
        'value-2': 'Transparency',
        'value-3': 'Efficiency',
        'value-4': 'Ethics',
        
        // Numbers and Statistics
        'stats-anvisa': 'Companies approved by ANVISA',
        'stats-pharma': 'Pharmaceutical industries served',
        'stats-audits': 'Quality audits performed',
        'stats-tons': 'Tons of imported products',
        'stats-vehicles': 'Vehicles under Quality management',
        'stats-routes': 'Cargo with monthly route qualification',
        
        // Services Section
        'services-title': 'Customized Solutions',
        'services-subtitle': 'Service in Portuguese, English, and Spanish (including reports on demand)',
        'service-regulatory-title': 'Regulatory Affairs',
        'service-regulatory-desc': 'Complete advisory in licensing, certifications, and compliance with regulatory standards.',
        'service-qualification-title': 'Qualification Studies',
        'service-qualification-desc': 'Thermal qualification and process validation according to national and international standards.',
        'service-supplychain-title': 'Supply Chain and Foreign Trade',
        'service-supplychain-desc': 'Development and optimization of national and international logistics chains.',
        'service-logistics-title': 'Logistics, Transportation, and Storage',
        'service-logistics-desc': 'Complete advisory in logistics operations, transportation, and storage.',
        'service-medical-title': 'Advisory for Medical Distributors',
        'service-medical-desc': 'Specialized consulting for distributors of medical devices and healthcare products.',
        'service-quality-title': 'Quality',
        'service-quality-desc': 'Implementation and management of quality systems and certification processes.',
        'service-training-title': 'Training and Qualification',
        'service-training-desc': 'Training and development programs for technical and operational teams.',
        'service-storage-title': 'Storage and Distribution',
        'service-storage-desc': 'Specialized solutions for storage and distribution of pharmaceutical inputs and food.',
        'service-foreigntrade-title': 'Foreign Trade Consulting',
        'service-foreigntrade-desc': 'Special regimes, logistics cost optimization, and international trade solutions.',
        'service-more': 'Learn more',
        'service-modal-close': 'Close',
        'service-legal-title': 'Corporate Legal',
        'service-legal-desc': 'Softlanding with partnerships in on-site service law firms, compliance projects, and risk mitigation for labor issues',
        // Team Section
        'team-title': 'Management Team',
        'team-subtitle': 'SENIOR Market Professionals, with accumulated experience in industries: Pharmaceutical, Chemical, Logistics, Mining, Fertilizers, and Technology.',
        'team-member1-name': 'Dayan Ordones',
        'team-member1-role': 'Pharmacist',
        'team-member1-specialty': 'Cold Chain Specialist',
        'team-member2-name': 'Dafne Ordones',
        'team-member2-role': 'Pharmacist',
        'team-member2-specialty': 'Regulatory Affairs',
        'team-member3-name': 'Marcelo Gomes',
        'team-member3-role': 'Consultant',
        'team-member3-specialty': 'Supply Chain & Foreign Trade',
        'team-additional': 'Our team also includes 2 Specialist Pharmacists and 2 Quality analysts.',
        
        // Presence Section
        'presence-title': 'Presence in Latam and North America',
        'presence-subtitle': 'National and international service',
        'presence-map': 'Interactive Map',
        'presence-brazil': 'Brazil',
        'presence-locations-br': 'São Paulo, São Paulo Countryside, Brasília, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Recife, Salvador',
        'presence-latam': 'Latin America',
        'presence-locations-latam': 'Chile, Argentina, Colombia, Mexico',
        'presence-namerica': 'North America',
        'presence-locations-namerica': 'USA, Canada',
        
        // Cases Section
        'cases-title': 'Success Cases',
        'cases-subtitle': 'Learn about some of our projects and clients',
        
        // Advantages Section
        'advantages-title': 'Why choose Follow Advisor?',
        'advantage1-title': 'Proven Experience',
        'advantage1-desc': '7 years of operation with more than 900 audits performed',
        'advantage2-title': 'Specialized Team',
        'advantage2-desc': 'Professionals with training and experience in the areas of expertise',
        'advantage3-title': 'Personalized Service',
        'advantage3-desc': 'Customized solutions for each client and need',
        'advantage4-title': 'International Presence',
        'advantage4-desc': 'Service throughout Latin America and North America',
        'advantage5-title': 'Multilingual',
        'advantage5-desc': 'Service and documentation in Portuguese, English, and Spanish',
        'advantage6-title': 'Measurable Results',
        'advantage6-desc': 'Focus on real deliveries and tangible results',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-subtitle': 'We are ready to serve your company',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-company': 'Company',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-submit': 'Send Message',
        'contact-address': 'Address',
        'contact-address-value': 'São Paulo, SP - Brazil',
        'contact-email-label': 'Email',
        'contact-email-value': 'contact@followadvisor.com',
        'contact-phone-label': 'Phone',
        'contact-phone-value': '+55 (11) 9999-9999',
        
        // Footer
        'footer-rights': '© 2025 Follow Advisor. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Use',

        // Correções de chaves existentes (garantir MESMO nome que no PT)
        'btn-follow-ia': 'Follow AI',
        'btn-client-access': 'Client Access',

        // Cases (tabs)
        'cases-pharma': 'Pharmaceutical Industry',
        'cases-agro': 'Agribusiness',
        'cases-logistics': 'Logistics',
        'cases-others': 'Other Sectors',
        'cases-warehouses': 'Warehouses & Audits',
        'case1-title': 'Pharmaceutical Industry',
        'case1-html': `
        <p><strong>Challenge:</strong> A multinational pharmaceutical company sought to register its products in Brazil, facing complex regulatory barriers with ANVISA, in addition to the need to efficiently and compliantly structure its local operation.</p>
        <p><strong>Follow Advisor Solution:</strong> We conducted the full product registration process with regulatory authorities and designed/executed a softlanding strategy in Brazil. This included corporate structuring, obtaining sanitary licenses, and alignment with local partners.</p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>Registration approved in a shorter time than the market average.</li>
          <li>Local operation structured without regulatory risks.</li>
          <li>~15% reduction in market-entry costs through optimized processes.</li>
        </ul>
        `,

        'case2-title': 'Logistics',
        'case2-html': `
        <p><strong>Challenge:</strong> Transfer and softlanding of an international factory to Brazil (Southern region) within a critical 18-month deadline.</p>
        <p><strong>Follow Advisor Solution:</strong> We supported from plant planning to execution, covering licensing, supply chain, local supplier approval, and regulatory compliance.</p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>Factory operating within the established deadline.</li>
          <li>National supply chain structured with reduced import costs.</li>
          <li>Operation integrated into the local market in compliance with Brazilian standards.</li>
        </ul>

        `,

        'case3-title': 'Carriers (0 to Win Homologation)',
        'case3-html': `
        <p><strong>Challenge:</strong> A carrier needed to start operations from scratch, obtaining all required licenses (ANVISA, environmental agencies, and product-class regulators) to operate in specialized transport.</p>
        <p><strong>Follow Advisor Solution:</strong> We created the 0 to Win project, which included:</p>
        <ul>
          <li>Complete documentary and regulatory structuring.</li>
          <li>Licenses obtained in record time.</li>
          <li>Definition of compliance policies and quality processes.</li>
        </ul>
        <p><strong>Results:</strong></p>
        <ul>
          <li>Company enabled in under 12 months.</li>
          <li>Operations started with assured reliability for pharmaceutical and healthcare clients.</li>
        </ul>
        `,

        'case4-title': 'Carriers (Assured Quality)',
        'case4-html': `
        <p><strong>Challenge:</strong> A carrier needed to become an approved supplier for pharmaceutical industries, meeting international quality and traceability standards.</p>
        <p><strong>Follow Advisor Solution:</strong> We implemented an Assured Quality system, with:</p>
        <ul>
          <li>Standard Operating Procedures (SOPs).</li>
          <li>End-to-end traceability system.</li>
          <li>Team training in good practices.</li>
        </ul>
        <p><strong>Results:</strong></p>
        <ul>
          <li>Faster homologation by pharmaceutical industries.</li>
          <li>Recognition as a reference logistics operator in quality.</li>
        </ul>

        `,

        'case5-title': 'Warehouses (Food and Allergens)',
        'case5-html': `
        <p><strong>Challenge:</strong> A multinational food company needed to homologate its warehouse in Brazil, installing quality systems, food defense, and HACCP, with special focus on allergen control.</p>
        <p><strong>Follow Advisor Solution:</strong> We structured a complete quality and safety program:</p>
        <ul>
          <li>HACCP implementation and allergen segregation.</li>
          <li>Food defense system in international compliance.</li>
          <li>Homologation before clients and regulators.</li>
        </ul>
        <p><strong>Results:</strong></p>
        <ul>
          <li>International certification in record time.</li>
          <li>Operation enabled for export and supply to major retail chains.</li>
        </ul>
     
        `,

        'case6-title': 'Warehouses (Medicines)',
        'case6-html': `
        <p><strong>Challenge:</strong> Implement and homologate a warehouse dedicated to medicines, complying with strict ANVISA and international standards.</p>
        <p><strong>Follow Advisor Solution:</strong></p>
        <ul>
          <li>We structured the quality system.</li>
          <li>We created storage flows and temperature control.</li>
          <li>We conducted internal and external audits through homologation.</li>
        </ul>
        <p><strong>Results:</strong></p>
        <ul>
          <li>International homologation for strategic clients.</li>
          <li>Warehousing operation ready for global audits.</li>
        </ul>
     
        `,

        'case7-title': 'Audits in Brazil and Abroad',
        'case7-html': `
        <p><strong>Challenge:</strong> A Brazilian company needed to qualify suppliers and carriers in Brazil and abroad, ensuring compliance with international GxP standards.</p>
        <p><strong>Follow Advisor Solution:</strong></p>
        <ul>
          <li>We conducted on-site audits abroad.</li>
          <li>We established qualification and compliance criteria.</li>
          <li>We structured technical reports validated by local authorities.</li>
        </ul>
        <p><strong>Results:</strong></p>
        <ul>
          <li>International suppliers homologated with reliability.</li>
          <li>Reduced regulatory risks across the global chain.</li>
        </ul>
        `,

        'case8-title': 'Agribusiness',
        'case8-html': `
        <p><strong>Challenge:</strong> An agribusiness conglomerate needed to implement a supply chain project involving 12,000 containers, operations in three ports, and the import of machinery/equipment under ex-tarifário. It also required creating a Shared Services Center (SSC) for 7 group companies, in a project valued at R$ 2 billion over 24 months.</p>
        <p><strong>Follow Advisor Solution:</strong> We developed the strategic design and execution of the supply chain, including:</p>
        <ul>
          <li>Structuring special customs regimes.</li>
          <li>Coordinating imports with tax-burden reduction via ex-tarifário.</li>
          <li>Implementing the Supply Chain SSC, standardizing processes, technology, and compliance.</li>
        </ul>
        <p><strong>Results:</strong></p>
        <ul>
          <li>Over R$ 200 million saved in taxes and logistics efficiency.</li>
          <li>Increased real-time operational visibility.</li>
          <li>Integration of 7 companies under a single supply chain governance.</li>
        </ul>
        `,


        // Advantages (big title + cards)
        'advantages-main-title': 'Advantages of hiring our consultancy',
        'adv-card1-title': 'Specialized Experience',
        'adv-card1-desc': 'Specialized knowledge in the field, offering valuable insights for your company.',
        'adv-card2-title': 'Objectivity',
        'adv-card2-desc': 'External and objective perspective, identifying problems and proposing solutions without emotional involvement.',
        'adv-card3-title': 'Efficiency',
        'adv-card3-desc': 'Process acceleration, bringing operational and strategic efficiency to your business.',
        'adv-card4-title': 'Up-to-date Practices',
        'adv-card4-desc': 'Best practices that bring innovation and modernization to your processes and operations.',
        'adv-card5-title': 'Strategic Focus',
        'adv-card5-desc': 'We allow your company to maintain its core focus while we handle specific aspects.',
        'adv-card6-title': 'Problem Solving',
        'adv-card6-desc': 'We tackle complex challenges and implement changes that deliver real results.',

        // Presence
        'presence-international': 'International',

        // Contact (labels and values)
        'contact-hours': 'Business Hours',
        'contact-hours-value': 'Monday to Saturday, 09:00 - 18:00',
        'contact-website': 'Website',
        'contact-service': 'Service',
        'contact-service-value': 'Portuguese, English and Spanish',
        'contact-address-value': 'Vinhedo - SP',
        'telefone': 'Phone',
        "telefone-numero": '+55 (19) 98408-8833',
        
        //Saiba Mais
       'service-regulatory-more': `
  <p class="section-title">We provide end-to-end regulatory advisory, covering licensing, certifications, and compliance with national and international standards.</p>
  <p class="section-title">Our team specializes in ANVISA, MAPA, ANTT, Federal Revenue and state/international regulations, ensuring legal certainty and agility for your business.</p>
  <p class="section-title">We support from document drafting and review to direct liaison with regulators, aligning legal requirements with your company’s operational needs.</p>
  <b>Benefits for your company:</b>
  <ul>
    <li>Lower risk of penalties and non-compliance.</li>
    <li>Faster approval times.</li>
    <li>Regulatory planning integrated with strategic goals.</li>
    <li>Peace of mind to focus on growth.</li>
  </ul>
`,

'service-qualification-more': `
  <p class="section-title">We deliver Thermal Qualification mentorship and Computerized Systems Validation used across the entire traceability and integrity process for health-destined products.</p>
  <p class="section-title">Studies include thermal mapping, transport qualification, warehousing, equipment and critical processes, applying internationally recognized methodologies (BPx, WHO, ISO, IATA, FDA).</p>
  <b>Client deliverables:</b>
  <ul>
    <li>Complete, audit-ready technical reports.</li>
    <li>Reliability for cold chain and sensitive products.</li>
    <li>Compliance with national and international audits.</li>
    <li>Greater safety and traceability for end users.</li>
  </ul>
`,

'service-supplychain-more': `
  <p class="section-title">We support companies in developing, optimizing and strategically managing national and international logistics chains, integrating import, export, warehousing and transportation.</p>
  <p class="section-title">We combine hands-on supply chain expertise with business strategy to deliver efficiency, cost reduction and compliance with global trade standards.</p>
  <b>Scope:</b>
  <ul>
    <li>Network planning and design (S&OP, DDMRP, WMS, TMS).</li>
    <li>Import/export management, including special customs regimes.</li>
    <li>Internationalization strategies and new market entry.</li>
    <li>Logistics cost optimization and global supplier management.</li>
  </ul>
  <b>Expected outcomes:</b>
  <ul>
    <li>More agile, efficient and resilient chains.</li>
    <li>Reduced total landed cost.</li>
    <li>Higher competitiveness domestically and abroad.</li>
  </ul>
`,

'service-logistics-more': `
  <p class="section-title">End-to-end logistics, transportation and warehousing solutions that ensure operational efficiency, product safety and regulatory compliance.</p>
  <p class="section-title">From strategic planning to execution, tailored to each client’s reality.</p>
  <b>Our specialties include:</b>
  <ul>
    <li>Warehouse management (ambient, refrigerated and special products).</li>
    <li>Road, air and international transport operations.</li>
    <li>KPI monitoring (costs, claims, lead times, productivity).</li>
    <li>WMS/TMS implementation and process automation.</li>
  </ul>
  <b>Business impact:</b>
  <ul>
    <li>Logistics cost reduction.</li>
    <li>Operational productivity gains.</li>
    <li>End-to-end security and traceability.</li>
    <li>Scalable solutions as you grow.</li>
  </ul>
`,

'service-medical-more': `
  <p class="section-title">Specialized consulting for distributors of medical, hospital and healthcare products, focused on regulatory compliance, logistics efficiency and operational quality.</p>
  <b>Main deliverables:</b>
  <ul>
    <li>Processes aligned with ANVISA, MAPA and international standards.</li>
    <li>Support with product registration, licensing and certifications.</li>
    <li>Cold chain management for sensitive items.</li>
    <li>SOP development and audit-ready documentation.</li>
  </ul>
  <b>Sector benefits:</b>
  <ul>
    <li>Regulatory compliance and patient safety.</li>
    <li>Agile, traceable logistics operations.</li>
    <li>Lower audit and inspection risk.</li>
    <li>Stronger reputation with clients and regulators.</li>
  </ul>
`,

'service-quality-more': `
  <p class="section-title">Experts in implementing and managing quality systems and certifications—essential for companies seeking excellence in competitive markets.</p>
  <b>Areas:</b>
  <ul>
    <li>Quality management systems (ISO, GMP, BPDA).</li>
    <li>Manuals, SOPs and master lists development.</li>
    <li>Internal/external audits with action plans.</li>
    <li>Certification readiness (national/international).</li>
  </ul>
  <b>What you gain:</b>
  <ul>
    <li>Credibility with clients and regulators.</li>
    <li>Standardized, more efficient processes.</li>
    <li>Continuous improvement embedded in culture.</li>
    <li>Fewer failures, rework and quality costs.</li>
  </ul>
`,

'service-training-more': `
  <p class="section-title">Complete training and development programs for technical and operational teams, aligned with regulatory demands and best practices.</p>
  <p>In-person or online, tailored to each client: technical topics (warehousing, transport, cold chain, SOPs) and management/leadership/quality culture.</p>
  <b>Deliverables:</b>
  <ul>
    <li>Tailored training for operations and management.</li>
    <li>Audit-valid participation certificates.</li>
    <li>Practical simulations and real case studies.</li>
    <li>Technical and behavioral skill development.</li>
  </ul>
  <b>Results:</b>
  <ul>
    <li>Better-prepared professionals for daily challenges.</li>
    <li>Fewer operational errors and rework.</li>
    <li>Greater engagement and retention.</li>
  </ul>
`,

'service-storage-more': `
  <p class="section-title">Specialized storage and distribution for pharmaceutical, hospital and food inputs, meeting safety, traceability and compliance requirements.</p>
  <b>Solutions include:</b>
  <ul>
    <li>Operations in controlled, refrigerated or frozen environments.</li>
    <li>Receiving, storage, picking, shipping and transport processes.</li>
    <li>Continuous cold-chain temperature monitoring.</li>
    <li>Audit-ready controls and reporting.</li>
  </ul>
  <b>Client advantages:</b>
  <ul>
    <li>Reduced losses and damages for sensitive products.</li>
    <li>More agile and organized operations.</li>
    <li>End-to-end safety across storage and distribution.</li>
    <li>Compliance with ANVISA, MAPA and international standards.</li>
  </ul>
`,

'service-foreigntrade-more': `
  <p class="section-title">Support across all stages of international trade, focused on special customs regimes, logistics cost reduction and safe import/export processes.</p>
  <b>Services:</b>
  <ul>
    <li>Special regimes (Ex-Tarifário, Drawback, Recof, etc.).</li>
    <li>Import/export per Federal Revenue, WTO and other agencies.</li>
    <li>Tax planning to reduce costs and improve competitiveness.</li>
    <li>Strategic consulting for internationalization.</li>
  </ul>
  <b>Benefits:</b>
  <ul>
    <li>Secure, efficient foreign trade operations.</li>
    <li>Lower tax and logistics burden.</li>
    <li>Faster customs clearance.</li>
    <li>Full support for global expansion.</li>
  </ul>
`,

'service-legal-more': `
  <p class="section-title">With specialized legal partners, we provide comprehensive corporate legal support, aligning compliance, governance and risk management with your strategy.</p>
  <p class="section-title">Softlanding projects ensure legal certainty for internationalization, with dedicated support for companies entering new markets.</p>
  <b>Scope:</b>
  <ul>
    <li>Corporate and regulatory compliance projects.</li>
    <li>Labor and contractual risk mitigation.</li>
    <li>Corporate and commercial legal advisory.</li>
    <li>On-site, personalized service via partner firms.</li>
  </ul>
  <b>Client benefits:</b>
  <ul>
    <li>Reduced legal and labor exposure.</li>
    <li>Safe structure for national and international expansion.</li>
    <li>Increased trust from investors, clients and partners.</li>
    <li>Strategic decision support.</li>
  </ul>
`,


    },
// Sistema completo de internacionalização para o site da Follow Advisor
    'es': {
        // Encabezado y Menú
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Nosotros',
        'nav-services': 'Servicios',
        'nav-team': 'Equipo',
        'nav-presence': 'Presencia',
        'nav-cases': 'Casos',
        'nav-advantages': 'Ventajas',
        'nav-contact': 'Contacto',
        
        // Botones especiales
        'btn-academy': 'Academy',
        'btn-followia': 'Follow IA',
        'btn-client-access': 'Acceso Clientes',
        
        // Banner Principal
        'hero-title': '¡Orientación que inspira!',
        'hero-subtitle': 'Consultoría y asesoría especializada en Calidad y Supply-Chain',
        'hero-button': 'Contáctenos',
        
        // Sobre Nosotros
        'about-title': 'Sobre Follow Advisor',
        'about-description': 'Follow Advisor es una empresa de consultoría y asesoría en Calidad y Supply-Chain, abarcando desde Asuntos Regulatorios, ANVISA, Calidad, Logística de la Cadena de Frío, Licencias y agencias reguladoras, hasta Proyectos de Supply Chain y Almacenamiento. Llevamos 7 años en el mercado con enfoque en acciones y entregas reales, ofreciendo soluciones personalizadas para nuestros clientes.',
        'mission-title': 'Misión',
        'mission-text': 'Ofrecer servicios de consultoría y asesoría para garantizar la calidad en los procesos, servicio global en demandas regulatorias y seguridad en las operaciones de nuestros clientes.',
        'vision-title': 'Visión',
        'vision-text': 'Desarrollar los mejores profesionales en soluciones avanzadas para la cadena logística.',
        'values-title': 'Valores',
        'value-1': 'Responsabilidad',
        'value-2': 'Transparencia',
        'value-3': 'Eficiencia',
        'value-4': 'Ética',
        
        // Números y Estadísticas
        'stats-anvisa': 'Empresas aprobadas por ANVISA',
        'stats-pharma': 'Industrias farmacéuticas atendidas',
        'stats-audits': 'Auditorías de Calidad realizadas',
        'stats-tons': 'Toneladas de productos importados',
        'stats-vehicles': 'Vehículos bajo gestión de Calidad',
        'stats-routes': 'Cargas con calificación de rutas mensuales',
        
        // Servicios
        'services-title': 'Soluciones Personalizadas',
        'services-subtitle': 'Servicio en Portugués, Inglés y Español (incluyendo informes bajo demanda)',
        'service-regulatory-title': 'Asuntos Regulatorios',
        'service-regulatory-desc': 'Asesoría completa en licenciamiento, certificaciones y adecuación a las normas regulatorias.',
        'service-qualification-title': 'Estudios de Calificación',
        'service-qualification-desc': 'Calificación térmica y validación de procesos según normas nacionales e internacionales.',
        'service-supplychain-title': 'Supply Chain y Comercio Exterior',
        'service-supplychain-desc': 'Desarrollo y optimización de cadenas logísticas nacionales e internacionales.',
        'service-logistics-title': 'Logística, Transporte y Almacenamiento',
        'service-logistics-desc': 'Asesoría completa en operaciones logísticas, transporte y almacenamiento.',
        'service-medical-title': 'Asesoría para Distribuidoras Médicas',
        'service-medical-desc': 'Consultoría especializada para distribuidores de dispositivos médicos y productos para la salud.',
        'service-quality-title': 'Calidad',
        'service-quality-desc': 'Implementación y gestión de sistemas de calidad y procesos de certificación.',
        'service-training-title': 'Capacitación y Calificación',
        'service-training-desc': 'Programas de capacitación y desarrollo para equipos técnicos y operativos.',
        'service-storage-title': 'Almacenamiento y Distribución',
        'service-storage-desc': 'Soluciones especializadas para el almacenamiento y distribución de insumos farmacéuticos y alimentos.',
        'service-foreigntrade-title': 'Consultoría de Comercio Exterior',
        'service-foreigntrade-desc': 'Regímenes especiales, optimización de costos logísticos y soluciones para el comercio internacional.',
        'service-more': 'Saber más',
        'service-modal-close': 'Cerrar',
        'service-legal-title': 'Jurídico Corporativo',
        'service-legal-desc': 'Softlanding con colaboración con bufetes de abogados de atención presencial, proyectos de compliance y mitigación de riesgos para cuestiones laborales',
        
        // Equipo
        'team-title': 'Equipo Directivo',
        'team-subtitle': 'Profesionales SÉNIOR del mercado, con experiencia acumulada en industrias: Farmacéutica, Química, Logística, Minería, Fertilizantes y Tecnología.',
        'team-member1-name': 'Dayan Ordones',
        'team-member1-role': 'Farmacéutica',
        'team-member1-specialty': 'Especialista en Cadena de Frío',
        'team-member2-name': 'Dafne Ordones',
        'team-member2-role': 'Farmacéutica',
        'team-member2-specialty': 'Asuntos Regulatorios',
        'team-member3-name': 'Marcelo Gomes',
        'team-member3-role': 'Consultor',
        'team-member3-specialty': 'Supply Chain & Comex',
        'team-additional': 'Nuestro equipo también incluye 2 Farmacéuticos Especialistas y 2 analistas de Calidad.',
        
        // Presencia
        'presence-title': 'Presencia en Latam y América del Norte',
        'presence-subtitle': 'Servicio nacional e internacional',
        'presence-map': 'Mapa Interactivo',
        'presence-brazil': 'Brasil',
        'presence-locations-br': 'São Paulo, Interior de SP, Brasilia, Río de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Recife, Salvador',
        'presence-latam': 'América Latina',
        'presence-locations-latam': 'Chile, Argentina, Colombia, México',
        'presence-namerica': 'América del Norte',
        'presence-locations-namerica': 'EE. UU., Canadá',
        
        // Casos
        'cases-title': 'Casos de Éxito',
        'cases-subtitle': 'Conozca algunos de nuestros proyectos y clientes',
        'cases-pharma': 'Industria Farmacéutica',
        'cases-agro': 'Agronegocio',
        'cases-logistics': 'Logística',
        'cases-others': 'Otros Sectores',
        'cases-warehouses': 'Almacenes y Auditorías',
        'case1-title': 'Industria Farmacéutica',
        'case1-html': `
        <p><strong>Desafío:</strong> Una multinacional farmacéutica buscaba registrar sus productos en Brasil, enfrentando barreras regulatorias complejas con ANVISA, además de la necesidad de estructurar su operación local de forma eficiente y en conformidad.</p>
        <p><strong>Solución de Follow Advisor:</strong> Condujimos el proceso completo de registro de productos ante las autoridades regulatorias y diseñamos/ejecutamos una estrategia de softlanding en Brasil. Incluyó la estructuración societaria, obtención de licencias sanitarias y alineación con socios locales.</p>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Registro aprobado en menos tiempo que el promedio del mercado.</li>
          <li>Operación local estructurada sin riesgos regulatorios.</li>
          <li>Reducción de ~15% en costos de entrada mediante procesos optimizados.</li>
        </ul>
        `,

        'case2-title': 'Logística',
        'case2-html': `
        <p><strong>Desafío:</strong> Transferencia y softlanding de una fábrica internacional a Brasil (región Sur) dentro de un plazo crítico de 18 meses.</p>
        <p><strong>Solución de Follow Advisor:</strong> Actuamos desde la planificación fabril hasta la ejecución, abarcando licenciamiento, cadena de suministro, homologación de proveedores locales y compliance regulatorio.</p>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Fábrica operando en el plazo establecido.</li>
          <li>Cadena de suministro nacional estructurada con reducción de costos de importación.</li>
          <li>Operación integrada al mercado local cumpliendo normas brasileñas.</li>
        </ul>
        `,

        'case3-title': 'Transportadoras (Homologación 0 to Win)',
        'case3-html': `
        <p><strong>Desafío:</strong> Una transportadora necesitaba iniciar su operación desde cero, obteniendo todas las licencias necesarias (ANVISA, organismos ambientales y reguladores por clase de producto) para operar en transporte especializado.</p>
        <p><strong>Solución de Follow Advisor:</strong> Creamos el proyecto 0 to Win, que incluyó:</p>
        <ul>
          <li>Estructuración documental y regulatoria completa.</li>
          <li>Obtención de licencias en tiempo récord.</li>
          <li>Definición de políticas de compliance y procesos de calidad.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Empresa habilitada en menos de 12 meses.</li>
          <li>Operación iniciada con confiabilidad asegurada para clientes farmacéuticos y de healthcare.</li>
        </ul>
   
        `,

        'case4-title': 'Transportadoras (Calidad Asegurada)',
        'case4-html': `
        <p><strong>Desafío:</strong> Una transportadora necesitaba convertirse en proveedora homologada de industrias farmacéuticas, cumpliendo estándares internacionales de calidad y trazabilidad.</p>
        <p><strong>Solución de Follow Advisor:</strong> Implementamos un sistema de Calidad Asegurada, con:</p>
        <ul>
          <li>Procedimientos operativos estándar (POEs).</li>
          <li>Sistema de trazabilidad end-to-end.</li>
          <li>Entrenamiento del equipo en buenas prácticas.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Homologación en tiempo reducido por industrias farmacéuticas.</li>
          <li>Reconocimiento como operador logístico de referencia en calidad.</li>
        </ul>
   
        `,

        'case5-title': ' (Alimentos y Alérgenos)',
        'case5-html': `
        <p><strong>Desafío:</strong> Una multinacional de alimentos necesitaba homologar su almacén en Brasil, instalando sistemas de calidad, food defense y HACCP, con foco especial en el control de alérgenos.</p>
        <p><strong>Solución de Follow Advisor:</strong> Estructuramos un programa completo de calidad y seguridad:</p>
        <ul>
          <li>Implementación de HACCP y segregación de alérgenos.</li>
          <li>Sistema de food defense en conformidad internacional.</li>
          <li>Homologación ante clientes y organismos reguladores.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Certificación internacional en tiempo récord.</li>
          <li>Operación habilitada para exportación y suministro a grandes redes.</li>
        </ul>
      
        `,

        'case6-title': 'Almacenes (Medicamentos)',
        'case6-html': `
        <p><strong>Desafío:</strong> Implementar y homologar un almacén dedicado a medicamentos, cumpliendo normas estrictas de ANVISA y organismos internacionales.</p>
        <p><strong>Solución de Follow Advisor:</strong></p>
        <ul>
          <li>Estructuramos el sistema de calidad.</li>
          <li>Creamos los flujos de almacenamiento y control de temperatura.</li>
          <li>Conducimos auditorías internas y externas hasta la homologación.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Homologación internacional para clientes estratégicos.</li>
          <li>Operación de almacenamiento lista para auditorías globales.</li>
        </ul>
     
        `,

        'case7-title': 'Auditorías en Brasil y Exterior',
        'case7-html': `
        <p><strong>Desafío:</strong> Una empresa brasileña necesitaba calificar proveedores y transportadoras en Brasil y en el exterior, garantizando conformidad con estándares internacionales GxP.</p>
        <p><strong>Solución de Follow Advisor:</strong></p>
        <ul>
          <li>Condujimos auditorías presenciales en el exterior.</li>
          <li>Establecimos criterios de calificación y compliance.</li>
          <li>Estructuramos informes técnicos validados por organismos locales.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Proveedores internacionales homologados con confiabilidad.</li>
          <li>Reducción de riesgos regulatorios en toda la cadena global.</li>
        </ul>
        `,

        'case8-title': 'Agronegocio',
        'case8-html': `
        <p><strong>Desafío:</strong> Un conglomerado del agronegocio necesitaba implementar un proyecto de supply chain con 12.000 contenedores, operaciones en tres puertos y la importación de maquinaria/equipos bajo ex-tarifario. También requería crear un Centro de Servicios Compartidos (CSC) para 7 empresas del grupo, en un proyecto valorado en R$ 2 mil millones y 24 meses.</p>
        <p><strong>Solución de Follow Advisor:</strong> Desarrollamos el diseño estratégico y la ejecución del supply chain, incluyendo:</p>
        <ul>
          <li>Estructuración de regímenes aduaneros especiales.</li>
          <li>Coordinación de importación con reducción de carga tributaria vía ex-tarifario.</li>
          <li>Implementación del CSC de Supply Chain, estandarizando procesos, tecnología y compliance.</li>
        </ul>
        <p><strong>Resultados:</strong></p>
        <ul>
          <li>Ahorro superior a R$ 200 millones en tributos y eficiencia logística.</li>
          <li>Mayor visibilidad operativa en tiempo real.</li>
          <li>Integración de las 7 empresas bajo una única gobernanza de supply chain.</li>
        </ul>
        `,

        
        // Ventajas
        'advantages-title': '¿Por qué elegir Follow Advisor?',
        'advantages-main-title': 'Ventajas de contratar nuestra consultoría',
        'advantage1-title': 'Experiencia Comprobada',
        'advantage1-desc': '7 años de trayectoria con más de 900 auditorías realizadas',
        'advantage2-title': 'Equipo Especializado',
        'advantage2-desc': 'Profesionales con formación y experiencia en las áreas de actuación',
        'advantage3-title': 'Servicio Personalizado',
        'advantage3-desc': 'Soluciones personalizadas para cada cliente y necesidad',
        'advantage4-title': 'Presencia Internacional',
        'advantage4-desc': 'Servicio en toda América Latina y América del Norte',
        'advantage5-title': 'Multilingüe',
        'advantage5-desc': 'Servicio y documentación en Portugués, Inglés y Español',
        'advantage6-title': 'Resultados Medibles',
        'advantage6-desc': 'Enfoque en entregas reales y resultados tangibles',
        
        // Tarjetas de Ventajas
        'adv-card1-title': 'Experiencia Especializada',
        'adv-card1-desc': 'Conocimiento especializado en el campo, ofreciendo valiosos insights para su empresa.',
        'adv-card2-title': 'Objetividad',
        'adv-card2-desc': 'Perspectiva externa y objetiva, identificando problemas y proponiendo soluciones sin involucramiento emocional.',
        'adv-card3-title': 'Eficiencia',
        'adv-card3-desc': 'Aceleración de procesos, aportando eficiencia operativa y estratégica a su negocio.',
        'adv-card4-title': 'Actualización',
        'adv-card4-desc': 'Mejores prácticas, aportando innovación y modernización a sus procesos y operaciones.',
        'adv-card5-title': 'Enfoque Estratégico',
        'adv-card5-desc': 'Permitimos que su empresa mantenga su enfoque principal, mientras nosotros nos ocupamos de aspectos específicos.',
        'adv-card6-title': 'Resolución de Problemas',
        'adv-card6-desc': 'Resolvemos desafíos complejos e implementamos cambios que aportan resultados reales.',
        
        // Contacto
        'contact-title': 'Contáctenos',
        'contact-subtitle': 'Estamos listos para atender a su empresa',
        'contact-name': 'Nombre',
        'contact-email': 'Email',
        'contact-phone': 'Teléfono',
        'contact-company': 'Empresa',
        'contact-subject': 'Asunto',
        'contact-message': 'Mensaje',
        'contact-submit': 'Enviar Mensaje',
        'contact-address': 'Dirección',
        'contact-address-value': 'Vinhedo - SP',
        'contact-email-label': 'Email',
        'contact-email-value': 'contacto@followadvisor.com',
        'contact-phone-label': 'Teléfono',
        'contact-phone-value': '+55 (11) 9999-9999',
        'contact-hours': 'Horario de Funcionamiento',
        'contact-hours-value': 'Lunes a Sábado, 09:00 - 18:00',
        'contact-website': 'Sitio Web',
        'contact-service': 'Atención',
        'contact-service-value': 'Portugués, Inglés y Español',
        'telefone': 'Teléfono',
        "telefone-numero": '+55 (19) 98408-8833',
        
        // Pie de página
        'footer-rights': '© 2025 Follow Advisor. Todos los derechos reservados.',
        'footer-privacy': 'Política de Privacidad',
        'footer-terms': 'Términos de Uso',
        
        // Outras chaves de internacionalização
       'service-regulatory-more': `
        <p class="section-title">Ofrecemos asesoría integral en asuntos regulatorios, cubriendo licenciamiento, certificaciones y cumplimiento de normas nacionales e internacionales.</p>
        <p class="section-title">Nuestro equipo está especializado en ANVISA, MAPA, ANTT, Receita Federal y organismos estatales/internacionales, garantizando seguridad jurídica y agilidad para su negocio.</p>
        <p class="section-title">Actuamos desde la elaboración y revisión documental hasta la interlocución directa con reguladores, alineando requisitos legales con necesidades operativas.</p>
        <b>Beneficios:</b>
        <ul>
          <li>Menor riesgo de sanciones y no conformidades.</li>
          <li>Aprobaciones más rápidas.</li>
          <li>Planificación regulatoria alineada a objetivos.</li>
          <li>Enfoque en el crecimiento.</li>
        </ul>
      `,

      'service-qualification-more': `
        <p class="section-title">Mentoría en Calificación Térmica y Validación de Sistemas Computarizados utilizados en todo el proceso de trazabilidad e integridad de productos para la salud.</p>
        <p class="section-title">Incluye mapeos térmicos, calificación de transporte, almacenamiento, equipos y procesos críticos, aplicando metodologías reconocidas (BPx, OMS, ISO, IATA, FDA).</p>
        <b>Entregables:</b>
        <ul>
          <li>Informes técnicos completos y auditables.</li>
          <li>Confiabilidad en cadena de frío y productos sensibles.</li>
          <li>Cumplimiento en auditorías nacionales e internacionales.</li>
          <li>Mayor seguridad y trazabilidad al usuario final.</li>
        </ul>
      `,

      'service-supplychain-more': `
        <p class="section-title">Apoyamos el desarrollo, optimización y gestión estratégica de cadenas logísticas nacionales e internacionales, integrando importación, exportación, almacenamiento y transporte.</p>
        <p class="section-title">Unimos experiencia práctica en supply chain con visión estratégica de negocio para generar eficiencia, reducción de costos y cumplimiento de normas globales.</p>
        <b>Áreas de actuación:</b>
        <ul>
          <li>Planificación y diseño de red (S&OP, DDMRP, WMS, TMS).</li>
          <li>Gestión de importación y exportación, incluidos regímenes especiales.</li>
          <li>Estrategias de internacionalización y apertura de mercados.</li>
          <li>Optimización de costos logísticos y gestión de proveedores globales.</li>
        </ul>
        <b>Resultados esperados:</b>
        <ul>
          <li>Cadenas más ágiles, eficientes y resilientes.</li>
          <li>Reducción del costo total.</li>
          <li>Mayor competitividad nacional e internacional.</li>
        </ul>
      `,

      'service-logistics-more': `
        <p class="section-title">Soluciones completas en logística, transporte y almacenamiento, garantizando eficiencia operativa, seguridad del producto y cumplimiento normativo.</p>
        <p class="section-title">Desde la planificación estratégica hasta la ejecución, adaptadas a la realidad de cada cliente.</p>
        <b>Nuestras especialidades:</b>
        <ul>
          <li>Gestión de almacenes (ambiente, refrigerado y productos especiales).</li>
          <li>Operaciones de transporte terrestre, aéreo e internacional.</li>
          <li>Monitoreo de KPIs (costos, siniestros, plazos, productividad).</li>
          <li>Implementación de WMS, TMS y automatización.</li>
        </ul>
        <b>Resultados para su empresa:</b>
        <ul>
          <li>Reducción de costos logísticos.</li>
          <li>Mayor productividad operativa.</li>
          <li>Seguridad y trazabilidad de punta a punta.</li>
          <li>Soluciones escalables conforme al crecimiento.</li>
        </ul>
      `,

      'service-medical-more': `
        <p class="section-title">Consultoría especializada para distribuidoras de dispositivos médicos, hospitalarios y productos de salud, enfocada en regulación, logística y calidad.</p>
        <b>Entregables principales:</b>
        <ul>
          <li>Procesos alineados a ANVISA, MAPA y normas internacionales.</li>
          <li>Apoyo en registro, licenciamiento y certificaciones.</li>
          <li>Gestión de cadena de frío para ítems sensibles.</li>
          <li>POEs y documentación lista para auditorías.</li>
        </ul>
        <b>Beneficios para el sector:</b>
        <ul>
          <li>Cumplimiento regulatorio y seguridad del paciente.</li>
          <li>Operaciones logísticas ágiles y trazables.</li>
          <li>Menor riesgo en auditorías e inspecciones.</li>
          <li>Reputación fortalecida ante clientes y organismos.</li>
        </ul>
      `,

      'service-quality-more': `
        <p class="section-title">Especialistas en implementación y gestión de sistemas de calidad y certificaciones, esenciales para la excelencia en mercados competitivos.</p>
        <b>Áreas:</b>
        <ul>
          <li>Sistemas de gestión de calidad (ISO, BPF, BPDA).</li>
          <li>Desarrollo de manuales, POEs y listas maestras.</li>
          <li>Auditorías internas y externas con planes de acción.</li>
          <li>Preparación para certificaciones nacionales e internacionales.</li>
        </ul>
        <b>Lo que gana su empresa:</b>
        <ul>
          <li>Credibilidad ante clientes y organismos.</li>
          <li>Procesos estandarizados y más eficientes.</li>
          <li>Mejora continua como parte de la cultura.</li>
          <li>Menos fallas, retrabajos y costos de mala calidad.</li>
        </ul>
      `,
      'service-training-more': `
        <p class="section-title">Programas completos de capacitación y desarrollo para equipos técnicos y operativos, alineados a exigencias regulatorias y mejores prácticas.</p>
        <p>Presenciales u online, adaptados a cada cliente: temas técnicos (almacenamiento, transporte, cadena de frío, POEs) y gestión/liderazgo/cultura de calidad.</p>
        <b>Entregables:</b>
        <ul>
          <li>Capacitaciones a medida para operación y gestión.</li>
          <li>Certificados válidos para auditorías y compliance.</li>
          <li>Simulaciones prácticas y casos reales.</li>
          <li>Desarrollo técnico y conductual.</li>
        </ul>
        <b>Resultados esperados:</b>
        <ul>
          <li>Profesionales más capacitados para los desafíos diarios.</li>
          <li>Menos errores operativos y retrabajos.</li>
          <li>Mayor compromiso y retención.</li>
        </ul>
      `,

      'service-storage-more': `
        <p class="section-title">Soluciones de almacenamiento y distribución para insumos farmacéuticos, hospitalarios y alimentos, cumpliendo seguridad, trazabilidad y normativas.</p>
        <b>Nuestras soluciones incluyen:</b>
        <ul>
          <li>Operaciones en ambientes controlados, refrigerados o congelados.</li>
          <li>Recepción, depósito, separación, expedición y transporte.</li>
          <li>Monitoreo continuo de cadena de frío.</li>
          <li>Controles e informes auditables.</li>
        </ul>
        <b>Ventajas para el cliente:</b>
        <ul>
          <li>Menos pérdidas y averías en productos sensibles.</li>
          <li>Operaciones más ágiles y organizadas.</li>
          <li>Seguridad total en todas las etapas.</li>
          <li>Conformidad con ANVISA, MAPA y normas internacionales.</li>
        </ul>
      `,

      'service-foreigntrade-more': `
        <p class="section-title">Apoyo en todas las etapas del comercio exterior, con foco en regímenes aduaneros especiales, reducción de costos logísticos y seguridad en importación/exportación.</p>
        <b>Servicios:</b>
        <ul>
          <li>Regímenes especiales (Ex-tarifario, Drawback, Recof, etc.).</li>
          <li>Importación/exportación conforme Receita, OMC y organismos anuentes.</li>
          <li>Planificación tributaria para reducir costos y aumentar competitividad.</li>
          <li>Consultoría estratégica para internacionalización.</li>
        </ul>
        <b>Beneficios:</b>
        <ul>
          <li>Operaciones seguras y eficientes.</li>
          <li>Menor carga tributaria y logística.</li>
          <li>Mayor agilidad en liberaciones aduaneras.</li>
          <li>Soporte completo para expansión global.</li>
        </ul>
      `,

      'service-legal-more': `
        <p class="section-title">Con socios jurídicos especializados, brindamos soporte integral en jurídico corporativo, alineando compliance, gobernanza y gestión de riesgos a su estrategia.</p>
        <p class="section-title">Proyectos de softlanding con seguridad jurídica para procesos de internacionalización y apoyo a empresas que ingresan a nuevos mercados.</p>
        <b>Alcance:</b>
        <ul>
          <li>Proyectos de compliance corporativo y regulatorio.</li>
          <li>Mitigación de riesgos laborales y contractuales.</li>
          <li>Asesoría en operaciones societarias y comerciales.</li>
          <li>Atención presencial y personalizada mediante bufetes socios.</li>
        </ul>
        <b>Beneficios para el cliente:</b>
        <ul>
          <li>Menor exposición legal y laboral.</li>
          <li>Estructura segura para expandirse.</li>
          <li>Mayor confianza de inversores, clientes y socios.</li>
          <li>Apoyo estratégico a la decisión.</li>
        </ul>
      `,

    }
};

// Função para alternar o idioma do site
// Função para alternar o idioma do site
function switchLanguage(lang) {
  // Elementos com texto simples
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const dict = translations[lang] && translations[lang][key];
    if (dict != null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict;
      } else {
        el.innerText = dict; // texto puro
      }
    }
  });

  // Elementos com HTML (listas, <b>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-html');
    const dict = translations[lang] && translations[lang][key];
    if (dict != null) {
      el.innerHTML = dict; // preserva marcação
    }
  });

  // Atualiza botão ativo
  document.querySelectorAll('.lang-switch').forEach(btn => btn.classList.remove('active'));
  const btnActive = document.querySelector('.lang-switch[data-lang="' + lang + '"]');
  if (btnActive) btnActive.classList.add('active');

  localStorage.setItem('preferredLanguage', lang);
}

// Inicializa o idioma ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'pt';
  window.switchLanguage(preferredLanguage);

  document.querySelectorAll('.lang-switch').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      switchLanguage(this.getAttribute('data-lang'));
    });
  });
});

