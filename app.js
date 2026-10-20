/* ---------- biblioteca de exercícios ---------- */
const GROUPS={
  peito:{n:'Peito',c:'var(--bad)'}, costas:{n:'Costas',c:'var(--accent)'}, ombros:{n:'Ombros',c:'var(--violet)'},
  biceps:{n:'Bíceps',c:'var(--teal)'}, triceps:{n:'Tríceps',c:'var(--orange)'}, quadriceps:{n:'Quadríceps',c:'var(--warn)'},
  posterior:{n:'Posterior',c:'var(--ok)'}, gluteos:{n:'Glúteos',c:'var(--ok)'}, panturrilha:{n:'Panturrilha',c:'var(--slate)'},
  abdomen:{n:'Abdômen',c:'var(--slate)'}, trapezio:{n:'Trapézio',c:'var(--accent)'}, antebraco:{n:'Antebraço',c:'var(--teal)'},
  adutores:{n:'Adutores',c:'var(--warn)'}, cardio:{n:'Cardio',c:'var(--bad)'}, outros:{n:'Outros',c:'var(--slate)'}
};
const MAIN_GROUPS=['peito','costas','ombros','biceps','triceps','quadriceps','posterior','gluteos'];
const EX=[
 {id:'supino-reto',n:'Supino reto com barra',g:'peito',t:'kg',tips:['Escápulas retraídas e pés firmes no chão','Desça a barra até a linha do mamilo, cotovelos a ~45°','Empurre em linha levemente diagonal, sem tirar o quadril do banco']},
 {id:'supino-inclinado-halter',n:'Supino inclinado com halteres',g:'peito',t:'kg',tips:['Banco entre 30° e 45°','Desça os halteres até sentir alongar o peitoral','Suba aproximando os halteres sem bater um no outro']},
 {id:'crucifixo',n:'Crucifixo com halteres',g:'peito',t:'kg',tips:['Cotovelos levemente flexionados o tempo todo','Abra até a linha do ombro, sem passar','Feche como se abraçasse um barril']},
 {id:'crossover',n:'Crossover na polia',g:'peito',t:'kg',tips:['Um pé à frente e tronco levemente inclinado','Puxe em arco até as mãos se encontrarem','Volte devagar, controlando o alongamento']},
 {id:'flexao',n:'Flexão de braço',g:'peito',t:'corpo',tips:['Corpo em linha reta da cabeça ao calcanhar','Mãos um pouco mais abertas que os ombros','Peito quase encosta no chão em cada repetição']},
 {id:'puxada-frente',n:'Puxada frontal',g:'costas',t:'kg',tips:['Pegada um pouco mais aberta que os ombros','Puxe a barra até o alto do peito, levando os cotovelos para baixo','Não balance o tronco para ajudar']},
 {id:'barra-fixa',n:'Barra fixa',g:'costas',t:'corpo',tips:['Comece com os braços estendidos','Puxe até o queixo passar a barra','Desça controlando, sem soltar o corpo']},
 {id:'remada-curvada',n:'Remada curvada com barra',g:'costas',t:'kg',tips:['Tronco a ~45°, coluna neutra','Puxe a barra em direção ao umbigo','Aperte as escápulas no topo']},
 {id:'remada-baixa',n:'Remada baixa (triângulo)',g:'costas',t:'kg',tips:['Peito estufado e coluna reta','Puxe o triângulo até o abdômen','Deixe os ombros irem à frente só no final do retorno']},
 {id:'remada-unilateral',n:'Remada unilateral com halter',g:'costas',t:'kg',tips:['Mão e joelho apoiados no banco','Leve o cotovelo em direção ao quadril','Evite girar o tronco']},
 {id:'levantamento-terra',n:'Levantamento terra',g:'posterior',t:'kg',tips:['Barra encostada na canela, coluna neutra','Empurre o chão com as pernas e estenda o quadril junto','Mantenha a barra rente ao corpo na subida e descida']},
 {id:'desenvolvimento-halter',n:'Desenvolvimento com halteres',g:'ombros',t:'kg',tips:['Costas apoiadas e abdômen firme','Halteres começam na altura das orelhas','Suba sem travar totalmente os cotovelos']},
 {id:'elevacao-lateral',n:'Elevação lateral',g:'ombros',t:'kg',tips:['Cotovelos levemente flexionados','Suba até a altura dos ombros, sem impulso','Desça devagar, contando 2 segundos']},
 {id:'face-pull',n:'Face pull',g:'ombros',t:'kg',tips:['Corda na altura do rosto','Puxe abrindo as mãos para os lados das orelhas','Gire os ombros para fora no final']},
 {id:'rosca-direta',n:'Rosca direta com barra',g:'biceps',t:'kg',tips:['Cotovelos colados ao corpo','Suba sem jogar o tronco para trás','Desça até estender quase por completo']},
 {id:'rosca-alternada',n:'Rosca alternada',g:'biceps',t:'kg',tips:['Gire o punho para cima durante a subida','Um braço por vez, sem balançar','Controle a descida']},
 {id:'rosca-martelo',n:'Rosca martelo',g:'biceps',t:'kg',tips:['Palmas viradas uma para a outra','Cotovelos fixos ao lado do corpo','Suba até o halter ficar na altura do ombro']},
 {id:'triceps-polia',n:'Tríceps na polia (corda)',g:'triceps',t:'kg',tips:['Cotovelos fixos ao lado do corpo','Estenda e abra a corda no final','Volte até 90° sem levantar os cotovelos']},
 {id:'triceps-testa',n:'Tríceps testa',g:'triceps',t:'kg',tips:['Braços apontando para o teto','Desça a barra em direção à testa só dobrando os cotovelos','Cotovelos fechados, sem abrir para os lados']},
 {id:'mergulho',n:'Mergulho nas paralelas',g:'triceps',t:'corpo',tips:['Tronco mais reto foca o tríceps','Desça até os cotovelos chegarem a ~90°','Ombros longe das orelhas']},
 {id:'agachamento',n:'Agachamento livre',g:'quadriceps',t:'kg',tips:['Pés na largura dos ombros, pontas levemente para fora','Joelhos acompanham a direção dos pés','Desça mantendo o peito aberto e o calcanhar no chão']},
 {id:'leg-press',n:'Leg press 45°',g:'quadriceps',t:'kg',tips:['Lombar sempre encostada no banco','Desça até ~90° nos joelhos','Não trave os joelhos na subida']},
 {id:'cadeira-extensora',n:'Cadeira extensora',g:'quadriceps',t:'kg',tips:['Joelho alinhado ao eixo da máquina','Segure 1 segundo no topo','Desça sem deixar o peso bater']},
 {id:'afundo',n:'Afundo / passada',g:'quadriceps',t:'kg',tips:['Passo longo e tronco reto','Joelho de trás quase toca o chão','Empurre com o calcanhar da perna da frente']},
 {id:'stiff',n:'Stiff',g:'posterior',t:'kg',tips:['Joelhos levemente flexionados e fixos','Leve o quadril para trás deslizando a barra nas coxas','Desça até sentir o posterior alongar, coluna neutra']},
 {id:'mesa-flexora',n:'Mesa flexora',g:'posterior',t:'kg',tips:['Quadril colado no banco','Puxe o rolo até perto do glúteo','Desça devagar']},
 {id:'elevacao-pelvica',n:'Elevação pélvica (hip thrust)',g:'gluteos',t:'kg',tips:['Escápulas apoiadas no banco','Queixo levemente para baixo, costelas fechadas','Suba até o quadril alinhar com o tronco e contraia o glúteo']},
 {id:'abdutora',n:'Cadeira abdutora',g:'gluteos',t:'kg',tips:['Tronco levemente inclinado à frente','Abra as pernas com controle','Segure 1 segundo na abertura']},
 {id:'panturrilha-pe',n:'Panturrilha em pé',g:'panturrilha',t:'kg',tips:['Desça o calcanhar o máximo possível','Suba na ponta dos pés e segure 1 segundo','Joelhos estendidos, sem quicar']},
 {id:'panturrilha-sentado',n:'Panturrilha sentado',g:'panturrilha',t:'kg',tips:['Apoio logo acima dos joelhos','Amplitude completa em cada repetição','Movimento lento e contínuo']},
 {id:'prancha',n:'Prancha',g:'abdomen',t:'tempo',tips:['Antebraços sob os ombros','Glúteos e abdômen contraídos','Quadril alinhado, sem subir nem cair']},
 {id:'elevacao-pernas',n:'Elevação de pernas',g:'abdomen',t:'corpo',tips:['Lombar colada no chão ou no apoio','Suba as pernas sem impulso','Desça devagar sem encostar']},
 {id:'abdominal-polia',n:'Abdominal na polia',g:'abdomen',t:'kg',tips:['Ajoelhado, corda ao lado da cabeça','Enrole o tronco levando o peito ao quadril','Quadril parado durante o movimento']},
 /* peito */
 {id:'supino-reto-halter',n:'Supino reto com halteres',g:'peito',t:'kg',tips:['Halteres na linha do peito, cotovelos a ~45°','Desça até sentir o peitoral alongar','Suba aproximando os halteres no topo']},
 {id:'supino-inclinado-barra',n:'Supino inclinado com barra',g:'peito',t:'kg',tips:['Banco a 30°–45°','Barra desce na parte alta do peito','Escápulas presas no banco o tempo todo']},
 {id:'supino-declinado',n:'Supino declinado',g:'peito',t:'kg',tips:['Pernas bem presas no apoio','Barra desce na parte baixa do peito','Movimento controlado, sem quicar']},
 {id:'supino-maquina',n:'Supino na máquina',g:'peito',t:'kg',tips:['Pegada na linha do meio do peito','Empurre sem tirar as costas do encosto','Volte devagar até alongar']},
 {id:'supino-smith',n:'Supino no Smith',g:'peito',t:'kg',tips:['Banco posicionado para a barra descer no peito','Cotovelos a ~45°','Não trave os cotovelos no topo']},
 {id:'peck-deck',n:'Peck deck (voador)',g:'peito',t:'kg',tips:['Banco ajustado com as mãos na altura do peito','Feche apertando o peitoral','Abra até alongar, sem passar da linha do ombro']},
 {id:'crucifixo-inclinado',n:'Crucifixo inclinado',g:'peito',t:'kg',tips:['Banco a 30°','Cotovelos levemente dobrados e fixos','Foque em alongar e fechar o peitoral superior']},
 {id:'crossover-baixo',n:'Crossover de baixo para cima',g:'peito',t:'kg',tips:['Polias na posição mais baixa','Suba as mãos em arco até a altura do queixo','Foca no peitoral superior']},
 {id:'flexao-inclinada',n:'Flexão inclinada (mãos no banco)',g:'peito',t:'corpo',tips:['Versão mais fácil da flexão','Corpo reto, abdômen firme','Peito encosta no banco']},
 {id:'flexao-declinada',n:'Flexão declinada (pés no banco)',g:'peito',t:'corpo',tips:['Versão mais difícil, foca o peitoral superior','Quadril alinhado','Desça até o peito quase tocar o chão']},
 {id:'mergulho-peito',n:'Mergulho para peitoral',g:'peito',t:'corpo',tips:['Incline o tronco à frente','Cotovelos um pouco abertos','Desça até alongar o peitoral, sem dor no ombro']},
 {id:'pullover',n:'Pullover com halter',g:'peito',t:'kg',tips:['Costas apoiadas no banco, quadril firme','Leve o halter atrás da cabeça com braços quase estendidos','Volte até acima do peito']},
 /* costas */
 {id:'puxada-supinada',n:'Puxada supinada',g:'costas',t:'kg',tips:['Palmas viradas para você, pegada na largura dos ombros','Puxe até o alto do peito','Cotovelos descem rente ao corpo']},
 {id:'puxada-triangulo',n:'Puxada com triângulo',g:'costas',t:'kg',tips:['Tronco levemente inclinado para trás','Puxe o triângulo até o peito','Aperte as escápulas embaixo']},
 {id:'puxada-aberta',n:'Puxada aberta pela frente',g:'costas',t:'kg',tips:['Pegada bem aberta','Puxe até a clavícula','Não leve a barra atrás da nuca']},
 {id:'pulldown',n:'Pulldown (braços estendidos)',g:'costas',t:'kg',tips:['Braços quase estendidos o tempo todo','Leve a barra até as coxas em arco','Sinta o latíssimo, não o tríceps']},
 {id:'barra-supinada',n:'Barra fixa supinada (chin-up)',g:'costas',t:'corpo',tips:['Palmas viradas para você','Puxe até o queixo passar a barra','Desça até estender os braços']},
 {id:'barra-graviton',n:'Barra assistida (graviton)',g:'costas',t:'kg',tips:['Quanto mais peso de assistência, mais fácil','Puxe até o queixo passar a barra','Desça controlando']},
 {id:'remada-cavalinho',n:'Remada cavalinho (T-bar)',g:'costas',t:'kg',tips:['Tronco inclinado e coluna neutra','Puxe a pegada até o abdômen','Peito aberto, sem arredondar as costas']},
 {id:'remada-maquina',n:'Remada na máquina',g:'costas',t:'kg',tips:['Peito apoiado no encosto','Puxe levando os cotovelos para trás','Aperte as escápulas por 1 segundo']},
 {id:'remada-pronada',n:'Remada curvada pronada',g:'costas',t:'kg',tips:['Palmas para baixo','Puxe a barra até a parte baixa do peito','Cotovelos mais abertos, foco no meio das costas']},
 {id:'remada-supinada',n:'Remada curvada supinada',g:'costas',t:'kg',tips:['Palmas para cima','Puxe a barra até o umbigo','Cotovelos junto ao corpo']},
 {id:'remada-alta',n:'Remada alta',g:'trapezio',t:'kg',tips:['Pegada na largura dos ombros','Suba a barra até a linha do peito, cotovelos acima das mãos','Não suba demais se sentir incômodo no ombro']},
 {id:'remada-polia-unilateral',n:'Remada unilateral na polia',g:'costas',t:'kg',tips:['Tronco firme, sem girar','Leve o cotovelo para trás rente ao corpo','Alongue bem na volta']},
 {id:'hiperextensao',n:'Hiperextensão lombar (banco romano)',g:'posterior',t:'kg',tips:['Quadril apoiado na almofada','Desça com a coluna neutra','Suba até alinhar o corpo, sem hiperestender']},
 {id:'encolhimento',n:'Encolhimento com halteres',g:'trapezio',t:'kg',tips:['Braços estendidos ao lado do corpo','Suba os ombros em direção às orelhas','Segure 1 segundo e desça devagar']},
 {id:'encolhimento-barra',n:'Encolhimento com barra',g:'trapezio',t:'kg',tips:['Barra à frente das coxas','Suba os ombros sem girar','Não dobre os cotovelos']},
 /* ombros */
 {id:'desenvolvimento-barra',n:'Desenvolvimento com barra',g:'ombros',t:'kg',tips:['Sentado ou em pé, abdômen firme','Barra sai da altura do queixo','Suba até quase estender os braços']},
 {id:'desenvolvimento-maquina',n:'Desenvolvimento na máquina',g:'ombros',t:'kg',tips:['Pegadas na altura das orelhas','Empurre sem arquear a lombar','Desça controlando']},
 {id:'desenvolvimento-arnold',n:'Desenvolvimento Arnold',g:'ombros',t:'kg',tips:['Comece com palmas viradas para você','Gire os punhos enquanto sobe','Inverta o movimento na descida']},
 {id:'militar-em-pe',n:'Desenvolvimento militar em pé',g:'ombros',t:'kg',tips:['Glúteos e abdômen contraídos','Barra passa rente ao rosto','Cabeça avança levemente no topo']},
 {id:'elevacao-frontal',n:'Elevação frontal',g:'ombros',t:'kg',tips:['Suba os braços à frente até a linha dos ombros','Sem balançar o tronco','Desça devagar']},
 {id:'elevacao-lateral-polia',n:'Elevação lateral na polia',g:'ombros',t:'kg',tips:['Cabo passando por trás ou à frente do corpo','Suba até a linha do ombro','Tensão constante, sem pausa embaixo']},
 {id:'elevacao-lateral-maquina',n:'Elevação lateral na máquina',g:'ombros',t:'kg',tips:['Cotovelos apoiados nas almofadas','Suba até a linha do ombro','Controle a descida']},
 {id:'crucifixo-inverso',n:'Crucifixo inverso (posterior de ombro)',g:'ombros',t:'kg',tips:['Tronco inclinado à frente ou na máquina peck deck invertida','Abra os braços levando as mãos para trás','Cotovelos levemente dobrados']},
 /* bíceps */
 {id:'rosca-w',n:'Rosca com barra W',g:'biceps',t:'kg',tips:['Pegada no ângulo da barra, menos tensão nos punhos','Cotovelos fixos','Desça controlando']},
 {id:'rosca-scott',n:'Rosca Scott',g:'biceps',t:'kg',tips:['Axilas encostadas no topo do banco','Desça até quase estender','Não tire os cotovelos do apoio']},
 {id:'rosca-concentrada',n:'Rosca concentrada',g:'biceps',t:'kg',tips:['Cotovelo apoiado na parte interna da coxa','Suba girando o punho','Aperte o bíceps no topo']},
 {id:'rosca-polia',n:'Rosca na polia',g:'biceps',t:'kg',tips:['Cotovelos colados ao corpo','Tensão constante durante todo o movimento','Desça até estender']},
 {id:'rosca-inclinada',n:'Rosca inclinada com halteres',g:'biceps',t:'kg',tips:['Banco a 45°, braços pendurados atrás do corpo','Suba sem levar os cotovelos à frente','Alonga bastante o bíceps']},
 {id:'rosca-spider',n:'Rosca spider',g:'biceps',t:'kg',tips:['Peito apoiado no banco inclinado','Braços pendurados na vertical','Suba sem balançar']},
 /* tríceps */
 {id:'triceps-barra-polia',n:'Tríceps na polia com barra',g:'triceps',t:'kg',tips:['Cotovelos fixos ao lado do corpo','Estenda totalmente os braços','Volte até 90°']},
 {id:'triceps-frances',n:'Tríceps francês',g:'triceps',t:'kg',tips:['Halter ou barra atrás da cabeça','Cotovelos apontando para cima e fechados','Estenda sem mexer os ombros']},
 {id:'triceps-coice',n:'Tríceps coice',g:'triceps',t:'kg',tips:['Tronco inclinado, cotovelo junto ao corpo','Estenda o braço para trás','Segure 1 segundo estendido']},
 {id:'triceps-banco',n:'Mergulho no banco',g:'triceps',t:'corpo',tips:['Mãos no banco atrás de você','Desça até os cotovelos a 90°','Costas perto do banco']},
 {id:'supino-fechado',n:'Supino fechado',g:'triceps',t:'kg',tips:['Pegada na largura dos ombros','Cotovelos rentes ao corpo','Barra desce na parte baixa do peito']},
 {id:'triceps-unilateral-polia',n:'Tríceps unilateral na polia',g:'triceps',t:'kg',tips:['Pegada invertida ou neutra','Cotovelo parado','Estenda até o fim']},
 {id:'triceps-polia-alta',n:'Tríceps na polia acima da cabeça',g:'triceps',t:'kg',tips:['De costas para a polia, corda atrás da cabeça','Estenda os braços à frente e acima','Alonga a cabeça longa do tríceps']},
 /* quadríceps */
 {id:'agachamento-smith',n:'Agachamento no Smith',g:'quadriceps',t:'kg',tips:['Pés um pouco à frente da barra','Desça até as coxas paralelas ao chão','Mantenha o peito aberto']},
 {id:'agachamento-frontal',n:'Agachamento frontal',g:'quadriceps',t:'kg',tips:['Barra apoiada na frente dos ombros, cotovelos altos','Tronco bem reto','Desça fundo mantendo os calcanhares no chão']},
 {id:'agachamento-goblet',n:'Agachamento goblet',g:'quadriceps',t:'kg',tips:['Halter ou kettlebell junto ao peito','Cotovelos entre os joelhos no fundo','Ótimo para aprender o agachamento']},
 {id:'hack',n:'Agachamento hack',g:'quadriceps',t:'kg',tips:['Costas inteiras apoiadas','Pés no meio da plataforma','Desça até 90° ou mais, se confortável']},
 {id:'bulgaro',n:'Agachamento búlgaro',g:'quadriceps',t:'kg',tips:['Pé de trás apoiado no banco','Desça na vertical até o joelho de trás quase tocar o chão','Tronco levemente inclinado foca mais glúteo']},
 {id:'sissy',n:'Agachamento sissy',g:'quadriceps',t:'corpo',tips:['Segure em um apoio','Leve os joelhos à frente e o tronco para trás','Amplitude que for confortável para os joelhos']},
 {id:'leg-press-horizontal',n:'Leg press horizontal',g:'quadriceps',t:'kg',tips:['Lombar colada no encosto','Desça até ~90°','Não trave os joelhos']},
 {id:'passada-andando',n:'Passada andando',g:'quadriceps',t:'kg',tips:['Passos largos e controlados','Joelho de trás quase toca o chão','Tronco reto o tempo todo']},
 {id:'step-up',n:'Subida no banco (step-up)',g:'quadriceps',t:'kg',tips:['Pé inteiro apoiado no banco','Suba empurrando com a perna da frente','Desça devagar']},
 /* posterior */
 {id:'terra-romeno',n:'Levantamento terra romeno',g:'posterior',t:'kg',tips:['Barra rente às coxas','Quadril vai para trás, joelhos levemente dobrados','Desça até o meio da canela com a coluna neutra']},
 {id:'terra-sumo',n:'Levantamento terra sumô',g:'posterior',t:'kg',tips:['Pés bem afastados, pontas para fora','Mãos por dentro das pernas','Empurre os joelhos para fora na subida']},
 {id:'cadeira-flexora',n:'Cadeira flexora',g:'posterior',t:'kg',tips:['Joelho alinhado ao eixo da máquina','Puxe o rolo para baixo até o fim','Volte devagar']},
 {id:'flexora-em-pe',n:'Flexora em pé (unilateral)',g:'posterior',t:'kg',tips:['Tronco apoiado e quadril parado','Leve o calcanhar em direção ao glúteo','Uma perna por vez']},
 {id:'good-morning',n:'Bom dia (good morning)',g:'posterior',t:'kg',tips:['Barra nas costas como no agachamento','Incline o tronco levando o quadril para trás','Comece leve, coluna sempre neutra']},
 {id:'stiff-halter',n:'Stiff com halteres',g:'posterior',t:'kg',tips:['Halteres à frente das coxas','Quadril para trás, joelhos semi-flexionados','Sinta o posterior alongar']},
 /* glúteos */
 {id:'gluteo-polia',n:'Glúteo na polia (coice)',g:'gluteos',t:'kg',tips:['Tornozeleira presa ao cabo','Leve a perna para trás sem arquear a lombar','Contraia o glúteo no fim']},
 {id:'gluteo-maquina',n:'Glúteo na máquina (4 apoios)',g:'gluteos',t:'kg',tips:['Coluna neutra e abdômen firme','Empurre o apoio para trás e para cima','Segure 1 segundo']},
 {id:'ponte-gluteo',n:'Ponte de glúteo',g:'gluteos',t:'kg',tips:['Deitado com os pés apoiados no chão','Suba o quadril contraindo o glúteo','Pode usar barra ou anilha no quadril']},
 {id:'abducao-polia',n:'Abdução de quadril na polia',g:'gluteos',t:'kg',tips:['De lado para a polia','Abra a perna para o lado','Tronco parado']},
 {id:'agachamento-sumo',n:'Agachamento sumô',g:'gluteos',t:'kg',tips:['Pés bem afastados, pontas para fora','Halter pendurado entre as pernas','Desça com o tronco reto']},
 {id:'adutora',n:'Cadeira adutora',g:'adutores',t:'kg',tips:['Costas apoiadas','Feche as pernas com controle','Abra devagar até alongar']},
 /* panturrilha */
 {id:'panturrilha-leg',n:'Panturrilha no leg press',g:'panturrilha',t:'kg',tips:['Só a ponta dos pés na plataforma','Empurre com os dedos, joelhos estendidos','Desça bem o calcanhar']},
 {id:'panturrilha-unilateral',n:'Panturrilha unilateral com halter',g:'panturrilha',t:'kg',tips:['Ponta do pé em um degrau','Segure em um apoio para equilíbrio','Amplitude completa']},
 {id:'panturrilha-smith',n:'Panturrilha no Smith',g:'panturrilha',t:'kg',tips:['Ponta dos pés sobre uma anilha ou step','Suba o máximo possível','Pausa de 1 segundo embaixo']},
 /* abdômen */
 {id:'abdominal-supra',n:'Abdominal supra (crunch)',g:'abdomen',t:'corpo',tips:['Lombar no chão','Suba só até tirar as escápulas do chão','Solte o ar na subida']},
 {id:'abdominal-infra-banco',n:'Abdominal infra no banco',g:'abdomen',t:'corpo',tips:['Segure atrás da cabeça no banco','Leve os joelhos ao peito tirando o quadril','Desça devagar']},
 {id:'abdominal-bicicleta',n:'Abdominal bicicleta',g:'abdomen',t:'corpo',tips:['Cotovelo vai em direção ao joelho oposto','Perna de baixo estendida','Ritmo controlado']},
 {id:'abdominal-maquina',n:'Abdominal na máquina',g:'abdomen',t:'kg',tips:['Ajuste para o peito ficar no apoio','Enrole o tronco para frente','Não puxe com os braços']},
 {id:'elevacao-pernas-barra',n:'Elevação de pernas na barra',g:'abdomen',t:'corpo',tips:['Pendurado na barra, sem balançar','Suba os joelhos ou pernas estendidas','Desça devagar']},
 {id:'prancha-lateral',n:'Prancha lateral',g:'abdomen',t:'tempo',tips:['Cotovelo embaixo do ombro','Quadril alto e alinhado','Troque de lado']},
 {id:'roda-abdominal',n:'Roda abdominal',g:'abdomen',t:'corpo',tips:['Comece de joelhos','Role à frente sem deixar a lombar cair','Volte contraindo o abdômen']},
 {id:'russian-twist',n:'Rotação russa (russian twist)',g:'abdomen',t:'corpo',tips:['Tronco inclinado para trás, pés no chão ou elevados','Gire o tronco de um lado para o outro','Pode segurar uma anilha']},
 {id:'pallof',n:'Pallof press',g:'abdomen',t:'kg',tips:['De lado para a polia','Empurre o cabo à frente sem deixar o tronco girar','Segure 2 segundos estendido']},
 /* antebraço */
 {id:'rosca-punho',n:'Rosca de punho',g:'antebraco',t:'kg',tips:['Antebraços apoiados na coxa ou no banco','Só o punho se move','Amplitude completa']},
 {id:'rosca-inversa',n:'Rosca inversa',g:'antebraco',t:'kg',tips:['Palmas para baixo','Cotovelos fixos','Trabalha antebraço e braquial']},
 {id:'farmer-walk',n:'Caminhada do fazendeiro',g:'antebraco',t:'kg',tips:['Halteres pesados ao lado do corpo','Ombros para trás, passos curtos','Anote a carga e o tempo em segundos nas repetições']},
 /* cardio */
 {id:'esteira',n:'Esteira',g:'cardio',t:'tempo',tips:['Registre o tempo em segundos (ex.: 1200 = 20 min)','Comece com 5 min de aquecimento','Postura reta, sem segurar no apoio']},
 {id:'bike',n:'Bicicleta ergométrica',g:'cardio',t:'tempo',tips:['Banco na altura do quadril','Joelho quase estendido embaixo','Registre o tempo em segundos']},
 {id:'eliptico',n:'Elíptico (transport)',g:'cardio',t:'tempo',tips:['Use os braços junto','Mantenha o ritmo constante','Registre o tempo em segundos']},
 {id:'escada',n:'Escada (simulador)',g:'cardio',t:'tempo',tips:['Não apoie o peso nos braços','Passo completo','Registre o tempo em segundos']},
 {id:'remo-ergometro',n:'Remo ergômetro',g:'cardio',t:'tempo',tips:['Ordem: pernas, tronco, braços','Na volta: braços, tronco, pernas','Registre o tempo em segundos']},
 {id:'pular-corda',n:'Pular corda',g:'cardio',t:'tempo',tips:['Saltos baixos na ponta dos pés','Gire a corda com os punhos','Registre o tempo em segundos']},
 {id:'burpee',n:'Burpee',g:'cardio',t:'corpo',tips:['Agache, apoie as mãos e jogue os pés para trás','Faça a flexão e volte','Termine com um salto']},
 {id:'kettlebell-swing',n:'Kettlebell swing',g:'posterior',t:'kg',tips:['Movimento vem do quadril, não dos braços','Coluna neutra no balanço','Contraia glúteos no topo']}
];

/* ---------- utilidades ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const num=v=>{const n=parseFloat(String(v??'').replace(',','.'));return isFinite(n)?n:0};
const f1=n=>(Math.round(n*10)/10).toLocaleString('pt-BR',{maximumFractionDigits:1});
const dshort=iso=>new Date(iso).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'}).replace('.','');
const dayKey=d=>{d=new Date(d);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const DAY=864e5;
const LS={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const GLOGO='<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
const ICON={
  chev:'<svg class="i chev" width="18" height="18" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
  check:'<svg class="i" width="20" height="20" viewBox="0 0 24 24" style="stroke-width:2.6"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  info:'<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  play:'<svg class="i" viewBox="0 0 24 24"><path d="M8 5.5v13l10-6.5z"/></svg>',
  x:'<svg class="i" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  up:'<svg class="i" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg>',
  down:'<svg class="i" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
  plus:'<svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>'
};

/* ---------- estado ---------- */
const emptyProfile=()=>({routines:[],custom:[],videos:{},bw:[],body:{},meas:[],photos:[]});
const S={mode:'local',deleted:[],profile:emptyProfile(),sessions:[],demo:null,tab:'ficha',evoEx:null,exQ:'',exG:'',edit:null,draft:null,pick:null,rest:null};
const D=()=>S.demo||S;
const prof=()=>D().profile;
const sess=()=>D().sessions;
const allEx=()=>EX.concat(prof().custom||[]);
const exById=id=>allEx().find(e=>e.id===id)||{id,n:'Exercício removido',g:'outros',t:'kg',tips:[]};
const grp=g=>GROUPS[g]||GROUPS.outros;
function normProfile(p){p=p||{};return {routines:p.routines||[],custom:p.custom||[],videos:p.videos||{},bw:p.bw||[],body:p.body||{},meas:p.meas||[],photos:p.photos||[],_ts:p._ts||0,...(p.deload?{deload:p.deload}:{})}}
// ---- limpeza: tudo que vem de backup, do Drive ou do armazenamento passa por aqui antes de ser usado
const cId=v=>String(v??'').replace(/[^A-Za-z0-9_\-.:]/g,'').slice(0,80);
const cStr=(v,n=200)=>String(v??'').slice(0,n);
const cNum=(v,min=0,max=100000)=>{const n=Number(v);return isFinite(n)?Math.min(max,Math.max(min,n)):0};
const cDate=v=>{const t=new Date(v);return isNaN(t)?null:t.toISOString()};
const safeUrl=v=>/^https?:\/\/[^\s"'<>]+$/i.test(String(v||''))?String(v):'';
function cleanSet(x){const o={kg:cNum(x&&x.kg,0,2000),reps:Math.round(cNum(x&&x.reps,0,100000))};if(x&&x.rir!=null&&x.rir!=='')o.rir=Math.round(cNum(x.rir,0,10));return o}
function cleanSession(x){
  if(!x||typeof x!=='object')return null;const id=cId(x.id),date=cDate(x.date);if(!id||!date||!Array.isArray(x.entries))return null;
  const o={id,date,routineName:cStr(x.routineName,120),routineId:x.routineId?cId(x.routineId):null,entries:x.entries.filter(e=>e&&Array.isArray(e.sets)).map(e=>({ex:cId(e.ex),sets:e.sets.map(cleanSet)})).filter(e=>e.ex)};
  if(x.dur!=null)o.dur=Math.round(cNum(x.dur,0,1440));if(x.end&&cDate(x.end))o.end=cDate(x.end);return o;
}
function cleanProfile(p){
  p=p&&typeof p==='object'?p:{};
  const arr=v=>Array.isArray(v)?v:[];
  const o={
    routines:arr(p.routines).map(r=>({id:cId(r&&r.id)||uid(),name:cStr(r&&r.name,120),items:arr(r&&r.items).map(i=>({ex:cId(i&&i.ex),sets:Math.round(cNum(i&&i.sets,1,20)),rmin:Math.round(cNum(i&&i.rmin,1,10000)),rmax:Math.round(cNum(i&&i.rmax,1,10000)),rest:Math.round(cNum(i&&i.rest,0,3600))})).filter(i=>i.ex)})),
    custom:arr(p.custom).map(c=>({id:cId(c&&c.id),n:cStr(c&&c.n,80),g:GROUPS[c&&c.g]?c.g:'outros',t:['kg','corpo','tempo'].includes(c&&c.t)?c.t:'kg',custom:true,tips:arr(c&&c.tips).map(t=>cStr(t,200)).slice(0,10)})).filter(c=>c.id&&c.n),
    videos:{},
    bw:arr(p.bw).map(b=>({date:cDate(b&&b.date),kg:cNum(b&&b.kg,0,500)})).filter(b=>b.date&&b.kg),
    body:{sexo:p.body&&p.body.sexo==='f'?'f':'m',altura:cNum(p.body&&p.body.altura,0,260)},
    meas:arr(p.meas).map(m=>{const o={date:cDate(m&&m.date)};for(const k of ['peso','pescoco','ombros','peito','cintura','quadril','braco','antebraco','coxa','panturrilha','punho','gordura']){const v=cNum(m&&m[k],0,500);if(v)o[k]=v}return o}).filter(m=>m.date),
    photos:arr(p.photos).map(f=>({id:cId(f&&f.id),date:cDate(f&&f.date),pose:['frente','lado','costas'].includes(f&&f.pose)?f.pose:'frente'})).filter(f=>f.id&&f.date),
    _ts:cNum(p._ts,0,1e15)
  };
  if(p.videos&&typeof p.videos==='object')for(const k in p.videos){const u=safeUrl(p.videos[k]);if(u&&cId(k))o.videos[cId(k)]=u.slice(0,500)}
  if(p.deload&&cDate(p.deload))o.deload=cDate(p.deload);
  return o;
}
function cleanData(d){
  if(!d||typeof d!=='object')return null;
  return {profile:cleanProfile(d.profile),sessions:sortSessions((Array.isArray(d.sessions)?d.sessions:[]).map(cleanSession).filter(Boolean)),deleted:(Array.isArray(d.deleted)?d.deleted:[]).map(cId).filter(Boolean).slice(-1000)};
}
function sortSessions(a){return a.sort((x,y)=>new Date(x.date)-new Date(y.date))}

(function boot(){
  const c=LS.get('ficha.v1');
  const cd=c&&cleanData(c);
  if(cd){S.profile=normProfile(cd.profile);S.sessions=cd.sessions;S.deleted=cd.deleted}
  S.tab=LS.get('ficha.tab')||'ficha';
  S.draft=LS.get('ficha.draft');
})();
function cache(){LS.set('ficha.v1',{profile:S.profile,sessions:S.sessions,deleted:S.deleted})}

/* ---------- persistência: celular (sempre) + Google Drive (quando conectado) ---------- */
const CLIENT_ID=((window.FICHA_CONFIG||{}).googleClientId||'').trim();
const SCOPES='https://www.googleapis.com/auth/drive.file openid email';
const DRIVE='https://www.googleapis.com/drive/v3/files',UPLOAD='https://www.googleapis.com/upload/drive/v3/files';
const G={client:null,token:null,exp:0,pending:null,ids:LS.get('ficha.drive')||{},state:'off',dirty:!!LS.get('ficha.dirty'),busy:false,again:false,timer:null,last:LS.get('ficha.lastSync')||0};
const tokenOk=()=>G.token&&Date.now()<G.exp-60000;
function setState(st){G.state=st;renderStatus()}
function markDirty(){G.dirty=true;LS.set('ficha.dirty',true);cache();scheduleSync()}
function scheduleSync(){clearTimeout(G.timer);G.timer=setTimeout(()=>{if(tokenOk())sync();else if(G.ids.email)setState('tap')},1500)}
async function saveProfile(){if(S.demo)return;S.profile._ts=Date.now();markDirty()}
async function addSession(s){const d=D();d.sessions.push(s);sortSessions(d.sessions);if(S.demo)return;markDirty()}
async function deleteSession(id){const d=D();d.sessions=d.sessions.filter(s=>s.id!==id);if(S.demo)return;S.deleted.push(id);markDirty()}

window.gisLoaded=function(){
  if(!CLIENT_ID||!window.google||!google.accounts) return;
  G.client=google.accounts.oauth2.initTokenClient({client_id:CLIENT_ID,scope:SCOPES,
    callback:r=>{const p=G.pending;G.pending=null;if(r&&r.access_token){G.token=r.access_token;G.exp=Date.now()+(r.expires_in||3600)*1000;p&&p(G.token)}else p&&p(null)},
    error_callback:()=>{const p=G.pending;G.pending=null;p&&p(null)}});
  setState(G.ids.email?'tap':'off');
};
function initSync(){
  const gsi=document.querySelector('script[src*="gsi/client"]');if(gsi)gsi.addEventListener('load',()=>gisLoaded());
  if(!CLIENT_ID){setState('nocfg');return}
  if(window.google&&google.accounts)gisLoaded();else setState(navigator.onLine?'off':'offline');
  addEventListener('online',()=>{if(tokenOk()&&G.dirty)sync();else if(G.state==='offline')setState(G.ids.email?'tap':'off')});
  addEventListener('offline',()=>setState('offline'));
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&G.dirty&&tokenOk())sync()});
}
// precisa ser chamado a partir de um toque (o Google abre uma janela rápida de confirmação)
function requestToken(){
  return new Promise(res=>{
    if(!G.client){res(null);return}
    G.pending=res;
    try{G.client.requestAccessToken({prompt:G.ids.email?'':'consent',login_hint:G.ids.email||undefined})}catch(e){G.pending=null;res(null)}
  });
}
async function connectGoogle(){
  if(!CLIENT_ID){toast('O login com Google ainda não foi configurado. Veja o guia de publicação.');return}
  if(!navigator.onLine){setState('offline');toast('Sem internet. Seus dados continuam salvos no celular.');return}
  if(!G.client){toast('Carregando o Google… tente de novo em alguns segundos.');return}
  const t=await requestToken();
  if(!t){setState(G.ids.email?'tap':'off');toast('Login cancelado.');return}
  if(!G.ids.email){try{const r=await gfetch('https://www.googleapis.com/oauth2/v3/userinfo');const u=await r.json();G.ids.email=u.email||'conectado';saveIds()}catch(e){}}
  await sync(true);
}
function saveIds(){LS.set('ficha.drive',G.ids)}
async function gfetch(url,opt={}){
  if(!tokenOk()) throw {code:'auth'};
  let r;try{r=await fetch(url,{...opt,headers:{...(opt.headers||{}),Authorization:'Bearer '+G.token}})}catch(e){throw {code:'net'}}
  if(r.status===401){G.token=null;throw {code:'auth'}}
  if(r.status===404) throw {code:'404'};
  if(!r.ok) throw {code:'http',status:r.status};
  return r;
}
async function driveFind(q){const r=await gfetch(DRIVE+'?spaces=drive&fields=files(id,name)&q='+encodeURIComponent(q+' and trashed=false'));return ((await r.json()).files||[])[0]||null}
async function driveFolder(name,parent){
  const q=`name='${name}' and mimeType='application/vnd.google-apps.folder'`+(parent?` and '${parent}' in parents`:'');
  const f=await driveFind(q);if(f)return f.id;
  const r=await gfetch(DRIVE+'?fields=id',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,mimeType:'application/vnd.google-apps.folder',...(parent?{parents:[parent]}:{})})});
  return (await r.json()).id;
}
async function driveCreate(name,mime,data,parent){
  const b='ficha'+uid();
  const body=new Blob([`--${b}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({name,parents:[parent]})}\r\n--${b}\r\nContent-Type: ${mime}\r\n\r\n`,data,`\r\n--${b}--`]);
  const r=await gfetch(UPLOAD+'?uploadType=multipart&fields=id',{method:'POST',headers:{'Content-Type':'multipart/related; boundary='+b},body});
  return (await r.json()).id;
}
async function ensureFiles(){
  if(!G.ids.folder){G.ids.folder=await driveFolder('Ficha de Treino');saveIds()}
  if(!G.ids.file){const f=await driveFind(`name='ficha-dados.json' and '${G.ids.folder}' in parents`);if(f){G.ids.file=f.id;saveIds()}}
}
function mergeData(a,b){
  if(!b||!b.profile||!Array.isArray(b.sessions)) return a;
  const deleted=[...new Set([...(a.deleted||[]),...(b.deleted||[])])].slice(-1000),del=new Set(deleted),map=new Map();
  for(const x of [...b.sessions,...a.sessions]) if(x&&x.id&&!del.has(x.id)) map.set(x.id,x);
  const pa=a.profile||{},pb=b.profile||{};
  return {profile:normProfile((pb._ts||0)>(pa._ts||0)?pb:pa),sessions:sortSessions([...map.values()]),deleted};
}
async function sync(first){
  if(!CLIENT_ID) return;
  if(G.busy){G.again=true;return}
  if(!tokenOk()){setState(G.ids.email?'tap':'off');return}
  G.busy=true;setState('sync');
  try{
    await ensureFiles();
    let remote=null;
    if(G.ids.file){try{const r=await gfetch(`${DRIVE}/${G.ids.file}?alt=media`);remote=cleanData(await r.json().catch(()=>null))}catch(e){if(e.code==='404'){G.ids.file=null;saveIds()}else throw e}}
    const local={profile:S.profile,sessions:S.sessions,deleted:S.deleted};
    const merged=mergeData(local,remote);
    const changedLocal=JSON.stringify(merged)!==JSON.stringify(local);
    S.profile=merged.profile;S.sessions=merged.sessions;S.deleted=merged.deleted;cache();
    const same=remote&&JSON.stringify({profile:normProfile(remote.profile),sessions:sortSessions(remote.sessions.slice()),deleted:remote.deleted||[]})===JSON.stringify(merged);
    if(!same){
      const body=JSON.stringify({app:'ficha-de-treino',versao:2,salvo:new Date().toISOString(),...merged});
      if(G.ids.file) await gfetch(`${UPLOAD}/${G.ids.file}?uploadType=media`,{method:'PATCH',headers:{'Content-Type':'application/json'},body});
      else{G.ids.file=await driveCreate('ficha-dados.json','application/json',body,G.ids.folder);saveIds()}
    }
    G.dirty=false;LS.del('ficha.dirty');G.last=Date.now();LS.set('ficha.lastSync',G.last);
    setState('ok');
    if(changedLocal&&!S.demo)render();
    if(first&&remote&&changedLocal)toast('Dados do Drive carregados.');else if(first)toast('Conectado ao Google Drive.');
  }catch(e){
    setState(e.code==='auth'?'tap':(e.code==='net'||!navigator.onLine)?'offline':'error');
  }
  G.busy=false;
  if(G.again){G.again=false;sync()}
}
function signOut(){
  try{G.token&&google.accounts.oauth2.revoke(G.token,()=>{})}catch(e){}
  G.token=null;G.exp=0;G.ids={};saveIds();LS.del('ficha.lastSync');setState('off');
}

/* ---------- métricas ---------- */
// músculos secundários: cada série conta 1 para o músculo principal e a fração indicada para os auxiliares
const SEC=(()=>{const m={},add=(ids,o)=>ids.split(' ').forEach(id=>m[id]=o);
  add('supino-reto supino-reto-halter supino-inclinado-halter supino-inclinado-barra supino-declinado supino-maquina supino-smith flexao flexao-inclinada flexao-declinada mergulho-peito',{triceps:.5,ombros:.5});
  add('supino-fechado mergulho triceps-banco',{peito:.5,ombros:.25});
  add('desenvolvimento-halter desenvolvimento-barra desenvolvimento-maquina desenvolvimento-arnold militar-em-pe',{triceps:.5});
  add('puxada-frente puxada-supinada puxada-triangulo puxada-aberta barra-fixa barra-supinada barra-graviton remada-curvada remada-baixa remada-unilateral remada-cavalinho remada-maquina remada-pronada remada-supinada remada-polia-unilateral',{biceps:.5,ombros:.25});
  add('remada-alta',{ombros:.5});
  add('agachamento agachamento-smith agachamento-frontal agachamento-goblet hack leg-press leg-press-horizontal afundo passada-andando step-up',{gluteos:.5});
  add('bulgaro',{gluteos:.75});
  add('agachamento-sumo',{quadriceps:.5,adutores:.5});
  add('levantamento-terra',{gluteos:.5,costas:.5,quadriceps:.5});
  add('terra-sumo',{gluteos:.5,quadriceps:.5});
  add('terra-romeno stiff stiff-halter good-morning hiperextensao kettlebell-swing',{gluteos:.5});
  add('elevacao-pelvica ponte-gluteo',{posterior:.5});
  add('rosca-martelo rosca-direta rosca-w',{antebraco:.25});
  add('rosca-inversa',{biceps:.5});
  add('farmer-walk',{trapezio:.5});
  add('face-pull crucifixo-inverso',{trapezio:.25});
  return m})();
function contrib(exId){const e=exById(exId),o={[e.g]:1},s=SEC[exId]||{};for(const g in s)o[g]=(o[g]||0)+s[g];return o}
const setScore=s=>s.kg>0?s.kg*(1+Math.min(s.reps,15)/30):s.reps; // 1RM estimado (Epley) ou repetições
function entryStats(en){let best=0,maxKg=0,vol=0,reps=0;for(const s of en.sets){best=Math.max(best,setScore(s));maxKg=Math.max(maxKg,s.kg);vol+=s.kg*s.reps;reps+=s.reps}return {best,maxKg,vol,reps,n:en.sets.length}}
function history(exId){const out=[];for(const s of sess()){const en=s.entries.find(e=>e.ex===exId);if(en&&en.sets.length)out.push({date:s.date,sid:s.id,sets:en.sets,...entryStats(en)})}return out}
function unitOf(exId){const e=exById(exId);if(history(exId).some(h=>h.maxKg>0))return 'kg';return e.t==='tempo'?'s':'reps'}
function lastEntry(exId){const ss=sess();for(let i=ss.length-1;i>=0;i--){const en=ss[i].entries.find(e=>e.ex===exId);if(en&&en.sets.length)return en}return null}
function estMin(r){return Math.round(r.items.reduce((a,it)=>a+it.sets*(40+num(it.rest)),0)/60)}
const kgInc=kg=>kg>=40?2.5:kg>=10?2:1;
const roundKg=(kg,step)=>Math.round(kg/step)*step;
function deloadActive(){const d=prof().deload;return d&&Date.now()<new Date(d).getTime()}
function suggest(it,last){
  if(!last) return {kg:null,text:''};
  const kg=Math.max(...last.sets.map(s=>s.kg));
  if(deloadActive()&&kg>0){const k=roundKg(kg*.9,kg>=40?2.5:1);return {kg:k,text:`Semana leve: use ${f1(k)} kg, metade das séries e pare longe da falha.`}}
  const rirs=last.sets.map(s=>s.rir).filter(v=>v!==undefined&&v!==null);
  const avgRir=rirs.length?rirs.reduce((a,b)=>a+b,0)/rirs.length:null;
  const allHit=last.sets.length>=it.sets&&last.sets.every(s=>s.reps>=it.rmax);
  const below=last.sets.filter(s=>s.reps<it.rmin).length;
  if(kg>0){
    const inc=kgInc(kg);
    if(allHit) return {kg:kg+inc,text:avgRir!==null&&avgRir>=3?`Fácil demais na última (sobraram ~${f1(avgRir)} reps). Suba para ${f1(kg+inc*2)} kg ou mais.`:`Você fez ${it.rmax} repetições em todas as séries. Suba para ${f1(kg+inc)} kg.`,kgAlt:avgRir!==null&&avgRir>=3?kg+inc*2:null};
    if(avgRir!==null&&avgRir>=3) return {kg:kg+inc,text:`Sobraram ~${f1(avgRir)} reps por série na última vez. Suba para ${f1(kg+inc)} kg.`};
    if(below>=2&&avgRir!==null&&avgRir<=.5){const k=roundKg(kg*.95,kg>=40?2.5:1);return {kg:k,text:`Você chegou à falha abaixo de ${it.rmin} repetições. Baixe para ${f1(k)} kg e volte a subir.`}}
    return {kg,text:`Mantenha ${f1(kg)} kg e tente 1 repetição a mais por série.`};
  }
  return {kg:0,text:'Tente 1 repetição a mais que da última vez.'};
}
function prMap(){ // para cada sessão, quais exercícios bateram recorde
  const best={},res={};
  for(const s of sess()){res[s.id]=[];for(const e of s.entries){const b=entryStats(e).best;if(best[e.ex]!==undefined&&b>best[e.ex]+1e-9)res[s.id].push(e.ex);best[e.ex]=Math.max(best[e.ex]||0,b)}}
  return res;
}
function analyze(){
  const now=Date.now(),list=sess();
  const exIds=[...new Set(list.flatMap(s=>s.entries.map(e=>e.ex)))];
  const prog=[],stag=[];let tracked=0;
  for(const id of exIds){
    const all=history(id);
    const h=all.filter(p=>now-new Date(p.date)<=90*DAY);
    const span=h.length?(new Date(h[h.length-1].date)-new Date(h[0].date))/DAY:0;
    if(h.length>=3&&span>=14){
      const a=h[0].best,b=Math.max(...h.slice(-2).map(p=>p.best));
      const va=h[0].vol,vb=(h[h.length-1].vol+h[h.length-2].vol)/2;
      const weeks=Math.max(2,Math.round(span/7)),u=unitOf(id);
      if(a>0) prog.push({id,pct:(b-a)/a*100,vpct:va>0?(vb-va)/va*100:null,weeks,n:h.length,a,b,u,kind:u==='kg'?'kg':'corpo'});
    }
    if(all.length>=4&&now-new Date(all[all.length-1].date)<30*DAY){
      tracked++;
      const last3=all.slice(-3),pb=Math.max(...all.slice(0,-3).map(p=>p.best));
      if(Math.max(...last3.map(p=>p.best))<=pb*1.005) stag.push({id,since:all.length-3});
    }
  }
  prog.sort((x,y)=>y.pct-x.pct);
  const wk={};for(const s of list)if(now-new Date(s.date)<7*DAY)for(const e of s.entries){const c=contrib(e.ex);for(const g in c)wk[g]=(wk[g]||0)+e.sets.length*c[g]}
  for(const g in wk)wk[g]=Math.round(wk[g]*10)/10;
  const n28=list.filter(s=>now-new Date(s.date)<28*DAY).length;
  const prs=prMap();let pr28=0;for(const s of list)if(now-new Date(s.date)<28*DAY)pr28+=prs[s.id].length;
  const needDeload=!deloadActive()&&tracked>=3&&(stag.length>=3||stag.length/tracked>=.4);
  return {prog,stag,wk,n28,perWeek:n28/4,pr28,tracked,needDeload};
}
function alternatives(exId,n=3){
  const e=exById(exId),inPlan=new Set(prof().routines.flatMap(r=>r.items.map(i=>i.ex)));
  return allEx().filter(x=>x.id!==exId&&x.g===e.g&&(x.t===e.t||(x.t!=='tempo'&&e.t!=='tempo'))&&!inPlan.has(x.id)).slice(0,n);
}
function insights(A){
  const out=[];
  if(A.needDeload)out.push({c:'var(--bad)',t:'Hora de uma semana leve',s:`${A.stag.length} de ${A.tracked} exercícios pararam de evoluir ao mesmo tempo. Isso costuma ser cansaço acumulado. Uma semana com metade das séries e 10% menos carga ajuda o corpo a se recuperar e voltar a progredir.`,act:'deloadOn',btn:'Ativar semana leve'});
  const kgList=A.prog.filter(p=>p.kind==='kg');
  if(kgList.length){const t=kgList[0];if(t.pct>0)out.push({c:'var(--ok)',t:`${exById(t.id).n} é o que mais está rendendo`,s:`Sua força estimada subiu ${f1(t.pct)}% em ${t.weeks} semanas. Mantenha esse exercício na ficha e continue subindo a carga aos poucos.`})}
  for(const s of A.stag.slice(0,A.needDeload?0:2))out.push({c:'var(--warn)',t:`${exById(s.id).n} parou de evoluir`,s:'Sem recorde nos últimos 3 treinos. Tente mudar a faixa de repetições (ex.: de 8–12 para 5–8) ou troque por uma variação.',swap:s.id});
  const low=MAIN_GROUPS.filter(g=>(A.wk[g]||0)>0&&(A.wk[g]||0)<10);
  const none=MAIN_GROUPS.filter(g=>!(A.wk[g]||0));
  if(A.n28&&low.length)out.push({c:'var(--warn)',t:`Pouco volume: ${low.map(g=>grp(g).n).join(', ')}`,s:'Para ganhar massa, a maioria das pessoas responde bem a 10–20 séries por músculo por semana. Séries de exercícios compostos já contam pela metade para os músculos auxiliares.'});
  if(A.n28&&none.length&&none.length<MAIN_GROUPS.length)out.push({c:'var(--slate)',t:`Não treinados nesta semana: ${none.map(g=>grp(g).n).join(', ')}`,s:'Se for intencional, tudo bem. Se não, inclua pelo menos um exercício para eles.'});
  const hi=MAIN_GROUPS.filter(g=>(A.wk[g]||0)>22);
  if(hi.length)out.push({c:'var(--bad)',t:`Volume alto: ${hi.map(g=>grp(g).n).join(', ')}`,s:'Mais de 22 séries na semana costuma atrapalhar a recuperação. Observe dores e queda de desempenho.'});
  const pe=A.wk.peito||0,co=A.wk.costas||0;
  if(pe>=6&&pe>co*1.5)out.push({c:'var(--warn)',t:'Mais peito do que costas',s:`Foram ${f1(pe)} séries de peito e ${f1(co)} de costas. Equilibrar ajuda na postura e na saúde do ombro.`});
  if(A.n28&&A.perWeek<2)out.push({c:'var(--warn)',t:'Frequência baixa',s:`Média de ${f1(A.perWeek)} treino por semana no último mês. Treinar cada músculo 2× por semana costuma dar mais resultado.`});
  else if(A.perWeek>=3)out.push({c:'var(--ok)',t:'Boa constância',s:`Média de ${f1(A.perWeek)} treinos por semana no último mês. Constância é o que mais pesa no resultado.`});
  return out;
}
function swapChips(exId){const alts=alternatives(exId);if(!alts.length)return '';return `<div class="chips"><span class="small muted" style="align-self:center">Trocar por:</span>${alts.map(a=>`<button class="chip ex-chip" data-act="swap" data-v="${exId}|${a.id}" type="button">${esc(a.n)}</button>`).join('')}</div>`}

/* ---------- modelos ---------- */
const it=(ex,sets,rmin,rmax,rest)=>({ex,sets,rmin,rmax,rest});
const TEMPLATES={
  abc:()=>[
    {id:uid(),name:'Treino A · Peito, ombro e tríceps',items:[it('supino-reto',4,6,10,120),it('supino-inclinado-halter',3,8,12,90),it('crossover',3,10,15,60),it('desenvolvimento-halter',3,8,12,90),it('elevacao-lateral',3,12,15,60),it('triceps-polia',3,10,15,60)]},
    {id:uid(),name:'Treino B · Costas e bíceps',items:[it('puxada-frente',4,8,12,90),it('remada-curvada',4,6,10,120),it('remada-unilateral',3,8,12,90),it('face-pull',3,12,15,60),it('rosca-direta',3,8,12,60),it('rosca-martelo',3,10,12,60)]},
    {id:uid(),name:'Treino C · Pernas',items:[it('agachamento',4,6,10,150),it('leg-press',3,10,12,120),it('cadeira-extensora',3,12,15,60),it('stiff',3,8,12,120),it('mesa-flexora',3,10,12,60),it('panturrilha-pe',4,12,15,60),it('prancha',3,30,60,60)]}
  ],
  ul:()=>[
    {id:uid(),name:'Superior',items:[it('supino-reto',4,6,10,120),it('remada-curvada',4,6,10,120),it('desenvolvimento-halter',3,8,12,90),it('puxada-frente',3,8,12,90),it('rosca-alternada',3,10,12,60),it('triceps-testa',3,10,12,60)]},
    {id:uid(),name:'Inferior',items:[it('agachamento',4,6,10,150),it('stiff',3,8,12,120),it('leg-press',3,10,12,120),it('mesa-flexora',3,10,12,60),it('elevacao-pelvica',3,8,12,90),it('panturrilha-sentado',4,12,15,60),it('abdominal-polia',3,10,15,60)]}
  ]
};
function makeDemo(){
  const routines=TEMPLATES.abc();
  let seed=11;const rnd=()=>(seed=seed*16807%2147483647)/2147483647;
  const base={'supino-reto':50,'supino-inclinado-halter':18,'crossover':15,'desenvolvimento-halter':14,'elevacao-lateral':8,'triceps-polia':20,'puxada-frente':45,'remada-curvada':40,'remada-unilateral':20,'face-pull':15,'rosca-direta':22,'rosca-martelo':12,'agachamento':60,'leg-press':140,'cadeira-extensora':35,'stiff':40,'mesa-flexora':30,'panturrilha-pe':50,'prancha':0};
  const rate={'supino-reto':.012,'agachamento':.02,'leg-press':.022,'remada-curvada':.012,'puxada-frente':.01,'stiff':.014,'rosca-direta':0,'desenvolvimento-halter':0,'elevacao-lateral':.005,'crossover':.006};
  const count={},sessions=[];let k=0;
  const today=new Date();today.setHours(18,30,0,0);
  for(let d=63;d>=1;d--){
    const day=new Date(today.getTime()-d*DAY);const wd=day.getDay();
    if(![1,3,5].includes(wd)||rnd()<.12) continue;
    const r=routines[k++%3];
    const entries=r.items.map(x=>{
      const c=count[x.ex]=(count[x.ex]||0)+1;
      if(x.ex==='prancha') return {ex:x.ex,sets:Array.from({length:x.sets},()=>({kg:0,reps:30+c*2}))};
      const raw=base[x.ex]*(1+(rate[x.ex]??.008)*c);const step=raw>=40?2.5:1;const kg=Math.round(raw/step)*step;
      return {ex:x.ex,sets:Array.from({length:x.sets},(_,i)=>({kg,reps:Math.max(x.rmin-1,x.rmax-i-(rnd()<.35?1:0)-(rate[x.ex]===0?1:0))}))};
    });
    sessions.push({id:uid(),date:day.toISOString(),dur:50+Math.round(rnd()*20),routineId:r.id,routineName:r.name,entries});
  }
  const bw=[];for(let w=9;w>=0;w--)bw.push({date:new Date(today.getTime()-w*7*DAY).toISOString(),kg:Math.round((78.4+(9-w)*.18+(rnd()-.5)*.6)*10)/10});
  const M0={pescoco:38.5,ombros:113,peito:101,cintura:87,quadril:98,braco:35.5,antebraco:29,coxa:57,panturrilha:38,punho:17.5,gordura:19};
  const M1={pescoco:39,ombros:116.5,peito:104,cintura:85,quadril:98.5,braco:37,antebraco:29.8,coxa:58.5,panturrilha:38.2,punho:17.5,gordura:17.5};
  const meas=[0,1,2,3].map(i=>{const m={date:new Date(today.getTime()-(63-i*21)*DAY).toISOString(),peso:bw[Math.min(9,i*3)].kg};for(const k in M0)m[k]=Math.round((M0[k]+(M1[k]-M0[k])*i/3)*10)/10;return m});
  return {profile:{routines,custom:[],videos:{},bw,body:{sexo:'m',altura:178},meas},sessions};
}

/* ---------- gráfico ---------- */
function niceStep(r){const p=Math.pow(10,Math.floor(Math.log10(r||1)));const n=r/p;return (n<=1?1:n<=2?2:n<=5?5:10)*p}
function lineChart(pts,unit){
  if(pts.length<2) return '<p class="muted small">Registre pelo menos 2 treinos para ver o gráfico.</p>';
  const W=340,H=170,L=34,R=14,T=18,B=22;
  const xs=pts.map(p=>+new Date(p.x)),ys=pts.map(p=>p.y);
  const x0=Math.min(...xs),x1=Math.max(...xs);
  let y0=Math.min(...ys),y1=Math.max(...ys);if(y1-y0<1e-6){y0-=1;y1+=1}
  const st=niceStep((y1-y0)/3);y0=Math.floor(y0/st)*st;y1=Math.ceil(y1/st)*st;
  const sx=x=>L+(x1===x0?.5:(x-x0)/(x1-x0))*(W-L-R),sy=y=>T+(1-(y-y0)/(y1-y0))*(H-T-B);
  let g='';for(let v=y0;v<=y1+st/2;v+=st){const y=sy(v).toFixed(1);g+=`<line class="gl" x1="${L}" x2="${W-R}" y1="${y}" y2="${y}"/><text class="ax" x="${L-6}" y="${+y+3}" text-anchor="end">${f1(v)}</text>`}
  const P=pts.map((p,i)=>[sx(xs[i]),sy(p.y)]);
  const d=P.map((q,i)=>(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)).join(' ');
  const area=d+` L${P[P.length-1][0].toFixed(1)} ${H-B} L${P[0][0].toFixed(1)} ${H-B} Z`;
  const last=P[P.length-1];
  const dots=P.length<=24?P.slice(0,-1).map(q=>`<circle class="pt" cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="2.6"/>`).join(''):'';
  const lx=Math.min(last[0],W-R-4);
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfico de evolução">${g}
    <path class="ar" d="${area}"/><path class="ln" d="${d}"/>${dots}
    <circle class="end" cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="4.5"/>
    <text class="lbl" x="${lx}" y="${Math.max(11,last[1]-9).toFixed(1)}" text-anchor="end">${f1(pts[pts.length-1].y)} ${unit}</text>
    <text class="ax" x="${L}" y="${H-5}">${dshort(pts[0].x)}</text><text class="ax" x="${W-R}" y="${H-5}" text-anchor="end">${dshort(pts[pts.length-1].x)}</text></svg>`;
}

/* ---------- render principal ---------- */
function renderStatus(){
  const b=$('#status');if(!b)return;
  if(S.demo){b.textContent='Exemplo · sair';b.className='status demo';b.dataset.act='exitDemo';return}
  const st=G.state,M={
    nocfg:['Salvo no celular','',''],
    off:['Entrar com Google','act','google'],
    tap:[G.dirty?'Salvar no Drive':'Sincronizar','act','google'],
    sync:['Sincronizando…','',''],
    ok:['Salvo no Drive','',''],
    offline:['Sem internet · salvo no celular','',''],
    error:['Erro no Drive · tentar','err','google']}[st]||['Salvo no celular','',''];
  b.textContent=M[0];b.className='status '+M[1];
  if(M[2])b.dataset.act=M[2];else delete b.dataset.act;
}
function render(){
  renderStatus();
  document.querySelectorAll('.nav button').forEach(b=>b.setAttribute('aria-current',b.dataset.v===S.tab?'page':'false'));
  const v=$('#view');
  v.innerHTML=S.tab==='ex'?viewEx():S.tab==='evo'?viewEvo():S.tab==='ana'?viewAna():S.tab==='corpo'?viewCorpo():viewFicha();
  if(S.tab==='ex') renderExList();
  if(S.tab==='corpo') hydratePhotos();
}
function groupChips(items){const gs=[...new Set(items.map(i=>exById(i.ex).g))];return gs.map(g=>`<span class="chip"><span class="dot" style="--c:${grp(g).c}"></span>${grp(g).n}</span>`).join('')}

function viewFicha(){
  const p=prof(),ss=sess();
  let h='';
  if(S.draft) h+=`<div class="banner"><div><b>Treino em andamento</b><div class="small">${esc(S.draft.routineName)}</div></div><button class="btn sm" data-act="resume" type="button">Continuar</button></div>`;
  if(!p.routines.length){
    h+=`<section class="card empty"><span class="eyebrow">Monte sua ficha</span><h2>Comece com um modelo ou do zero</h2>
      <p class="muted">Você pode editar tudo depois: exercícios, séries, repetições e descanso.</p>
      <div class="row"><button class="btn primary" data-act="tpl" data-v="abc" type="button">Modelo ABC</button><button class="btn" data-act="tpl" data-v="ul" type="button">Superior / Inferior</button></div>
      <button class="btn ghost" data-act="newRoutine" type="button">Criar do zero</button></section>`;
    if(CLIENT_ID&&!G.ids.email&&!S.demo) h=`<section class="card"><b>Já usa o app em outro aparelho?</b><p class="muted small">Entre com o Google para trazer seus dados do Drive.</p><button class="gbtn" data-act="google" type="button">${GLOGO} Entrar com Google</button></section>`+h;
    if(!ss.length&&!S.demo) h+=`<section class="card"><b>Quer ver como fica com histórico?</b><p class="muted small">Carregue 9 semanas de treinos de exemplo para conhecer os gráficos e a análise. Nada disso é salvo.</p><button class="btn" data-act="demo" type="button">Ver com dados de exemplo</button></section>`;
  }else{
    h+=`<section><div class="sec-head"><div><span class="eyebrow">Sua ficha</span><h2>Treinos</h2></div><button class="btn sm" data-act="newRoutine" type="button">${ICON.plus} Novo</button></div>`;
    for(const r of p.routines){
      const last=[...ss].reverse().find(s=>s.routineId===r.id);
      h+=`<article class="card rcard"><div><h3>${esc(r.name)}</h3><div class="meta small muted"><span>${r.items.length} exercício${r.items.length===1?'':'s'} · ~${estMin(r)} min</span><span>${last?'Último: '+dshort(last.date):'Ainda não feito'}</span></div></div>
        <div class="chips">${groupChips(r.items)}</div>
        <div class="row"><button class="btn primary" data-act="start" data-v="${r.id}" type="button">${ICON.play} Começar</button><button class="btn ghost" data-act="editRoutine" data-v="${r.id}" type="button">Editar</button></div></article>`;
    }
    h+=`<button class="btn ghost" data-act="start" data-v="" type="button">Treino livre (sem ficha)</button></section>`;
  }
  if(ss.length){
    const prs=prMap();
    h+=`<section><div><span class="eyebrow">Histórico</span><h2>Últimos treinos</h2></div><div class="list">`;
    for(const s of [...ss].reverse().slice(0,6)){
      const sets=s.entries.reduce((a,e)=>a+e.sets.length,0);
      h+=`<button class="li" data-act="openSession" data-v="${s.id}" type="button"><div class="grow"><div class="t">${esc(s.routineName)} ${prs[s.id].length?'<span class="pr">PR</span>':''}</div><div class="s num">${dshort(s.date)} · ${s.entries.length} exercícios · ${sets} séries${s.dur?' · '+s.dur+' min':''}</div></div>${ICON.chev}</button>`;
    }
    h+='</div></section>';
  }
  return h;
}

function viewEx(){
  const gs=Object.keys(GROUPS).filter(g=>g!=='outros'||prof().custom.some(c=>c.g==='outros'));
  return `<section><div class="sec-head"><div><span class="eyebrow">${allEx().length} exercícios</span><h2>Como executar</h2></div><button class="btn sm" data-act="customEx" type="button">${ICON.plus} Criar</button></div>
    <input id="exSearch" class="search" type="search" placeholder="Buscar exercício" value="${esc(S.exQ)}" aria-label="Buscar exercício">
    <div class="hscroll" id="exGroups"><button class="fchip" data-act="exG" data-v="" aria-pressed="${!S.exG}" type="button">Todos</button>${gs.map(g=>`<button class="fchip" data-act="exG" data-v="${g}" aria-pressed="${S.exG===g}" type="button"><span class="dot" style="--c:${grp(g).c}"></span>${grp(g).n}</button>`).join('')}</div>
    <div class="list" id="exList"></div></section>`;
}
function renderExList(){
  const q=S.exQ.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const items=allEx().filter(e=>(!S.exG||e.g===S.exG)&&(!q||e.n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').includes(q)));
  const el=$('#exList');if(!el) return;
  el.innerHTML=items.length?items.map(e=>{const h=history(e.id);return `<button class="li" data-act="exDetail" data-v="${e.id}" type="button"><span class="dot" style="--c:${grp(e.g).c}"></span><div class="grow"><div class="t">${esc(e.n)}</div><div class="s">${grp(e.g).n}${h.length?' · treinado '+h.length+'×':''}</div></div>${ICON.chev}</button>`}).join(''):'<div class="li muted">Nenhum exercício encontrado.</div>';
}

function viewEvo(){
  const ss=sess();
  const ids=[];for(let i=ss.length-1;i>=0;i--)for(const e of ss[i].entries)if(!ids.includes(e.ex))ids.push(e.ex);
  let h='';
  if(!ids.length){
    h+=`<section class="card empty"><span class="eyebrow">Evolução</span><h2>Seus gráficos aparecem aqui</h2><p class="muted">Depois de registrar treinos, você vê a carga e a força estimada de cada exercício subindo ao longo das semanas.</p>${S.demo?'':'<button class="btn" data-act="demo" type="button">Ver com dados de exemplo</button>'}</section>`;
  }else{
    if(!S.evoEx||!ids.includes(S.evoEx)) S.evoEx=ids[0];
    const id=S.evoEx,hh=history(id),u=unitOf(id),e=exById(id);
    const kgMode=u==='kg';
    const first=hh[0].best,lastV=hh[hh.length-1].best,best=Math.max(...hh.map(x=>x.best));
    const pct=first>0?(lastV-first)/first*100:0;
    h+=`<section><div><span class="eyebrow">Evolução por exercício</span><h2>Carga e força</h2></div>
      <select id="evoSel" class="inp" aria-label="Exercício">${ids.map(x=>`<option value="${x}" ${x===id?'selected':''}>${esc(exById(x).n)}</option>`).join('')}</select>
      <div class="tiles"><div class="tile"><span>${kgMode?'1RM estimado':'Melhor série'}</span><b>${f1(lastV)}</b><span>${u} no último</span></div>
      <div class="tile"><span>Recorde</span><b>${f1(best)}</b><span>${u}</span></div>
      <div class="tile"><span>Desde o início</span><b class="${pct>0?'up':pct<0?'down':''}">${pct>0?'+':''}${f1(pct)}%</b><span>${hh.length} treinos</span></div></div>
      <div class="card"><div class="sec-head"><b>${kgMode?'Força estimada (1RM)':e.t==='tempo'?'Melhor tempo':'Máximo de repetições'}</b><span class="dot" style="--c:${grp(e.g).c}"></span></div>${lineChart(hh.map(x=>({x:x.date,y:x.best})),u)}
      ${kgMode?`<p class="muted small">1RM estimado é a carga que você levantaria uma vez, calculada pela fórmula de Epley a partir da sua melhor série (carga × repetições).</p>`:''}</div>
      ${kgMode?`<div class="card"><b>Maior carga usada</b>${lineChart(hh.map(x=>({x:x.date,y:x.maxKg})),'kg')}</div>
      <div class="card"><b>Volume por treino (carga × repetições)</b>${lineChart(hh.map(x=>({x:x.date,y:x.vol})),'kg')}
        <p class="muted small">Acima de 12 repetições o 1RM estimado fica menos preciso. Se você mudou a faixa de repetições, o volume mostra melhor se o trabalho total cresceu.</p></div>`:''}
      <div class="card"><b>Registro</b><table class="hist">${hh.slice().reverse().slice(0,10).map(x=>`<tr><td>${dshort(x.date)}</td><td>${x.sets.map(s=>(s.kg>0?`${f1(s.kg)}×${s.reps}`:`${s.reps}${e.t==='tempo'?'s':''}`)+(s.rir!=null?`<span class="muted small"> (sobr. ${s.rir})</span>`:'')).join(' · ')}</td></tr>`).join('')}</table></div></section>`;
  }
  const bw=[...prof().bw].sort((a,b)=>new Date(a.date)-new Date(b.date));
  h+=`<section><div class="sec-head"><div><span class="eyebrow">Corpo</span><h2>Peso corporal</h2></div><button class="btn sm" data-act="addBW" type="button">${ICON.plus} Registrar</button></div>
    <div class="card">${bw.length?`<div class="sec-head"><b class="num">${f1(bw[bw.length-1].kg)} kg</b><span class="muted small">${bw.length>1?((bw[bw.length-1].kg-bw[0].kg>=0?'+':'')+f1(bw[bw.length-1].kg-bw[0].kg)+' kg desde '+dshort(bw[0].date)):'primeiro registro'}</span></div>${lineChart(bw.map(x=>({x:x.date,y:x.kg})),'kg')}`:'<p class="muted">Registre seu peso uma vez por semana, de manhã, para acompanhar junto com a força.</p>'}</div></section>`;
  return h;
}

function viewAna(){
  const ss=sess();
  if(!ss.length) return `<section class="card empty"><span class="eyebrow">Análise</span><h2>O que mais funciona pra você</h2><p class="muted">Com 3 ou mais treinos de um exercício, o app compara sua força estimada ao longo do tempo e mostra quais exercícios trouxeram mais resultado, quais estagnaram e se o volume por músculo está equilibrado.</p>${S.demo?'':'<button class="btn" data-act="demo" type="button">Ver com dados de exemplo</button>'}</section>`;
  const A=analyze(),ins=insights(A);
  // calendário de 12 semanas
  const days=new Set(ss.map(s=>dayKey(s.date)));
  const today=new Date();today.setHours(0,0,0,0);
  const startW=new Date(today);startW.setDate(today.getDate()-((today.getDay()+6)%7)-77);
  let heat='';for(let w=0;w<12;w++){heat+='<div class="col">';for(let d=0;d<7;d++){const dt=new Date(startW.getTime()+(w*7+d)*DAY);heat+=`<i class="${dt>today?'fut':days.has(dayKey(dt))?'on':''}"></i>`}heat+='</div>'}
  let h=`<section><div><span class="eyebrow">Últimos 28 dias</span><h2>Resumo</h2></div>
    <div class="tiles"><div class="tile"><span>Treinos</span><b>${A.n28}</b><span>no período</span></div><div class="tile"><span>Média</span><b>${f1(A.perWeek)}</b><span>por semana</span></div><div class="tile"><span>Recordes</span><b>${A.pr28}</b><span>batidos</span></div></div>
    <div class="card"><div class="sec-head"><b>Dias treinados</b><span class="muted small">12 semanas · seg a dom</span></div><div class="heat" aria-label="Calendário de treinos">${heat}</div></div></section>`;
  if(deloadActive()) h=`<div class="banner" style="background:var(--ok)"><div><b>Semana leve ativa</b><div class="small">Até ${dshort(prof().deload)}. Metade das séries e ~10% menos carga.</div></div><button class="btn sm" data-act="deloadOff" type="button">Encerrar</button></div>`+h;
  const rankRows=(list,isKg)=>list.slice(0,6).map((p,i)=>`<div class="rank"><span class="pos">${i+1}</span><div style="min-width:0"><div style="font-weight:600">${esc(exById(p.id).n)}</div><div class="small muted num">${f1(p.a)} → ${f1(p.b)} ${isKg?'kg (1RM est.)':p.u} · ${p.n} treinos em ${p.weeks} sem.${isKg&&p.vpct!=null?` · volume ${p.vpct>=0?'+':''}${f1(p.vpct)}%`:''}</div></div><span class="pct ${p.pct>0.05?'up':p.pct<-0.05?'down':'muted'}">${p.pct>0?'+':''}${f1(p.pct)}%</span></div>`).join('');
  const kgL=A.prog.filter(p=>p.kind==='kg'),bodyL=A.prog.filter(p=>p.kind!=='kg');
  h+=`<section><div><span class="eyebrow">Ranking · últimos 90 dias</span><h2>Exercícios que mais renderam</h2></div><div class="card">`;
  if(kgL.length){h+=`<b>Com carga</b>${rankRows(kgL,true)}<p class="muted small">Ganho de força estimada (1RM), comparando o primeiro treino do período com a média dos dois mais recentes. Só entram exercícios com 3 treinos ou mais em pelo menos 2 semanas.</p>`}
  else h+='<p class="muted">Faça pelo menos 3 treinos de um mesmo exercício, em 2 semanas ou mais, para ele entrar no ranking.</p>';
  h+='</div>';
  if(bodyL.length) h+=`<div class="card"><b>Peso do corpo e tempo</b>${rankRows(bodyL,false)}<p class="muted small">Separado porque ganhar repetições ou segundos é mais fácil do que ganhar carga. Comparar os dois juntos distorce o ranking.</p></div>`;
  h+='</section>';
  if(A.stag.length) h+=`<section><div><span class="eyebrow">Sem recorde há 3 treinos</span><h2>Estagnados</h2></div>${A.stag.length>4?`<p class="muted small">${A.stag.length} exercícios estagnados. Mostrando os 4 primeiros.</p>`:''}${A.stag.slice(0,4).map(s=>`<div class="card" style="gap:8px"><b>${esc(exById(s.id).n)}</b><span class="muted small">Mude a faixa de repetições ou troque por uma variação do mesmo músculo. A troca vale para todos os treinos da ficha que usam este exercício.</span>${swapChips(s.id)}</div>`).join('')}</section>`;
  const maxSets=Math.max(24,...Object.values(A.wk));
  h+=`<section><div><span class="eyebrow">Últimos 7 dias</span><h2>Séries por músculo</h2></div><div class="card"><div class="bars">${MAIN_GROUPS.concat(['panturrilha','abdomen']).map(g=>{const v=A.wk[g]||0;const main=MAIN_GROUPS.includes(g);return `<div class="bar"><span class="name">${grp(g).n}</span><div class="track">${main?`<span class="band" style="left:${10/maxSets*100}%;width:${10/maxSets*100}%"></span>`:''}<span class="fill" style="--c:${main&&v<10?'var(--warn)':main&&v>22?'var(--bad)':grp(g).c};width:${Math.min(100,v/maxSets*100)}%"></span></div><span class="v">${f1(v)}</span></div>`}).join('')}</div>
    <p class="muted small">A faixa tracejada marca 10–20 séries semanais, o volume que costuma dar melhor resultado para hipertrofia. Exercícios compostos também contam para os músculos auxiliares: uma série de supino vale 1 para peito e 0,5 para tríceps e ombro.</p></div></section>`;
  if(ins.length) h+=`<section><div><span class="eyebrow">Para a próxima semana</span><h2>Sugestões</h2></div><div class="card">${ins.map(x=>`<div class="insight"><span class="mark" style="--c:${x.c}"></span><div class="grow"><b>${esc(x.t)}</b><span class="muted small">${esc(x.s)}</span>${x.act?`<button class="btn sm primary" style="align-self:flex-start;margin-top:6px" data-act="${x.act}" type="button">${x.btn}</button>`:''}${x.swap?swapChips(x.swap):''}</div></div>`).join('')}</div></section>`;
  return h;
}

/* ---------- corpo e proporções ---------- */
const MEAS=[
  ['pescoco','Pescoço','Na parte mais fina, logo abaixo do pomo de adão'],
  ['ombros','Ombros','Volta completa na parte mais larga dos ombros, braços relaxados'],
  ['peito','Peito','Na linha dos mamilos, depois de soltar o ar'],
  ['cintura','Cintura','Na altura do umbigo, abdômen relaxado'],
  ['quadril','Quadril','Na parte mais larga dos glúteos'],
  ['braco','Braço','Contraído, na parte mais grossa'],
  ['antebraco','Antebraço','Na parte mais grossa, mão fechada'],
  ['coxa','Coxa','Logo abaixo do glúteo, em pé'],
  ['panturrilha','Panturrilha','Na parte mais grossa, em pé'],
  ['punho','Punho','Logo acima do ossinho do punho. Não muda com treino, serve para estimar seu potencial'],
  ['gordura','% de gordura','Opcional. Bioimpedância ou adipômetro']
];
const REGION={
  ombros:{n:'Ombros e costas',groups:['ombros','costas'],rec:['elevacao-lateral','desenvolvimento-halter','elevacao-lateral-polia','puxada-aberta','remada-pronada']},
  peito:{n:'Peito',groups:['peito'],rec:['supino-inclinado-halter','supino-reto','crossover','peck-deck']},
  braco:{n:'Braços',groups:['biceps','triceps'],rec:['rosca-inclinada','rosca-direta','triceps-polia-alta','supino-fechado','rosca-martelo']},
  antebraco:{n:'Antebraços',groups:['antebraco'],rec:['rosca-martelo','rosca-inversa','farmer-walk']},
  coxa:{n:'Coxas',groups:['quadriceps','posterior'],rec:['agachamento','leg-press','bulgaro','terra-romeno','cadeira-flexora']},
  panturrilha:{n:'Panturrilhas',groups:['panturrilha'],rec:['panturrilha-pe','panturrilha-sentado','panturrilha-leg']},
  quadril:{n:'Glúteos',groups:['gluteos'],rec:['elevacao-pelvica','bulgaro','abdutora','gluteo-polia']},
  pescoco:{n:'Pescoço e trapézio',groups:['trapezio'],rec:['encolhimento','remada-alta','face-pull']},
  cintura:{n:'Cintura',groups:['abdomen','cardio'],rec:['esteira','bike','pallof','prancha']}
};
const rf=v=>v.toFixed(2).replace('.',',');
const setTarget=r=>r==='panturrilha'||r==='antebraco'||r==='pescoco'?'8–16':'12–20';
function lastMeas(){const ms=[...prof().meas].sort((a,b)=>new Date(a.date)-new Date(b.date));return {ms,m:ms[ms.length-1]||null}}
function bodyChecks(m,body){
  const out=[],fem=body.sexo==='f',has=(...k)=>k.every(x=>num(m[x])>0),pct=(v,t)=>Math.round(v/t*100);
  if(has('ombros','cintura')){const t=fem?1.45:1.618,v=m.ombros/m.cintura;
    out.push({key:'oc',label:'Ombros ÷ cintura',v,t,ok:v>=t*.96,weak:v<t*.96?['ombros']:[],
      ideal:fem?'1,45 (silhueta em V suave)':'1,618 (proporção áurea)',
      msg:v<t*.96?`Para chegar a ${rf(t)}, faltam ${f1(t*m.cintura-m.ombros)} cm de ombro ou ${f1(m.cintura-m.ombros/t)} cm a menos de cintura.`:`Ótimo: ombros ${pct(v,t)}% da meta. Silhueta em V bem marcada.`})}
  if(!fem&&has('peito','cintura')){const t=1.4,v=m.peito/m.cintura;
    out.push({key:'pc',label:'Peito ÷ cintura',v,t,ok:v>=t*.96,weak:v<t*.96?['peito']:[],ideal:'1,4',
      msg:v<t*.96?`Faltam ${f1(t*m.cintura-m.peito)} cm de peito para a proporção clássica.`:'Peito bem desenvolvido em relação à cintura.'})}
  if(fem&&has('cintura','quadril')){const t=.72,v=m.cintura/m.quadril;
    out.push({key:'cq',label:'Cintura ÷ quadril',v,t,ok:v<=.75,weak:v>.75?['quadril']:[],ideal:'0,70 a 0,75',
      msg:v>.75?`Para chegar a 0,72, o quadril precisaria de mais ${f1(m.cintura/t-m.quadril)} cm. Glúteos e redução de cintura ajudam.`:'Ótima relação entre cintura e quadril.'})}
  if(has('braco','panturrilha')){const v=m.braco/m.panturrilha;
    const w=v<.96?['braco']:v>1.04?['panturrilha']:[];
    out.push({key:'bp',label:'Braço ÷ panturrilha',v,t:1,ok:!w.length,weak:w,ideal:'1,0 (iguais)',
      msg:v<.96?`Braço ${f1(m.panturrilha-m.braco)} cm menor que a panturrilha. Na proporção clássica eles têm a mesma medida.`:v>1.04?`Panturrilha ${f1(m.braco-m.panturrilha)} cm menor que o braço. Na proporção clássica eles têm a mesma medida.`:'Braço e panturrilha equilibrados.'})}
  if(has('coxa','braco')){const t=fem?1.75:1.5,v=m.coxa/m.braco;
    const w=v<t*.95?['coxa']:v>t*1.12?['braco']:[];
    out.push({key:'cb',label:'Coxa ÷ braço',v,t,ok:!w.length,weak:w,ideal:rf(t),
      msg:v<t*.95?`Pernas atrás dos braços: faltam ${f1(t*m.braco-m.coxa)} cm de coxa.`:v>t*1.12?`Braços atrás das pernas: faltam ${f1(m.coxa/t-m.braco)} cm de braço para equilibrar.`:'Pernas e braços equilibrados.'})}
  if(has('braco','punho')){const t=fem?2.2:2.52,v=m.braco/m.punho,p=pct(v,t);
    out.push({key:'pot',label:'Braço ÷ punho',v,t,ok:p>=90,weak:p<85?['braco']:[],ideal:rf(t)+' (potencial natural)',
      msg:`Seu braço está em ${p}% do potencial estimado para o seu punho (cerca de ${f1(t*m.punho)} cm).`})}
  if(num(m.cintura)>0&&num(body.altura)>0){const v=m.cintura/body.altura;
    out.push({key:'ca',label:'Cintura ÷ altura',v,t:.5,ok:v<.5,high:v>=.5,weak:[],ideal:'abaixo de 0,50',
      msg:v<.5?'Cintura em faixa saudável para a sua altura.':v<.55?`Um pouco acima do ideal. Reduzir ${f1(m.cintura-body.altura*.5)} cm de cintura traz a relação para 0,50.`:`Acima da faixa saudável. Reduzir ${f1(m.cintura-body.altura*.5)} cm de cintura traz a relação para 0,50. Alimentação e cardio pesam mais aqui do que exercício localizado.`})}
  return out;
}
function bodySVG(m,checks){
  const st={};for(const k of Object.keys(REGION))st[k]=num(m[k])>0?'ok':'na';
  for(const c of checks)for(const w of c.weak)st[w]='low';
  const ca=checks.find(c=>c.key==='ca');if(ca&&ca.high)st.cintura='high';
  const r=(k,el)=>`<g class="rg ${st[k]}"><title>${REGION[k].n}</title>${el}</g>`;
  return `<svg class="body-svg" viewBox="0 0 200 340" role="img" aria-label="Mapa do corpo com pontos fortes e pontos a desenvolver">
    <circle class="head" cx="100" cy="24" r="17"/>
    ${r('pescoco','<rect x="91" y="40" width="18" height="13" rx="4"/>')}
    ${r('ombros','<ellipse cx="63" cy="66" rx="17" ry="13"/><ellipse cx="137" cy="66" rx="17" ry="13"/>')}
    ${r('peito','<rect x="72" y="55" width="56" height="40" rx="14"/>')}
    ${r('cintura','<rect x="76" y="97" width="48" height="44" rx="10"/>')}
    ${r('quadril','<rect x="72" y="143" width="56" height="28" rx="12"/>')}
    ${r('braco','<rect x="45" y="78" width="19" height="50" rx="9"/><rect x="136" y="78" width="19" height="50" rx="9"/>')}
    ${r('antebraco','<rect x="39" y="131" width="17" height="48" rx="8"/><rect x="144" y="131" width="17" height="48" rx="8"/>')}
    ${r('coxa','<rect x="74" y="173" width="25" height="82" rx="12"/><rect x="101" y="173" width="25" height="82" rx="12"/>')}
    ${r('panturrilha','<rect x="76" y="260" width="21" height="68" rx="10"/><rect x="103" y="260" width="21" height="68" rx="10"/>')}
  </svg>`;
}
function viewCorpo(){
  const body=prof().body||{},{ms,m}=lastMeas();
  if(!m) return `<section class="card empty"><span class="eyebrow">Corpo</span><h2>Medidas e proporções</h2>
    <p class="muted">Registre suas medidas com uma fita métrica. O app compara as proporções do seu corpo com referências clássicas (como a relação ombro ÷ cintura), mostra quais partes estão atrás e cruza isso com o volume que você treina de cada músculo.</p>
    <button class="btn primary" data-act="addMeas" type="button">${ICON.plus} Registrar medidas</button>${S.demo?'':'<button class="btn ghost" data-act="demo" type="button">Ver com dados de exemplo</button>'}</section>`;
  const checks=bodyChecks(m,body),A=analyze();
  const weakRegions=[...new Set(checks.flatMap(c=>c.weak))];
  const ca=checks.find(c=>c.key==='ca');if(ca&&ca.high)weakRegions.push('cintura');
  const strong=checks.filter(c=>c.ok);
  const imc=num(body.altura)>0&&num(m.peso)>0?m.peso/Math.pow(body.altura/100,2):0;
  let h=`<section><div class="sec-head"><div><span class="eyebrow">Medidas de ${dshort(m.date)}</span><h2>Seu corpo</h2></div><button class="btn sm" data-act="addMeas" type="button">${ICON.plus} Medir</button></div>
    <div class="card body-card"><div class="body-fig">${bodySVG(m,checks)}</div>
      <div class="body-side"><div class="legend"><span><i class="lg ok"></i>Proporcional</span><span><i class="lg low"></i>Desenvolver</span><span><i class="lg high"></i>Reduzir</span><span><i class="lg na"></i>Sem medida</span></div>
      <div class="kv">${num(m.peso)?`<div><span>Peso</span><b>${f1(m.peso)} kg</b></div>`:''}${imc?`<div><span>IMC</span><b>${f1(imc)}</b></div>`:''}${num(m.gordura)?`<div><span>Gordura</span><b>${f1(m.gordura)}%</b></div>`:''}${num(m.ombros)&&num(m.cintura)?`<div><span>Ombro ÷ cintura</span><b>${(m.ombros/m.cintura).toFixed(2).replace('.',',')}</b></div>`:''}</div></div></div>
    ${imc?`<p class="muted small">O IMC não separa músculo de gordura. Para quem treina, a relação cintura ÷ altura e o % de gordura dizem mais.</p>`:''}</section>`;
  if(checks.length) h+=`<section><div><span class="eyebrow">Comparado com referências clássicas</span><h2>Proporções</h2></div><div class="card">${checks.map(c=>{
      const pos=Math.max(0,Math.min(100,c.v/(c.t*1.3)*100)),tp=Math.min(100,1/1.3*100);
      return `<div class="prop"><div class="sec-head"><b>${c.label}</b><span class="pv ${c.ok?'up':c.high?'down':'warnc'}">${c.v.toFixed(2).replace('.',',')}</span></div>
        <div class="ptrack"><i class="pfill ${c.ok?'ok':c.high?'high':'low'}" style="width:${pos}%"></i><i class="pmark" style="left:${tp}%"></i></div>
        <span class="small muted">Meta ${c.ideal}. ${esc(c.msg)}</span></div>`}).join('')}</div>
      <p class="muted small">Referências da estética clássica do fisiculturismo (proporção áurea, medidas de Steve Reeves). Servem como guia, não como regra: genética e objetivo pessoal contam.</p></section>`;
  if(weakRegions.length){
    h+=`<section><div><span class="eyebrow">Proporção × treino</span><h2>Onde focar</h2></div>`;
    for(const k of weakRegions){
      const R=REGION[k],sets=R.groups.reduce((a,g)=>a+(A.wk[g]||0),0);
      const mine=A.prog.filter(p=>R.groups.includes(exById(p.id).g)&&p.pct>0).slice(0,2);
      const recs=[...new Set(mine.map(p=>p.id).concat(R.rec))].slice(0,4);
      const isCut=k==='cintura';
      const note=isCut?`Na última semana: ${f1(A.wk.cardio||0)} séries de cardio e ${f1(A.wk.abdomen||0)} de abdômen. Para reduzir a cintura, o que mais funciona é déficit calórico, cardio de 150 min ou mais por semana e treino de força pesado.`
        :sets===0?`Você não treinou ${R.n.toLowerCase()} na última semana. Inclua ${setTarget(k)} séries semanais.`
        :sets<10?`Você fez só ${f1(sets)} séries de ${R.n.toLowerCase()} na última semana. Para recuperar a proporção, suba para ${setTarget(k)}.`
        :`Você já faz ${f1(sets)} séries semanais de ${R.n.toLowerCase()}. Mantenha o volume e foque em subir a carga nos exercícios abaixo.`;
      h+=`<div class="card"><div class="insight"><span class="mark" style="--c:${isCut?'var(--bad)':'var(--warn)'}"></span><div class="grow"><b>${R.n}</b><span class="muted small">${esc(note)}</span></div></div>
        <div class="chips">${recs.map(id=>{const p=A.prog.find(x=>x.id===id);return `<button class="chip ex-chip" data-act="exDetail" data-v="${id}" type="button"><span class="dot" style="--c:${grp(exById(id).g).c}"></span>${esc(exById(id).n)}${p&&p.pct>0?` <span class="up">+${f1(p.pct)}%</span>`:''}</button>`}).join('')}</div>
        ${mine.length?`<span class="small muted">Os marcados com % são os que mais deram resultado para você nesse grupo.</span>`:''}</div>`;
    }
    h+='</section>';
  }
  if(strong.length) h+=`<section><div><span class="eyebrow">Pontos fortes</span><h2>Está proporcional</h2></div><div class="card">${strong.map(c=>`<div class="insight"><span class="mark" style="--c:var(--ok)"></span><div class="grow"><b>${c.label}</b><span class="muted small">${esc(c.msg)}</span></div></div>`).join('')}</div></section>`;
  if(ms.length>1){
    const first=ms[0];
    const keys=MEAS.filter(([k])=>k!=='punho'&&num(first[k])>0&&num(m[k])>0);
    if(!S.measKey||!keys.some(([k])=>k===S.measKey))S.measKey=(keys.find(([k])=>k==='braco')||keys[0]||['peso'])[0];
    h+=`<section><div><span class="eyebrow">Desde ${dshort(first.date)}</span><h2>Mudanças</h2></div>
      <div class="card"><table class="hist"><tbody>${keys.map(([k,l])=>{const d=m[k]-first[k],good=(k==='cintura'||k==='gordura')?d<0:d>0;return `<tr><td>${l}</td><td class="num">${f1(first[k])} → ${f1(m[k])}${k==='gordura'?'%':' cm'} <b class="${Math.abs(d)<.05?'muted':good?'up':'down'}">${d>0?'+':''}${f1(d)}</b></td></tr>`}).join('')}</tbody></table></div>
      <div class="card"><select id="measSel" class="inp" aria-label="Medida">${keys.map(([k,l])=>`<option value="${k}" ${k===S.measKey?'selected':''}>${l}</option>`).join('')}</select>
        ${lineChart(ms.filter(x=>num(x[S.measKey])>0).map(x=>({x:x.date,y:x[S.measKey]})),S.measKey==='gordura'?'%':'cm')}</div></section>`;
  }
  h+=photosHTML();
  h+=`<p class="muted small">Dica: meça sempre no mesmo horário, de manhã e em jejum, a cada 2 a 4 semanas.</p>`;
  return h;
}
function sheetMeas(){
  const body=prof().body||{},{m}=lastMeas(),bw=[...prof().bw].sort((a,b)=>new Date(a.date)-new Date(b.date)).pop();
  const peso=m&&num(m.peso)?m.peso:bw?bw.kg:'';
  openSheet(sheetHead('Corpo','Registrar medidas')+
    `<div class="row"><div class="field" style="flex:1"><label for="mSexo">Referência</label><select id="mSexo" class="inp"><option value="m" ${body.sexo!=='f'?'selected':''}>Masculina</option><option value="f" ${body.sexo==='f'?'selected':''}>Feminina</option></select></div>
     <div class="field" style="flex:1"><label for="mAltura">Altura (cm)</label><input id="mAltura" class="inp" inputmode="decimal" value="${body.altura?f1(body.altura):''}"></div>
     <div class="field" style="flex:1"><label for="m_peso">Peso (kg)</label><input id="m_peso" class="inp" inputmode="decimal" value="${peso?f1(peso):''}"></div></div>
    <p class="muted small">Medidas em centímetros, com a fita rente à pele sem apertar. Os campos vêm com a última medida; mude só o que mediu de novo.</p>
    ${MEAS.map(([k,l,tip])=>`<div class="field"><label for="m_${k}">${l}${k==='gordura'?'':' (cm)'}</label><input id="m_${k}" class="inp" inputmode="decimal" value="${m&&num(m[k])?f1(m[k]):''}"><span class="small muted">${tip}</span></div>`).join('')}
    <button class="btn primary block" data-act="saveMeas" type="button">Salvar medidas</button>`);
}

/* ---------- fotos de progresso (pasta "Ficha de Treino/Fotos" no Drive) ---------- */
const POSES={frente:'Frente',lado:'Lado',costas:'Costas'};
const PHOTO_URLS={};
async function photoBlob(id){
  try{const c=await caches.open('ficha-fotos');const hit=await c.match('/foto/'+id);if(hit)return await hit.blob()}catch(e){}
  if(!tokenOk())return null;
  try{const r=await gfetch(`${DRIVE}/${id}?alt=media`);const b=await r.blob();try{(await caches.open('ficha-fotos')).put('/foto/'+id,new Response(b))}catch(e){}return b}catch(e){return null}
}
async function hydratePhotos(){
  for(const img of document.querySelectorAll('img[data-photo]')){
    const id=img.dataset.photo;
    if(!PHOTO_URLS[id]){const b=await photoBlob(id);if(b)PHOTO_URLS[id]=URL.createObjectURL(b)}
    if(PHOTO_URLS[id]&&img.src!==PHOTO_URLS[id]){img.src=PHOTO_URLS[id];img.classList.remove('nophoto')}
  }
}
const photoImg=(id,alt,extra='')=>`<img data-photo="${id}" class="nophoto" alt="${esc(alt)}" ${extra} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">`;
function photosHTML(){
  if(S.demo) return `<section><div><span class="eyebrow">Fotos de progresso</span><h2>Antes e depois</h2></div><div class="card"><p class="muted">Fotos não fazem parte do modo exemplo. Saia do exemplo para adicionar as suas.</p></div></section>`;
  const ph=[...prof().photos].sort((a,b)=>new Date(b.date)-new Date(a.date));
  let h=`<section><div><span class="eyebrow">Fotos de progresso</span><h2>Antes e depois</h2></div><div class="card">`;
  if(!CLIENT_ID||!G.ids.email){h+=`<p class="muted">As fotos ficam guardadas no seu Google Drive, na pasta "Ficha de Treino/Fotos". Entre com o Google para usar.</p>${CLIENT_ID?'<button class="gbtn" data-act="google" type="button">Entrar com Google</button>':''}</div></section>`;return h}
  h+=`<div class="row"><select id="photoPose" class="inp" style="flex:1" aria-label="Posição da foto">${Object.entries(POSES).map(([k,l])=>`<option value="${k}" ${S.photoPose===k?'selected':''}>${l}</option>`).join('')}</select><button class="btn primary" data-act="addPhoto" type="button" style="flex:0 0 auto">${ICON.plus} Adicionar foto</button></div>
    <p class="muted small">Tire sempre no mesmo lugar, com a mesma luz e de manhã. As fotos vão para a pasta "Ficha de Treino/Fotos" do seu Drive.</p>`;
  if(ph.length){
    h+=`<div class="photos">${ph.map(p=>`<button class="ph" data-act="viewPhoto" data-v="${p.id}" type="button">${photoImg(p.id,'Foto de '+(POSES[p.pose]||'')+' em '+dshort(p.date))}<span>${dshort(p.date)} · ${POSES[p.pose]||''}</span></button>`).join('')}</div>`;
    if(ph.length>=2){
      const asc=[...ph].reverse();
      if(!S.cmpA||!ph.some(p=>p.id===S.cmpA))S.cmpA=asc[0].id;
      if(!S.cmpB||!ph.some(p=>p.id===S.cmpB))S.cmpB=ph[0].id;
      const opt=sel=>ph.map(p=>`<option value="${p.id}" ${p.id===sel?'selected':''}>${dshort(p.date)} · ${POSES[p.pose]||''}</option>`).join('');
      h+=`<b>Comparar</b><div class="cmp"><div><select id="cmpA" class="inp" aria-label="Foto de antes">${opt(S.cmpA)}</select>${photoImg(S.cmpA,'Antes')}</div><div><select id="cmpB" class="inp" aria-label="Foto de depois">${opt(S.cmpB)}</select>${photoImg(S.cmpB,'Depois')}</div></div>`;
    }
    if(!tokenOk())h+=`<p class="muted small">Fotos que ainda não estão neste celular aparecem depois que você toca em "Sincronizar" no topo.</p>`;
  }else h+=`<p class="muted small">Nenhuma foto ainda. Uma foto de frente, uma de lado e uma de costas a cada 4 semanas já mostram bem a mudança.</p>`;
  return h+'</div></section>';
}
async function compressImage(file){
  try{
    const bmp=await createImageBitmap(file);const sc=Math.min(1,1600/Math.max(bmp.width,bmp.height));
    const c=document.createElement('canvas');c.width=Math.round(bmp.width*sc);c.height=Math.round(bmp.height*sc);
    c.getContext('2d').drawImage(bmp,0,0,c.width,c.height);
    return await new Promise(r=>c.toBlob(b=>r(b||file),'image/jpeg',.85));
  }catch(e){return file}
}
async function uploadPhoto(file){
  if(!file) return;
  if(!tokenOk()){toast('Toque em "Sincronizar" no topo e tente de novo.');return}
  toast('Enviando foto…');
  try{
    const blob=await compressImage(file);
    if(!G.ids.photos){await ensureFiles();G.ids.photos=await driveFolder('Fotos',G.ids.folder);saveIds()}
    const date=new Date().toISOString(),pose=S.photoPose||'frente';
    const id=await driveCreate(`foto-${dayKey(date)}-${pose}.jpg`,blob.type||'image/jpeg',blob,G.ids.photos);
    try{(await caches.open('ficha-fotos')).put('/foto/'+id,new Response(blob))}catch(e){}
    prof().photos.push({id,date,pose});
    await saveProfile();render();toast('Foto salva no Drive.');
  }catch(e){toast(e.code==='net'?'Sem internet. Tente de novo quando tiver sinal.':e.code==='auth'?'Sua sessão do Google expirou. Toque em "Sincronizar" e tente de novo.':'Não deu para salvar a foto agora. Tente de novo.')}
}

/* ---------- backup em arquivo ---------- */
function backupJSON(){return JSON.stringify({app:'ficha-de-treino',versao:2,exportado:new Date().toISOString(),profile:S.profile,sessions:S.sessions,deleted:S.deleted})}
function parseBackup(txt){
  let d;try{d=JSON.parse(txt)}catch(e){return null}
  if(!d||typeof d!=='object'||!d.profile||!Array.isArray(d.sessions))return null;
  const c=cleanData(d);
  return {profile:normProfile(c.profile),sessions:c.sessions};
}
function sheetData(){
  const p=S.profile,n=S.sessions.length,conn=!!G.ids.email;
  const last=G.last?new Date(G.last).toLocaleString('pt-BR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}):'';
  openSheet(sheetHead('Seus dados','Conta e backup')+`
    <div class="card"><b>${conn?'Google Drive conectado':'Salvo só neste celular'}</b>
      <span class="muted small">${conn?`Conta: ${esc(G.ids.email)}. Tudo fica salvo no celular e é copiado para a pasta "Ficha de Treino" do seu Drive.${last?' Última sincronização: '+last+'.':''}`:'Entre com o Google para guardar uma cópia no seu Drive e usar os mesmos dados em outro celular ou no computador.'}</span>
      <span class="small num">${p.routines.length} treinos na ficha · ${n} treinos registrados · ${p.meas.length} medições · ${p.photos.length} fotos</span>
      ${CLIENT_ID?(conn?`<div class="row"><button class="btn primary" data-act="google" type="button">Sincronizar agora</button><button class="btn ghost" data-act="signOut" type="button">Sair do Google</button></div>`:`<button class="gbtn" data-act="google" type="button">${GLOGO} Entrar com Google</button>`):'<span class="muted small">O login com Google ainda não foi configurado neste app (arquivo config.js).</span>'}</div>
    ${S.demo?'<p class="muted small">Você está no modo exemplo. O backup salva os seus dados reais, não o exemplo.</p>':''}
    <div class="card"><b>Backup em arquivo</b><span class="muted small">Gera um arquivo .json com ficha, histórico, medidas e peso. Use para passar os dados de outro lugar para cá, ou como cópia extra. As fotos não entram no arquivo.</span>
      <div class="row"><button class="btn" data-act="exportFile" type="button">Baixar backup</button><button class="btn" data-act="exportCopy" type="button">Copiar como texto</button></div>
      <textarea id="exportText" class="inp" readonly hidden aria-label="Backup em texto"></textarea></div>
    <div class="card"><b>Importar</b><span class="muted small">Substitui os dados atuais pelos do backup.</span>
      <div class="row"><button class="btn" data-act="importFile" type="button">Escolher arquivo</button><button class="btn" data-act="importPasteShow" type="button">Colar texto</button></div>
      <div id="importPaste" class="col" hidden><textarea id="importText" class="inp" placeholder="Cole aqui o texto do backup" aria-label="Texto do backup"></textarea><button class="btn" data-act="importText" type="button">Ler backup</button></div>
      <div id="importConfirm"></div></div>`);
}
function showImportConfirm(data){
  if(!data){toast('Esse arquivo não é um backup da Ficha.');return}
  S.pendingImport=data;
  const el=$('#importConfirm');if(!el)return;
  el.innerHTML=`<div class="wu"><b>Backup encontrado</b><span class="small">${data.profile.routines.length} treinos na ficha · ${data.sessions.length} treinos registrados · ${data.profile.meas.length} medições</span>
    <button class="btn danger" data-act="importApply" type="button">Substituir meus dados por este backup</button></div>`;
}
function applyImport(){
  const d=S.pendingImport;if(!d)return;
  S.demo=null;
  const newIds=new Set(d.sessions.map(x=>x.id));
  S.deleted=[...new Set([...S.deleted,...S.sessions.map(x=>x.id).filter(id=>!newIds.has(id))])];
  S.profile=d.profile;S.sessions=d.sessions;S.pendingImport=null;
  S.profile._ts=Date.now();markDirty();
  closeSheet();render();toast('Backup importado.');
}

/* ---------- sheets ---------- */
function openSheet(html){$('#sheetBody').innerHTML=html;$('#sheet').hidden=false;document.body.style.overflow='hidden'}
function closeSheet(){$('#sheet').hidden=true;S.pick=null;if($('#session').hidden)document.body.style.overflow=''}
const sheetHead=(eyebrow,title)=>`<div class="sheet-head"><div><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2></div><button class="icon-btn" data-act="closeSheet" aria-label="Fechar" type="button">${ICON.x}</button></div>`;

function sheetRoutine(){
  const e=S.edit;
  let h=sheetHead(e.isNew?'Novo treino':'Editar treino',e.name||'Sem nome')+
    `<div class="field"><label for="rName">Nome do treino</label><input id="rName" class="inp" data-in="rName" value="${esc(e.name)}" placeholder="Ex.: Treino A · Peito e tríceps"></div>`;
  h+=e.items.map((x,i)=>{const ex=exById(x.ex);return `<div class="ed-item"><div class="top-row"><span class="dot" style="--c:${grp(ex.g).c}"></span><b style="flex:1;min-width:0">${esc(ex.n)}</b>
    <button class="icon-btn" data-act="mv" data-v="${i},-1" aria-label="Subir" type="button" ${i?'':'disabled'}>${ICON.up}</button><button class="icon-btn" data-act="mv" data-v="${i},1" aria-label="Descer" type="button" ${i<e.items.length-1?'':'disabled'}>${ICON.down}</button><button class="icon-btn" data-act="rmItem" data-v="${i}" aria-label="Remover" type="button">${ICON.x}</button></div>
    <div class="grid4">${[['sets','Séries'],['rmin',ex.t==='tempo'?'Seg. mín':'Reps mín'],['rmax',ex.t==='tempo'?'Seg. máx':'Reps máx'],['rest','Descanso (s)']].map(([k,l])=>`<div class="field"><label for="it${i}${k}">${l}</label><input id="it${i}${k}" class="inp" inputmode="numeric" data-in="item" data-i="${i}" data-k="${k}" value="${x[k]}"></div>`).join('')}</div></div>`}).join('');
  h+=`<button class="btn" data-act="pickFor" data-v="routine" type="button">${ICON.plus} Adicionar exercício</button>
    <button class="btn primary block" data-act="saveRoutine" type="button">Salvar treino</button>
    ${e.isNew?'':`<button class="btn danger" data-act="delRoutine" type="button">Excluir treino</button>`}`;
  openSheet(h);
}
function sheetPicker(){
  openSheet(sheetHead('Adicionar','Escolha o exercício')+`<input id="pkSearch" class="search" type="search" placeholder="Buscar exercício" aria-label="Buscar exercício"><div class="list" id="pkList"></div>
    <button class="btn ghost" data-act="pickBack" type="button">Voltar</button>`);
  renderPick('');
}
function renderPick(q){
  q=q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const items=allEx().filter(e=>!q||e.n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').includes(q)||grp(e.g).n.toLowerCase().includes(q));
  $('#pkList').innerHTML=items.map(e=>`<button class="li" data-act="pick" data-v="${e.id}" type="button"><span class="dot" style="--c:${grp(e.g).c}"></span><div class="grow"><div class="t">${esc(e.n)}</div><div class="s">${grp(e.g).n}</div></div>${ICON.plus}</button>`).join('')||'<div class="li muted">Nada encontrado.</div>';
}
function videoUrl(e){return 'https://www.youtube.com/results?search_query='+encodeURIComponent(e.n+' execução correta')}
function sheetExDetail(id){
  const e=exById(id),h=history(id),u=unitOf(id),own=safeUrl(prof().videos[id]);
  let x=sheetHead(grp(e.g).n,e.n);
  if(e.tips&&e.tips.length) x+=`<div class="card"><b>Como executar</b><ul class="tips">${e.tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`;
  x+=`<div class="card"><b>Vídeos</b>
    ${own?`<a class="btn primary" href="${esc(own)}" target="_blank" rel="noopener">${ICON.play} Abrir meu vídeo salvo</a>`:''}
    <a class="btn ${own?'':'primary'}" href="${videoUrl(e)}" target="_blank" rel="noopener">${ICON.play} Ver vídeos de execução no YouTube</a>
    <div class="field"><label for="vidUrl">Achou um vídeo bom? Cole o link para abrir direto daqui</label><div class="row"><input id="vidUrl" class="inp" style="flex:1" type="url" placeholder="https://youtube.com/..." value="${esc(own||'')}"><button class="btn sm" data-act="saveVid" data-v="${id}" type="button">Salvar</button></div></div></div>`;
  if(h.length) x+=`<div class="tiles"><div class="tile"><span>Recorde</span><b>${f1(Math.max(...h.map(p=>p.best)))}</b><span>${u==='kg'?'kg (1RM est.)':u}</span></div><div class="tile"><span>Maior carga</span><b>${f1(Math.max(...h.map(p=>p.maxKg)))}</b><span>kg</span></div><div class="tile"><span>Treinado</span><b>${h.length}</b><span>vezes</span></div></div>
    <button class="btn" data-act="toEvo" data-v="${id}" type="button">Ver evolução</button>`;
  if(e.custom) x+=`<button class="btn danger" data-act="delCustom" data-v="${id}" type="button">Excluir exercício personalizado</button>`;
  openSheet(x);
}
function sheetCustomEx(){
  openSheet(sheetHead('Novo exercício','Exercício personalizado')+`<div class="field"><label for="cxName">Nome</label><input id="cxName" class="inp" placeholder="Ex.: Pullover na polia"></div>
    <div class="field"><label for="cxGroup">Músculo principal</label><select id="cxGroup" class="inp">${Object.keys(GROUPS).map(g=>`<option value="${g}">${grp(g).n}</option>`).join('')}</select></div>
    <div class="field"><label for="cxType">Tipo de registro</label><select id="cxType" class="inp"><option value="kg">Carga e repetições</option><option value="corpo">Peso do corpo (repetições)</option><option value="tempo">Tempo (segundos)</option></select></div>
    <div class="field"><label for="cxTips">Dicas de execução (uma por linha, opcional)</label><textarea id="cxTips" class="inp" style="height:90px;padding:10px"></textarea></div>
    <button class="btn primary block" data-act="saveCustom" type="button">Criar exercício</button>`);
}
function sheetBW(){
  const last=prof().bw.length?[...prof().bw].sort((a,b)=>new Date(a.date)-new Date(b.date)).pop().kg:'';
  openSheet(sheetHead('Peso corporal','Registrar peso de hoje')+`<div class="field"><label for="bwKg">Peso (kg)</label><input id="bwKg" class="inp" inputmode="decimal" value="${last?f1(last):''}"></div><button class="btn primary block" data-act="saveBW" type="button">Salvar</button>`);
}
function sessionDetailHTML(s,prs){
  return s.entries.map(e=>{const ex=exById(e.ex);return `<div class="card" style="gap:6px"><div class="sec-head"><b>${esc(ex.n)}</b>${prs.includes(e.ex)?'<span class="pr">RECORDE</span>':''}</div><span class="muted small num">${e.sets.map(z=>z.kg>0?`${f1(z.kg)} kg × ${z.reps}`:`${z.reps}${ex.t==='tempo'?' s':' reps'}`).join(' · ')}</span></div>`}).join('');
}
function sheetSessionView(id){
  const s=sess().find(x=>x.id===id);if(!s) return;
  const prs=prMap()[id]||[];const vol=s.entries.reduce((a,e)=>a+entryStats(e).vol,0);
  openSheet(sheetHead(new Date(s.date).toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long'}),s.routineName)+
    `<div class="tiles"><div class="tile"><span>Duração</span><b>${s.dur||'–'}</b><span>min</span></div><div class="tile"><span>Volume</span><b>${f1(vol/1000)}</b><span>toneladas</span></div><div class="tile"><span>Recordes</span><b>${prs.length}</b><span>no treino</span></div></div>`+
    sessionDetailHTML(s,prs)+`<button class="btn danger" data-act="delSession" data-v="${id}" type="button">Excluir este treino</button>`);
}

/* ---------- treino em andamento ---------- */
function mkEntry(x){
  const last=lastEntry(x.ex),sug=suggest(x,last),ex=exById(x.ex);
  const sets=[],n=deloadActive()?Math.max(1,Math.ceil(x.sets/2)):x.sets;
  for(let i=0;i<n;i++){const ls=last?(last.sets[i]||last.sets[last.sets.length-1]):null;
    sets.push({kg:ex.t==='tempo'?0:(sug.kg??(ls?ls.kg:'')),reps:'',ph:ls?ls.reps:x.rmax,done:false})}
  return {ex:x.ex,rmin:x.rmin,rmax:x.rmax,rest:x.rest,sets,last:last?last.sets.map(s=>[s.kg,s.reps]):null,sug:sug.text};
}
function startSession(rid){
  if(S.draft){toast('Você já tem um treino em andamento.');openSession();return}
  const r=rid?prof().routines.find(x=>x.id===rid):null;
  S.draft={id:uid(),start:new Date().toISOString(),routineId:r?r.id:null,routineName:(r?r.name:'Treino livre')+(deloadActive()?' (semana leve)':''),entries:(r?r.items:[]).map(mkEntry)};
  saveDraft();openSession();
}
function saveDraft(){if(S.draft)LS.set('ficha.draft',S.draft);else LS.del('ficha.draft')}
let tick=null,wake=null;
function openSession(){
  $('#session').hidden=false;document.body.style.overflow='hidden';renderSession();
  clearInterval(tick);tick=setInterval(onTick,250);
  requestWake();
}
function requestWake(){try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>wake=w).catch(()=>{})}catch(e){}}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&S.draft&&!$('#session').hidden)requestWake()});
function closeSession(){$('#session').hidden=true;document.body.style.overflow='';clearInterval(tick);S.rest=null;try{wake&&wake.release()}catch(e){}wake=null;render()}
function renderSession(){
  const d=S.draft;if(!d) return;
  const done=d.entries.reduce((a,e)=>a+e.sets.filter(s=>s.done).length,0),total=d.entries.reduce((a,e)=>a+e.sets.length,0);
  let h=`<div class="s-top"><button class="btn sm ghost" data-act="minimize" type="button">Minimizar</button><div style="text-align:center"><div class="clock" id="elapsed">0:00</div><div class="small muted num">${done}/${total} séries</div></div><button class="btn sm danger" data-act="cancelSession" id="cancelBtn" type="button">Descartar</button></div>
  <div class="s-body"><div><span class="eyebrow">Treinando agora</span><h2>${esc(d.routineName)}</h2></div>`;
  d.entries.forEach((en,i)=>{
    const ex=exById(en.ex),t=ex.t;
    h+=`<div class="ex-card"><div class="hd"><span class="dot" style="--c:${grp(ex.g).c};margin-top:8px"></span><div class="grow"><h3>${esc(ex.n)}</h3>
      <div class="hint num">Meta ${en.sets.length}×${en.rmin}–${en.rmax}${t==='tempo'?' s':''} · descanso ${en.rest}s${en.last?' · última: '+en.last.map(([k,r])=>k>0?f1(k)+'×'+r:r).join(', '):''}</div></div>
      <button class="icon-btn" data-act="exDetail" data-v="${en.ex}" aria-label="Como executar" type="button">${ICON.info}</button></div>
      ${en.sug?`<div class="sug">${esc(en.sug)}</div>`:''}
      <div class="sets"><div class="set head"><span style="text-align:center">#</span><span style="text-align:center">${t==='tempo'?'—':t==='corpo'?'+kg':'kg'}</span><span style="text-align:center">${t==='tempo'?'seg':'reps'}</span><span></span></div>
      ${en.sets.map((s,j)=>`<div class="set ${s.done?'done':''}"><span class="n">${j+1}</span>
        <input inputmode="decimal" aria-label="Carga série ${j+1}" data-in="kg" data-i="${i}" data-j="${j}" value="${t==='tempo'?'':esc(s.kg)}" placeholder="${t==='corpo'?'0':''}" ${t==='tempo'?'disabled':''}>
        <input inputmode="numeric" aria-label="Repetições série ${j+1}" data-in="reps" data-i="${i}" data-j="${j}" value="${esc(s.reps)}" placeholder="${esc(s.ph)}">
        <button class="ck" data-act="toggleSet" data-v="${i},${j}" aria-label="Marcar série ${j+1} como feita" aria-pressed="${s.done}" type="button">${ICON.check}</button></div>
        ${s.done&&s.rir===undefined?`<div class="rir"><span>Quantas reps sobravam?</span>${['0','1','2','3','4+'].map((l,k)=>`<button data-act="rir" data-v="${i},${j},${k}" type="button">${l}</button>`).join('')}<button class="skip" data-act="rir" data-v="${i},${j},-1" type="button">Pular</button></div>`:''}`).join('')}</div>
      ${en.wu?warmupHTML(en,ex):''}
      <div class="row"><button class="btn sm ghost" data-act="addSet" data-v="${i}" type="button">${ICON.plus} Série</button>${t==='kg'?`<button class="btn sm ghost" data-act="wu" data-v="${i}" type="button">${en.wu?'Fechar aquecimento':'Aquecimento e anilhas'}</button>`:''}${en.sets.length>1?`<button class="btn sm ghost" data-act="rmSet" data-v="${i}" type="button">Remover série</button>`:''}<button class="btn sm ghost" data-act="rmEntry" data-v="${i}" type="button">Tirar exercício</button></div></div>`;
  });
  h+=`<button class="btn" data-act="pickFor" data-v="session" type="button">${ICON.plus} Adicionar exercício</button></div>
  <div class="s-actions"><div class="in"><div id="restBar" hidden></div><button class="btn primary block" data-act="finish" type="button">Finalizar treino</button></div></div>`;
  const el=$('#session'),y=el.scrollTop;el.innerHTML=h;el.scrollTop=y;onTick();
}
// exercícios com barra olímpica de 20 kg (para calcular anilhas)
const BAR20=new Set('supino-reto supino-inclinado-barra supino-declinado supino-fechado agachamento agachamento-frontal levantamento-terra terra-romeno terra-sumo stiff remada-curvada remada-pronada remada-supinada desenvolvimento-barra militar-em-pe good-morning elevacao-pelvica encolhimento-barra'.split(' '));
const PLATES=[25,20,15,10,5,2.5,1.25];
function platesFor(kg){let side=(kg-20)/2;if(side<0)return null;const out=[];for(const p of PLATES){while(side>=p-1e-9){out.push(p);side-=p}}return {plates:out,rest:side}}
function plateText(kg){const r=platesFor(kg);if(!r)return 'abaixo do peso da barra';if(!r.plates.length)return 'só a barra';return r.plates.map(x=>x.toLocaleString('pt-BR',{maximumFractionDigits:2})).join(' + ')+' por lado'+(r.rest>.01?` (sobram ${f1(r.rest*2)} kg)`:'')}
function warmupHTML(en,ex){
  const kg=num((en.sets.find(s=>num(s.kg)>0)||{}).kg);
  if(!kg) return '<div class="wu muted small">Preencha a carga da primeira série para calcular o aquecimento.</div>';
  const bar=BAR20.has(en.ex),step=bar?2.5:kg>=20?2:1;
  const rows=[];if(bar&&kg>=40)rows.push(['Barra vazia',20,10]);
  for(const [p,r] of [[.4,8],[.6,5],[.8,3]]){const w=roundKg(kg*p,step);if(w>=(bar?20:1)&&!rows.some(x=>x[1]===w))rows.push([Math.round(p*100)+'%',w,r])}
  return `<div class="wu"><b>Aquecimento antes de ${f1(kg)} kg</b><table class="hist"><tbody>${rows.map(([l,w,r])=>`<tr><td>${l} · ${f1(w)} kg × ${r}</td><td>${bar?plateText(w):''}</td></tr>`).join('')}
    <tr><td><b>Série de trabalho · ${f1(kg)} kg</b></td><td><b>${bar?plateText(kg):''}</b></td></tr></tbody></table>
    <span class="small muted">${bar?'Barra olímpica de 20 kg. ':''}Descanse 1 minuto entre as séries de aquecimento e não vá até a falha.</span></div>`;
}
const mmss=s=>{s=Math.max(0,Math.round(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
function onTick(){
  const d=S.draft;if(!d) return;
  const el=$('#elapsed');if(el){const s=(Date.now()-new Date(d.start))/1000;el.textContent=s>=3600?Math.floor(s/3600)+':'+mmss(s%3600).padStart(5,'0'):mmss(s)}
  const rb=$('#restBar');if(!rb) return;
  if(!S.rest){rb.hidden=true;return}
  const left=(S.rest.end-Date.now())/1000;
  if(left<=0&&!S.rest.fired){S.rest.fired=true;beep()}
  if(left<-4){S.rest=null;rb.hidden=true;return}
  rb.hidden=false;
  const pct=Math.max(0,Math.min(100,left/S.rest.total*100));
  const html=`<div class="rest ${left<=0?'over':''}"><span class="t">${left>0?mmss(left):'Bora!'}</span><span class="prog"><i style="width:${pct}%"></i></span><button data-act="restAdd" data-v="-15" type="button">−15</button><button data-act="restAdd" data-v="15" type="button">+15</button><button data-act="restSkip" type="button">Pular</button></div>`;
  if(rb.innerHTML!==html) rb.innerHTML=html;
}
let actx=null;
function beep(){
  try{navigator.vibrate&&navigator.vibrate([200,100,200])}catch(e){}
  try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();[0,.25].forEach(t=>{const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=880;g.gain.setValueAtTime(.0001,actx.currentTime+t);g.gain.exponentialRampToValueAtTime(.3,actx.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,actx.currentTime+t+.18);o.connect(g).connect(actx.destination);o.start(actx.currentTime+t);o.stop(actx.currentTime+t+.2)})}catch(e){}
}
function finishSession(){
  const d=S.draft;
  const entries=d.entries.map(e=>({ex:e.ex,sets:e.sets.filter(s=>s.done).map(s=>{const o={kg:num(s.kg),reps:Math.round(num(s.reps!==''?s.reps:s.ph))};if(s.rir!=null&&s.rir>=0)o.rir=s.rir;return o})})).filter(e=>e.sets.length);
  if(!entries.length){toast('Marque pelo menos uma série como feita (✓) antes de finalizar.');return}
  const prs=entries.filter(e=>{const h=history(e.ex);return h.length&&entryStats(e).best>Math.max(...h.map(p=>p.best))+1e-9}).map(e=>e.ex);
  const end=new Date();
  const s={id:d.id,date:d.start,end:end.toISOString(),dur:Math.max(1,Math.round((end-new Date(d.start))/60000)),routineId:d.routineId,routineName:d.routineName,entries};
  addSession(s);S.draft=null;saveDraft();closeSession();
  const vol=entries.reduce((a,e)=>a+entryStats(e).vol,0),sets=entries.reduce((a,e)=>a+e.sets.length,0);
  openSheet(sheetHead('Treino concluído','Mandou bem!')+`<div class="tiles"><div class="tile"><span>Duração</span><b>${s.dur}</b><span>min</span></div><div class="tile"><span>Séries</span><b>${sets}</b><span>feitas</span></div><div class="tile"><span>Volume</span><b>${f1(vol/1000)}</b><span>toneladas</span></div></div>
    ${prs.length?`<div class="card"><b>Recordes batidos hoje</b><div class="chips">${prs.map(x=>`<span class="chip"><span class="pr">PR</span>${esc(exById(x).n)}</span>`).join('')}</div></div>`:''}
    ${sessionDetailHTML(s,prs)}<button class="btn primary block" data-act="closeSheet" type="button">Fechar</button>`);
}

/* ---------- ações ---------- */
let armed=null;
function arm(btn,key,label){if(armed===key){armed=null;return true}armed=key;btn.classList.add('armed');btn.textContent=label;setTimeout(()=>{if(armed===key){armed=null;btn.classList.remove('armed')}},4000);return false}
const ACT={
  tab(v){S.tab=v;LS.set('ficha.tab',v);render();window.scrollTo(0,0)},
  tpl(v){prof().routines.push(...TEMPLATES[v]());saveProfile();render();toast('Treinos criados. Toque em Editar para ajustar.')},
  demo(){S.demo=makeDemo();S.tab='ana';render();window.scrollTo(0,0);toast('Modo exemplo: nada é salvo.')},
  exitDemo(){S.demo=null;render();toast('Você voltou para os seus dados.')},
  newRoutine(){S.edit={isNew:true,id:uid(),name:'',items:[]};sheetRoutine()},
  editRoutine(v){const r=prof().routines.find(x=>x.id===v);S.edit={...clone(r),isNew:false};sheetRoutine()},
  mv(v){const [i,d]=v.split(',').map(Number),a=S.edit.items;[a[i],a[i+d]]=[a[i+d],a[i]];sheetRoutine()},
  rmItem(v){S.edit.items.splice(+v,1);sheetRoutine()},
  saveRoutine(){
    const e=S.edit;if(!e.name.trim()){toast('Dê um nome ao treino.');$('#rName').focus();return}
    if(!e.items.length){toast('Adicione pelo menos um exercício.');return}
    e.items.forEach(x=>{x.sets=Math.max(1,Math.min(10,Math.round(num(x.sets))||3));x.rmin=Math.max(1,Math.round(num(x.rmin))||8);x.rmax=Math.max(x.rmin,Math.round(num(x.rmax))||x.rmin);x.rest=Math.max(0,Math.round(num(x.rest)))});
    const r={id:e.id,name:e.name.trim(),items:e.items},rs=prof().routines,i=rs.findIndex(x=>x.id===r.id);
    if(i>=0)rs[i]=r;else rs.push(r);
    saveProfile();closeSheet();render();toast('Treino salvo.');
  },
  delRoutine(_,b){if(!arm(b,'delR','Toque de novo para excluir'))return;prof().routines=prof().routines.filter(x=>x.id!==S.edit.id);saveProfile();closeSheet();render();toast('Treino excluído.')},
  pickFor(v){S.pick=v;sheetPicker()},
  pickBack(){const p=S.pick;S.pick=null;if(p==='routine')sheetRoutine();else closeSheet()},
  pick(v){
    if(S.pick==='routine'){const t=exById(v).t;S.edit.items.push(it(v,3,t==='tempo'?30:8,t==='tempo'?60:12,t==='tempo'?60:90));S.pick=null;sheetRoutine()}
    else if(S.pick==='session'){const t=exById(v).t;S.draft.entries.push(mkEntry(it(v,3,t==='tempo'?30:8,t==='tempo'?60:12,90)));saveDraft();closeSheet();renderSession();const el=$('#session');el.scrollTop=el.scrollHeight}
  },
  start(v){startSession(v||null)},
  resume(){openSession()},
  minimize(){closeSession()},
  cancelSession(_,b){if(!arm(b,'cancel','Confirmar'))return;S.draft=null;saveDraft();closeSession();toast('Treino descartado.')},
  toggleSet(v){
    const [i,j]=v.split(',').map(Number),en=S.draft.entries[i],s=en.sets[j];
    s.done=!s.done;if(!s.done)delete s.rir;
    if(s.done){if(s.reps==='')s.reps=String(s.ph);if(en.rest>0)S.rest={end:Date.now()+en.rest*1000,total:en.rest};
      try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();actx.resume&&actx.resume()}catch(e){}}
    saveDraft();renderSession();
  },
  addSet(v){const en=S.draft.entries[+v],l=en.sets[en.sets.length-1];en.sets.push({kg:l?l.kg:'',reps:'',ph:l?l.ph:en.rmax,done:false});saveDraft();renderSession()},
  rmSet(v){S.draft.entries[+v].sets.pop();saveDraft();renderSession()},
  dataSheet(){sheetData()},
  google(){connectGoogle()},
  signOut(_,b){if(!arm(b,'out','Toque de novo para sair'))return;signOut();closeSheet();toast('Você saiu do Google. Os dados continuam neste celular.')},
  exportFile(){
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([backupJSON()],{type:'application/json'}));
    a.download='ficha-backup-'+dayKey(new Date())+'.json';document.body.appendChild(a);a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},2000);toast('Backup gerado.');
  },
  exportCopy(){const t=$('#exportText');if(!t)return;t.value=backupJSON();t.hidden=false;t.select();
    try{navigator.clipboard.writeText(t.value).then(()=>toast('Backup copiado.')).catch(()=>{})}catch(e){}},
  importFile(){$('#fileImport').value='';$('#fileImport').click()},
  importPasteShow(){$('#importPaste').hidden=false;$('#importText').focus()},
  importText(){showImportConfirm(parseBackup($('#importText').value))},
  importApply(_,b){if(!arm(b,'imp','Toque de novo para confirmar'))return;applyImport()},
  addPhoto(){S.photoPose=$('#photoPose').value;$('#filePhoto').value='';$('#filePhoto').click()},
  viewPhoto(v){const p=prof().photos.find(x=>x.id===v);if(!p)return;
    openSheet(sheetHead(POSES[p.pose]||'Foto',new Date(p.date).toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'}))+photoImg(p.id,'Foto de progresso','style="width:100%;border-radius:12px;min-height:200px;background:var(--surface-2)"')+`<button class="btn danger" data-act="delPhoto" data-v="${p.id}" type="button">Apagar foto</button>`);hydratePhotos()},
  async delPhoto(v,b){if(!arm(b,'delP','Toque de novo para apagar'))return;
    prof().photos=prof().photos.filter(x=>x.id!==v);await saveProfile();closeSheet();render();
    try{(await caches.open('ficha-fotos')).delete('/foto/'+v)}catch(e){}
    if(tokenOk()){try{await gfetch(`${DRIVE}/${v}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({trashed:true})})}catch(e){}}
    toast('Foto apagada. No Drive ela vai para a lixeira.')},
  rir(v){const [i,j,k]=v.split(',').map(Number);S.draft.entries[i].sets[j].rir=k<0?null:k;saveDraft();renderSession()},
  wu(v){const en=S.draft.entries[+v];en.wu=!en.wu;saveDraft();renderSession()},
  deloadOn(){prof().deload=new Date(Date.now()+7*DAY).toISOString();saveProfile();render();toast('Semana leve ativada por 7 dias. Os próximos treinos já vêm ajustados.')},
  deloadOff(){delete prof().deload;saveProfile();render();toast('Semana leve encerrada.')},
  swap(v){const [from,to]=v.split('|');let n=0;for(const r of prof().routines)for(const x of r.items)if(x.ex===from){x.ex=to;n++}
    if(!n){toast('Esse exercício não está em nenhum treino da ficha.');return}saveProfile();closeSheet();render();toast(`Trocado por ${exById(to).n} em ${n} treino${n>1?'s':''}.`)},
  rmEntry(v){S.draft.entries.splice(+v,1);saveDraft();renderSession()},
  restAdd(v){if(S.rest){S.rest.end+=+v*1000;S.rest.total=Math.max(S.rest.total,(S.rest.end-Date.now())/1000);S.rest.fired=false;onTick()}},
  restSkip(){S.rest=null;onTick()},
  finish(){finishSession()},
  closeSheet(){closeSheet()},
  exG(v){S.exG=v;document.querySelectorAll('#exGroups .fchip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===v));renderExList()},
  exDetail(v){sheetExDetail(v)},
  saveVid(v){const u=$('#vidUrl').value.trim();if(u&&!safeUrl(u)){toast('Cole um link que comece com https://');return}if(u)prof().videos[v]=u;else delete prof().videos[v];saveProfile();sheetExDetail(v);toast(u?'Vídeo salvo.':'Vídeo removido.')},
  toEvo(v){S.evoEx=v;closeSheet();if(!$('#session').hidden)closeSession();ACT.tab('evo')},
  customEx(){sheetCustomEx()},
  saveCustom(){const n=$('#cxName').value.trim();if(!n){toast('Dê um nome ao exercício.');return}
    prof().custom.push({id:'c-'+uid(),n,g:$('#cxGroup').value,t:$('#cxType').value,custom:true,tips:$('#cxTips').value.split('\n').map(s=>s.trim()).filter(Boolean)});saveProfile();closeSheet();render();toast('Exercício criado.')},
  delCustom(v,b){if(!arm(b,'delC','Toque de novo para excluir'))return;prof().custom=prof().custom.filter(x=>x.id!==v);saveProfile();closeSheet();render()},
  addBW(){sheetBW()},
  saveBW(){const kg=num($('#bwKg').value);if(kg<20||kg>400){toast('Digite um peso válido em kg.');return}
    const bw=prof().bw,k=dayKey(new Date()),i=bw.findIndex(x=>dayKey(x.date)===k);const e={date:new Date().toISOString(),kg};if(i>=0)bw[i]=e;else bw.push(e);saveProfile();closeSheet();render();toast('Peso registrado.')},
  openSession(v){sheetSessionView(v)},
  addMeas(){sheetMeas()},
  saveMeas(){
    const p=prof(),alt=num($('#mAltura').value),peso=num($('#m_peso').value);
    const m={date:new Date().toISOString()};if(peso>=20&&peso<=400)m.peso=peso;
    let n=0;for(const [k] of MEAS){const v=num($('#m_'+k).value);if(v>0){m[k]=v;n++}}
    if(!n){toast('Preencha pelo menos uma medida.');return}
    p.body={sexo:$('#mSexo').value,altura:alt>=100&&alt<=250?alt:(p.body||{}).altura||0};
    const k=dayKey(new Date()),i=p.meas.findIndex(x=>dayKey(x.date)===k);if(i>=0)p.meas[i]=m;else p.meas.push(m);
    if(m.peso){const j=p.bw.findIndex(x=>dayKey(x.date)===k),e={date:m.date,kg:m.peso};if(j>=0)p.bw[j]=e;else p.bw.push(e)}
    saveProfile();closeSheet();render();window.scrollTo(0,0);toast('Medidas salvas.');
  },
  delSession(v,b){if(!arm(b,'delS','Toque de novo para excluir'))return;deleteSession(v);closeSheet();render();toast('Treino excluído do histórico.')}
};
document.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const f=ACT[b.dataset.act];if(f){e.preventDefault();f(b.dataset.v,b,e)}});
document.addEventListener('input',e=>{
  const t=e.target;
  if(t.id==='exSearch'){S.exQ=t.value;renderExList();return}
  if(t.id==='pkSearch'){renderPick(t.value);return}
  const k=t.dataset.in;if(!k) return;
  if(k==='rName'){S.edit.name=t.value;return}
  if(k==='item'){S.edit.items[+t.dataset.i][t.dataset.k]=t.value;return}
  if(k==='kg'||k==='reps'){S.draft.entries[+t.dataset.i].sets[+t.dataset.j][k]=t.value;saveDraft()}
});
document.addEventListener('change',e=>{
  if(e.target.id==='fileImport'){const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>showImportConfirm(parseBackup(String(r.result)));r.onerror=()=>toast('Não deu para ler o arquivo.');r.readAsText(f);return}
  if(e.target.id==='filePhoto'){uploadPhoto(e.target.files&&e.target.files[0]);return}
  if(e.target.id==='cmpA'||e.target.id==='cmpB'){const y=scrollY;S[e.target.id]=e.target.value;render();window.scrollTo(0,y);return}if(e.target.id==='evoSel'){S.evoEx=e.target.value;render()}if(e.target.id==='measSel'){const y=scrollY;S.measKey=e.target.value;render();window.scrollTo(0,y)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#sheet').hidden)closeSheet()});

let toastT=null;
function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2800)}

initSync();
render();
if(S.draft&&location.hash!=='#fechado') openSession();
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js').catch(()=>{});
