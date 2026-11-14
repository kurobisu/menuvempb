/* Lista de impressoras da página de drivers (drivers.html).
   Dados e links conferidos em 14/11/2026 nos sites oficiais dos fabricantes (Epson e repositório oficial da Elgin,
   que também publica a linha Bematech). Para incluir ou ajustar um modelo, mexa só aqui.
   - familia: agrupa as variações de um mesmo modelo num só cartão (ex.: "MP-4200"); variacao: nome curto de cada
     variação no seletor do modal (ex.: "TH", "ADV", "HS"). Cada variação tem seus próprios downloads.
   - largura: 80 ou 58 (mm); larguras: opcional, quando a impressora vem nas duas
   - conexao: 'USB', 'Serial', 'Rede', 'Bluetooth', 'Wi-Fi'
   - portatil: true para impressoras de celular/tablet (filtro "Dispositivos móveis")
   - utilitario: nome do utilitário oficial ('' = não tem)
   - foto: caminho da foto (img/impressoras/...); vazio = ilustração
   - pagina: página oficial de suporte do modelo
   - downloads: { tipo: 'driver' | 'utilitario' | 'app' | 'manual', so: 'Windows' | 'Linux' | 'macOS' | 'Android' | 'iOS' | 'Todos',
                  rotulo, versao, tamanho, url, oficial: true (link do fabricante) | false (nosso Drive),
                  pagina: true quando o link abre a página oficial em vez de baixar o arquivo }
   Impressoras sem driver do fabricante (POS58/POS80) ficam sem downloads até subirmos um arquivo no Drive. */
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
    ]
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
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    "obs": "Impressoras de 80 mm sem driver do fabricante. Não existe driver oficial único: fale com o suporte.",
    "downloads": []
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
    "obs": "Impressoras de 58 mm sem driver do fabricante. Não existe driver oficial único: fale com o suporte.",
    "downloads": []
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
      }
    ]
  }
];
