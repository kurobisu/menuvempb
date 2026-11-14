/* Lista de impressoras da página de drivers (drivers.html).
   Dados e links conferidos em 14/11/2026 nos sites oficiais dos fabricantes (Epson, Elgin e a linha Bematech,
   Tanca, Sweda, Control iD, Dimep, Rongta, Goldensky). Para incluir ou ajustar um modelo, mexa só aqui.
   - familia: agrupa as variações de um mesmo modelo num só cartão (ex.: "MP-4200"); variacao: nome curto de cada
     variação no seletor do modal (ex.: "TH", "ADV", "HS"). Cada variação tem seus próprios downloads.
   - largura: 80 ou 58 (mm); larguras: opcional, quando a impressora vem nas duas
   - conexao: 'USB', 'Serial', 'Rede', 'Bluetooth', 'Wi-Fi'
   - portatil: true para impressoras de celular/tablet (filtro "Dispositivos móveis")
   - bateria: true (portátil com bateria) ou texto com o tipo/capacidade (ex.: 'Lítio 1500 mAh'); some = sem bateria
   - utilitario: nome do utilitário oficial ('' = não tem)
   - foto: caminho da foto (img/impressoras/...); vazio = ilustração
   - pagina: página oficial de suporte do modelo
   - downloads: { tipo: 'driver' | 'utilitario' | 'app' | 'manual', so: 'Windows' | 'Linux' | 'macOS' | 'Android' | 'iOS' | 'Todos',
                  rotulo, versao, tamanho, url, nota (texto curto sob o nome), recomendado: true (tag "Recomendado"), oficial: true (link do fabricante) | false (nosso Drive),
                  pagina: true quando o link abre a página oficial em vez de baixar o arquivo }
   POS58/POS80 (marca branca) apontam para os pacotes oficiais da Rongta, Xprinter e Gprinter. oficial: false marca o arquivo como "Não oficial" (fonte de terceiros). maisUsada: 1, 2, 3… coloca a família no bloco "Mais usadas" nessa ordem.
   recomendada: true põe o selo "Marca recomendada" no card da família. */
const DRIVERS = [
  {
    "marca": "Epson",
    "familia": "TM-T20",
    "variacao": "TM-T20",
    "modelo": "TM-T20",
    "largura": 80,
    "larguras": [
      58,
      80
    ],
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "Epson Monitoring Tool",
    "foto": "",
    "obs": "Modelo original da linha TM-T20. Se a sua for a TM-T20II, III ou X, escolha a variação acima.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-t%C3%A9rmicas/Epson-TM-T20/s/SPT_C31CB10023",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB TM (comunicação USB)",
        "versao": "800d",
        "tamanho": "2,33 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMUSB800d.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Epson Monitoring Tool",
        "versao": "3.10.0",
        "tamanho": "33,7 MB",
        "url": "https://ftp.epson.com/drivers/EMT_3100.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver de impressora (macOS 10.14 ou anterior)",
        "versao": "1.2b",
        "tamanho": "4,86 MB",
        "url": "https://ftp.epson.com/drivers/TM-T20_12b_AM.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Folheto técnico (PT)",
        "tamanho": "160 KB",
        "url": "https://files.support.epson.com/prod/pos-brochures/brochure_tm-t20_pt.pdf",
        "oficial": true
      }
    ],
    "maisUsada": 2
  },
  {
    "marca": "Epson",
    "familia": "TM-T20",
    "variacao": "TM-T20II",
    "modelo": "TM-T20II",
    "largura": 80,
    "larguras": [
      58,
      80
    ],
    "conexao": [
      "USB",
      "Serial",
      "Rede",
      "Bluetooth"
    ],
    "portatil": false,
    "utilitario": "TM-T20II Utility",
    "foto": "img/impressoras/epson-tm-t20ii.webp",
    "obs": "Rede e Bluetooth dependem da variante da impressora (confira o código no equipamento).",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-t%C3%A9rmicas/Epson-TM-T20II/s/SPT_C31CD52062",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora APD 5",
        "versao": "5.13",
        "tamanho": "70,7 MB",
        "url": "https://ftp.epson.com/drivers/pos/APD_513_T20II_EWM.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB TM (comunicação USB)",
        "versao": "800d",
        "tamanho": "2,33 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMUSB800d.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de porta virtual TM",
        "versao": "8.70f",
        "tamanho": "17,2 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMVirtualPortDriver870f.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "TM-T20II Utility",
        "versao": "1.20",
        "tamanho": "31,2 MB",
        "url": "https://ftp.epson.com/drivers/pos/TM-T20II-Utility_1.20.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "EpsonNet Config (configurar rede)",
        "versao": "4.9.11",
        "tamanho": "18,8 MB",
        "url": "https://ftp.epson.com/drivers/ENCU_4.9.11.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "TM Bluetooth Connector (pareamento)",
        "versao": "2.04",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-t%C3%A9rmicas/Epson-TM-T20II/s/SPT_C31CD52062",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ],
    "maisUsada": 2
  },
  {
    "marca": "Epson",
    "familia": "TM-T20",
    "variacao": "TM-T20III",
    "modelo": "TM-T20III",
    "largura": 80,
    "larguras": [
      58,
      80
    ],
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "TM-T20III Utility",
    "foto": "",
    "pagina": "https://epson.com/Support/Point-of-Sale/Thermal-Printers/Epson-TM-T20III-Series/s/SPT_C31CH51001",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora APD 6",
        "versao": "6.12",
        "tamanho": "37,3 MB",
        "url": "https://ftp.epson.com/drivers/pos/APD_612_T20III_WM.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB TM (comunicação USB)",
        "versao": "800d",
        "tamanho": "2,33 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMUSB800d.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de porta virtual TM",
        "versao": "8.70f",
        "tamanho": "17,2 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMVirtualPortDriver870f.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "TM-T20III Utility",
        "versao": "1.00",
        "tamanho": "38,8 MB",
        "url": "https://ftp.epson.com/drivers/pos/TM-T20IIIUtility100.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Instalador de impressora TM (macOS)",
        "versao": "3.0.1",
        "tamanho": "63 KB",
        "url": "https://ftp.epson.com/drivers/pos/TMPrinterInstaller_300_n.dmg",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do usuário",
        "tamanho": "3,32 MB",
        "url": "https://files.support.epson.com/pdf/pos/bulk/tm-t20iii_ug_ww_03.pdf",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual técnico (referência)",
        "tamanho": "3,32 MB",
        "url": "https://files.support.epson.com/pdf/pos/bulk/tm-t20iii_trg_en_reva.pdf",
        "oficial": true
      }
    ],
    "maisUsada": 2
  },
  {
    "marca": "Epson",
    "familia": "TM-T20",
    "variacao": "TM-T20X",
    "modelo": "TM-T20X",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "TM-T20X Utility",
    "foto": "img/impressoras/epson-tm-t20x.webp",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-de-recibos/Epson-TM-T20X/s/SPT_C31CH26031",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora APD 6",
        "versao": "6.07R1",
        "tamanho": "22,9 MB",
        "url": "https://ftp.epson.com/latin/drivers/pos/APD_607R1_T20X_WM.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB TM (comunicação USB)",
        "versao": "800d",
        "tamanho": "2,33 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMUSB800d.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "TM-T20X Utility",
        "versao": "1.00",
        "tamanho": "16,7 MB",
        "url": "https://ftp.epson.com/latin/drivers/pos/TM-T20XUtility100.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "TM-T20X Utility (versão mais nova)",
        "versao": "1.10a",
        "tamanho": "19,2 MB",
        "url": "https://ftp.epson.com/marketing/peps_brazil/mar-2026/TM-T20XUtility110a.exe",
        "oficial": true
      }
    ],
    "recomendada": true,
    "maisUsada": 2
  },
  {
    "marca": "Epson",
    "familia": "TM-T20",
    "variacao": "TM-T20X II",
    "modelo": "TM-T20X-II",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "TM-T20X-II Utility",
    "foto": "img/impressoras/epson-tm-t20x.webp",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-de-recibos/Epson-TM-T20X-II/s/SPT_C31CL45011",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora (página oficial de suporte)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-de-recibos/Epson-TM-T20X-II/s/SPT_C31CL45011",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "TM-T20X-II Utility",
        "versao": "1.00",
        "tamanho": "17,6 MB",
        "url": "https://ftp.epson.com/marketing/peps_brazil/mar-2026/TM-T20X-IIUtility100.exe",
        "oficial": true
      }
    ],
    "recomendada": true,
    "maisUsada": 2
  },
  {
    "marca": "Epson",
    "familia": "TM-T88",
    "variacao": "TM-T88V",
    "modelo": "TM-T88V",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "O APD 5 serve para Windows 7 a 11. O APD 4 é só para equipamentos antigos.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-t%C3%A9rmicas/Epson-TM-T88V-Series/s/SPT_C31CA85011",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Advanced Printer Driver (APD) 5",
        "versao": "5.13",
        "tamanho": "71,07 MB",
        "url": "https://ftp.epson.com/drivers/pos/APD_513_T88V_EWM.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Advanced Printer Driver 4 (versão legada)",
        "versao": "4.59a",
        "tamanho": "83,66 MB",
        "url": "https://ftp.epson.com/drivers/pos/APD_459aEWM_e.exe",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Epson",
    "familia": "TM-T88",
    "variacao": "TM-T88VI",
    "modelo": "TM-T88VI",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Pacotes publicados pela Epson na página da linha TM-T88VI. Confira o código da sua impressora no site da Epson.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-OmniLink/Epson-TM-T88VI-Series/s/SPT_C31CE94061",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Advanced Printer Driver (APD) 6",
        "versao": "6.07R1",
        "tamanho": "29,80 MB",
        "url": "https://ftp.epson.com/drivers/pos/APD_607R1_T88VI_WM_e.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Advanced Printer Driver (APD) 5",
        "versao": "5.13R1",
        "tamanho": "71,56 MB",
        "url": "https://ftp.epson.com/drivers/pos/APD_513R1_T88VI_EWM_e.exe",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Bematech",
    "familia": "MP-4200",
    "variacao": "TH",
    "modelo": "MP-4200 TH",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "Bematech User Software",
    "foto": "",
    "obs": "Downloads oficiais, publicados pela Elgin (fabricante atual da linha Bematech).",
    "pagina": "https://github.com/ElginDeveloperCommunity/Impressoras/tree/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Spooler Bematech (64 bits)",
        "versao": "5.0.0.4",
        "tamanho": "12,5 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/Spooler_Bematech/BematechSpoolerDrivers_x64_v5.0.0.4.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Spooler Bematech (32 bits)",
        "versao": "5.0.0.4",
        "tamanho": "12,4 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/Spooler_Bematech/BematechSpoolerDrivers_x86_v5.0.0.4.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB/COM",
        "versao": "4.0.2",
        "tamanho": "3,22 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/Bematech_USBCOM_v4.0.2_2018-09-05.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Bematech User Software (64 bits)",
        "versao": "2.10.05",
        "tamanho": "17,6 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Utilit%C3%A1rios/Bematech%20User%20Software%20v2.10.05%20for%2064%20bits.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Debian/Ubuntu (64 bits, .deb)",
        "versao": "2.0.0.5",
        "tamanho": "54 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/linux_bematech-driver_2.0.0.5-0_amd64.deb",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Debian/Ubuntu (32 bits, .deb)",
        "versao": "2.0.0.5",
        "tamanho": "54 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/linux_bematech-driver_2.0.0.5-0_i386.deb",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do usuário",
        "tamanho": "1,49 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Documenta%C3%A7%C3%A3o/Manual%20do%20Usu%C3%A1rio%20-%20MP-4200%20TH.pdf",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Guia rápido",
        "tamanho": "257 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Documenta%C3%A7%C3%A3o/Guia%20R%C3%A1pido%20-%20MP-4200%20TH.pdf",
        "oficial": true
      }
    ],
    "maisUsada": 3
  },
  {
    "marca": "Bematech",
    "familia": "MP-4200",
    "variacao": "ADV",
    "modelo": "MP-4200 ADV",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "Bematech User Software",
    "foto": "",
    "obs": "O MP-4200 ADV usa os mesmos driver, utilitário e firmware do TH (a Elgin publica os dois juntos).",
    "pagina": "https://github.com/ElginDeveloperCommunity/Impressoras/tree/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Spooler Bematech (64 bits)",
        "versao": "5.0.0.4",
        "tamanho": "12,5 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/Spooler_Bematech/BematechSpoolerDrivers_x64_v5.0.0.4.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Spooler Bematech (32 bits)",
        "versao": "5.0.0.4",
        "tamanho": "12,4 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/Spooler_Bematech/BematechSpoolerDrivers_x86_v5.0.0.4.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB/COM",
        "versao": "4.0.2",
        "tamanho": "3,22 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/Bematech_USBCOM_v4.0.2_2018-09-05.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Bematech User Software (64 bits)",
        "versao": "2.10.05",
        "tamanho": "17,6 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Utilit%C3%A1rios/Bematech%20User%20Software%20v2.10.05%20for%2064%20bits.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Debian/Ubuntu (64 bits, .deb)",
        "versao": "2.0.0.5",
        "tamanho": "54 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/linux_bematech-driver_2.0.0.5-0_amd64.deb",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Debian/Ubuntu (32 bits, .deb)",
        "versao": "2.0.0.5",
        "tamanho": "54 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Drivers/linux_bematech-driver_2.0.0.5-0_i386.deb",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do usuário",
        "tamanho": "1,49 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Documenta%C3%A7%C3%A3o/Manual%20do%20Usu%C3%A1rio%20-%20MP-4200%20TH.pdf",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Guia rápido",
        "tamanho": "257 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20TH/Documenta%C3%A7%C3%A3o/Guia%20R%C3%A1pido%20-%20MP-4200%20TH.pdf",
        "oficial": true
      }
    ],
    "maisUsada": 3
  },
  {
    "marca": "Bematech",
    "familia": "MP-4200",
    "variacao": "HS",
    "modelo": "MP-4200 HS",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "ELGIN Utility",
    "foto": "img/impressoras/elgin-mp-4200-hs.webp",
    "obs": "Downloads oficiais, publicados pela Elgin (fabricante atual da linha Bematech).",
    "pagina": "https://www.elgin.com.br/impressora-termica-nao-fiscal-mp-4200-hs/p",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora",
        "versao": "1.8.0",
        "tamanho": "1,48 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20HS/Drivers/Windows/ELGIN%20Printer%20Driver_v-1.8.0.exe.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "ELGIN Utility",
        "versao": "1.2.2.37",
        "tamanho": "7,80 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20HS/Utilit%C3%A1rios/ELGINUtilitySetup%20V1.2.2.37.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Linux",
        "versao": "1.2.5",
        "tamanho": "85 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Bematech/MP-4200%20HS/Drivers/linux/elgin_linux_driver_v1.2.5.zip",
        "oficial": true
      }
    ],
    "maisUsada": 3
  },
  {
    "marca": "Elgin",
    "familia": "i7",
    "variacao": "i7",
    "modelo": "i7",
    "largura": 80,
    "conexao": [
      "USB",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "O i7 original não tem driver publicado pelo fabricante. Este arquivo vem de um acervo de terceiros.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Elgin i7 / i9 para Windows",
        "versao": "1.7.3",
        "tamanho": "1,54 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Elgin/Elgin_i7_i9_v1.7.3.exe",
        "oficial": false
      }
    ],
    "maisUsada": 5
  },
  {
    "marca": "Elgin",
    "familia": "i7",
    "variacao": "i7 Plus",
    "modelo": "i7 Plus",
    "largura": 80,
    "conexao": [
      "USB",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "Elgin i7 Plus/i8 Utility",
    "foto": "img/impressoras/elgin-i7-plus.webp",
    "obs": "Downloads do modelo i7 Plus. Para o i7 original, fale com o suporte.",
    "pagina": "https://www.elgin.com.br/Produtos/automacao/impressoras-nao-fiscais-termicas/impressora-termica-i7-plus",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora",
        "tamanho": "3,09 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i7%20Plus/Drivers/i7%20Plus%20-%20Driver%20Windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Serial Virtual (COM)",
        "tamanho": "24,6 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i7%20Plus/Drivers/i7%20Plus%20-%20Driver%20Serial%20Virtual%20COM.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Elgin i7 Plus / i8 Utility",
        "versao": "3.2",
        "tamanho": "2,11 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i7%20Plus/Utilit%C3%A1rios/Elgin_i7%20Plus_i8_Utility_V3.2.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Linux",
        "tamanho": "120 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i7%20Plus/Drivers/i7%20Plus%20-%20Driver%20Linux.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do usuário",
        "versao": "Rev. 1",
        "tamanho": "414 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i7%20Plus/Documenta%C3%A7%C3%A3o/i7%20Plus%20-%20Manual_Usu%C3%A1rio_Rev1.pdf",
        "oficial": true
      }
    ],
    "maisUsada": 5
  },
  {
    "marca": "Elgin",
    "familia": "i8",
    "variacao": "i8",
    "modelo": "i8",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Downloads do Centro de Downloads da Elgin.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Elgin i8 para Windows",
        "versao": "7.17",
        "tamanho": "2,49 MB",
        "url": "https://content.elgin.com.br/assets/arquivos/portal-apoio-novo/832279d0-eb75-4e5a-822e-5f380fc91afb.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Elgin i8 para Linux (CUPS)",
        "tamanho": "24 KB",
        "url": "https://content.elgin.com.br/assets/arquivos/portal-apoio-novo/344900fb-b92e-4ff5-9cc1-23c0d6051e18.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Elgin i8 para macOS",
        "tamanho": "13 KB",
        "url": "https://content.elgin.com.br/assets/arquivos/portal-apoio-novo/9ddae63f-8be2-4374-8f78-15f497b63b30.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Elgin",
    "familia": "i9",
    "variacao": "i9",
    "modelo": "i9",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "ELGIN Utility",
    "foto": "",
    "pagina": "https://github.com/ElginDeveloperCommunity/Impressoras/tree/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora",
        "versao": "1.8.0",
        "tamanho": "1,48 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9/Drivers/ELGIN%20i9%20Printer%20Driver_v-1.8.0.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Serial Virtual (Windows 11)",
        "tamanho": "9,14 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9/Drivers/Driver%20i9%20Serial%20Virtual%20Windows%2011.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "ELGIN Utility",
        "versao": "1.2.2.37",
        "tamanho": "7,80 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9/Utilit%C3%A1rios/ELGINUtilitySetup%20V1.2.2.37.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Linux",
        "versao": "1.2.5",
        "tamanho": "85 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9/Drivers/Elgin_Linux_Driver_v1.2.5.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Linux ARM (armhf)",
        "versao": "1.3.0",
        "tamanho": "32 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9/Drivers/Elgin_i9_armhf_v1.3.0.rar",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do usuário (i9 Full)",
        "versao": "Rev. 1.0",
        "tamanho": "3,21 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9/Documenta%C3%A7%C3%A3o/Manual%20do%20usu%C3%A1rio%20i9%20Full%20-%20Rev.1.0.pdf",
        "oficial": true
      }
    ],
    "recomendada": true,
    "maisUsada": 1
  },
  {
    "marca": "Elgin",
    "familia": "i9",
    "variacao": "i9 Full",
    "modelo": "i9 Full",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "Elgin i9 Utility",
    "foto": "",
    "obs": "Primeira versão da i9 Full. Se a sua é a i9 Full 2, escolha a variação ao lado.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Elgin i9 Full para Windows",
        "versao": "1.7.6",
        "tamanho": "1,47 MB",
        "url": "https://content.elgin.com.br/assets/arquivos/portal-apoio-novo/3ab4f0ad-a3ca-4f2d-8e61-7b05b933b6bd.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Elgin i9 Full para Linux (CUPS)",
        "versao": "1.2.3",
        "tamanho": "504 KB",
        "url": "https://content.elgin.com.br/assets/arquivos/portal-apoio-novo/15d35782-b16b-40ad-bd0b-a899138e1402.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Elgin i9 Utility",
        "versao": "1.2.2.31",
        "tamanho": "6,24 MB",
        "url": "https://content.elgin.com.br/assets/arquivos/portal-apoio-novo/885346b2-bf9c-4ef9-97ce-45a13b49a190.zip",
        "oficial": true
      }
    ],
    "recomendada": true,
    "maisUsada": 1
  },
  {
    "marca": "Elgin",
    "familia": "i9",
    "variacao": "i9 Full 2",
    "modelo": "i9 Full 2",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "ELGIN Utility",
    "foto": "img/impressoras/elgin-i9-full-2.webp",
    "pagina": "https://www.elgin.com.br/impressora-termica-cupom-i9-full-2/p",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressora",
        "versao": "1.8.2",
        "tamanho": "1,57 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9%20FULL%202/driver/win%201.8.2.exe",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "ELGIN Utility",
        "versao": "1.2.2.41",
        "tamanho": "7,85 MB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9%20FULL%202/utility/Utility%201.2.2.41.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Linux",
        "versao": "1.2.6",
        "tamanho": "77 KB",
        "url": "https://raw.githubusercontent.com/ElginDeveloperCommunity/Impressoras/master/Impressoras%20N%C3%A3o%20Fiscais/Utilit%C3%A1rios%20Elgin/i9%20FULL%202/driver/elgin_linux_driver_v1.2.6.zip",
        "oficial": true
      }
    ],
    "recomendada": true,
    "maisUsada": 1
  },
  {
    "marca": "Tanca",
    "familia": "TP-620+ e TP-650",
    "variacao": "TP-620+",
    "modelo": "TP-620+",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "Printer Tools TP-620",
    "foto": "",
    "pagina": "https://www.tanca.com.br/drivers.php",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de impressão TP-620+",
        "tamanho": "4,45 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-620%2B/Driver_Windows.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Printer Tools TP-620",
        "tamanho": "4,11 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-620%2B/PrinterTools_TP620.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do usuário TP-620+",
        "tamanho": "2,38 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-620%2B/Manual_Usuario_TP620%2B.pdf",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Tanca",
    "familia": "TP-620+ e TP-650",
    "variacao": "TP-650",
    "modelo": "TP-650",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "Utilitários TP-650",
    "foto": "",
    "pagina": "https://www.tanca.com.br/drivers.php",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários TP-650",
        "tamanho": "15,91 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-650/Driver_Utilitarios_TP-650.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver USB Serial (Prolific)",
        "tamanho": "10,73 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-650/Driver_USB_Serial_TP650.zip",
        "oficial": true
      },
      {
        "tipo": "sdk",
        "so": "Windows",
        "rotulo": "Biblioteca DLL de integração",
        "tamanho": "6,99 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-650/DLL_Windows_TP_650.zip",
        "oficial": true
      },
      {
        "tipo": "sdk",
        "so": "Linux",
        "rotulo": "Biblioteca de integração para Linux",
        "tamanho": "474 KB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TP-650/LIB_LINUX_TP_650.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Sweda",
    "familia": "SI-300",
    "variacao": "SI-300",
    "modelo": "SI-300",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "SI-300 Tool",
    "foto": "",
    "obs": "A conexão depende do modelo (S, L, E ou W).",
    "pagina": "https://sweda.com.br/acervo-tecnico/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver SI-300 (S, L, E e W)",
        "tamanho": "13,20 MB",
        "url": "https://sweda.com.br/downloads/509_si_3aal.exe",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver para Linux 32 bits",
        "versao": "0.1.0.0",
        "tamanho": "1,68 MB",
        "url": "https://sweda.com.br/downloads/SWEDA_Receipt_Printer_Driver-0.1.0.0-Linux-x86-Install.tar",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver para Linux 64 bits",
        "versao": "0.1.0.0",
        "tamanho": "7,45 MB",
        "url": "https://sweda.com.br/downloads/SWEDA_Receipt_Printer_Driver-0.1.0.0-Linux-x64-Install.tar",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "SI-300 Tool",
        "versao": "2.03",
        "tamanho": "7,18 MB",
        "url": "https://sweda.com.br/downloads/SI-300_Tool_Ver_2.03.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Control iD",
    "familia": "Print iD",
    "variacao": "Print iD",
    "modelo": "Print iD",
    "largura": 80,
    "conexao": [
      "USB",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "CID Net Explorer",
    "foto": "",
    "obs": "Aceita bobina de 80 mm e de 58 mm (com adaptador).",
    "pagina": "https://www.controlid.com.br/automacao-comercial/printid/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Print iD para Windows",
        "tamanho": "2,04 MB",
        "url": "https://www.controlid.com.br/printid/DriverPrintiD_Windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver CUPS para Ubuntu 16.04 x64 (.deb)",
        "versao": "1.2.2",
        "tamanho": "9,0 KB",
        "url": "https://www.controlid.com.br/printid/driver_cups_ubuntu_16_04_x64.php",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "CID Net Explorer (configuração de rede)",
        "tamanho": "11 KB",
        "url": "https://www.controlid.com.br/printid/controlid_net_explorer.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Dimep",
    "familia": "D-Print",
    "variacao": "D-Print Dual",
    "modelo": "D-Print Dual",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.dimep.com.br/produto/automacao-comercial/d-print-dual/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Pacote de drivers D-Print Dual (inclui porta virtual COM)",
        "tamanho": "51,60 MB",
        "url": "https://www.dimep.com.br/wp-content/uploads/2025/12/D_PrintDual_Windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver CUPS para Linux",
        "versao": "1.2.2",
        "tamanho": "1,70 MB",
        "url": "https://www.dimep.com.br/wp-content/uploads/2025/12/D_PrintDual_Linux.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Rongta",
    "familia": "RP58 e RP80",
    "variacao": "RP58",
    "modelo": "Rongta RP58",
    "largura": 58,
    "conexao": [
      "USB",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "PrinterTool",
    "foto": "",
    "obs": "Pacote oficial da Rongta, que também funciona em várias impressoras de marca branca de 58 mm.",
    "pagina": "https://www.rongtatech.com/driver-download/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Rongta para Windows (inclui PrinterTool 2.59)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Rongta 58 mm para macOS",
        "tamanho": "2,02 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/58mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Rongta para Linux",
        "tamanho": "1,82 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/thermal-printer-driver-linux.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Rongta",
    "familia": "RP58 e RP80",
    "variacao": "RP80",
    "modelo": "Rongta RP80",
    "largura": 80,
    "conexao": [
      "USB",
      "Rede"
    ],
    "portatil": false,
    "utilitario": "PrinterTool",
    "foto": "",
    "obs": "Pacote oficial da Rongta, que também funciona em várias impressoras de marca branca de 80 mm.",
    "pagina": "https://www.rongtatech.com/driver-download/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Rongta para Windows (inclui PrinterTool 2.59)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Rongta 80 mm para macOS",
        "tamanho": "2,15 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260303/80mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Rongta para Linux",
        "tamanho": "1,82 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/thermal-printer-driver-linux.zip",
        "oficial": true
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky",
    "variacao": "58 mm",
    "modelo": "Goldensky série 58 mm",
    "largura": 58,
    "conexao": [
      "USB",
      "Bluetooth"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Modelo GS-JP58H-BT. Os portáteis com bateria (GS-MTP5, MTP5S, MTP260, MTP265 e PT260) estão no card Goldensky portáteis. O GS-P1 usa aplicativo (iPrint) e não tem driver para computador.",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 58 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1JwXE-exwuv2OAZNL6ahIFMU5hn5FTqwB",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 58 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1eoHNXRGuUd3I1kAkSQEEcPaH0ukD5Cf5",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky",
    "variacao": "80 mm",
    "modelo": "Goldensky série 80 mm",
    "largura": 80,
    "conexao": [
      "USB",
      "Rede",
      "Bluetooth"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Modelos GS-T80E, GS-T80EBT, GS-T80C, GS-T80C-WF, GS-FJ80-UE/UB, GS-ZJ80M-UB e GS-JP80-UE/UB. O portátil GS-MTP8 está no card Goldensky portáteis.",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 80 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1VbWyXVRECnFR4DM3vBwwxFqVF761Cqlx",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 80 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/16N5u3B6aqa-mBxs8BJTEiNwRgFxLF50-",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Knup",
    "familia": "KP-1025",
    "variacao": "KP-1025",
    "modelo": "KP-1025",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Lítio 1500 mAh (7,4 V)",
    "foto": "",
    "obs": "Impressora portátil Bluetooth de 58 mm, com bateria de lítio de 1500 mAh e carregador. A Knup não publica driver: no celular, pareie por Bluetooth; no computador, use um driver genérico de 58 mm.",
    "pagina": "https://knup.com.br/produto/kp-1025/",
    "recomendada": true,
    "maisUsada": 4,
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver genérico 58 mm (pacote Rongta)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": false
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver genérico 58 mm para macOS (Rongta)",
        "tamanho": "2,02 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/58mm-thermal-printer-driver-mac.zip",
        "oficial": false
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver genérico para Linux (Rongta)",
        "tamanho": "1,82 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/thermal-printer-driver-linux.zip",
        "oficial": false
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Elgin",
    "familia": "VOX",
    "variacao": "VOX / VOX+",
    "modelo": "Elgin VOX",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Driver legado, sem publicação atual no site do fabricante.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Elgin VOX / VOX+ (legado)",
        "versao": "1.25.0.0",
        "tamanho": "4,22 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Elgin/Elgin_VOX_V1.25.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Bematech",
    "familia": "MP-100S, MP-2500 e MP-4000",
    "variacao": "MP-100S TH",
    "modelo": "MP-100S TH",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Linha antiga da Bematech, sem driver atual no site do fabricante. Este spooler vem de um acervo de terceiros.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Bematech Spooler Drivers 32 bits",
        "versao": "4.4.0.3",
        "tamanho": "1,70 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Bematech/BematechSpoolerDrivers_x86_v4.4.0.3.exe",
        "oficial": false
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Bematech Spooler Drivers 64 bits",
        "versao": "4.4.0.3",
        "tamanho": "1,79 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Bematech/BematechSpoolerDrivers_x64_v4.4.0.3.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Bematech",
    "familia": "MP-100S, MP-2500 e MP-4000",
    "variacao": "MP-2500 TH",
    "modelo": "MP-2500 TH",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Linha antiga da Bematech, sem driver atual no site do fabricante. Este spooler vem de um acervo de terceiros.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Bematech Spooler Drivers 32 bits",
        "versao": "4.4.0.3",
        "tamanho": "1,70 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Bematech/BematechSpoolerDrivers_x86_v4.4.0.3.exe",
        "oficial": false
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Bematech Spooler Drivers 64 bits",
        "versao": "4.4.0.3",
        "tamanho": "1,79 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Bematech/BematechSpoolerDrivers_x64_v4.4.0.3.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Bematech",
    "familia": "MP-100S, MP-2500 e MP-4000",
    "variacao": "MP-4000 TH",
    "modelo": "MP-4000 TH",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Linha antiga da Bematech, sem driver atual no site do fabricante. Este spooler vem de um acervo de terceiros.",
    "pagina": "https://www.elgin.com.br/download-center",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Bematech Spooler Drivers 32 bits",
        "versao": "4.4.0.3",
        "tamanho": "1,70 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Bematech/BematechSpoolerDrivers_x86_v4.4.0.3.exe",
        "oficial": false
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Bematech Spooler Drivers 64 bits",
        "versao": "4.4.0.3",
        "tamanho": "1,79 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Bematech/BematechSpoolerDrivers_x64_v4.4.0.3.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Daruma",
    "familia": "DR700 e DR800",
    "variacao": "DR700",
    "modelo": "Daruma DR700",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Este é o spooler de impressão. A DR700/DR800 pode precisar também do driver da interface USB, que a Daruma não publica mais.",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Spooler Daruma DR700",
        "versao": "4.0.3.1",
        "tamanho": "872 KB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Daruma/Daruma_700_Spooler_Driver_v4.0.3.1.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Daruma",
    "familia": "DR700 e DR800",
    "variacao": "DR800",
    "modelo": "Daruma DR800",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Este é o spooler de impressão. A DR700/DR800 pode precisar também do driver da interface USB, que a Daruma não publica mais.",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Spooler Daruma DR800",
        "versao": "2.0.1.7",
        "tamanho": "834 KB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Daruma/Daruma_800_Spooler_Driver_v2.0.1.7.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Jetway",
    "familia": "JP-800",
    "variacao": "JP-800",
    "modelo": "JP-800",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Driver legado de acervo de terceiros. A página do fabricante tem o produto e o suporte.",
    "pagina": "https://www.jetway.com.br/impressora-jp-800-jetway/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Jetway JP-800",
        "versao": "2.38E",
        "tamanho": "2,95 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Jetway/Jetway_JP-800_PrinterDriver_v2.38E.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Perto",
    "familia": "PertoPrinter",
    "variacao": "PertoPrinter",
    "modelo": "PertoPrinter",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Driver legado de acervo de terceiros.",
    "pagina": "https://www.perto.com.br/produtos/impressora-nao-fiscal/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver PertoPrinter (legado)",
        "versao": "2.5",
        "tamanho": "9,91 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/PertoPrinter/PertoPrinter_Driver_2.5.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Diebold",
    "familia": "IM e Mecaf Perfecta",
    "variacao": "IM / Perfecta",
    "modelo": "Diebold IM e Mecaf Perfecta",
    "largura": 80,
    "conexao": [
      "USB",
      "Serial"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Pacote antigo reunido por terceiros. Confira o modelo exato da sua impressora.",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Pacote Diebold / Procomp (IM903TT, IM693H, IM453HU, IM433TD, IM113ID, IM402TD, Perfecta)",
        "versao": "1.34",
        "tamanho": "6,71 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/Diebold/Diebold_Printers_v1.34_drv_1.9.exe",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Urano",
    "familia": "Urano",
    "variacao": "ZK50",
    "modelo": "Urano ZK50",
    "largura": 58,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.urano.com.br/softwares-e-drivers/impressoras-nao-fiscais/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Urano ZK50",
        "tamanho": "2,91 MB",
        "url": "https://www.urano.com.br/media/wysiwyg/softwares/Driver%20da%20impressora%20ZK50.zip",
        "oficial": true
      }
    ],
    "obs": "Largura de bobina conforme a numeração do modelo: confira no seu equipamento. Os modelos ZK150ES, ZP250E/U, ZK300, ZP300, ZP200, ZP500 e ZP102 estão na página da Urano."
  },
  {
    "marca": "Urano",
    "familia": "Urano",
    "variacao": "ZP50 BT",
    "modelo": "Urano ZP50 BT",
    "largura": 58,
    "conexao": [
      "USB",
      "Bluetooth"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.urano.com.br/softwares-e-drivers/impressoras-nao-fiscais/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Urano ZP50 BT",
        "tamanho": "3,30 MB",
        "url": "https://www.urano.com.br/media/wysiwyg/softwares/Driver%20da%20Impressora%20ZP50%20BT.zip",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ],
    "obs": "Largura de bobina conforme a numeração do modelo: confira no seu equipamento. Os modelos ZK150ES, ZP250E/U, ZK300, ZP300, ZP200, ZP500 e ZP102 estão na página da Urano."
  },
  {
    "marca": "Urano",
    "familia": "Urano",
    "variacao": "ZP80 BT / ZP220 BT",
    "modelo": "Urano ZP80 BT / ZP220 BT",
    "largura": 80,
    "conexao": [
      "USB",
      "Bluetooth"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.urano.com.br/softwares-e-drivers/impressoras-nao-fiscais/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Urano ZP80 BT / ZP220 BT",
        "tamanho": "10,11 MB",
        "url": "https://www.urano.com.br/media/wysiwyg/softwares/Driver%20da%20Impressora%20ZP80-BT%20-%20ZP220-BT.zip",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ],
    "obs": "Largura de bobina conforme a numeração do modelo: confira no seu equipamento. Os modelos ZK150ES, ZP250E/U, ZK300, ZP300, ZP200, ZP500 e ZP102 estão na página da Urano."
  },
  {
    "marca": "Urano",
    "familia": "Urano",
    "variacao": "ZP250 US-QR",
    "modelo": "Urano ZP250 US-QR",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.urano.com.br/softwares-e-drivers/impressoras-nao-fiscais/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Urano ZP250 US-QR",
        "tamanho": "21,92 MB",
        "url": "https://www.urano.com.br/media/wysiwyg/softwares/Driver%20da%20Impressora%20ZP250%20US-QR.zip",
        "oficial": true
      }
    ],
    "obs": "Largura de bobina conforme a numeração do modelo: confira no seu equipamento. Os modelos ZK150ES, ZP250E/U, ZK300, ZP300, ZP200, ZP500 e ZP102 estão na página da Urano."
  },
  {
    "marca": "Urano",
    "familia": "Urano",
    "variacao": "ZP250 USE",
    "modelo": "Urano ZP250 USE",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.urano.com.br/softwares-e-drivers/impressoras-nao-fiscais/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Urano ZP250 USE",
        "tamanho": "53,06 MB",
        "url": "https://www.urano.com.br/media/wysiwyg/softwares/Driver%20da%20impressora%20ZP250-USE.zip",
        "oficial": true
      }
    ],
    "obs": "Largura de bobina conforme a numeração do modelo: confira no seu equipamento. Os modelos ZK150ES, ZP250E/U, ZK300, ZP300, ZP200, ZP500 e ZP102 estão na página da Urano."
  },
  {
    "marca": "Gertec",
    "familia": "G250",
    "variacao": "G250 / G250W",
    "modelo": "Gertec G250",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://www.gertec.com.br/download-center/?categoria=automacao-comercial&subcategoria=impressora",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Downloads da Gertec (driver spooler VCOM, utilitário e manuais)",
        "url": "https://www.gertec.com.br/download-center/?categoria=automacao-comercial&subcategoria=impressora",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Todos",
        "rotulo": "Lista de arquivos montada por uma assistência técnica",
        "url": "https://downloads.astecinformatica.com.br/gertec/g250/",
        "oficial": false,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Nitere",
    "familia": "Q3X",
    "variacao": "Q3X",
    "modelo": "Nitere Q3X",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Mesmo modelo da Custom Q3X. O pacote vem do site BZtech, que reúne drivers de terceiros.",
    "pagina": "https://www.bztech.com.br/downloads/driver-custom-nitere-q3x",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Pacote BZtech: driver Windows, CUPS Linux e manuais",
        "tamanho": "7,11 MB",
        "url": "https://www.bztech.com.br/arquivos/driver-custom-nitere-q3x.zip",
        "oficial": false
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Pacote BZtech: driver Windows, CUPS Linux e manuais",
        "tamanho": "7,11 MB",
        "url": "https://www.bztech.com.br/arquivos/driver-custom-nitere-q3x.zip",
        "oficial": false
      }
    ]
  },
  {
    "marca": "Zebra",
    "familia": "ZQ300",
    "variacao": "ZQ310",
    "modelo": "Zebra ZQ310",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "Wi-Fi",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion (série Plus: 2.280 mAh)",
    "foto": "",
    "obs": "A série ZQ300 original foi descontinuada (suporte encerrado em 31/12/2025) e a ZQ300 Plus a substitui. Usa linguagens da Zebra (ZPL/CPCL), não ESC/POS comum. Siga as instruções da Zebra para o driver.",
    "pagina": "https://www.zebra.com/us/en/support-downloads/printers/mobile/zq300-plus.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários Zebra (página oficial)",
        "url": "https://www.zebra.com/us/en/support-downloads/printers/mobile/zq300-plus.html",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Zebra",
    "familia": "ZQ300",
    "variacao": "ZQ320",
    "modelo": "Zebra ZQ320",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "Wi-Fi",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion (série Plus: 2.280 mAh)",
    "foto": "",
    "obs": "A série ZQ300 original foi descontinuada (suporte encerrado em 31/12/2025) e a ZQ300 Plus a substitui. Usa linguagens da Zebra (ZPL/CPCL), não ESC/POS comum. Siga as instruções da Zebra para o driver.",
    "pagina": "https://www.zebra.com/us/en/support-downloads/printers/mobile/zq320.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários Zebra (página oficial)",
        "url": "https://www.zebra.com/us/en/support-downloads/printers/mobile/zq320.html",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Bixolon",
    "familia": "SRP-350III",
    "variacao": "SRP-350III",
    "modelo": "Bixolon SRP-350III",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Fabricante internacional: o download é feito na página oficial, que também tem Linux e macOS quando existem.",
    "pagina": "https://www.bixolon.com/download_view.php",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários Bixolon (página oficial do fabricante)",
        "url": "https://www.bixolon.com/download_view.php",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Star Micronics",
    "familia": "TSP100IV",
    "variacao": "TSP100IV",
    "modelo": "Star Micronics TSP100IV",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Fabricante internacional: o download é feito na página oficial, que também tem Linux e macOS quando existem.",
    "pagina": "https://starmicronics.com/support/products/tsp100iv-support-page/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários Star Micronics (página oficial do fabricante)",
        "url": "https://starmicronics.com/support/products/tsp100iv-support-page/",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Citizen",
    "familia": "CT-S310II",
    "variacao": "CT-S310II",
    "modelo": "Citizen CT-S310II",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Fabricante internacional: o download é feito na página oficial, que também tem Linux e macOS quando existem.",
    "pagina": "https://www.citizen-systems.com/us/support/drivers-and-tools/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários Citizen (página oficial do fabricante)",
        "url": "https://www.citizen-systems.com/us/support/drivers-and-tools/",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Posiflex",
    "familia": "PP-8800",
    "variacao": "PP-8800",
    "modelo": "Posiflex PP-8800",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Fabricante internacional: o download é feito na página oficial, que também tem Linux e macOS quando existem.",
    "pagina": "https://www.posiflex.com/document/driver-and-utility/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários Posiflex (página oficial do fabricante)",
        "url": "https://www.posiflex.com/document/driver-and-utility/",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Feasso",
    "familia": "F-IMTER02",
    "variacao": "F-IMTER02",
    "modelo": "F-IMTER02",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "pagina": "https://feasso.com.br/f-imter02-impressora-termica-de-recibos-tickets-e-cupons",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver e manual F-IMTER02 (página oficial)",
        "url": "https://feasso.com.br/f-imter02-impressora-termica-de-recibos-tickets-e-cupons",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky portáteis",
    "variacao": "GS-MTP5",
    "modelo": "Goldensky GS-MTP5",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion 1.500 mAh (7,4 V) · até 3 h",
    "foto": "",
    "obs": "Bluetooth 2.0 (SPP), ESC/POS, área de impressão de 48 mm.",
    "pagina": "https://www.goldensky.com.br/informatica-eletronicos/mini-impressora-portatil-bluetooth-termica-58mm-android-ios",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 58 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1JwXE-exwuv2OAZNL6ahIFMU5hn5FTqwB",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 58 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1eoHNXRGuUd3I1kAkSQEEcPaH0ukD5Cf5",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky portáteis",
    "variacao": "GS-MTP5S",
    "modelo": "Goldensky GS-MTP5S",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion (7,4 V)",
    "foto": "",
    "obs": "Bluetooth 2.0 (SPP) e ESC/POS.",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 58 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1JwXE-exwuv2OAZNL6ahIFMU5hn5FTqwB",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 58 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1eoHNXRGuUd3I1kAkSQEEcPaH0ukD5Cf5",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky portáteis",
    "variacao": "GS-MTP260",
    "modelo": "Goldensky GS-MTP260",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion 1.500 mAh (7,4 V) · até 3 h",
    "foto": "",
    "obs": "Imprime cupons e etiquetas adesivas, ESC/POS.",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 58 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1JwXE-exwuv2OAZNL6ahIFMU5hn5FTqwB",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 58 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1eoHNXRGuUd3I1kAkSQEEcPaH0ukD5Cf5",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky portáteis",
    "variacao": "GS-MTP265",
    "modelo": "Goldensky GS-MTP265",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion 1.500 mAh",
    "foto": "",
    "obs": "Imprime cupons e etiquetas. No computador, só imprime cupons.",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 58 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1JwXE-exwuv2OAZNL6ahIFMU5hn5FTqwB",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 58 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1eoHNXRGuUd3I1kAkSQEEcPaH0ukD5Cf5",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky portáteis",
    "variacao": "GS-PT260",
    "modelo": "Goldensky GS-PT260",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": true,
    "foto": "",
    "obs": "No computador, só imprime cupons (etiquetas não são suportadas).",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 58 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1JwXE-exwuv2OAZNL6ahIFMU5hn5FTqwB",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 58 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1eoHNXRGuUd3I1kAkSQEEcPaH0ukD5Cf5",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Goldensky",
    "familia": "Goldensky portáteis",
    "variacao": "GS-MTP8",
    "modelo": "Goldensky GS-MTP8",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": true,
    "foto": "",
    "obs": "Portátil de 80 mm, ESC/POS.",
    "pagina": "https://www.goldensky.com.br/drivers",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Goldensky 80 mm (pasta oficial no Google Drive)",
        "url": "https://drive.google.com/drive/folders/1VbWyXVRECnFR4DM3vBwwxFqVF761Cqlx",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Goldensky 80 mm para macOS (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/16N5u3B6aqa-mBxs8BJTEiNwRgFxLF50-",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver Goldensky 58/80 mm para Linux (pasta oficial)",
        "url": "https://drive.google.com/drive/folders/1QVjznfssgqK5lQlLLJ6s1QkEQtQ-a9cm",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Tanca",
    "familia": "TMP-500",
    "variacao": "TMP-500",
    "modelo": "TMP-500",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "Utilitários TMP-500",
    "bateria": "Removível 1.600 mAh · até 5 h",
    "foto": "",
    "obs": "ESC/POS, bateria removível e homologação Anatel.",
    "pagina": "https://www.tanca.com.br/drivers.php",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitários TMP-500",
        "tamanho": "19,29 MB",
        "url": "https://www.tanca.com.br/assets/conteudo/drivers/TMP-500/Driver_Utilitarios_TMP-500.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Ficha técnica TMP-500",
        "tamanho": "94 KB",
        "url": "https://tanca.com.br/assets/conteudo/uploads/tmp500v031222compressed638f46a63974e.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Rongta",
    "familia": "RPP portáteis",
    "variacao": "RPP200",
    "modelo": "Rongta RPP200",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "Rongta Printer Tool",
    "bateria": "Li-ion 1.600 mAh · até 3 h",
    "foto": "",
    "obs": "Bluetooth 4.0/BLE e ESC/POS.",
    "pagina": "https://www.rongtatech.com/pt/rpp200-58mm-bluetooth-android-mobile-printer-thermal-mini_p30.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver da série móvel Rongta (Windows)",
        "tamanho": "24,58 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260226/2-mobile-printer-series-driver-cd.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver térmico Rongta para Windows (inclui PrinterTool)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Rongta 58 mm para macOS",
        "tamanho": "2,02 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/58mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Rongta Printer Tool",
        "versao": "2.63.0",
        "tamanho": "2,69 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/rongtaprintertool_v2-63-0.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual da série móvel 58 mm",
        "versao": "1.2",
        "tamanho": "10,83 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260226/58mm-mobile-printer-series-user-manual_v1-2_en.pdf",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do RPP200",
        "versao": "1.1",
        "tamanho": "5,30 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251121/rpp200-user-manual_v1-1_en.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Rongta",
    "familia": "RPP portáteis",
    "variacao": "RPP02N",
    "modelo": "Rongta RPP02N",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "Rongta Printer Tool",
    "bateria": "Li-ion 1.600 mAh",
    "foto": "",
    "obs": "ESC/POS. O mesmo pacote atende RPP02, 02A, 02B, 02C, 02D, 02N-A, RPP210 e RPP210A.",
    "pagina": "https://www.rongtatech.com/pt/rpp02n-58mm-thermal-mobile-printer-mini_p32.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver da série móvel Rongta (Windows)",
        "tamanho": "24,58 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260226/2-mobile-printer-series-driver-cd.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver térmico Rongta para Windows (inclui PrinterTool)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Rongta 58 mm para macOS",
        "tamanho": "2,02 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/58mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Rongta Printer Tool",
        "versao": "2.63.0",
        "tamanho": "2,69 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/rongtaprintertool_v2-63-0.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual da série móvel 58 mm",
        "versao": "1.2",
        "tamanho": "10,83 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260226/58mm-mobile-printer-series-user-manual_v1-2_en.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Rongta",
    "familia": "RPP portáteis",
    "variacao": "RPP300",
    "modelo": "Rongta RPP300",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "Rongta Printer Tool",
    "bateria": true,
    "foto": "",
    "obs": "Portátil de 80 mm, ESC/POS.",
    "pagina": "https://www.rongtatech.com/portable-printer/",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver da série móvel Rongta (Windows)",
        "tamanho": "24,58 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260226/2-mobile-printer-series-driver-cd.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver térmico Rongta para Windows (inclui PrinterTool)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver Rongta 80 mm para macOS",
        "tamanho": "2,15 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260303/80mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "utilitario",
        "so": "Windows",
        "rotulo": "Rongta Printer Tool",
        "versao": "2.63.0",
        "tamanho": "2,69 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/rongtaprintertool_v2-63-0.zip",
        "oficial": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do RPP300",
        "versao": "1.2",
        "tamanho": "5,37 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251121/rpp300-user-manual_v1-2_en.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "HPRT",
    "familia": "HM-E200 e HM-E300",
    "variacao": "HM-E200",
    "modelo": "HPRT HM-E200",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-polímero 1.300 mAh",
    "foto": "",
    "obs": "ESC/POS. Drivers para Windows, Linux e macOS na página do fabricante.",
    "pagina": "https://pt.hprt.com/Product/2-inch-Mobile-Receipt-Printer-HM-E200.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers, SDK e manual HM-E200 (página oficial)",
        "url": "https://pt.hprt.com/Product/2-inch-Mobile-Receipt-Printer-HM-E200.html",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "HPRT",
    "familia": "HM-E200 e HM-E300",
    "variacao": "HM-E300",
    "modelo": "HPRT HM-E300",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-polímero 2.300 mAh (7,4 V)",
    "foto": "",
    "obs": "ESC/POS. Drivers para Windows, Linux e macOS na página do fabricante.",
    "pagina": "https://pt.hprt.com/Product/3-inch-Mobile-Receipt-Printer-HM-E300.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers, SDK e manual HM-E300 (página oficial)",
        "url": "https://pt.hprt.com/Product/3-inch-Mobile-Receipt-Printer-HM-E300.html",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Citizen",
    "familia": "CMP-20II e CMP-30II",
    "variacao": "CMP-20II",
    "modelo": "Citizen CMP-20II",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion 1.800 mAh",
    "foto": "",
    "obs": "ESC/POS, CPCL e ZPL2. O Bluetooth é opcional, conforme a versão.",
    "pagina": "https://www.citizen-systems.com/us/support/drivers-and-tools/CMP-20II",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e SDK CMP-20II (página oficial)",
        "url": "https://www.citizen-systems.com/us/support/drivers-and-tools/CMP-20II",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Citizen",
    "familia": "CMP-20II e CMP-30II",
    "variacao": "CMP-30II",
    "modelo": "Citizen CMP-30II",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": true,
    "foto": "",
    "obs": "Bluetooth ou Wi-Fi conforme a variante.",
    "pagina": "https://www.citizen-systems.com/us/support/drivers-and-tools/CMP-30II",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e SDK CMP-30II (página oficial)",
        "url": "https://www.citizen-systems.com/us/support/drivers-and-tools/CMP-30II",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Bixolon",
    "familia": "SPP-R200III e SPP-R310",
    "variacao": "SPP-R200III",
    "modelo": "Bixolon SPP-R200III",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": true,
    "foto": "",
    "obs": "Fabricante internacional: o download é feito na página oficial, que pede para escolher o modelo.",
    "pagina": "https://www.bixolon.com/download_view.php",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers, SDK e manuais (página oficial)",
        "url": "https://www.bixolon.com/download_view.php",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Bixolon",
    "familia": "SPP-R200III e SPP-R310",
    "variacao": "SPP-R310",
    "modelo": "Bixolon SPP-R310",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": true,
    "foto": "",
    "obs": "Fabricante internacional: o download é feito na página oficial, que pede para escolher o modelo.",
    "pagina": "https://www.bixolon.com/download_view.php",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers, SDK e manuais (página oficial)",
        "url": "https://www.bixolon.com/download_view.php",
        "oficial": true,
        "pagina": true
      }
    ]
  },
  {
    "marca": "Xprinter",
    "familia": "XP-P810",
    "variacao": "XP-P810",
    "modelo": "Xprinter XP-P810",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion 1.800 mAh (7,4 V)",
    "foto": "",
    "pagina": "https://www.xprinter.net/product/551.html",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Ficha e downloads XP-P810 (página oficial)",
        "url": "https://www.xprinter.net/product/551.html",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Genérica",
    "familia": "POS 58 / 80",
    "variacao": "POS80",
    "modelo": "POS80",
    "largura": 80,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Para impressoras de marca branca de 80 mm sem driver próprio. Não existe um driver único para todas: teste o da Rongta e, se não funcionar, o da Xprinter ou da Gprinter. Em rede, também dá para imprimir direto pela porta 9100 (RAW).",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Rongta para Windows (inclui PrinterTool 2.59)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver 80 mm para macOS (Rongta)",
        "tamanho": "2,15 MB",
        "url": "https://file.globalso.com/file_manage/4365/20260303/80mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver para Linux (Rongta)",
        "tamanho": "1,82 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/thermal-printer-driver-linux.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Xprinter 58/76/80 mm (página oficial)",
        "url": "https://www.xprinter.net/Driver_Download/2.html",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Gprinter 80 mm (página oficial)",
        "url": "https://en.gprinter.net/download.asp",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "POS Printer Driver Setup (genérico, acervo de terceiros)",
        "versao": "11.3.0.0",
        "tamanho": "2,77 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/POS/POS_Printer_Driver_Setup_v11.3.0.0.exe",
        "oficial": false
      }
    ],
    "maisUsada": 6
  },
  {
    "marca": "Genérica",
    "familia": "POS 58 / 80",
    "variacao": "POS58",
    "modelo": "POS58",
    "largura": 58,
    "conexao": [
      "USB"
    ],
    "portatil": false,
    "utilitario": "",
    "foto": "",
    "obs": "Para impressoras de marca branca de 58 mm sem driver próprio. Não existe um driver único para todas: teste o da Rongta e, se não funcionar, o da Xprinter ou da Gprinter. Em rede, também dá para imprimir direto pela porta 9100 (RAW).",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Rongta para Windows (inclui PrinterTool 2.59)",
        "tamanho": "26,66 MB",
        "url": "https://file.globalso.com/file_manage/4365/20261112/thermal-printer-driver-windows.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "macOS",
        "rotulo": "Driver 58 mm para macOS (Rongta)",
        "tamanho": "2,02 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/58mm-thermal-printer-driver-mac.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Linux",
        "rotulo": "Driver para Linux (Rongta)",
        "tamanho": "1,82 MB",
        "url": "https://file.globalso.com/file_manage/4365/20251114/thermal-printer-driver-linux.zip",
        "oficial": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Xprinter 58/76/80 mm (página oficial)",
        "url": "https://www.xprinter.net/Driver_Download/2.html",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver Gprinter 58 mm (página oficial)",
        "url": "https://en.gprinter.net/download.asp",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "POS Printer Driver Setup (genérico, acervo de terceiros)",
        "versao": "11.3.0.0",
        "tamanho": "2,77 MB",
        "url": "https://raw.githubusercontent.com/Delutto/thermal_printers/main/POS/POS_Printer_Driver_Setup_v11.3.0.0.exe",
        "oficial": false
      }
    ],
    "maisUsada": 6
  },
  {
    "marca": "Epson",
    "familia": "Mobilink TM-P",
    "variacao": "TM-P20",
    "modelo": "Mobilink TM-P20",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "Wi-Fi"
    ],
    "portatil": true,
    "utilitario": "Epson TM Printer Utility (app)",
    "bateria": true,
    "foto": "img/impressoras/epson-mobilink-tm-p20.webp",
    "obs": "Bluetooth ou Wi-Fi, conforme a variante.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P20-Series/s/SPT_C31CE14551",
    "downloads": [
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P20-Series/s/SPT_C31CE14551",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P20-Series/s/SPT_C31CE14551",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Manual do software",
        "versao": "Rev. 01",
        "tamanho": "2,59 MB",
        "url": "https://files.support.epson.com/pdf/pos/bulk/tm-p20_swum_en_01.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Epson",
    "familia": "Mobilink TM-P",
    "variacao": "TM-P20II",
    "modelo": "Mobilink TM-P20II",
    "largura": 58,
    "conexao": [
      "USB",
      "Bluetooth",
      "Wi-Fi"
    ],
    "portatil": true,
    "utilitario": "Epson TM Printer Utility (app)",
    "bateria": "Li-ion · até 27 h (declarado)",
    "foto": "",
    "obs": "Bluetooth ou Wi-Fi, conforme o código do produto.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P20II/s/SPT_C31CJ99001",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Driver de porta virtual TM",
        "versao": "8.70f",
        "tamanho": "17,2 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMVirtualPortDriver870f.exe",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P20II/s/SPT_C31CJ99001",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P20II/s/SPT_C31CJ99001",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Guia técnico",
        "versao": "Rev. E",
        "tamanho": "1,99 MB",
        "url": "https://files.support.epson.com/pdf/pos/bulk/tm-p20ii_trg_en_reve.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Epson",
    "familia": "Mobilink TM-P",
    "variacao": "TM-P60II",
    "modelo": "TM-P60II",
    "largura": 58,
    "conexao": [
      "Bluetooth",
      "Wi-Fi"
    ],
    "portatil": true,
    "utilitario": "Epson TM Printer Utility (app)",
    "bateria": true,
    "foto": "img/impressoras/epson-tm-p60ii.webp",
    "obs": "Bluetooth ou Wi-Fi, conforme a variante. Papel de 58 ou 60 mm.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P60II-Series/s/SPT_C31CC79011",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Drivers e utilitário (página oficial de suporte)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P60II-Series/s/SPT_C31CC79011",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P60II-Series/s/SPT_C31CC79011",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-TM-P60II-Series/s/SPT_C31CC79011",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "manual",
        "so": "Todos",
        "rotulo": "Guia técnico",
        "versao": "Rev. C",
        "tamanho": "8,11 MB",
        "url": "https://files.support.epson.com/pdf/pos/bulk/tm-p60ii_trg_en_revc.pdf",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  },
  {
    "marca": "Epson",
    "familia": "Mobilink TM-P",
    "variacao": "TM-P80II",
    "modelo": "Epson TM-P80II",
    "largura": 80,
    "conexao": [
      "Bluetooth",
      "USB",
      "Wi-Fi"
    ],
    "portatil": true,
    "utilitario": "",
    "bateria": "Li-ion · até 47 h (declarado)",
    "foto": "",
    "obs": "Portátil de 80 mm, ESC/POS.",
    "pagina": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P80II/s/SPT_C31CK00001",
    "downloads": [
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "TM Virtual Port Driver",
        "versao": "8.70d",
        "tamanho": "20,88 MB",
        "url": "https://ftp.epson.com/drivers/pos/TMVirtualPortDriver870d.exe",
        "oficial": true
      },
      {
        "tipo": "sdk",
        "so": "Android",
        "rotulo": "Epson ePOS SDK para Android",
        "versao": "2.32.0",
        "tamanho": "84,50 MB",
        "url": "https://ftp.epson.com/drivers/pos/ePOS_SDK_Android_v2.32.0.zip",
        "oficial": true
      },
      {
        "tipo": "sdk",
        "so": "Todos",
        "rotulo": "Epson ePOS SDK para JavaScript",
        "versao": "2.27.0e",
        "tamanho": "23,73 MB",
        "url": "https://ftp.epson.com/drivers/pos/ePOS_SDK_JavaScript_v2.27.0e.zip",
        "oficial": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P20II/s/SPT_C31CJ99001",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Aplicativo Epson TM Printer Utility (ver na página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P20II/s/SPT_C31CJ99001",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "driver",
        "so": "Windows",
        "rotulo": "Todos os downloads TM-P80II (página oficial)",
        "url": "https://epson.com.br/Suporte/Ponto-de-venda/Impressoras-m%C3%B3veis/Epson-Mobilink-TM-P80II/s/SPT_C31CK00001",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "Android",
        "rotulo": "RawBT: app para imprimir por Bluetooth (Google Play)",
        "url": "https://play.google.com/store/apps/details?id=ru.a402d.rawbtprinter",
        "oficial": true,
        "pagina": true,
        "recomendado": true,
        "nota": "Recomendado para impressoras Bluetooth ESC/POS de 58 e 80 mm. A versão gratuita imprime um aviso do RawBT no papel; na paga dá para tirar o aviso e personalizar o papel com a sua logomarca em cada comanda."
      },
      {
        "tipo": "manual",
        "so": "Android",
        "rotulo": "Como usar o RawBT (documentação do desenvolvedor no GitHub)",
        "url": "https://github.com/402d/DemoRawBtPrinter",
        "oficial": true,
        "pagina": true
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "BR RawPrinter (App Store)",
        "url": "https://apps.apple.com/br/app/br-rawprinter/id6751583298",
        "oficial": true,
        "pagina": true,
        "nota": "Impressão ESC/POS por Bluetooth e rede, em papel de 58 e 80 mm. No iPhone só funciona com impressora Bluetooth BLE (baixo consumo): modelos só com Bluetooth clássico (SPP) funcionam apenas no Android. Teste antes de comprar."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Thermer: impressora térmica Bluetooth (App Store)",
        "url": "https://apps.apple.com/br/app/impressora-t%C3%A9rmica-bluetooth/id1599863946",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58 e 80 mm, com recibos e logomarca. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      },
      {
        "tipo": "app",
        "so": "iOS",
        "rotulo": "Easy POS Print (App Store)",
        "url": "https://apps.apple.com/br/app/easy-pos-print/id1638971353",
        "oficial": true,
        "pagina": true,
        "nota": "Papel de 58, 72 e 80 mm. Mesma regra do iPhone: precisa de impressora com Bluetooth BLE."
      }
    ]
  }
];
