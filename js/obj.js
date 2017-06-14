var n1 = [
	{'nombre':'Bandeja de Exploración',
		'r':6,
		'nivel' : 1,
		'id': 'exploracion',
		'parent': 'center1',
		'index': 0,
		'hijos':
			[
				{'nombre': 'Pinza porta-algodones', 'r': 4, 'nivel' : 2, 'parent': 'exploracion', 'toMake': "toInfo" , 'index': 0},
				{'nombre': 'Sonda de expolaricón doble', 'r': 4, 'nivel' : 2, 'parent': 'exploracion', 'toMake': "toInfo" , 'index': 2},
				{'nombre': 'Espejo de expolarión', 'r': 4, 'nivel' : 2, 'parent': 'exploracion', 'toMake': "toInfo" , 'index': 1}
			]
	},
	{'nombre': 'Bandeja de Aislamiento',
		'r': 6,
		'nivel': 1,
		'id': 'aislamiento',
		'parent': 'center1',
		'index': 1,
		'hijos':[
			{'nombre': 'Dique de goma', 'r':4, 'nivel' : 2, 'parent': 'aislamiento', 'toMake': "toInfo" , 'index': 3},
			{'nombre': 'Perforador de diques', 'r': 4, 'nivel' : 2, 'parent': 'aislamiento', 'toMake': "toInfo" , 'index': 4},
			{'nombre': 'Clamps', 'r': 4, 'nivel' : 2, 'parent': 'aislamiento', 'toMake': "toInfo" , 'index': 5},
			{'nombre': 'Clamps (tipo Ivory)', 'r': 4, 'nivel' : 2, 'parent': 'aislamiento', 'toMake': "toInfo" , 'index': 6},
			{'nombre': 'Porta matriz', 'r': 4, 'nivel' : 2, 'parent': 'aislamiento', 'toMake': "toInfo" , 'index': 7}
		]
	},
	{'nombre': 'Bandeja de Periodoncia',
		'r': 6,
		'nivel': 1,
		'id': 'periodoncia',
		'parent': 'center1',
		'index': 2,
		'hijos':[
				{'nombre': 'Rapadores',
					'r': 4,
					'nivel' : 2,
					'parent': 'periodoncia',
					'id': 'raspadores',
					'index': 0,
					'index_parent': 2,
					'hijos': [
						{'nombre': 'Hoz', 'r': 3, 'parent': 'raspadores', 'toMake': "toInfo" , 'index': 10},
						{'nombre': 'Cincel', 'r': 3, 'parent': 'raspadores', 'toMake': "toInfo" , 'index': 8},
						{'nombre': 'Azada', 'r': 3, 'parent': 'raspadores', 'toMake': "toInfo" , 'index': 9}
					]
				},
				{'nombre': 'Curetas',
					'r': 4,
					'nivel' : 2,
					'parent': 'periodoncia',
					'id': 'curetas',
					'index': 1,
					'index_parent': 2,
					'hijos': [
						{'nombre': 'Especifica-(Gracey)', 'r': 3, 'parent': 'curetas', 'toMake': "toInfo" , 'index': 11},
						{'nombre': 'Universal-(Columbia)', 'r': 3, 'parent': 'curetas', 'toMake': "toInfo" , 'index': 12},
						{'nombre': 'Dermatologica (Fox)', 'r': 3, 'parent': 'curetas', 'toMake': "toInfo" , 'index': 13}
					]
				},
				{'nombre': 'Piedras',
					'r':4,
					'nivel' : 2,
					'parent': 'periodoncia',
					'id': 'piedras',
					'index': 2,
					'index_parent': 2,
					'hijos': [
						{'nombre': 'Manual', 'r': 3, 'parent': 'piedras', 'toMake': "toInfo" , 'index': 15},
						{'nombre': 'No manual', 'r': 3, 'parent': 'piedras', 'toMake': "toInfo" , 'index': 14}
					]
				}
			]
	},
	{
		'nombre': 'Bandeja de Anestesia',
		'r': 6,
		'nivel': 1,
		'id': 'anestesia',
		'parent': 'center1',
		'index': 3,
		'hijos':[
					{'nombre': 'Jeringa',
						'r': 4,
						'nivel': 2,
						'parent': 'anestesia',
						'id':'jeringa',
						'toMake': "toInfo" , 'index': 16
					},
					{'nombre': 'Carpule de Anestesia',
						'r': 4,
						'nivel': 2,
						'parent': 'anestesia',
						'id':'jeringa',
						'toMake': "toInfo" , 'index': 17
					},
					{'nombre': 'Aguja de punción',
						'r': 4,
						'nivel': 2,
						'parent': 'anestesia',
						'id':'jeringa',
						'toMake': "toInfo" , 'index': 18
					}
			]
	}
];

var n2 = [
	{"nombre": 'Bandeja de Endodoncia',
		"r": 6,
		"nivel": 1,
		"id": 'endodoncia', 
		"parent": 'center2',
		"index": 0,
		"hijos": [
			{'nombre': 'Limas de endodoncia',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'endoncia',
				'toMake': "toInfo" , 'index': 20
			},
			{'nombre': 'Localizadores de apices',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'localizadores',
				'toMake': "toInfo" , 'index': 21
			},
			{'nombre': 'Instrumental rotatorio',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'instrumental',
				'nivel': 2,
				'index': 2,
				'index_parent': 0,
				'hijos': [
					{
						'nombre': 'Turbina',
						'r':3,
						'parent': 'instrumental',
						'id': 'turbina',
						'toMake': "toInfo" , 'index': 22
					},
					{
						'nombre': 'Ultrasonidos',
						'r':3,
						'parent': 'instrumental',
						'id': 'ultrasonidos',
						'toMake': "toInfo" , 'index': 23
					},
					{
						'nombre': 'Micromotor',
						'r':3,
						'parent': 'instrumental',
						'id': 'Micromotor',
						'nivel': 3,
						'index': 2,
						'index_parent': 2,
						'index_grandParent': 0,
						'hijos': [
							{
								'nombre':'Contraangulo',
								'r':2,
								'parent': 'Micromotor',
								'id': 'Contraangulo',
								'toMake': "toInfo" , 'index': 25
							},
							{
								'nombre': 'Pieza de Mano',
								'r':2,
								'parent': 'Micromotor',
								'id': 'pieza',
								'toMake': "toInfo" , 'index': 26
							}
					]
				}
				]
			},
			{'nombre': 'Tiranervios',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'Tiranervios',
				'toMake': "toInfo" , 'index': 27
			},
			{'nombre': 'Lejía (irrigación)',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'lejía',
				'toMake': "toInfo" , 'index': 28
			},
			{'nombre': 'Regla milimetrada',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'regla',
				'toMake': "toInfo" , 'index': 29
			},
			{'nombre': 'Curvador de Limas',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'id':'curvador',
				'toMake': "toInfo" , 'index': 30
			},
			{'nombre': 'Instrumental para relleno',
				'r':4,
				'id': 2,
				'parent':'endodoncia',
				'nivel': 2,
				'index': 7,
				'index_parent':0,
				'id':'relleno',
				'hijos': [
					{'nombre': 'Papel de secado',
						'r': 3,
						'parent': 'relleno',
						'toMake': "toInfo" , 'index': 31
					},
					{'nombre': 'Puntas de gutapercha',
						'r': 3,
						'parent': 'relleno',
						'toMake': "toInfo" , 'index': 32
					},
					{'nombre': 'Condensadores manuales',
						'r': 3,
						'parent': 'relleno',
						'toMake': "toInfo" , 'index': 33
					}
				]
			}
		]
	},
	{'nombre': 'Bandeja de Exodoncia',
		'r': 6,
		'nivel': 1,
		'id': 'exodoncia',
		'parent': 'center2',
		'index': 1,
		'hijos': [
			{'nombre': 'Separador de Mejillas',
				'r': 4,
				'nivel': 2,
				'parent': 'exodoncia',
				'id': 'mejillas',
				'toMake': "toInfo" , 'index': 38,
			},
			{'nombre': 'Sindestotomo',
				'r': 4,
				'nivel': 2,
				'parent': 'exodoncia',
				'id': 'sindestotomo',
				'toMake': "toInfo" , 'index': 34,
			},			
			{'nombre': 'Botadores',
				'r': 4,
				'nivel': 2,
				'parent': 'exodoncia',
				'id': 'botadores',
				'toMake': "toInfo" , 'index': 35,	
			},			
			{'nombre': 'Forceps',
				'r': 4,
				'nivel': 2,
				'parent': 'exodoncia',
				'id': 'forceps',
				'toMake': "toInfo" , 'index': 36,
			},			
			{'nombre': 'Cucharilla de legrado',
				'r': 4,
				'nivel': 2,
				'parent': 'exodoncia',
				'id': 'cucharilla',
				'toMake': "toInfo" , 'index': 37
			}			
		]
	},
	{'nombre': 'Bandeja de Amalgama',
		"r": 6,
		'nivel': 1,
		'id': 'amalgama',
		'parent': 'center2',
		'index': 2,
		'hijos': [
			{'nombre': 'Realización de la cavidad',
				'r': 4,
				'nivel': 2,
				'parent': 'amalgama',
				'id': 'cavidad',
				'index': 0,
				'index_parent': 2,
				'hijos': [
					{'nombre': 'Instrumental Rotatorio',
						'r': 3,
						'parent': 'cavidad',
						'toMake': "toInfo" , 'index': 39
					},
					{'nombre': 'Cucharilla de Black',
						'r': 3,
						'parent': 'cavidad',
						'toMake': "toInfo" , 'index': 40
					},
					{'nombre': 'Recortadores del margen gingival',
						'r': 3,
						'parent': 'cavidad',
						'toMake': "toInfo" , 'index': 41
					}
					]
			},
			{'nombre': 'Amalgamador',
				'r': 4,
				'nivel': 2,
				'parent': 'amalgama',
				'id': 'amalgamador',
				'toMake': "toInfo" , 'index': 42
			},
			{'nombre': 'Matrices',
				'r': 4,
				'nivel': 2,
				'parent': 'amalgama',
				'id': 'matrices',
				'toMake': "toInfo" , 'index': 43
			},
			{'nombre': 'Bandeja de Obturación',
				'r': 4,
				'nivel': 2,
				'parent': 'amalgama',
				'id': 'obturación',
				'index': 3,
				'index_parent': 2,
				'hijos': [
					{'nombre': 'Porta-amalgamas',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 44
					},
					{'nombre': 'Condensador//Atacador',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 45
					},
					{'nombre': 'Vaso Dappen',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 46
					},
					{'nombre': 'Conformadores de surcos',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 47
					},
					{'nombre': 'Bruñidores',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 48
					},
					{'nombre': 'Recortadores Amalgama',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 49
					}
				]
			}
		]
	},
	{'nombre': 'Bandeja para Composite',
		"r": 6,
		'nivel': 1,
		'id': 'composite',
		'parent': 'center2',
		'index': 3,
		'hijos': [
			{'nombre': 'Bandeja para Grabado acido',
				'r': 4,
				'nivel': 2,
				'parent': 'composite',
				'id': 'grabado',
				'index': 0,
				'index_parent': 3,
				'hijos': [
					{'nombre': 'Acido ortofosforico 37%',
						'r': 3,
						'parent': 'grabado',
						'toMake': "toInfo" , 'index': 50
					},
					{'nombre': 'Adhesivo',
						'r': 3,
						'parent': 'grabado',
						'toMake': "toInfo" , 'index': 51
					}
				]
			},
			{'nombre': 'Bandeja de obturación',
				'r': 4,
				'nivel': 2,
				'parent': 'composite',
				'id': 'obturación',
				'index': 1,
				'index_parent': 3,
				'hijos':[
					{'nombre': 'Codigo Vita',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 52
					},
					{'nombre': 'Instrumental plástico',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 53
					},
					{'nombre': 'Lampara polimerizada',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 54
					},
					{'nombre': 'Piedras Arkansas',
						'r': 3,
						'parent': 'obturación',
						'toMake': "toInfo" , 'index': 55
					}
				]
			}
		]			
	}
]
