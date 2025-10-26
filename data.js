var APP_DATA = {
	scenes: [
		{
			id: "0-portaria",
			name: "Portaria",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.5314629118652583,
					pitch: -0.02507541434148841,
					rotation: 0,
					target: "1-esarte",
				},
				{
					yaw: 0.7441097586051892,
					pitch: -0.1116597224432212,
					rotation: 0,
					target: "3-ctec",
				},
			],
			infoHotspots: [
				{
					yaw: -0.05545758289608749,
					pitch: -0.0620009811669604,
					title: "Portaria",
					text: "A Portaria é o principal ponto de entrada da Faculdade Adventista do Paraná. É por aqui que alunos, visitantes e funcionários passam todos os dias, sendo também o local responsável pela segurança e recepção do campus.",
				},
			],
		},
		{
			id: "1-esarte",
			name: "Esarte",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.19297925965526375,
					pitch: -0.04790914801820634,
					rotation: 0,
					target: "2-interior-esarte",
				},
				{
					yaw: 2.662420488551109,
					pitch: 0.42977473436850033,
					rotation: 0,
					target: "8-prdio-educao-bsica",
				},
				{
					yaw: 2.5457231736042214,
					pitch: 0.4624607652130006,
					rotation: 5.497787143782138,
					target: "18-centro-de-convivncia",
				},
			],
			infoHotspots: [
				{
					yaw: 0.06652007127776649,
					pitch: -0.03322279292009256,
					title: "Esarte",
					text: "A Esarte é o espaço dedicado às artes e apresentações culturais da FAP. Projetada para inspirar criatividade, ela recebe eventos musicais, teatrais e exposições organizadas pelos alunos.",
				},
			],
		},
		{
			id: "2-interior-esarte",
			name: "Interior Esarte",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				yaw: 0.2723743136018779,
				pitch: 0,
				fov: 1.3365071038314758,
			},
			linkHotspots: [],
			infoHotspots: [],
		},
		{
			id: "3-ctec",
			name: "CTec",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.003143165258542524,
					pitch: 0.15478296826331395,
					rotation: 0,
					target: "4-interior-ctec",
				},
				{
					yaw: -1.3542063804704938,
					pitch: -0.0012955745925857798,
					rotation: 0,
					target: "5-prdio-dos-funcionrios",
				},
				{
					yaw: 1.4512392369155425,
					pitch: 0.052161522680894024,
					rotation: 0,
					target: "0-portaria",
				},
				{
					yaw: 2.771418611734566,
					pitch: 0.07038782774378838,
					rotation: 0,
					target: "6-igreja-da-fap",
				},
			],
			infoHotspots: [
				{
					yaw: -0.02353012014306266,
					pitch: -0.038631150416232884,
					title: "CTec",
					text: "O Centro Tecnológico (CTec) é dedicado às áreas de inovação e tecnologia. Nele, os alunos realizam projetos, experimentos e atividades práticas de suas formações.",
				},
			],
		},
		{
			id: "4-interior-ctec",
			name: "Interior CTec",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 3.0804980120861014,
					pitch: 0.25004290904901083,
					rotation: 0,
					target: "3-ctec",
				},
			],
			infoHotspots: [],
		},
		{
			id: "5-prdio-dos-funcionrios",
			name: "Prédio dos Funcionários",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				yaw: -1.6599504773190734,
				pitch: -0.030650027211777342,
				fov: 1.3365071038314758,
			},
			linkHotspots: [
				{
					yaw: -3.1036514570206624,
					pitch: 0.1565801093050041,
					rotation: 0,
					target: "3-ctec",
				},
			],
			infoHotspots: [
				{
					yaw: 1.8662994195921705,
					pitch: 0.049762509281354284,
					title: "Prédio dos Funcionários",
					text: "Espaço destinado à moradia e apoio dos colaboradores da FAP, oferecendo comodidade e proximidade ao ambiente de trabalho.",
				},
			],
		},
		{
			id: "6-igreja-da-fap",
			name: "Igreja da FAP",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.011102472575810651,
					pitch: 0.276914145272805,
					rotation: 0,
					target: "7-interior-igreja-da-fap",
				},
				{
					yaw: -0.9007227419901671,
					pitch: -0.008864290560170573,
					rotation: 0,
					target: "5-prdio-dos-funcionrios",
				},
				{
					yaw: -1.7629421952602673,
					pitch: 0.02400691355865625,
					rotation: 0,
					target: "42-rea-esportiva",
				},
				{
					yaw: -2.234392190220719,
					pitch: 0.03268850376483101,
					rotation: 0,
					target: "43-ginsio",
				},
				{
					yaw: 3.0871762710491053,
					pitch: 0.14449925397905794,
					rotation: 0,
					target: "25-sete-copas",
				},
				{
					yaw: 2.108532907874501,
					pitch: 0.068969920123509,
					rotation: 0,
					target: "8-prdio-educao-bsica",
				},
				{
					yaw: 0.7683388723257849,
					pitch: 0.08683926607995218,
					rotation: 0,
					target: "0-portaria",
				},
			],
			infoHotspots: [
				{
					yaw: -0.018436019261487857,
					pitch: 0.023583782155601085,
					title: "Igreja da FAP",
					text: "A Igreja é o centro espiritual da FAP, onde ocorrem cultos, louvores e programas religiosos. Seu ambiente inspira fé, união e propósito.",
				},
			],
		},
		{
			id: "7-interior-igreja-da-fap",
			name: "Interior Igreja da FAP",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 3.0676909320666876,
					pitch: 0.24725092167578389,
					rotation: 0,
					target: "6-igreja-da-fap",
				},
			],
			infoHotspots: [],
		},
		{
			id: "8-prdio-educao-bsica",
			name: "Prédio Educação Básica",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.08919924897119103,
					pitch: 0.10358618249951235,
					rotation: 0,
					target: "9-ptio-escolar",
				},
				{
					yaw: 1.2194728156151964,
					pitch: -0.01288102575268546,
					rotation: 0,
					target: "25-sete-copas",
				},
				{
					yaw: 2.4335062617007353,
					pitch: -0.006476034990974711,
					rotation: 0,
					target: "6-igreja-da-fap",
				},
				{
					yaw: -2.9106311985666906,
					pitch: 0.05519382958044794,
					rotation: 0,
					target: "0-portaria",
				},
				{
					yaw: -1.1111930843385665,
					pitch: 0.07122590178941124,
					rotation: 0,
					target: "18-centro-de-convivncia",
				},
				{
					yaw: 1.099943707693086,
					pitch: 0.025136469304520404,
					rotation: 5.497787143782138,
					target: "26-administrativo",
				},
			],
			infoHotspots: [
				{
					yaw: 0.10762806147935322,
					pitch: -0.1066595281068139,
					title: "Escolar",
					text: "O setor Escolar reúne as salas de aula do colégio adventista, onde estudantes do ensino fundamental e médio desenvolvem suas habilidades e valores em um ambiente acolhedor.",
				},
			],
		},
		{
			id: "9-ptio-escolar",
			name: "Pátio Escolar",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.03330189915954662,
					pitch: 0.12322201690522228,
					rotation: 0.7853981633974483,
					target: "10-educao-infantil",
				},
				{
					yaw: -0.1342291730464389,
					pitch: 0.07590423038198502,
					rotation: 0,
					target: "8-prdio-educao-bsica",
				},
				{
					yaw: -0.22062769652309555,
					pitch: 0.1335388928850616,
					rotation: 5.497787143782138,
					target: "15-recepo",
				},
			],
			infoHotspots: [],
		},
		{
			id: "10-educao-infantil",
			name: "Educação Infantil",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.8937925544721885,
					pitch: 0.44074693271333665,
					rotation: 0.7853981633974483,
					target: "11-educao-infantil",
				},
				{
					yaw: -0.7490522378355955,
					pitch: 0.4398562793543306,
					rotation: 0,
					target: "9-ptio-escolar",
				},
			],
			infoHotspots: [],
		},
		{
			id: "11-educao-infantil",
			name: "Educação Infantil",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.9157890270894953,
					pitch: 0.2262421095786813,
					rotation: 5.497787143782138,
					target: "12-educao-infantil",
				},
				{
					yaw: 0.6512227020499601,
					pitch: 0.3372439529369178,
					rotation: 0.7853981633974483,
					target: "10-educao-infantil",
				},
			],
			infoHotspots: [],
		},
		{
			id: "12-educao-infantil",
			name: "Educação Infantil",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.007889636349172946,
					pitch: 0.07648468974756462,
					rotation: 0,
					target: "13-educao-infantil",
				},
				{
					yaw: -2.997143831194162,
					pitch: 0.20961012486724329,
					rotation: 0,
					target: "11-educao-infantil",
				},
			],
			infoHotspots: [],
		},
		{
			id: "13-educao-infantil",
			name: "Educação Infantil",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 1.721096407895378,
					pitch: 0.2666747368430702,
					rotation: 0,
					target: "14-laboratrio-de-biologia",
				},
				{
					yaw: 0.0883530750658501,
					pitch: 0.17439834538765098,
					rotation: 0,
					target: "12-educao-infantil",
				},
			],
			infoHotspots: [],
		},
		{
			id: "14-laboratrio-de-biologia",
			name: "Laboratório de Biologia",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 2.4404071706271235,
					pitch: 0.21307778728612625,
					rotation: 0,
					target: "13-educao-infantil",
				},
			],
			infoHotspots: [
				{
					yaw: -0.065747653510984,
					pitch: 0.10844097231064964,
					title: "Laboratório de Biologia",
					text: "O Laboratório de Biologia da FAP é um espaço moderno e bem equipado, onde os alunos exploram o mundo microscópico da vida. Nele são realizadas aulas práticas, análises e experimentos que aproximam a teoria da prática, promovendo uma compreensão mais profunda sobre os organismos e seus processos.",
				},
			],
		},
		{
			id: "15-recepo",
			name: "Recepção",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 2.2005927095112217,
					pitch: 0.4592175966675409,
					rotation: 0.7853981633974483,
					target: "17-recepo",
				},
				{
					yaw: 1.4064531203332145,
					pitch: 0.36539075151062406,
					rotation: 0,
					target: "16-biblioteca-do-infantil",
				},
			],
			infoHotspots: [],
		},
		{
			id: "16-biblioteca-do-infantil",
			name: "Biblioteca do Infantil",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.580946711290194,
					pitch: 0.365651280878188,
					rotation: 5.497787143782138,
					target: "15-recepo",
				},
			],
			infoHotspots: [
				{
					yaw: -1.424078554774681,
					pitch: 0.23573618846788058,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">Biblioteca Infantil</span>',
					text: '<p data-start="106" data-end="478">A Biblioteca Infantil é um espaço encantador dedicado às crianças do colégio adventista. Colorida e acolhedora, ela estimula o gosto pela leitura desde cedo, com livros educativos, histórias ilustradas e cantinhos confortáveis para aprender de forma leve e divertida. É um lugar onde a imaginação ganha vida e o conhecimento começa a florescer.</p>',
				},
			],
		},
		{
			id: "17-recepo",
			name: "Recepção",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.9091484796651059,
					pitch: 0.5211563196644704,
					rotation: 5.497787143782138,
					target: "15-recepo",
				},
				{
					yaw: 1.7323281280772882,
					pitch: 0.3384452833560001,
					rotation: 0,
					target: "8-prdio-educao-bsica",
				},
			],
			infoHotspots: [
				{
					yaw: -0.28717585570363013,
					pitch: 0.010647308118706178,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">Recepção do Escolar</span>',
					text: "A Recepção do Escolar é o ponto de acolhimento dos alunos e visitantes do colégio adventista dentro da FAP. É onde acontecem as primeiras orientações, atendimentos e informações sobre o funcionamento das aulas e atividades escolares. O ambiente transmite organização e simpatia, refletindo o cuidado da instituição com cada estudante.",
				},
			],
		},
		{
			id: "18-centro-de-convivncia",
			name: "Centro de Convivência",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.14150513556120003,
					pitch: 0.11069519380504644,
					rotation: 0,
					target: "19-interior-centro-de-convivncia",
				},
				{
					yaw: 0.7477845568231913,
					pitch: 0.10413765473663616,
					rotation: 0.7853981633974483,
					target: "8-prdio-educao-bsica",
				},
				{
					yaw: -0.8041283952752671,
					pitch: 0.08478471114678499,
					rotation: 6.283185307179586,
					target: "20-biblioteca-ensino-superior",
				},
				{
					yaw: -0.9811514834679809,
					pitch: 0.16901024540223197,
					rotation: 5.497787143782138,
					target: "22-prdio-ensino-superior",
				},
				{
					yaw: -3.0727464449338004,
					pitch: 0.20423656671063029,
					rotation: 0.7853981633974483,
					target: "1-esarte",
				},
				{
					yaw: 3.099600112149,
					pitch: 0.20852329016532423,
					rotation: 0,
					target: "0-portaria",
				},
			],
			infoHotspots: [
				{
					yaw: 0,
					pitch: 0,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">Centro de Convivência</span>',
					text: "O Centro de Convivência é um dos espaços mais acolhedores da FAP. Criado para promover integração e amizade entre os alunos, ele reúne áreas de descanso, conversa e atividades sociais. É o lugar ideal para relaxar depois das aulas, fazer novas amizades e fortalecer os laços da comunidade acadêmica.",
				},
			],
		},
		{
			id: "19-interior-centro-de-convivncia",
			name: "Interior Centro de Convivência",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -3.050765040607436,
					pitch: 0.2697778702215299,
					rotation: 0,
					target: "18-centro-de-convivncia",
				},
			],
			infoHotspots: [],
		},
		{
			id: "20-biblioteca-ensino-superior",
			name: "Biblioteca Ensino Superior",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.13027218809349073,
					pitch: 0.2083029821372886,
					rotation: 0,
					target: "21-interior-biblioteca-ensino-superior",
				},
				{
					yaw: 1.3616723541395626,
					pitch: 0.14508393099653816,
					rotation: 0.7853981633974483,
					target: "18-centro-de-convivncia",
				},
				{
					yaw: -2.9857483925640977,
					pitch: 0.35823270666165286,
					rotation: 0,
					target: "22-prdio-ensino-superior",
				},
			],
			infoHotspots: [
				{
					yaw: -0.1429634527604513,
					pitch: -0.004800263834617624,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">Biblioteca da FAP</span>',
					text: "A Biblioteca da FAP é um espaço amplo e silencioso, dedicado ao estudo e à pesquisa. Com um acervo variado de livros, periódicos e recursos digitais, oferece aos alunos um ambiente ideal para leitura, trabalhos acadêmicos e desenvolvimento do conhecimento. É também um ponto de encontro para quem busca concentração e aprendizado em um ambiente acolhedor.",
				},
			],
		},
		{
			id: "21-interior-biblioteca-ensino-superior",
			name: "Interior Biblioteca Ensino Superior",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.0717941073650525,
					pitch: 0.25289535353394754,
					rotation: 0,
					target: "20-biblioteca-ensino-superior",
				},
			],
			infoHotspots: [],
		},
		{
			id: "22-prdio-ensino-superior",
			name: "Prédio Ensino Superior",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.0510289853186805,
					pitch: 0.09727022717650868,
					rotation: 0,
					target: "23-interior-ensino-superior",
				},
				{
					yaw: 3.0935818400122113,
					pitch: 0.22316045942365825,
					rotation: 0,
					target: "20-biblioteca-ensino-superior",
				},
				{
					yaw: -2.0208837352659597,
					pitch: 0.21889373007138246,
					rotation: 0,
					target: "18-centro-de-convivncia",
				},
			],
			infoHotspots: [
				{
					yaw: -0.06376156861343674,
					pitch: -0.039011534577717555,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">Faculdade</span>',
					text: "O prédio da Faculdade na FAP é o centro acadêmico do campus, abrigando salas de aula, laboratórios modernos e espaços de convivência. É onde acontecem as principais atividades de ensino superior, integrando teoria e prática, e oferecendo aos alunos um ambiente inspirador para aprender, pesquisar e desenvolver projetos.",
				},
			],
		},
		{
			id: "23-interior-ensino-superior",
			name: "Interior Ensino Superior",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.843656636560663,
					pitch: 0.34679376973975096,
					rotation: 7.853981633974483,
					target: "22-prdio-ensino-superior",
				},
				{
					yaw: -2.7040043055420906,
					pitch: 0.47398831214191617,
					rotation: 7.0685834705770345,
					target: "24-interior-ensino-superior",
				},
			],
			infoHotspots: [],
		},
		{
			id: "24-interior-ensino-superior",
			name: "Interior Ensino Superior",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 3.103935732365459,
					pitch: 0.3314841858172084,
					rotation: 1.5707963267948966,
					target: "23-interior-ensino-superior",
				},
			],
			infoHotspots: [],
		},
		{
			id: "25-sete-copas",
			name: "Sete Copas",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.7616783179791273,
					pitch: 0.09423066834895266,
					rotation: 0,
					target: "26-administrativo",
				},
				{
					yaw: 1.5306722185659947,
					pitch: 0.09567245877311947,
					rotation: 0.7853981633974483,
					target: "29-campus",
				},
				{
					yaw: -0.8317945530855564,
					pitch: 0.12768403244323778,
					rotation: 0.7853981633974483,
					target: "6-igreja-da-fap",
				},
				{
					yaw: -1.5277822276184558,
					pitch: 0.1931426262071625,
					rotation: 6.283185307179586,
					target: "43-ginsio",
				},
				{
					yaw: 2.843474969774367,
					pitch: 0.06287236980858957,
					rotation: 5.497787143782138,
					target: "37-campus",
				},
				{
					yaw: -2.764076083016569,
					pitch: 0.20386445565539724,
					rotation: 0,
					target: "40-residencial-masculino",
				},
				{
					yaw: 0.1053638511338324,
					pitch: 0.1900692242653399,
					rotation: 5.497787143782138,
					target: "8-prdio-educao-bsica",
				},
			],
			infoHotspots: [
				{
					yaw: 0.2887183560118487,
					pitch: 0.0198295445111647,
					title: "Sete Copas",
					text: '<p data-start="87" data-end="380">A Sete Copas é uma grande árvore que se tornou um símbolo da FAP e um ponto de convivência ao ar livre. Local de encontro e referência no campus, é onde alunos se reúnem para conversar, descansar ou apenas aproveitar a sombra e a tranquilidade. Mais que um espaço físico, representa a identidade e a história da instituição.</p>',
				},
			],
		},
		{
			id: "26-administrativo",
			name: "Administrativo",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.05545756432686488,
					pitch: 0.23293028812345895,
					rotation: 0.7853981633974483,
					target: "27-administrativo",
				},
				{
					yaw: 2.572726991824533,
					pitch: 0.2292928432593584,
					rotation: 0,
					target: "29-campus",
				},
				{
					yaw: -2.8517705181466937,
					pitch: 0.09108945617925102,
					rotation: 0,
					target: "37-campus",
				},
				{
					yaw: -0.4792131114203979,
					pitch: 0.14430689678064113,
					rotation: 0,
					target: "8-prdio-educao-bsica",
				},
				{
					yaw: -1.6796362175915718,
					pitch: 0.2681613186514724,
					rotation: 0,
					target: "25-sete-copas",
				},
			],
			infoHotspots: [
				{
					yaw: 0.284497674360658,
					pitch: 0.0887690102624088,
					title: "Administração",
					text: "O prédio da Administração reúne os setores responsáveis pela gestão da instituição, como secretaria, financeiro e direção. É aqui que as decisões e planejamentos da FAP acontecem.",
				},
			],
		},
		{
			id: "27-administrativo",
			name: "Administrativo",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.128350163492607,
					pitch: 0.25892240019958734,
					rotation: 1.5707963267948966,
					target: "28-administrativo",
				},
				{
					yaw: 1.1863633953780806,
					pitch: 0.4571607544969041,
					rotation: 0,
					target: "26-administrativo",
				},
			],
			infoHotspots: [],
		},
		{
			id: "28-administrativo",
			name: "Administrativo",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.33392481504943206,
					pitch: 0.3319562205493902,
					rotation: 4.71238898038469,
					target: "27-administrativo",
				},
			],
			infoHotspots: [],
		},
		{
			id: "29-campus",
			name: "Campus",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.27476035344783156,
					pitch: 0.16006788608931188,
					rotation: 0.7853981633974483,
					target: "26-administrativo",
				},
				{
					yaw: 0.16320396388433522,
					pitch: 0.10610358179775758,
					rotation: 0,
					target: "25-sete-copas",
				},
				{
					yaw: -2.97066547079414,
					pitch: 0.22987587175025226,
					rotation: 0,
					target: "30-residencial-feminino",
				},
				{
					yaw: 0.0696049583937004,
					pitch: 0.16371159546300618,
					rotation: 5.497787143782138,
					target: "37-campus",
				},
			],
			infoHotspots: [],
		},
		{
			id: "30-residencial-feminino",
			name: "Residencial Feminino",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.20998609467115,
					pitch: 0.727829413215332,
					rotation: 0,
					target: "31-residencial-feminino",
				},
				{
					yaw: 0.7025696567752444,
					pitch: 0.20674871150194463,
					rotation: 0,
					target: "29-campus",
				},
			],
			infoHotspots: [],
		},
		{
			id: "31-residencial-feminino",
			name: "Residencial Feminino",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.5809625529045555,
					pitch: 0.2574514301964044,
					rotation: 0,
					target: "30-residencial-feminino",
				},
				{
					yaw: -0.6101555607415428,
					pitch: 0.11516948038211972,
					rotation: 0.7853981633974483,
					target: "32-auditrio-feminino",
				},
				{
					yaw: 1.8364154715935541,
					pitch: 0.04403455499645936,
					rotation: 0,
					target: "34-enfermaria",
				},
			],
			infoHotspots: [
				{
					yaw: -2.5705813027088524,
					pitch: -0.01188846019195644,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">&nbsp;Residencial Feminino</span>',
					text: "O Residencial Feminino é um ambiente seguro e tranquilo, projetado para oferecer conforto e convivência às estudantes que vivem no campus.",
				},
			],
		},
		{
			id: "32-auditrio-feminino",
			name: "Auditório Feminino",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -1.6069408414802364,
					pitch: 0.13770536254206966,
					rotation: 5.497787143782138,
					target: "33-campus",
				},
				{
					yaw: 1.8956105574945408,
					pitch: 0.07187681154644565,
					rotation: 0.7853981633974483,
					target: "31-residencial-feminino",
				},
				{
					yaw: 1.4694866585189592,
					pitch: 0.0023298519721794975,
					rotation: 0,
					target: "34-enfermaria",
				},
			],
			infoHotspots: [
				{
					yaw: -2.6236221819313226,
					pitch: 0.0246014113062607,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">&nbsp;Auditório Feminino</span>',
					text: "O Auditório Feminino é um espaço destinado a apresentações, palestras e eventos voltados às alunas do residencial feminino. Com infraestrutura confortável e ambiente acolhedor, promove integração, aprendizado e momentos culturais dentro do campus.",
				},
			],
		},
		{
			id: "33-campus",
			name: "Campus",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.7941946170884187,
					pitch: 0.08002605736581003,
					rotation: 0,
					target: "32-auditrio-feminino",
				},
			],
			infoHotspots: [],
		},
		{
			id: "34-enfermaria",
			name: "Enfermaria",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.24305365226083708,
					pitch: 0.2548175142032889,
					rotation: 0.7853981633974483,
					target: "35-enfermaria",
				},
				{
					yaw: 1.7934499645493265,
					pitch: 0.0677110771798688,
					rotation: 0.7853981633974483,
					target: "36-lavanderia",
				},
			],
			infoHotspots: [
				{
					yaw: 0.6044799243349317,
					pitch: 0.04595794475960169,
					title:
						'<span style="font-size: 13px; background-color: rgba(58, 68, 84, 0.8);">Enfermaria</span>',
					text: "A Enfermaria da FAP é o espaço dedicado à saúde e bem-estar da comunidade acadêmica. Equipada para atendimentos básicos e primeiros socorros, oferece suporte rápido e seguro para alunos, professores e funcionários, garantindo cuidado e atenção sempre que necessário.",
				},
				{
					yaw: 1.8497005743962713,
					pitch: 0.0054166298967164295,
					title: "Lavanderia",
					text: "A Lavanderia da FAP é o espaço destinado à lavagem e cuidado das roupas dos alunos internos. Organizada e funcional, oferece máquinas e infraestrutura adequada para facilitar o dia a dia, garantindo praticidade e conforto no cotidiano dos estudantes.",
				},
			],
		},
		{
			id: "35-enfermaria",
			name: "Enfermaria",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 2.0246254015658582,
					pitch: 0.7055286377056653,
					rotation: 5.497787143782138,
					target: "34-enfermaria",
				},
			],
			infoHotspots: [],
		},
		{
			id: "36-lavanderia",
			name: "Lavanderia",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.283109780059581,
					pitch: 0.19219261505409335,
					rotation: 0.7853981633974483,
					target: "34-enfermaria",
				},
				{
					yaw: -2.7805437498688637,
					pitch: 0.10434615279472226,
					rotation: 0,
					target: "29-campus",
				},
			],
			infoHotspots: [],
		},
		{
			id: "37-campus",
			name: "Campus",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.09440199845177055,
					pitch: 0.37817227028839717,
					rotation: 6.283185307179586,
					target: "25-sete-copas",
				},
				{
					yaw: 0.9485599279232471,
					pitch: 0.3026110555743067,
					rotation: 11.780972450961727,
					target: "26-administrativo",
				},
				{
					yaw: 3.0960624696683148,
					pitch: 0.2632470301618248,
					rotation: 0,
					target: "38-restaurante",
				},
				{
					yaw: -2.239532779603529,
					pitch: 0.337995070923629,
					rotation: 0.7853981633974483,
					target: "41-auditrio-masculino",
				},
				{
					yaw: -2.676375977590741,
					pitch: 0.25676635681050186,
					rotation: 0.7853981633974483,
					target: "40-residencial-masculino",
				},
				{
					yaw: 2.7227870471258493,
					pitch: 0.30532719607379377,
					rotation: 5.497787143782138,
					target: "30-residencial-feminino",
				},
				{
					yaw: -1.4769527795531605,
					pitch: 0.4338550539310724,
					rotation: 0.7853981633974483,
					target: "43-ginsio",
				},
			],
			infoHotspots: [
				{
					yaw: -0.08197742806696873,
					pitch: 0.17523360236169694,
					title: "Ponto de Conexão",
					text: "Local estratégico do campus que liga diferentes rotas e caminhos. Serve como referência para se orientar e acessar outras áreas da instituição.",
				},
			],
		},
		{
			id: "38-restaurante",
			name: "Restaurante",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.0510289853186805,
					pitch: 0.35469082716810973,
					rotation: 0,
					target: "39-restaurante",
				},
				{
					yaw: 3.1049711184923723,
					pitch: 0.1770131035285729,
					rotation: 0,
					target: "37-campus",
				},
			],
			infoHotspots: [
				{
					yaw: -0.05347680875091143,
					pitch: 0.03936576095922284,
					title: "Restaurante",
					text: "Espaço amplo e acolhedor onde são servidas as principais refeições dos alunos e colaboradores. O ambiente é organizado e conta com diversas opções de pratos, proporcionando um momento agradável de pausa durante o dia.",
				},
			],
		},
		{
			id: "39-restaurante",
			name: "Restaurante",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.6913584890029068,
					pitch: 0.550757116272603,
					rotation: 0,
					target: "38-restaurante",
				},
			],
			infoHotspots: [],
		},
		{
			id: "40-residencial-masculino",
			name: "Residencial Masculino",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.8893518040128399,
					pitch: 0.21010746179456063,
					rotation: 7.0685834705770345,
					target: "37-campus",
				},
				{
					yaw: 0.5466694250528015,
					pitch: 0.24804395784741473,
					rotation: 5.497787143782138,
					target: "50-piscina-trmica",
				},
			],
			infoHotspots: [
				{
					yaw: 2.611743029800401,
					pitch: 0.25327917869232053,
					title: "Residencial Masculino",
					text: "Espaço destinado à moradia dos alunos do gênero masculino. Possui quartos organizados, áreas comuns e estrutura pensada para oferecer conforto e praticidade no dia a dia, criando um ambiente acolhedor e de convivência entre os residentes.",
				},
			],
		},
		{
			id: "41-auditrio-masculino",
			name: "Auditório Masculino",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.655555525684644,
					pitch: 0.1760060994191459,
					rotation: 0,
					target: "37-campus",
				},
			],
			infoHotspots: [
				{
					yaw: -0.19695829227724104,
					pitch: 0.027332866732452388,
					title: "Auditório Masculino",
					text: "Local utilizado para reuniões, palestras, eventos e atividades internas voltadas aos alunos do residencial masculino. O espaço é estruturado para acomodar grupos de forma confortável, servindo também como ambiente para momentos espirituais, educacionais e comunitários.",
				},
			],
		},
		{
			id: "42-rea-esportiva",
			name: "Área Esportiva",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -1.324213746105606,
					pitch: 0.08666685384940465,
					rotation: 0,
					target: "5-prdio-dos-funcionrios",
				},
				{
					yaw: 1.0471962171844051,
					pitch: 0.13886753588070988,
					rotation: 0,
					target: "43-ginsio",
				},
			],
			infoHotspots: [
				{
					yaw: 0,
					pitch: 0,
					title: "Área Esportiva",
					text: "Espaço amplo dedicado à prática de esportes e atividades físicas, composto por quadra de areia, pista de corrida e campos de futebol (tanto sintético quanto de grama natural). É um local que promove o bem-estar, o lazer e a integração entre os alunos por meio do esporte e da atividade ao ar livre.",
				},
			],
		},
		{
			id: "43-ginsio",
			name: "Ginásio",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -1.4094653753008703,
					pitch: 0.26299447136529963,
					rotation: 6.283185307179586,
					target: "25-sete-copas",
				},
				{
					yaw: 0.15918409239653464,
					pitch: 0.17453493954234034,
					rotation: 0,
					target: "44-interior-ginsio",
				},
				{
					yaw: 1.5921155284427204,
					pitch: 0.14544015218208983,
					rotation: 0,
					target: "45-complexo-esportivo",
				},
				{
					yaw: 2.2547341594003942,
					pitch: 0.4069346525923834,
					rotation: 0,
					target: "42-rea-esportiva",
				},
			],
			infoHotspots: [
				{
					yaw: 0.09566851114331598,
					pitch: -0.030076109228275527,
					title: "Ginásio",
					text: "Estrutura coberta destinada à prática de esportes e realização de eventos. Conta com arquibancadas, quadra poliesportiva e espaço para treinos, jogos e atividades recreativas. É um dos principais pontos de encontro dos alunos durante competições e momentos de lazer.",
				},
			],
		},
		{
			id: "44-interior-ginsio",
			name: "Interior Ginásio",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 3.1202437997117727,
					pitch: 0.3236734813931381,
					rotation: 0,
					target: "43-ginsio",
				},
			],
			infoHotspots: [],
		},
		{
			id: "45-complexo-esportivo",
			name: "Complexo Esportivo",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -0.7409472420239354,
					pitch: 0.04427655697734423,
					rotation: 5.497787143782138,
					target: "50-piscina-trmica",
				},
				{
					yaw: 0.06606625737096117,
					pitch: 0.12410035318919732,
					rotation: 0,
					target: "47-quadra-poliesportiva",
				},
				{
					yaw: 0.855337784613857,
					pitch: 0.16821868511791394,
					rotation: 6.283185307179586,
					target: "46-complexo-esportivo",
				},
				{
					yaw: -3.0865426456913614,
					pitch: 0.15394667093749348,
					rotation: 0.7853981633974483,
					target: "43-ginsio",
				},
			],
			infoHotspots: [
				{
					yaw: 0.19017824902400982,
					pitch: 0.101792190439566,
					title: "Complexo Esportivo",
					text: "Conjunto de instalações voltadas à prática de atividades físicas e esportivas, reunindo quadras, pistas de corrida, piscinas, campos de futebol e academia. O espaço foi planejado para atender diferentes modalidades, promovendo saúde, integração e bem-estar entre os alunos.",
				},
			],
		},
		{
			id: "46-complexo-esportivo",
			name: "Complexo Esportivo",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.693241941968166,
					pitch: 0.20917571450671524,
					rotation: 5.497787143782138,
					target: "45-complexo-esportivo",
				},
				{
					yaw: -0.019982544447131545,
					pitch: 0.19080196003234562,
					rotation: 0,
					target: "49-academia",
				},
				{
					yaw: -1.4595813445280488,
					pitch: 0.3318972200699264,
					rotation: 0,
					target: "47-quadra-poliesportiva",
				},
				{
					yaw: 1.0426214005425578,
					pitch: 0.23826839485593432,
					rotation: 0,
					target: "48-piscina-externa",
				},
			],
			infoHotspots: [
				{
					yaw: 0.057670933306262384,
					pitch: -0.004433691477659707,
					title: "Academia",
					text: "Espaço equipado com aparelhos e materiais para exercícios físicos, musculação e atividades de condicionamento. Destinada aos alunos e colaboradores, a academia promove saúde, bem-estar e desenvolvimento físico em um ambiente seguro e organizado.",
				},
				{
					yaw: 1.1174796759830752,
					pitch: 0.04364854040947641,
					title: "Piscina Externa",
					text: "Piscina ao ar livre destinada ao lazer, prática de natação e atividades recreativas. Com ambiente aberto e ensolarado, proporciona momentos de descontração, integração e bem-estar para os alunos da FAP.",
				},
				{
					yaw: -1.688708780967751,
					pitch: 0.07611479579097136,
					title: "Quadra Poliesportiva",
					text: "Espaço coberto destinado à prática de diversas modalidades esportivas, como vôlei, basquete e futsal. Com piso adequado e estrutura segura, a quadra oferece conforto e funcionalidade para treinos, competições e atividades recreativas dos alunos.",
				},
			],
		},
		{
			id: "47-quadra-poliesportiva",
			name: "Quadra Poliesportiva",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.532665199990129,
					pitch: 0.19524197626614814,
					rotation: 0,
					target: "46-complexo-esportivo",
				},
			],
			infoHotspots: [],
		},
		{
			id: "48-piscina-externa",
			name: "Piscina Externa",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 2.687879956886473,
					pitch: 0.27169680101941296,
					rotation: 0,
					target: "46-complexo-esportivo",
				},
			],
			infoHotspots: [],
		},
		{
			id: "49-academia",
			name: "Academia",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: 0.43909651023604823,
					pitch: 0.8006343342121163,
					rotation: 0,
					target: "46-complexo-esportivo",
				},
			],
			infoHotspots: [],
		},
		{
			id: "50-piscina-trmica",
			name: "Piscina Térmica",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
				{
					tileSize: 512,
					size: 4096,
				},
			],
			faceSize: 2992,
			initialViewParameters: {
				pitch: 0,
				yaw: 0,
				fov: 1.5707963267948966,
			},
			linkHotspots: [
				{
					yaw: -2.0848005443457627,
					pitch: 0.5994766789682355,
					rotation: 0,
					target: "46-complexo-esportivo",
				},
			],
			infoHotspots: [
				{
					yaw: 0.5844088285381126,
					pitch: 0.17977413366584116,
					title: "Piscina Térmica",
					text: "Piscina coberta com temperatura controlada, adequada para aulas de natação, treinos e atividades aquáticas ao longo do ano. Oferece conforto e segurança, permitindo a prática de exercícios mesmo em dias frios ou chuvosos.",
				},
			],
		},
	],
	name: "Tour Virutal 360º - Colégio da FAP",
	settings: {
		mouseViewMode: "drag",
		autorotateEnabled: true,
		fullscreenButton: true,
		viewControlButtons: true,
	},
};
