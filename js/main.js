// Funcionalidades principais do site
$(document).ready(function() {
    // Botão de retorno ao topo
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    });

    $('#back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Navegação suave
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        if ($target.length) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - 100
            }, 800, 'swing');
        }
    });

    // Ativar tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Detalhes dos serviços
    $('.service-details-btn').click(function(e) {
        e.preventDefault();
        
        var serviceType = $(this).parent().data('service');
        var modalTitle = $(this).siblings('h3').text();
        var modalContent = getServiceDetails(serviceType);
        
        $('#serviceModalLabel').text(modalTitle);
        $('#serviceModalBody').html(modalContent);
        
        var serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
        serviceModal.show();
    });

    // Calculadora de ROI)    
    
    //  Sistema de alternância de idiomas - Implementado no arquivo i18n.js
    $('.language-selector a, .language-selector-footer a').click(function(e) {
        e.preventDefault();
        var lang = $(this).data('lang');
        switchLanguage(lang);
    });   // Formulário de contato
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Simulação de envio de formulário
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        if (name && email && subject && message) {
            alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
            this.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});

// Função para obter detalhes dos serviços
function getServiceDetails(serviceType) {
    var details = {
        regulatory: `
            <div class="service-details">
                <p class="lead">Assessoria completa em licenciamento, certificações e adequação às normas regulatórias.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Assessoria em Licenciamento ANVISA</li>
                    <li>Responsabilidade Técnica</li>
                    <li>Qualificação e Homologação de processos</li>
                    <li>Certificações em Boas Práticas de Transportes</li>
                    <li>LTA de ambientes controlados</li>
                    <li>Preparação de times para auditorias e qualificações</li>
                    <li>Qualificação Térmica de veículos Refrigerados</li>
                    <li>Validação de rotas com Veículos Refrigerados</li>
                    <li>Suporte, treinamento e plano de adequações às RDC's e legislação vigentes</li>
                </ul>
                
                <h4>Cases de Sucesso:</h4>
                <p>Auditorias internas e externas com clientes nacionais e internacionais como: Ache, Novartis, Becton Dickinson, Boehringer Ingelheim, IMCD, Johnson & Johnson, Synghenta, Bravo Logistics, MSD, Roche, Kuehne&Nagel, Lenovo, Expeditors, NovoNordisk, SANOFI e EMS.</p>
            </div>
        `,
        qualification: `
            <div class="service-details">
                <p class="lead">Qualificação térmica e validação de processos conforme normas nacionais e internacionais.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Qualificação Térmica conforme RDC 430/2020 e N° 653/2022</li>
                    <li>Relatórios conclusivos e documentação completa</li>
                    <li>Resumo geral das medições dos registradores</li>
                    <li>Gráficos do estudo</li>
                    <li>Tabela de Classificação</li>
                    <li>Relatório de dados tratados</li>
                    <li>Certificados de Calibração dos registradores</li>
                    <li>Posicionamento dos sensores com Layout</li>
                    <li>Protocolos de Instalação (QI), Operação (QO) e Performance (QP)</li>
                </ul>
                
                <h4>Base Regulatória:</h4>
                <p>WHO 961, 2011; ANVISA RDC Nº 304, 301, 430, 653; USP 36; Guia para Qualificação de Transporte dos Produtos Biológicos ANVISA Nº2/2017.</p>
            </div>
        `,
        supplychain: `
            <div class="service-details">
                <p class="lead">Desenvolvimento e otimização de cadeias logísticas nacionais e internacionais.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Implantação de unidades comerciais e fabricação (ZERO to ALL)</li>
                    <li>Localização de Fornecedores</li>
                    <li>Desenvolvimento de cadeia logística e soluções de transporte</li>
                    <li>Qualidade em capacidade de entregas</li>
                    <li>Melhoria e end to customer para logística internacional</li>
                    <li>Nacionalização e Estudos de Custos</li>
                </ul>
                
                <h4>Cases de Sucesso:</h4>
                <p>BASF SEEDS, GRUPO OXY, Expeditor's Intl, Banco Santander, Unilever ICE CREAM.</p>
            </div>
        `,
        logistics: `
            <div class="service-details">
                <p class="lead">Assessoria completa em operações logísticas, transporte e armazenamento.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Assessoria em transporte de produtos</li>
                    <li>Procedimentos de Transportes e Operações IN e OUT Bound</li>
                    <li>Qualidade em Pré-Venda, Pré-Operação e Integração de Clientes</li>
                    <li>Auditorias e certificação com Laboratórios e órgãos Anuentes</li>
                    <li>Mentoria e qualificação de Equipe</li>
                    <li>Treinamentos por cliente e produtos</li>
                    <li>Documentação de Carga e Armazenamento</li>
                    <li>Monitoramento e Treinamento de Relatórios</li>
                </ul>
                
                <h4>Cases de Sucesso:</h4>
                <p>Grupo Nasif, ARTICO Log, Rodoxico Express, Grupo Tombini, Sider Transportes, Expeditors, Joanini Transportes, Columbia Transportes, Alpha Cargo, R-Biopharm Brasil, Roda Brasil Logistica, Grupo Air Frio, PRA Transportes, Globex Multimodal, SGT Logística, GraL TRANSPORTES, LW – Industria Quimica.</p>
            </div>
        `,
        medical: `
            <div class="service-details">
                <p class="lead">Consultoria especializada para distribuidoras de dispositivos médicos e produtos para saúde.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Regulamentação e Conformidade (ANVISA, FDA, CE)</li>
                    <li>Gestão de Qualidade (ISO 13485)</li>
                    <li>Logística e Supply Chain</li>
                    <li>Rastreabilidade</li>
                    <li>Documentação e Registros</li>
                    <li>Avaliação de Fornecedores</li>
                    <li>Compliance e Ética</li>
                    <li>Gestão de Risco</li>
                </ul>
                
                <p>Nossa consultoria especializada assegura conformidade regulatória, realiza auditorias internas e externas, implementa Sistemas de Gestão da Qualidade, otimiza logística e rastreabilidade, gerencia documentação, avalia fornecedores, promove compliance e ética, e oferece gestão de riscos.</p>
            </div>
        `,
        quality: `
            <div class="service-details">
                <p class="lead">Implementação e gestão de sistemas de qualidade e processos de certificação.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Assessoria em modelagem de procedimentos (em português e inglês)</li>
                    <li>Aplicação de normas e processos de qualidade</li>
                    <li>Design de Procedimentos Operacionais Padrão (POP)</li>
                    <li>Auditoria em processos (ISO 9000 e 14000, SASSMAQ, RDC 430/2020, OEA)</li>
                    <li>Controle de Licenças e Documentos</li>
                    <li>Utilização de Ferramenta de BI para acompanhamento de processos</li>
                    <li>Treinamento em B.I.</li>
                    <li>Suporte em programas de qualificação de fornecedores e clientes</li>
                </ul>
                
                <h4>Cases de Sucesso:</h4>
                <p>SYNGHENTA, BOSCH, MSD, GE HEALTH CARE, BASF SEEDS, BFG INTERNATIONAL.</p>
            </div>
        `,
        training: `
            <div class="service-details">
                <p class="lead">Programas de capacitação e desenvolvimento de equipes técnicas e operacionais.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Assessoria e mentoria em transporte de produtos</li>
                    <li>Procedimentos de Transportes</li>
                    <li>Pré-Venda, Pré-Operação e Integração de Clientes</li>
                    <li>Pré-Auditorias, Auditorias e certificação</li>
                    <li>Mentoria e qualificação de Equipe</li>
                    <li>Treinamentos específicos por cliente e produtos</li>
                    <li>Documentação de Carga e Armazenamento</li>
                    <li>Monitoramento e Treinamento de Relatórios Pós-entrega</li>
                </ul>
                
                <h4>Cases de Sucesso:</h4>
                <p>Grupo Nasif, ARTICO Log, Rodoxico Express, Sider Transportes, Joanini Transportes, Alpha Cargo, Roda Brasil Logistica, PRA Transportes, SGT Logística.</p>
            </div>
        `,
        storage: `
            <div class="service-details">
                <p class="lead">Soluções especializadas para armazenagem e distribuição de insumos farmacêuticos e alimentos.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Armazenagem em ambientes controlados para insumos farmacêuticos</li>
                    <li>Gestão de estoque e inventário de produtos sensíveis</li>
                    <li>Distribuição especializada com controle de temperatura</li>
                    <li>Rastreabilidade completa da cadeia de suprimentos</li>
                    <li>Conformidade com normas sanitárias e regulatórias</li>
                    <li>Soluções para armazenagem de alimentos com controle de temperatura</li>
                    <li>Gestão de validade e lotes de produtos</li>
                    <li>Sistemas de monitoramento em tempo real</li>
                </ul>
                
                <h4>Diferenciais:</h4>
                <p>Nossa expertise em armazenagem e distribuição de insumos farmacêuticos e alimentos garante a integridade dos produtos, conformidade regulatória e eficiência operacional, reduzindo perdas e otimizando a cadeia de suprimentos.</p>
            </div>
        `,
        foreigntrade: `
            <div class="service-details">
                <p class="lead">Regimes especiais, otimização de custos logísticos e soluções para comércio internacional.</p>
                
                <h4>Serviços Oferecidos:</h4>
                <ul>
                    <li>Consultoria em regimes aduaneiros especiais (Drawback, RECOF, etc.)</li>
                    <li>Otimização de custos logísticos em operações internacionais</li>
                    <li>Planejamento tributário para operações de comércio exterior</li>
                    <li>Assessoria em classificação fiscal de mercadorias</li>
                    <li>Análise e estruturação de operações internacionais</li>
                    <li>Consultoria em acordos comerciais internacionais</li>
                    <li>Desenvolvimento de estratégias para redução de custos operacionais</li>
                    <li>Suporte em processos de importação e exportação</li>
                </ul>
                
                <h4>Benefícios:</h4>
                <p>Nossa consultoria em comércio exterior permite a redução significativa de custos operacionais e tributários, otimização de processos logísticos internacionais e aproveitamento de benefícios fiscais disponíveis em regimes especiais, aumentando a competitividade da sua empresa no mercado global.</p>
            </div>
        `
    };
    
    return details[serviceType] || '<p>Detalhes não disponíveis.</p>';
}

// Função para alternar o idioma do site - Implementada no arquivo i18n.js
// Esta função foi movida para o arquivo i18n.js para melhor organização
// e para garantir a tradução completa de todo o conteúdo do site
var translations = {
    'menu_about': {
        'pt': 'Sobre Nós',
        'en': 'About Us'
    },
    'menu_services': {
        'pt': 'Serviços',
        'en': 'Services'
    },
    'menu_team': {
        'pt': 'Equipe',
        'en': 'Team'
    },
    'menu_presence': {
        'pt': 'Presença',
        'en': 'Presence'
    },
    'menu_cases': {
        'pt': 'Cases',
        'en': 'Cases'
    },
    'menu_advantages': {
        'pt': 'Diferenciais',
        'en': 'Advantages'
    },
    'menu_contact': {
        'pt': 'Contato',
        'en': 'Contact'
    },

    // Banner Principal
    'hero_title': {
        'pt': 'Orientação que inspira!',
        'en': 'Guidance that inspires!'
    },
    'hero_subtitle': {
        'pt': 'Consultoria e assessoria especializada em Qualidade e Supply-Chain',
        'en': 'Specialized consulting and advisory in Quality and Supply-Chain'
    },
    'hero_button': {
        'pt': 'Fale Conosco',
        'en': 'Contact Us'
    },

    // Sobre Nós
    'about_title': {
        'pt': 'Sobre a Follow Advisor',
        'en': 'About Follow Advisor'
    },
    'about_text': {
        'pt': 'A Follow Advisor é uma empresa de consultoria e assessoria em Qualidade e Supply-Chain, atendendo desde Assuntos Regulatórios, ANVISA, Qualidade, Logística da Cadeia Fria, Licenças e órgãos anuentes, até Projetos de Supply Chain e Armazenagem. Atuamos há 7 anos no mercado com foco em ações e entregas reais, oferecendo soluções customizadas para nossos clientes.',
        'en': 'Follow Advisor is a consulting and advisory company in Quality and Supply-Chain, serving from Regulatory Affairs, ANVISA, Quality, Cold Chain Logistics, Licenses and consenting bodies, to Supply Chain and Storage Projects. We have been operating in the market for 7 years with a focus on real actions and deliveries, offering customized solutions to our clients.'
    },
    'mission_title': {
        'pt': 'Missão',
        'en': 'Mission'
    },
    'mission_text': {
        'pt': 'Oferecer serviços de consultoria e assessoria para garantir qualidade nos processos, atendimento global em demandas regulatórias e segurança nas operações de nossos clientes.',
        'en': 'To provide consulting and advisory services to ensure quality in processes, global service in regulatory demands, and security in our clients\' operations.'
    },
    'vision_title': {
        'pt': 'Visão',
        'en': 'Vision'
    },
    'vision_text': {
        'pt': 'Desenvolver os melhores profissionais em soluções avançadas na cadeia logística.',
        'en': 'To develop the best professionals in advanced solutions in the logistics chain.'
    },
    'values_title': {
        'pt': 'Valores',
        'en': 'Values'
    },
    'value_responsibility': {
        'pt': 'Responsabilidade',
        'en': 'Responsibility'
    },
    'value_transparency': {
        'pt': 'Transparência',
        'en': 'Transparency'
    },
    'value_efficiency': {
        'pt': 'Eficiência',
        'en': 'Efficiency'
    },
    'value_ethics': {
        'pt': 'Ética',
        'en': 'Ethics'
    },

    // Estatísticas
    'stats_companies': {
        'pt': 'Empresas homologadas na ANVISA',
        'en': 'Companies approved by ANVISA'
    },
    'stats_industries': {
        'pt': 'Indústrias farmacêuticas atendidas',
        'en': 'Pharmaceutical industries served'
    },
    'stats_audits': {
        'pt': 'Auditorias de Qualidade realizadas',
        'en': 'Quality Audits conducted'
    },
    'stats_imports': {
        'pt': 'Toneladas de produtos importados',
        'en': 'Tons of imported products'
    },
    'stats_vehicles': {
        'pt': 'Veículos sob gestão de Qualidade',
        'en': 'Vehicles under Quality management'
    },
    'stats_cargo': {
        'pt': 'Cargas com qualificação de rotas mensais',
        'en': 'Cargo with monthly route qualification'
    },

    // Serviços
    'services_title': {
        'pt': 'Soluções Customizadas',
        'en': 'Customized Solutions'
    },
    'services_subtitle': {
        'pt': 'Atendimento em Português, Inglês e Espanhol (incluindo relatórios sob demanda)',
        'en': 'Service in Portuguese, English, and Spanish (including reports on demand)'
    },
    'service_regulatory': {
        'pt': 'Assuntos Regulatórios',
        'en': 'Regulatory Affairs'
    },
    'service_regulatory_desc': {
        'pt': 'Assessoria completa em licenciamento, certificações e adequação às normas regulatórias.',
        'en': 'Complete advisory in licensing, certifications, and compliance with regulatory standards.'
    },
    'service_qualification': {
        'pt': 'Estudos de Qualificação',
        'en': 'Qualification Studies'
    },
    'service_qualification_desc': {
        'pt': 'Qualificação térmica e validação de processos conforme normas nacionais e internacionais.',
        'en': 'Thermal qualification and process validation according to national and international standards.'
    },
    'service_supplychain': {
        'pt': 'Supply Chain e Comércio Exterior',
        'en': 'Supply Chain and Foreign Trade'
    },
    'service_supplychain_desc': {
        'pt': 'Desenvolvimento e otimização de cadeias logísticas nacionais e internacionais.',
        'en': 'Development and optimization of national and international logistics chains.'
    },
    'service_logistics': {
        'pt': 'Logística, Transportes e Armazenagem',
        'en': 'Logistics, Transportation, and Storage'
    },
    'service_logistics_desc': {
        'pt': 'Assessoria completa em operações logísticas, transporte e armazenamento.',
        'en': 'Complete advisory in logistics operations, transportation, and storage.'
    },
    'service_medical': {
        'pt': 'Assessoria para Distribuidoras Médicas',
        'en': 'Advisory for Medical Distributors'
    },
    'service_medical_desc': {
        'pt': 'Consultoria especializada para distribuidoras de dispositivos médicos e produtos para saúde.',
        'en': 'Specialized consulting for distributors of medical devices and healthcare products.'
    },
    'service_quality': {
        'pt': 'Qualidade',
        'en': 'Quality'
    },
    'service_quality_desc': {
        'pt': 'Implementação e gestão de sistemas de qualidade e processos de certificação.',
        'en': 'Implementation and management of quality systems and certification processes.'
    },
    'service_training': {
        'pt': 'Treinamento e Qualificação',
        'en': 'Training and Qualification'
    },
    'service_training_desc': {
        'pt': 'Programas de capacitação e desenvolvimento de equipes técnicas e operacionais.',
        'en': 'Training and development programs for technical and operational teams.'
    },
    'service_more': {
        'pt': 'Saiba mais',
        'en': 'Learn more'
    },
    'service_modal_title': {
        'pt': 'Detalhes do Serviço',
        'en': 'Service Details'
    },
    'service_modal_close': {
        'pt': 'Fechar',
        'en': 'Close'
    },
    'service_modal_request': {
        'pt': 'Solicitar Informações',
        'en': 'Request Information'
    },

    // Equipe
    'team_title': {
        'pt': 'Time de Gestores',
        'en': 'Management Team'
    },
    'team_subtitle': {
        'pt': 'Profissionais SÊNIOR de Mercado, com experiência acumulada em indústrias: Farmacêutica, Química, Logística, Mineração, Fertilizantes e Tecnologia.',
        'en': 'SENIOR Market professionals, with accumulated experience in industries: Pharmaceutical, Chemical, Logistics, Mining, Fertilizers, and Technology.'
    },
    'team_support': {
        'pt': 'Nossa equipe também inclui 2 Farmacêuticos Especialistas e 2 analistas de Qualidade.',
        'en': 'Our team also includes 2 Specialist Pharmacists and 2 Quality analysts.'
    },
    'team_position_pharmacist': {
        'pt': 'Farmacêutica',
        'en': 'Pharmacist'
    },
    'team_position_consultant': {
        'pt': 'Consultor',
        'en': 'Consultant'
    },
    'team_specialty_coldchain': {
        'pt': 'Especialista em Cadeia Fria',
        'en': 'Cold Chain Specialist'
    },
    'team_specialty_regulatory': {
        'pt': 'Assuntos Regulatórios',
        'en': 'Regulatory Affairs'
    },
    'team_specialty_supplychain': {
        'pt': 'Supply Chain & Comex',
        'en': 'Supply Chain & Foreign Trade'
    },

    // Presença
    'presence_title': {
        'pt': 'Presença Latam e América do Norte',
        'en': 'Presence in Latin America and North America'
    },
    'presence_subtitle': {
        'pt': 'Atendimento nacional e internacional',
        'en': 'National and international service'
    },
    'presence_brazil': {
        'pt': 'Brasil',
        'en': 'Brazil'
    },
    'presence_international': {
        'pt': 'Internacional',
        'en': 'International'
    },
    'presence_map': {
        'pt': 'Mapa Interativo',
        'en': 'Interactive Map'
    },

    // Cases
    'cases_title': {
        'pt': 'Nossos Clientes',
        'en': 'Our Clients'
    },
    'cases_subtitle': {
        'pt': 'Parcerias de sucesso em diversos setores',
        'en': 'Successful partnerships across various sectors'
    },
    'cases_tab_pharma': {
        'pt': 'Indústria Farmacêutica',
        'en': 'Pharmaceutical Industry'
    },
    'cases_tab_agro': {
        'pt': 'Agronegócio',
        'en': 'Agribusiness'
    },
    'cases_tab_logistics': {
        'pt': 'Logística',
        'en': 'Logistics'
    },
    'cases_tab_others': {
        'pt': 'Outros Setores',
        'en': 'Other Sectors'
    },

    // Diferenciais
    'advantages_title': {
        'pt': 'Vantagens de contratar nossa consultoria',
        'en': 'Benefits of hiring our consulting services'
    },
    'advantages_subtitle': {
        'pt': 'Por que escolher a Follow Advisor?',
        'en': 'Why choose Follow Advisor?'
    },
    'advantage_experience': {
        'pt': 'Experiência Especializada',
        'en': 'Specialized Experience'
    },
    'advantage_experience_desc': {
        'pt': 'Conhecimento especializado na área, oferecendo insights valiosos para sua empresa.',
        'en': 'Specialized knowledge in the area, offering valuable insights for your company.'
    },
    'advantage_objectivity': {
        'pt': 'Objetividade',
        'en': 'Objectivity'
    },
    'advantage_objectivity_desc': {
        'pt': 'Perspectiva externa e objetiva, identificando problemas e propondo soluções sem envolvimento emocional.',
        'en': 'External and objective perspective, identifying problems and proposing solutions without emotional involvement.'
    },
    'advantage_efficiency': {
        'pt': 'Eficiência',
        'en': 'Efficiency'
    },
    'advantage_efficiency_desc': {
        'pt': 'Aceleração de processos, trazendo eficiência operacional e estratégica para seu negócio.',
        'en': 'Acceleration of processes, bringing operational and strategic efficiency to your business.'
    },
    'advantage_update': {
        'pt': 'Atualização',
        'en': 'Up-to-date'
    },
    'advantage_update_desc': {
        'pt': 'Melhores práticas, trazendo inovação e modernização para seus processos e operações.',
        'en': 'Best practices, bringing innovation and modernization to your processes and operations.'
    },
    'advantage_focus': {
        'pt': 'Foco estratégico',
        'en': 'Strategic Focus'
    },
    'advantage_focus_desc': {
        'pt': 'Permitimos que sua empresa mantenha seu foco principal, enquanto lidamos com aspectos específicos.',
        'en': 'We allow your company to maintain its main focus, while we handle specific aspects.'
    },
    'advantage_problem': {
        'pt': 'Resolução de Problemas',
        'en': 'Problem Solving'
    },
    'advantage_problem_desc': {
        'pt': 'Resolvemos desafios complexos e implementamos mudanças que trazem resultados reais.',
        'en': 'We solve complex challenges and implement changes that bring real results.'
    },

    // Contato
    'contact_title': {
        'pt': 'Fale Conosco',
        'en': 'Contact Us'
    },
    'contact_subtitle': {
        'pt': 'Estamos prontos para atender sua empresa',
        'en': 'We are ready to serve your company'
    },
    'contact_address': {
        'pt': 'Endereço',
        'en': 'Address'
    },
    'contact_hours': {
        'pt': 'Horário de Funcionamento',
        'en': 'Business Hours'
    },
    'contact_hours_value': {
        'pt': 'Segunda a Sábado, 09:00 - 18:00',
        'en': 'Monday to Saturday, 09:00 - 18:00'
    },
    'contact_website': {
        'pt': 'Website',
        'en': 'Website'
    },
    'contact_service': {
        'pt': 'Atendimento',
        'en': 'Service'
    },
    'contact_service_value': {
        'pt': 'Português, Inglês e Espanhol',
        'en': 'Portuguese, English, and Spanish'
    },
    'contact_form_name': {
        'pt': 'Nome',
        'en': 'Name'
    },
    'contact_form_email': {
        'pt': 'Email',
        'en': 'Email'
    },
    'contact_form_phone': {
        'pt': 'Telefone',
        'en': 'Phone'
    },
    'contact_form_company': {
        'pt': 'Empresa',
        'en': 'Company'
    },
    'contact_form_subject': {
        'pt': 'Assunto',
        'en': 'Subject'
    },
    'contact_form_message': {
        'pt': 'Mensagem',
        'en': 'Message'
    },
    'contact_form_submit': {
        'pt': 'Enviar Mensagem',
        'en': 'Send Message'
    },

    // Calculadora de ROI
    'roi_title': {
        'pt': 'Calculadora de ROI',
        'en': 'ROI Calculator'
    },
    'roi_subtitle': {
        'pt': 'Calcule o retorno sobre investimento dos nossos serviços',
        'en': 'Calculate the return on investment of our services'
    },
    'roi_investment': {
        'pt': 'Investimento (R$)',
        'en': 'Investment (R$)'
    },
    'roi_savings': {
        'pt': 'Economia Mensal Estimada (R$)',
        'en': 'Estimated Monthly Savings (R$)'
    },
    'roi_period': {
        'pt': 'Período (meses)',
        'en': 'Period (months)'
    },
    'roi_service': {
        'pt': 'Serviço',
        'en': 'Service'
    },
    'roi_calculate': {
        'pt': 'Calcular ROI',
        'en': 'Calculate ROI'
    },
    'roi_result': {
        'pt': 'Resultado',
        'en': 'Result'
    },
    'roi_payback': {
        'pt': 'Payback',
        'en': 'Payback'
    },
    'roi_request': {
        'pt': 'Solicitar Proposta Detalhada',
        'en': 'Request Detailed Proposal'
    },

    // Rodapé
    'footer_slogan': {
        'pt': 'Orientação que inspira!',
        'en': 'Guidance that inspires!'
    },
    'footer_copyright': {
        'pt': '© 2024 Follow Advisor Ltda. Todos os direitos reservados.',
        'en': '© 2024 Follow Advisor Ltda. All rights reserved.'
    },
    'footer_links': {
        'pt': 'Links Rápidos',
        'en': 'Quick Links'
    },
    'footer_social': {
        'pt': 'Redes Sociais',
        'en': 'Social Media'
    },
    'footer_language': {
        'pt': 'Idioma',
        'en': 'Language'
    },
    'footer_language_pt': {
        'pt': 'Português',
        'en': 'Portuguese'
    },
    'footer_language_en': {
        'pt': 'English',
        'en': 'English'
    }
};
    
    // Percorre todas as chaves de tradução e atualiza o conteúdo
    for (var key in translations) {
        var elements = document.querySelectorAll('[data-i18n="' + key + '"]');
        elements.forEach(function(element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[key][lang];
            } else {
                element.textContent = translations[key][lang];
            }
        });
    }
    
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = lang;
    
    // Salva a preferência de idioma no localStorage
    localStorage.setItem('preferredLanguage', lang);


// Inicializa o idioma com base na preferência salva ou no idioma do navegador
document.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('preferredLanguage');
    var browserLang = navigator.language || navigator.userLanguage;
    var initialLang = savedLang || (browserLang.startsWith('pt') ? 'pt' : 'en');
    
    // Adiciona atributos data-i18n a todos os elementos que precisam de tradução
    addI18nAttributes();
    
    // Define o idioma inicial
    switchLanguage(initialLang);
});

// Função para adicionar atributos data-i18n aos elementos
function addI18nAttributes() {
    // Exemplo: Adicionar atributos aos itens de menu
    document.querySelectorAll('.nav-link').forEach(function(element, index) {
        var keys = ['menu_home', 'menu_about', 'menu_services', 'menu_team', 'menu_presence', 'menu_cases', 'menu_advantages', 'menu_contact'];
        if (index < keys.length) {
            element.setAttribute('data-i18n', keys[index]);
        }
    });
    
    // Adicionar aos elementos do banner principal
    document.querySelector('.hero-section h1').setAttribute('data-i18n', 'hero_title');
    document.querySelector('.hero-section .lead').setAttribute('data-i18n', 'hero_subtitle');
    document.querySelector('.hero-section .btn').setAttribute('data-i18n', 'hero_button');
    
    // Continuar adicionando para outros elementos...
    // (Na implementação real, todos os elementos traduzíveis teriam atributos data-i18n)
}
