/*global require, module, console, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

/**
 * Lekeri a buszmenetrendet es osszallitja a sablont.
 *
 * @returns {{Object}}
 */
module.exports = function () {

    var stops = [
        {
            "id":"F00001",
            "name":"Mihály utca",
            "lat":47.486079,
            "lon":19.034561
        },
        {
            "id":"F00002",
            "name":"Zsolt utca",
            "lat":47.490477,
            "lon":19.030486
        },
        {
            "id":"F00003",
            "name":"Zsolt utca",
            "lat":47.490612,
            "lon":19.030314
        },
        {
            "id":"F00004",
            "name":"Mészáros utca",
            "lat":47.488318,
            "lon":19.031071
        },
        {
            "id":"F00005",
            "name":"Mészáros utca",
            "lat":47.488633,
            "lon":19.031575
        },
        {
            "id":"F00006",
            "name":"Sánc utca",
            "lat":47.490136,
            "lon":19.036047
        },
        {
            "id":"F00007",
            "name":"Sánc utca",
            "lat":47.489545,
            "lon":19.035522
        },
        {
            "id":"F00008",
            "name":"Sánc utca",
            "lat":47.489461,
            "lon":19.035306
        },
        {
            "id":"F00009",
            "name":"Sánc utca",
            "lat":47.489488,
            "lon":19.035808
        },
        {
            "id":"F00010",
            "name":"Szirtes út",
            "lat":47.487671,
            "lon":19.036432
        },
        {
            "id":"F00011",
            "name":"Szirtes út",
            "lat":47.488247,
            "lon":19.037042
        },
        {
            "id":"F00012",
            "name":"Búsuló Juhász (Citadella)",
            "lat":47.485594,
            "lon":19.039551
        },
        {
            "id":"F00013",
            "name":"Királyhágó utca",
            "lat":47.494937,
            "lon":19.022906
        },
        {
            "id":"F00014",
            "name":"Királyhágó utca",
            "lat":47.494442,
            "lon":19.023929
        },
        {
            "id":"F00015",
            "name":"Királyhágó utca",
            "lat":47.494847,
            "lon":19.023716
        },
        {
            "id":"F00016",
            "name":"Királyhágó utca",
            "lat":47.495575,
            "lon":19.023105
        },
        {
            "id":"F00017",
            "name":"Királyhágó utca",
            "lat":47.496016,
            "lon":19.02349
        },
        {
            "id":"F00018",
            "name":"Királyhágó utca",
            "lat":47.495666,
            "lon":19.02361
        },
        {
            "id":"F00019",
            "name":"Nagyenyed utca",
            "lat":47.498031,
            "lon":19.023874
        },
        {
            "id":"F00020",
            "name":"Nagyenyed utca",
            "lat":47.498373,
            "lon":19.023993
        },
        {
            "id":"F00022",
            "name":"Déli pályaudvar M",
            "lat":47.499668,
            "lon":19.024192
        },
        {
            "id":"F00023",
            "name":"Déli pályaudvar M",
            "lat":47.500019,
            "lon":19.02382
        },
        {
            "id":"F00024",
            "name":"Déli pályaudvar M",
            "lat":47.500856,
            "lon":19.024032
        },
        {
            "id":"F00025",
            "name":"Déli pályaudvar M",
            "lat":47.501081,
            "lon":19.024151
        },
        {
            "id":"F00026",
            "name":"Déli pályaudvar M",
            "lat":47.500829,
            "lon":19.024974
        },
        {
            "id":"F00027",
            "name":"Déli pályaudvar M",
            "lat":47.501126,
            "lon":19.024722
        },
        {
            "id":"F00028",
            "name":"Körmöci utca",
            "lat":47.504427,
            "lon":19.024906
        },
        {
            "id":"F00029",
            "name":"Körmöci utca",
            "lat":47.504184,
            "lon":19.024973
        },
        {
            "id":"F00030",
            "name":"Mátray utca",
            "lat":47.505993,
            "lon":19.028636
        },
        {
            "id":"F00031",
            "name":"Mátray utca",
            "lat":47.505929,
            "lon":19.027985
        },
        {
            "id":"F00032",
            "name":"Széna tér",
            "lat":47.508043,
            "lon":19.029179
        },
        {
            "id":"F00033",
            "name":"Széna tér",
            "lat":47.507782,
            "lon":19.028184
        },
        {
            "id":"F00034",
            "name":"Fazekas utca",
            "lat":47.508125,
            "lon":19.034317
        },
        {
            "id":"F00035",
            "name":"Fazekas utca",
            "lat":47.507972,
            "lon":19.034144
        },
        {
            "id":"F00036",
            "name":"Fazekas utca",
            "lat":47.507855,
            "lon":19.033454
        },
        {
            "id":"F00037",
            "name":"Várkert Bazár",
            "lat":47.493914,
            "lon":19.043385
        },
        {
            "id":"F00045",
            "name":"Donáti utca",
            "lat":47.501352,
            "lon":19.036044
        },
        {
            "id":"F00047",
            "name":"Clark Ádám tér",
            "lat":47.498306,
            "lon":19.039834
        },
        {
            "id":"F00048",
            "name":"Clark Ádám tér",
            "lat":47.498177,
            "lon":19.040013
        },
        {
            "id":"F00049",
            "name":"Clark Ádám tér",
            "lat":47.497722,
            "lon":19.040644
        },
        {
            "id":"F00050",
            "name":"Clark Ádám tér",
            "lat":47.497845,
            "lon":19.040797
        },
        {
            "id":"F00051",
            "name":"Halász utca",
            "lat":47.502279,
            "lon":19.03984
        },
        {
            "id":"F00052",
            "name":"Halász utca",
            "lat":47.501865,
            "lon":19.040013
        },
        {
            "id":"F00053",
            "name":"Halász utca",
            "lat":47.502558,
            "lon":19.039747
        },
        {
            "id":"F00056",
            "name":"Szilágyi Dezső tér",
            "lat":47.503343,
            "lon":19.038439
        },
        {
            "id":"F00059",
            "name":"Batthyány tér M+H",
            "lat":47.505898,
            "lon":19.038014
        },
        {
            "id":"F00060",
            "name":"Batthyány tér",
            "lat":47.506752,
            "lon":19.039328
        },
        {
            "id":"F00062",
            "name":"Batthyány tér",
            "lat":47.507337,
            "lon":19.0367
        },
        {
            "id":"F00063",
            "name":"Batthyány tér",
            "lat":47.506825,
            "lon":19.038223
        },
        {
            "id":"F00064",
            "name":"Batthyány tér M+H",
            "lat":47.506641,
            "lon":19.038804
        },
        {
            "id":"F00066",
            "name":"Batthyány tér M+H",
            "lat":47.506168,
            "lon":19.039089
        },
        {
            "id":"F00067",
            "name":"Batthyány tér M+H",
            "lat":47.505985,
            "lon":19.038578
        },
        {
            "id":"F00068",
            "name":"Mária tér",
            "lat":47.506749,
            "lon":19.034782
        },
        {
            "id":"F00069",
            "name":"Bécsi kapu tér",
            "lat":47.504572,
            "lon":19.030681
        },
        {
            "id":"F00070",
            "name":"Bécsi kapu tér",
            "lat":47.504787,
            "lon":19.030216
        },
        {
            "id":"F00071",
            "name":"Szentháromság tér",
            "lat":47.501316,
            "lon":19.033761
        },
        {
            "id":"F00072",
            "name":"Szentháromság tér",
            "lat":47.501406,
            "lon":19.033841
        },
        {
            "id":"F00073",
            "name":"Dísz tér",
            "lat":47.499355,
            "lon":19.036031
        },
        {
            "id":"F00074",
            "name":"Dísz tér",
            "lat":47.498987,
            "lon":19.036111
        },
        {
            "id":"F00076",
            "name":"Palota út, gyorslift",
            "lat":47.495173,
            "lon":19.038541
        },
        {
            "id":"F00077",
            "name":"Dózsa György tér",
            "lat":47.494777,
            "lon":19.037665
        },
        {
            "id":"F00078",
            "name":"Dózsa György tér",
            "lat":47.494435,
            "lon":19.037944
        },
        {
            "id":"F00079",
            "name":"Dózsa György tér",
            "lat":47.49386,
            "lon":19.037479
        },
        {
            "id":"F00080",
            "name":"Dózsa György tér",
            "lat":47.493779,
            "lon":19.038183
        },
        {
            "id":"F00081",
            "name":"Dózsa György tér",
            "lat":47.493734,
            "lon":19.038408
        },
        {
            "id":"F00082",
            "name":"Alagút utca",
            "lat":47.497844,
            "lon":19.032979
        },
        {
            "id":"F00083",
            "name":"Krisztina tér",
            "lat":47.496953,
            "lon":19.033391
        },
        {
            "id":"F00084",
            "name":"Alagút utca",
            "lat":47.496639,
            "lon":19.034439
        },
        {
            "id":"F00085",
            "name":"Krisztina tér",
            "lat":47.496881,
            "lon":19.032117
        },
        {
            "id":"F00086",
            "name":"Krisztina tér",
            "lat":47.496621,
            "lon":19.032847
        },
        {
            "id":"F00087",
            "name":"Krisztina tér",
            "lat":47.496422,
            "lon":19.03071
        },
        {
            "id":"F00088",
            "name":"Mikó utca",
            "lat":47.499283,
            "lon":19.030815
        },
        {
            "id":"F00089",
            "name":"Mikó utca",
            "lat":47.498365,
            "lon":19.028997
        },
        {
            "id":"F00090",
            "name":"Mikó utca",
            "lat":47.498401,
            "lon":19.028771
        },
        {
            "id":"F00091",
            "name":"Korlát utca",
            "lat":47.5019,
            "lon":19.02735
        },
        {
            "id":"F00092",
            "name":"Korlát utca",
            "lat":47.501747,
            "lon":19.02739
        },
        {
            "id":"F00093",
            "name":"Déli pályaudvar",
            "lat":47.499695,
            "lon":19.024656
        },
        {
            "id":"F00094",
            "name":"Déli pályaudvar",
            "lat":47.500604,
            "lon":19.024576
        },
        {
            "id":"F00095",
            "name":"Győri út",
            "lat":47.495252,
            "lon":19.025269
        },
        {
            "id":"F00096",
            "name":"Győri út",
            "lat":47.495207,
            "lon":19.025813
        },
        {
            "id":"F00097",
            "name":"Róka utca",
            "lat":47.495397,
            "lon":19.029144
        },
        {
            "id":"F00098",
            "name":"Róka utca",
            "lat":47.495433,
            "lon":19.029383
        },
        {
            "id":"F00099",
            "name":"Róka utca",
            "lat":47.494209,
            "lon":19.028879
        },
        {
            "id":"F00100",
            "name":"Naphegy tér",
            "lat":47.493517,
            "lon":19.032502
        },
        {
            "id":"F00101",
            "name":"Várkert Bazár",
            "lat":47.493081,
            "lon":19.043086
        },
        {
            "id":"F00102",
            "name":"Szarvas tér",
            "lat":47.492496,
            "lon":19.042383
        },
        {
            "id":"F00103",
            "name":"Döbrentei tér",
            "lat":47.491504,
            "lon":19.043625
        },
        {
            "id":"F00104",
            "name":"Döbrentei tér",
            "lat":47.491228,
            "lon":19.043577
        },
        {
            "id":"F00105",
            "name":"Döbrentei tér",
            "lat":47.491773,
            "lon":19.04336
        },
        {
            "id":"F00106",
            "name":"Várkert Bazár",
            "lat":47.493518,
            "lon":19.044196
        },
        {
            "id":"F00107",
            "name":"Várkert Bazár",
            "lat":47.493159,
            "lon":19.044395
        },
        {
            "id":"F00108",
            "name":"Rudas Gyógyfürdő",
            "lat":47.489543,
            "lon":19.047619
        },
        {
            "id":"F00109",
            "name":"Rudas Gyógyfürdő",
            "lat":47.489102,
            "lon":19.048388
        },
        {
            "id":"F00110",
            "name":"Döbrentei tér",
            "lat":47.49011,
            "lon":19.044833
        },
        {
            "id":"F00111",
            "name":"Rudas Gyógyfürdő",
            "lat":47.489291,
            "lon":19.046783
        },
        {
            "id":"F00112",
            "name":"Rudas Gyógyfürdő",
            "lat":47.489165,
            "lon":19.046784
        },
        {
            "id":"F00113",
            "name":"Döbrentei tér",
            "lat":47.490101,
            "lon":19.04677
        },
        {
            "id":"F00114",
            "name":"Kapisztrán tér",
            "lat":47.504194,
            "lon":19.029247
        },
        {
            "id":"F00115",
            "name":"Szanatórium utca (Vadaspark)",
            "lat":47.52055,
            "lon":18.938763
        },
        {
            "id":"F00116",
            "name":"Szanatórium utca (Vadaspark)",
            "lat":47.520244,
            "lon":18.938896
        },
        {
            "id":"F00117",
            "name":"Solymár, Kökörcsin utca",
            "lat":47.577054,
            "lon":18.938353
        },
        {
            "id":"F00118",
            "name":"Kökörcsin utca",
            "lat":47.576068,
            "lon":18.938853
        },
        {
            "id":"F00119",
            "name":"Fenyőgyöngye",
            "lat":47.540373,
            "lon":19.006161
        },
        {
            "id":"F00120",
            "name":"Nyereg út",
            "lat":47.53721,
            "lon":19.014226
        },
        {
            "id":"F00121",
            "name":"Nyereg út",
            "lat":47.537704,
            "lon":19.013455
        },
        {
            "id":"F00122",
            "name":"Pál-völgyi cseppkőbarlang",
            "lat":47.533172,
            "lon":19.016513
        },
        {
            "id":"F00123",
            "name":"Pál-völgyi cseppkőbarlang",
            "lat":47.532938,
            "lon":19.016726
        },
        {
            "id":"F00124",
            "name":"Csalit utca",
            "lat":47.529502,
            "lon":19.016316
        },
        {
            "id":"F00125",
            "name":"Csalit utca",
            "lat":47.529367,
            "lon":19.017073
        },
        {
            "id":"F00126",
            "name":"Virág Benedek utca",
            "lat":47.53071,
            "lon":19.026927
        },
        {
            "id":"F00127",
            "name":"Szépvölgyi út",
            "lat":47.530773,
            "lon":19.026409
        },
        {
            "id":"F00128",
            "name":"Folyondár utca",
            "lat":47.529478,
            "lon":19.030141
        },
        {
            "id":"F00129",
            "name":"Folyondár utca (Szépvölgyi út)",
            "lat":47.52928,
            "lon":19.030407
        },
        {
            "id":"F00130",
            "name":"Ürömi utca",
            "lat":47.528154,
            "lon":19.033331
        },
        {
            "id":"F00131",
            "name":"Ürömi utca",
            "lat":47.528039,
            "lon":19.033422
        },
        {
            "id":"F00132",
            "name":"Kolosy tér",
            "lat":47.527725,
            "lon":19.036715
        },
        {
            "id":"F00133",
            "name":"Kolosy tér",
            "lat":47.527842,
            "lon":19.036888
        },
        {
            "id":"F00134",
            "name":"Kolosy tér",
            "lat":47.527806,
            "lon":19.03714
        },
        {
            "id":"F00137",
            "name":"Kolosy tér",
            "lat":47.528598,
            "lon":19.038946
        },
        {
            "id":"F00138",
            "name":"Kolosy tér",
            "lat":47.526973,
            "lon":19.038276
        },
        {
            "id":"F00139",
            "name":"Szépvölgyi út",
            "lat":47.527195,
            "lon":19.040181
        },
        {
            "id":"F00140",
            "name":"Szépvölgyi út",
            "lat":47.52741,
            "lon":19.040155
        },
        {
            "id":"F00141",
            "name":"Margitsziget / Margit híd",
            "lat":47.514713,
            "lon":19.042606
        },
        {
            "id":"F00142",
            "name":"Margitsziget / Margit híd",
            "lat":47.514431,
            "lon":19.044459
        },
        {
            "id":"F00143",
            "name":"Margitsziget / Margit híd",
            "lat":47.515963,
            "lon":19.043987
        },
        {
            "id":"F00144",
            "name":"Margitsziget / Margit híd",
            "lat":47.515852,
            "lon":19.043781
        },
        {
            "id":"F00147",
            "name":"Labanc út",
            "lat":47.519017,
            "lon":18.98172
        },
        {
            "id":"F00148",
            "name":"Labanc út",
            "lat":47.519026,
            "lon":18.98103
        },
        {
            "id":"F00149",
            "name":"Dénes utca",
            "lat":47.521644,
            "lon":18.968478
        },
        {
            "id":"F00150",
            "name":"Dénes utca",
            "lat":47.521635,
            "lon":18.968
        },
        {
            "id":"F00151",
            "name":"Baba utca",
            "lat":47.524266,
            "lon":19.013278
        },
        {
            "id":"F00152",
            "name":"Baba utca",
            "lat":47.52423,
            "lon":19.013052
        },
        {
            "id":"F00153",
            "name":"Garas utca",
            "lat":47.511549,
            "lon":19.019194
        },
        {
            "id":"F00154",
            "name":"Garas utca",
            "lat":47.51128,
            "lon":19.019845
        },
        {
            "id":"F00155",
            "name":"Városmajor",
            "lat":47.509596,
            "lon":19.014018
        },
        {
            "id":"F00156",
            "name":"Városmajor",
            "lat":47.509614,
            "lon":19.013222
        },
        {
            "id":"F00157",
            "name":"Városmajor",
            "lat":47.509596,
            "lon":19.013022
        },
        {
            "id":"F00158",
            "name":"Városmajor",
            "lat":47.50956,
            "lon":19.013713
        },
        {
            "id":"F00159",
            "name":"Szent János Kórház",
            "lat":47.510377,
            "lon":19.008402
        },
        {
            "id":"F00160",
            "name":"Nagyajtai utca",
            "lat":47.513631,
            "lon":19.003049
        },
        {
            "id":"F00161",
            "name":"Nagyajtai utca",
            "lat":47.513562,
            "lon":19.002843
        },
        {
            "id":"F00162",
            "name":"Nagyajtai utca",
            "lat":47.513721,
            "lon":19.002677
        },
        {
            "id":"F00163",
            "name":"Nagyajtai utca",
            "lat":47.513586,
            "lon":19.002598
        },
        {
            "id":"F00164",
            "name":"Budagyöngye",
            "lat":47.516049,
            "lon":18.999489
        },
        {
            "id":"F00165",
            "name":"Budagyöngye",
            "lat":47.51613,
            "lon":18.999157
        },
        {
            "id":"F00166",
            "name":"Budagyöngye",
            "lat":47.516663,
            "lon":18.997968
        },
        {
            "id":"F00167",
            "name":"Budagyöngye",
            "lat":47.516184,
            "lon":18.998971
        },
        {
            "id":"F00168",
            "name":"Szépilona",
            "lat":47.517657,
            "lon":18.995052
        },
        {
            "id":"F00169",
            "name":"Szépilona",
            "lat":47.517494,
            "lon":18.992955
        },
        {
            "id":"F00170",
            "name":"Szépilona",
            "lat":47.517531,
            "lon":18.995345
        },
        {
            "id":"F00171",
            "name":"Kuruclesi út",
            "lat":47.518462,
            "lon":18.985346
        },
        {
            "id":"F00172",
            "name":"Kuruclesi út",
            "lat":47.518479,
            "lon":18.984575
        },
        {
            "id":"F00173",
            "name":"Vízművek",
            "lat":47.520173,
            "lon":18.973367
        },
        {
            "id":"F00174",
            "name":"Vízművek",
            "lat":47.520056,
            "lon":18.973367
        },
        {
            "id":"F00175",
            "name":"Bölcsőde",
            "lat":47.523646,
            "lon":18.962088
        },
        {
            "id":"F00176",
            "name":"Bölcsőde",
            "lat":47.523708,
            "lon":18.961583
        },
        {
            "id":"F00177",
            "name":"Irén utca",
            "lat":47.524615,
            "lon":18.958766
        },
        {
            "id":"F00178",
            "name":"Irén utca",
            "lat":47.524507,
            "lon":18.958727
        },
        {
            "id":"F00179",
            "name":"Szépjuhászné, Gyermekvasút",
            "lat":47.527363,
            "lon":18.954074
        },
        {
            "id":"F00180",
            "name":"Szépjuhászné, Gyermekvasút",
            "lat":47.527147,
            "lon":18.954074
        },
        {
            "id":"F00181",
            "name":"Laktanya",
            "lat":47.52672,
            "lon":18.948192
        },
        {
            "id":"F00182",
            "name":"Laktanya",
            "lat":47.526756,
            "lon":18.948431
        },
        {
            "id":"F00183",
            "name":"Országos Korányi TBC Intézet",
            "lat":47.522693,
            "lon":18.941573
        },
        {
            "id":"F00184",
            "name":"Országos Korányi TBC Intézet",
            "lat":47.52236,
            "lon":18.941149
        },
        {
            "id":"F00185",
            "name":"Margit híd, budai hídfő",
            "lat":47.515819,
            "lon":19.039539
        },
        {
            "id":"F00186",
            "name":"Margit híd, budai hídfő",
            "lat":47.514884,
            "lon":19.039234
        },
        {
            "id":"F00188",
            "name":"Bem József tér",
            "lat":47.51026,
            "lon":19.038279
        },
        {
            "id":"F00189",
            "name":"Margit híd, budai hídfő H",
            "lat":47.514602,
            "lon":19.038882
        },
        {
            "id":"F00191",
            "name":"Margit híd, budai hídfő H",
            "lat":47.514665,
            "lon":19.036638
        },
        {
            "id":"F00192",
            "name":"Margit híd, budai hídfő H",
            "lat":47.514647,
            "lon":19.038192
        },
        {
            "id":"F00193",
            "name":"Horvát utca",
            "lat":47.511102,
            "lon":19.034489
        },
        {
            "id":"F00194",
            "name":"Horvát utca",
            "lat":47.510707,
            "lon":19.034396
        },
        {
            "id":"F00195",
            "name":"Mechwart liget",
            "lat":47.511345,
            "lon":19.032285
        },
        {
            "id":"F00196",
            "name":"Mechwart liget",
            "lat":47.511246,
            "lon":19.032165
        },
        {
            "id":"F00197",
            "name":"Mechwart liget",
            "lat":47.510598,
            "lon":19.030559
        },
        {
            "id":"F00198",
            "name":"Mechwart liget",
            "lat":47.510778,
            "lon":19.031462
        },
        {
            "id":"F00199",
            "name":"Mechwart liget",
            "lat":47.510976,
            "lon":19.032125
        },
        {
            "id":"F00200",
            "name":"Mechwart liget",
            "lat":47.511165,
            "lon":19.032962
        },
        {
            "id":"F00201",
            "name":"Füge utca",
            "lat":47.51398,
            "lon":19.027398
        },
        {
            "id":"F00202",
            "name":"Füge utca",
            "lat":47.513998,
            "lon":19.026814
        },
        {
            "id":"F00203",
            "name":"Rét utca",
            "lat":47.514645,
            "lon":19.024251
        },
        {
            "id":"F00204",
            "name":"Rét utca",
            "lat":47.514762,
            "lon":19.023866
        },
        {
            "id":"F00205",
            "name":"Ady Endre utca",
            "lat":47.51621,
            "lon":19.024596
        },
        {
            "id":"F00206",
            "name":"Ady Endre utca",
            "lat":47.51665,
            "lon":19.02425
        },
        {
            "id":"F00207",
            "name":"Tapolcsányi utca",
            "lat":47.517504,
            "lon":19.021143
        },
        {
            "id":"F00208",
            "name":"Tapolcsányi utca",
            "lat":47.517405,
            "lon":19.020785
        },
        {
            "id":"F00209",
            "name":"Eszter utca",
            "lat":47.520149,
            "lon":19.021912
        },
        {
            "id":"F00210",
            "name":"Eszter utca",
            "lat":47.520014,
            "lon":19.021845
        },
        {
            "id":"F00211",
            "name":"Vend utca",
            "lat":47.521678,
            "lon":19.020583
        },
        {
            "id":"F00212",
            "name":"Vend utca",
            "lat":47.521444,
            "lon":19.020729
        },
        {
            "id":"F00213",
            "name":"Pusztaszeri körönd",
            "lat":47.523233,
            "lon":19.017382
        },
        {
            "id":"F00214",
            "name":"Pusztaszeri körönd",
            "lat":47.523098,
            "lon":19.01782
        },
        {
            "id":"F00215",
            "name":"Pusztaszeri körönd",
            "lat":47.522846,
            "lon":19.017462
        },
        {
            "id":"F00216",
            "name":"Pusztaszeri körönd",
            "lat":47.522675,
            "lon":19.017608
        },
        {
            "id":"F00217",
            "name":"Vend utca",
            "lat":47.523612,
            "lon":19.020436
        },
        {
            "id":"F00218",
            "name":"Vend utca",
            "lat":47.523468,
            "lon":19.020688
        },
        {
            "id":"F00219",
            "name":"Pusztaszeri út",
            "lat":47.524377,
            "lon":19.023091
        },
        {
            "id":"F00220",
            "name":"Cimbalom utca",
            "lat":47.524098,
            "lon":19.023052
        },
        {
            "id":"F00221",
            "name":"Vérhalom tér",
            "lat":47.520977,
            "lon":19.025165
        },
        {
            "id":"F00222",
            "name":"Vérhalom tér",
            "lat":47.520545,
            "lon":19.024713
        },
        {
            "id":"F00223",
            "name":"Vérhalom utca",
            "lat":47.519835,
            "lon":19.02875
        },
        {
            "id":"F00224",
            "name":"Mandula utca",
            "lat":47.519638,
            "lon":19.028524
        },
        {
            "id":"F00225",
            "name":"Sarolta utca",
            "lat":47.522453,
            "lon":19.031803
        },
        {
            "id":"F00226",
            "name":"Kavics utca",
            "lat":47.521149,
            "lon":19.03187
        },
        {
            "id":"F00227",
            "name":"Vérhalom utca",
            "lat":47.519063,
            "lon":19.033424
        },
        {
            "id":"F00228",
            "name":"Szemlőhegy utca",
            "lat":47.516948,
            "lon":19.027716
        },
        {
            "id":"F00229",
            "name":"Rómer Flóris utca",
            "lat":47.516795,
            "lon":19.027901
        },
        {
            "id":"F00230",
            "name":"Zivatar utca",
            "lat":47.515626,
            "lon":19.031659
        },
        {
            "id":"F00231",
            "name":"Zivatar utca",
            "lat":47.515698,
            "lon":19.031181
        },
        {
            "id":"F00232",
            "name":"Margit körút",
            "lat":47.513846,
            "lon":19.033957
        },
        {
            "id":"F00233",
            "name":"Apostol utca",
            "lat":47.514655,
            "lon":19.033226
        },
        {
            "id":"F00234",
            "name":"Margit híd, budai hídfő H",
            "lat":47.516041,
            "lon":19.039453
        },
        {
            "id":"F00235",
            "name":"Margit híd, budai hídfő H",
            "lat":47.515396,
            "lon":19.0393
        },
        {
            "id":"F00237",
            "name":"Margit híd, budai hídfő H",
            "lat":47.515564,
            "lon":19.038311
        },
        {
            "id":"F00245",
            "name":"Zsigmond tér",
            "lat":47.524991,
            "lon":19.037951
        },
        {
            "id":"F00246",
            "name":"Zsigmond tér",
            "lat":47.52404,
            "lon":19.037532
        },
        {
            "id":"F00247",
            "name":"Császár-Komjádi uszoda",
            "lat":47.520241,
            "lon":19.038297
        },
        {
            "id":"F00248",
            "name":"Császár-Komjádi uszoda",
            "lat":47.519678,
            "lon":19.038051
        },
        {
            "id":"F00249",
            "name":"Felhévízi utca",
            "lat":47.526591,
            "lon":19.030633
        },
        {
            "id":"F00250",
            "name":"Felhévízi utca",
            "lat":47.527131,
            "lon":19.031417
        },
        {
            "id":"F00251",
            "name":"Pusztaszeri út 25.",
            "lat":47.527787,
            "lon":19.028482
        },
        {
            "id":"F00252",
            "name":"Pusztaszeri út 25.",
            "lat":47.527562,
            "lon":19.028415
        },
        {
            "id":"F00253",
            "name":"Alsó Zöldmáli út",
            "lat":47.528353,
            "lon":19.027379
        },
        {
            "id":"F00254",
            "name":"Alsó Zöldmáli út",
            "lat":47.528227,
            "lon":19.0271
        },
        {
            "id":"F00255",
            "name":"Szemlő-hegyi-barlang",
            "lat":47.528811,
            "lon":19.02467
        },
        {
            "id":"F00256",
            "name":"Szemlő-hegyi-barlang",
            "lat":47.528721,
            "lon":19.024165
        },
        {
            "id":"F00257",
            "name":"Zöldmáli lejtő",
            "lat":47.528703,
            "lon":19.022
        },
        {
            "id":"F00258",
            "name":"Zöldmáli lejtő",
            "lat":47.52855,
            "lon":19.021629
        },
        {
            "id":"F00259",
            "name":"Zöldkert út",
            "lat":47.529608,
            "lon":19.011004
        },
        {
            "id":"F00260",
            "name":"Zöldkert út",
            "lat":47.529393,
            "lon":19.011163
        },
        {
            "id":"F00261",
            "name":"Pitypang utca",
            "lat":47.530066,
            "lon":19.008772
        },
        {
            "id":"F00262",
            "name":"Pitypang utca",
            "lat":47.529779,
            "lon":19.009078
        },
        {
            "id":"F00264",
            "name":"Verecke lépcső",
            "lat":47.529048,
            "lon":19.004297
        },
        {
            "id":"F00265",
            "name":"Verecke lépcső",
            "lat":47.529129,
            "lon":19.003713
        },
        {
            "id":"F00266",
            "name":"Verecke lépcső",
            "lat":47.529066,
            "lon":19.002677
        },
        {
            "id":"F00267",
            "name":"Tömörkény utca",
            "lat":47.527439,
            "lon":19.007645
        },
        {
            "id":"F00268",
            "name":"Tömörkény utca",
            "lat":47.527224,
            "lon":19.007672
        },
        {
            "id":"F00269",
            "name":"Móricz Zsigmond Gimnázium",
            "lat":47.525381,
            "lon":19.010051
        },
        {
            "id":"F00270",
            "name":"Móricz Zsigmond Gimnázium",
            "lat":47.525614,
            "lon":19.009187
        },
        {
            "id":"F00271",
            "name":"Vöröstorony lépcső",
            "lat":47.531285,
            "lon":18.997403
        },
        {
            "id":"F00272",
            "name":"Vöröstorony lépcső",
            "lat":47.530908,
            "lon":18.998041
        },
        {
            "id":"F00273",
            "name":"Nagybányai út",
            "lat":47.533712,
            "lon":18.993323
        },
        {
            "id":"F00276",
            "name":"Pasaréti tér",
            "lat":47.523656,
            "lon":18.994236
        },
        {
            "id":"F00278",
            "name":"Pasaréti tér",
            "lat":47.523494,
            "lon":18.992829
        },
        {
            "id":"F00279",
            "name":"Pasaréti tér",
            "lat":47.523548,
            "lon":18.993187
        },
        {
            "id":"F00280",
            "name":"Harangvirág utca",
            "lat":47.521787,
            "lon":18.997438
        },
        {
            "id":"F00281",
            "name":"Harangvirág utca",
            "lat":47.521436,
            "lon":18.997811
        },
        {
            "id":"F00282",
            "name":"Virág árok",
            "lat":47.519216,
            "lon":19.000946
        },
        {
            "id":"F00283",
            "name":"Virág árok",
            "lat":47.519539,
            "lon":19.000428
        },
        {
            "id":"F00284",
            "name":"Gábor Áron utca / Pasaréti út",
            "lat":47.516231,
            "lon":19.004454
        },
        {
            "id":"F00285",
            "name":"Gábor Áron utca / Pasaréti út",
            "lat":47.516671,
            "lon":19.003976
        },
        {
            "id":"F00286",
            "name":"Júlia utca",
            "lat":47.51428,
            "lon":19.007231
        },
        {
            "id":"F00287",
            "name":"Júlia utca",
            "lat":47.514694,
            "lon":19.006447
        },
        {
            "id":"F00288",
            "name":"Vasas sportpálya",
            "lat":47.512104,
            "lon":19.008188
        },
        {
            "id":"F00289",
            "name":"Vasas sportpálya",
            "lat":47.51151,
            "lon":19.008879
        },
        {
            "id":"F00290",
            "name":"Fenyves utca",
            "lat":47.523363,
            "lon":19.002297
        },
        {
            "id":"F00291",
            "name":"Fenyves utca",
            "lat":47.523219,
            "lon":19.00243
        },
        {
            "id":"F00292",
            "name":"Tüske utca",
            "lat":47.521197,
            "lon":19.006362
        },
        {
            "id":"F00293",
            "name":"Bimbó köz",
            "lat":47.521799,
            "lon":19.005565
        },
        {
            "id":"F00294",
            "name":"Gábor Áron utca",
            "lat":47.519642,
            "lon":19.010466
        },
        {
            "id":"F00295",
            "name":"Endrődi Sándor utca",
            "lat":47.521118,
            "lon":19.012231
        },
        {
            "id":"F00296",
            "name":"Lóczy Lajos utca",
            "lat":47.519039,
            "lon":19.009617
        },
        {
            "id":"F00297",
            "name":"Hankóczy Jenő utca",
            "lat":47.516889,
            "lon":19.008902
        },
        {
            "id":"F00298",
            "name":"Zilah utca",
            "lat":47.515604,
            "lon":19.011558
        },
        {
            "id":"F00299",
            "name":"Detrekő utca",
            "lat":47.517349,
            "lon":19.012433
        },
        {
            "id":"F00300",
            "name":"Balogvár utca",
            "lat":47.515371,
            "lon":19.014519
        },
        {
            "id":"F00301",
            "name":"Ruszti út",
            "lat":47.514993,
            "lon":19.014572
        },
        {
            "id":"F00302",
            "name":"Rókushegyi lépcső",
            "lat":47.512889,
            "lon":19.017056
        },
        {
            "id":"F00303",
            "name":"Lorántffy Zsuzsanna út",
            "lat":47.512574,
            "lon":19.017388
        },
        {
            "id":"F00304",
            "name":"Ezredes utca",
            "lat":47.510452,
            "lon":19.021067
        },
        {
            "id":"F00305",
            "name":"Dékán utca",
            "lat":47.508285,
            "lon":19.02375
        },
        {
            "id":"F00306",
            "name":"Széna tér",
            "lat":47.508484,
            "lon":19.026989
        },
        {
            "id":"F00307",
            "name":"Széna tér",
            "lat":47.508133,
            "lon":19.02675
        },
        {
            "id":"F00308",
            "name":"Széna tér",
            "lat":47.508511,
            "lon":19.027334
        },
        {
            "id":"F00309",
            "name":"Széna tér",
            "lat":47.508376,
            "lon":19.027374
        },
        {
            "id":"F00310",
            "name":"Kelemen László utca",
            "lat":47.522421,
            "lon":18.989152
        },
        {
            "id":"F00311",
            "name":"Kelemen László utca",
            "lat":47.521667,
            "lon":18.990427
        },
        {
            "id":"F00312",
            "name":"Kelemen László utca",
            "lat":47.521975,
            "lon":18.990301
        },
        {
            "id":"F00313",
            "name":"Kelemen László utca",
            "lat":47.521622,
            "lon":18.9906
        },
        {
            "id":"F00314",
            "name":"Zuhatag sor",
            "lat":47.526072,
            "lon":18.986014
        },
        {
            "id":"F00315",
            "name":"Zuhatag sor",
            "lat":47.526152,
            "lon":18.985801
        },
        {
            "id":"F00316",
            "name":"Nagyhíd",
            "lat":47.528526,
            "lon":18.983687
        },
        {
            "id":"F00317",
            "name":"Nagyhíd",
            "lat":47.528274,
            "lon":18.98386
        },
        {
            "id":"F00318",
            "name":"Vadaskerti utca",
            "lat":47.531798,
            "lon":18.980987
        },
        {
            "id":"F00319",
            "name":"Vadaskerti utca",
            "lat":47.531888,
            "lon":18.980787
        },
        {
            "id":"F00320",
            "name":"Budenz út",
            "lat":47.52029,
            "lon":18.988862
        },
        {
            "id":"F00321",
            "name":"Széher út",
            "lat":47.525994,
            "lon":18.976838
        },
        {
            "id":"F00322",
            "name":"Tárogató út",
            "lat":47.527435,
            "lon":18.979439
        },
        {
            "id":"F00323",
            "name":"Bölöni György utca",
            "lat":47.525774,
            "lon":18.98446
        },
        {
            "id":"F00324",
            "name":"Bölöni György utca",
            "lat":47.525837,
            "lon":18.984168
        },
        {
            "id":"F00325",
            "name":"Szerb Antal utca",
            "lat":47.528066,
            "lon":18.981456
        },
        {
            "id":"F00326",
            "name":"Szerb Antal utca",
            "lat":47.528371,
            "lon":18.980938
        },
        {
            "id":"F00327",
            "name":"Lipótmezei út",
            "lat":47.530529,
            "lon":18.97877
        },
        {
            "id":"F00328",
            "name":"Lipótmezei út",
            "lat":47.530852,
            "lon":18.978252
        },
        {
            "id":"F00329",
            "name":"Nyéki út",
            "lat":47.534771,
            "lon":18.973917
        },
        {
            "id":"F00330",
            "name":"Nyéki út",
            "lat":47.534574,
            "lon":18.973997
        },
        {
            "id":"F00331",
            "name":"Csibor utca",
            "lat":47.536729,
            "lon":18.969159
        },
        {
            "id":"F00332",
            "name":"Csibor utca",
            "lat":47.536127,
            "lon":18.970568
        },
        {
            "id":"F00339",
            "name":"Hidegkúti út",
            "lat":47.544676,
            "lon":18.963581
        },
        {
            "id":"F00340",
            "name":"Bátori László utca",
            "lat":47.544182,
            "lon":18.963609
        },
        {
            "id":"F00345",
            "name":"Heinrich István utca",
            "lat":47.539321,
            "lon":18.970935
        },
        {
            "id":"F00346",
            "name":"Heinrich István utca",
            "lat":47.539321,
            "lon":18.970736
        },
        {
            "id":"F00347",
            "name":"Völgy utca",
            "lat":47.53676,
            "lon":18.975375
        },
        {
            "id":"F00348",
            "name":"Völgy utca",
            "lat":47.536445,
            "lon":18.975628
        },
        {
            "id":"F00350",
            "name":"Ady lépcső",
            "lat":47.543555,
            "lon":18.944839
        },
        {
            "id":"F00351",
            "name":"Adyliget",
            "lat":47.547236,
            "lon":18.938309
        },
        {
            "id":"F00352",
            "name":"Adyliget",
            "lat":47.546985,
            "lon":18.938721
        },
        {
            "id":"F00353",
            "name":"Határ utca",
            "lat":47.545027,
            "lon":18.952448
        },
        {
            "id":"F00354",
            "name":"Villám utca",
            "lat":47.545244,
            "lon":18.952753
        },
        {
            "id":"F00355",
            "name":"Nagyrét utca",
            "lat":47.546566,
            "lon":18.952831
        },
        {
            "id":"F00356",
            "name":"Bükkfa utca",
            "lat":47.546482,
            "lon":18.960483
        },
        {
            "id":"F00357",
            "name":"Vezér utca",
            "lat":47.5465,
            "lon":18.959978
        },
        {
            "id":"F00358",
            "name":"Hunyadi János utca",
            "lat":47.548581,
            "lon":18.964717
        },
        {
            "id":"F00359",
            "name":"Hunyadi János utca",
            "lat":47.548077,
            "lon":18.964625
        },
        {
            "id":"F00360",
            "name":"Kossuth Lajos utca",
            "lat":47.552142,
            "lon":18.964273
        },
        {
            "id":"F00361",
            "name":"Kossuth Lajos utca",
            "lat":47.552079,
            "lon":18.964114
        },
        {
            "id":"F00362",
            "name":"Kerényi Frigyes utca",
            "lat":47.553066,
            "lon":18.949338
        },
        {
            "id":"F00363",
            "name":"Kerényi Frigyes utca",
            "lat":47.55312,
            "lon":18.949178
        },
        {
            "id":"F00364",
            "name":"Ábránd utca",
            "lat":47.55131,
            "lon":18.947242
        },
        {
            "id":"F00365",
            "name":"Ábránd utca",
            "lat":47.551598,
            "lon":18.947002
        },
        {
            "id":"F00366",
            "name":"Turul utca",
            "lat":47.548119,
            "lon":18.949719
        },
        {
            "id":"F00367",
            "name":"Turul utca",
            "lat":47.548308,
            "lon":18.94936
        },
        {
            "id":"F00368",
            "name":"Széchenyi utca",
            "lat":47.547718,
            "lon":18.954423
        },
        {
            "id":"F00369",
            "name":"Széchenyi utca",
            "lat":47.54753,
            "lon":18.954715
        },
        {
            "id":"F00370",
            "name":"Turul utca (kishíd)",
            "lat":47.548985,
            "lon":18.951763
        },
        {
            "id":"F00371",
            "name":"Turul utca (kishíd)",
            "lat":47.5492,
            "lon":18.951431
        },
        {
            "id":"F00372",
            "name":"Gondozási Központ",
            "lat":47.514382,
            "lon":19.015515
        },
        {
            "id":"F00373",
            "name":"Gondozási Központ",
            "lat":47.514121,
            "lon":19.015622
        },
        {
            "id":"F00374",
            "name":"Arany János utca",
            "lat":47.554736,
            "lon":18.946079
        },
        {
            "id":"F00375",
            "name":"Arany János utca",
            "lat":47.554853,
            "lon":18.945907
        },
        {
            "id":"F00376",
            "name":"Szirom utca",
            "lat":47.55796,
            "lon":18.940333
        },
        {
            "id":"F00377",
            "name":"Szirom utca",
            "lat":47.557682,
            "lon":18.940706
        },
        {
            "id":"F00378",
            "name":"Kerekhegyi utca",
            "lat":47.559859,
            "lon":18.94191
        },
        {
            "id":"F00379",
            "name":"Kerekhegyi utca",
            "lat":47.560372,
            "lon":18.942016
        },
        {
            "id":"F00380",
            "name":"Máriaremetei kegytemplom",
            "lat":47.562786,
            "lon":18.94609
        },
        {
            "id":"F00381",
            "name":"Máriaremetei kegytemplom",
            "lat":47.562408,
            "lon":18.945732
        },
        {
            "id":"F00382",
            "name":"Köztársaság utca",
            "lat":47.566112,
            "lon":18.942934
        },
        {
            "id":"F00383",
            "name":"Köztársaság utca",
            "lat":47.566417,
            "lon":18.942349
        },
        {
            "id":"F00384",
            "name":"Honfoglalás utca",
            "lat":47.568772,
            "lon":18.940391
        },
        {
            "id":"F00385",
            "name":"Honfoglalás utca",
            "lat":47.568852,
            "lon":18.940151
        },
        {
            "id":"F00387",
            "name":"Budaliget, Géza fejedelem útja",
            "lat":47.567706,
            "lon":18.93626
        },
        {
            "id":"F00388",
            "name":"Csatlós utca",
            "lat":47.558264,
            "lon":18.948823
        },
        {
            "id":"F00389",
            "name":"Csatlós utca",
            "lat":47.558804,
            "lon":18.948596
        },
        {
            "id":"F00390",
            "name":"Máriaremetei kegytemplom",
            "lat":47.56259,
            "lon":18.947579
        },
        {
            "id":"F00391",
            "name":"Máriaremetei kegytemplom",
            "lat":47.562194,
            "lon":18.947553
        },
        {
            "id":"F00392",
            "name":"Bölény utca",
            "lat":47.564975,
            "lon":18.94998
        },
        {
            "id":"F00393",
            "name":"Bölény utca",
            "lat":47.565345,
            "lon":18.950405
        },
        {
            "id":"F00394",
            "name":"Solymári elágazás",
            "lat":47.566797,
            "lon":18.955293
        },
        {
            "id":"F00395",
            "name":"Solymári elágazás",
            "lat":47.566841,
            "lon":18.95492
        },
        {
            "id":"F00396",
            "name":"Szarvashegy utca",
            "lat":47.569301,
            "lon":18.948723
        },
        {
            "id":"F00397",
            "name":"Szarvashegy utca",
            "lat":47.569274,
            "lon":18.948523
        },
        {
            "id":"F00398",
            "name":"Örökzöld utca",
            "lat":47.572355,
            "lon":18.944424
        },
        {
            "id":"F00399",
            "name":"Örökzöld utca",
            "lat":47.571879,
            "lon":18.944704
        },
        {
            "id":"F00400",
            "name":"Templom utca",
            "lat":47.564588,
            "lon":18.960187
        },
        {
            "id":"F00401",
            "name":"Templom utca",
            "lat":47.564624,
            "lon":18.959629
        },
        {
            "id":"F00402",
            "name":"Községház utca",
            "lat":47.562459,
            "lon":18.96326
        },
        {
            "id":"F00403",
            "name":"Községház utca",
            "lat":47.562962,
            "lon":18.962741
        },
        {
            "id":"F00404",
            "name":"Mikszáth Kálmán utca",
            "lat":47.559195,
            "lon":18.965671
        },
        {
            "id":"F00405",
            "name":"Mikszáth Kálmán utca",
            "lat":47.559762,
            "lon":18.965098
        },
        {
            "id":"F00406",
            "name":"Kölcsey utca",
            "lat":47.55531,
            "lon":18.965903
        },
        {
            "id":"F00407",
            "name":"Kölcsey utca",
            "lat":47.555697,
            "lon":18.965929
        },
        {
            "id":"F00409",
            "name":"Szent János Kórház",
            "lat":47.509784,
            "lon":19.009783
        },
        {
            "id":"F00410",
            "name":"Szent János Kórház",
            "lat":47.509874,
            "lon":19.009836
        },
        {
            "id":"F00411",
            "name":"Szent János Kórház",
            "lat":47.509837,
            "lon":19.009411
        },
        {
            "id":"F00412",
            "name":"Széll Kálmán tér M",
            "lat":47.5078,
            "lon":19.02448
        },
        {
            "id":"F00413",
            "name":"Széll Kálmán tér M",
            "lat":47.507575,
            "lon":19.025622
        },
        {
            "id":"F00414",
            "name":"Kelemen László utca",
            "lat":47.52226,
            "lon":18.990825
        },
        {
            "id":"F00415",
            "name":"Kelemen László utca",
            "lat":47.522278,
            "lon":18.990599
        },
        {
            "id":"F00416",
            "name":"Széher út 16.",
            "lat":47.521951,
            "lon":18.984624
        },
        {
            "id":"F00417",
            "name":"Bölöni György utca / Széher út",
            "lat":47.524126,
            "lon":18.980545
        },
        {
            "id":"F00422",
            "name":"Széll Kálmán tér M",
            "lat":47.507584,
            "lon":19.024799
        },
        {
            "id":"F00423",
            "name":"Vöröstorony utca",
            "lat":47.52857,
            "lon":18.999862
        },
        {
            "id":"F00424",
            "name":"Vöröstorony utca",
            "lat":47.528471,
            "lon":18.999995
        },
        {
            "id":"F00425",
            "name":"Nyúl utca",
            "lat":47.508761,
            "lon":19.018041
        },
        {
            "id":"F00426",
            "name":"Nyúl utca",
            "lat":47.508725,
            "lon":19.017908
        },
        {
            "id":"F00427",
            "name":"Nyúl utca",
            "lat":47.50903,
            "lon":19.017019
        },
        {
            "id":"F00428",
            "name":"Nyúl utca",
            "lat":47.50868,
            "lon":19.018864
        },
        {
            "id":"F00429",
            "name":"Akadémia",
            "lat":47.519545,
            "lon":18.993431
        },
        {
            "id":"F00430",
            "name":"Akadémia",
            "lat":47.519375,
            "lon":18.993856
        },
        {
            "id":"F00431",
            "name":"Akadémia",
            "lat":47.518943,
            "lon":18.994122
        },
        {
            "id":"F00432",
            "name":"Akadémia",
            "lat":47.519294,
            "lon":18.994121
        },
        {
            "id":"F00433",
            "name":"Tücsök utca",
            "lat":47.585487,
            "lon":18.99759
        },
        {
            "id":"F00434",
            "name":"Tücsök utca",
            "lat":47.58546,
            "lon":18.99743
        },
        {
            "id":"F00435",
            "name":"Pusztadombi utca",
            "lat":47.602488,
            "lon":19.056793
        },
        {
            "id":"F00436",
            "name":"Égető utca",
            "lat":47.604054,
            "lon":19.052418
        },
        {
            "id":"F00437",
            "name":"Táncsics Mihály utca",
            "lat":47.602723,
            "lon":19.051234
        },
        {
            "id":"F00438",
            "name":"Gulácsy Lajos utca",
            "lat":47.602642,
            "lon":19.048242
        },
        {
            "id":"F00439",
            "name":"Gulácsy Lajos utca",
            "lat":47.602534,
            "lon":19.048003
        },
        {
            "id":"F00440",
            "name":"Szőlőkert utca",
            "lat":47.554889,
            "lon":19.040682
        },
        {
            "id":"F00441",
            "name":"Szőlőkert utca",
            "lat":47.55533,
            "lon":19.041001
        },
        {
            "id":"F00442",
            "name":"Donát utca",
            "lat":47.604207,
            "lon":19.043933
        },
        {
            "id":"F00443",
            "name":"Bojtár utca 49.",
            "lat":47.55944,
            "lon":19.039791
        },
        {
            "id":"F00444",
            "name":"Bojtár utca 49.",
            "lat":47.55953,
            "lon":19.038303
        },
        {
            "id":"F00445",
            "name":"Templom utca",
            "lat":47.600312,
            "lon":19.04662
        },
        {
            "id":"F00446",
            "name":"Templom utca",
            "lat":47.600123,
            "lon":19.046354
        },
        {
            "id":"F00447",
            "name":"Hősök tere",
            "lat":47.598153,
            "lon":19.043987
        },
        {
            "id":"F00448",
            "name":"Hősök tere",
            "lat":47.597839,
            "lon":19.044652
        },
        {
            "id":"F00449",
            "name":"Tamás utca",
            "lat":47.599601,
            "lon":19.041154
        },
        {
            "id":"F00450",
            "name":"Tamás utca",
            "lat":47.599385,
            "lon":19.041447
        },
        {
            "id":"F00451",
            "name":"Pince köz",
            "lat":47.601598,
            "lon":19.0361
        },
        {
            "id":"F00452",
            "name":"Hősök tere",
            "lat":47.597596,
            "lon":19.045662
        },
        {
            "id":"F00453",
            "name":"Hősök tere",
            "lat":47.598063,
            "lon":19.045569
        },
        {
            "id":"F00454",
            "name":"Zemplén Győző utca",
            "lat":47.596121,
            "lon":19.04553
        },
        {
            "id":"F00455",
            "name":"Zemplén Győző utca",
            "lat":47.595419,
            "lon":19.045317
        },
        {
            "id":"F00456",
            "name":"Nád utca",
            "lat":47.593989,
            "lon":19.04912
        },
        {
            "id":"F00457",
            "name":"Nád utca",
            "lat":47.594115,
            "lon":19.048442
        },
        {
            "id":"F00458",
            "name":"Pünkösdfürdő utca",
            "lat":47.595005,
            "lon":19.051713
        },
        {
            "id":"F00459",
            "name":"Pünkösdfürdő utca",
            "lat":47.594915,
            "lon":19.051819
        },
        {
            "id":"F00460",
            "name":"Békásmegyer H",
            "lat":47.598126,
            "lon":19.054266
        },
        {
            "id":"F00461",
            "name":"Békásmegyer H",
            "lat":47.597883,
            "lon":19.05408
        },
        {
            "id":"F00462",
            "name":"Szolgáltatóház",
            "lat":47.601241,
            "lon":19.058143
        },
        {
            "id":"F00463",
            "name":"Szolgáltatóház",
            "lat":47.601229,
            "lon":19.057897
        },
        {
            "id":"F00464",
            "name":"Hímző utca",
            "lat":47.5972,
            "lon":19.058734
        },
        {
            "id":"F00465",
            "name":"Hímző utca",
            "lat":47.597047,
            "lon":19.059505
        },
        {
            "id":"F00466",
            "name":"Medgyessy Ferenc utca",
            "lat":47.594942,
            "lon":19.058055
        },
        {
            "id":"F00467",
            "name":"Medgyessy Ferenc utca",
            "lat":47.595131,
            "lon":19.056792
        },
        {
            "id":"F00468",
            "name":"Békásmegyer H",
            "lat":47.597527,
            "lon":19.056227
        },
        {
            "id":"F00469",
            "name":"Békásmegyer H",
            "lat":47.598207,
            "lon":19.055835
        },
        {
            "id":"F00471",
            "name":"Békásmegyer",
            "lat":47.598594,
            "lon":19.055064
        },
        {
            "id":"F00472",
            "name":"Békásmegyer",
            "lat":47.597587,
            "lon":19.054133
        },
        {
            "id":"F00473",
            "name":"Madzsar József utca / Pünkösdfürdő utca",
            "lat":47.595284,
            "lon":19.054399
        },
        {
            "id":"F00474",
            "name":"Madzsar József utca / Pünkösdfürdő utca",
            "lat":47.595176,
            "lon":19.054598
        },
        {
            "id":"F00475",
            "name":"Madzsar József utca / Pünkösdfürdő utca",
            "lat":47.594861,
            "lon":19.053747
        },
        {
            "id":"F00476",
            "name":"Madzsar József utca / Pünkösdfürdő utca",
            "lat":47.59469,
            "lon":19.05279
        },
        {
            "id":"F00477",
            "name":"Szent István utca",
            "lat":47.592415,
            "lon":19.052111
        },
        {
            "id":"F00478",
            "name":"Csillaghegy H",
            "lat":47.585804,
            "lon":19.047125
        },
        {
            "id":"F00479",
            "name":"Csillaghegy H",
            "lat":47.58611,
            "lon":19.045371
        },
        {
            "id":"F00480",
            "name":"Csillaghegy",
            "lat":47.585948,
            "lon":19.044932
        },
        {
            "id":"F00481",
            "name":"Csillaghegy",
            "lat":47.586272,
            "lon":19.045078
        },
        {
            "id":"F00482",
            "name":"Szent István utca",
            "lat":47.590814,
            "lon":19.049851
        },
        {
            "id":"F00483",
            "name":"Aquincum",
            "lat":47.567968,
            "lon":19.048641
        },
        {
            "id":"F00484",
            "name":"Aquincum",
            "lat":47.568489,
            "lon":19.048349
        },
        {
            "id":"F00485",
            "name":"Római tér",
            "lat":47.569821,
            "lon":19.048481
        },
        {
            "id":"F00486",
            "name":"Monostori út",
            "lat":47.57314,
            "lon":19.050621
        },
        {
            "id":"F00487",
            "name":"Rómaifürdő",
            "lat":47.576201,
            "lon":19.048727
        },
        {
            "id":"F00488",
            "name":"Rómaifürdő",
            "lat":47.575121,
            "lon":19.048421
        },
        {
            "id":"F00489",
            "name":"Rómaifürdő H",
            "lat":47.575622,
            "lon":19.049013
        },
        {
            "id":"F00490",
            "name":"Czetz János köz",
            "lat":47.578653,
            "lon":19.050502
        },
        {
            "id":"F00491",
            "name":"Czetz János köz",
            "lat":47.578761,
            "lon":19.050156
        },
        {
            "id":"F00492",
            "name":"Rómaifürdő H",
            "lat":47.578284,
            "lon":19.048947
        },
        {
            "id":"F00493",
            "name":"Attila utca",
            "lat":47.579328,
            "lon":19.052762
        },
        {
            "id":"F00494",
            "name":"Attila utca",
            "lat":47.579697,
            "lon":19.052895
        },
        {
            "id":"F00495",
            "name":"Huba utca",
            "lat":47.581342,
            "lon":19.054477
        },
        {
            "id":"F00496",
            "name":"Huba utca",
            "lat":47.581657,
            "lon":19.054543
        },
        {
            "id":"F00497",
            "name":"Hunyadi utca",
            "lat":47.584949,
            "lon":19.056099
        },
        {
            "id":"F00498",
            "name":"Hunyadi utca",
            "lat":47.584805,
            "lon":19.0559
        },
        {
            "id":"F00499",
            "name":"Pók utca",
            "lat":47.565278,
            "lon":19.05797
        },
        {
            "id":"F00500",
            "name":"Dósa utca",
            "lat":47.57582,
            "lon":19.056616
        },
        {
            "id":"F00501",
            "name":"Dósa utca",
            "lat":47.57564,
            "lon":19.057666
        },
        {
            "id":"F00502",
            "name":"Kadosa utca",
            "lat":47.57126,
            "lon":19.05413
        },
        {
            "id":"F00504",
            "name":"Sujtás utca",
            "lat":47.563461,
            "lon":19.050927
        },
        {
            "id":"F00505",
            "name":"Záhony utca",
            "lat":47.561375,
            "lon":19.048229
        },
        {
            "id":"F00506",
            "name":"Záhony utca",
            "lat":47.562238,
            "lon":19.048136
        },
        {
            "id":"F00507",
            "name":"Záhony utca",
            "lat":47.560997,
            "lon":19.047139
        },
        {
            "id":"F00508",
            "name":"Kaszásdűlő H",
            "lat":47.557129,
            "lon":19.046116
        },
        {
            "id":"F00509",
            "name":"Kaszásdűlő H",
            "lat":47.556598,
            "lon":19.045585
        },
        {
            "id":"F00510",
            "name":"Kaszásdűlő",
            "lat":47.556508,
            "lon":19.045133
        },
        {
            "id":"F00511",
            "name":"Kaszásdűlő",
            "lat":47.557015,
            "lon":19.045379
        },
        {
            "id":"F00512",
            "name":"Kaszásdűlő utca",
            "lat":47.557642,
            "lon":19.041678
        },
        {
            "id":"F00513",
            "name":"Kaszásdűlő utca",
            "lat":47.558289,
            "lon":19.042063
        },
        {
            "id":"F00514",
            "name":"Dinamó utca",
            "lat":47.564009,
            "lon":19.036309
        },
        {
            "id":"F00515",
            "name":"Kunigunda útja",
            "lat":47.560105,
            "lon":19.033545
        },
        {
            "id":"F00516",
            "name":"Kunigunda útja",
            "lat":47.560357,
            "lon":19.034994
        },
        {
            "id":"F00517",
            "name":"Kunigunda útja",
            "lat":47.559962,
            "lon":19.035539
        },
        {
            "id":"F00518",
            "name":"Orbán Balázs út",
            "lat":47.55585,
            "lon":19.02685
        },
        {
            "id":"F00519",
            "name":"Orbán Balázs út",
            "lat":47.556425,
            "lon":19.026385
        },
        {
            "id":"F00520",
            "name":"Bojtár utca (Bécsi út)",
            "lat":47.560122,
            "lon":19.024642
        },
        {
            "id":"F00521",
            "name":"Bojtár utca",
            "lat":47.559016,
            "lon":19.024962
        },
        {
            "id":"F00522",
            "name":"Óbudai temető",
            "lat":47.566004,
            "lon":19.022035
        },
        {
            "id":"F00523",
            "name":"Óbudai temető",
            "lat":47.565923,
            "lon":19.023258
        },
        {
            "id":"F00524",
            "name":"Óbudai temető",
            "lat":47.56577,
            "lon":19.022846
        },
        {
            "id":"F00528",
            "name":"Kocsis Sándor út",
            "lat":47.574304,
            "lon":19.015186
        },
        {
            "id":"F00529",
            "name":"Sorompó",
            "lat":47.575419,
            "lon":19.014055
        },
        {
            "id":"F00530",
            "name":"Ürömhegyi út",
            "lat":47.577568,
            "lon":19.010637
        },
        {
            "id":"F00531",
            "name":"Ürömhegyi út",
            "lat":47.577738,
            "lon":19.010013
        },
        {
            "id":"F00532",
            "name":"Üröm vasúti megállóhely",
            "lat":47.581522,
            "lon":19.002246
        },
        {
            "id":"F00533",
            "name":"Üröm vasúti megállóhely",
            "lat":47.581684,
            "lon":19.001794
        },
        {
            "id":"F00534",
            "name":"Királyhelmec utca",
            "lat":47.553016,
            "lon":19.02244
        },
        {
            "id":"F00535",
            "name":"Farkastorki út",
            "lat":47.553969,
            "lon":19.020978
        },
        {
            "id":"F00536",
            "name":"Királyhelmec utca",
            "lat":47.55351,
            "lon":19.021868
        },
        {
            "id":"F00537",
            "name":"Judit utca",
            "lat":47.55628,
            "lon":19.018067
        },
        {
            "id":"F00538",
            "name":"Judit utca",
            "lat":47.556082,
            "lon":19.018173
        },
        {
            "id":"F00539",
            "name":"Laborc utca",
            "lat":47.557853,
            "lon":19.015475
        },
        {
            "id":"F00540",
            "name":"Laborc utca",
            "lat":47.557745,
            "lon":19.015462
        },
        {
            "id":"F00541",
            "name":"Jablonka út 53.",
            "lat":47.558914,
            "lon":19.013322
        },
        {
            "id":"F00542",
            "name":"Jablonka út 58.",
            "lat":47.559147,
            "lon":19.012723
        },
        {
            "id":"F00543",
            "name":"Jablonka út 73.",
            "lat":47.560613,
            "lon":19.010929
        },
        {
            "id":"F00544",
            "name":"Jablonka út 74.",
            "lat":47.560487,
            "lon":19.010902
        },
        {
            "id":"F00545",
            "name":"Jablonka út",
            "lat":47.562231,
            "lon":19.00811
        },
        {
            "id":"F00546",
            "name":"Erdőalja út",
            "lat":47.559451,
            "lon":19.006597
        },
        {
            "id":"F00547",
            "name":"Áldomás utca",
            "lat":47.56212,
            "lon":19.035658
        },
        {
            "id":"F00548",
            "name":"Áldomás utca",
            "lat":47.562066,
            "lon":19.035512
        },
        {
            "id":"F00549",
            "name":"Kubik utca",
            "lat":47.562595,
            "lon":19.023565
        },
        {
            "id":"F00550",
            "name":"Kubik utca",
            "lat":47.561381,
            "lon":19.023964
        },
        {
            "id":"F00551",
            "name":"Hedvig utca",
            "lat":47.556071,
            "lon":19.011317
        },
        {
            "id":"F00552",
            "name":"Hedvig utca",
            "lat":47.556125,
            "lon":19.011104
        },
        {
            "id":"F00553",
            "name":"Erdőalja út 43.",
            "lat":47.553517,
            "lon":19.014016
        },
        {
            "id":"F00554",
            "name":"Viharhegyi út",
            "lat":47.552654,
            "lon":19.014442
        },
        {
            "id":"F00555",
            "name":"Viharhegyi út",
            "lat":47.553113,
            "lon":19.014349
        },
        {
            "id":"F00556",
            "name":"Körtvélyes köz",
            "lat":47.553338,
            "lon":19.017351
        },
        {
            "id":"F00557",
            "name":"Körtvélyes utca",
            "lat":47.553257,
            "lon":19.017232
        },
        {
            "id":"F00558",
            "name":"Óbudai temető",
            "lat":47.564466,
            "lon":19.022581
        },
        {
            "id":"F00559",
            "name":"Iskola",
            "lat":47.550433,
            "lon":19.016064
        },
        {
            "id":"F00560",
            "name":"Iskola",
            "lat":47.550199,
            "lon":19.016303
        },
        {
            "id":"F00561",
            "name":"Királylaki út",
            "lat":47.549056,
            "lon":19.014843
        },
        {
            "id":"F00562",
            "name":"Királylaki út",
            "lat":47.548813,
            "lon":19.015122
        },
        {
            "id":"F00563",
            "name":"Máramaros út",
            "lat":47.546619,
            "lon":19.017129
        },
        {
            "id":"F00564",
            "name":"Táborhegyi út",
            "lat":47.550156,
            "lon":19.025896
        },
        {
            "id":"F00565",
            "name":"Táborhegyi út",
            "lat":47.549661,
            "lon":19.026454
        },
        {
            "id":"F00566",
            "name":"Bécsi út / Vörösvári út",
            "lat":47.548681,
            "lon":19.027796
        },
        {
            "id":"F00567",
            "name":"Bécsi út / Vörösvári út",
            "lat":47.547902,
            "lon":19.029636
        },
        {
            "id":"F00569",
            "name":"Bécsi út / Vörösvári út",
            "lat":47.548767,
            "lon":19.029378
        },
        {
            "id":"F00570",
            "name":"Bécsi út / Vörösvári út",
            "lat":47.548421,
            "lon":19.029603
        },
        {
            "id":"F00573",
            "name":"Óbuda, Bogdáni út",
            "lat":47.550725,
            "lon":19.041825
        },
        {
            "id":"F00574",
            "name":"Óbuda, Bogdáni út",
            "lat":47.550539,
            "lon":19.042058
        },
        {
            "id":"F00575",
            "name":"Óbuda, Bogdáni út",
            "lat":47.550212,
            "lon":19.041985
        },
        {
            "id":"F00576",
            "name":"Bogdáni út",
            "lat":47.550212,
            "lon":19.043938
        },
        {
            "id":"F00577",
            "name":"Bogdáni út",
            "lat":47.548434,
            "lon":19.043134
        },
        {
            "id":"F00578",
            "name":"Filatorigát",
            "lat":47.551858,
            "lon":19.046356
        },
        {
            "id":"F00579",
            "name":"Filatorigát",
            "lat":47.551948,
            "lon":19.04613
        },
        {
            "id":"F00580",
            "name":"Raktár utca",
            "lat":47.545328,
            "lon":19.042809
        },
        {
            "id":"F00581",
            "name":"Raktár utca",
            "lat":47.544986,
            "lon":19.042729
        },
        {
            "id":"F00583",
            "name":"Raktár utca",
            "lat":47.544647,
            "lon":19.042231
        },
        {
            "id":"F00584",
            "name":"Óbudai rendelőintézet",
            "lat":47.547,
            "lon":19.032234
        },
        {
            "id":"F00585",
            "name":"Óbudai rendelőintézet",
            "lat":47.545444,
            "lon":19.033749
        },
        {
            "id":"F00586",
            "name":"Óbudai rendelőintézet",
            "lat":47.54593,
            "lon":19.033467
        },
        {
            "id":"F00587",
            "name":"Óbudai rendelőintézet",
            "lat":47.544854,
            "lon":19.034776
        },
        {
            "id":"F00588",
            "name":"Vihar utca",
            "lat":47.543987,
            "lon":19.036393
        },
        {
            "id":"F00589",
            "name":"Szőlő utca",
            "lat":47.543529,
            "lon":19.036473
        },
        {
            "id":"F00592",
            "name":"Váradi utca",
            "lat":47.54351,
            "lon":19.031491
        },
        {
            "id":"F00593",
            "name":"Váradi utca",
            "lat":47.543438,
            "lon":19.031518
        },
        {
            "id":"F00596",
            "name":"Szent Margit Kórház",
            "lat":47.539939,
            "lon":19.03132
        },
        {
            "id":"F00597",
            "name":"Szent Margit Kórház",
            "lat":47.538779,
            "lon":19.031466
        },
        {
            "id":"F00600",
            "name":"Katinyi mártírok parkja",
            "lat":47.53224,
            "lon":19.037657
        },
        {
            "id":"F00601",
            "name":"Katinyi mártírok parkja",
            "lat":47.532069,
            "lon":19.037644
        },
        {
            "id":"F00602",
            "name":"Galagonya utca",
            "lat":47.53013,
            "lon":19.03943
        },
        {
            "id":"F00603",
            "name":"Nagyszombat utca",
            "lat":47.531863,
            "lon":19.040021
        },
        {
            "id":"F00604",
            "name":"Tímár utca",
            "lat":47.535173,
            "lon":19.039901
        },
        {
            "id":"F00605",
            "name":"Tímár utca",
            "lat":47.534339,
            "lon":19.039748
        },
        {
            "id":"F00606",
            "name":"Kiscelli utca",
            "lat":47.538753,
            "lon":19.040459
        },
        {
            "id":"F00607",
            "name":"Kiscelli utca",
            "lat":47.53926,
            "lon":19.040425
        },
        {
            "id":"F00608",
            "name":"Remetehegyi út",
            "lat":47.535342,
            "lon":19.027243
        },
        {
            "id":"F00609",
            "name":"Mikoviny utca",
            "lat":47.53214,
            "lon":19.029051
        },
        {
            "id":"F00610",
            "name":"Kőzet utca",
            "lat":47.532878,
            "lon":19.028453
        },
        {
            "id":"F00611",
            "name":"Flórián tér",
            "lat":47.542989,
            "lon":19.042251
        },
        {
            "id":"F00612",
            "name":"Flórián tér",
            "lat":47.542003,
            "lon":19.041222
        },
        {
            "id":"F00613",
            "name":"Flórián tér",
            "lat":47.541676,
            "lon":19.040073
        },
        {
            "id":"F00614",
            "name":"Flórián tér",
            "lat":47.541516,
            "lon":19.039957
        },
        {
            "id":"F00615",
            "name":"Flórián tér",
            "lat":47.541083,
            "lon":19.040545
        },
        {
            "id":"F00616",
            "name":"Flórián tér",
            "lat":47.541739,
            "lon":19.039183
        },
        {
            "id":"F00617",
            "name":"ATI",
            "lat":47.570446,
            "lon":19.018391
        },
        {
            "id":"F00618",
            "name":"ATI",
            "lat":47.569628,
            "lon":19.018923
        },
        {
            "id":"F00619",
            "name":"Szentlélek tér H",
            "lat":47.539904,
            "lon":19.045878
        },
        {
            "id":"F00620",
            "name":"Szentlélek tér H",
            "lat":47.539787,
            "lon":19.046303
        },
        {
            "id":"F00621",
            "name":"Szentlélek tér H",
            "lat":47.54021,
            "lon":19.045904
        },
        {
            "id":"F00622",
            "name":"Szentlélek tér H",
            "lat":47.540165,
            "lon":19.046263
        },
        {
            "id":"F00623",
            "name":"Szentlélek tér H",
            "lat":47.54012,
            "lon":19.046502
        },
        {
            "id":"F00624",
            "name":"Szentlélek tér",
            "lat":47.539572,
            "lon":19.047206
        },
        {
            "id":"F00625",
            "name":"Szentlélek tér",
            "lat":47.53976,
            "lon":19.047113
        },
        {
            "id":"F00626",
            "name":"Szentlélek tér H",
            "lat":47.539588,
            "lon":19.045209
        },
        {
            "id":"F00627",
            "name":"Szentlélek tér H",
            "lat":47.539715,
            "lon":19.045758
        },
        {
            "id":"F00628",
            "name":"Szentlélek tér H",
            "lat":47.539239,
            "lon":19.045692
        },
        {
            "id":"F00629",
            "name":"Szentlélek tér H",
            "lat":47.53936,
            "lon":19.045937
        },
        {
            "id":"F00630",
            "name":"Bóbita utca",
            "lat":47.572856,
            "lon":19.01629
        },
        {
            "id":"F00631",
            "name":"Bóbita utca",
            "lat":47.571957,
            "lon":19.016968
        },
        {
            "id":"F00632",
            "name":"Tímár utca",
            "lat":47.534304,
            "lon":19.045074
        },
        {
            "id":"F00633",
            "name":"Tímár utca",
            "lat":47.533599,
            "lon":19.044218
        },
        {
            "id":"F00634",
            "name":"Szélvész utca",
            "lat":47.531806,
            "lon":19.019542
        },
        {
            "id":"F00635",
            "name":"Szélvész utca",
            "lat":47.531401,
            "lon":19.020379
        },
        {
            "id":"F00636",
            "name":"Madzsar József utca / Hadrianus utca",
            "lat":47.603073,
            "lon":19.059334
        },
        {
            "id":"F00637",
            "name":"Madzsar József utca / Hadrianus utca",
            "lat":47.604044,
            "lon":19.060052
        },
        {
            "id":"F00638",
            "name":"Hadrianus utca",
            "lat":47.604062,
            "lon":19.063324
        },
        {
            "id":"F00639",
            "name":"Hadrianus utca",
            "lat":47.603939,
            "lon":19.062997
        },
        {
            "id":"F00641",
            "name":"Békásmegyer, Újmegyeri tér",
            "lat":47.603081,
            "lon":19.066262
        },
        {
            "id":"F00642",
            "name":"Békásmegyer, Újmegyeri tér",
            "lat":47.602631,
            "lon":19.06597
        },
        {
            "id":"F00644",
            "name":"Békásmegyer, Újmegyeri tér",
            "lat":47.602802,
            "lon":19.066342
        },
        {
            "id":"F00645",
            "name":"Bálint György utca",
            "lat":47.599277,
            "lon":19.064971
        },
        {
            "id":"F00646",
            "name":"Bálint György utca",
            "lat":47.600059,
            "lon":19.065197
        },
        {
            "id":"F00649",
            "name":"Hatvany Lajos utca / Juhász Gyula utca",
            "lat":47.597154,
            "lon":19.063308
        },
        {
            "id":"F00650",
            "name":"Hatvany Lajos utca / Juhász Gyula utca",
            "lat":47.596857,
            "lon":19.06255
        },
        {
            "id":"F00653",
            "name":"Boglár utca",
            "lat":47.594879,
            "lon":19.060568
        },
        {
            "id":"F00654",
            "name":"Pünkösdfürdő",
            "lat":47.594473,
            "lon":19.065847
        },
        {
            "id":"F00655",
            "name":"Pünkösdfürdő",
            "lat":47.594347,
            "lon":19.066352
        },
        {
            "id":"F00656",
            "name":"Sinkovits Imre utca",
            "lat":47.589526,
            "lon":19.065593
        },
        {
            "id":"F00657",
            "name":"Sinkovits Imre utca",
            "lat":47.590057,
            "lon":19.065527
        },
        {
            "id":"F00658",
            "name":"Mátyás király út",
            "lat":47.584789,
            "lon":19.065046
        },
        {
            "id":"F00659",
            "name":"Mátyás király út",
            "lat":47.585077,
            "lon":19.064926
        },
        {
            "id":"F00660",
            "name":"Szent János utca",
            "lat":47.579884,
            "lon":19.064141
        },
        {
            "id":"F00661",
            "name":"Szent János utca",
            "lat":47.578922,
            "lon":19.063742
        },
        {
            "id":"F00662",
            "name":"Nimród utca",
            "lat":47.575657,
            "lon":19.062784
        },
        {
            "id":"F00663",
            "name":"Nimród utca",
            "lat":47.575585,
            "lon":19.062903
        },
        {
            "id":"F00664",
            "name":"Nánási út",
            "lat":47.570279,
            "lon":19.061613
        },
        {
            "id":"F00665",
            "name":"Silvanus sétány",
            "lat":47.567193,
            "lon":19.061506
        },
        {
            "id":"F00666",
            "name":"Aquincum H",
            "lat":47.567347,
            "lon":19.049359
        },
        {
            "id":"F00667",
            "name":"Aquincum H",
            "lat":47.567248,
            "lon":19.049
        },
        {
            "id":"F00668",
            "name":"Aquincum H",
            "lat":47.566439,
            "lon":19.049771
        },
        {
            "id":"F00669",
            "name":"Laborc utca",
            "lat":47.552288,
            "lon":19.027861
        },
        {
            "id":"F00670",
            "name":"Csillaghegyi út / Bojtár utca",
            "lat":47.56051,
            "lon":19.031127
        },
        {
            "id":"F00671",
            "name":"Csillaghegyi út / Bojtár utca",
            "lat":47.56095,
            "lon":19.029878
        },
        {
            "id":"F00672",
            "name":"Zúzmara utca",
            "lat":47.552215,
            "lon":19.023782
        },
        {
            "id":"F00673",
            "name":"Zúzmara utca",
            "lat":47.551793,
            "lon":19.024022
        },
        {
            "id":"F00674",
            "name":"Verhovina utca",
            "lat":47.554535,
            "lon":19.02042
        },
        {
            "id":"F00676",
            "name":"Szamos utca",
            "lat":47.582924,
            "lon":19.06482
        },
        {
            "id":"F00677",
            "name":"Szamos utca",
            "lat":47.582061,
            "lon":19.06454
        },
        {
            "id":"F00678",
            "name":"Óbudai autóbuszgarázs",
            "lat":47.568343,
            "lon":19.026685
        },
        {
            "id":"F00679",
            "name":"Óbudai autóbuszgarázs",
            "lat":47.568145,
            "lon":19.026207
        },
        {
            "id":"F00680",
            "name":"Bécsi út / Vörösvári út",
            "lat":47.550094,
            "lon":19.028805
        },
        {
            "id":"F00681",
            "name":"Kisbojtár utca",
            "lat":47.559888,
            "lon":19.026769
        },
        {
            "id":"F00682",
            "name":"Bercsényi utca",
            "lat":47.585543,
            "lon":19.051486
        },
        {
            "id":"F00683",
            "name":"Bercsényi utca",
            "lat":47.585399,
            "lon":19.051925
        },
        {
            "id":"F00686",
            "name":"Selmeci utca",
            "lat":47.536279,
            "lon":19.033419
        },
        {
            "id":"F00687",
            "name":"Selmeci utca",
            "lat":47.535505,
            "lon":19.033659
        },
        {
            "id":"F00688",
            "name":"Kolostor út",
            "lat":47.533228,
            "lon":19.02577
        },
        {
            "id":"F00690",
            "name":"Magnólia utca",
            "lat":47.564746,
            "lon":19.03074
        },
        {
            "id":"F00691",
            "name":"Madridi utca",
            "lat":47.546505,
            "lon":19.097436
        },
        {
            "id":"F00692",
            "name":"Madridi utca",
            "lat":47.546523,
            "lon":19.097582
        },
        {
            "id":"F00693",
            "name":"Angyalföld kocsiszín (Madridi utca)",
            "lat":47.551158,
            "lon":19.091727
        },
        {
            "id":"F00697",
            "name":"Fóti út",
            "lat":47.582435,
            "lon":19.08161
        },
        {
            "id":"F00698",
            "name":"Fóti út",
            "lat":47.583613,
            "lon":19.08193
        },
        {
            "id":"F00699",
            "name":"Újpest, Fóti út",
            "lat":47.582678,
            "lon":19.082381
        },
        {
            "id":"F00700",
            "name":"Tímár utca",
            "lat":47.572325,
            "lon":19.080806
        },
        {
            "id":"F00701",
            "name":"Tímár utca",
            "lat":47.572379,
            "lon":19.080952
        },
        {
            "id":"F00702",
            "name":"Zsilip utca",
            "lat":47.567927,
            "lon":19.080019
        },
        {
            "id":"F00703",
            "name":"Zsilip utca",
            "lat":47.568809,
            "lon":19.080432
        },
        {
            "id":"F00704",
            "name":"Károlyi István utca",
            "lat":47.565589,
            "lon":19.079234
        },
        {
            "id":"F00705",
            "name":"Károlyi István utca",
            "lat":47.564953,
            "lon":19.079213
        },
        {
            "id":"F00706",
            "name":"Újpest, Árpád út hajóállomás",
            "lat":47.562108,
            "lon":19.078448
        },
        {
            "id":"F00707",
            "name":"Megyer, Julianus barát utca",
            "lat":47.584925,
            "lon":19.086158
        },
        {
            "id":"F00708",
            "name":"Gárdonyi Géza utca",
            "lat":47.58424,
            "lon":19.090438
        },
        {
            "id":"F00709",
            "name":"Megyeri temető",
            "lat":47.582531,
            "lon":19.090796
        },
        {
            "id":"F00710",
            "name":"Megyeri temető",
            "lat":47.581488,
            "lon":19.089851
        },
        {
            "id":"F00711",
            "name":"Fiumei út",
            "lat":47.582551,
            "lon":19.085997
        },
        {
            "id":"F00712",
            "name":"Megyeri út / Fóti út",
            "lat":47.579636,
            "lon":19.088653
        },
        {
            "id":"F00713",
            "name":"Megyeri út / Fóti út",
            "lat":47.57942,
            "lon":19.08751
        },
        {
            "id":"F00714",
            "name":"Megyeri út / Fóti út",
            "lat":47.580346,
            "lon":19.088667
        },
        {
            "id":"F00715",
            "name":"Megyeri út",
            "lat":47.57968,
            "lon":19.088999
        },
        {
            "id":"F00716",
            "name":"Megyer, Szondi utca",
            "lat":47.585885,
            "lon":19.094707
        },
        {
            "id":"F00717",
            "name":"Megyer, Szondi utca",
            "lat":47.58566,
            "lon":19.094149
        },
        {
            "id":"F00718",
            "name":"Megyer, Szondi utca",
            "lat":47.586289,
            "lon":19.095027
        },
        {
            "id":"F00720",
            "name":"Homoktövis utca",
            "lat":47.593997,
            "lon":19.113808
        },
        {
            "id":"F00721",
            "name":"Megyeri út",
            "lat":47.593908,
            "lon":19.113702
        },
        {
            "id":"F00722",
            "name":"Káposztásmegyer, Mogyoródi-patak",
            "lat":47.598499,
            "lon":19.121261
        },
        {
            "id":"F00723",
            "name":"Káposztásmegyer, Megyeri út",
            "lat":47.593184,
            "lon":19.12007
        },
        {
            "id":"F00724",
            "name":"Megyeri út",
            "lat":47.593175,
            "lon":19.12023
        },
        {
            "id":"F00726",
            "name":"Szíjgyártó utca",
            "lat":47.58923,
            "lon":19.114919
        },
        {
            "id":"F00727",
            "name":"Szíjgyártó utca",
            "lat":47.588852,
            "lon":19.114108
        },
        {
            "id":"F00728",
            "name":"Homoktövis utca",
            "lat":47.589417,
            "lon":19.11831
        },
        {
            "id":"F00729",
            "name":"Homoktövis utca (Óvoda)",
            "lat":47.590047,
            "lon":19.117354
        },
        {
            "id":"F00730",
            "name":"Gimnázium",
            "lat":47.582749,
            "lon":19.106177
        },
        {
            "id":"F00731",
            "name":"Gimnázium",
            "lat":47.582677,
            "lon":19.105938
        },
        {
            "id":"F00732",
            "name":"Művelődési Központ",
            "lat":47.57978,
            "lon":19.109258
        },
        {
            "id":"F00733",
            "name":"Művelődési Központ",
            "lat":47.579717,
            "lon":19.109072
        },
        {
            "id":"F00734",
            "name":"Járműtelep utca",
            "lat":47.582932,
            "lon":19.116746
        },
        {
            "id":"F00737",
            "name":"Járműtelep utca",
            "lat":47.581898,
            "lon":19.116665
        },
        {
            "id":"F00738",
            "name":"Galopp utca",
            "lat":47.580648,
            "lon":19.116597
        },
        {
            "id":"F00739",
            "name":"Hajló utca",
            "lat":47.578779,
            "lon":19.112367
        },
        {
            "id":"F00740",
            "name":"Hajló utca",
            "lat":47.578644,
            "lon":19.112633
        },
        {
            "id":"F00741",
            "name":"Óceán-árok utca",
            "lat":47.577995,
            "lon":19.115942
        },
        {
            "id":"F00742",
            "name":"Káposztásmegyer, Szilas-patak",
            "lat":47.577699,
            "lon":19.115144
        },
        {
            "id":"F00745",
            "name":"Óceán-árok utca",
            "lat":47.578382,
            "lon":19.115756
        },
        {
            "id":"F00746",
            "name":"Káposztásmegyer, Szilas-patak",
            "lat":47.577348,
            "lon":19.114452
        },
        {
            "id":"F00747",
            "name":"Ugró Gyula utca",
            "lat":47.580369,
            "lon":19.099235
        },
        {
            "id":"F00748",
            "name":"Erdősor út",
            "lat":47.577937,
            "lon":19.106757
        },
        {
            "id":"F00749",
            "name":"Erdősor út",
            "lat":47.577901,
            "lon":19.106557
        },
        {
            "id":"F00750",
            "name":"Újpest, Erdősor út",
            "lat":47.577838,
            "lon":19.105813
        },
        {
            "id":"F00751",
            "name":"Iglói utca",
            "lat":47.573648,
            "lon":19.103004
        },
        {
            "id":"F00752",
            "name":"Vadgesztenye utca",
            "lat":47.575384,
            "lon":19.104335
        },
        {
            "id":"F00753",
            "name":"Fóti út",
            "lat":47.577835,
            "lon":19.093477
        },
        {
            "id":"F00754",
            "name":"Baross utca / Fóti út",
            "lat":47.577637,
            "lon":19.092799
        },
        {
            "id":"F00755",
            "name":"Baross utca / Fóti út",
            "lat":47.577044,
            "lon":19.092812
        },
        {
            "id":"F00756",
            "name":"Baross utca",
            "lat":47.577268,
            "lon":19.093796
        },
        {
            "id":"F00757",
            "name":"Bucka utca",
            "lat":47.575036,
            "lon":19.09838
        },
        {
            "id":"F00758",
            "name":"Nádor utca",
            "lat":47.575054,
            "lon":19.098061
        },
        {
            "id":"F00759",
            "name":"Nádor utca",
            "lat":47.574613,
            "lon":19.098446
        },
        {
            "id":"F00760",
            "name":"Iglói utca",
            "lat":47.572794,
            "lon":19.103176
        },
        {
            "id":"F00761",
            "name":"Iglói utca",
            "lat":47.573073,
            "lon":19.103016
        },
        {
            "id":"F00762",
            "name":"Leiningen Károly utca",
            "lat":47.573001,
            "lon":19.102378
        },
        {
            "id":"F00764",
            "name":"Szilágyi utca",
            "lat":47.570522,
            "lon":19.11245
        },
        {
            "id":"F00767",
            "name":"Szusza Ferenc stadion",
            "lat":47.57603,
            "lon":19.083852
        },
        {
            "id":"F00768",
            "name":"Irányi Dániel utca",
            "lat":47.577055,
            "lon":19.086658
        },
        {
            "id":"F00769",
            "name":"Irányi Dániel utca / Baross utca",
            "lat":47.575569,
            "lon":19.091136
        },
        {
            "id":"F00770",
            "name":"Irányi Dániel utca / Baross utca",
            "lat":47.57476,
            "lon":19.090484
        },
        {
            "id":"F00771",
            "name":"Baross utca",
            "lat":47.575003,
            "lon":19.090431
        },
        {
            "id":"F00772",
            "name":"Vécsey Károly utca",
            "lat":47.57205,
            "lon":19.095918
        },
        {
            "id":"F00773",
            "name":"Vécsey Károly utca",
            "lat":47.569773,
            "lon":19.099664
        },
        {
            "id":"F00774",
            "name":"Leiningen Károly utca",
            "lat":47.570097,
            "lon":19.099544
        },
        {
            "id":"F00775",
            "name":"Vécsey Károly utca",
            "lat":47.569791,
            "lon":19.099504
        },
        {
            "id":"F00776",
            "name":"Nádor utca",
            "lat":47.569416,
            "lon":19.093563
        },
        {
            "id":"F00777",
            "name":"Türr István utca / Nádor utca",
            "lat":47.569461,
            "lon":19.093018
        },
        {
            "id":"F00778",
            "name":"Türr István utca / Nádor utca",
            "lat":47.569758,
            "lon":19.092846
        },
        {
            "id":"F00779",
            "name":"Szent László tér",
            "lat":47.567076,
            "lon":19.097827
        },
        {
            "id":"F00780",
            "name":"Szent László tér",
            "lat":47.568011,
            "lon":19.097801
        },
        {
            "id":"F00781",
            "name":"Szent László tér",
            "lat":47.567886,
            "lon":19.096871
        },
        {
            "id":"F00782",
            "name":"Illek Vince utca",
            "lat":47.565658,
            "lon":19.088271
        },
        {
            "id":"F00783",
            "name":"Illek Vince utca",
            "lat":47.56573,
            "lon":19.08851
        },
        {
            "id":"F00784",
            "name":"Csokonai utca",
            "lat":47.565064,
            "lon":19.090529
        },
        {
            "id":"F00785",
            "name":"Csokonai utca",
            "lat":47.564938,
            "lon":19.090782
        },
        {
            "id":"F00786",
            "name":"Deák Ferenc utca",
            "lat":47.564973,
            "lon":19.091805
        },
        {
            "id":"F00787",
            "name":"Deák Ferenc utca",
            "lat":47.564901,
            "lon":19.092682
        },
        {
            "id":"F00788",
            "name":"Deák Ferenc utca",
            "lat":47.564919,
            "lon":19.093041
        },
        {
            "id":"F00789",
            "name":"Újpesti rendelőintézet",
            "lat":47.565788,
            "lon":19.099859
        },
        {
            "id":"F00790",
            "name":"Újpesti rendelőintézet",
            "lat":47.565212,
            "lon":19.100935
        },
        {
            "id":"F00791",
            "name":"Újpesti rendelőintézet",
            "lat":47.565519,
            "lon":19.100058
        },
        {
            "id":"F00792",
            "name":"Újpesti rendelőintézet",
            "lat":47.565087,
            "lon":19.099766
        },
        {
            "id":"F00793",
            "name":"Újpesti piac",
            "lat":47.563077,
            "lon":19.088375
        },
        {
            "id":"F00794",
            "name":"Templom utca",
            "lat":47.563248,
            "lon":19.086674
        },
        {
            "id":"F00795",
            "name":"Szent István tér - Újpesti piac",
            "lat":47.562815,
            "lon":19.090594
        },
        {
            "id":"F00796",
            "name":"Szent István tér - Újpesti piac",
            "lat":47.563175,
            "lon":19.090767
        },
        {
            "id":"F00797",
            "name":"Újpest-Központ M",
            "lat":47.56018,
            "lon":19.089755
        },
        {
            "id":"F00798",
            "name":"Újpest-Központ M",
            "lat":47.560684,
            "lon":19.089795
        },
        {
            "id":"F00799",
            "name":"Újpest-Központ M",
            "lat":47.560612,
            "lon":19.088347
        },
        {
            "id":"F00800",
            "name":"Újpest-Központ M",
            "lat":47.560233,
            "lon":19.090924
        },
        {
            "id":"F00801",
            "name":"Újpest-Központ M",
            "lat":47.56027,
            "lon":19.090672
        },
        {
            "id":"F00802",
            "name":"Újpest-Központ M",
            "lat":47.560315,
            "lon":19.090326
        },
        {
            "id":"F00803",
            "name":"Újpest-Központ M",
            "lat":47.560414,
            "lon":19.09034
        },
        {
            "id":"F00804",
            "name":"Újpest-Központ M",
            "lat":47.561052,
            "lon":19.090207
        },
        {
            "id":"F00805",
            "name":"Újpest-Központ M",
            "lat":47.56035,
            "lon":19.090791
        },
        {
            "id":"F00806",
            "name":"Újpest-Központ M",
            "lat":47.559919,
            "lon":19.089396
        },
        {
            "id":"F00808",
            "name":"Árpád út",
            "lat":47.561128,
            "lon":19.079523
        },
        {
            "id":"F00809",
            "name":"Újpest-Városkapu M",
            "lat":47.560569,
            "lon":19.08331
        },
        {
            "id":"F00810",
            "name":"Újpest-Városkapu M",
            "lat":47.560695,
            "lon":19.083005
        },
        {
            "id":"F00811",
            "name":"Újpest-Városkapu M (Temesvári utca)",
            "lat":47.55967,
            "lon":19.082379
        },
        {
            "id":"F00812",
            "name":"Csányi László utca",
            "lat":47.558041,
            "lon":19.085421
        },
        {
            "id":"F00813",
            "name":"Aradi utca",
            "lat":47.556539,
            "lon":19.084371
        },
        {
            "id":"F00814",
            "name":"Újpest-Központ M (Munkásotthon utca)",
            "lat":47.559325,
            "lon":19.089595
        },
        {
            "id":"F00815",
            "name":"Újpest-Központ M (Munkásotthon utca)",
            "lat":47.559155,
            "lon":19.089143
        },
        {
            "id":"F00816",
            "name":"Tél utca / Pozsonyi utca",
            "lat":47.555646,
            "lon":19.09007
        },
        {
            "id":"F00817",
            "name":"Tél utca / Pozsonyi utca",
            "lat":47.555458,
            "lon":19.090243
        },
        {
            "id":"F00818",
            "name":"Tél utca / Pozsonyi utca",
            "lat":47.556259,
            "lon":19.088835
        },
        {
            "id":"F00819",
            "name":"Tél utca / Pozsonyi utca",
            "lat":47.555026,
            "lon":19.089644
        },
        {
            "id":"F00820",
            "name":"Angyalföld kocsiszín",
            "lat":47.553154,
            "lon":19.092659
        },
        {
            "id":"F00821",
            "name":"Angyalföld kocsiszín",
            "lat":47.553154,
            "lon":19.09149
        },
        {
            "id":"F00822",
            "name":"Angyalföld kocsiszín",
            "lat":47.553032,
            "lon":19.091629
        },
        {
            "id":"F00823",
            "name":"Angyalföld kocsiszín",
            "lat":47.552941,
            "lon":19.091802
        },
        {
            "id":"F00824",
            "name":"Bőröndös utca",
            "lat":47.585091,
            "lon":19.116908
        },
        {
            "id":"F00825",
            "name":"Bőröndös utca",
            "lat":47.58546,
            "lon":19.117201
        },
        {
            "id":"F00828",
            "name":"Újpesti Erőmű",
            "lat":47.555202,
            "lon":19.099862
        },
        {
            "id":"F00829",
            "name":"Újpesti Erőmű",
            "lat":47.555066,
            "lon":19.100885
        },
        {
            "id":"F00830",
            "name":"Elem utca",
            "lat":47.55484,
            "lon":19.104552
        },
        {
            "id":"F00831",
            "name":"Istvántelki út",
            "lat":47.554579,
            "lon":19.104286
        },
        {
            "id":"F00832",
            "name":"Munkásotthon utca",
            "lat":47.559115,
            "lon":19.099335
        },
        {
            "id":"F00833",
            "name":"Árpád üzletház",
            "lat":47.561076,
            "lon":19.098898
        },
        {
            "id":"F00834",
            "name":"Árpád üzletház",
            "lat":47.561049,
            "lon":19.099031
        },
        {
            "id":"F00835",
            "name":"Árpád üzletház",
            "lat":47.560141,
            "lon":19.09806
        },
        {
            "id":"F00836",
            "name":"Árpád üzletház",
            "lat":47.560482,
            "lon":19.099788
        },
        {
            "id":"F00837",
            "name":"Víztorony",
            "lat":47.562241,
            "lon":19.106646
        },
        {
            "id":"F00838",
            "name":"Víztorony",
            "lat":47.562169,
            "lon":19.106846
        },
        {
            "id":"F00840",
            "name":"Árpád út",
            "lat":47.562079,
            "lon":19.107749
        },
        {
            "id":"F00842",
            "name":"Árpád út",
            "lat":47.56322,
            "lon":19.110302
        },
        {
            "id":"F00844",
            "name":"Rákospalota-Újpest vasútállomás",
            "lat":47.564371,
            "lon":19.110596
        },
        {
            "id":"F00848",
            "name":"Mildenberger utca",
            "lat":47.572557,
            "lon":19.088116
        },
        {
            "id":"F00849",
            "name":"Mildenberger utca",
            "lat":47.57208,
            "lon":19.088541
        },
        {
            "id":"F00850",
            "name":"Mildenberger utca",
            "lat":47.572071,
            "lon":19.087784
        },
        {
            "id":"F00851",
            "name":"Attila utca",
            "lat":47.564086,
            "lon":19.082303
        },
        {
            "id":"F00852",
            "name":"Attila utca",
            "lat":47.563978,
            "lon":19.082316
        },
        {
            "id":"F00854",
            "name":"Erzsébet utca",
            "lat":47.559755,
            "lon":19.095242
        },
        {
            "id":"F00855",
            "name":"Erzsébet utca",
            "lat":47.559936,
            "lon":19.093821
        },
        {
            "id":"F00856",
            "name":"Homoktövis iskola",
            "lat":47.596838,
            "lon":19.116046
        },
        {
            "id":"F00859",
            "name":"Káposztásmegyer, Szilas-patak",
            "lat":47.577798,
            "lon":19.114772
        },
        {
            "id":"F00861",
            "name":"Tél utca / Pozsonyi utca",
            "lat":47.556843,
            "lon":19.088875
        },
        {
            "id":"F00862",
            "name":"Tél utca / Pozsonyi utca",
            "lat":47.556798,
            "lon":19.08849
        },
        {
            "id":"F00863",
            "name":"Brüsszeli utca",
            "lat":47.549482,
            "lon":19.098648
        },
        {
            "id":"F00864",
            "name":"Brüsszeli utca",
            "lat":47.54896,
            "lon":19.098528
        },
        {
            "id":"F00867",
            "name":"Béla utca",
            "lat":47.580771,
            "lon":19.081635
        },
        {
            "id":"F00868",
            "name":"Béla utca",
            "lat":47.580321,
            "lon":19.081462
        },
        {
            "id":"F00869",
            "name":"Tungsram",
            "lat":47.57658,
            "lon":19.081327
        },
        {
            "id":"F00870",
            "name":"Tungsram",
            "lat":47.576247,
            "lon":19.081141
        },
        {
            "id":"F00871",
            "name":"Dunakeszi utca",
            "lat":47.585527,
            "lon":19.109052
        },
        {
            "id":"F00872",
            "name":"Dunakeszi utca",
            "lat":47.584709,
            "lon":19.107894
        },
        {
            "id":"F00873",
            "name":"Zombori utca",
            "lat":47.572001,
            "lon":19.10574
        },
        {
            "id":"F00874",
            "name":"Zombori utca",
            "lat":47.571911,
            "lon":19.106591
        },
        {
            "id":"F00875",
            "name":"Pajtás utca",
            "lat":47.571451,
            "lon":19.108238
        },
        {
            "id":"F00876",
            "name":"Deák Ferenc utca / Rózsa utca",
            "lat":47.564223,
            "lon":19.100124
        },
        {
            "id":"F00877",
            "name":"Deák Ferenc utca / Rózsa utca",
            "lat":47.563306,
            "lon":19.099671
        },
        {
            "id":"F00878",
            "name":"Nap utca",
            "lat":47.55542,
            "lon":19.094734
        },
        {
            "id":"F00879",
            "name":"Nap utca",
            "lat":47.555149,
            "lon":19.096129
        },
        {
            "id":"F00884",
            "name":"Izzó utca",
            "lat":47.580029,
            "lon":19.095779
        },
        {
            "id":"F00885",
            "name":"Árpád Kórház",
            "lat":47.561397,
            "lon":19.103828
        },
        {
            "id":"F00886",
            "name":"Árpád Kórház",
            "lat":47.561083,
            "lon":19.102924
        },
        {
            "id":"F00887",
            "name":"Ősz utca",
            "lat":47.557798,
            "lon":19.105858
        },
        {
            "id":"F00888",
            "name":"Ősz utca",
            "lat":47.557286,
            "lon":19.105737
        },
        {
            "id":"F00889",
            "name":"Elem utca",
            "lat":47.55467,
            "lon":19.101642
        },
        {
            "id":"F00890",
            "name":"Berlini utca",
            "lat":47.554598,
            "lon":19.101469
        },
        {
            "id":"F00891",
            "name":"Ősz utca",
            "lat":47.557468,
            "lon":19.100609
        },
        {
            "id":"F00892",
            "name":"Ősz utca",
            "lat":47.55763,
            "lon":19.10021
        },
        {
            "id":"F00893",
            "name":"Langlet Waldemár utca",
            "lat":47.56718,
            "lon":19.082637
        },
        {
            "id":"F00894",
            "name":"Langlet Waldemár utca",
            "lat":47.566928,
            "lon":19.08253
        },
        {
            "id":"F00895",
            "name":"Perényi Zsigmond utca",
            "lat":47.570093,
            "lon":19.085775
        },
        {
            "id":"F00896",
            "name":"Tinódi utca",
            "lat":47.570003,
            "lon":19.085536
        },
        {
            "id":"F00897",
            "name":"Újpest-Városkapu",
            "lat":47.559454,
            "lon":19.080971
        },
        {
            "id":"F00898",
            "name":"Újpest-Városkapu",
            "lat":47.559149,
            "lon":19.079442
        },
        {
            "id":"F00899",
            "name":"Káposztásmegyer, Mogyoródi-patak",
            "lat":47.598688,
            "lon":19.1217
        },
        {
            "id":"F00900",
            "name":"Kordován tér",
            "lat":47.587783,
            "lon":19.112578
        },
        {
            "id":"F00901",
            "name":"Kordován tér",
            "lat":47.587334,
            "lon":19.111646
        },
        {
            "id":"F00902",
            "name":"Bőrfestő utca",
            "lat":47.586961,
            "lon":19.117655
        },
        {
            "id":"F00903",
            "name":"Bőrfestő utca",
            "lat":47.587834,
            "lon":19.118135
        },
        {
            "id":"F00906",
            "name":"Székpatak utca",
            "lat":47.596197,
            "lon":19.121111
        },
        {
            "id":"F00907",
            "name":"Székpatak utca",
            "lat":47.595882,
            "lon":19.121191
        },
        {
            "id":"F00908",
            "name":"Sárpatak utca",
            "lat":47.593348,
            "lon":19.117251
        },
        {
            "id":"F00909",
            "name":"Sárpatak utca",
            "lat":47.592909,
            "lon":19.11868
        },
        {
            "id":"F00910",
            "name":"Újpest-Központ M",
            "lat":47.561547,
            "lon":19.089955
        },
        {
            "id":"F00911",
            "name":"Újpest-Központ M",
            "lat":47.561655,
            "lon":19.090407
        },
        {
            "id":"F00912",
            "name":"Újpest-Központ",
            "lat":47.560155,
            "lon":19.091103
        },
        {
            "id":"F00913",
            "name":"Újpest-Központ",
            "lat":47.560498,
            "lon":19.089615
        },
        {
            "id":"F00914",
            "name":"Corvin utca",
            "lat":47.565106,
            "lon":19.097387
        },
        {
            "id":"F00915",
            "name":"Corvin utca",
            "lat":47.564998,
            "lon":19.096682
        },
        {
            "id":"F00916",
            "name":"Vízművek lakótelep",
            "lat":47.597723,
            "lon":19.09146
        },
        {
            "id":"F00918",
            "name":"Fővám tér M",
            "lat":47.486754,
            "lon":19.056841
        },
        {
            "id":"F00919",
            "name":"Fővám tér M",
            "lat":47.486862,
            "lon":19.056602
        },
        {
            "id":"F00921",
            "name":"Fővám tér M",
            "lat":47.486934,
            "lon":19.057226
        },
        {
            "id":"F00922",
            "name":"Fővám tér M",
            "lat":47.487213,
            "lon":19.05781
        },
        {
            "id":"F00923",
            "name":"Fővám tér M",
            "lat":47.486916,
            "lon":19.057611
        },
        {
            "id":"F00924",
            "name":"Petőfi tér",
            "lat":47.493222,
            "lon":19.050565
        },
        {
            "id":"F00925",
            "name":"Jászai Mari tér",
            "lat":47.513136,
            "lon":19.048149
        },
        {
            "id":"F00926",
            "name":"Jászai Mari tér",
            "lat":47.512884,
            "lon":19.048787
        },
        {
            "id":"F00929",
            "name":"Jászai Mari tér",
            "lat":47.512527,
            "lon":19.050107
        },
        {
            "id":"F00930",
            "name":"Jászai Mari tér",
            "lat":47.512488,
            "lon":19.049557
        },
        {
            "id":"F00931",
            "name":"Szent István körút",
            "lat":47.511778,
            "lon":19.050473
        },
        {
            "id":"F00932",
            "name":"Szent István körút",
            "lat":47.51212,
            "lon":19.052318
        },
        {
            "id":"F00933",
            "name":"Nyugati pályaudvar M",
            "lat":47.510266,
            "lon":19.056141
        },
        {
            "id":"F00934",
            "name":"Nyugati pályaudvar M",
            "lat":47.509961,
            "lon":19.056327
        },
        {
            "id":"F00935",
            "name":"Nyugati pályaudvar M",
            "lat":47.509952,
            "lon":19.056633
        },
        {
            "id":"F00936",
            "name":"Nyugati pályaudvar",
            "lat":47.511742,
            "lon":19.056739
        },
        {
            "id":"F00937",
            "name":"Nyugati pályaudvar",
            "lat":47.510824,
            "lon":19.056009
        },
        {
            "id":"F00938",
            "name":"Báthory utca",
            "lat":47.507091,
            "lon":19.054336
        },
        {
            "id":"F00939",
            "name":"Báthory utca",
            "lat":47.506552,
            "lon":19.055769
        },
        {
            "id":"F00940",
            "name":"Báthory utca",
            "lat":47.507226,
            "lon":19.055729
        },
        {
            "id":"F00941",
            "name":"Báthory utca",
            "lat":47.506156,
            "lon":19.054933
        },
        {
            "id":"F00942",
            "name":"Arany János utca M",
            "lat":47.503269,
            "lon":19.054959
        },
        {
            "id":"F00943",
            "name":"Arany János utca M",
            "lat":47.502927,
            "lon":19.0548
        },
        {
            "id":"F00944",
            "name":"Bajcsy-Zsilinszky út M",
            "lat":47.49995,
            "lon":19.055543
        },
        {
            "id":"F00945",
            "name":"Bajcsy-Zsilinszky út M",
            "lat":47.500363,
            "lon":19.055954
        },
        {
            "id":"F00946",
            "name":"Deák Ferenc tér M",
            "lat":47.496855,
            "lon":19.055967
        },
        {
            "id":"F00950",
            "name":"Deák Ferenc tér M",
            "lat":47.497026,
            "lon":19.055569
        },
        {
            "id":"F00951",
            "name":"Ferenciek tere M",
            "lat":47.49297,
            "lon":19.055356
        },
        {
            "id":"F00952",
            "name":"Ferenciek tere",
            "lat":47.492838,
            "lon":19.055906
        },
        {
            "id":"F00953",
            "name":"Ferenciek tere",
            "lat":47.492007,
            "lon":19.056696
        },
        {
            "id":"F00954",
            "name":"Deák Ferenc tér",
            "lat":47.498555,
            "lon":19.05452
        },
        {
            "id":"F00955",
            "name":"Deák Ferenc tér",
            "lat":47.497602,
            "lon":19.054534
        },
        {
            "id":"F00956",
            "name":"Arany János utca",
            "lat":47.503907,
            "lon":19.054587
        },
        {
            "id":"F00957",
            "name":"Arany János utca",
            "lat":47.502954,
            "lon":19.054508
        },
        {
            "id":"F00958",
            "name":"Kossuth Lajos tér",
            "lat":47.505784,
            "lon":19.044257
        },
        {
            "id":"F00959",
            "name":"Kossuth Lajos tér",
            "lat":47.505521,
            "lon":19.045913
        },
        {
            "id":"F00960",
            "name":"Deák Ferenc tér",
            "lat":47.49887,
            "lon":19.053618
        },
        {
            "id":"F00961",
            "name":"Deák Ferenc tér",
            "lat":47.49753,
            "lon":19.053883
        },
        {
            "id":"F00962",
            "name":"Deák Ferenc tér",
            "lat":47.49771,
            "lon":19.053445
        },
        {
            "id":"F00963",
            "name":"Deák Ferenc tér",
            "lat":47.497641,
            "lon":19.05385
        },
        {
            "id":"F00964",
            "name":"Vörösmarty tér",
            "lat":47.496721,
            "lon":19.050247
        },
        {
            "id":"F00965",
            "name":"Vörösmarty tér",
            "lat":47.496739,
            "lon":19.050618
        },
        {
            "id":"F00966",
            "name":"Vigadó tér",
            "lat":47.495569,
            "lon":19.048402
        },
        {
            "id":"F00967",
            "name":"Vigadó tér",
            "lat":47.495614,
            "lon":19.048322
        },
        {
            "id":"F00968",
            "name":"Országház, látogatóközpont",
            "lat":47.509214,
            "lon":19.046756
        },
        {
            "id":"F00969",
            "name":"Országház, látogatóközpont",
            "lat":47.508909,
            "lon":19.04661
        },
        {
            "id":"F00971",
            "name":"Kossuth Lajos tér M",
            "lat":47.505742,
            "lon":19.046809
        },
        {
            "id":"F00972",
            "name":"Kossuth Lajos tér M",
            "lat":47.505706,
            "lon":19.047326
        },
        {
            "id":"F00973",
            "name":"Széchenyi István tér",
            "lat":47.500696,
            "lon":19.046092
        },
        {
            "id":"F00974",
            "name":"Széchenyi István tér",
            "lat":47.500732,
            "lon":19.046145
        },
        {
            "id":"F00975",
            "name":"Eötvös tér",
            "lat":47.497944,
            "lon":19.047141
        },
        {
            "id":"F00976",
            "name":"Eötvös tér",
            "lat":47.497962,
            "lon":19.047048
        },
        {
            "id":"F00979",
            "name":"József nádor tér",
            "lat":47.498747,
            "lon":19.050253
        },
        {
            "id":"F00980",
            "name":"Erzsébet tér",
            "lat":47.498645,
            "lon":19.051534
        },
        {
            "id":"F00981",
            "name":"Hild tér",
            "lat":47.498987,
            "lon":19.05095
        },
        {
            "id":"F00982",
            "name":"Szervita tér",
            "lat":47.495344,
            "lon":19.052914
        },
        {
            "id":"F00983",
            "name":"Ferenciek tere M",
            "lat":47.492898,
            "lon":19.056033
        },
        {
            "id":"F00985",
            "name":"Deák Ferenc tér M",
            "lat":47.497638,
            "lon":19.052981
        },
        {
            "id":"F00986",
            "name":"Zrínyi utca",
            "lat":47.499689,
            "lon":19.049464
        },
        {
            "id":"F00990",
            "name":"Markó utca",
            "lat":47.509178,
            "lon":19.051176
        },
        {
            "id":"F00991",
            "name":"Markó utca",
            "lat":47.509052,
            "lon":19.04957
        },
        {
            "id":"F00992",
            "name":"Honvéd utca",
            "lat":47.506732,
            "lon":19.050234
        },
        {
            "id":"F00993",
            "name":"Honvéd utca",
            "lat":47.506534,
            "lon":19.049663
        },
        {
            "id":"F00994",
            "name":"Arany János utca M",
            "lat":47.502999,
            "lon":19.054096
        },
        {
            "id":"F00995",
            "name":"Arany János utca M",
            "lat":47.503251,
            "lon":19.054056
        },
        {
            "id":"F00996",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.49986,
            "lon":19.055171
        },
        {
            "id":"F00997",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.499967,
            "lon":19.055702
        },
        {
            "id":"F00999",
            "name":"Március 15. tér",
            "lat":47.491045,
            "lon":19.051507
        },
        {
            "id":"F01000",
            "name":"Március 15. tér",
            "lat":47.490667,
            "lon":19.051719
        },
        {
            "id":"F01001",
            "name":"Március 15. tér",
            "lat":47.490856,
            "lon":19.051693
        },
        {
            "id":"F01004",
            "name":"Ferenciek tere M",
            "lat":47.493006,
            "lon":19.054533
        },
        {
            "id":"F01005",
            "name":"Kálvin tér M",
            "lat":47.489245,
            "lon":19.061367
        },
        {
            "id":"F01006",
            "name":"Kálvin tér M",
            "lat":47.48947,
            "lon":19.061553
        },
        {
            "id":"F01007",
            "name":"Kálvin tér M",
            "lat":47.489083,
            "lon":19.062787
        },
        {
            "id":"F01010",
            "name":"Kálvin tér M",
            "lat":47.489983,
            "lon":19.061991
        },
        {
            "id":"F01011",
            "name":"Kálvin tér M",
            "lat":47.489956,
            "lon":19.061234
        },
        {
            "id":"F01012",
            "name":"Astoria M",
            "lat":47.494597,
            "lon":19.059749
        },
        {
            "id":"F01013",
            "name":"Astoria M",
            "lat":47.49412,
            "lon":19.060134
        },
        {
            "id":"F01016",
            "name":"Astoria M",
            "lat":47.49448,
            "lon":19.06089
        },
        {
            "id":"F01017",
            "name":"Astoria M",
            "lat":47.494552,
            "lon":19.060744
        },
        {
            "id":"F01018",
            "name":"Astoria",
            "lat":47.494624,
            "lon":19.060877
        },
        {
            "id":"F01019",
            "name":"Astoria",
            "lat":47.494849,
            "lon":19.062443
        },
        {
            "id":"F01020",
            "name":"Széchenyi utca",
            "lat":47.50317,
            "lon":19.048508
        },
        {
            "id":"F01021",
            "name":"Hercegprímás utca",
            "lat":47.502288,
            "lon":19.051893
        },
        {
            "id":"F01022",
            "name":"Hold utca",
            "lat":47.505005,
            "lon":19.05245
        },
        {
            "id":"F01023",
            "name":"Nyugati pályaudvar M",
            "lat":47.51158,
            "lon":19.056699
        },
        {
            "id":"F01024",
            "name":"Nyugati pályaudvar M",
            "lat":47.511247,
            "lon":19.056434
        },
        {
            "id":"F01025",
            "name":"Nyugati pályaudvar M",
            "lat":47.511049,
            "lon":19.056288
        },
        {
            "id":"F01027",
            "name":"Nyugati pályaudvar M",
            "lat":47.511061,
            "lon":19.05652
        },
        {
            "id":"F01028",
            "name":"Nyugati pályaudvar M",
            "lat":47.510788,
            "lon":19.056327
        },
        {
            "id":"F01029",
            "name":"Nyugati pályaudvar M",
            "lat":47.509898,
            "lon":19.057124
        },
        {
            "id":"F01030",
            "name":"Nyugati pályaudvar M (Podmaniczky utca)",
            "lat":47.509169,
            "lon":19.058624
        },
        {
            "id":"F01031",
            "name":"Nyugati pályaudvar M (Podmaniczky utca)",
            "lat":47.509295,
            "lon":19.058624
        },
        {
            "id":"F01032",
            "name":"Akácfa utca",
            "lat":47.502054,
            "lon":19.062989
        },
        {
            "id":"F01033",
            "name":"Akácfa utca",
            "lat":47.502162,
            "lon":19.062976
        },
        {
            "id":"F01034",
            "name":"Király utca",
            "lat":47.503591,
            "lon":19.065897
        },
        {
            "id":"F01035",
            "name":"Király utca",
            "lat":47.503249,
            "lon":19.06583
        },
        {
            "id":"F01036",
            "name":"Király utca",
            "lat":47.503187,
            "lon":19.065379
        },
        {
            "id":"F01037",
            "name":"Király utca",
            "lat":47.502809,
            "lon":19.066202
        },
        {
            "id":"F01038",
            "name":"Király utca",
            "lat":47.50316,
            "lon":19.066083
        },
        {
            "id":"F01039",
            "name":"Király utca",
            "lat":47.502926,
            "lon":19.06591
        },
        {
            "id":"F01040",
            "name":"Izabella utca / Király utca",
            "lat":47.505524,
            "lon":19.070185
        },
        {
            "id":"F01041",
            "name":"Izabella utca / Király utca",
            "lat":47.50548,
            "lon":19.06907
        },
        {
            "id":"F01042",
            "name":"Izabella utca / Király utca",
            "lat":47.506136,
            "lon":19.069522
        },
        {
            "id":"F01043",
            "name":"Izabella utca / Király utca",
            "lat":47.505318,
            "lon":19.069004
        },
        {
            "id":"F01044",
            "name":"Lövölde tér",
            "lat":47.506981,
            "lon":19.071805
        },
        {
            "id":"F01045",
            "name":"Lövölde tér",
            "lat":47.507314,
            "lon":19.072124
        },
        {
            "id":"F01046",
            "name":"Bajza utca",
            "lat":47.508249,
            "lon":19.07539
        },
        {
            "id":"F01047",
            "name":"Bajza utca",
            "lat":47.507862,
            "lon":19.076054
        },
        {
            "id":"F01048",
            "name":"Benczúr utca",
            "lat":47.51324,
            "lon":19.07826
        },
        {
            "id":"F01050",
            "name":"Hősök tere M",
            "lat":47.514131,
            "lon":19.076535
        },
        {
            "id":"F01051",
            "name":"Hősök tere M",
            "lat":47.515615,
            "lon":19.075872
        },
        {
            "id":"F01052",
            "name":"Hősök tere M",
            "lat":47.515444,
            "lon":19.075859
        },
        {
            "id":"F01053",
            "name":"Gundel Károly út",
            "lat":47.516614,
            "lon":19.075594
        },
        {
            "id":"F01054",
            "name":"Honvédkórház (Hősök tere M)",
            "lat":47.515975,
            "lon":19.074531
        },
        {
            "id":"F01055",
            "name":"Hősök tere M",
            "lat":47.51575,
            "lon":19.0755
        },
        {
            "id":"F01056",
            "name":"Honvédkórház (Hősök tere M)",
            "lat":47.516074,
            "lon":19.074491
        },
        {
            "id":"F01057",
            "name":"Vágány utca / Dózsa György út",
            "lat":47.518755,
            "lon":19.072713
        },
        {
            "id":"F01058",
            "name":"Vágány utca / Dózsa György út",
            "lat":47.517694,
            "lon":19.073457
        },
        {
            "id":"F01059",
            "name":"Vágány utca / Dózsa György út",
            "lat":47.518989,
            "lon":19.071997
        },
        {
            "id":"F01060",
            "name":"Vágány utca / Dózsa György út",
            "lat":47.519196,
            "lon":19.071585
        },
        {
            "id":"F01061",
            "name":"Dévai utca",
            "lat":47.51849,
            "lon":19.064687
        },
        {
            "id":"F01062",
            "name":"Dévai utca",
            "lat":47.518733,
            "lon":19.065258
        },
        {
            "id":"F01063",
            "name":"Dévai utca",
            "lat":47.518703,
            "lon":19.064853
        },
        {
            "id":"F01064",
            "name":"Dévai utca",
            "lat":47.518658,
            "lon":19.065238
        },
        {
            "id":"F01065",
            "name":"Lehel tér M",
            "lat":47.516832,
            "lon":19.061852
        },
        {
            "id":"F01066",
            "name":"Lehel tér M (Csanády utca)",
            "lat":47.515348,
            "lon":19.060139
        },
        {
            "id":"F01067",
            "name":"Lehel tér M (Csanády utca)",
            "lat":47.515987,
            "lon":19.058625
        },
        {
            "id":"F01068",
            "name":"Ferdinánd híd (Izabella utca)",
            "lat":47.510149,
            "lon":19.062354
        },
        {
            "id":"F01069",
            "name":"Ferdinánd híd (Izabella utca)",
            "lat":47.511696,
            "lon":19.062674
        },
        {
            "id":"F01070",
            "name":"Ferdinánd híd (Izabella utca)",
            "lat":47.511579,
            "lon":19.0627
        },
        {
            "id":"F01071",
            "name":"Ferdinánd híd (Izabella utca)",
            "lat":47.511147,
            "lon":19.06274
        },
        {
            "id":"F01072",
            "name":"Ferdinánd híd (Izabella utca)",
            "lat":47.511066,
            "lon":19.062673
        },
        {
            "id":"F01073",
            "name":"Munkácsy Mihály utca",
            "lat":47.515194,
            "lon":19.06999
        },
        {
            "id":"F01074",
            "name":"Rippl-Rónai utca",
            "lat":47.51496,
            "lon":19.07226
        },
        {
            "id":"F01075",
            "name":"Andrássy út (Opera M)",
            "lat":47.503151,
            "lon":19.060839
        },
        {
            "id":"F01076",
            "name":"Andrássy út (Opera M)",
            "lat":47.503448,
            "lon":19.060242
        },
        {
            "id":"F01077",
            "name":"Opera M",
            "lat":47.503142,
            "lon":19.060149
        },
        {
            "id":"F01078",
            "name":"Opera M",
            "lat":47.502657,
            "lon":19.059631
        },
        {
            "id":"F01079",
            "name":"Opera",
            "lat":47.502288,
            "lon":19.058808
        },
        {
            "id":"F01080",
            "name":"Opera",
            "lat":47.502342,
            "lon":19.059193
        },
        {
            "id":"F01081",
            "name":"Oktogon M",
            "lat":47.505583,
            "lon":19.062877
        },
        {
            "id":"F01082",
            "name":"Oktogon M",
            "lat":47.505993,
            "lon":19.062393
        },
        {
            "id":"F01083",
            "name":"Oktogon M",
            "lat":47.505894,
            "lon":19.062738
        },
        {
            "id":"F01084",
            "name":"Aradi utca",
            "lat":47.506227,
            "lon":19.061769
        },
        {
            "id":"F01085",
            "name":"Oktogon",
            "lat":47.505049,
            "lon":19.062871
        },
        {
            "id":"F01086",
            "name":"Oktogon",
            "lat":47.50504,
            "lon":19.063322
        },
        {
            "id":"F01087",
            "name":"Oktogon M",
            "lat":47.504698,
            "lon":19.063826
        },
        {
            "id":"F01088",
            "name":"Oktogon M",
            "lat":47.504818,
            "lon":19.062652
        },
        {
            "id":"F01089",
            "name":"Oktogon M",
            "lat":47.50418,
            "lon":19.061935
        },
        {
            "id":"F01090",
            "name":"Andrássy út (Vörösmarty utca M)",
            "lat":47.508286,
            "lon":19.066403
        },
        {
            "id":"F01091",
            "name":"Andrássy út (Vörösmarty utca M)",
            "lat":47.507468,
            "lon":19.067757
        },
        {
            "id":"F01092",
            "name":"Vörösmarty utca",
            "lat":47.507234,
            "lon":19.066243
        },
        {
            "id":"F01093",
            "name":"Vörösmarty utca",
            "lat":47.507243,
            "lon":19.066575
        },
        {
            "id":"F01094",
            "name":"Kodály körönd M",
            "lat":47.509518,
            "lon":19.069616
        },
        {
            "id":"F01095",
            "name":"Kodály körönd",
            "lat":47.509248,
            "lon":19.069165
        },
        {
            "id":"F01096",
            "name":"Kodály körönd",
            "lat":47.509248,
            "lon":19.06951
        },
        {
            "id":"F01097",
            "name":"Kodály körönd M",
            "lat":47.509896,
            "lon":19.070413
        },
        {
            "id":"F01098",
            "name":"Bajza utca M",
            "lat":47.511568,
            "lon":19.072936
        },
        {
            "id":"F01099",
            "name":"Bajza utca M",
            "lat":47.510921,
            "lon":19.071727
        },
        {
            "id":"F01100",
            "name":"Bajza utca",
            "lat":47.511362,
            "lon":19.072391
        },
        {
            "id":"F01101",
            "name":"Bajza utca",
            "lat":47.511478,
            "lon":19.072883
        },
        {
            "id":"F01102",
            "name":"Hősök tere",
            "lat":47.514113,
            "lon":19.076469
        },
        {
            "id":"F01103",
            "name":"Hősök tere",
            "lat":47.514248,
            "lon":19.077106
        },
        {
            "id":"F01104",
            "name":"Bajza utca",
            "lat":47.514277,
            "lon":19.068569
        },
        {
            "id":"F01105",
            "name":"Bajza utca",
            "lat":47.514897,
            "lon":19.068264
        },
        {
            "id":"F01106",
            "name":"Szinyei Merse utca",
            "lat":47.513144,
            "lon":19.065077
        },
        {
            "id":"F01107",
            "name":"Szinyei Merse utca",
            "lat":47.513072,
            "lon":19.065157
        },
        {
            "id":"F01108",
            "name":"Károly körút (Astoria M)",
            "lat":47.495488,
            "lon":19.060187
        },
        {
            "id":"F01109",
            "name":"Nyár utca",
            "lat":47.498554,
            "lon":19.06551
        },
        {
            "id":"F01110",
            "name":"Nagy Diófa utca",
            "lat":47.496261,
            "lon":19.065616
        },
        {
            "id":"F01111",
            "name":"Wesselényi utca",
            "lat":47.500353,
            "lon":19.068922
        },
        {
            "id":"F01112",
            "name":"Wesselényi utca",
            "lat":47.49984,
            "lon":19.069187
        },
        {
            "id":"F01113",
            "name":"Wesselényi utca",
            "lat":47.500281,
            "lon":19.069095
        },
        {
            "id":"F01114",
            "name":"Wesselényi utca",
            "lat":47.500164,
            "lon":19.068829
        },
        {
            "id":"F01115",
            "name":"Wesselényi utca",
            "lat":47.500928,
            "lon":19.069254
        },
        {
            "id":"F01116",
            "name":"Blaha Lujza tér M",
            "lat":47.49832,
            "lon":19.069651
        },
        {
            "id":"F01117",
            "name":"Wesselényi utca / Izabella utca",
            "lat":47.502852,
            "lon":19.073529
        },
        {
            "id":"F01118",
            "name":"Almássy tér",
            "lat":47.502628,
            "lon":19.072175
        },
        {
            "id":"F01119",
            "name":"Dob utca",
            "lat":47.503923,
            "lon":19.072454
        },
        {
            "id":"F01120",
            "name":"Rózsa utca",
            "lat":47.503797,
            "lon":19.074459
        },
        {
            "id":"F01121",
            "name":"Rottenbiller utca / István utca",
            "lat":47.5028,
            "lon":19.077398
        },
        {
            "id":"F01122",
            "name":"Rottenbiller utca / István utca",
            "lat":47.503058,
            "lon":19.076516
        },
        {
            "id":"F01123",
            "name":"Bethlen Gábor utca",
            "lat":47.506396,
            "lon":19.076624
        },
        {
            "id":"F01124",
            "name":"Nefelejcs utca / Damjanich utca",
            "lat":47.507187,
            "lon":19.077753
        },
        {
            "id":"F01125",
            "name":"Nefelejcs utca / Damjanich utca",
            "lat":47.507475,
            "lon":19.077965
        },
        {
            "id":"F01126",
            "name":"Nefelejcs utca / Damjanich utca",
            "lat":47.507681,
            "lon":19.078191
        },
        {
            "id":"F01127",
            "name":"Bethlen Gábor tér",
            "lat":47.50456,
            "lon":19.078415
        },
        {
            "id":"F01128",
            "name":"Nefelejcs utca",
            "lat":47.505936,
            "lon":19.079239
        },
        {
            "id":"F01129",
            "name":"Nefelejcs utca / István utca",
            "lat":47.504515,
            "lon":19.080393
        },
        {
            "id":"F01130",
            "name":"Nefelejcs utca / István utca",
            "lat":47.504586,
            "lon":19.081203
        },
        {
            "id":"F01131",
            "name":"Keleti pályaudvar M (Garay utca)",
            "lat":47.501807,
            "lon":19.081891
        },
        {
            "id":"F01132",
            "name":"Keleti pályaudvar M (Garay utca)",
            "lat":47.502032,
            "lon":19.082356
        },
        {
            "id":"F01134",
            "name":"Damjanich utca / Dózsa György út",
            "lat":47.509767,
            "lon":19.082281
        },
        {
            "id":"F01135",
            "name":"Damjanich utca / Dózsa György út",
            "lat":47.509434,
            "lon":19.082042
        },
        {
            "id":"F01136",
            "name":"Damjanich utca / Dózsa György út",
            "lat":47.509147,
            "lon":19.081643
        },
        {
            "id":"F01137",
            "name":"Damjanich utca / Dózsa György út",
            "lat":47.509398,
            "lon":19.083077
        },
        {
            "id":"F01138",
            "name":"Dembinszky utca",
            "lat":47.508372,
            "lon":19.08378
        },
        {
            "id":"F01139",
            "name":"Dembinszky utca",
            "lat":47.508031,
            "lon":19.083753
        },
        {
            "id":"F01140",
            "name":"Ötvenhatosok tere",
            "lat":47.506519,
            "lon":19.086195
        },
        {
            "id":"F01141",
            "name":"Ajtósi Dürer sor",
            "lat":47.506285,
            "lon":19.086261
        },
        {
            "id":"F01142",
            "name":"Ajtósi Dürer sor",
            "lat":47.506312,
            "lon":19.084974
        },
        {
            "id":"F01143",
            "name":"Cserhát utca",
            "lat":47.503766,
            "lon":19.085954
        },
        {
            "id":"F01144",
            "name":"Reiner Frigyes park",
            "lat":47.50435,
            "lon":19.08837
        },
        {
            "id":"F01145",
            "name":"Reiner Frigyes park",
            "lat":47.504206,
            "lon":19.089193
        },
        {
            "id":"F01146",
            "name":"Reiner Frigyes park",
            "lat":47.503559,
            "lon":19.088211
        },
        {
            "id":"F01149",
            "name":"Reiner Frigyes park",
            "lat":47.503594,
            "lon":19.089379
        },
        {
            "id":"F01150",
            "name":"Verseny utca",
            "lat":47.501804,
            "lon":19.090731
        },
        {
            "id":"F01151",
            "name":"Verseny utca",
            "lat":47.501903,
            "lon":19.090426
        },
        {
            "id":"F01154",
            "name":"Keleti pályaudvar M",
            "lat":47.501581,
            "lon":19.084824
        },
        {
            "id":"F01159",
            "name":"Keleti pályaudvar M",
            "lat":47.500521,
            "lon":19.08193
        },
        {
            "id":"F01160",
            "name":"Keleti pályaudvar M",
            "lat":47.50088,
            "lon":19.082143
        },
        {
            "id":"F01161",
            "name":"Huszár utca",
            "lat":47.499181,
            "lon":19.077748
        },
        {
            "id":"F01162",
            "name":"Huszár utca",
            "lat":47.499217,
            "lon":19.078319
        },
        {
            "id":"F01163",
            "name":"Kiss József utca",
            "lat":47.497662,
            "lon":19.073991
        },
        {
            "id":"F01164",
            "name":"Blaha Lujza tér M",
            "lat":47.496889,
            "lon":19.070102
        },
        {
            "id":"F01166",
            "name":"Blaha Lujza tér M",
            "lat":47.497492,
            "lon":19.071549
        },
        {
            "id":"F01167",
            "name":"Blaha Lujza tér M",
            "lat":47.497492,
            "lon":19.070646
        },
        {
            "id":"F01168",
            "name":"Blaha Lujza tér M",
            "lat":47.496772,
            "lon":19.070659
        },
        {
            "id":"F01169",
            "name":"Blaha Lujza tér M",
            "lat":47.496251,
            "lon":19.070726
        },
        {
            "id":"F01170",
            "name":"Uránia",
            "lat":47.495577,
            "lon":19.065191
        },
        {
            "id":"F01171",
            "name":"Uránia",
            "lat":47.495649,
            "lon":19.065045
        },
        {
            "id":"F01172",
            "name":"Munkás utca",
            "lat":47.500233,
            "lon":19.079222
        },
        {
            "id":"F01173",
            "name":"Szövetség utca",
            "lat":47.500316,
            "lon":19.07297
        },
        {
            "id":"F01174",
            "name":"Szentkirályi utca",
            "lat":47.488993,
            "lon":19.065773
        },
        {
            "id":"F01175",
            "name":"Szentkirályi utca",
            "lat":47.489154,
            "lon":19.066874
        },
        {
            "id":"F01176",
            "name":"Muzsikus cigányok parkja",
            "lat":47.489269,
            "lon":19.07964
        },
        {
            "id":"F01177",
            "name":"Muzsikus cigányok parkja",
            "lat":47.488998,
            "lon":19.08118
        },
        {
            "id":"F01180",
            "name":"Kőbányai út 21.",
            "lat":47.48902,
            "lon":19.09579
        },
        {
            "id":"F01181",
            "name":"Kőbányai út 21.",
            "lat":47.488957,
            "lon":19.095472
        },
        {
            "id":"F01182",
            "name":"Gumigyár",
            "lat":47.499716,
            "lon":19.093411
        },
        {
            "id":"F01183",
            "name":"Gumigyár",
            "lat":47.499491,
            "lon":19.094167
        },
        {
            "id":"F01184",
            "name":"Magdolna utca",
            "lat":47.491928,
            "lon":19.089011
        },
        {
            "id":"F01185",
            "name":"Üllői út",
            "lat":47.487202,
            "lon":19.068254
        },
        {
            "id":"F01186",
            "name":"Orczy tér",
            "lat":47.489418,
            "lon":19.089991
        },
        {
            "id":"F01187",
            "name":"Orczy tér",
            "lat":47.489436,
            "lon":19.090549
        },
        {
            "id":"F01188",
            "name":"Corvin-negyed",
            "lat":47.485574,
            "lon":19.07035
        },
        {
            "id":"F01189",
            "name":"Corvin-negyed",
            "lat":47.485088,
            "lon":19.071782
        },
        {
            "id":"F01190",
            "name":"Corvin-negyed M",
            "lat":47.486467,
            "lon":19.070356
        },
        {
            "id":"F01191",
            "name":"Corvin-negyed M",
            "lat":47.485556,
            "lon":19.069898
        },
        {
            "id":"F01192",
            "name":"Corvin-negyed M",
            "lat":47.485421,
            "lon":19.070933
        },
        {
            "id":"F01193",
            "name":"Corvin-negyed M",
            "lat":47.485529,
            "lon":19.07092
        },
        {
            "id":"F01194",
            "name":"Corvin-negyed M",
            "lat":47.486159,
            "lon":19.070098
        },
        {
            "id":"F01195",
            "name":"Corvin-negyed M",
            "lat":47.485385,
            "lon":19.06962
        },
        {
            "id":"F01196",
            "name":"Harminckettesek tere",
            "lat":47.489972,
            "lon":19.070882
        },
        {
            "id":"F01197",
            "name":"Harminckettesek tere",
            "lat":47.489604,
            "lon":19.07063
        },
        {
            "id":"F01198",
            "name":"Harminckettesek tere",
            "lat":47.489999,
            "lon":19.070564
        },
        {
            "id":"F01199",
            "name":"Harminckettesek tere",
            "lat":47.49035,
            "lon":19.070803
        },
        {
            "id":"F01200",
            "name":"Rákóczi tér M",
            "lat":47.49286,
            "lon":19.071175
        },
        {
            "id":"F01201",
            "name":"Rákóczi tér M",
            "lat":47.492383,
            "lon":19.071016
        },
        {
            "id":"F01202",
            "name":"Rákóczi tér M",
            "lat":47.492743,
            "lon":19.071268
        },
        {
            "id":"F01203",
            "name":"Rákóczi tér M",
            "lat":47.492707,
            "lon":19.070936
        },
        {
            "id":"F01204",
            "name":"Harminckettesek tere",
            "lat":47.489531,
            "lon":19.071333
        },
        {
            "id":"F01205",
            "name":"Harminckettesek tere",
            "lat":47.48945,
            "lon":19.071625
        },
        {
            "id":"F01207",
            "name":"Horváth Mihály tér",
            "lat":47.489584,
            "lon":19.076681
        },
        {
            "id":"F01208",
            "name":"Horváth Mihály tér",
            "lat":47.489413,
            "lon":19.077398
        },
        {
            "id":"F01209",
            "name":"Mátyás tér",
            "lat":47.492345,
            "lon":19.078647
        },
        {
            "id":"F01210",
            "name":"Mátyás tér",
            "lat":47.492066,
            "lon":19.079018
        },
        {
            "id":"F01211",
            "name":"Szerdahelyi utca",
            "lat":47.492407,
            "lon":19.083531
        },
        {
            "id":"F01212",
            "name":"Karácsony Sándor utca",
            "lat":47.492308,
            "lon":19.083424
        },
        {
            "id":"F01213",
            "name":"Magdolna utca",
            "lat":47.492234,
            "lon":19.08787
        },
        {
            "id":"F01214",
            "name":"Magdolna utca",
            "lat":47.491896,
            "lon":19.088009
        },
        {
            "id":"F01215",
            "name":"Magdolna utca",
            "lat":47.492891,
            "lon":19.087247
        },
        {
            "id":"F01218",
            "name":"Orczy tér",
            "lat":47.489229,
            "lon":19.092168
        },
        {
            "id":"F01219",
            "name":"Orczy tér",
            "lat":47.489832,
            "lon":19.090589
        },
        {
            "id":"F01220",
            "name":"Orczy tér",
            "lat":47.490273,
            "lon":19.090204
        },
        {
            "id":"F01221",
            "name":"Kálvária tér",
            "lat":47.489725,
            "lon":19.08605
        },
        {
            "id":"F01222",
            "name":"Kálvária tér",
            "lat":47.48951,
            "lon":19.08609
        },
        {
            "id":"F01223",
            "name":"Kálvária tér",
            "lat":47.488916,
            "lon":19.085147
        },
        {
            "id":"F01224",
            "name":"Kálvária tér",
            "lat":47.488871,
            "lon":19.08532
        },
        {
            "id":"F01225",
            "name":"Csobánc utca",
            "lat":47.488429,
            "lon":19.088212
        },
        {
            "id":"F01226",
            "name":"Golgota tér",
            "lat":47.486449,
            "lon":19.092882
        },
        {
            "id":"F01227",
            "name":"Golgota tér",
            "lat":47.486494,
            "lon":19.092537
        },
        {
            "id":"F01228",
            "name":"Golgota tér",
            "lat":47.485028,
            "lon":19.092894
        },
        {
            "id":"F01229",
            "name":"Golgota tér",
            "lat":47.485504,
            "lon":19.092881
        },
        {
            "id":"F01232",
            "name":"Klinikák",
            "lat":47.483066,
            "lon":19.077812
        },
        {
            "id":"F01233",
            "name":"Klinikák",
            "lat":47.482658,
            "lon":19.079252
        },
        {
            "id":"F01234",
            "name":"Klinikák M",
            "lat":47.48228,
            "lon":19.080194
        },
        {
            "id":"F01235",
            "name":"Klinikák M",
            "lat":47.482433,
            "lon":19.079451
        },
        {
            "id":"F01236",
            "name":"Elnök utca",
            "lat":47.481241,
            "lon":19.093435
        },
        {
            "id":"F01237",
            "name":"Elnök utca",
            "lat":47.481798,
            "lon":19.093422
        },
        {
            "id":"F01240",
            "name":"Bláthy Ottó utca",
            "lat":47.483577,
            "lon":19.09962
        },
        {
            "id":"F01241",
            "name":"Bláthy Ottó utca",
            "lat":47.483595,
            "lon":19.098997
        },
        {
            "id":"F01245",
            "name":"Nagyvárad tér M",
            "lat":47.479344,
            "lon":19.089731
        },
        {
            "id":"F01246",
            "name":"Nagyvárad tér M",
            "lat":47.479497,
            "lon":19.090209
        },
        {
            "id":"F01247",
            "name":"Nagyvárad tér M",
            "lat":47.479443,
            "lon":19.090368
        },
        {
            "id":"F01248",
            "name":"Nagyvárad tér M",
            "lat":47.478741,
            "lon":19.09058
        },
        {
            "id":"F01249",
            "name":"Nagyvárad tér M",
            "lat":47.478589,
            "lon":19.088457
        },
        {
            "id":"F01250",
            "name":"Arena Plaza",
            "lat":47.499699,
            "lon":19.08988
        },
        {
            "id":"F01251",
            "name":"Arena Plaza",
            "lat":47.499474,
            "lon":19.091274
        },
        {
            "id":"F01252",
            "name":"Nagyvárad tér",
            "lat":47.478957,
            "lon":19.089718
        },
        {
            "id":"F01253",
            "name":"Nagyvárad tér",
            "lat":47.478408,
            "lon":19.091111
        },
        {
            "id":"F01256",
            "name":"Népliget M",
            "lat":47.47633,
            "lon":19.099513
        },
        {
            "id":"F01257",
            "name":"Vajda Péter utca",
            "lat":47.481114,
            "lon":19.102782
        },
        {
            "id":"F01258",
            "name":"Könyves Kálmán körút",
            "lat":47.482415,
            "lon":19.103069
        },
        {
            "id":"F01260",
            "name":"Könyves Kálmán körút",
            "lat":47.482352,
            "lon":19.102618
        },
        {
            "id":"F01262",
            "name":"Vajda Péter utca",
            "lat":47.481608,
            "lon":19.103685
        },
        {
            "id":"F01263",
            "name":"Kőbányai út 31.",
            "lat":47.48764,
            "lon":19.103831
        },
        {
            "id":"F01264",
            "name":"Kőbányai út 31.",
            "lat":47.487622,
            "lon":19.10407
        },
        {
            "id":"F01265",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.486568,
            "lon":19.108328
        },
        {
            "id":"F01266",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.486352,
            "lon":19.108567
        },
        {
            "id":"F01267",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.486739,
            "lon":19.106975
        },
        {
            "id":"F01268",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.486149,
            "lon":19.107166
        },
        {
            "id":"F01269",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.485948,
            "lon":19.107544
        },
        {
            "id":"F01270",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.486235,
            "lon":19.108354
        },
        {
            "id":"F01271",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.490079,
            "lon":19.108259
        },
        {
            "id":"F01272",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.489689,
            "lon":19.108663
        },
        {
            "id":"F01273",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.491029,
            "lon":19.109209
        },
        {
            "id":"F01274",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.49021,
            "lon":19.109673
        },
        {
            "id":"F01275",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.491194,
            "lon":19.10897
        },
        {
            "id":"F01276",
            "name":"Ciprus utca",
            "lat":47.494024,
            "lon":19.109239
        },
        {
            "id":"F01277",
            "name":"Ciprus utca",
            "lat":47.492855,
            "lon":19.10876
        },
        {
            "id":"F01278",
            "name":"Asztalos Sándor út",
            "lat":47.490104,
            "lon":19.105028
        },
        {
            "id":"F01279",
            "name":"Asztalos Sándor út",
            "lat":47.49005,
            "lon":19.105479
        },
        {
            "id":"F01280",
            "name":"Salgótarjáni utca, temető",
            "lat":47.491008,
            "lon":19.096575
        },
        {
            "id":"F01281",
            "name":"Salgótarjáni utca, temető",
            "lat":47.490918,
            "lon":19.096774
        },
        {
            "id":"F01282",
            "name":"Népliget",
            "lat":47.475482,
            "lon":19.09936
        },
        {
            "id":"F01283",
            "name":"Népliget",
            "lat":47.474743,
            "lon":19.100607
        },
        {
            "id":"F01284",
            "name":"Népliget M",
            "lat":47.47487,
            "lon":19.100169
        },
        {
            "id":"F01285",
            "name":"Népliget M",
            "lat":47.4754,
            "lon":19.099572
        },
        {
            "id":"F01286",
            "name":"Népliget M",
            "lat":47.475882,
            "lon":19.098874
        },
        {
            "id":"F01289",
            "name":"Kálvin tér",
            "lat":47.490127,
            "lon":19.060611
        },
        {
            "id":"F01290",
            "name":"Kálvin tér",
            "lat":47.489482,
            "lon":19.062236
        },
        {
            "id":"F01291",
            "name":"Blaha Lujza tér",
            "lat":47.496656,
            "lon":19.068788
        },
        {
            "id":"F01292",
            "name":"Blaha Lujza tér",
            "lat":47.497033,
            "lon":19.070248
        },
        {
            "id":"F01293",
            "name":"Blaha Lujza tér M",
            "lat":47.496584,
            "lon":19.070434
        },
        {
            "id":"F01294",
            "name":"Blaha Lujza tér M (Népszínház utca)",
            "lat":47.49617,
            "lon":19.071177
        },
        {
            "id":"F01295",
            "name":"Népszínház utca",
            "lat":47.495738,
            "lon":19.071017
        },
        {
            "id":"F01296",
            "name":"Blaha Lujza tér M (Népszínház utca)",
            "lat":47.496089,
            "lon":19.071535
        },
        {
            "id":"F01297",
            "name":"Blaha Lujza tér M (Népszínház utca)",
            "lat":47.496071,
            "lon":19.071336
        },
        {
            "id":"F01298",
            "name":"Blaha Lujza tér M (Népszínház utca)",
            "lat":47.495702,
            "lon":19.072716
        },
        {
            "id":"F01300",
            "name":"II. János Pál pápa tér M",
            "lat":47.494864,
            "lon":19.076538
        },
        {
            "id":"F01301",
            "name":"II. János Pál pápa tér M",
            "lat":47.494693,
            "lon":19.0776
        },
        {
            "id":"F01302",
            "name":"II. János Pál pápa tér M",
            "lat":47.494171,
            "lon":19.077361
        },
        {
            "id":"F01303",
            "name":"II. János Pál pápa tér M",
            "lat":47.494603,
            "lon":19.076856
        },
        {
            "id":"F01309",
            "name":"Dologház utca",
            "lat":47.496499,
            "lon":19.083149
        },
        {
            "id":"F01310",
            "name":"Dologház utca",
            "lat":47.496373,
            "lon":19.083387
        },
        {
            "id":"F01311",
            "name":"Keleti pályaudvar M",
            "lat":47.49936,
            "lon":19.08254
        },
        {
            "id":"F01314",
            "name":"Keleti pályaudvar M",
            "lat":47.500341,
            "lon":19.080934
        },
        {
            "id":"F01316",
            "name":"Puskás Ferenc Stadion M (Ifjúság útja)",
            "lat":47.499829,
            "lon":19.103711
        },
        {
            "id":"F01317",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.50017,
            "lon":19.103539
        },
        {
            "id":"F01319",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.500681,
            "lon":19.107879
        },
        {
            "id":"F01320",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.500834,
            "lon":19.108318
        },
        {
            "id":"F01321",
            "name":"Puskás Ferenc Stadion M (Hungária körút)",
            "lat":47.500158,
            "lon":19.109511
        },
        {
            "id":"F01322",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.500388,
            "lon":19.108148
        },
        {
            "id":"F01323",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.50092,
            "lon":19.108097
        },
        {
            "id":"F01324",
            "name":"Puskás Ferenc Stadion",
            "lat":47.500134,
            "lon":19.104786
        },
        {
            "id":"F01325",
            "name":"Puskás Ferenc Stadion",
            "lat":47.500232,
            "lon":19.106366
        },
        {
            "id":"F01326",
            "name":"Hős utca",
            "lat":47.496857,
            "lon":19.109229
        },
        {
            "id":"F01327",
            "name":"Hős utca",
            "lat":47.496813,
            "lon":19.108764
        },
        {
            "id":"F01328",
            "name":"Hős utca",
            "lat":47.496257,
            "lon":19.109134
        },
        {
            "id":"F01329",
            "name":"Hős utca",
            "lat":47.495747,
            "lon":19.109069
        },
        {
            "id":"F01330",
            "name":"Teleki László tér",
            "lat":47.49364,
            "lon":19.081873
        },
        {
            "id":"F01331",
            "name":"Teleki László tér",
            "lat":47.493567,
            "lon":19.082828
        },
        {
            "id":"F01332",
            "name":"Diószeghy Sámuel utca",
            "lat":47.48726,
            "lon":19.088968
        },
        {
            "id":"F01333",
            "name":"Kőris utca",
            "lat":47.487179,
            "lon":19.089499
        },
        {
            "id":"F01334",
            "name":"Orczy út",
            "lat":47.488932,
            "lon":19.091292
        },
        {
            "id":"F01335",
            "name":"Keleti pályaudvar",
            "lat":47.499801,
            "lon":19.081239
        },
        {
            "id":"F01336",
            "name":"Keleti pályaudvar",
            "lat":47.499711,
            "lon":19.082859
        },
        {
            "id":"F01337",
            "name":"Czuczor utca",
            "lat":47.484976,
            "lon":19.062407
        },
        {
            "id":"F01339",
            "name":"Ráday utca",
            "lat":47.485575,
            "lon":19.065944
        },
        {
            "id":"F01340",
            "name":"Közraktár utca",
            "lat":47.483929,
            "lon":19.062454
        },
        {
            "id":"F01341",
            "name":"Koppány utca",
            "lat":47.466196,
            "lon":19.081205
        },
        {
            "id":"F01342",
            "name":"Koppány utca",
            "lat":47.465989,
            "lon":19.081497
        },
        {
            "id":"F01343",
            "name":"Zsil utca",
            "lat":47.482949,
            "lon":19.062719
        },
        {
            "id":"F01345",
            "name":"Lónyay utca",
            "lat":47.482436,
            "lon":19.064762
        },
        {
            "id":"F01346",
            "name":"Zsil utca",
            "lat":47.483003,
            "lon":19.06252
        },
        {
            "id":"F01347",
            "name":"Timót utca",
            "lat":47.44728,
            "lon":19.09076
        },
        {
            "id":"F01348",
            "name":"Timót utca",
            "lat":47.448549,
            "lon":19.090165
        },
        {
            "id":"F01349",
            "name":"Kén utca",
            "lat":47.457073,
            "lon":19.089131
        },
        {
            "id":"F01350",
            "name":"Kén utca",
            "lat":47.457325,
            "lon":19.089104
        },
        {
            "id":"F01351",
            "name":"Beöthy utca H",
            "lat":47.460367,
            "lon":19.082409
        },
        {
            "id":"F01352",
            "name":"Beöthy utca H",
            "lat":47.460394,
            "lon":19.08221
        },
        {
            "id":"F01353",
            "name":"Beöthy utca",
            "lat":47.46079,
            "lon":19.081679
        },
        {
            "id":"F01354",
            "name":"Beöthy utca",
            "lat":47.460556,
            "lon":19.081958
        },
        {
            "id":"F01355",
            "name":"Földváry utca",
            "lat":47.462797,
            "lon":19.080195
        },
        {
            "id":"F01356",
            "name":"Koppány utca",
            "lat":47.465406,
            "lon":19.078247
        },
        {
            "id":"F01357",
            "name":"FÉG",
            "lat":47.449069,
            "lon":19.093604
        },
        {
            "id":"F01358",
            "name":"FÉG",
            "lat":47.44834,
            "lon":19.0942
        },
        {
            "id":"F01359",
            "name":"Timót utca H",
            "lat":47.448608,
            "lon":19.090331
        },
        {
            "id":"F01360",
            "name":"Timót utca H",
            "lat":47.447394,
            "lon":19.09086
        },
        {
            "id":"F01363",
            "name":"Börzsöny utca",
            "lat":47.466966,
            "lon":19.112033
        },
        {
            "id":"F01364",
            "name":"Börzsöny utca",
            "lat":47.466777,
            "lon":19.112033
        },
        {
            "id":"F01365",
            "name":"Merényi Gusztáv Kórház",
            "lat":47.467925,
            "lon":19.101131
        },
        {
            "id":"F01366",
            "name":"Epreserdő utca",
            "lat":47.459725,
            "lon":19.111706
        },
        {
            "id":"F01367",
            "name":"Epreserdő utca",
            "lat":47.459761,
            "lon":19.1116
        },
        {
            "id":"F01368",
            "name":"Aranyvirág sétány",
            "lat":47.467714,
            "lon":19.109845
        },
        {
            "id":"F01369",
            "name":"Aranyvirág sétány",
            "lat":47.467579,
            "lon":19.109195
        },
        {
            "id":"F01370",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.454607,
            "lon":19.113066
        },
        {
            "id":"F01371",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.454294,
            "lon":19.114306
        },
        {
            "id":"F01373",
            "name":"Boráros tér H",
            "lat":47.480118,
            "lon":19.066108
        },
        {
            "id":"F01374",
            "name":"Boráros tér H",
            "lat":47.480385,
            "lon":19.066659
        },
        {
            "id":"F01375",
            "name":"Boráros tér H",
            "lat":47.480271,
            "lon":19.066068
        },
        {
            "id":"F01376",
            "name":"Boráros tér H",
            "lat":47.479611,
            "lon":19.067256
        },
        {
            "id":"F01378",
            "name":"Mester utca / Ferenc körút",
            "lat":47.48221,
            "lon":19.068504
        },
        {
            "id":"F01379",
            "name":"Mester utca (Ferenc körút)",
            "lat":47.481652,
            "lon":19.068663
        },
        {
            "id":"F01380",
            "name":"Mester utca / Ferenc körút",
            "lat":47.482777,
            "lon":19.068822
        },
        {
            "id":"F01381",
            "name":"Bokréta utca",
            "lat":47.47952,
            "lon":19.072218
        },
        {
            "id":"F01382",
            "name":"Bokréta utca",
            "lat":47.479133,
            "lon":19.072616
        },
        {
            "id":"F01384",
            "name":"Haller utca / Soroksári út",
            "lat":47.47478,
            "lon":19.070027
        },
        {
            "id":"F01386",
            "name":"Haller utca",
            "lat":47.475617,
            "lon":19.069695
        },
        {
            "id":"F01387",
            "name":"Haller utca / Soroksári út",
            "lat":47.474951,
            "lon":19.070385
        },
        {
            "id":"F01388",
            "name":"Haller utca / Soroksári út",
            "lat":47.475122,
            "lon":19.070743
        },
        {
            "id":"F01390",
            "name":"Haller utca / Mester utca",
            "lat":47.476038,
            "lon":19.076342
        },
        {
            "id":"F01391",
            "name":"Haller utca / Mester utca",
            "lat":47.476083,
            "lon":19.076793
        },
        {
            "id":"F01393",
            "name":"Haller utca",
            "lat":47.47566,
            "lon":19.077775
        },
        {
            "id":"F01394",
            "name":"Haller utca",
            "lat":47.47593,
            "lon":19.077629
        },
        {
            "id":"F01395",
            "name":"Mester utca",
            "lat":47.476235,
            "lon":19.078532
        },
        {
            "id":"F01396",
            "name":"Millenniumi Kulturális Központ",
            "lat":47.470993,
            "lon":19.073235
        },
        {
            "id":"F01397",
            "name":"Millenniumi Kulturális Központ",
            "lat":47.471272,
            "lon":19.073037
        },
        {
            "id":"F01398",
            "name":"Vágóhíd utca",
            "lat":47.473438,
            "lon":19.079923
        },
        {
            "id":"F01399",
            "name":"Vágóhíd utca",
            "lat":47.473168,
            "lon":19.080294
        },
        {
            "id":"F01400",
            "name":"Török Pál utca",
            "lat":47.487791,
            "lon":19.061134
        },
        {
            "id":"F01401",
            "name":"Közvágóhíd H",
            "lat":47.467574,
            "lon":19.075887
        },
        {
            "id":"F01403",
            "name":"Közvágóhíd H",
            "lat":47.467925,
            "lon":19.075781
        },
        {
            "id":"F01404",
            "name":"Közvágóhíd H",
            "lat":47.467682,
            "lon":19.076497
        },
        {
            "id":"F01405",
            "name":"Közvágóhíd",
            "lat":47.466314,
            "lon":19.077213
        },
        {
            "id":"F01407",
            "name":"Közvágóhíd H (Kvassay Jenő út)",
            "lat":47.466252,
            "lon":19.076231
        },
        {
            "id":"F01408",
            "name":"József Attila ltp., Távíró utca",
            "lat":47.460632,
            "lon":19.114891
        },
        {
            "id":"F01411",
            "name":"Helyi kikötő út",
            "lat":47.463167,
            "lon":19.072701
        },
        {
            "id":"F01412",
            "name":"Helyi kikötő út",
            "lat":47.463464,
            "lon":19.073086
        },
        {
            "id":"F01413",
            "name":"Magyar Aszfalt",
            "lat":47.459718,
            "lon":19.087873
        },
        {
            "id":"F01414",
            "name":"Magyar Aszfalt",
            "lat":47.459862,
            "lon":19.087674
        },
        {
            "id":"F01415",
            "name":"Kén utca",
            "lat":47.455068,
            "lon":19.086397
        },
        {
            "id":"F01416",
            "name":"Kén utca",
            "lat":47.454744,
            "lon":19.086715
        },
        {
            "id":"F01417",
            "name":"Kén utca H (Illatos út)",
            "lat":47.454861,
            "lon":19.087524
        },
        {
            "id":"F01418",
            "name":"Kén utca H",
            "lat":47.455113,
            "lon":19.086543
        },
        {
            "id":"F01419",
            "name":"Kén utca H",
            "lat":47.454384,
            "lon":19.087152
        },
        {
            "id":"F01420",
            "name":"Kén utca H (Illatos út)",
            "lat":47.454681,
            "lon":19.087948
        },
        {
            "id":"F01421",
            "name":"Illatos út",
            "lat":47.454698,
            "lon":19.090495
        },
        {
            "id":"F01422",
            "name":"Gubacsi út",
            "lat":47.454365,
            "lon":19.090136
        },
        {
            "id":"F01423",
            "name":"Gubacsi út",
            "lat":47.453888,
            "lon":19.091966
        },
        {
            "id":"F01424",
            "name":"Illatos út",
            "lat":47.453645,
            "lon":19.091263
        },
        {
            "id":"F01425",
            "name":"Külső Mester utca",
            "lat":47.454282,
            "lon":19.09625
        },
        {
            "id":"F01426",
            "name":"Külső Mester utca",
            "lat":47.454398,
            "lon":19.09743
        },
        {
            "id":"F01427",
            "name":"Timót utca",
            "lat":47.452107,
            "lon":19.091938
        },
        {
            "id":"F01428",
            "name":"Timót utca",
            "lat":47.451855,
            "lon":19.09223
        },
        {
            "id":"F01429",
            "name":"Soroksári út 150. (Timót utca)",
            "lat":47.45146,
            "lon":19.088755
        },
        {
            "id":"F01430",
            "name":"Soroksári út 150. (Timót utca)",
            "lat":47.450885,
            "lon":19.088914
        },
        {
            "id":"F01431",
            "name":"Szabadkai út",
            "lat":47.444083,
            "lon":19.09286
        },
        {
            "id":"F01432",
            "name":"Szabadkai út",
            "lat":47.443291,
            "lon":19.093031
        },
        {
            "id":"F01434",
            "name":"Gubacsi út / Határ út",
            "lat":47.444414,
            "lon":19.097235
        },
        {
            "id":"F01435",
            "name":"Gubacsi út / Határ út",
            "lat":47.444558,
            "lon":19.097501
        },
        {
            "id":"F01436",
            "name":"Gubacsi út / Határ út",
            "lat":47.444108,
            "lon":19.096983
        },
        {
            "id":"F01437",
            "name":"Gubacsi út / Határ út",
            "lat":47.444306,
            "lon":19.096533
        },
        {
            "id":"F01438",
            "name":"Gubacsi út / Határ út",
            "lat":47.444504,
            "lon":19.097739
        },
        {
            "id":"F01439",
            "name":"Gubacsi út / Határ út",
            "lat":47.443632,
            "lon":19.096532
        },
        {
            "id":"F01440",
            "name":"Határ út",
            "lat":47.442076,
            "lon":19.094953
        },
        {
            "id":"F01441",
            "name":"Baross utca",
            "lat":47.441618,
            "lon":19.095112
        },
        {
            "id":"F01442",
            "name":"Ősz utca",
            "lat":47.44605,
            "lon":19.10022
        },
        {
            "id":"F01443",
            "name":"Ősz utca",
            "lat":47.446113,
            "lon":19.100194
        },
        {
            "id":"F01444",
            "name":"Jókai Mór utca / Határ út",
            "lat":47.44898,
            "lon":19.10448
        },
        {
            "id":"F01445",
            "name":"Jókai Mór utca / Határ út",
            "lat":47.448657,
            "lon":19.104135
        },
        {
            "id":"F01446",
            "name":"Jókai Mór utca / Határ út",
            "lat":47.448629,
            "lon":19.104957
        },
        {
            "id":"F01447",
            "name":"Mártírok útja / Határ út",
            "lat":47.451767,
            "lon":19.108647
        },
        {
            "id":"F01448",
            "name":"Mártírok útja / Határ út",
            "lat":47.45191,
            "lon":19.108992
        },
        {
            "id":"F01449",
            "name":"Mártírok útja / Határ út",
            "lat":47.450866,
            "lon":19.110635
        },
        {
            "id":"F01450",
            "name":"Mártírok útja / Határ út",
            "lat":47.451811,
            "lon":19.109482
        },
        {
            "id":"F01451",
            "name":"Nagykőrösi út  / Határ út",
            "lat":47.455469,
            "lon":19.114632
        },
        {
            "id":"F01452",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.455443,
            "lon":19.114062
        },
        {
            "id":"F01453",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.45574,
            "lon":19.113664
        },
        {
            "id":"F01454",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.455568,
            "lon":19.114407
        },
        {
            "id":"F01455",
            "name":"Mészáros Lőrinc utca",
            "lat":47.459675,
            "lon":19.120844
        },
        {
            "id":"F01456",
            "name":"Mészáros Lőrinc utca",
            "lat":47.459289,
            "lon":19.120075
        },
        {
            "id":"F01457",
            "name":"Mészáros Lőrinc utca",
            "lat":47.459585,
            "lon":19.120261
        },
        {
            "id":"F01458",
            "name":"Mészáros Lőrinc utca",
            "lat":47.459756,
            "lon":19.12038
        },
        {
            "id":"F01460",
            "name":"Határ út M",
            "lat":47.464862,
            "lon":19.125958
        },
        {
            "id":"F01461",
            "name":"Határ út M",
            "lat":47.465078,
            "lon":19.126158
        },
        {
            "id":"F01462",
            "name":"Határ út M",
            "lat":47.465042,
            "lon":19.126051
        },
        {
            "id":"F01463",
            "name":"Kőér utcai uszoda",
            "lat":47.466517,
            "lon":19.126213
        },
        {
            "id":"F01464",
            "name":"Kőér utcai uszoda",
            "lat":47.466588,
            "lon":19.126425
        },
        {
            "id":"F01465",
            "name":"Pöttyös utca M",
            "lat":47.468798,
            "lon":19.117434
        },
        {
            "id":"F01466",
            "name":"Pöttyös utca M",
            "lat":47.468789,
            "lon":19.116784
        },
        {
            "id":"F01467",
            "name":"Friss utca",
            "lat":47.463437,
            "lon":19.117892
        },
        {
            "id":"F01468",
            "name":"Pöttyös utca",
            "lat":47.464994,
            "lon":19.11605
        },
        {
            "id":"F01469",
            "name":"Napfény utca",
            "lat":47.4654,
            "lon":19.114326
        },
        {
            "id":"F01470",
            "name":"Lobogó utca",
            "lat":47.462107,
            "lon":19.114892
        },
        {
            "id":"F01471",
            "name":"Lobogó utca",
            "lat":47.461711,
            "lon":19.115515
        },
        {
            "id":"F01474",
            "name":"Táblás utca",
            "lat":47.455349,
            "lon":19.10328
        },
        {
            "id":"F01475",
            "name":"Táblás utca",
            "lat":47.455528,
            "lon":19.104964
        },
        {
            "id":"F01476",
            "name":"Aszódi utca",
            "lat":47.463671,
            "lon":19.100808
        },
        {
            "id":"F01477",
            "name":"Zombori utca",
            "lat":47.468168,
            "lon":19.101011
        },
        {
            "id":"F01478",
            "name":"Füleki utca",
            "lat":47.466296,
            "lon":19.102243
        },
        {
            "id":"F01479",
            "name":"Gyáli út",
            "lat":47.464803,
            "lon":19.103913
        },
        {
            "id":"F01481",
            "name":"Ecseri út",
            "lat":47.468488,
            "lon":19.108095
        },
        {
            "id":"F01482",
            "name":"Közterületfenntartó Zrt.",
            "lat":47.46777,
            "lon":19.106503
        },
        {
            "id":"F01483",
            "name":"Epreserdő utca",
            "lat":47.468462,
            "lon":19.107286
        },
        {
            "id":"F01484",
            "name":"Közterületfenntartó Zrt.",
            "lat":47.467832,
            "lon":19.107657
        },
        {
            "id":"F01485",
            "name":"Közterületfenntartó Zrt.",
            "lat":47.468201,
            "lon":19.107617
        },
        {
            "id":"F01486",
            "name":"Ecseri út",
            "lat":47.468083,
            "lon":19.108281
        },
        {
            "id":"F01487",
            "name":"Ifjúmunkás utca",
            "lat":47.468172,
            "lon":19.111027
        },
        {
            "id":"F01488",
            "name":"Ifjúmunkás utca",
            "lat":47.468433,
            "lon":19.110921
        },
        {
            "id":"F01489",
            "name":"Ecseri út M",
            "lat":47.470421,
            "lon":19.110976
        },
        {
            "id":"F01490",
            "name":"Ecseri út M",
            "lat":47.470511,
            "lon":19.110751
        },
        {
            "id":"F01491",
            "name":"Ecseri út M",
            "lat":47.471087,
            "lon":19.10912
        },
        {
            "id":"F01492",
            "name":"Péceli utca",
            "lat":47.469509,
            "lon":19.099381
        },
        {
            "id":"F01493",
            "name":"Ecseri út",
            "lat":47.471357,
            "lon":19.110155
        },
        {
            "id":"F01494",
            "name":"Ecseri út",
            "lat":47.470735,
            "lon":19.111308
        },
        {
            "id":"F01495",
            "name":"Ecseri út M",
            "lat":47.471213,
            "lon":19.109319
        },
        {
            "id":"F01496",
            "name":"Ecseri út M",
            "lat":47.471104,
            "lon":19.111322
        },
        {
            "id":"F01497",
            "name":"Ecseri út M",
            "lat":47.470906,
            "lon":19.111109
        },
        {
            "id":"F01498",
            "name":"Albert Flórián út",
            "lat":47.472395,
            "lon":19.095512
        },
        {
            "id":"F01499",
            "name":"Albert Flórián út",
            "lat":47.472703,
            "lon":19.096092
        },
        {
            "id":"F01500",
            "name":"Albert Flórián út",
            "lat":47.473747,
            "lon":19.096745
        },
        {
            "id":"F01501",
            "name":"Albert Flórián út",
            "lat":47.473558,
            "lon":19.097024
        },
        {
            "id":"F01502",
            "name":"Ferencváros vasútállomás",
            "lat":47.470281,
            "lon":19.08932
        },
        {
            "id":"F01503",
            "name":"Ferencváros vasútállomás",
            "lat":47.470198,
            "lon":19.088597
        },
        {
            "id":"F01504",
            "name":"Ferencváros vasútállomás",
            "lat":47.470718,
            "lon":19.090136
        },
        {
            "id":"F01505",
            "name":"Ferencváros vasútállomás",
            "lat":47.470062,
            "lon":19.088676
        },
        {
            "id":"F01506",
            "name":"Könyves Kálmán körút",
            "lat":47.469821,
            "lon":19.082985
        },
        {
            "id":"F01507",
            "name":"Könyves Kálmán körút",
            "lat":47.470226,
            "lon":19.08276
        },
        {
            "id":"F01508",
            "name":"Mester utca / Könyves Kálmán körút",
            "lat":47.46991,
            "lon":19.084405
        },
        {
            "id":"F01509",
            "name":"Mester utca / Könyves Kálmán körút",
            "lat":47.46973,
            "lon":19.085041
        },
        {
            "id":"F01511",
            "name":"Balázs Béla utca",
            "lat":47.476972,
            "lon":19.082618
        },
        {
            "id":"F01512",
            "name":"Balázs Béla utca",
            "lat":47.476819,
            "lon":19.081915
        },
        {
            "id":"F01513",
            "name":"Balázs Béla utca",
            "lat":47.476702,
            "lon":19.081703
        },
        {
            "id":"F01514",
            "name":"Boráros tér H",
            "lat":47.479953,
            "lon":19.067495
        },
        {
            "id":"F01515",
            "name":"Boráros tér H",
            "lat":47.479593,
            "lon":19.067932
        },
        {
            "id":"F01518",
            "name":"Boráros tér H",
            "lat":47.480043,
            "lon":19.066075
        },
        {
            "id":"F01519",
            "name":"Boráros tér H",
            "lat":47.479773,
            "lon":19.066234
        },
        {
            "id":"F01520",
            "name":"Boráros tér",
            "lat":47.479179,
            "lon":19.066433
        },
        {
            "id":"F01525",
            "name":"Csengettyű utca",
            "lat":47.46354,
            "lon":19.109522
        },
        {
            "id":"F01526",
            "name":"Csengettyű utca",
            "lat":47.463486,
            "lon":19.109642
        },
        {
            "id":"F01527",
            "name":"Közvágóhíd H",
            "lat":47.468933,
            "lon":19.073752
        },
        {
            "id":"F01528",
            "name":"Közvágóhíd H",
            "lat":47.468636,
            "lon":19.073845
        },
        {
            "id":"F01530",
            "name":"Népliget M",
            "lat":47.475778,
            "lon":19.099732
        },
        {
            "id":"F01531",
            "name":"Balkán utca",
            "lat":47.474052,
            "lon":19.116035
        },
        {
            "id":"F01532",
            "name":"Balkán utca",
            "lat":47.473827,
            "lon":19.115796
        },
        {
            "id":"F01533",
            "name":"Sporttelep",
            "lat":47.47882,
            "lon":19.113507
        },
        {
            "id":"F01534",
            "name":"Sporttelep",
            "lat":47.478974,
            "lon":19.112751
        },
        {
            "id":"F01535",
            "name":"Fertő utca / Bihari utca",
            "lat":47.476056,
            "lon":19.119142
        },
        {
            "id":"F01536",
            "name":"Fertő utca / Bihari utca",
            "lat":47.476263,
            "lon":19.118453
        },
        {
            "id":"F01537",
            "name":"Fertő utca / Bihari utca",
            "lat":47.475282,
            "lon":19.120017
        },
        {
            "id":"F01538",
            "name":"Fertő utca / Bihari utca",
            "lat":47.475822,
            "lon":19.118863
        },
        {
            "id":"F01539",
            "name":"Basa utca",
            "lat":47.470654,
            "lon":19.126471
        },
        {
            "id":"F01540",
            "name":"Kőér utca",
            "lat":47.470321,
            "lon":19.126762
        },
        {
            "id":"F01541",
            "name":"Határ út",
            "lat":47.465846,
            "lon":19.125369
        },
        {
            "id":"F01542",
            "name":"Határ út",
            "lat":47.465554,
            "lon":19.126264
        },
        {
            "id":"F01543",
            "name":"Kőbánya-Kispest",
            "lat":47.463976,
            "lon":19.147199
        },
        {
            "id":"F01544",
            "name":"Kőbánya-Kispest",
            "lat":47.46345,
            "lon":19.148837
        },
        {
            "id":"F01545",
            "name":"Felsőcsatári út",
            "lat":47.457367,
            "lon":19.17779
        },
        {
            "id":"F01546",
            "name":"Hangár utca",
            "lat":47.461805,
            "lon":19.166846
        },
        {
            "id":"F01547",
            "name":"Gyömrői út 105.",
            "lat":47.463166,
            "lon":19.163519
        },
        {
            "id":"F01548",
            "name":"Gyömrői út 132.",
            "lat":47.463654,
            "lon":19.161982
        },
        {
            "id":"F01549",
            "name":"Árpád utca",
            "lat":47.463583,
            "lon":19.177912
        },
        {
            "id":"F01550",
            "name":"Árpád utca",
            "lat":47.464014,
            "lon":19.178125
        },
        {
            "id":"F01551",
            "name":"Álmos utca",
            "lat":47.467639,
            "lon":19.178598
        },
        {
            "id":"F01552",
            "name":"Álmos utca",
            "lat":47.467009,
            "lon":19.178769
        },
        {
            "id":"F01553",
            "name":"Bogáncsvirág utca",
            "lat":47.483628,
            "lon":19.196245
        },
        {
            "id":"F01554",
            "name":"Csillagvirág utca",
            "lat":47.483538,
            "lon":19.196298
        },
        {
            "id":"F01555",
            "name":"Kőbánya felső vasútállomás",
            "lat":47.492542,
            "lon":19.13363
        },
        {
            "id":"F01556",
            "name":"IV. kapu",
            "lat":47.492041,
            "lon":19.130524
        },
        {
            "id":"F01557",
            "name":"II. kapu",
            "lat":47.491596,
            "lon":19.123808
        },
        {
            "id":"F01558",
            "name":"Vásárközpont, főbejárat",
            "lat":47.4931,
            "lon":19.121036
        },
        {
            "id":"F01559",
            "name":"Pongrácz úti lakótelep",
            "lat":47.490806,
            "lon":19.120887
        },
        {
            "id":"F01560",
            "name":"Pongrácz úti lakótelep",
            "lat":47.490392,
            "lon":19.121378
        },
        {
            "id":"F01561",
            "name":"Őrház",
            "lat":47.489464,
            "lon":19.124508
        },
        {
            "id":"F01562",
            "name":"Őrház",
            "lat":47.489499,
            "lon":19.124959
        },
        {
            "id":"F01563",
            "name":"Egészségház",
            "lat":47.484126,
            "lon":19.116619
        },
        {
            "id":"F01564",
            "name":"Egészségház",
            "lat":47.483747,
            "lon":19.117534
        },
        {
            "id":"F01565",
            "name":"Egészségház",
            "lat":47.484089,
            "lon":19.117322
        },
        {
            "id":"F01566",
            "name":"Egészségház",
            "lat":47.484071,
            "lon":19.117202
        },
        {
            "id":"F01567",
            "name":"Mázsa utca",
            "lat":47.483195,
            "lon":19.123384
        },
        {
            "id":"F01568",
            "name":"Mázsa utca",
            "lat":47.483105,
            "lon":19.123278
        },
        {
            "id":"F01569",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483409,
            "lon":19.126463
        },
        {
            "id":"F01570",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483499,
            "lon":19.126251
        },
        {
            "id":"F01571",
            "name":"Kőbánya alsó vasútállomás (Mázsa tér)",
            "lat":47.482879,
            "lon":19.125786
        },
        {
            "id":"F01572",
            "name":"Kőbánya alsó vasútállomás (Mázsa tér)",
            "lat":47.482609,
            "lon":19.126077
        },
        {
            "id":"F01574",
            "name":"Kőbánya alsó vasútállomás (Mázsa tér)",
            "lat":47.481699,
            "lon":19.127018
        },
        {
            "id":"F01575",
            "name":"Szállás utca",
            "lat":47.478698,
            "lon":19.123418
        },
        {
            "id":"F01576",
            "name":"Szállás utca",
            "lat":47.478913,
            "lon":19.123869
        },
        {
            "id":"F01577",
            "name":"Kőér utca",
            "lat":47.473805,
            "lon":19.135139
        },
        {
            "id":"F01578",
            "name":"Kőér utca",
            "lat":47.473733,
            "lon":19.135046
        },
        {
            "id":"F01579",
            "name":"Gyömrői út",
            "lat":47.471632,
            "lon":19.141848
        },
        {
            "id":"F01580",
            "name":"Kada utca",
            "lat":47.471722,
            "lon":19.14218
        },
        {
            "id":"F01581",
            "name":"Diósgyőri utca",
            "lat":47.470443,
            "lon":19.143835
        },
        {
            "id":"F01582",
            "name":"Diósgyőri utca",
            "lat":47.470536,
            "lon":19.143829
        },
        {
            "id":"F01583",
            "name":"Felüljáró",
            "lat":47.466227,
            "lon":19.153292
        },
        {
            "id":"F01584",
            "name":"Felüljáró (Gyömrői út)",
            "lat":47.465463,
            "lon":19.152827
        },
        {
            "id":"F01585",
            "name":"Újhegyi út",
            "lat":47.465457,
            "lon":19.157542
        },
        {
            "id":"F01586",
            "name":"Újhegyi út",
            "lat":47.464799,
            "lon":19.158986
        },
        {
            "id":"F01587",
            "name":"Hangár utca",
            "lat":47.462525,
            "lon":19.165813
        },
        {
            "id":"F01588",
            "name":"Újhegyi út, Sportliget",
            "lat":47.468108,
            "lon":19.168664
        },
        {
            "id":"F01589",
            "name":"Újhegyi út, Sportliget",
            "lat":47.468305,
            "lon":19.169341
        },
        {
            "id":"F01590",
            "name":"Dolomit utca",
            "lat":47.469565,
            "lon":19.169158
        },
        {
            "id":"F01591",
            "name":"Maglódi út",
            "lat":47.470307,
            "lon":19.173285
        },
        {
            "id":"F01592",
            "name":"Maglódi út",
            "lat":47.470567,
            "lon":19.174108
        },
        {
            "id":"F01593",
            "name":"Új köztemető",
            "lat":47.473127,
            "lon":19.177258
        },
        {
            "id":"F01594",
            "name":"Új köztemető",
            "lat":47.473307,
            "lon":19.177445
        },
        {
            "id":"F01595",
            "name":"Új köztemető",
            "lat":47.473387,
            "lon":19.178068
        },
        {
            "id":"F01596",
            "name":"Új köztemető",
            "lat":47.473414,
            "lon":19.177856
        },
        {
            "id":"F01597",
            "name":"Új köztemető",
            "lat":47.473013,
            "lon":19.176986
        },
        {
            "id":"F01600",
            "name":"Gránátos utca",
            "lat":47.481276,
            "lon":19.177504
        },
        {
            "id":"F01601",
            "name":"Gránátos utca",
            "lat":47.481753,
            "lon":19.177677
        },
        {
            "id":"F01602",
            "name":"Kozma utca",
            "lat":47.487508,
            "lon":19.179019
        },
        {
            "id":"F01603",
            "name":"Kozma utca",
            "lat":47.486851,
            "lon":19.179322
        },
        {
            "id":"F01604",
            "name":"Athenaeum Nyomda",
            "lat":47.487047,
            "lon":19.180517
        },
        {
            "id":"F01605",
            "name":"Kossuth Nyomda",
            "lat":47.486598,
            "lon":19.187496
        },
        {
            "id":"F01606",
            "name":"Kossuth Nyomda",
            "lat":47.486573,
            "lon":19.18662
        },
        {
            "id":"F01608",
            "name":"Tarkarét utca",
            "lat":47.485909,
            "lon":19.191966
        },
        {
            "id":"F01609",
            "name":"Túzok utca",
            "lat":47.487051,
            "lon":19.192712
        },
        {
            "id":"F01610",
            "name":"Túzok utca",
            "lat":47.486924,
            "lon":19.193242
        },
        {
            "id":"F01611",
            "name":"Keresztúri út 102.",
            "lat":47.490937,
            "lon":19.16853
        },
        {
            "id":"F01612",
            "name":"Keresztúri út 102.",
            "lat":47.490721,
            "lon":19.169206
        },
        {
            "id":"F01613",
            "name":"Rákos vasútállomás",
            "lat":47.488305,
            "lon":19.17415
        },
        {
            "id":"F01614",
            "name":"Rákos vasútállomás",
            "lat":47.488297,
            "lon":19.1735
        },
        {
            "id":"F01615",
            "name":"Maglódi út",
            "lat":47.490479,
            "lon":19.1491
        },
        {
            "id":"F01616",
            "name":"Maglódi út",
            "lat":47.490344,
            "lon":19.149684
        },
        {
            "id":"F01617",
            "name":"Jászberényi út / Maglódi út",
            "lat":47.490047,
            "lon":19.149073
        },
        {
            "id":"F01618",
            "name":"Jászberényi út / Maglódi út",
            "lat":47.490291,
            "lon":19.148649
        },
        {
            "id":"F01619",
            "name":"Sörgyár",
            "lat":47.491787,
            "lon":19.144683
        },
        {
            "id":"F01620",
            "name":"Sörgyár",
            "lat":47.491958,
            "lon":19.144352
        },
        {
            "id":"F01621",
            "name":"Sörgyár",
            "lat":47.4913,
            "lon":19.14601
        },
        {
            "id":"F01622",
            "name":"Sörgyár",
            "lat":47.492075,
            "lon":19.144498
        },
        {
            "id":"F01623",
            "name":"Élessarok",
            "lat":47.491091,
            "lon":19.138113
        },
        {
            "id":"F01624",
            "name":"Élessarok",
            "lat":47.491513,
            "lon":19.138724
        },
        {
            "id":"F01625",
            "name":"Élessarok",
            "lat":47.491828,
            "lon":19.138287
        },
        {
            "id":"F01626",
            "name":"Élessarok",
            "lat":47.491846,
            "lon":19.138619
        },
        {
            "id":"F01627",
            "name":"Élessarok",
            "lat":47.491199,
            "lon":19.137994
        },
        {
            "id":"F01628",
            "name":"Élessarok",
            "lat":47.491962,
            "lon":19.140172
        },
        {
            "id":"F01629",
            "name":"Harmat utca",
            "lat":47.489707,
            "lon":19.136824
        },
        {
            "id":"F01630",
            "name":"Kőrösi Csoma Sándor út",
            "lat":47.488798,
            "lon":19.137525
        },
        {
            "id":"F01631",
            "name":"Harmat utca",
            "lat":47.488402,
            "lon":19.137963
        },
        {
            "id":"F01635",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483426,
            "lon":19.128095
        },
        {
            "id":"F01636",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483723,
            "lon":19.127883
        },
        {
            "id":"F01637",
            "name":"Hízlaló tér",
            "lat":47.472518,
            "lon":19.1239
        },
        {
            "id":"F01638",
            "name":"Hízlaló tér",
            "lat":47.472662,
            "lon":19.123542
        },
        {
            "id":"F01639",
            "name":"Liget tér",
            "lat":47.481743,
            "lon":19.128809
        },
        {
            "id":"F01640",
            "name":"Vaspálya utca",
            "lat":47.481833,
            "lon":19.128438
        },
        {
            "id":"F01641",
            "name":"Liget tér",
            "lat":47.482803,
            "lon":19.130363
        },
        {
            "id":"F01642",
            "name":"Liget tér",
            "lat":47.483145,
            "lon":19.131213
        },
        {
            "id":"F01644",
            "name":"Kápolna utca",
            "lat":47.482012,
            "lon":19.130667
        },
        {
            "id":"F01645",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.482469,
            "lon":19.128463
        },
        {
            "id":"F01646",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.48236,
            "lon":19.129404
        },
        {
            "id":"F01647",
            "name":"Kápolna utca",
            "lat":47.482246,
            "lon":19.130535
        },
        {
            "id":"F01648",
            "name":"Szent László tér",
            "lat":47.485277,
            "lon":19.131424
        },
        {
            "id":"F01649",
            "name":"Szent László tér",
            "lat":47.485048,
            "lon":19.13157
        },
        {
            "id":"F01650",
            "name":"Szent László tér",
            "lat":47.485352,
            "lon":19.131719
        },
        {
            "id":"F01651",
            "name":"Szent László tér",
            "lat":47.484934,
            "lon":19.131747
        },
        {
            "id":"F01652",
            "name":"Szent László tér",
            "lat":47.485924,
            "lon":19.130726
        },
        {
            "id":"F01653",
            "name":"Szent László tér",
            "lat":47.485987,
            "lon":19.131151
        },
        {
            "id":"F01655",
            "name":"Kápolna utca",
            "lat":47.481649,
            "lon":19.135112
        },
        {
            "id":"F01658",
            "name":"Gyula utca",
            "lat":47.46101,
            "lon":19.170266
        },
        {
            "id":"F01659",
            "name":"Ihász utca",
            "lat":47.479562,
            "lon":19.135307
        },
        {
            "id":"F01660",
            "name":"Ihász utca",
            "lat":47.479382,
            "lon":19.135387
        },
        {
            "id":"F01661",
            "name":"Kápolna tér",
            "lat":47.481405,
            "lon":19.135722
        },
        {
            "id":"F01662",
            "name":"Kápolna tér",
            "lat":47.481189,
            "lon":19.136517
        },
        {
            "id":"F01664",
            "name":"Kőér utca",
            "lat":47.477175,
            "lon":19.139032
        },
        {
            "id":"F01665",
            "name":"Kőér utca",
            "lat":47.477608,
            "lon":19.138064
        },
        {
            "id":"F01666",
            "name":"Óhegy park",
            "lat":47.480079,
            "lon":19.140854
        },
        {
            "id":"F01667",
            "name":"Óhegy park",
            "lat":47.479503,
            "lon":19.141663
        },
        {
            "id":"F01668",
            "name":"Ihász utca",
            "lat":47.485889,
            "lon":19.142112
        },
        {
            "id":"F01669",
            "name":"Ihász utca",
            "lat":47.484322,
            "lon":19.143821
        },
        {
            "id":"F01670",
            "name":"Csősztorony",
            "lat":47.48371,
            "lon":19.14504
        },
        {
            "id":"F01671",
            "name":"Csősztorony",
            "lat":47.48298,
            "lon":19.145862
        },
        {
            "id":"F01672",
            "name":"Téglavető utca",
            "lat":47.483688,
            "lon":19.149061
        },
        {
            "id":"F01673",
            "name":"Gitár utca",
            "lat":47.487049,
            "lon":19.153035
        },
        {
            "id":"F01674",
            "name":"Gitár utca",
            "lat":47.487085,
            "lon":19.152889
        },
        {
            "id":"F01675",
            "name":"Gitár utca",
            "lat":47.48776,
            "lon":19.151723
        },
        {
            "id":"F01676",
            "name":"Kada utca",
            "lat":47.482897,
            "lon":19.158401
        },
        {
            "id":"F01677",
            "name":"Kada utca / Maglódi út",
            "lat":47.482538,
            "lon":19.158095
        },
        {
            "id":"F01678",
            "name":"Kada utca / Maglódi út",
            "lat":47.48234,
            "lon":19.158015
        },
        {
            "id":"F01679",
            "name":"Kada utca",
            "lat":47.482735,
            "lon":19.158732
        },
        {
            "id":"F01681",
            "name":"Kada utca / Mádi utca",
            "lat":47.479286,
            "lon":19.153365
        },
        {
            "id":"F01682",
            "name":"Kada utca / Mádi utca",
            "lat":47.479537,
            "lon":19.153896
        },
        {
            "id":"F01683",
            "name":"Kada utca",
            "lat":47.479392,
            "lon":19.154798
        },
        {
            "id":"F01684",
            "name":"Kada utca / Harmat utca",
            "lat":47.477983,
            "lon":19.151451
        },
        {
            "id":"F01685",
            "name":"Kada utca",
            "lat":47.477866,
            "lon":19.152261
        },
        {
            "id":"F01686",
            "name":"Márga utca",
            "lat":47.477756,
            "lon":19.144247
        },
        {
            "id":"F01687",
            "name":"Márga utca",
            "lat":47.477683,
            "lon":19.144512
        },
        {
            "id":"F01688",
            "name":"Kemence utca",
            "lat":47.47589,
            "lon":19.148064
        },
        {
            "id":"F01689",
            "name":"Kemence utca",
            "lat":47.475774,
            "lon":19.147639
        },
        {
            "id":"F01690",
            "name":"Kada utca",
            "lat":47.473933,
            "lon":19.144399
        },
        {
            "id":"F01691",
            "name":"Gergely utca",
            "lat":47.473429,
            "lon":19.144517
        },
        {
            "id":"F01692",
            "name":"Noszlopy utca",
            "lat":47.471828,
            "lon":19.148368
        },
        {
            "id":"F01693",
            "name":"Gergely utca (Sibrik Miklós út)",
            "lat":47.468652,
            "lon":19.15589
        },
        {
            "id":"F01694",
            "name":"Gergely utca (Sibrik Miklós út)",
            "lat":47.46787,
            "lon":19.154841
        },
        {
            "id":"F01695",
            "name":"Mélytó utca",
            "lat":47.467862,
            "lon":19.163423
        },
        {
            "id":"F01696",
            "name":"Mélytó utca",
            "lat":47.468589,
            "lon":19.164831
        },
        {
            "id":"F01697",
            "name":"Szövőszék utca",
            "lat":47.471905,
            "lon":19.159253
        },
        {
            "id":"F01698",
            "name":"Szövőszék utca",
            "lat":47.472291,
            "lon":19.159878
        },
        {
            "id":"F01699",
            "name":"Sibrik Miklós út",
            "lat":47.473576,
            "lon":19.160438
        },
        {
            "id":"F01700",
            "name":"Sibrik Miklós út",
            "lat":47.472693,
            "lon":19.162041
        },
        {
            "id":"F01701",
            "name":"Lavotta utca",
            "lat":47.475235,
            "lon":19.157098
        },
        {
            "id":"F01703",
            "name":"Lavotta utca",
            "lat":47.476879,
            "lon":19.159025
        },
        {
            "id":"F01704",
            "name":"Mádi utca",
            "lat":47.473537,
            "lon":19.163953
        },
        {
            "id":"F01705",
            "name":"Mádi utca",
            "lat":47.475059,
            "lon":19.162086
        },
        {
            "id":"F01706",
            "name":"Venyige utca",
            "lat":47.477637,
            "lon":19.165302
        },
        {
            "id":"F01707",
            "name":"Venyige utca",
            "lat":47.477457,
            "lon":19.16574
        },
        {
            "id":"F01708",
            "name":"Venyige utca",
            "lat":47.477439,
            "lon":19.165872
        },
        {
            "id":"F01709",
            "name":"Venyige utca",
            "lat":47.477286,
            "lon":19.165938
        },
        {
            "id":"F01710",
            "name":"Sírkert út",
            "lat":47.474431,
            "lon":19.169461
        },
        {
            "id":"F01711",
            "name":"Sírkert út",
            "lat":47.47389,
            "lon":19.170746
        },
        {
            "id":"F01712",
            "name":"Sírkert út",
            "lat":47.473754,
            "lon":19.171794
        },
        {
            "id":"F01713",
            "name":"Sírkert út",
            "lat":47.473862,
            "lon":19.17125
        },
        {
            "id":"F01714",
            "name":"Tavas utca",
            "lat":47.470019,
            "lon":19.165312
        },
        {
            "id":"F01715",
            "name":"Legényrózsa utca",
            "lat":47.486386,
            "lon":19.199318
        },
        {
            "id":"F01716",
            "name":"Legényrózsa utca",
            "lat":47.486277,
            "lon":19.199597
        },
        {
            "id":"F01717",
            "name":"Határmalom utca",
            "lat":47.488923,
            "lon":19.218422
        },
        {
            "id":"F01718",
            "name":"Határmalom utca",
            "lat":47.488911,
            "lon":19.220439
        },
        {
            "id":"F01719",
            "name":"501. utca",
            "lat":47.485733,
            "lon":19.21589
        },
        {
            "id":"F01720",
            "name":"501. utca",
            "lat":47.485039,
            "lon":19.216897
        },
        {
            "id":"F01721",
            "name":"Jászberényi út",
            "lat":47.484814,
            "lon":19.217188
        },
        {
            "id":"F01722",
            "name":"501. utca",
            "lat":47.485578,
            "lon":19.217296
        },
        {
            "id":"F01723",
            "name":"Gyömrői út 156.",
            "lat":47.460299,
            "lon":19.17041
        },
        {
            "id":"F01724",
            "name":"III. kapu",
            "lat":47.491449,
            "lon":19.128094
        },
        {
            "id":"F01725",
            "name":"Kistorony park",
            "lat":47.486109,
            "lon":19.124331
        },
        {
            "id":"F01726",
            "name":"Kistorony park",
            "lat":47.486658,
            "lon":19.124053
        },
        {
            "id":"F01727",
            "name":"Kőbánya felső vasútállomás",
            "lat":47.490942,
            "lon":19.133189
        },
        {
            "id":"F01728",
            "name":"Kőbánya felső vasútállomás",
            "lat":47.490861,
            "lon":19.132964
        },
        {
            "id":"F01729",
            "name":"Halom utca",
            "lat":47.490171,
            "lon":19.12861
        },
        {
            "id":"F01730",
            "name":"Halom utca",
            "lat":47.490091,
            "lon":19.128424
        },
        {
            "id":"F01731",
            "name":"Északi Járműjavító",
            "lat":47.485036,
            "lon":19.113793
        },
        {
            "id":"F01732",
            "name":"Északi Járműjavító",
            "lat":47.485171,
            "lon":19.113103
        },
        {
            "id":"F01733",
            "name":"Északi Járműjavító",
            "lat":47.485126,
            "lon":19.112865
        },
        {
            "id":"F01734",
            "name":"Északi Járműjavító",
            "lat":47.484697,
            "lon":19.113998
        },
        {
            "id":"F01735",
            "name":"Őrnagy utca",
            "lat":47.500607,
            "lon":19.111592
        },
        {
            "id":"F01736",
            "name":"Őrnagy utca",
            "lat":47.50057,
            "lon":19.112857
        },
        {
            "id":"F01737",
            "name":"Várna utca",
            "lat":47.501756,
            "lon":19.115447
        },
        {
            "id":"F01738",
            "name":"Várna utca",
            "lat":47.50172,
            "lon":19.115606
        },
        {
            "id":"F01739",
            "name":"Kerepesi út",
            "lat":47.500281,
            "lon":19.115604
        },
        {
            "id":"F01741",
            "name":"Pillangó utca M",
            "lat":47.501393,
            "lon":19.120848
        },
        {
            "id":"F01742",
            "name":"Pillangó utca",
            "lat":47.501089,
            "lon":19.11887
        },
        {
            "id":"F01743",
            "name":"Pillangó utca",
            "lat":47.501189,
            "lon":19.120496
        },
        {
            "id":"F01744",
            "name":"Hős utca",
            "lat":47.49751,
            "lon":19.116038
        },
        {
            "id":"F01745",
            "name":"Hős utca",
            "lat":47.496979,
            "lon":19.116303
        },
        {
            "id":"F01746",
            "name":"Expo tér",
            "lat":47.495268,
            "lon":19.119632
        },
        {
            "id":"F01749",
            "name":"Örs vezér tere",
            "lat":47.502922,
            "lon":19.135963
        },
        {
            "id":"F01751",
            "name":"Örs vezér tere M+H",
            "lat":47.503038,
            "lon":19.135372
        },
        {
            "id":"F01752",
            "name":"Örs vezér tere M+H",
            "lat":47.502498,
            "lon":19.136354
        },
        {
            "id":"F01755",
            "name":"Örs vezér tere M+H",
            "lat":47.504108,
            "lon":19.136144
        },
        {
            "id":"F01756",
            "name":"Örs vezér tere M+H",
            "lat":47.504315,
            "lon":19.136091
        },
        {
            "id":"F01757",
            "name":"Örs vezér tere M+H",
            "lat":47.504081,
            "lon":19.136449
        },
        {
            "id":"F01769",
            "name":"Gyakorló köz",
            "lat":47.501657,
            "lon":19.141556
        },
        {
            "id":"F01770",
            "name":"Gyakorló köz",
            "lat":47.501683,
            "lon":19.142684
        },
        {
            "id":"F01771",
            "name":"Gyakorló köz",
            "lat":47.503877,
            "lon":19.143272
        },
        {
            "id":"F01772",
            "name":"Sarkantyú utca",
            "lat":47.503995,
            "lon":19.14221
        },
        {
            "id":"F01773",
            "name":"Halas utca",
            "lat":47.502556,
            "lon":19.153265
        },
        {
            "id":"F01774",
            "name":"Halas utca",
            "lat":47.50252,
            "lon":19.153026
        },
        {
            "id":"F01775",
            "name":"Egyenes utcai lakótelep",
            "lat":47.505743,
            "lon":19.159099
        },
        {
            "id":"F01776",
            "name":"Egyenes utcai lakótelep",
            "lat":47.505636,
            "lon":19.158846
        },
        {
            "id":"F01777",
            "name":"Nagyicce H",
            "lat":47.506662,
            "lon":19.166641
        },
        {
            "id":"F01778",
            "name":"Nagyicce H",
            "lat":47.506842,
            "lon":19.167159
        },
        {
            "id":"F01779",
            "name":"Albertirsai köz",
            "lat":47.493825,
            "lon":19.138649
        },
        {
            "id":"F01780",
            "name":"Terebesi utca",
            "lat":47.493445,
            "lon":19.141302
        },
        {
            "id":"F01781",
            "name":"Terebesi utca",
            "lat":47.49421,
            "lon":19.1406
        },
        {
            "id":"F01782",
            "name":"Terebesi utca",
            "lat":47.494183,
            "lon":19.141025
        },
        {
            "id":"F01783",
            "name":"Terebesi utca",
            "lat":47.494687,
            "lon":19.140349
        },
        {
            "id":"F01784",
            "name":"EGIS Gyógyszergyár",
            "lat":47.500459,
            "lon":19.153752
        },
        {
            "id":"F01785",
            "name":"EGIS Gyógyszergyár",
            "lat":47.499263,
            "lon":19.153842
        },
        {
            "id":"F01786",
            "name":"MÁV-telep",
            "lat":47.493587,
            "lon":19.163652
        },
        {
            "id":"F01787",
            "name":"MÁV-telep",
            "lat":47.493776,
            "lon":19.163121
        },
        {
            "id":"F01788",
            "name":"Dömsödi utca",
            "lat":47.502919,
            "lon":19.167734
        },
        {
            "id":"F01789",
            "name":"Heves utca",
            "lat":47.503162,
            "lon":19.16792
        },
        {
            "id":"F01790",
            "name":"Rákosfalva H",
            "lat":47.504986,
            "lon":19.151464
        },
        {
            "id":"F01791",
            "name":"Rákosfalva H",
            "lat":47.504707,
            "lon":19.150946
        },
        {
            "id":"F01792",
            "name":"Örs vezér tere",
            "lat":47.503585,
            "lon":19.137192
        },
        {
            "id":"F01794",
            "name":"Kelemen utca",
            "lat":47.47691,
            "lon":19.132424
        },
        {
            "id":"F01795",
            "name":"Kelemen utca",
            "lat":47.477217,
            "lon":19.131894
        },
        {
            "id":"F01796",
            "name":"Gyógyszergyár",
            "lat":47.472399,
            "lon":19.138559
        },
        {
            "id":"F01797",
            "name":"Gyógyszergyár",
            "lat":47.472327,
            "lon":19.139023
        },
        {
            "id":"F01798",
            "name":"Kőbányai garázs",
            "lat":47.490711,
            "lon":19.114265
        },
        {
            "id":"F01799",
            "name":"Kőbányai garázs",
            "lat":47.490621,
            "lon":19.113986
        },
        {
            "id":"F01800",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.484056,
            "lon":19.12742
        },
        {
            "id":"F01801",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483381,
            "lon":19.127909
        },
        {
            "id":"F01803",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483813,
            "lon":19.127605
        },
        {
            "id":"F01804",
            "name":"Vasgyár utca",
            "lat":47.469009,
            "lon":19.147985
        },
        {
            "id":"F01805",
            "name":"Vasgyár utca",
            "lat":47.469127,
            "lon":19.147388
        },
        {
            "id":"F01806",
            "name":"Sibrik Miklós út",
            "lat":47.467152,
            "lon":19.153022
        },
        {
            "id":"F01807",
            "name":"Sibrik Miklós út",
            "lat":47.46727,
            "lon":19.152386
        },
        {
            "id":"F01808",
            "name":"Izraelita temető",
            "lat":47.479486,
            "lon":19.177871
        },
        {
            "id":"F01810",
            "name":"Izraelita temető",
            "lat":47.478955,
            "lon":19.17787
        },
        {
            "id":"F01811",
            "name":"Izraelita temető",
            "lat":47.47954,
            "lon":19.177672
        },
        {
            "id":"F01812",
            "name":"Meténg utca",
            "lat":47.484729,
            "lon":19.17872
        },
        {
            "id":"F01813",
            "name":"Meténg utca",
            "lat":47.484468,
            "lon":19.178454
        },
        {
            "id":"F01814",
            "name":"Fővárosi Kertészet",
            "lat":47.48938,
            "lon":19.177749
        },
        {
            "id":"F01815",
            "name":"Fővárosi Kertészet",
            "lat":47.489426,
            "lon":19.176913
        },
        {
            "id":"F01816",
            "name":"Díszítő üzem",
            "lat":47.488366,
            "lon":19.183652
        },
        {
            "id":"F01817",
            "name":"Díszítő üzem",
            "lat":47.48824,
            "lon":19.183731
        },
        {
            "id":"F01818",
            "name":"Tárna utca",
            "lat":47.489377,
            "lon":19.163789
        },
        {
            "id":"F01819",
            "name":"Tárna utca",
            "lat":47.489412,
            "lon":19.164691
        },
        {
            "id":"F01820",
            "name":"Rákosfalva",
            "lat":47.505183,
            "lon":19.152115
        },
        {
            "id":"F01821",
            "name":"Rákosfalva",
            "lat":47.50495,
            "lon":19.150641
        },
        {
            "id":"F01822",
            "name":"Téglavető utca",
            "lat":47.489596,
            "lon":19.160418
        },
        {
            "id":"F01823",
            "name":"Téglavető utca",
            "lat":47.489777,
            "lon":19.159211
        },
        {
            "id":"F01824",
            "name":"Orion",
            "lat":47.489843,
            "lon":19.156703
        },
        {
            "id":"F01825",
            "name":"Orion",
            "lat":47.490078,
            "lon":19.154766
        },
        {
            "id":"F01826",
            "name":"Ónodi utca",
            "lat":47.488979,
            "lon":19.1358
        },
        {
            "id":"F01827",
            "name":"Ónodi utca",
            "lat":47.488566,
            "lon":19.135229
        },
        {
            "id":"F01828",
            "name":"Ónodi utca",
            "lat":47.48817,
            "lon":19.134552
        },
        {
            "id":"F01829",
            "name":"Kocka utca",
            "lat":47.484896,
            "lon":19.155923
        },
        {
            "id":"F01830",
            "name":"Kocka utca",
            "lat":47.484968,
            "lon":19.155711
        },
        {
            "id":"F01831",
            "name":"Kocka utca",
            "lat":47.484978,
            "lon":19.155512
        },
        {
            "id":"F01832",
            "name":"Kocka utca",
            "lat":47.484761,
            "lon":19.155963
        },
        {
            "id":"F01833",
            "name":"Bajcsy-Zsilinszky Kórház",
            "lat":47.480024,
            "lon":19.16211
        },
        {
            "id":"F01834",
            "name":"Bajcsy-Zsilinszky Kórház",
            "lat":47.479781,
            "lon":19.162613
        },
        {
            "id":"F01835",
            "name":"Bajcsy-Zsilinszky Kórház",
            "lat":47.480006,
            "lon":19.162322
        },
        {
            "id":"F01836",
            "name":"Bajcsy-Zsilinszky Kórház",
            "lat":47.479853,
            "lon":19.162614
        },
        {
            "id":"F01837",
            "name":"Kocka utca",
            "lat":47.481824,
            "lon":19.151499
        },
        {
            "id":"F01838",
            "name":"Szlávy utca",
            "lat":47.480657,
            "lon":19.148922
        },
        {
            "id":"F01839",
            "name":"Szlávy utca",
            "lat":47.475743,
            "lon":19.141284
        },
        {
            "id":"F01840",
            "name":"Szlávy utca",
            "lat":47.475329,
            "lon":19.142199
        },
        {
            "id":"F01841",
            "name":"Újhegyi sétány",
            "lat":47.471685,
            "lon":19.163166
        },
        {
            "id":"F01842",
            "name":"Újhegyi sétány",
            "lat":47.470838,
            "lon":19.164465
        },
        {
            "id":"F01843",
            "name":"Bányató utca",
            "lat":47.468782,
            "lon":19.160958
        },
        {
            "id":"F01844",
            "name":"Bányató utca",
            "lat":47.469268,
            "lon":19.160468
        },
        {
            "id":"F01845",
            "name":"Tavas utca",
            "lat":47.471483,
            "lon":19.166562
        },
        {
            "id":"F01846",
            "name":"Rézvirág utca",
            "lat":47.486301,
            "lon":19.202384
        },
        {
            "id":"F01847",
            "name":"Rézvirág utca",
            "lat":47.486146,
            "lon":19.203816
        },
        {
            "id":"F01848",
            "name":"Dombhát utca",
            "lat":47.486012,
            "lon":19.209442
        },
        {
            "id":"F01849",
            "name":"Dombhát utca",
            "lat":47.485886,
            "lon":19.209866
        },
        {
            "id":"F01850",
            "name":"Gépmadár utca",
            "lat":47.502309,
            "lon":19.147517
        },
        {
            "id":"F01851",
            "name":"Gépmadár utca",
            "lat":47.502183,
            "lon":19.147304
        },
        {
            "id":"F01852",
            "name":"Pilisi utca",
            "lat":47.502234,
            "lon":19.160697
        },
        {
            "id":"F01853",
            "name":"Pilisi utca",
            "lat":47.502251,
            "lon":19.161773
        },
        {
            "id":"F01854",
            "name":"Gépmadár park",
            "lat":47.504442,
            "lon":19.146233
        },
        {
            "id":"F01855",
            "name":"Gépmadár park",
            "lat":47.504279,
            "lon":19.14695
        },
        {
            "id":"F01856",
            "name":"Pongrácz úti lakótelep",
            "lat":47.491265,
            "lon":19.12033
        },
        {
            "id":"F01857",
            "name":"Pongrácz úti lakótelep",
            "lat":47.491311,
            "lon":19.1198
        },
        {
            "id":"F01858",
            "name":"Hungaropharma",
            "lat":47.481836,
            "lon":19.20452
        },
        {
            "id":"F01859",
            "name":"Hungaropharma",
            "lat":47.482269,
            "lon":19.203619
        },
        {
            "id":"F01860",
            "name":"Fehér úti ipari park",
            "lat":47.499511,
            "lon":19.137384
        },
        {
            "id":"F01861",
            "name":"Fehér úti ipari park",
            "lat":47.499466,
            "lon":19.137251
        },
        {
            "id":"F01862",
            "name":"Fehér úti ipari park",
            "lat":47.49978,
            "lon":19.137411
        },
        {
            "id":"F01863",
            "name":"Fehér úti ipari park",
            "lat":47.499645,
            "lon":19.137504
        },
        {
            "id":"F01864",
            "name":"Aluljáró, Danone",
            "lat":47.48674,
            "lon":19.203234
        },
        {
            "id":"F01865",
            "name":"Aluljáró, Danone",
            "lat":47.486651,
            "lon":19.202783
        },
        {
            "id":"F01866",
            "name":"Új köztemető (Kozma utca)",
            "lat":47.475096,
            "lon":19.178218
        },
        {
            "id":"F01867",
            "name":"Új köztemető (Kozma utca)",
            "lat":47.474682,
            "lon":19.178138
        },
        {
            "id":"F01868",
            "name":"Tűzoltóság",
            "lat":47.478982,
            "lon":19.200279
        },
        {
            "id":"F01869",
            "name":"Tűzoltóság",
            "lat":47.479054,
            "lon":19.200332
        },
        {
            "id":"F01870",
            "name":"Felsőcsatári út",
            "lat":47.458053,
            "lon":19.176466
        },
        {
            "id":"F01872",
            "name":"Kollégium",
            "lat":47.483957,
            "lon":19.192531
        },
        {
            "id":"F01873",
            "name":"Kollégium",
            "lat":47.483849,
            "lon":19.19277
        },
        {
            "id":"F01874",
            "name":"Ezüstfa utca",
            "lat":47.479824,
            "lon":19.195969
        },
        {
            "id":"F01875",
            "name":"Csillagvirág utca",
            "lat":47.479941,
            "lon":19.196129
        },
        {
            "id":"F01878",
            "name":"Pöttyös utca",
            "lat":47.468852,
            "lon":19.116771
        },
        {
            "id":"F01879",
            "name":"Pöttyös utca",
            "lat":47.468438,
            "lon":19.117461
        },
        {
            "id":"F01880",
            "name":"Kamaraerdő",
            "lat":47.435984,
            "lon":18.978576
        },
        {
            "id":"F01881",
            "name":"Kamaraerdő",
            "lat":47.435825,
            "lon":18.978716
        },
        {
            "id":"F01882",
            "name":"Kamaraerdő",
            "lat":47.435831,
            "lon":18.978908
        },
        {
            "id":"F01883",
            "name":"Szociális Otthon",
            "lat":47.437589,
            "lon":18.979151
        },
        {
            "id":"F01884",
            "name":"Szociális Otthon",
            "lat":47.438224,
            "lon":18.97917
        },
        {
            "id":"F01885",
            "name":"Kamaraerdei Ifjúsági Park",
            "lat":47.441157,
            "lon":18.979524
        },
        {
            "id":"F01886",
            "name":"Kamaraerdei Ifjúsági Park",
            "lat":47.440698,
            "lon":18.979313
        },
        {
            "id":"F01887",
            "name":"Kamaraerdei Ifjúsági Park",
            "lat":47.440752,
            "lon":18.979154
        },
        {
            "id":"F01888",
            "name":"Repülőtér",
            "lat":47.444642,
            "lon":18.986706
        },
        {
            "id":"F01889",
            "name":"Repülőtér",
            "lat":47.444777,
            "lon":18.986905
        },
        {
            "id":"F01890",
            "name":"Fülőke utca",
            "lat":47.445445,
            "lon":18.991505
        },
        {
            "id":"F01891",
            "name":"Fülőke utca",
            "lat":47.445382,
            "lon":18.991466
        },
        {
            "id":"F01892",
            "name":"Balatoni út",
            "lat":47.444578,
            "lon":19.005415
        },
        {
            "id":"F01893",
            "name":"Balatoni út",
            "lat":47.444426,
            "lon":19.005773
        },
        {
            "id":"F01894",
            "name":"Kelenvölgy-Péterhegy",
            "lat":47.443564,
            "lon":19.012403
        },
        {
            "id":"F01895",
            "name":"Kelenvölgy-Péterhegy",
            "lat":47.443546,
            "lon":19.012072
        },
        {
            "id":"F01896",
            "name":"Kelenvölgy-Péterhegy",
            "lat":47.443753,
            "lon":19.012443
        },
        {
            "id":"F01897",
            "name":"Kelenvölgy-Péterhegy",
            "lat":47.444464,
            "lon":19.012602
        },
        {
            "id":"F01898",
            "name":"Kápolna út",
            "lat":47.446659,
            "lon":19.013754
        },
        {
            "id":"F01899",
            "name":"Kápolna út",
            "lat":47.44719,
            "lon":19.014204
        },
        {
            "id":"F01900",
            "name":"Olajfa utca",
            "lat":47.449628,
            "lon":19.015542
        },
        {
            "id":"F01901",
            "name":"Olajfa utca",
            "lat":47.449313,
            "lon":19.015184
        },
        {
            "id":"F01902",
            "name":"Budafoki elágazás",
            "lat":47.435438,
            "lon":19.035874
        },
        {
            "id":"F01903",
            "name":"Budafoki elágazás",
            "lat":47.435438,
            "lon":19.036166
        },
        {
            "id":"F01904",
            "name":"Budafoki elágazás",
            "lat":47.434916,
            "lon":19.036391
        },
        {
            "id":"F01905",
            "name":"Budafoki elágazás",
            "lat":47.435483,
            "lon":19.036378
        },
        {
            "id":"F01906",
            "name":"Vasút utca",
            "lat":47.4463,
            "lon":18.975818
        },
        {
            "id":"F01907",
            "name":"Vasút utca",
            "lat":47.445931,
            "lon":18.976362
        },
        {
            "id":"F01908",
            "name":"Repülőgépes Szolgálat",
            "lat":47.447353,
            "lon":18.978031
        },
        {
            "id":"F01909",
            "name":"Repülőgépes Szolgálat",
            "lat":47.447694,
            "lon":18.976943
        },
        {
            "id":"F01910",
            "name":"Repülőgépes Szolgálat",
            "lat":47.448485,
            "lon":18.975165
        },
        {
            "id":"F01911",
            "name":"Repülőgépes Szolgálat",
            "lat":47.448287,
            "lon":18.975311
        },
        {
            "id":"F01912",
            "name":"Budaörsi repülőtér",
            "lat":47.447772,
            "lon":18.986159
        },
        {
            "id":"F01913",
            "name":"Budaörsi repülőtér",
            "lat":47.44779,
            "lon":18.986013
        },
        {
            "id":"F01914",
            "name":"Bolygó utca",
            "lat":47.450923,
            "lon":19.01647
        },
        {
            "id":"F01915",
            "name":"Alabástrom utca",
            "lat":47.451643,
            "lon":19.017994
        },
        {
            "id":"F01916",
            "name":"Őrmezei út",
            "lat":47.454972,
            "lon":19.018841
        },
        {
            "id":"F01917",
            "name":"Őrmezei út",
            "lat":47.454972,
            "lon":19.018655
        },
        {
            "id":"F01918",
            "name":"Igmándi utca",
            "lat":47.4575,
            "lon":19.020126
        },
        {
            "id":"F01919",
            "name":"Péterhegyi út / Neszmélyi út",
            "lat":47.458309,
            "lon":19.019317
        },
        {
            "id":"F01920",
            "name":"Menyecske utca",
            "lat":47.459766,
            "lon":19.017273
        },
        {
            "id":"F01921",
            "name":"Menyecske utca",
            "lat":47.460251,
            "lon":19.017379
        },
        {
            "id":"F01922",
            "name":"Kérő utca",
            "lat":47.461924,
            "lon":19.015866
        },
        {
            "id":"F01923",
            "name":"Kérő utca",
            "lat":47.46205,
            "lon":19.016317
        },
        {
            "id":"F01924",
            "name":"Neszmélyi út",
            "lat":47.460152,
            "lon":19.015085
        },
        {
            "id":"F01925",
            "name":"Sasadi út",
            "lat":47.466997,
            "lon":19.015969
        },
        {
            "id":"F01926",
            "name":"Sasadi út",
            "lat":47.46787,
            "lon":19.017308
        },
        {
            "id":"F01927",
            "name":"Sasadi út",
            "lat":47.467141,
            "lon":19.017017
        },
        {
            "id":"F01928",
            "name":"Nagyszeben út",
            "lat":47.464837,
            "lon":19.011487
        },
        {
            "id":"F01929",
            "name":"Jégvirág utca",
            "lat":47.462264,
            "lon":19.008876
        },
        {
            "id":"F01930",
            "name":"Gazdagréti út",
            "lat":47.462145,
            "lon":19.004897
        },
        {
            "id":"F01931",
            "name":"Gazdagréti út",
            "lat":47.462775,
            "lon":19.005944
        },
        {
            "id":"F01932",
            "name":"Poprádi út",
            "lat":47.461387,
            "lon":18.999168
        },
        {
            "id":"F01933",
            "name":"Poprádi út",
            "lat":47.461235,
            "lon":18.99946
        },
        {
            "id":"F01934",
            "name":"Keserűvíz-forrás",
            "lat":47.458535,
            "lon":18.997327
        },
        {
            "id":"F01935",
            "name":"Keserűvíz-forrás",
            "lat":47.458292,
            "lon":18.996889
        },
        {
            "id":"F01936",
            "name":"Vitorlázó út",
            "lat":47.45246,
            "lon":18.990755
        },
        {
            "id":"F01937",
            "name":"Vitorlázó út",
            "lat":47.452784,
            "lon":18.990901
        },
        {
            "id":"F01938",
            "name":"Torma utca",
            "lat":47.450429,
            "lon":19.019692
        },
        {
            "id":"F01939",
            "name":"Torma utca",
            "lat":47.450349,
            "lon":19.019613
        },
        {
            "id":"F01940",
            "name":"Kecskeméti József utca",
            "lat":47.449188,
            "lon":19.020727
        },
        {
            "id":"F01941",
            "name":"Duránci utca",
            "lat":47.451069,
            "lon":19.022636
        },
        {
            "id":"F01942",
            "name":"Duránci utca",
            "lat":47.449998,
            "lon":19.022902
        },
        {
            "id":"F01943",
            "name":"Narancs utca",
            "lat":47.44775,
            "lon":19.025369
        },
        {
            "id":"F01944",
            "name":"Narancs utca",
            "lat":47.448101,
            "lon":19.025183
        },
        {
            "id":"F01945",
            "name":"Gépész utca",
            "lat":47.453326,
            "lon":19.021507
        },
        {
            "id":"F01946",
            "name":"Gépész utca",
            "lat":47.452958,
            "lon":19.023232
        },
        {
            "id":"F01947",
            "name":"Hajtány sor",
            "lat":47.455279,
            "lon":19.024079
        },
        {
            "id":"F01948",
            "name":"Hajtány sor",
            "lat":47.456358,
            "lon":19.023707
        },
        {
            "id":"F01951",
            "name":"Than Károly utca",
            "lat":47.46091,
            "lon":19.02527
        },
        {
            "id":"F01952",
            "name":"Borszéki utca",
            "lat":47.458526,
            "lon":19.023733
        },
        {
            "id":"F01955",
            "name":"Bikás park M",
            "lat":47.463583,
            "lon":19.033002
        },
        {
            "id":"F01956",
            "name":"Bikás park M",
            "lat":47.463807,
            "lon":19.03279
        },
        {
            "id":"F01958",
            "name":"Bikás park M",
            "lat":47.46432,
            "lon":19.033864
        },
        {
            "id":"F01959",
            "name":"Bikás park M",
            "lat":47.464266,
            "lon":19.033572
        },
        {
            "id":"F01960",
            "name":"Bornemissza tér",
            "lat":47.458429,
            "lon":19.033614
        },
        {
            "id":"F01961",
            "name":"Bornemissza tér",
            "lat":47.458474,
            "lon":19.033985
        },
        {
            "id":"F01962",
            "name":"Bornemissza tér",
            "lat":47.45833,
            "lon":19.033322
        },
        {
            "id":"F01963",
            "name":"Bornemissza tér",
            "lat":47.458132,
            "lon":19.033773
        },
        {
            "id":"F01964",
            "name":"Csurgói út",
            "lat":47.455208,
            "lon":19.03331
        },
        {
            "id":"F01965",
            "name":"Csurgói út",
            "lat":47.454093,
            "lon":19.033416
        },
        {
            "id":"F01966",
            "name":"Nyírbátor utca",
            "lat":47.450162,
            "lon":19.033192
        },
        {
            "id":"F01967",
            "name":"Nyírbátor utca",
            "lat":47.449596,
            "lon":19.033338
        },
        {
            "id":"F01968",
            "name":"Fonyód utca / Sáfrány utca",
            "lat":47.444415,
            "lon":19.033697
        },
        {
            "id":"F01969",
            "name":"Fonyód utca / Sáfrány utca",
            "lat":47.444055,
            "lon":19.033883
        },
        {
            "id":"F01970",
            "name":"Albertfalva vasútállomás",
            "lat":47.44159,
            "lon":19.034242
        },
        {
            "id":"F01972",
            "name":"Vegyész utca",
            "lat":47.44258,
            "lon":19.045286
        },
        {
            "id":"F01973",
            "name":"Vegyész utca",
            "lat":47.443066,
            "lon":19.04567
        },
        {
            "id":"F01974",
            "name":"Építész utca",
            "lat":47.44804,
            "lon":19.04636
        },
        {
            "id":"F01975",
            "name":"Építész utca",
            "lat":47.447132,
            "lon":19.045922
        },
        {
            "id":"F01976",
            "name":"Kondorosi út",
            "lat":47.449471,
            "lon":19.049065
        },
        {
            "id":"F01977",
            "name":"Kondorosi út",
            "lat":47.44921,
            "lon":19.049158
        },
        {
            "id":"F01980",
            "name":"Galvani utca",
            "lat":47.455407,
            "lon":19.051598
        },
        {
            "id":"F01981",
            "name":"Galvani utca",
            "lat":47.455416,
            "lon":19.051956
        },
        {
            "id":"F01982",
            "name":"Hengermalom út",
            "lat":47.461317,
            "lon":19.051665
        },
        {
            "id":"F01983",
            "name":"Hengermalom út",
            "lat":47.461047,
            "lon":19.051784
        },
        {
            "id":"F01984",
            "name":"Budafoki út / Dombóvári út",
            "lat":47.46872,
            "lon":19.052992
        },
        {
            "id":"F01985",
            "name":"Budafoki út / Dombóvári út",
            "lat":47.468819,
            "lon":19.053283
        },
        {
            "id":"F01986",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.474371,
            "lon":19.052707
        },
        {
            "id":"F01987",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.474063,
            "lon":19.052753
        },
        {
            "id":"F01988",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.473676,
            "lon":19.053125
        },
        {
            "id":"F01989",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.473703,
            "lon":19.052793
        },
        {
            "id":"F01990",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.473901,
            "lon":19.052912
        },
        {
            "id":"F01991",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.472866,
            "lon":19.052567
        },
        {
            "id":"F01992",
            "name":"Budafoki út / Szerémi sor",
            "lat":47.474125,
            "lon":19.053761
        },
        {
            "id":"F01995",
            "name":"Újbuda-központ M",
            "lat":47.473829,
            "lon":19.047367
        },
        {
            "id":"F01997",
            "name":"Újbuda-központ M",
            "lat":47.474467,
            "lon":19.046478
        },
        {
            "id":"F01998",
            "name":"Újbuda-központ M",
            "lat":47.474045,
            "lon":19.046863
        },
        {
            "id":"F01999",
            "name":"Újbuda-központ M",
            "lat":47.4748,
            "lon":19.046664
        },
        {
            "id":"F02000",
            "name":"Újbuda-központ M",
            "lat":47.474027,
            "lon":19.048534
        },
        {
            "id":"F02002",
            "name":"Hauszmann Alajos utca",
            "lat":47.467883,
            "lon":19.043971
        },
        {
            "id":"F02003",
            "name":"Hauszmann Alajos utca",
            "lat":47.467101,
            "lon":19.043931
        },
        {
            "id":"F02004",
            "name":"Hauszmann Alajos utca",
            "lat":47.467334,
            "lon":19.043958
        },
        {
            "id":"F02005",
            "name":"Hauszmann Alajos utca",
            "lat":47.467622,
            "lon":19.044263
        },
        {
            "id":"F02006",
            "name":"Etele út / Fehérvári út",
            "lat":47.462747,
            "lon":19.040748
        },
        {
            "id":"F02007",
            "name":"Etele út / Fehérvári út",
            "lat":47.462513,
            "lon":19.040987
        },
        {
            "id":"F02008",
            "name":"Etele út / Fehérvári út",
            "lat":47.461775,
            "lon":19.041823
        },
        {
            "id":"F02009",
            "name":"Etele út / Fehérvári út",
            "lat":47.463397,
            "lon":19.042567
        },
        {
            "id":"F02010",
            "name":"Etele út / Fehérvári út",
            "lat":47.462615,
            "lon":19.04228
        },
        {
            "id":"F02011",
            "name":"Etele út / Fehérvári út",
            "lat":47.462027,
            "lon":19.042247
        },
        {
            "id":"F02012",
            "name":"Andor utca",
            "lat":47.456423,
            "lon":19.040232
        },
        {
            "id":"F02013",
            "name":"Andor utca",
            "lat":47.456109,
            "lon":19.039901
        },
        {
            "id":"F02014",
            "name":"Andor utca",
            "lat":47.455839,
            "lon":19.039874
        },
        {
            "id":"F02015",
            "name":"Andor utca",
            "lat":47.455524,
            "lon":19.039529
        },
        {
            "id":"F02016",
            "name":"Albertfalva kitérő",
            "lat":47.453365,
            "lon":19.038906
        },
        {
            "id":"F02017",
            "name":"Albertfalva kitérő",
            "lat":47.45305,
            "lon":19.03888
        },
        {
            "id":"F02019",
            "name":"Albertfalva utca",
            "lat":47.448058,
            "lon":19.037555
        },
        {
            "id":"F02020",
            "name":"Albertfalva utca",
            "lat":47.447788,
            "lon":19.037436
        },
        {
            "id":"F02021",
            "name":"Albertfalva utca",
            "lat":47.447545,
            "lon":19.037489
        },
        {
            "id":"F02022",
            "name":"Albertfalva utca",
            "lat":47.447374,
            "lon":19.037608
        },
        {
            "id":"F02024",
            "name":"Fonyód utca",
            "lat":47.44392,
            "lon":19.03688
        },
        {
            "id":"F02025",
            "name":"Fonyód utca",
            "lat":47.44365,
            "lon":19.036747
        },
        {
            "id":"F02026",
            "name":"Fonyód utca",
            "lat":47.44374,
            "lon":19.036999
        },
        {
            "id":"F02027",
            "name":"Fonyód utca",
            "lat":47.443407,
            "lon":19.0368
        },
        {
            "id":"F02028",
            "name":"Budafok kocsiszín",
            "lat":47.441456,
            "lon":19.036628
        },
        {
            "id":"F02029",
            "name":"Budafok kocsiszín",
            "lat":47.441491,
            "lon":19.036482
        },
        {
            "id":"F02030",
            "name":"Budafok kocsiszín",
            "lat":47.441294,
            "lon":19.036456
        },
        {
            "id":"F02031",
            "name":"Budafok kocsiszín",
            "lat":47.440286,
            "lon":19.036204
        },
        {
            "id":"F02032",
            "name":"Tétényi út 30.",
            "lat":47.466407,
            "lon":19.034182
        },
        {
            "id":"F02033",
            "name":"Tétényi út 30.",
            "lat":47.466362,
            "lon":19.033864
        },
        {
            "id":"F02034",
            "name":"Szent Imre Kórház",
            "lat":47.469429,
            "lon":19.033704
        },
        {
            "id":"F02035",
            "name":"Szent Imre Kórház",
            "lat":47.468071,
            "lon":19.033823
        },
        {
            "id":"F02037",
            "name":"Szent Gellért-templom",
            "lat":47.469185,
            "lon":19.024922
        },
        {
            "id":"F02038",
            "name":"Szent Gellért-templom",
            "lat":47.468573,
            "lon":19.023742
        },
        {
            "id":"F02039",
            "name":"Szent Gellért-templom",
            "lat":47.468663,
            "lon":19.0241
        },
        {
            "id":"F02040",
            "name":"Csóka utca",
            "lat":47.470904,
            "lon":19.029219
        },
        {
            "id":"F02041",
            "name":"Csóka utca",
            "lat":47.470742,
            "lon":19.028569
        },
        {
            "id":"F02042",
            "name":"Csóka utca",
            "lat":47.470643,
            "lon":19.02845
        },
        {
            "id":"F02043",
            "name":"Csóka utca",
            "lat":47.470805,
            "lon":19.029113
        },
        {
            "id":"F02044",
            "name":"Karolina út",
            "lat":47.47157,
            "lon":19.033464
        },
        {
            "id":"F02045",
            "name":"Karolina út",
            "lat":47.47273,
            "lon":19.033026
        },
        {
            "id":"F02046",
            "name":"Karolina út",
            "lat":47.472838,
            "lon":19.033676
        },
        {
            "id":"F02047",
            "name":"Karolina út",
            "lat":47.472694,
            "lon":19.033212
        },
        {
            "id":"F02048",
            "name":"Karolina út",
            "lat":47.473432,
            "lon":19.035401
        },
        {
            "id":"F02049",
            "name":"Ajnácskő utca",
            "lat":47.473656,
            "lon":19.025517
        },
        {
            "id":"F02050",
            "name":"Ajnácskő utca",
            "lat":47.473665,
            "lon":19.025132
        },
        {
            "id":"F02051",
            "name":"Ajnácskő utca",
            "lat":47.474348,
            "lon":19.025092
        },
        {
            "id":"F02052",
            "name":"Ajnácskő utca",
            "lat":47.474519,
            "lon":19.024747
        },
        {
            "id":"F02053",
            "name":"Dayka Gábor utca",
            "lat":47.470623,
            "lon":19.019695
        },
        {
            "id":"F02054",
            "name":"Dayka Gábor utca",
            "lat":47.470479,
            "lon":19.020026
        },
        {
            "id":"F02055",
            "name":"Nagyszeben tér",
            "lat":47.466616,
            "lon":19.005357
        },
        {
            "id":"F02056",
            "name":"Nagyszeben tér",
            "lat":47.466292,
            "lon":19.00553
        },
        {
            "id":"F02057",
            "name":"Frankhegy utca",
            "lat":47.470752,
            "lon":19.001321
        },
        {
            "id":"F02058",
            "name":"Frankhegy utca",
            "lat":47.47104,
            "lon":19.001135
        },
        {
            "id":"F02059",
            "name":"Kaptárkő utca",
            "lat":47.471902,
            "lon":18.999344
        },
        {
            "id":"F02060",
            "name":"Kaptárkő utca",
            "lat":47.472559,
            "lon":18.998375
        },
        {
            "id":"F02061",
            "name":"Regős utca",
            "lat":47.464942,
            "lon":19.003926
        },
        {
            "id":"F02062",
            "name":"Regős utca",
            "lat":47.465248,
            "lon":19.003555
        },
        {
            "id":"F02063",
            "name":"Törökugrató utca",
            "lat":47.466614,
            "lon":19.000847
        },
        {
            "id":"F02064",
            "name":"Törökugrató utca",
            "lat":47.46683,
            "lon":19.000662
        },
        {
            "id":"F02065",
            "name":"Csíkihegyek utca",
            "lat":47.468879,
            "lon":18.996654
        },
        {
            "id":"F02066",
            "name":"Csíkihegyek utca",
            "lat":47.469176,
            "lon":18.996335
        },
        {
            "id":"F02067",
            "name":"Tűzkő utca",
            "lat":47.470155,
            "lon":18.994848
        },
        {
            "id":"F02068",
            "name":"Tűzkő utca",
            "lat":47.470506,
            "lon":18.994675
        },
        {
            "id":"F02069",
            "name":"Kamaraerdei út 11.",
            "lat":47.443081,
            "lon":18.978885
        },
        {
            "id":"F02070",
            "name":"Kamaraerdei út 11.",
            "lat":47.443117,
            "lon":18.978726
        },
        {
            "id":"F02071",
            "name":"Telekes utca",
            "lat":47.473673,
            "lon":18.996118
        },
        {
            "id":"F02072",
            "name":"Telekes utca",
            "lat":47.473943,
            "lon":18.995853
        },
        {
            "id":"F02073",
            "name":"Baradla utca",
            "lat":47.474641,
            "lon":18.989802
        },
        {
            "id":"F02074",
            "name":"Baradla utca",
            "lat":47.474992,
            "lon":18.988993
        },
        {
            "id":"F02075",
            "name":"Irhás árok",
            "lat":47.476556,
            "lon":18.987332
        },
        {
            "id":"F02076",
            "name":"Irhás árok",
            "lat":47.476763,
            "lon":18.987452
        },
        {
            "id":"F02077",
            "name":"Oltvány köz",
            "lat":47.477871,
            "lon":18.990183
        },
        {
            "id":"F02078",
            "name":"Oltvány köz",
            "lat":47.478204,
            "lon":18.990926
        },
        {
            "id":"F02079",
            "name":"Eper utca",
            "lat":47.480597,
            "lon":18.992556
        },
        {
            "id":"F02080",
            "name":"Eper utca",
            "lat":47.480948,
            "lon":18.992675
        },
        {
            "id":"F02081",
            "name":"Márton Áron tér",
            "lat":47.481904,
            "lon":18.99822
        },
        {
            "id":"F02082",
            "name":"Márton Áron tér",
            "lat":47.481707,
            "lon":18.999043
        },
        {
            "id":"F02083",
            "name":"Márton Áron tér",
            "lat":47.481518,
            "lon":18.99887
        },
        {
            "id":"F02084",
            "name":"Márton Áron tér",
            "lat":47.48194,
            "lon":18.998857
        },
        {
            "id":"F02085",
            "name":"Márton Áron tér",
            "lat":47.482022,
            "lon":18.999215
        },
        {
            "id":"F02086",
            "name":"Zajzon utca",
            "lat":47.479872,
            "lon":19.00069
        },
        {
            "id":"F02087",
            "name":"Zajzon utca",
            "lat":47.479405,
            "lon":19.001062
        },
        {
            "id":"F02088",
            "name":"Tömös utca",
            "lat":47.477948,
            "lon":19.002323
        },
        {
            "id":"F02089",
            "name":"Tömös utca",
            "lat":47.477634,
            "lon":19.002748
        },
        {
            "id":"F02090",
            "name":"Nagyszalonta köz",
            "lat":47.47526,
            "lon":19.004329
        },
        {
            "id":"F02091",
            "name":"Nagyszalonta köz",
            "lat":47.475538,
            "lon":19.003864
        },
        {
            "id":"F02092",
            "name":"Bereck utca",
            "lat":47.473102,
            "lon":19.008284
        },
        {
            "id":"F02093",
            "name":"Bereck utca",
            "lat":47.473813,
            "lon":19.007514
        },
        {
            "id":"F02094",
            "name":"Sümegvár utca",
            "lat":47.469901,
            "lon":19.012691
        },
        {
            "id":"F02095",
            "name":"Sümegvár utca",
            "lat":47.469182,
            "lon":19.013408
        },
        {
            "id":"F02096",
            "name":"Süveg utca",
            "lat":47.481385,
            "lon":19.004762
        },
        {
            "id":"F02097",
            "name":"Süveg utca",
            "lat":47.481466,
            "lon":19.004908
        },
        {
            "id":"F02098",
            "name":"Süveg utca",
            "lat":47.481367,
            "lon":19.004616
        },
        {
            "id":"F02099",
            "name":"Süveg utca",
            "lat":47.481241,
            "lon":19.004709
        },
        {
            "id":"F02100",
            "name":"Farkasréti temető",
            "lat":47.483958,
            "lon":19.00541
        },
        {
            "id":"F02101",
            "name":"Farkasréti temető",
            "lat":47.484336,
            "lon":19.005662
        },
        {
            "id":"F02102",
            "name":"Farkasréti temető",
            "lat":47.483787,
            "lon":19.006206
        },
        {
            "id":"F02103",
            "name":"Farkasréti temető",
            "lat":47.483688,
            "lon":19.005835
        },
        {
            "id":"F02104",
            "name":"Hegytető utca",
            "lat":47.484445,
            "lon":19.009284
        },
        {
            "id":"F02105",
            "name":"Hegytető utca",
            "lat":47.484679,
            "lon":19.009868
        },
        {
            "id":"F02106",
            "name":"Sion lépcső",
            "lat":47.485212,
            "lon":19.015958
        },
        {
            "id":"F02107",
            "name":"Sion lépcső",
            "lat":47.48541,
            "lon":19.016913
        },
        {
            "id":"F02108",
            "name":"Breznó lépcső",
            "lat":47.484232,
            "lon":19.020643
        },
        {
            "id":"F02109",
            "name":"Breznó lépcső",
            "lat":47.483855,
            "lon":19.021041
        },
        {
            "id":"F02110",
            "name":"Zólyomi út",
            "lat":47.483253,
            "lon":19.022872
        },
        {
            "id":"F02111",
            "name":"Zólyomi út",
            "lat":47.483504,
            "lon":19.022859
        },
        {
            "id":"F02112",
            "name":"BAH-csomópont",
            "lat":47.486824,
            "lon":19.023216
        },
        {
            "id":"F02113",
            "name":"Fehérló utca",
            "lat":47.478162,
            "lon":19.025741
        },
        {
            "id":"F02114",
            "name":"Fehérló utca",
            "lat":47.478288,
            "lon":19.025435
        },
        {
            "id":"F02115",
            "name":"Alsóhegy utca",
            "lat":47.482948,
            "lon":19.030091
        },
        {
            "id":"F02116",
            "name":"Alsóhegy utca",
            "lat":47.482768,
            "lon":19.030383
        },
        {
            "id":"F02117",
            "name":"Alsóhegy utca",
            "lat":47.48284,
            "lon":19.030635
        },
        {
            "id":"F02118",
            "name":"Alsóhegy utca",
            "lat":47.482696,
            "lon":19.030277
        },
        {
            "id":"F02119",
            "name":"Alsóhegy utca",
            "lat":47.482184,
            "lon":19.030171
        },
        {
            "id":"F02120",
            "name":"Alsóhegy utca",
            "lat":47.482031,
            "lon":19.029932
        },
        {
            "id":"F02121",
            "name":"Ortopédia, Vérellátó",
            "lat":47.478577,
            "lon":19.03179
        },
        {
            "id":"F02122",
            "name":"Ortopédia, Vérellátó",
            "lat":47.478487,
            "lon":19.031499
        },
        {
            "id":"F02123",
            "name":"Vincellér utca",
            "lat":47.476647,
            "lon":19.035711
        },
        {
            "id":"F02124",
            "name":"Vincellér utca",
            "lat":47.47632,
            "lon":19.035931
        },
        {
            "id":"F02125",
            "name":"Szüret utca",
            "lat":47.480358,
            "lon":19.035757
        },
        {
            "id":"F02126",
            "name":"Szüret utca",
            "lat":47.480286,
            "lon":19.036195
        },
        {
            "id":"F02127",
            "name":"Szüret utca",
            "lat":47.480214,
            "lon":19.0365
        },
        {
            "id":"F02128",
            "name":"Szüret utca",
            "lat":47.479972,
            "lon":19.037389
        },
        {
            "id":"F02129",
            "name":"Szüret utca",
            "lat":47.480502,
            "lon":19.036553
        },
        {
            "id":"F02130",
            "name":"Iglói utca",
            "lat":47.483489,
            "lon":19.039843
        },
        {
            "id":"F02131",
            "name":"Iglói utca",
            "lat":47.483399,
            "lon":19.040374
        },
        {
            "id":"F02132",
            "name":"Balogh Tihamér utca",
            "lat":47.481789,
            "lon":19.042935
        },
        {
            "id":"F02133",
            "name":"Balogh Tihamér utca",
            "lat":47.48178,
            "lon":19.043174
        },
        {
            "id":"F02134",
            "name":"Kelenhegyi lépcső",
            "lat":47.481213,
            "lon":19.045177
        },
        {
            "id":"F02135",
            "name":"Kelenhegyi lépcső",
            "lat":47.481951,
            "lon":19.045376
        },
        {
            "id":"F02136",
            "name":"Rezeda utca",
            "lat":47.483372,
            "lon":19.043598
        },
        {
            "id":"F02137",
            "name":"Rezeda utca",
            "lat":47.483219,
            "lon":19.043598
        },
        {
            "id":"F02138",
            "name":"Búsuló Juhász (Citadella)",
            "lat":47.485225,
            "lon":19.040533
        },
        {
            "id":"F02142",
            "name":"Szent Gellért tér M",
            "lat":47.482889,
            "lon":19.053782
        },
        {
            "id":"F02143",
            "name":"Szent Gellért tér M",
            "lat":47.482895,
            "lon":19.053922
        },
        {
            "id":"F02144",
            "name":"Szent Gellért tér M",
            "lat":47.482449,
            "lon":19.052959
        },
        {
            "id":"F02145",
            "name":"Szent Gellért tér M",
            "lat":47.482347,
            "lon":19.052555
        },
        {
            "id":"F02146",
            "name":"Tas vezér utca",
            "lat":47.478875,
            "lon":19.040202
        },
        {
            "id":"F02147",
            "name":"Tas vezér utca",
            "lat":47.478848,
            "lon":19.040507
        },
        {
            "id":"F02148",
            "name":"Gárdonyi tér",
            "lat":47.479999,
            "lon":19.051453
        },
        {
            "id":"F02149",
            "name":"Gárdonyi tér",
            "lat":47.480404,
            "lon":19.051812
        },
        {
            "id":"F02151",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.476752,
            "lon":19.050485
        },
        {
            "id":"F02152",
            "name":"Budafoki út / Karinthy Frigyes út",
            "lat":47.476872,
            "lon":19.053383
        },
        {
            "id":"F02153",
            "name":"Budafoki út / Karinthy Frigyes út",
            "lat":47.475843,
            "lon":19.05408
        },
        {
            "id":"F02154",
            "name":"Budafoki út / Karinthy Frigyes út",
            "lat":47.476068,
            "lon":19.05343
        },
        {
            "id":"F02155",
            "name":"Budafoki út / Karinthy Frigyes út",
            "lat":47.475412,
            "lon":19.053165
        },
        {
            "id":"F02156",
            "name":"Budafoki út / Karinthy Frigyes út",
            "lat":47.47614,
            "lon":19.05266
        },
        {
            "id":"F02157",
            "name":"Budafoki út 215.",
            "lat":47.45189,
            "lon":19.050709
        },
        {
            "id":"F02158",
            "name":"Budafoki út 215.",
            "lat":47.451944,
            "lon":19.051067
        },
        {
            "id":"F02159",
            "name":"Szép utca",
            "lat":47.431209,
            "lon":18.979988
        },
        {
            "id":"F02160",
            "name":"Szép utca",
            "lat":47.431083,
            "lon":18.98016
        },
        {
            "id":"F02161",
            "name":"Dűlő út",
            "lat":47.427313,
            "lon":18.97929
        },
        {
            "id":"F02162",
            "name":"Dűlő út",
            "lat":47.427719,
            "lon":18.979979
        },
        {
            "id":"F02163",
            "name":"BAH-csomópont",
            "lat":47.486967,
            "lon":19.023123
        },
        {
            "id":"F02164",
            "name":"BAH-csomópont",
            "lat":47.487318,
            "lon":19.02356
        },
        {
            "id":"F02165",
            "name":"BAH-csomópont",
            "lat":47.488317,
            "lon":19.024356
        },
        {
            "id":"F02166",
            "name":"BAH-csomópont",
            "lat":47.487085,
            "lon":19.024688
        },
        {
            "id":"F02167",
            "name":"BAH-csomópont",
            "lat":47.486797,
            "lon":19.024635
        },
        {
            "id":"F02168",
            "name":"BAH-csomópont",
            "lat":47.487786,
            "lon":19.025564
        },
        {
            "id":"F02169",
            "name":"BAH-csomópont",
            "lat":47.486725,
            "lon":19.024901
        },
        {
            "id":"F02170",
            "name":"Budaörsi út / Villányi út",
            "lat":47.484162,
            "lon":19.026985
        },
        {
            "id":"F02171",
            "name":"Budaörsi út / Villányi út",
            "lat":47.484108,
            "lon":19.026826
        },
        {
            "id":"F02172",
            "name":"Budaörsi út / Villányi út",
            "lat":47.484126,
            "lon":19.026627
        },
        {
            "id":"F02173",
            "name":"Budaörsi út / Villányi út",
            "lat":47.483838,
            "lon":19.027065
        },
        {
            "id":"F02174",
            "name":"Muskotály köz",
            "lat":47.483127,
            "lon":19.026322
        },
        {
            "id":"F02176",
            "name":"Kosztolányi Dezső tér",
            "lat":47.475834,
            "lon":19.042179
        },
        {
            "id":"F02180",
            "name":"Kosztolányi Dezső tér",
            "lat":47.474899,
            "lon":19.042073
        },
        {
            "id":"F02181",
            "name":"Kosztolányi Dezső tér",
            "lat":47.475016,
            "lon":19.039433
        },
        {
            "id":"F02182",
            "name":"Kosztolányi Dezső tér",
            "lat":47.475846,
            "lon":19.039042
        },
        {
            "id":"F02183",
            "name":"Kosztolányi Dezső tér",
            "lat":47.474926,
            "lon":19.038903
        },
        {
            "id":"F02184",
            "name":"Kosztolányi Dezső tér",
            "lat":47.475214,
            "lon":19.040176
        },
        {
            "id":"F02185",
            "name":"Kosztolányi Dezső tér",
            "lat":47.474404,
            "lon":19.040243
        },
        {
            "id":"F02192",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477804,
            "lon":19.047977
        },
        {
            "id":"F02193",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477508,
            "lon":19.046239
        },
        {
            "id":"F02194",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477158,
            "lon":19.047328
        },
        {
            "id":"F02196",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.478131,
            "lon":19.045051
        },
        {
            "id":"F02197",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.478074,
            "lon":19.044899
        },
        {
            "id":"F02198",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.47811,
            "lon":19.045761
        },
        {
            "id":"F02199",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.47775,
            "lon":19.046266
        },
        {
            "id":"F02200",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477948,
            "lon":19.04535
        },
        {
            "id":"F02201",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477813,
            "lon":19.045854
        },
        {
            "id":"F02202",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477427,
            "lon":19.046292
        },
        {
            "id":"F02203",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477544,
            "lon":19.046849
        },
        {
            "id":"F02210",
            "name":"Kelenföld vasútállomás M",
            "lat":47.465191,
            "lon":19.022549
        },
        {
            "id":"F02211",
            "name":"Herend utca",
            "lat":47.447275,
            "lon":19.033391
        },
        {
            "id":"F02212",
            "name":"Herend utca",
            "lat":47.446672,
            "lon":19.033591
        },
        {
            "id":"F02213",
            "name":"Puskás Tivadar utca",
            "lat":47.46038,
            "lon":19.033388
        },
        {
            "id":"F02214",
            "name":"Puskás Tivadar utca",
            "lat":47.460425,
            "lon":19.033653
        },
        {
            "id":"F02215",
            "name":"Bártfai utca",
            "lat":47.46422,
            "lon":19.028068
        },
        {
            "id":"F02216",
            "name":"Bártfai utca",
            "lat":47.464311,
            "lon":19.02897
        },
        {
            "id":"F02217",
            "name":"Rupphegyi út",
            "lat":47.463188,
            "lon":18.985027
        },
        {
            "id":"F02218",
            "name":"Rupphegyi út",
            "lat":47.463107,
            "lon":18.984297
        },
        {
            "id":"F02219",
            "name":"Albertfalva vasútállomás",
            "lat":47.441896,
            "lon":19.034546
        },
        {
            "id":"F02221",
            "name":"Kelenföldi autóbuszgarázs",
            "lat":47.473306,
            "lon":19.030718
        },
        {
            "id":"F02222",
            "name":"Petőfi híd, budai hídfő",
            "lat":47.47659,
            "lon":19.059228
        },
        {
            "id":"F02224",
            "name":"Petőfi híd, budai hídfő",
            "lat":47.476662,
            "lon":19.058883
        },
        {
            "id":"F02225",
            "name":"Petőfi híd, budai hídfő",
            "lat":47.476958,
            "lon":19.059586
        },
        {
            "id":"F02226",
            "name":"Gazdagréti tér",
            "lat":47.473158,
            "lon":18.992271
        },
        {
            "id":"F02227",
            "name":"Gazdagréti tér",
            "lat":47.473329,
            "lon":18.992523
        },
        {
            "id":"F02228",
            "name":"Gazdagréti tér",
            "lat":47.473239,
            "lon":18.992404
        },
        {
            "id":"F02231",
            "name":"Kosztolányi Dezső tér",
            "lat":47.474665,
            "lon":19.04003
        },
        {
            "id":"F02232",
            "name":"Örsöddűlő",
            "lat":47.455304,
            "lon":18.99359
        },
        {
            "id":"F02233",
            "name":"Örsöddűlő",
            "lat":47.455142,
            "lon":18.993232
        },
        {
            "id":"F02234",
            "name":"Kelenföldi Erőmű",
            "lat":47.464528,
            "lon":19.052819
        },
        {
            "id":"F02235",
            "name":"Kelenföldi Erőmű",
            "lat":47.464474,
            "lon":19.053111
        },
        {
            "id":"F02236",
            "name":"Hengermalom út",
            "lat":47.459233,
            "lon":19.052095
        },
        {
            "id":"F02237",
            "name":"Hengermalom út",
            "lat":47.459455,
            "lon":19.05246
        },
        {
            "id":"F02238",
            "name":"Csonka János tér",
            "lat":47.469952,
            "lon":19.044847
        },
        {
            "id":"F02239",
            "name":"Csonka János tér",
            "lat":47.470303,
            "lon":19.045085
        },
        {
            "id":"F02240",
            "name":"Kalotaszeg utca",
            "lat":47.459062,
            "lon":19.040994
        },
        {
            "id":"F02241",
            "name":"Kalotaszeg utca",
            "lat":47.458852,
            "lon":19.040961
        },
        {
            "id":"F02242",
            "name":"Regős köz",
            "lat":47.46827,
            "lon":19.003486
        },
        {
            "id":"F02243",
            "name":"Regős köz",
            "lat":47.468612,
            "lon":19.003366
        },
        {
            "id":"F02244",
            "name":"Torbágy utca",
            "lat":47.467809,
            "lon":18.998644
        },
        {
            "id":"F02245",
            "name":"Torbágy utca",
            "lat":47.467971,
            "lon":18.998565
        },
        {
            "id":"F02246",
            "name":"Előpatak utca",
            "lat":47.471538,
            "lon":19.010554
        },
        {
            "id":"F02247",
            "name":"Előpatak utca",
            "lat":47.471124,
            "lon":19.010886
        },
        {
            "id":"F02252",
            "name":"Pető Intézet (Villányi út)",
            "lat":47.481887,
            "lon":19.032572
        },
        {
            "id":"F02253",
            "name":"Pető Intézet (Villányi út)",
            "lat":47.481698,
            "lon":19.032891
        },
        {
            "id":"F02254",
            "name":"Ménesi út",
            "lat":47.481573,
            "lon":19.038132
        },
        {
            "id":"F02255",
            "name":"Ménesi út",
            "lat":47.481933,
            "lon":19.038371
        },
        {
            "id":"F02259",
            "name":"Hengermalom út / Szerémi út",
            "lat":47.461914,
            "lon":19.047135
        },
        {
            "id":"F02260",
            "name":"Hengermalom út / Szerémi út",
            "lat":47.461752,
            "lon":19.046392
        },
        {
            "id":"F02261",
            "name":"Hollókő utca",
            "lat":47.475365,
            "lon":19.029854
        },
        {
            "id":"F02262",
            "name":"Hollókő utca",
            "lat":47.475689,
            "lon":19.030425
        },
        {
            "id":"F02263",
            "name":"Albertfalva vasútállomás",
            "lat":47.441878,
            "lon":19.032067
        },
        {
            "id":"F02264",
            "name":"Állvány utca",
            "lat":47.445295,
            "lon":19.028433
        },
        {
            "id":"F02265",
            "name":"Állvány utca",
            "lat":47.445592,
            "lon":19.028274
        },
        {
            "id":"F02266",
            "name":"Madárhegy",
            "lat":47.462176,
            "lon":18.993092
        },
        {
            "id":"F02267",
            "name":"Madárhegy",
            "lat":47.461952,
            "lon":18.993981
        },
        {
            "id":"F02268",
            "name":"Csillebérc, KFKI",
            "lat":47.486638,
            "lon":18.954644
        },
        {
            "id":"F02269",
            "name":"Csillebérc, KFKI",
            "lat":47.486923,
            "lon":18.954385
        },
        {
            "id":"F02270",
            "name":"KFKI étterem",
            "lat":47.488995,
            "lon":18.958601
        },
        {
            "id":"F02271",
            "name":"KFKI étterem",
            "lat":47.489139,
            "lon":18.958999
        },
        {
            "id":"F02272",
            "name":"Magas út",
            "lat":47.490409,
            "lon":18.961147
        },
        {
            "id":"F02273",
            "name":"Magas út",
            "lat":47.490385,
            "lon":18.960901
        },
        {
            "id":"F02274",
            "name":"Mindszenty József bíboros tér",
            "lat":47.487279,
            "lon":18.989749
        },
        {
            "id":"F02275",
            "name":"Hó utca",
            "lat":47.486435,
            "lon":18.992151
        },
        {
            "id":"F02276",
            "name":"Hó utca",
            "lat":47.486516,
            "lon":18.992257
        },
        {
            "id":"F02277",
            "name":"Hajnalka utca",
            "lat":47.484997,
            "lon":18.99417
        },
        {
            "id":"F02278",
            "name":"Hajnalka utca",
            "lat":47.485275,
            "lon":18.993997
        },
        {
            "id":"F02279",
            "name":"Tamási Áron utca",
            "lat":47.493446,
            "lon":19.002549
        },
        {
            "id":"F02280",
            "name":"Tamási Áron utca",
            "lat":47.493743,
            "lon":19.002509
        },
        {
            "id":"F02281",
            "name":"Mártonhegyi út",
            "lat":47.490532,
            "lon":19.002326
        },
        {
            "id":"F02282",
            "name":"Mártonhegyi út",
            "lat":47.49019,
            "lon":19.002233
        },
        {
            "id":"F02283",
            "name":"Kempelen Farkas utca",
            "lat":47.488077,
            "lon":19.003907
        },
        {
            "id":"F02284",
            "name":"Kempelen Farkas utca",
            "lat":47.487906,
            "lon":19.004279
        },
        {
            "id":"F02285",
            "name":"Boldog Teréz anya tér",
            "lat":47.488411,
            "lon":19.006733
        },
        {
            "id":"F02286",
            "name":"Boldog Teréz anya tér",
            "lat":47.48914,
            "lon":19.007051
        },
        {
            "id":"F02287",
            "name":"Bürök utca",
            "lat":47.491254,
            "lon":19.009385
        },
        {
            "id":"F02288",
            "name":"Bürök utca",
            "lat":47.491443,
            "lon":19.009942
        },
        {
            "id":"F02289",
            "name":"Szendi árok",
            "lat":47.491462,
            "lon":19.011681
        },
        {
            "id":"F02290",
            "name":"Németvölgyi út",
            "lat":47.492523,
            "lon":19.012211
        },
        {
            "id":"F02291",
            "name":"Németvölgyi út",
            "lat":47.49354,
            "lon":19.011945
        },
        {
            "id":"F02292",
            "name":"Apor Vilmos tér",
            "lat":47.491031,
            "lon":19.014043
        },
        {
            "id":"F02294",
            "name":"Apor Vilmos tér",
            "lat":47.490941,
            "lon":19.014004
        },
        {
            "id":"F02295",
            "name":"Apor Vilmos tér",
            "lat":47.490869,
            "lon":19.014296
        },
        {
            "id":"F02296",
            "name":"Vas Gereben utca",
            "lat":47.48914,
            "lon":19.009559
        },
        {
            "id":"F02297",
            "name":"Vas Gereben utca",
            "lat":47.489392,
            "lon":19.009745
        },
        {
            "id":"F02298",
            "name":"Zólyomi lépcső",
            "lat":47.4904,
            "lon":19.011854
        },
        {
            "id":"F02299",
            "name":"Zólyomi lépcső",
            "lat":47.490284,
            "lon":19.012226
        },
        {
            "id":"F02300",
            "name":"Apor Vilmos tér",
            "lat":47.4905,
            "lon":19.01484
        },
        {
            "id":"F02301",
            "name":"Apor Vilmos tér",
            "lat":47.490419,
            "lon":19.015251
        },
        {
            "id":"F02302",
            "name":"Sirály utca",
            "lat":47.489656,
            "lon":19.018105
        },
        {
            "id":"F02303",
            "name":"Sirály utca",
            "lat":47.489422,
            "lon":19.018318
        },
        {
            "id":"F02305",
            "name":"Kiss János altábornagy utca",
            "lat":47.492039,
            "lon":19.016843
        },
        {
            "id":"F02306",
            "name":"Kiss János altábornagy utca",
            "lat":47.492282,
            "lon":19.016498
        },
        {
            "id":"F02307",
            "name":"Kiss János altábornagy utca",
            "lat":47.492561,
            "lon":19.016657
        },
        {
            "id":"F02308",
            "name":"Kiss János altábornagy utca",
            "lat":47.492902,
            "lon":19.016696
        },
        {
            "id":"F02309",
            "name":"Nagy Jenő utca",
            "lat":47.492148,
            "lon":19.019086
        },
        {
            "id":"F02310",
            "name":"Tartsay Vilmos utca",
            "lat":47.492347,
            "lon":19.023916
        },
        {
            "id":"F02311",
            "name":"Tartsay Vilmos utca",
            "lat":47.492428,
            "lon":19.024235
        },
        {
            "id":"F02313",
            "name":"Széchenyi-hegy, Gyermekvasút",
            "lat":47.495153,
            "lon":18.979507
        },
        {
            "id":"F02314",
            "name":"Művész út",
            "lat":47.49619,
            "lon":18.983819
        },
        {
            "id":"F02315",
            "name":"Művész út",
            "lat":47.496244,
            "lon":18.984244
        },
        {
            "id":"F02316",
            "name":"Svábhegy",
            "lat":47.497452,
            "lon":18.989419
        },
        {
            "id":"F02317",
            "name":"Svábhegy",
            "lat":47.497902,
            "lon":18.98975
        },
        {
            "id":"F02318",
            "name":"Városkút",
            "lat":47.500151,
            "lon":18.989389
        },
        {
            "id":"F02319",
            "name":"Városkút",
            "lat":47.500384,
            "lon":18.989163
        },
        {
            "id":"F02320",
            "name":"Adonis utca",
            "lat":47.503092,
            "lon":18.989771
        },
        {
            "id":"F02321",
            "name":"Adonis utca",
            "lat":47.503353,
            "lon":18.990116
        },
        {
            "id":"F02322",
            "name":"Erdei iskola",
            "lat":47.507196,
            "lon":18.994333
        },
        {
            "id":"F02323",
            "name":"Erdei iskola",
            "lat":47.507322,
            "lon":18.994718
        },
        {
            "id":"F02324",
            "name":"Esze Tamás iskola",
            "lat":47.507341,
            "lon":18.997957
        },
        {
            "id":"F02325",
            "name":"Esze Tamás iskola",
            "lat":47.507153,
            "lon":18.998276
        },
        {
            "id":"F02326",
            "name":"Orgonás",
            "lat":47.506723,
            "lon":19.002497
        },
        {
            "id":"F02327",
            "name":"Orgonás",
            "lat":47.50666,
            "lon":19.003174
        },
        {
            "id":"F02328",
            "name":"Szent János Kórház",
            "lat":47.508164,
            "lon":19.008271
        },
        {
            "id":"F02329",
            "name":"Szent János Kórház",
            "lat":47.508362,
            "lon":19.008563
        },
        {
            "id":"F02330",
            "name":"Városmajor",
            "lat":47.509407,
            "lon":19.012784
        },
        {
            "id":"F02332",
            "name":"Széll Kálmán tér M",
            "lat":47.506962,
            "lon":19.022837
        },
        {
            "id":"F02333",
            "name":"Széll Kálmán tér M (Csaba utca)",
            "lat":47.50672,
            "lon":19.022635
        },
        {
            "id":"F02334",
            "name":"Széll Kálmán tér M",
            "lat":47.506549,
            "lon":19.023246
        },
        {
            "id":"F02335",
            "name":"Maros utca",
            "lat":47.505766,
            "lon":19.021813
        },
        {
            "id":"F02337",
            "name":"Barabás Villa",
            "lat":47.504902,
            "lon":19.018826
        },
        {
            "id":"F02338",
            "name":"Barabás Villa",
            "lat":47.505118,
            "lon":19.01864
        },
        {
            "id":"F02339",
            "name":"Temes utca",
            "lat":47.506826,
            "lon":19.015122
        },
        {
            "id":"F02340",
            "name":"Temes utca",
            "lat":47.506709,
            "lon":19.015148
        },
        {
            "id":"F02341",
            "name":"Szent János Kórház",
            "lat":47.508749,
            "lon":19.009704
        },
        {
            "id":"F02342",
            "name":"Szent János Kórház",
            "lat":47.509136,
            "lon":19.009053
        },
        {
            "id":"F02343",
            "name":"Szent János Kórház",
            "lat":47.508389,
            "lon":19.008483
        },
        {
            "id":"F02344",
            "name":"Rőzse köz",
            "lat":47.508315,
            "lon":19.003492
        },
        {
            "id":"F02345",
            "name":"Rőzse köz",
            "lat":47.508153,
            "lon":19.004116
        },
        {
            "id":"F02346",
            "name":"Józsa Béla köz",
            "lat":47.509141,
            "lon":18.99984
        },
        {
            "id":"F02347",
            "name":"Józsa Béla köz",
            "lat":47.50933,
            "lon":18.999614
        },
        {
            "id":"F02348",
            "name":"Pető Intézet",
            "lat":47.511961,
            "lon":19.003999
        },
        {
            "id":"F02349",
            "name":"Pető Intézet",
            "lat":47.512084,
            "lon":19.003502
        },
        {
            "id":"F02350",
            "name":"Virányos út",
            "lat":47.512586,
            "lon":19.000156
        },
        {
            "id":"F02351",
            "name":"Virányos út",
            "lat":47.512623,
            "lon":19.001085
        },
        {
            "id":"F02352",
            "name":"Zalai út",
            "lat":47.516629,
            "lon":18.990048
        },
        {
            "id":"F02353",
            "name":"Zalai út",
            "lat":47.516503,
            "lon":18.990168
        },
        {
            "id":"F02355",
            "name":"Fészek utca",
            "lat":47.511829,
            "lon":18.997249
        },
        {
            "id":"F02356",
            "name":"Fészek utca",
            "lat":47.51174,
            "lon":18.997209
        },
        {
            "id":"F02357",
            "name":"Kútvölgyi lejtő, Traumatológia",
            "lat":47.511417,
            "lon":19.000608
        },
        {
            "id":"F02358",
            "name":"Kútvölgyi lejtő, Traumatológia",
            "lat":47.511318,
            "lon":19.000847
        },
        {
            "id":"F02359",
            "name":"Zirzen Janka utca",
            "lat":47.51136,
            "lon":18.992669
        },
        {
            "id":"F02360",
            "name":"György Aladár utca",
            "lat":47.511457,
            "lon":18.989841
        },
        {
            "id":"F02361",
            "name":"György Aladár utca",
            "lat":47.51152,
            "lon":18.989403
        },
        {
            "id":"F02362",
            "name":"Kiss Áron utca",
            "lat":47.512878,
            "lon":18.989733
        },
        {
            "id":"F02364",
            "name":"Orvosi rendelő",
            "lat":47.483333,
            "lon":18.996215
        },
        {
            "id":"F02365",
            "name":"Orvosi rendelő",
            "lat":47.483729,
            "lon":18.995869
        },
        {
            "id":"F02366",
            "name":"Hadik András utca",
            "lat":47.509849,
            "lon":18.994596
        },
        {
            "id":"F02367",
            "name":"Hadik András utca",
            "lat":47.509966,
            "lon":18.993958
        },
        {
            "id":"F02368",
            "name":"Lelesz utca",
            "lat":47.509669,
            "lon":18.992843
        },
        {
            "id":"F02369",
            "name":"Lelesz utca",
            "lat":47.509546,
            "lon":18.993155
        },
        {
            "id":"F02370",
            "name":"Felső Svábhegyi út",
            "lat":47.50848,
            "lon":18.990508
        },
        {
            "id":"F02371",
            "name":"Felső Svábhegyi út",
            "lat":47.508129,
            "lon":18.989991
        },
        {
            "id":"F02372",
            "name":"Városkúti út",
            "lat":47.507247,
            "lon":18.988213
        },
        {
            "id":"F02373",
            "name":"Városkúti út",
            "lat":47.507238,
            "lon":18.988346
        },
        {
            "id":"F02374",
            "name":"Galgóczy utca",
            "lat":47.511833,
            "lon":18.986973
        },
        {
            "id":"F02375",
            "name":"Galgóczy utca",
            "lat":47.511419,
            "lon":18.985951
        },
        {
            "id":"F02376",
            "name":"Zalai út",
            "lat":47.511536,
            "lon":18.984889
        },
        {
            "id":"F02377",
            "name":"Zalai út",
            "lat":47.511607,
            "lon":18.983946
        },
        {
            "id":"F02378",
            "name":"Béla király út",
            "lat":47.510424,
            "lon":18.975876
        },
        {
            "id":"F02379",
            "name":"Csillagvölgyi út",
            "lat":47.51036,
            "lon":18.975239
        },
        {
            "id":"F02380",
            "name":"Zugligeti út",
            "lat":47.511042,
            "lon":18.972012
        },
        {
            "id":"F02381",
            "name":"Zugliget, Libegő",
            "lat":47.516523,
            "lon":18.976598
        },
        {
            "id":"F02382",
            "name":"Zugliget, Libegő",
            "lat":47.516558,
            "lon":18.9762
        },
        {
            "id":"F02383",
            "name":"Zugligeti út 64.",
            "lat":47.516894,
            "lon":18.980249
        },
        {
            "id":"F02384",
            "name":"Zugligeti út 64.",
            "lat":47.516885,
            "lon":18.97997
        },
        {
            "id":"F02385",
            "name":"Szarvas Gábor út",
            "lat":47.518101,
            "lon":18.984045
        },
        {
            "id":"F02386",
            "name":"Szarvas Gábor út",
            "lat":47.518011,
            "lon":18.983793
        },
        {
            "id":"F02387",
            "name":"Adonis utca",
            "lat":47.50302,
            "lon":18.989811
        },
        {
            "id":"F02388",
            "name":"Adonis utca",
            "lat":47.503677,
            "lon":18.99054
        },
        {
            "id":"F02389",
            "name":"Istenhegyi lejtő",
            "lat":47.505594,
            "lon":18.992649
        },
        {
            "id":"F02390",
            "name":"Istenhegyi lejtő",
            "lat":47.505522,
            "lon":18.992516
        },
        {
            "id":"F02391",
            "name":"Óra út",
            "lat":47.504715,
            "lon":18.997893
        },
        {
            "id":"F02392",
            "name":"Óra út",
            "lat":47.504562,
            "lon":18.998026
        },
        {
            "id":"F02393",
            "name":"Nógrádi utca",
            "lat":47.503143,
            "lon":19.00266
        },
        {
            "id":"F02394",
            "name":"Nógrádi utca",
            "lat":47.502945,
            "lon":19.002222
        },
        {
            "id":"F02395",
            "name":"Pethényi út",
            "lat":47.502766,
            "lon":19.005846
        },
        {
            "id":"F02396",
            "name":"Pethényi út",
            "lat":47.502344,
            "lon":19.005913
        },
        {
            "id":"F02397",
            "name":"Szent Orbán tér",
            "lat":47.499655,
            "lon":19.009512
        },
        {
            "id":"F02398",
            "name":"Szent Orbán tér",
            "lat":47.499467,
            "lon":19.010202
        },
        {
            "id":"F02399",
            "name":"Szent Orbán tér",
            "lat":47.499008,
            "lon":19.00926
        },
        {
            "id":"F02400",
            "name":"Szent Orbán tér",
            "lat":47.49934,
            "lon":19.008649
        },
        {
            "id":"F02401",
            "name":"Szent Orbán tér",
            "lat":47.499367,
            "lon":19.008344
        },
        {
            "id":"F02402",
            "name":"Istenhegyi út",
            "lat":47.498353,
            "lon":19.016813
        },
        {
            "id":"F02403",
            "name":"Tóth Lőrinc utca",
            "lat":47.499541,
            "lon":19.01786
        },
        {
            "id":"F02404",
            "name":"Goldmark Károly utca",
            "lat":47.501843,
            "lon":19.015603
        },
        {
            "id":"F02405",
            "name":"Határőr út",
            "lat":47.503588,
            "lon":19.016
        },
        {
            "id":"F02406",
            "name":"Ráth György utca",
            "lat":47.500126,
            "lon":19.020502
        },
        {
            "id":"F02407",
            "name":"Kék Golyó utca",
            "lat":47.497878,
            "lon":19.02114
        },
        {
            "id":"F02408",
            "name":"Kék Golyó utca",
            "lat":47.497581,
            "lon":19.020901
        },
        {
            "id":"F02409",
            "name":"Kék Golyó utca",
            "lat":47.497383,
            "lon":19.020768
        },
        {
            "id":"F02411",
            "name":"Kék Golyó utca",
            "lat":47.497995,
            "lon":19.020914
        },
        {
            "id":"F02413",
            "name":"Királyhágó tér",
            "lat":47.495638,
            "lon":19.01923
        },
        {
            "id":"F02414",
            "name":"Királyhágó tér",
            "lat":47.495575,
            "lon":19.019747
        },
        {
            "id":"F02415",
            "name":"Márvány utca",
            "lat":47.494621,
            "lon":19.020478
        },
        {
            "id":"F02416",
            "name":"Csörsz utca",
            "lat":47.490215,
            "lon":19.024461
        },
        {
            "id":"F02417",
            "name":"Csörsz utca",
            "lat":47.4908,
            "lon":19.024435
        },
        {
            "id":"F02420",
            "name":"Királyhágó tér",
            "lat":47.494891,
            "lon":19.018991
        },
        {
            "id":"F02421",
            "name":"Királyhágó tér",
            "lat":47.495044,
            "lon":19.019296
        },
        {
            "id":"F02422",
            "name":"Agárdi út",
            "lat":47.495145,
            "lon":19.015242
        },
        {
            "id":"F02423",
            "name":"Galántai utca",
            "lat":47.497192,
            "lon":19.014146
        },
        {
            "id":"F02424",
            "name":"Galántai utca",
            "lat":47.497291,
            "lon":19.01327
        },
        {
            "id":"F02425",
            "name":"Nárcisz utca",
            "lat":47.495806,
            "lon":19.011067
        },
        {
            "id":"F02426",
            "name":"Nárcisz utca",
            "lat":47.496292,
            "lon":19.010735
        },
        {
            "id":"F02427",
            "name":"Tarpatak utca",
            "lat":47.509581,
            "lon":18.99749
        },
        {
            "id":"F02428",
            "name":"Tarpatak utca",
            "lat":47.509428,
            "lon":18.997158
        },
        {
            "id":"F02429",
            "name":"Vöröskő utca",
            "lat":47.497226,
            "lon":19.007629
        },
        {
            "id":"F02430",
            "name":"Vöröskő utca",
            "lat":47.496803,
            "lon":19.00743
        },
        {
            "id":"F02431",
            "name":"Szendrő utca",
            "lat":47.49539,
            "lon":19.004339
        },
        {
            "id":"F02433",
            "name":"Szendrő utca",
            "lat":47.495255,
            "lon":19.004564
        },
        {
            "id":"F02434",
            "name":"Pagony utca",
            "lat":47.49494,
            "lon":19.003118
        },
        {
            "id":"F02435",
            "name":"Sólyom utca",
            "lat":47.49698,
            "lon":19.000117
        },
        {
            "id":"F02436",
            "name":"Sólyom utca",
            "lat":47.497142,
            "lon":18.999957
        },
        {
            "id":"F02437",
            "name":"Tamási Áron utca / Thomán István utca",
            "lat":47.497159,
            "lon":18.998126
        },
        {
            "id":"F02438",
            "name":"Tamási Áron utca / Thomán István utca",
            "lat":47.496728,
            "lon":18.998166
        },
        {
            "id":"F02439",
            "name":"Thomán István utca",
            "lat":47.494641,
            "lon":18.998513
        },
        {
            "id":"F02440",
            "name":"Városkút",
            "lat":47.500142,
            "lon":18.989801
        },
        {
            "id":"F02441",
            "name":"Városkút",
            "lat":47.500331,
            "lon":18.989694
        },
        {
            "id":"F02442",
            "name":"Svábhegy",
            "lat":47.497605,
            "lon":18.98979
        },
        {
            "id":"F02443",
            "name":"Ordas út",
            "lat":47.498527,
            "lon":18.980591
        },
        {
            "id":"F02444",
            "name":"Ordas út",
            "lat":47.498266,
            "lon":18.981282
        },
        {
            "id":"F02445",
            "name":"Őzike köz",
            "lat":47.499594,
            "lon":18.976236
        },
        {
            "id":"F02446",
            "name":"Őzike köz",
            "lat":47.49946,
            "lon":18.977152
        },
        {
            "id":"F02447",
            "name":"Fülemile út",
            "lat":47.499673,
            "lon":18.972586
        },
        {
            "id":"F02448",
            "name":"Fülemile út",
            "lat":47.499565,
            "lon":18.973237
        },
        {
            "id":"F02449",
            "name":"Normafa, Gyermekvasút",
            "lat":47.500715,
            "lon":18.970222
        },
        {
            "id":"F02450",
            "name":"Normafa, Gyermekvasút",
            "lat":47.500122,
            "lon":18.9709
        },
        {
            "id":"F02451",
            "name":"Csillagvizsgáló",
            "lat":47.500459,
            "lon":18.96478
        },
        {
            "id":"F02452",
            "name":"Csillagvizsgáló",
            "lat":47.500234,
            "lon":18.96482
        },
        {
            "id":"F02453",
            "name":"Csillebérc, Gyermekvasút",
            "lat":47.497664,
            "lon":18.963928
        },
        {
            "id":"F02454",
            "name":"Csillebérc, Gyermekvasút",
            "lat":47.497796,
            "lon":18.964081
        },
        {
            "id":"F02455",
            "name":"Sötétvágás utca",
            "lat":47.494765,
            "lon":18.964617
        },
        {
            "id":"F02456",
            "name":"Sötétvágás utca",
            "lat":47.495053,
            "lon":18.964669
        },
        {
            "id":"F02458",
            "name":"Svábhegy",
            "lat":47.498001,
            "lon":18.989617
        },
        {
            "id":"F02459",
            "name":"Svábhegy",
            "lat":47.497749,
            "lon":18.989432
        },
        {
            "id":"F02464",
            "name":"Széll Kálmán tér M",
            "lat":47.507521,
            "lon":19.024414
        },
        {
            "id":"F02465",
            "name":"Széll Kálmán tér M",
            "lat":47.507485,
            "lon":19.024905
        },
        {
            "id":"F02466",
            "name":"Széll Kálmán tér M",
            "lat":47.507377,
            "lon":19.025595
        },
        {
            "id":"F02467",
            "name":"Széll Kálmán tér M",
            "lat":47.50744,
            "lon":19.025237
        },
        {
            "id":"F02468",
            "name":"Széll Kálmán tér M",
            "lat":47.507575,
            "lon":19.023538
        },
        {
            "id":"F02469",
            "name":"Széll Kálmán tér M",
            "lat":47.506225,
            "lon":19.024404
        },
        {
            "id":"F02470",
            "name":"Széll Kálmán tér M",
            "lat":47.50637,
            "lon":19.024441
        },
        {
            "id":"F02471",
            "name":"Széll Kálmán tér M",
            "lat":47.50663,
            "lon":19.024069
        },
        {
            "id":"F02472",
            "name":"Széll Kálmán tér M",
            "lat":47.506729,
            "lon":19.02391
        },
        {
            "id":"F02473",
            "name":"Széll Kálmán tér M",
            "lat":47.506855,
            "lon":19.023525
        },
        {
            "id":"F02474",
            "name":"Széll Kálmán tér M",
            "lat":47.507053,
            "lon":19.023206
        },
        {
            "id":"F02476",
            "name":"Széll Kálmán tér M",
            "lat":47.507449,
            "lon":19.02444
        },
        {
            "id":"F02480",
            "name":"Széll Kálmán tér",
            "lat":47.50689,
            "lon":19.025051
        },
        {
            "id":"F02481",
            "name":"Széll Kálmán tér",
            "lat":47.507638,
            "lon":19.026206
        },
        {
            "id":"F02482",
            "name":"Rendelőintézet",
            "lat":47.511176,
            "lon":19.00568
        },
        {
            "id":"F02483",
            "name":"Rendelőintézet",
            "lat":47.510969,
            "lon":19.005852
        },
        {
            "id":"F02484",
            "name":"Hunyad köz",
            "lat":47.511435,
            "lon":18.981716
        },
        {
            "id":"F02485",
            "name":"Hunyad köz",
            "lat":47.511282,
            "lon":18.981504
        },
        {
            "id":"F02486",
            "name":"Hunyad lejtő",
            "lat":47.510875,
            "lon":18.97865
        },
        {
            "id":"F02487",
            "name":"Cinege út",
            "lat":47.510849,
            "lon":18.979088
        },
        {
            "id":"F02488",
            "name":"Csemegi utca",
            "lat":47.501781,
            "lon":19.018045
        },
        {
            "id":"F02489",
            "name":"Normafa",
            "lat":47.503086,
            "lon":18.965612
        },
        {
            "id":"F02490",
            "name":"Normafa",
            "lat":47.502924,
            "lon":18.965666
        },
        {
            "id":"F02492",
            "name":"Hajós Alfréd uszoda",
            "lat":47.519552,
            "lon":19.044172
        },
        {
            "id":"F02493",
            "name":"Hajós Alfréd uszoda",
            "lat":47.519801,
            "lon":19.044113
        },
        {
            "id":"F02494",
            "name":"Palatinus strand",
            "lat":47.528331,
            "lon":19.047718
        },
        {
            "id":"F02495",
            "name":"Palatinus strand",
            "lat":47.527761,
            "lon":19.047299
        },
        {
            "id":"F02496",
            "name":"Szabadtéri Színpad",
            "lat":47.530373,
            "lon":19.048793
        },
        {
            "id":"F02497",
            "name":"Szabadtéri Színpad",
            "lat":47.52992,
            "lon":19.048442
        },
        {
            "id":"F02498",
            "name":"Szállodák (Hotels)",
            "lat":47.533503,
            "lon":19.050825
        },
        {
            "id":"F02499",
            "name":"Szállodák (Hotels)",
            "lat":47.533347,
            "lon":19.050646
        },
        {
            "id":"F02500",
            "name":"Zenélőkút",
            "lat":47.535716,
            "lon":19.052526
        },
        {
            "id":"F02501",
            "name":"Zenélőkút",
            "lat":47.535983,
            "lon":19.052386
        },
        {
            "id":"F02502",
            "name":"Margitsziget / Árpád híd",
            "lat":47.537155,
            "lon":19.054558
        },
        {
            "id":"F02503",
            "name":"Margitsziget / Árpád híd",
            "lat":47.537674,
            "lon":19.053794
        },
        {
            "id":"F02504",
            "name":"Tisza utca",
            "lat":47.524163,
            "lon":19.058109
        },
        {
            "id":"F02505",
            "name":"Parkmozi köz",
            "lat":47.522692,
            "lon":19.045314
        },
        {
            "id":"F02506",
            "name":"Parkmozi köz",
            "lat":47.522652,
            "lon":19.045162
        },
        {
            "id":"F02507",
            "name":"Viza utca",
            "lat":47.530154,
            "lon":19.057645
        },
        {
            "id":"F02508",
            "name":"Viza utca",
            "lat":47.530828,
            "lon":19.057818
        },
        {
            "id":"F02509",
            "name":"Dráva utca",
            "lat":47.52589,
            "lon":19.05779
        },
        {
            "id":"F02510",
            "name":"Dráva utca",
            "lat":47.525809,
            "lon":19.057684
        },
        {
            "id":"F02511",
            "name":"Jászai Mari tér",
            "lat":47.513901,
            "lon":19.049397
        },
        {
            "id":"F02512",
            "name":"Szent István park",
            "lat":47.518335,
            "lon":19.051456
        },
        {
            "id":"F02513",
            "name":"Szent István park",
            "lat":47.517786,
            "lon":19.052624
        },
        {
            "id":"F02514",
            "name":"Victor Hugo utca",
            "lat":47.51784,
            "lon":19.054709
        },
        {
            "id":"F02515",
            "name":"Hegedűs Gyula utca",
            "lat":47.517211,
            "lon":19.054841
        },
        {
            "id":"F02516",
            "name":"Victor Hugo utca",
            "lat":47.518497,
            "lon":19.05678
        },
        {
            "id":"F02517",
            "name":"Victor Hugo utca",
            "lat":47.518227,
            "lon":19.055824
        },
        {
            "id":"F02519",
            "name":"Gogol utca",
            "lat":47.520152,
            "lon":19.057577
        },
        {
            "id":"F02521",
            "name":"Ipoly utca",
            "lat":47.52053,
            "lon":19.054058
        },
        {
            "id":"F02522",
            "name":"Ipoly utca",
            "lat":47.519882,
            "lon":19.053806
        },
        {
            "id":"F02523",
            "name":"Radnóti Miklós utca",
            "lat":47.515568,
            "lon":19.053121
        },
        {
            "id":"F02524",
            "name":"Radnóti Miklós utca",
            "lat":47.514575,
            "lon":19.054124
        },
        {
            "id":"F02525",
            "name":"Népfürdő utca",
            "lat":47.536423,
            "lon":19.059466
        },
        {
            "id":"F02526",
            "name":"Népfürdő utca",
            "lat":47.535922,
            "lon":19.059658
        },
        {
            "id":"F02527",
            "name":"Népfürdő utca / Árpád híd",
            "lat":47.5363,
            "lon":19.058916
        },
        {
            "id":"F02528",
            "name":"Népfürdő utca / Árpád híd",
            "lat":47.536078,
            "lon":19.059593
        },
        {
            "id":"F02532",
            "name":"Kámfor utca",
            "lat":47.552491,
            "lon":19.084554
        },
        {
            "id":"F02533",
            "name":"Szekszárdi utca",
            "lat":47.55233,
            "lon":19.083265
        },
        {
            "id":"F02534",
            "name":"Gyöngyösi utca M",
            "lat":47.549346,
            "lon":19.073724
        },
        {
            "id":"F02535",
            "name":"Gyöngyösi utca M",
            "lat":47.549418,
            "lon":19.074242
        },
        {
            "id":"F02536",
            "name":"Gyöngyösi utca M",
            "lat":47.54895,
            "lon":19.073259
        },
        {
            "id":"F02537",
            "name":"Gyöngyösi utca M",
            "lat":47.54877,
            "lon":19.073578
        },
        {
            "id":"F02538",
            "name":"Gyöngyösi utca",
            "lat":47.547779,
            "lon":19.080578
        },
        {
            "id":"F02539",
            "name":"Gyöngyösi utca",
            "lat":47.548445,
            "lon":19.081336
        },
        {
            "id":"F02540",
            "name":"Cziffra György park",
            "lat":47.548778,
            "lon":19.077895
        },
        {
            "id":"F02541",
            "name":"Cziffra György park",
            "lat":47.548391,
            "lon":19.07941
        },
        {
            "id":"F02542",
            "name":"Gyöngyösi utca",
            "lat":47.547084,
            "lon":19.089266
        },
        {
            "id":"F02543",
            "name":"Gyöngyösi utca",
            "lat":47.546256,
            "lon":19.090129
        },
        {
            "id":"F02544",
            "name":"Gyöngyösi utca",
            "lat":47.546274,
            "lon":19.089053
        },
        {
            "id":"F02545",
            "name":"Gyöngyösi utca",
            "lat":47.545924,
            "lon":19.088774
        },
        {
            "id":"F02546",
            "name":"Gyöngyösi utca",
            "lat":47.546643,
            "lon":19.089412
        },
        {
            "id":"F02547",
            "name":"Reitter Ferenc utca",
            "lat":47.545319,
            "lon":19.095548
        },
        {
            "id":"F02548",
            "name":"Reitter Ferenc utca",
            "lat":47.545499,
            "lon":19.09507
        },
        {
            "id":"F02549",
            "name":"Futár utca",
            "lat":47.538332,
            "lon":19.090083
        },
        {
            "id":"F02550",
            "name":"Futár utca",
            "lat":47.538062,
            "lon":19.089658
        },
        {
            "id":"F02551",
            "name":"Fiastyúk utca",
            "lat":47.54024,
            "lon":19.084758
        },
        {
            "id":"F02552",
            "name":"Fiastyúk utca",
            "lat":47.540123,
            "lon":19.084877
        },
        {
            "id":"F02553",
            "name":"Fiastyúk utca",
            "lat":47.540159,
            "lon":19.085595
        },
        {
            "id":"F02554",
            "name":"Fiastyúk utca",
            "lat":47.540537,
            "lon":19.085874
        },
        {
            "id":"F02555",
            "name":"Fiastyúk utca",
            "lat":47.540438,
            "lon":19.085621
        },
        {
            "id":"F02556",
            "name":"Fiastyúk utca",
            "lat":47.540303,
            "lon":19.085927
        },
        {
            "id":"F02557",
            "name":"Násznagy utca",
            "lat":47.542877,
            "lon":19.082116
        },
        {
            "id":"F02558",
            "name":"Násznagy utca",
            "lat":47.543335,
            "lon":19.082024
        },
        {
            "id":"F02559",
            "name":"József Attila tér",
            "lat":47.547445,
            "lon":19.08378
        },
        {
            "id":"F02560",
            "name":"József Attila tér",
            "lat":47.547059,
            "lon":19.084019
        },
        {
            "id":"F02561",
            "name":"Fiastyúk utca",
            "lat":47.543759,
            "lon":19.078729
        },
        {
            "id":"F02562",
            "name":"Fiastyúk utca",
            "lat":47.544955,
            "lon":19.079687
        },
        {
            "id":"F02563",
            "name":"Fiastyúk utca",
            "lat":47.545919,
            "lon":19.072088
        },
        {
            "id":"F02564",
            "name":"Fiastyúk utca",
            "lat":47.54591,
            "lon":19.072234
        },
        {
            "id":"F02565",
            "name":"Dagály fürdő",
            "lat":47.539409,
            "lon":19.06211
        },
        {
            "id":"F02566",
            "name":"Cserhalom utca",
            "lat":47.541972,
            "lon":19.0668
        },
        {
            "id":"F02567",
            "name":"Népfürdő utca / Árpád híd",
            "lat":47.536801,
            "lon":19.060595
        },
        {
            "id":"F02568",
            "name":"Népfürdő utca / Árpád híd",
            "lat":47.536935,
            "lon":19.060821
        },
        {
            "id":"F02569",
            "name":"Sporttelep",
            "lat":47.533698,
            "lon":19.059133
        },
        {
            "id":"F02570",
            "name":"Sporttelep",
            "lat":47.533689,
            "lon":19.059293
        },
        {
            "id":"F02571",
            "name":"Karikás Frigyes utca",
            "lat":47.537187,
            "lon":19.065762
        },
        {
            "id":"F02572",
            "name":"Lomb utca",
            "lat":47.535279,
            "lon":19.069932
        },
        {
            "id":"F02573",
            "name":"Vág utca",
            "lat":47.523947,
            "lon":19.055878
        },
        {
            "id":"F02574",
            "name":"Vág utca",
            "lat":47.52393,
            "lon":19.055997
        },
        {
            "id":"F02575",
            "name":"Pap Károly utca",
            "lat":47.533542,
            "lon":19.073663
        },
        {
            "id":"F02576",
            "name":"Pap Károly utca",
            "lat":47.533821,
            "lon":19.075018
        },
        {
            "id":"F02577",
            "name":"Röppentyű utca",
            "lat":47.534244,
            "lon":19.074567
        },
        {
            "id":"F02578",
            "name":"Árpád híd M",
            "lat":47.532215,
            "lon":19.067295
        },
        {
            "id":"F02579",
            "name":"Árpád híd M",
            "lat":47.532473,
            "lon":19.067407
        },
        {
            "id":"F02580",
            "name":"Árpád híd M",
            "lat":47.532365,
            "lon":19.067553
        },
        {
            "id":"F02581",
            "name":"Árpád híd M",
            "lat":47.532071,
            "lon":19.067958
        },
        {
            "id":"F02583",
            "name":"Hajdú utca",
            "lat":47.531041,
            "lon":19.075335
        },
        {
            "id":"F02584",
            "name":"Béke utca",
            "lat":47.532641,
            "lon":19.080981
        },
        {
            "id":"F02585",
            "name":"Béke tér",
            "lat":47.529376,
            "lon":19.080195
        },
        {
            "id":"F02586",
            "name":"Béke tér",
            "lat":47.529205,
            "lon":19.079943
        },
        {
            "id":"F02587",
            "name":"Béke tér",
            "lat":47.529745,
            "lon":19.080488
        },
        {
            "id":"F02588",
            "name":"Béke tér",
            "lat":47.530761,
            "lon":19.08082
        },
        {
            "id":"F02589",
            "name":"Béke tér",
            "lat":47.529745,
            "lon":19.081019
        },
        {
            "id":"F02590",
            "name":"Béke tér",
            "lat":47.529547,
            "lon":19.081218
        },
        {
            "id":"F02591",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.526273,
            "lon":19.078533
        },
        {
            "id":"F02592",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.526408,
            "lon":19.078799
        },
        {
            "id":"F02593",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.525833,
            "lon":19.078188
        },
        {
            "id":"F02594",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.526151,
            "lon":19.077345
        },
        {
            "id":"F02595",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.524888,
            "lon":19.078639
        },
        {
            "id":"F02596",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.52577,
            "lon":19.077525
        },
        {
            "id":"F02597",
            "name":"Lehel utca / Róbert Károly körút",
            "lat":47.526218,
            "lon":19.076934
        },
        {
            "id":"F02598",
            "name":"Róbert Károly körút (Lehel utca)",
            "lat":47.526336,
            "lon":19.078348
        },
        {
            "id":"F02599",
            "name":"Árpád híd M",
            "lat":47.531484,
            "lon":19.068084
        },
        {
            "id":"F02600",
            "name":"Árpád híd M",
            "lat":47.532978,
            "lon":19.066098
        },
        {
            "id":"F02601",
            "name":"Árpád híd M",
            "lat":47.533759,
            "lon":19.066903
        },
        {
            "id":"F02602",
            "name":"Árpád híd M",
            "lat":47.533724,
            "lon":19.065508
        },
        {
            "id":"F02603",
            "name":"Árpád híd M",
            "lat":47.534191,
            "lon":19.067674
        },
        {
            "id":"F02604",
            "name":"Árpád híd M",
            "lat":47.533598,
            "lon":19.067421
        },
        {
            "id":"F02605",
            "name":"Árpád híd M",
            "lat":47.533328,
            "lon":19.067301
        },
        {
            "id":"F02606",
            "name":"Tisza utca",
            "lat":47.52383,
            "lon":19.05933
        },
        {
            "id":"F02608",
            "name":"Dózsa György út M",
            "lat":47.524819,
            "lon":19.062438
        },
        {
            "id":"F02609",
            "name":"Váci út (Dózsa György út M)",
            "lat":47.525224,
            "lon":19.063633
        },
        {
            "id":"F02610",
            "name":"Dózsa György út M",
            "lat":47.524073,
            "lon":19.063845
        },
        {
            "id":"F02611",
            "name":"Dózsa György út M",
            "lat":47.523965,
            "lon":19.062956
        },
        {
            "id":"F02612",
            "name":"Lehel tér M (Gogol utca)",
            "lat":47.51963,
            "lon":19.060817
        },
        {
            "id":"F02613",
            "name":"Lehel tér",
            "lat":47.518829,
            "lon":19.060856
        },
        {
            "id":"F02614",
            "name":"Lehel tér",
            "lat":47.517705,
            "lon":19.060365
        },
        {
            "id":"F02615",
            "name":"Lehel tér M",
            "lat":47.517354,
            "lon":19.060723
        },
        {
            "id":"F02616",
            "name":"Lehel tér M",
            "lat":47.517885,
            "lon":19.060352
        },
        {
            "id":"F02617",
            "name":"Lehel tér M",
            "lat":47.517273,
            "lon":19.060617
        },
        {
            "id":"F02619",
            "name":"Lehel tér M",
            "lat":47.516167,
            "lon":19.059621
        },
        {
            "id":"F02620",
            "name":"Lehel utca / Dózsa György út",
            "lat":47.521302,
            "lon":19.068572
        },
        {
            "id":"F02621",
            "name":"Lehel utca / Dózsa György út",
            "lat":47.52099,
            "lon":19.069295
        },
        {
            "id":"F02623",
            "name":"Lehel utca / Dózsa György út",
            "lat":47.520474,
            "lon":19.069713
        },
        {
            "id":"F02624",
            "name":"Lehel utca / Dózsa György út",
            "lat":47.520747,
            "lon":19.06899
        },
        {
            "id":"F02625",
            "name":"Dózsa György út",
            "lat":47.520744,
            "lon":19.068625
        },
        {
            "id":"F02626",
            "name":"Lehel utca / Dózsa György út",
            "lat":47.521076,
            "lon":19.06978
        },
        {
            "id":"F02627",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.522153,
            "lon":19.081479
        },
        {
            "id":"F02628",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.522144,
            "lon":19.081877
        },
        {
            "id":"F02629",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.522783,
            "lon":19.080709
        },
        {
            "id":"F02630",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.524483,
            "lon":19.081972
        },
        {
            "id":"F02631",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.523587,
            "lon":19.081057
        },
        {
            "id":"F02632",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.523194,
            "lon":19.081527
        },
        {
            "id":"F02633",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.52379,
            "lon":19.080378
        },
        {
            "id":"F02634",
            "name":"Vágány utca / Róbert Károly körút",
            "lat":47.524159,
            "lon":19.080458
        },
        {
            "id":"F02635",
            "name":"Petneházy utca",
            "lat":47.531335,
            "lon":19.085655
        },
        {
            "id":"F02636",
            "name":"Petneházy utca",
            "lat":47.531272,
            "lon":19.085934
        },
        {
            "id":"F02637",
            "name":"Árpád híd",
            "lat":47.533085,
            "lon":19.067102
        },
        {
            "id":"F02638",
            "name":"Árpád híd",
            "lat":47.53215,
            "lon":19.066331
        },
        {
            "id":"F02639",
            "name":"Kassák Lajos utca",
            "lat":47.522534,
            "lon":19.066501
        },
        {
            "id":"F02640",
            "name":"Kassák Lajos utca",
            "lat":47.522435,
            "lon":19.066461
        },
        {
            "id":"F02641",
            "name":"Honvédkórház",
            "lat":47.530308,
            "lon":19.07068
        },
        {
            "id":"F02642",
            "name":"Honvédkórház",
            "lat":47.530422,
            "lon":19.070177
        },
        {
            "id":"F02643",
            "name":"Honvédkórház",
            "lat":47.530036,
            "lon":19.070682
        },
        {
            "id":"F02644",
            "name":"Honvédkórház",
            "lat":47.53002,
            "lon":19.070335
        },
        {
            "id":"F02645",
            "name":"Szegedi út",
            "lat":47.528637,
            "lon":19.084099
        },
        {
            "id":"F02646",
            "name":"Szegedi út",
            "lat":47.528332,
            "lon":19.083435
        },
        {
            "id":"F02647",
            "name":"Szegedi út",
            "lat":47.52772,
            "lon":19.08386
        },
        {
            "id":"F02648",
            "name":"Szegedi út",
            "lat":47.527513,
            "lon":19.08374
        },
        {
            "id":"F02649",
            "name":"Radnóti Miklós utca",
            "lat":47.515547,
            "lon":19.051004
        },
        {
            "id":"F02650",
            "name":"Radnóti Miklós utca",
            "lat":47.515906,
            "lon":19.049809
        },
        {
            "id":"F02653",
            "name":"Angyalföld vasútállomás",
            "lat":47.549179,
            "lon":19.089852
        },
        {
            "id":"F02654",
            "name":"Angyalföld vasútállomás",
            "lat":47.548948,
            "lon":19.090324
        },
        {
            "id":"F02655",
            "name":"Rokolya utca",
            "lat":47.541749,
            "lon":19.092052
        },
        {
            "id":"F02656",
            "name":"Rokolya utca",
            "lat":47.541758,
            "lon":19.091786
        },
        {
            "id":"F02657",
            "name":"Kucsma utca",
            "lat":47.544501,
            "lon":19.093661
        },
        {
            "id":"F02658",
            "name":"Kucsma utca",
            "lat":47.544609,
            "lon":19.093436
        },
        {
            "id":"F02659",
            "name":"Rokolya utca",
            "lat":47.542614,
            "lon":19.087031
        },
        {
            "id":"F02660",
            "name":"Rokolya utca",
            "lat":47.54274,
            "lon":19.087005
        },
        {
            "id":"F02661",
            "name":"Rokolya utca",
            "lat":47.54229,
            "lon":19.087031
        },
        {
            "id":"F02662",
            "name":"Rokolya utca",
            "lat":47.542075,
            "lon":19.086513
        },
        {
            "id":"F02663",
            "name":"Rozsnyai utca",
            "lat":47.540215,
            "lon":19.077492
        },
        {
            "id":"F02664",
            "name":"Rozsnyai utca",
            "lat":47.539442,
            "lon":19.076841
        },
        {
            "id":"F02665",
            "name":"Frangepán utca",
            "lat":47.536384,
            "lon":19.075431
        },
        {
            "id":"F02666",
            "name":"Fáy utca",
            "lat":47.537131,
            "lon":19.075923
        },
        {
            "id":"F02667",
            "name":"Hun utca",
            "lat":47.524173,
            "lon":19.075219
        },
        {
            "id":"F02668",
            "name":"Hun utca",
            "lat":47.523957,
            "lon":19.07494
        },
        {
            "id":"F02669",
            "name":"Hun utca",
            "lat":47.523936,
            "lon":19.074562
        },
        {
            "id":"F02670",
            "name":"Hun utca",
            "lat":47.524277,
            "lon":19.075691
        },
        {
            "id":"F02671",
            "name":"Fáy utca",
            "lat":47.534537,
            "lon":19.087543
        },
        {
            "id":"F02672",
            "name":"Fáy utca",
            "lat":47.533979,
            "lon":19.087516
        },
        {
            "id":"F02673",
            "name":"Frangepán utca",
            "lat":47.534395,
            "lon":19.082496
        },
        {
            "id":"F02674",
            "name":"Frangepán utca",
            "lat":47.533945,
            "lon":19.082177
        },
        {
            "id":"F02675",
            "name":"Frangepán utca",
            "lat":47.534386,
            "lon":19.082257
        },
        {
            "id":"F02676",
            "name":"Frangepán utca",
            "lat":47.535132,
            "lon":19.083134
        },
        {
            "id":"F02677",
            "name":"Forgách utca M",
            "lat":47.537816,
            "lon":19.070291
        },
        {
            "id":"F02678",
            "name":"Forgách utca M",
            "lat":47.539489,
            "lon":19.069628
        },
        {
            "id":"F02679",
            "name":"Forgách utca M",
            "lat":47.540046,
            "lon":19.07
        },
        {
            "id":"F02680",
            "name":"Dózsa György út",
            "lat":47.525296,
            "lon":19.063713
        },
        {
            "id":"F02681",
            "name":"Dózsa György út",
            "lat":47.524406,
            "lon":19.063062
        },
        {
            "id":"F02682",
            "name":"Forgách utca",
            "lat":47.539794,
            "lon":19.07
        },
        {
            "id":"F02683",
            "name":"Forgách utca",
            "lat":47.538958,
            "lon":19.069269
        },
        {
            "id":"F02684",
            "name":"Gyöngyösi utca",
            "lat":47.549535,
            "lon":19.073684
        },
        {
            "id":"F02685",
            "name":"Gyöngyösi utca",
            "lat":47.548573,
            "lon":19.072953
        },
        {
            "id":"F02687",
            "name":"Árvavár utca",
            "lat":47.535226,
            "lon":19.115609
        },
        {
            "id":"F02688",
            "name":"Árvavár utca",
            "lat":47.535459,
            "lon":19.116114
        },
        {
            "id":"F02690",
            "name":"Rákosszentmihály vasútállomás",
            "lat":47.519671,
            "lon":19.14802
        },
        {
            "id":"F02691",
            "name":"Hősök tere M",
            "lat":47.514409,
            "lon":19.079483
        },
        {
            "id":"F02692",
            "name":"Állatkert",
            "lat":47.517783,
            "lon":19.077705
        },
        {
            "id":"F02693",
            "name":"Állatkert",
            "lat":47.517747,
            "lon":19.077851
        },
        {
            "id":"F02694",
            "name":"Széchenyi fürdő M",
            "lat":47.519292,
            "lon":19.082433
        },
        {
            "id":"F02695",
            "name":"Széchenyi fürdő M",
            "lat":47.519068,
            "lon":19.081198
        },
        {
            "id":"F02696",
            "name":"Széchenyi fürdő",
            "lat":47.517548,
            "lon":19.080985
        },
        {
            "id":"F02697",
            "name":"Széchenyi fürdő",
            "lat":47.517404,
            "lon":19.081264
        },
        {
            "id":"F02698",
            "name":"Kós Károly sétány",
            "lat":47.518734,
            "lon":19.085195
        },
        {
            "id":"F02699",
            "name":"Bethesda utca",
            "lat":47.517933,
            "lon":19.086708
        },
        {
            "id":"F02700",
            "name":"Bethesda utca",
            "lat":47.517384,
            "lon":19.087132
        },
        {
            "id":"F02701",
            "name":"Közlekedési Múzeum",
            "lat":47.515539,
            "lon":19.089906
        },
        {
            "id":"F02702",
            "name":"Közlekedési Múzeum",
            "lat":47.515701,
            "lon":19.089999
        },
        {
            "id":"F02703",
            "name":"Közlekedési Múzeum",
            "lat":47.515611,
            "lon":19.09057
        },
        {
            "id":"F02704",
            "name":"Közlekedési Múzeum",
            "lat":47.515575,
            "lon":19.090769
        },
        {
            "id":"F02705",
            "name":"Olof Palme sétány",
            "lat":47.512087,
            "lon":19.08511
        },
        {
            "id":"F02706",
            "name":"Olof Palme sétány",
            "lat":47.512563,
            "lon":19.085814
        },
        {
            "id":"F02707",
            "name":"Dvořák sétány",
            "lat":47.510315,
            "lon":19.084034
        },
        {
            "id":"F02708",
            "name":"Dvořák sétány",
            "lat":47.51045,
            "lon":19.084618
        },
        {
            "id":"F02709",
            "name":"Ötvenhatosok tere",
            "lat":47.507256,
            "lon":19.086488
        },
        {
            "id":"F02710",
            "name":"Ötvenhatosok tere",
            "lat":47.507616,
            "lon":19.086036
        },
        {
            "id":"F02711",
            "name":"Zichy Géza utca",
            "lat":47.510421,
            "lon":19.090419
        },
        {
            "id":"F02712",
            "name":"Zichy Géza utca",
            "lat":47.510106,
            "lon":19.090233
        },
        {
            "id":"F02713",
            "name":"Vakok Intézete",
            "lat":47.513577,
            "lon":19.093184
        },
        {
            "id":"F02714",
            "name":"Vakok Intézete",
            "lat":47.512588,
            "lon":19.093315
        },
        {
            "id":"F02715",
            "name":"Vakok Intézete",
            "lat":47.512452,
            "lon":19.09463
        },
        {
            "id":"F02716",
            "name":"Cházár András utca",
            "lat":47.505806,
            "lon":19.091465
        },
        {
            "id":"F02717",
            "name":"Cházár András utca",
            "lat":47.505851,
            "lon":19.091332
        },
        {
            "id":"F02718",
            "name":"Stefánia út / Thököly út",
            "lat":47.508845,
            "lon":19.094467
        },
        {
            "id":"F02720",
            "name":"Stefánia út / Thököly út",
            "lat":47.508009,
            "lon":19.09529
        },
        {
            "id":"F02722",
            "name":"Stefánia út / Thököly út",
            "lat":47.50809,
            "lon":19.094294
        },
        {
            "id":"F02723",
            "name":"Stefánia út / Thököly út",
            "lat":47.508782,
            "lon":19.095383
        },
        {
            "id":"F02724",
            "name":"Zugló vasútállomás",
            "lat":47.510706,
            "lon":19.097283
        },
        {
            "id":"F02725",
            "name":"Zugló vasútállomás",
            "lat":47.511191,
            "lon":19.098598
        },
        {
            "id":"F02726",
            "name":"Zugló vasútállomás",
            "lat":47.510823,
            "lon":19.097907
        },
        {
            "id":"F02727",
            "name":"Zugló vasútállomás",
            "lat":47.511794,
            "lon":19.098267
        },
        {
            "id":"F02729",
            "name":"Zugló vasútállomás",
            "lat":47.511353,
            "lon":19.099395
        },
        {
            "id":"F02730",
            "name":"Zugló vasútállomás",
            "lat":47.511794,
            "lon":19.099262
        },
        {
            "id":"F02731",
            "name":"Zugló vasútállomás",
            "lat":47.510895,
            "lon":19.099588
        },
        {
            "id":"F02732",
            "name":"Zugló vasútállomás",
            "lat":47.511318,
            "lon":19.099161
        },
        {
            "id":"F02733",
            "name":"Egressy út / Stefánia út",
            "lat":47.504796,
            "lon":19.099654
        },
        {
            "id":"F02734",
            "name":"Stefánia út",
            "lat":47.504813,
            "lon":19.100809
        },
        {
            "id":"F02735",
            "name":"Egressy út",
            "lat":47.504966,
            "lon":19.10134
        },
        {
            "id":"F02736",
            "name":"Egressy út / Stefánia út",
            "lat":47.504571,
            "lon":19.099853
        },
        {
            "id":"F02737",
            "name":"Szobránc köz",
            "lat":47.503354,
            "lon":19.103675
        },
        {
            "id":"F02738",
            "name":"Szobránc köz",
            "lat":47.503192,
            "lon":19.1039
        },
        {
            "id":"F02739",
            "name":"Egressy út / Hungária körút",
            "lat":47.507087,
            "lon":19.104422
        },
        {
            "id":"F02740",
            "name":"Hungária körút",
            "lat":47.507068,
            "lon":19.105656
        },
        {
            "id":"F02741",
            "name":"Hungária körút",
            "lat":47.506924,
            "lon":19.105563
        },
        {
            "id":"F02742",
            "name":"Egressy út / Hungária körút",
            "lat":47.506771,
            "lon":19.104113
        },
        {
            "id":"F02743",
            "name":"Egressy út / Hungária körút",
            "lat":47.507149,
            "lon":19.104054
        },
        {
            "id":"F02744",
            "name":"Egressy út / Hungária körút",
            "lat":47.506748,
            "lon":19.104453
        },
        {
            "id":"F02745",
            "name":"Jeszenák János utca",
            "lat":47.51195,
            "lon":19.1247
        },
        {
            "id":"F02746",
            "name":"Róna utca",
            "lat":47.506222,
            "lon":19.123404
        },
        {
            "id":"F02747",
            "name":"Róna utca",
            "lat":47.506204,
            "lon":19.123576
        },
        {
            "id":"F02748",
            "name":"Pongrátz Gergely tér",
            "lat":47.509501,
            "lon":19.129024
        },
        {
            "id":"F02749",
            "name":"Pongrátz Gergely tér",
            "lat":47.509753,
            "lon":19.1284
        },
        {
            "id":"F02750",
            "name":"Pongrátz Gergely tér",
            "lat":47.509133,
            "lon":19.128572
        },
        {
            "id":"F02751",
            "name":"Pongrátz Gergely tér",
            "lat":47.50898,
            "lon":19.128532
        },
        {
            "id":"F02752",
            "name":"Pongrátz Gergely tér",
            "lat":47.509213,
            "lon":19.129501
        },
        {
            "id":"F02753",
            "name":"Pongrátz Gergely tér",
            "lat":47.50933,
            "lon":19.129449
        },
        {
            "id":"F02754",
            "name":"Bánki Donát utca",
            "lat":47.506115,
            "lon":19.134488
        },
        {
            "id":"F02755",
            "name":"Örs vezér tere M+H",
            "lat":47.504485,
            "lon":19.136556
        },
        {
            "id":"F02756",
            "name":"Örs vezér tere M+H",
            "lat":47.504728,
            "lon":19.13649
        },
        {
            "id":"F02757",
            "name":"Örs vezér tere M+H",
            "lat":47.504944,
            "lon":19.136437
        },
        {
            "id":"F02758",
            "name":"Örs vezér tere M+H",
            "lat":47.505142,
            "lon":19.136385
        },
        {
            "id":"F02759",
            "name":"Örs vezér tere M+H",
            "lat":47.504908,
            "lon":19.136822
        },
        {
            "id":"F02760",
            "name":"Örs vezér tere M+H",
            "lat":47.505151,
            "lon":19.136756
        },
        {
            "id":"F02761",
            "name":"Örs vezér tere M+H",
            "lat":47.504701,
            "lon":19.136875
        },
        {
            "id":"F02762",
            "name":"Örs vezér tere M+H",
            "lat":47.504467,
            "lon":19.136941
        },
        {
            "id":"F02763",
            "name":"Örs vezér tere M+H",
            "lat":47.504233,
            "lon":19.137047
        },
        {
            "id":"F02764",
            "name":"Örs vezér tere M+H",
            "lat":47.504045,
            "lon":19.136675
        },
        {
            "id":"F02765",
            "name":"Álmos vezér útja",
            "lat":47.507379,
            "lon":19.140557
        },
        {
            "id":"F02766",
            "name":"Álmos vezér útja",
            "lat":47.507127,
            "lon":19.140689
        },
        {
            "id":"F02767",
            "name":"Füredi utca",
            "lat":47.506415,
            "lon":19.141498
        },
        {
            "id":"F02768",
            "name":"Ond vezér útja",
            "lat":47.506388,
            "lon":19.142188
        },
        {
            "id":"F02769",
            "name":"Ond vezér park",
            "lat":47.506501,
            "lon":19.147193
        },
        {
            "id":"F02770",
            "name":"Ond vezér park",
            "lat":47.506259,
            "lon":19.146143
        },
        {
            "id":"F02771",
            "name":"Szentmihályi út",
            "lat":47.507514,
            "lon":19.150341
        },
        {
            "id":"F02772",
            "name":"Ond vezér útja",
            "lat":47.507514,
            "lon":19.150168
        },
        {
            "id":"F02773",
            "name":"Vezér utca",
            "lat":47.509877,
            "lon":19.143203
        },
        {
            "id":"F02774",
            "name":"Füredi utca",
            "lat":47.509562,
            "lon":19.14307
        },
        {
            "id":"F02775",
            "name":"Füredi utca",
            "lat":47.510935,
            "lon":19.147254
        },
        {
            "id":"F02776",
            "name":"Szentmihályi út",
            "lat":47.510692,
            "lon":19.147293
        },
        {
            "id":"F02777",
            "name":"Csertő utca",
            "lat":47.513355,
            "lon":19.14621
        },
        {
            "id":"F02778",
            "name":"Csertő utca",
            "lat":47.51304,
            "lon":19.146448
        },
        {
            "id":"F02779",
            "name":"Csertő utca",
            "lat":47.513175,
            "lon":19.146501
        },
        {
            "id":"F02780",
            "name":"Zsálya utca",
            "lat":47.516021,
            "lon":19.142948
        },
        {
            "id":"F02781",
            "name":"Zsálya utca",
            "lat":47.516164,
            "lon":19.143227
        },
        {
            "id":"F02782",
            "name":"Zsálya utca",
            "lat":47.515885,
            "lon":19.143718
        },
        {
            "id":"F02783",
            "name":"Fischer István utca",
            "lat":47.515384,
            "lon":19.139867
        },
        {
            "id":"F02784",
            "name":"Fischer István utca",
            "lat":47.515061,
            "lon":19.13907
        },
        {
            "id":"F02785",
            "name":"Fogarasi út",
            "lat":47.515088,
            "lon":19.139774
        },
        {
            "id":"F02786",
            "name":"Vezér utca",
            "lat":47.51392,
            "lon":19.137262
        },
        {
            "id":"F02787",
            "name":"Fogarasi út",
            "lat":47.513561,
            "lon":19.137116
        },
        {
            "id":"F02788",
            "name":"Fogarasi út",
            "lat":47.51312,
            "lon":19.137195
        },
        {
            "id":"F02789",
            "name":"Vezér utca",
            "lat":47.5134,
            "lon":19.136133
        },
        {
            "id":"F02790",
            "name":"Mogyoródi út",
            "lat":47.517415,
            "lon":19.130364
        },
        {
            "id":"F02791",
            "name":"Mogyoródi út",
            "lat":47.517533,
            "lon":19.129979
        },
        {
            "id":"F02792",
            "name":"Mogyoródi út",
            "lat":47.520955,
            "lon":19.135959
        },
        {
            "id":"F02793",
            "name":"Öv utca",
            "lat":47.524531,
            "lon":19.141012
        },
        {
            "id":"F02794",
            "name":"Egressy tér",
            "lat":47.514346,
            "lon":19.120654
        },
        {
            "id":"F02795",
            "name":"Egressy tér",
            "lat":47.515372,
            "lon":19.119088
        },
        {
            "id":"F02796",
            "name":"Egressy tér",
            "lat":47.514958,
            "lon":19.119805
        },
        {
            "id":"F02797",
            "name":"Egressy tér",
            "lat":47.514607,
            "lon":19.120588
        },
        {
            "id":"F02798",
            "name":"Egressy tér",
            "lat":47.514302,
            "lon":19.11926
        },
        {
            "id":"F02799",
            "name":"Egressy tér",
            "lat":47.514149,
            "lon":19.11922
        },
        {
            "id":"F02800",
            "name":"Turán utca",
            "lat":47.517303,
            "lon":19.123964
        },
        {
            "id":"F02801",
            "name":"Turán utca",
            "lat":47.516665,
            "lon":19.122901
        },
        {
            "id":"F02802",
            "name":"Egressy út",
            "lat":47.519181,
            "lon":19.127326
        },
        {
            "id":"F02803",
            "name":"Vezér utca",
            "lat":47.519046,
            "lon":19.12625
        },
        {
            "id":"F02804",
            "name":"Egressy út",
            "lat":47.519396,
            "lon":19.127207
        },
        {
            "id":"F02805",
            "name":"Kála utca",
            "lat":47.522767,
            "lon":19.130863
        },
        {
            "id":"F02806",
            "name":"Rákosmezei tér",
            "lat":47.524169,
            "lon":19.132791
        },
        {
            "id":"F02807",
            "name":"Rákosmezei tér",
            "lat":47.524771,
            "lon":19.133576
        },
        {
            "id":"F02808",
            "name":"Öv utca (Egressy út)",
            "lat":47.526792,
            "lon":19.136593
        },
        {
            "id":"F02809",
            "name":"Cinkotai út (Szugló utca)",
            "lat":47.526727,
            "lon":19.127165
        },
        {
            "id":"F02810",
            "name":"Szugló utca",
            "lat":47.526862,
            "lon":19.127523
        },
        {
            "id":"F02811",
            "name":"Komócsy utca",
            "lat":47.521351,
            "lon":19.123279
        },
        {
            "id":"F02812",
            "name":"Komócsy utca",
            "lat":47.521648,
            "lon":19.12243
        },
        {
            "id":"F02813",
            "name":"Nagy Lajos király útja",
            "lat":47.517515,
            "lon":19.116144
        },
        {
            "id":"F02814",
            "name":"Szugló utca / Nagy Lajos király útja",
            "lat":47.517353,
            "lon":19.115812
        },
        {
            "id":"F02815",
            "name":"Szugló utca / Nagy Lajos király útja",
            "lat":47.517551,
            "lon":19.115228
        },
        {
            "id":"F02816",
            "name":"Nagy Lajos király útja",
            "lat":47.516939,
            "lon":19.115559
        },
        {
            "id":"F02817",
            "name":"Szugló utca / Nagy Lajos király útja",
            "lat":47.517101,
            "lon":19.116196
        },
        {
            "id":"F02818",
            "name":"Szugló utca / Nagy Lajos király útja",
            "lat":47.517236,
            "lon":19.116143
        },
        {
            "id":"F02819",
            "name":"Szugló utca",
            "lat":47.514225,
            "lon":19.111001
        },
        {
            "id":"F02820",
            "name":"Róna utca",
            "lat":47.514549,
            "lon":19.111121
        },
        {
            "id":"F02821",
            "name":"Tisza István tér",
            "lat":47.516386,
            "lon":19.10803
        },
        {
            "id":"F02823",
            "name":"Tisza István tér",
            "lat":47.516386,
            "lon":19.10718
        },
        {
            "id":"F02824",
            "name":"Tisza István tér",
            "lat":47.517006,
            "lon":19.108416
        },
        {
            "id":"F02826",
            "name":"Bosnyák tér",
            "lat":47.520521,
            "lon":19.113253
        },
        {
            "id":"F02827",
            "name":"Bosnyák tér",
            "lat":47.520368,
            "lon":19.113054
        },
        {
            "id":"F02828",
            "name":"Bosnyák tér",
            "lat":47.520206,
            "lon":19.112841
        },
        {
            "id":"F02829",
            "name":"Bosnyák tér",
            "lat":47.519774,
            "lon":19.112283
        },
        {
            "id":"F02830",
            "name":"Bosnyák tér",
            "lat":47.519514,
            "lon":19.111313
        },
        {
            "id":"F02831",
            "name":"Bosnyák tér",
            "lat":47.519478,
            "lon":19.111791
        },
        {
            "id":"F02832",
            "name":"Bosnyák tér",
            "lat":47.519172,
            "lon":19.112654
        },
        {
            "id":"F02834",
            "name":"Bosnyák tér",
            "lat":47.51883,
            "lon":19.112879
        },
        {
            "id":"F02835",
            "name":"Bosnyák tér",
            "lat":47.519792,
            "lon":19.112867
        },
        {
            "id":"F02836",
            "name":"Bosnyák tér",
            "lat":47.52052,
            "lon":19.113797
        },
        {
            "id":"F02837",
            "name":"Bosnyák tér",
            "lat":47.519739,
            "lon":19.111605
        },
        {
            "id":"F02840",
            "name":"Bosnyák tér",
            "lat":47.520206,
            "lon":19.113385
        },
        {
            "id":"F02844",
            "name":"Rákospatak utca / Csömöri út",
            "lat":47.524403,
            "lon":19.118317
        },
        {
            "id":"F02845",
            "name":"Rákospatak utca / Csömöri út",
            "lat":47.524655,
            "lon":19.118795
        },
        {
            "id":"F02846",
            "name":"Miskolci utca / Csömöri út",
            "lat":47.52727,
            "lon":19.122026
        },
        {
            "id":"F02847",
            "name":"Miskolci utca / Csömöri út",
            "lat":47.526003,
            "lon":19.120271
        },
        {
            "id":"F02848",
            "name":"Cinkotai út",
            "lat":47.528546,
            "lon":19.123807
        },
        {
            "id":"F02849",
            "name":"Cinkotai út",
            "lat":47.528466,
            "lon":19.123409
        },
        {
            "id":"F02850",
            "name":"Telepes utca",
            "lat":47.530392,
            "lon":19.12126
        },
        {
            "id":"F02851",
            "name":"Öv utca",
            "lat":47.530473,
            "lon":19.121512
        },
        {
            "id":"F02852",
            "name":"Fűrész utca",
            "lat":47.523345,
            "lon":19.113349
        },
        {
            "id":"F02853",
            "name":"Fűrész utca",
            "lat":47.523632,
            "lon":19.113841
        },
        {
            "id":"F02854",
            "name":"Telepes utca",
            "lat":47.520756,
            "lon":19.110611
        },
        {
            "id":"F02855",
            "name":"Szuglói körvasút sor",
            "lat":47.535101,
            "lon":19.113151
        },
        {
            "id":"F02857",
            "name":"Öv utca",
            "lat":47.534382,
            "lon":19.112446
        },
        {
            "id":"F02858",
            "name":"Öv utca",
            "lat":47.534741,
            "lon":19.112673
        },
        {
            "id":"F02859",
            "name":"Öv utca",
            "lat":47.534237,
            "lon":19.113203
        },
        {
            "id":"F02861",
            "name":"Rákospatak utca",
            "lat":47.529257,
            "lon":19.107553
        },
        {
            "id":"F02863",
            "name":"Rákospatak utca",
            "lat":47.528682,
            "lon":19.107127
        },
        {
            "id":"F02865",
            "name":"Nagy Lajos király útja / Czobor utca",
            "lat":47.522811,
            "lon":19.101982
        },
        {
            "id":"F02866",
            "name":"Nagy Lajos király útja / Czobor utca",
            "lat":47.522352,
            "lon":19.101636
        },
        {
            "id":"F02867",
            "name":"Nagy Lajos király útja / Czobor utca",
            "lat":47.52219,
            "lon":19.102579
        },
        {
            "id":"F02868",
            "name":"Nagy Lajos király útja / Czobor utca",
            "lat":47.522856,
            "lon":19.101145
        },
        {
            "id":"F02869",
            "name":"Nagy Lajos király útja / Czobor utca",
            "lat":47.522415,
            "lon":19.10238
        },
        {
            "id":"F02873",
            "name":"Korong utca",
            "lat":47.514619,
            "lon":19.097367
        },
        {
            "id":"F02875",
            "name":"Korong utca",
            "lat":47.514682,
            "lon":19.097088
        },
        {
            "id":"F02876",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.517466,
            "lon":19.094016
        },
        {
            "id":"F02879",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.517598,
            "lon":19.093333
        },
        {
            "id":"F02880",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.517832,
            "lon":19.093147
        },
        {
            "id":"F02881",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.516899,
            "lon":19.093923
        },
        {
            "id":"F02882",
            "name":"Mexikói út M",
            "lat":47.519937,
            "lon":19.090533
        },
        {
            "id":"F02884",
            "name":"Mexikói út M",
            "lat":47.520009,
            "lon":19.091224
        },
        {
            "id":"F02885",
            "name":"Mexikói út M",
            "lat":47.519829,
            "lon":19.090958
        },
        {
            "id":"F02886",
            "name":"Mexikói út M",
            "lat":47.520189,
            "lon":19.09149
        },
        {
            "id":"F02887",
            "name":"Mexikói út",
            "lat":47.519677,
            "lon":19.090507
        },
        {
            "id":"F02888",
            "name":"Mexikói út",
            "lat":47.519425,
            "lon":19.091011
        },
        {
            "id":"F02891",
            "name":"Kacsóh Pongrác út",
            "lat":47.518241,
            "lon":19.089715
        },
        {
            "id":"F02892",
            "name":"Kacsóh Pongrác út",
            "lat":47.517806,
            "lon":19.089562
        },
        {
            "id":"F02893",
            "name":"Kacsóh Pongrác út",
            "lat":47.519056,
            "lon":19.088169
        },
        {
            "id":"F02894",
            "name":"Kacsóh Pongrác út",
            "lat":47.518639,
            "lon":19.088582
        },
        {
            "id":"F02895",
            "name":"Mexikói út",
            "lat":47.521799,
            "lon":19.091982
        },
        {
            "id":"F02898",
            "name":"Kassai tér",
            "lat":47.524756,
            "lon":19.0965
        },
        {
            "id":"F02899",
            "name":"Kassai tér",
            "lat":47.524,
            "lon":19.098199
        },
        {
            "id":"F02900",
            "name":"Kassai tér",
            "lat":47.524171,
            "lon":19.098504
        },
        {
            "id":"F02901",
            "name":"Kassai tér",
            "lat":47.523541,
            "lon":19.098716
        },
        {
            "id":"F02902",
            "name":"Kassai tér",
            "lat":47.523559,
            "lon":19.097866
        },
        {
            "id":"F02903",
            "name":"Pándorfalu utca",
            "lat":47.529512,
            "lon":19.102706
        },
        {
            "id":"F02904",
            "name":"Pándorfalu utca",
            "lat":47.529772,
            "lon":19.103065
        },
        {
            "id":"F02905",
            "name":"Rákospatak utca",
            "lat":47.531167,
            "lon":19.101207
        },
        {
            "id":"F02906",
            "name":"Róna park",
            "lat":47.535636,
            "lon":19.105701
        },
        {
            "id":"F02907",
            "name":"Csáktornya park",
            "lat":47.536535,
            "lon":19.106751
        },
        {
            "id":"F02908",
            "name":"Csáktornya park",
            "lat":47.536399,
            "lon":19.107149
        },
        {
            "id":"F02909",
            "name":"Miskolci utca",
            "lat":47.532521,
            "lon":19.110585
        },
        {
            "id":"F02911",
            "name":"Miskolci utca",
            "lat":47.532233,
            "lon":19.110452
        },
        {
            "id":"F02913",
            "name":"Szentes utca",
            "lat":47.526877,
            "lon":19.117377
        },
        {
            "id":"F02914",
            "name":"Szentes utca",
            "lat":47.526374,
            "lon":19.116978
        },
        {
            "id":"F02915",
            "name":"Róna utca",
            "lat":47.511884,
            "lon":19.115393
        },
        {
            "id":"F02916",
            "name":"Róna utca",
            "lat":47.512226,
            "lon":19.11615
        },
        {
            "id":"F02917",
            "name":"Törökőr utca",
            "lat":47.507922,
            "lon":19.107675
        },
        {
            "id":"F02918",
            "name":"Törökőr utca",
            "lat":47.508218,
            "lon":19.108512
        },
        {
            "id":"F02919",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.516654,
            "lon":19.092496
        },
        {
            "id":"F02920",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.516671,
            "lon":19.092788
        },
        {
            "id":"F02921",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.515905,
            "lon":19.092971
        },
        {
            "id":"F02922",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.515745,
            "lon":19.092654
        },
        {
            "id":"F02923",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.516421,
            "lon":19.091881
        },
        {
            "id":"F02924",
            "name":"Erzsébet királyné útja, aluljáró",
            "lat":47.51681,
            "lon":19.091388
        },
        {
            "id":"F02925",
            "name":"Amerikai út (Mexikói út M)",
            "lat":47.521367,
            "lon":19.09246
        },
        {
            "id":"F02928",
            "name":"Pillangó utca",
            "lat":47.503499,
            "lon":19.118515
        },
        {
            "id":"F02929",
            "name":"Pillangó utca",
            "lat":47.503535,
            "lon":19.118781
        },
        {
            "id":"F02930",
            "name":"Kaffka Margit utca",
            "lat":47.507938,
            "lon":19.126473
        },
        {
            "id":"F02931",
            "name":"Kaffka Margit utca",
            "lat":47.507902,
            "lon":19.126632
        },
        {
            "id":"F02932",
            "name":"Tihamér utca",
            "lat":47.51193,
            "lon":19.139874
        },
        {
            "id":"F02933",
            "name":"Tihamér utca",
            "lat":47.511607,
            "lon":19.139675
        },
        {
            "id":"F02934",
            "name":"Adóhivatal",
            "lat":47.514652,
            "lon":19.145176
        },
        {
            "id":"F02935",
            "name":"Adóhivatal",
            "lat":47.514859,
            "lon":19.144712
        },
        {
            "id":"F02936",
            "name":"Mályva utca",
            "lat":47.511639,
            "lon":19.133276
        },
        {
            "id":"F02937",
            "name":"Mályva utca",
            "lat":47.511226,
            "lon":19.132293
        },
        {
            "id":"F02938",
            "name":"Gödöllői utca",
            "lat":47.515371,
            "lon":19.13372
        },
        {
            "id":"F02939",
            "name":"Gödöllői utca",
            "lat":47.515633,
            "lon":19.13307
        },
        {
            "id":"F02940",
            "name":"Cinkotai út (Mogyoródi út)",
            "lat":47.522653,
            "lon":19.138339
        },
        {
            "id":"F02941",
            "name":"Miskolci utca",
            "lat":47.524633,
            "lon":19.124506
        },
        {
            "id":"F02942",
            "name":"Miskolci utca",
            "lat":47.52475,
            "lon":19.124838
        },
        {
            "id":"F02943",
            "name":"Fűrész utca",
            "lat":47.520121,
            "lon":19.119201
        },
        {
            "id":"F02944",
            "name":"Fűrész utca",
            "lat":47.519726,
            "lon":19.118935
        },
        {
            "id":"F02945",
            "name":"Kerékgyártó utca",
            "lat":47.532562,
            "lon":19.116747
        },
        {
            "id":"F02946",
            "name":"Kerékgyártó utca",
            "lat":47.53231,
            "lon":19.117464
        },
        {
            "id":"F02947",
            "name":"Fűrész utca",
            "lat":47.526272,
            "lon":19.104973
        },
        {
            "id":"F02948",
            "name":"Fűrész utca",
            "lat":47.525841,
            "lon":19.104681
        },
        {
            "id":"F02951",
            "name":"Fűrész utca",
            "lat":47.527562,
            "lon":19.098773
        },
        {
            "id":"F02952",
            "name":"Nezsider park",
            "lat":47.527525,
            "lon":19.101057
        },
        {
            "id":"F02953",
            "name":"Nezsider park",
            "lat":47.526751,
            "lon":19.100592
        },
        {
            "id":"F02954",
            "name":"Sárrét park",
            "lat":47.534178,
            "lon":19.106363
        },
        {
            "id":"F02955",
            "name":"Sárrét park",
            "lat":47.53327,
            "lon":19.105764
        },
        {
            "id":"F02956",
            "name":"Posta Járműtelep",
            "lat":47.510213,
            "lon":19.112523
        },
        {
            "id":"F02957",
            "name":"Posta Járműtelep",
            "lat":47.510222,
            "lon":19.112245
        },
        {
            "id":"F02960",
            "name":"Amerikai út",
            "lat":47.514256,
            "lon":19.103407
        },
        {
            "id":"F02961",
            "name":"Amerikai út",
            "lat":47.513591,
            "lon":19.102437
        },
        {
            "id":"F02962",
            "name":"Laky Adolf utca",
            "lat":47.519674,
            "lon":19.097424
        },
        {
            "id":"F02963",
            "name":"Laky Adolf utca",
            "lat":47.519917,
            "lon":19.09769
        },
        {
            "id":"F02966",
            "name":"Kerékgyártó utca",
            "lat":47.521334,
            "lon":19.105911
        },
        {
            "id":"F02967",
            "name":"Kerékgyártó utca",
            "lat":47.521307,
            "lon":19.106243
        },
        {
            "id":"F02968",
            "name":"Tihamér utca",
            "lat":47.507087,
            "lon":19.133082
        },
        {
            "id":"F02969",
            "name":"Tihamér utca",
            "lat":47.506979,
            "lon":19.133388
        },
        {
            "id":"F02970",
            "name":"Tihamér utca",
            "lat":47.506898,
            "lon":19.133454
        },
        {
            "id":"F02971",
            "name":"Jeszenák János utca",
            "lat":47.511752,
            "lon":19.125284
        },
        {
            "id":"F02972",
            "name":"Jeszenák János utca",
            "lat":47.511608,
            "lon":19.125668
        },
        {
            "id":"F02973",
            "name":"Jeszenák János utca",
            "lat":47.511446,
            "lon":19.125761
        },
        {
            "id":"F02974",
            "name":"Amerikai út (Mexikói út M)",
            "lat":47.522257,
            "lon":19.092912
        },
        {
            "id":"F02977",
            "name":"Ajtósi Dürer sor",
            "lat":47.514668,
            "lon":19.094864
        },
        {
            "id":"F02978",
            "name":"Ajtósi Dürer sor",
            "lat":47.513612,
            "lon":19.095746
        },
        {
            "id":"F02979",
            "name":"Ajtósi Dürer sor",
            "lat":47.513396,
            "lon":19.096311
        },
        {
            "id":"F02980",
            "name":"Ajtósi Dürer sor",
            "lat":47.51379,
            "lon":19.095825
        },
        {
            "id":"F02981",
            "name":"Besztercebányai utca",
            "lat":47.541466,
            "lon":19.171846
        },
        {
            "id":"F02982",
            "name":"Besztercebányai utca",
            "lat":47.541494,
            "lon":19.171607
        },
        {
            "id":"F02983",
            "name":"György utca",
            "lat":47.537885,
            "lon":19.164173
        },
        {
            "id":"F02984",
            "name":"Rákospalotai határút",
            "lat":47.537894,
            "lon":19.164784
        },
        {
            "id":"F02985",
            "name":"Szentmihályi út",
            "lat":47.536916,
            "lon":19.162551
        },
        {
            "id":"F02986",
            "name":"Rákospalotai határút",
            "lat":47.536736,
            "lon":19.162205
        },
        {
            "id":"F02987",
            "name":"János utca",
            "lat":47.534534,
            "lon":19.161005
        },
        {
            "id":"F02988",
            "name":"Rákospalotai határút",
            "lat":47.528875,
            "lon":19.152547
        },
        {
            "id":"F02989",
            "name":"Rákospalotai határút",
            "lat":47.529172,
            "lon":19.152401
        },
        {
            "id":"F02990",
            "name":"Rákóczi út",
            "lat":47.529711,
            "lon":19.152654
        },
        {
            "id":"F02991",
            "name":"Rigó utca",
            "lat":47.528508,
            "lon":19.150301
        },
        {
            "id":"F02992",
            "name":"Rákospalotai határút",
            "lat":47.527278,
            "lon":19.148241
        },
        {
            "id":"F02993",
            "name":"Pálya utca",
            "lat":47.525514,
            "lon":19.148795
        },
        {
            "id":"F02994",
            "name":"József utca",
            "lat":47.532541,
            "lon":19.156684
        },
        {
            "id":"F02995",
            "name":"Rákospalota, Csömöri-patak",
            "lat":47.590152,
            "lon":19.122459
        },
        {
            "id":"F02996",
            "name":"Rákospalota, Csömöri-patak",
            "lat":47.590313,
            "lon":19.122646
        },
        {
            "id":"F02997",
            "name":"Visonta utca",
            "lat":47.586249,
            "lon":19.121071
        },
        {
            "id":"F02998",
            "name":"Visonta utca",
            "lat":47.587112,
            "lon":19.121764
        },
        {
            "id":"F02999",
            "name":"Kanizsai Dorottya utca",
            "lat":47.582659,
            "lon":19.121877
        },
        {
            "id":"F03000",
            "name":"Kanizsai Dorottya utca",
            "lat":47.585599,
            "lon":19.124607
        },
        {
            "id":"F03001",
            "name":"Bútorraktár",
            "lat":47.58247,
            "lon":19.123419
        },
        {
            "id":"F03003",
            "name":"Rákospalota, MEDIMPEX",
            "lat":47.586825,
            "lon":19.133197
        },
        {
            "id":"F03004",
            "name":"Károlyi Sándor út",
            "lat":47.585818,
            "lon":19.132624
        },
        {
            "id":"F03005",
            "name":"Hulladékhasznosító Mű",
            "lat":47.583733,
            "lon":19.13056
        },
        {
            "id":"F03008",
            "name":"Szántóföld utca",
            "lat":47.57614,
            "lon":19.132116
        },
        {
            "id":"F03009",
            "name":"Régi Fóti út",
            "lat":47.572808,
            "lon":19.138504
        },
        {
            "id":"F03010",
            "name":"Vághó Ferenc utca",
            "lat":47.574352,
            "lon":19.13
        },
        {
            "id":"F03011",
            "name":"Kosd utca",
            "lat":47.572103,
            "lon":19.130754
        },
        {
            "id":"F03012",
            "name":"Rákospalota, Bogáncs utca",
            "lat":47.570292,
            "lon":19.134406
        },
        {
            "id":"F03013",
            "name":"Közvágóhíd utca",
            "lat":47.57189,
            "lon":19.126953
        },
        {
            "id":"F03014",
            "name":"Esthajnal utca",
            "lat":47.571827,
            "lon":19.127032
        },
        {
            "id":"F03015",
            "name":"Közvágóhíd tér",
            "lat":47.572287,
            "lon":19.124481
        },
        {
            "id":"F03016",
            "name":"Közvágóhíd tér",
            "lat":47.572224,
            "lon":19.12492
        },
        {
            "id":"F03017",
            "name":"Kovácsi Kálmán tér",
            "lat":47.573971,
            "lon":19.121692
        },
        {
            "id":"F03018",
            "name":"Kovácsi Kálmán tér",
            "lat":47.574411,
            "lon":19.122238
        },
        {
            "id":"F03019",
            "name":"Sződliget utca",
            "lat":47.568387,
            "lon":19.118136
        },
        {
            "id":"F03020",
            "name":"Sződliget utca",
            "lat":47.568612,
            "lon":19.117857
        },
        {
            "id":"F03021",
            "name":"Pozsony utca",
            "lat":47.568217,
            "lon":19.116807
        },
        {
            "id":"F03022",
            "name":"Pozsony utca",
            "lat":47.568577,
            "lon":19.117193
        },
        {
            "id":"F03023",
            "name":"Dal utca",
            "lat":47.567297,
            "lon":19.120939
        },
        {
            "id":"F03024",
            "name":"Fő út",
            "lat":47.56646,
            "lon":19.122519
        },
        {
            "id":"F03025",
            "name":"Csobogós utca",
            "lat":47.569542,
            "lon":19.126896
        },
        {
            "id":"F03026",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.568796,
            "lon":19.126297
        },
        {
            "id":"F03027",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.56814,
            "lon":19.125924
        },
        {
            "id":"F03029",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.567457,
            "lon":19.12486
        },
        {
            "id":"F03030",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.56725,
            "lon":19.124567
        },
        {
            "id":"F03032",
            "name":"Sportcentrum",
            "lat":47.574654,
            "lon":19.135052
        },
        {
            "id":"F03033",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.567626,
            "lon":19.127265
        },
        {
            "id":"F03034",
            "name":"Kossuth utca, lakótelep",
            "lat":47.565582,
            "lon":19.129867
        },
        {
            "id":"F03035",
            "name":"Kossuth utca, lakótelep",
            "lat":47.566734,
            "lon":19.128819
        },
        {
            "id":"F03036",
            "name":"Juhos utca",
            "lat":47.564514,
            "lon":19.127473
        },
        {
            "id":"F03037",
            "name":"Juhos utca",
            "lat":47.564998,
            "lon":19.128962
        },
        {
            "id":"F03038",
            "name":"Epres sor",
            "lat":47.562276,
            "lon":19.123762
        },
        {
            "id":"F03039",
            "name":"Epres sor",
            "lat":47.561827,
            "lon":19.123416
        },
        {
            "id":"F03040",
            "name":"Régi Fóti út",
            "lat":47.562151,
            "lon":19.123138
        },
        {
            "id":"F03041",
            "name":"Cserba Elemér út",
            "lat":47.559441,
            "lon":19.127692
        },
        {
            "id":"F03042",
            "name":"Telek utca",
            "lat":47.559231,
            "lon":19.131279
        },
        {
            "id":"F03043",
            "name":"Rákosmező utca 39.",
            "lat":47.56086,
            "lon":19.130219
        },
        {
            "id":"F03045",
            "name":"Széchenyi tér",
            "lat":47.564833,
            "lon":19.121135
        },
        {
            "id":"F03046",
            "name":"Széchenyi tér",
            "lat":47.564491,
            "lon":19.120815
        },
        {
            "id":"F03047",
            "name":"Rákospalota, Széchenyi tér",
            "lat":47.563349,
            "lon":19.120694
        },
        {
            "id":"F03048",
            "name":"Hubay Jenő tér",
            "lat":47.562955,
            "lon":19.117996
        },
        {
            "id":"F03049",
            "name":"Deák utca",
            "lat":47.563954,
            "lon":19.115592
        },
        {
            "id":"F03050",
            "name":"Hubay Jenő tér",
            "lat":47.563496,
            "lon":19.115618
        },
        {
            "id":"F03051",
            "name":"Fő út",
            "lat":47.563704,
            "lon":19.112894
        },
        {
            "id":"F03052",
            "name":"Sződliget utca",
            "lat":47.563875,
            "lon":19.113333
        },
        {
            "id":"F03053",
            "name":"Hubay Jenő tér",
            "lat":47.562651,
            "lon":19.114687
        },
        {
            "id":"F03054",
            "name":"Hubay Jenő tér",
            "lat":47.562435,
            "lon":19.114633
        },
        {
            "id":"F03055",
            "name":"Hubay Jenő tér",
            "lat":47.562012,
            "lon":19.115496
        },
        {
            "id":"F03056",
            "name":"Beller Imre utca",
            "lat":47.56166,
            "lon":19.117396
        },
        {
            "id":"F03057",
            "name":"Beller Imre utca",
            "lat":47.561119,
            "lon":19.119003
        },
        {
            "id":"F03058",
            "name":"Illyés Gyula utca",
            "lat":47.558699,
            "lon":19.120701
        },
        {
            "id":"F03059",
            "name":"Illyés Gyula utca",
            "lat":47.559166,
            "lon":19.12106
        },
        {
            "id":"F03060",
            "name":"Szentmihályi út",
            "lat":47.559318,
            "lon":19.122057
        },
        {
            "id":"F03061",
            "name":"Fazekas sor",
            "lat":47.557202,
            "lon":19.125894
        },
        {
            "id":"F03062",
            "name":"Bezerédj Pál utca",
            "lat":47.556833,
            "lon":19.126292
        },
        {
            "id":"F03063",
            "name":"Fazekas sor",
            "lat":47.557346,
            "lon":19.125655
        },
        {
            "id":"F03064",
            "name":"Pöltenberg Ernő utca",
            "lat":47.553852,
            "lon":19.131656
        },
        {
            "id":"F03065",
            "name":"Aulich Lajos utca",
            "lat":47.553393,
            "lon":19.132213
        },
        {
            "id":"F03066",
            "name":"Szerencs utca",
            "lat":47.553307,
            "lon":19.111792
        },
        {
            "id":"F03067",
            "name":"Szerencs utca",
            "lat":47.552911,
            "lon":19.111738
        },
        {
            "id":"F03068",
            "name":"Eötvös utca 74.",
            "lat":47.555807,
            "lon":19.112951
        },
        {
            "id":"F03069",
            "name":"Arany János utca",
            "lat":47.555672,
            "lon":19.112765
        },
        {
            "id":"F03070",
            "name":"Rákos úti szakrendelő",
            "lat":47.554661,
            "lon":19.118982
        },
        {
            "id":"F03071",
            "name":"Rákos úti szakrendelő",
            "lat":47.553402,
            "lon":19.118448
        },
        {
            "id":"F03072",
            "name":"Rákos úti szakrendelő",
            "lat":47.553888,
            "lon":19.118808
        },
        {
            "id":"F03073",
            "name":"Rákos úti szakrendelő",
            "lat":47.554112,
            "lon":19.119233
        },
        {
            "id":"F03074",
            "name":"Istvántelek vasútállomás",
            "lat":47.550944,
            "lon":19.107444
        },
        {
            "id":"F03075",
            "name":"Istvántelek vasútállomás",
            "lat":47.550998,
            "lon":19.107577
        },
        {
            "id":"F03076",
            "name":"Dugonics utca",
            "lat":47.550825,
            "lon":19.110726
        },
        {
            "id":"F03077",
            "name":"Eötvös utca",
            "lat":47.550582,
            "lon":19.110367
        },
        {
            "id":"F03078",
            "name":"Pázmány Péter utca",
            "lat":47.548929,
            "lon":19.106884
        },
        {
            "id":"F03079",
            "name":"Wysocki utca",
            "lat":47.548542,
            "lon":19.107322
        },
        {
            "id":"F03080",
            "name":"Patyolat utca",
            "lat":47.547093,
            "lon":19.109712
        },
        {
            "id":"F03081",
            "name":"Patyolat utca",
            "lat":47.547147,
            "lon":19.109459
        },
        {
            "id":"F03082",
            "name":"Széchenyi út",
            "lat":47.54612,
            "lon":19.113098
        },
        {
            "id":"F03083",
            "name":"Széchenyi út",
            "lat":47.545166,
            "lon":19.112473
        },
        {
            "id":"F03084",
            "name":"Wysocki utca",
            "lat":47.546175,
            "lon":19.111079
        },
        {
            "id":"F03085",
            "name":"Rákos út",
            "lat":47.545662,
            "lon":19.11169
        },
        {
            "id":"F03086",
            "name":"Széchenyi út",
            "lat":47.544239,
            "lon":19.114916
        },
        {
            "id":"F03087",
            "name":"Széchenyi út",
            "lat":47.54378,
            "lon":19.114955
        },
        {
            "id":"F03088",
            "name":"Rákos út",
            "lat":47.541958,
            "lon":19.107461
        },
        {
            "id":"F03089",
            "name":"Rekettye utca",
            "lat":47.541661,
            "lon":19.10774
        },
        {
            "id":"F03090",
            "name":"Perczel Mór utca",
            "lat":47.538816,
            "lon":19.112624
        },
        {
            "id":"F03091",
            "name":"Perczel Mór utca",
            "lat":47.539257,
            "lon":19.111735
        },
        {
            "id":"F03092",
            "name":"Rekettye utca",
            "lat":47.53725,
            "lon":19.115067
        },
        {
            "id":"F03094",
            "name":"Pestújhelyi tér",
            "lat":47.534087,
            "lon":19.124333
        },
        {
            "id":"F03095",
            "name":"Pestújhelyi tér",
            "lat":47.534293,
            "lon":19.124758
        },
        {
            "id":"F03096",
            "name":"Sztárai Mihály tér",
            "lat":47.540083,
            "lon":19.128765
        },
        {
            "id":"F03097",
            "name":"Sztárai Mihály tér",
            "lat":47.539634,
            "lon":19.128578
        },
        {
            "id":"F03098",
            "name":"Sztárai Mihály tér",
            "lat":47.539949,
            "lon":19.12834
        },
        {
            "id":"F03099",
            "name":"Sztárai Mihály tér",
            "lat":47.539822,
            "lon":19.128991
        },
        {
            "id":"F03100",
            "name":"Vág utca",
            "lat":47.540143,
            "lon":19.119746
        },
        {
            "id":"F03101",
            "name":"Vág utca",
            "lat":47.53999,
            "lon":19.119334
        },
        {
            "id":"F03102",
            "name":"Rákospalota, MÁV-telep",
            "lat":47.541572,
            "lon":19.121581
        },
        {
            "id":"F03103",
            "name":"Rákospalota, MÁV-telep",
            "lat":47.541357,
            "lon":19.120903
        },
        {
            "id":"F03104",
            "name":"Vasutastelep utca",
            "lat":47.542678,
            "lon":19.122233
        },
        {
            "id":"F03105",
            "name":"Vasutastelep utca",
            "lat":47.542463,
            "lon":19.121157
        },
        {
            "id":"F03106",
            "name":"Bánkút utca",
            "lat":47.546443,
            "lon":19.127499
        },
        {
            "id":"F03107",
            "name":"Bánkút utca",
            "lat":47.546362,
            "lon":19.12742
        },
        {
            "id":"F03108",
            "name":"Szerencs utca",
            "lat":47.546902,
            "lon":19.127354
        },
        {
            "id":"F03109",
            "name":"Szerencs utca",
            "lat":47.546435,
            "lon":19.126583
        },
        {
            "id":"F03110",
            "name":"Szerencs utca / Bánkút utca",
            "lat":47.546848,
            "lon":19.127101
        },
        {
            "id":"F03111",
            "name":"Szerencs utca / Bánkút utca",
            "lat":47.546561,
            "lon":19.126862
        },
        {
            "id":"F03112",
            "name":"Szerencs utca",
            "lat":47.549694,
            "lon":19.12223
        },
        {
            "id":"F03113",
            "name":"Szerencs utca",
            "lat":47.549649,
            "lon":19.122575
        },
        {
            "id":"F03114",
            "name":"Damjanich János utca",
            "lat":47.549974,
            "lon":19.121048
        },
        {
            "id":"F03115",
            "name":"Klapka György utca",
            "lat":47.550721,
            "lon":19.119973
        },
        {
            "id":"F03116",
            "name":"Szerencs utca",
            "lat":47.551666,
            "lon":19.117822
        },
        {
            "id":"F03117",
            "name":"Klapka György utca",
            "lat":47.552158,
            "lon":19.122379
        },
        {
            "id":"F03118",
            "name":"Klapka György utca",
            "lat":47.551817,
            "lon":19.122406
        },
        {
            "id":"F03119",
            "name":"Kozák tér",
            "lat":47.550169,
            "lon":19.125233
        },
        {
            "id":"F03120",
            "name":"Kozák tér",
            "lat":47.550276,
            "lon":19.125738
        },
        {
            "id":"F03121",
            "name":"Szerencs utca",
            "lat":47.548857,
            "lon":19.123371
        },
        {
            "id":"F03122",
            "name":"Bercsényi Miklós utca",
            "lat":47.549045,
            "lon":19.12377
        },
        {
            "id":"F03123",
            "name":"Bercsényi Miklós utca",
            "lat":47.548479,
            "lon":19.123796
        },
        {
            "id":"F03124",
            "name":"Bercsényi Miklós utca",
            "lat":47.548254,
            "lon":19.123982
        },
        {
            "id":"F03125",
            "name":"Bánkút utca",
            "lat":47.549445,
            "lon":19.131622
        },
        {
            "id":"F03126",
            "name":"Páskomliget utca",
            "lat":47.548608,
            "lon":19.132445
        },
        {
            "id":"F03127",
            "name":"Rákospalotai köztemető",
            "lat":47.552016,
            "lon":19.133739
        },
        {
            "id":"F03129",
            "name":"Rákospalotai köztemető",
            "lat":47.551827,
            "lon":19.133686
        },
        {
            "id":"F03130",
            "name":"Szerencs utca",
            "lat":47.543796,
            "lon":19.131441
        },
        {
            "id":"F03131",
            "name":"Pestújhelyi út",
            "lat":47.544084,
            "lon":19.131308
        },
        {
            "id":"F03133",
            "name":"Templom tér",
            "lat":47.5418,
            "lon":19.130069
        },
        {
            "id":"F03134",
            "name":"Thököly út",
            "lat":47.538281,
            "lon":19.13385
        },
        {
            "id":"F03135",
            "name":"Thököly út",
            "lat":47.538191,
            "lon":19.133849
        },
        {
            "id":"F03136",
            "name":"Apolló utca",
            "lat":47.537299,
            "lon":19.135229
        },
        {
            "id":"F03137",
            "name":"Apolló utca",
            "lat":47.536985,
            "lon":19.134644
        },
        {
            "id":"F03138",
            "name":"Madách utca",
            "lat":47.5388,
            "lon":19.136441
        },
        {
            "id":"F03139",
            "name":"Madách utca",
            "lat":47.539195,
            "lon":19.137756
        },
        {
            "id":"F03140",
            "name":"Nyírpalota út",
            "lat":47.537639,
            "lon":19.137368
        },
        {
            "id":"F03141",
            "name":"Késmárk utca",
            "lat":47.537226,
            "lon":19.136903
        },
        {
            "id":"F03142",
            "name":"Késmárk utca",
            "lat":47.529885,
            "lon":19.148963
        },
        {
            "id":"F03143",
            "name":"Késmárk utca 11.",
            "lat":47.530129,
            "lon":19.148166
        },
        {
            "id":"F03144",
            "name":"Újpalota, Szentmihályi út",
            "lat":47.542035,
            "lon":19.15135
        },
        {
            "id":"F03145",
            "name":"Újpalota, Szentmihályi út",
            "lat":47.541288,
            "lon":19.151681
        },
        {
            "id":"F03146",
            "name":"Újpalota, Szentmihályi út",
            "lat":47.541712,
            "lon":19.151097
        },
        {
            "id":"F03147",
            "name":"Újpalota, Szentmihályi út",
            "lat":47.541513,
            "lon":19.151429
        },
        {
            "id":"F03148",
            "name":"Erdőkerülő utca",
            "lat":47.541172,
            "lon":19.151017
        },
        {
            "id":"F03149",
            "name":"Újpalota, Erdőkerülő utca",
            "lat":47.539549,
            "lon":19.145395
        },
        {
            "id":"F03150",
            "name":"Erdőkerülő utca",
            "lat":47.539606,
            "lon":19.145016
        },
        {
            "id":"F03151",
            "name":"Fő tér",
            "lat":47.540921,
            "lon":19.139127
        },
        {
            "id":"F03152",
            "name":"Fő tér",
            "lat":47.541541,
            "lon":19.140125
        },
        {
            "id":"F03153",
            "name":"Fő tér",
            "lat":47.54163,
            "lon":19.141613
        },
        {
            "id":"F03154",
            "name":"Fő tér",
            "lat":47.542314,
            "lon":19.141043
        },
        {
            "id":"F03155",
            "name":"Fő tér",
            "lat":47.541981,
            "lon":19.141255
        },
        {
            "id":"F03156",
            "name":"Fő tér",
            "lat":47.542188,
            "lon":19.140989
        },
        {
            "id":"F03157",
            "name":"Vásárcsarnok",
            "lat":47.545993,
            "lon":19.140531
        },
        {
            "id":"F03158",
            "name":"Vásárcsarnok",
            "lat":47.545175,
            "lon":19.139892
        },
        {
            "id":"F03159",
            "name":"Vásárcsarnok",
            "lat":47.545527,
            "lon":19.138312
        },
        {
            "id":"F03160",
            "name":"Vásárcsarnok",
            "lat":47.545203,
            "lon":19.138218
        },
        {
            "id":"F03161",
            "name":"Vásárcsarnok",
            "lat":47.54487,
            "lon":19.139041
        },
        {
            "id":"F03162",
            "name":"Vásárcsarnok",
            "lat":47.545041,
            "lon":19.138869
        },
        {
            "id":"F03163",
            "name":"Újpalota, Nyírpalota út",
            "lat":47.546873,
            "lon":19.14226
        },
        {
            "id":"F03164",
            "name":"Újpalota, Nyírpalota út",
            "lat":47.546765,
            "lon":19.142485
        },
        {
            "id":"F03165",
            "name":"Újpalota, Nyírpalota út",
            "lat":47.547377,
            "lon":19.14145
        },
        {
            "id":"F03166",
            "name":"Nyírpalota út",
            "lat":47.5479,
            "lon":19.140176
        },
        {
            "id":"F03167",
            "name":"Újpalota, Sárfű utca",
            "lat":47.549908,
            "lon":19.13812
        },
        {
            "id":"F03168",
            "name":"Opál utca",
            "lat":47.542249,
            "lon":19.117132
        },
        {
            "id":"F03169",
            "name":"Opál utca",
            "lat":47.542088,
            "lon":19.117198
        },
        {
            "id":"F03170",
            "name":"Árokhát út",
            "lat":47.577072,
            "lon":19.124421
        },
        {
            "id":"F03171",
            "name":"Árokhát út",
            "lat":47.57736,
            "lon":19.124861
        },
        {
            "id":"F03172",
            "name":"Karatna tér",
            "lat":47.543001,
            "lon":19.109123
        },
        {
            "id":"F03173",
            "name":"Karatna tér",
            "lat":47.543046,
            "lon":19.108711
        },
        {
            "id":"F03174",
            "name":"Karatna tér",
            "lat":47.543055,
            "lon":19.108538
        },
        {
            "id":"F03175",
            "name":"Rákospalota, Székely Elek út",
            "lat":47.579625,
            "lon":19.126791
        },
        {
            "id":"F03176",
            "name":"Székely Elek út",
            "lat":47.579733,
            "lon":19.127057
        },
        {
            "id":"F03177",
            "name":"Kolozsvár utca",
            "lat":47.541985,
            "lon":19.123096
        },
        {
            "id":"F03179",
            "name":"Rädda Barnen utca",
            "lat":47.557138,
            "lon":19.113524
        },
        {
            "id":"F03180",
            "name":"Rädda Barnen utca",
            "lat":47.5573,
            "lon":19.113471
        },
        {
            "id":"F03181",
            "name":"Wesselényi utca",
            "lat":47.549877,
            "lon":19.116903
        },
        {
            "id":"F03182",
            "name":"Wesselényi utca",
            "lat":47.549319,
            "lon":19.116809
        },
        {
            "id":"F03183",
            "name":"Beller Imre utca",
            "lat":47.55496,
            "lon":19.115328
        },
        {
            "id":"F03184",
            "name":"Beller Imre utca",
            "lat":47.554906,
            "lon":19.115939
        },
        {
            "id":"F03185",
            "name":"Emlék tér",
            "lat":47.536982,
            "lon":19.126595
        },
        {
            "id":"F03186",
            "name":"Emlék tér",
            "lat":47.536829,
            "lon":19.126608
        },
        {
            "id":"F03187",
            "name":"Ady Endre utca",
            "lat":47.535421,
            "lon":19.120297
        },
        {
            "id":"F03188",
            "name":"Ady Endre utca",
            "lat":47.535294,
            "lon":19.120908
        },
        {
            "id":"F03189",
            "name":"Wesselényi utca",
            "lat":47.544098,
            "lon":19.12367
        },
        {
            "id":"F03190",
            "name":"Wesselényi utca",
            "lat":47.544152,
            "lon":19.123577
        },
        {
            "id":"F03191",
            "name":"Sárfű utca",
            "lat":47.547842,
            "lon":19.134091
        },
        {
            "id":"F03192",
            "name":"Sárfű utca",
            "lat":47.548085,
            "lon":19.133586
        },
        {
            "id":"F03193",
            "name":"Sárfű utca",
            "lat":47.547346,
            "lon":19.135193
        },
        {
            "id":"F03194",
            "name":"Sárfű utca",
            "lat":47.546599,
            "lon":19.135843
        },
        {
            "id":"F03195",
            "name":"Molnár Viktor utca",
            "lat":47.533543,
            "lon":19.130495
        },
        {
            "id":"F03196",
            "name":"Molnár Viktor utca",
            "lat":47.53357,
            "lon":19.130322
        },
        {
            "id":"F03197",
            "name":"Késmárk utca 20.",
            "lat":47.531552,
            "lon":19.145593
        },
        {
            "id":"F03198",
            "name":"Késmárk utca 9.",
            "lat":47.532273,
            "lon":19.14412
        },
        {
            "id":"F03199",
            "name":"Fázis utca",
            "lat":47.534138,
            "lon":19.141055
        },
        {
            "id":"F03200",
            "name":"Fázis utca",
            "lat":47.533741,
            "lon":19.141546
        },
        {
            "id":"F03201",
            "name":"Erdőkerülő utca 28.",
            "lat":47.540023,
            "lon":19.147747
        },
        {
            "id":"F03202",
            "name":"Erdőkerülő utca 27.",
            "lat":47.540185,
            "lon":19.148557
        },
        {
            "id":"F03203",
            "name":"Szent Korona útja",
            "lat":47.547764,
            "lon":19.115053
        },
        {
            "id":"F03204",
            "name":"Szent Korona útja",
            "lat":47.547225,
            "lon":19.114561
        },
        {
            "id":"F03205",
            "name":"Tóth István utca",
            "lat":47.538301,
            "lon":19.117007
        },
        {
            "id":"F03206",
            "name":"Tóth István utca",
            "lat":47.53795,
            "lon":19.116635
        },
        {
            "id":"F03209",
            "name":"Zsókavár utca",
            "lat":47.540999,
            "lon":19.143285
        },
        {
            "id":"F03210",
            "name":"Gusztáv utca",
            "lat":47.539503,
            "lon":19.174245
        },
        {
            "id":"F03211",
            "name":"Gusztáv utca",
            "lat":47.538738,
            "lon":19.174908
        },
        {
            "id":"F03212",
            "name":"Csömöri út",
            "lat":47.534835,
            "lon":19.181832
        },
        {
            "id":"F03213",
            "name":"Csömöri út (Szlovák út)",
            "lat":47.534673,
            "lon":19.181951
        },
        {
            "id":"F03214",
            "name":"Kisszentmihály, Baross utca",
            "lat":47.536648,
            "lon":19.177918
        },
        {
            "id":"F03215",
            "name":"Baross utca",
            "lat":47.536368,
            "lon":19.178262
        },
        {
            "id":"F03216",
            "name":"Szlovák út",
            "lat":47.532236,
            "lon":19.189196
        },
        {
            "id":"F03217",
            "name":"Timur utca",
            "lat":47.531678,
            "lon":19.189049
        },
        {
            "id":"F03218",
            "name":"Timur utca",
            "lat":47.53194,
            "lon":19.188239
        },
        {
            "id":"F03219",
            "name":"Gusztáv utca",
            "lat":47.535976,
            "lon":19.16664
        },
        {
            "id":"F03220",
            "name":"Gusztáv utca",
            "lat":47.535337,
            "lon":19.167103
        },
        {
            "id":"F03221",
            "name":"György utca",
            "lat":47.530888,
            "lon":19.172419
        },
        {
            "id":"F03222",
            "name":"Csömöri út",
            "lat":47.530736,
            "lon":19.171661
        },
        {
            "id":"F03223",
            "name":"Diófa utca",
            "lat":47.530367,
            "lon":19.171581
        },
        {
            "id":"F03224",
            "name":"Mátyás király utca",
            "lat":47.532701,
            "lon":19.176341
        },
        {
            "id":"F03225",
            "name":"Rákosszentmihály, Csömöri út",
            "lat":47.532179,
            "lon":19.176366
        },
        {
            "id":"F03226",
            "name":"Mátyás király utca",
            "lat":47.532305,
            "lon":19.175769
        },
        {
            "id":"F03227",
            "name":"Mátyás király utca",
            "lat":47.527595,
            "lon":19.181375
        },
        {
            "id":"F03228",
            "name":"Mátyás király utca 71.",
            "lat":47.528046,
            "lon":19.180473
        },
        {
            "id":"F03229",
            "name":"Rákosi út",
            "lat":47.527632,
            "lon":19.180738
        },
        {
            "id":"F03230",
            "name":"Mátyásföldi tér",
            "lat":47.523264,
            "lon":19.185242
        },
        {
            "id":"F03231",
            "name":"Mátyásföldi tér",
            "lat":47.523372,
            "lon":19.184963
        },
        {
            "id":"F03232",
            "name":"Sasvár utca",
            "lat":47.520401,
            "lon":19.187492
        },
        {
            "id":"F03233",
            "name":"Sasvár utca",
            "lat":47.519878,
            "lon":19.188287
        },
        {
            "id":"F03234",
            "name":"Olga utca",
            "lat":47.521361,
            "lon":19.181705
        },
        {
            "id":"F03235",
            "name":"Fuvallat utca",
            "lat":47.509898,
            "lon":19.185021
        },
        {
            "id":"F03236",
            "name":"Fuvallat utca",
            "lat":47.510113,
            "lon":19.185632
        },
        {
            "id":"F03237",
            "name":"Ballada utca",
            "lat":47.504138,
            "lon":19.187993
        },
        {
            "id":"F03238",
            "name":"Ballada utca",
            "lat":47.504281,
            "lon":19.188432
        },
        {
            "id":"F03239",
            "name":"Galgahévíz utca",
            "lat":47.50355,
            "lon":19.18312
        },
        {
            "id":"F03240",
            "name":"Galgahévíz utca",
            "lat":47.50372,
            "lon":19.183678
        },
        {
            "id":"F03241",
            "name":"Sashalom H",
            "lat":47.508736,
            "lon":19.178447
        },
        {
            "id":"F03242",
            "name":"Sashalom H",
            "lat":47.508302,
            "lon":19.180251
        },
        {
            "id":"F03243",
            "name":"Sashalom H",
            "lat":47.509193,
            "lon":19.180413
        },
        {
            "id":"F03244",
            "name":"Sashalom H",
            "lat":47.509437,
            "lon":19.179166
        },
        {
            "id":"F03245",
            "name":"Futórózsa utca",
            "lat":47.515223,
            "lon":19.185301
        },
        {
            "id":"F03246",
            "name":"Budapesti út",
            "lat":47.520311,
            "lon":19.179405
        },
        {
            "id":"F03247",
            "name":"Margit utca",
            "lat":47.511905,
            "lon":19.176211
        },
        {
            "id":"F03248",
            "name":"Margit utca",
            "lat":47.511454,
            "lon":19.17694
        },
        {
            "id":"F03249",
            "name":"Budapesti út",
            "lat":47.516489,
            "lon":19.170778
        },
        {
            "id":"F03250",
            "name":"Budapesti út",
            "lat":47.516129,
            "lon":19.171402
        },
        {
            "id":"F03251",
            "name":"Rákosi út",
            "lat":47.523639,
            "lon":19.171685
        },
        {
            "id":"F03252",
            "name":"János utca",
            "lat":47.523216,
            "lon":19.171803
        },
        {
            "id":"F03253",
            "name":"Rákosi út",
            "lat":47.521395,
            "lon":19.166979
        },
        {
            "id":"F03254",
            "name":"József utca",
            "lat":47.520919,
            "lon":19.166593
        },
        {
            "id":"F03255",
            "name":"József utca",
            "lat":47.520973,
            "lon":19.166965
        },
        {
            "id":"F03256",
            "name":"Rákosi út",
            "lat":47.520882,
            "lon":19.167668
        },
        {
            "id":"F03257",
            "name":"János utca",
            "lat":47.528986,
            "lon":19.168244
        },
        {
            "id":"F03258",
            "name":"Csömöri út",
            "lat":47.528771,
            "lon":19.166637
        },
        {
            "id":"F03259",
            "name":"János utca",
            "lat":47.528169,
            "lon":19.166715
        },
        {
            "id":"F03260",
            "name":"József utca",
            "lat":47.526338,
            "lon":19.162488
        },
        {
            "id":"F03261",
            "name":"Csömöri út",
            "lat":47.525996,
            "lon":19.16258
        },
        {
            "id":"F03262",
            "name":"József utca",
            "lat":47.525988,
            "lon":19.161983
        },
        {
            "id":"F03263",
            "name":"Rákóczi út",
            "lat":47.524121,
            "lon":19.157942
        },
        {
            "id":"F03264",
            "name":"Batthyány utca",
            "lat":47.523672,
            "lon":19.156653
        },
        {
            "id":"F03265",
            "name":"Rákóczi út",
            "lat":47.52449,
            "lon":19.157026
        },
        {
            "id":"F03266",
            "name":"Batthyány utca",
            "lat":47.518424,
            "lon":19.161236
        },
        {
            "id":"F03267",
            "name":"Rákosi út",
            "lat":47.517974,
            "lon":19.161209
        },
        {
            "id":"F03268",
            "name":"Batthyány utca",
            "lat":47.518468,
            "lon":19.161582
        },
        {
            "id":"F03269",
            "name":"Rákosi út",
            "lat":47.518406,
            "lon":19.160612
        },
        {
            "id":"F03270",
            "name":"Budapesti út",
            "lat":47.515435,
            "lon":19.163752
        },
        {
            "id":"F03271",
            "name":"Budapesti út",
            "lat":47.514904,
            "lon":19.164004
        },
        {
            "id":"F03272",
            "name":"Veres Péter út",
            "lat":47.508186,
            "lon":19.172007
        },
        {
            "id":"F03273",
            "name":"Thököly út",
            "lat":47.508456,
            "lon":19.171848
        },
        {
            "id":"F03274",
            "name":"Lándzsa utca",
            "lat":47.507422,
            "lon":19.171023
        },
        {
            "id":"F03275",
            "name":"Thököly út",
            "lat":47.507888,
            "lon":19.173055
        },
        {
            "id":"F03276",
            "name":"Pálya utca",
            "lat":47.522305,
            "lon":19.154014
        },
        {
            "id":"F03277",
            "name":"Pálya utca",
            "lat":47.521958,
            "lon":19.152905
        },
        {
            "id":"F03278",
            "name":"Csömöri út",
            "lat":47.522129,
            "lon":19.152201
        },
        {
            "id":"F03279",
            "name":"Csömöri út",
            "lat":47.520781,
            "lon":19.151243
        },
        {
            "id":"F03280",
            "name":"Rózsa utca",
            "lat":47.520565,
            "lon":19.151282
        },
        {
            "id":"F03281",
            "name":"Rákosszentmihály vasútállomás",
            "lat":47.520064,
            "lon":19.148174
        },
        {
            "id":"F03282",
            "name":"Rákosi út",
            "lat":47.516487,
            "lon":19.155324
        },
        {
            "id":"F03283",
            "name":"Rózsa utca",
            "lat":47.516126,
            "lon":19.156159
        },
        {
            "id":"F03284",
            "name":"Raktárak",
            "lat":47.536893,
            "lon":19.246097
        },
        {
            "id":"F03285",
            "name":"Raktárak",
            "lat":47.536247,
            "lon":19.244766
        },
        {
            "id":"F03286",
            "name":"Cinkotai autóbuszgarázs",
            "lat":47.499128,
            "lon":19.238311
        },
        {
            "id":"F03287",
            "name":"Cinkotai autóbuszgarázs",
            "lat":47.499019,
            "lon":19.23851
        },
        {
            "id":"F03289",
            "name":"Cinkotai autóbuszgarázs",
            "lat":47.498507,
            "lon":19.238163
        },
        {
            "id":"F03290",
            "name":"Injekcióüzem",
            "lat":47.495937,
            "lon":19.231557
        },
        {
            "id":"F03291",
            "name":"Injekcióüzem",
            "lat":47.496233,
            "lon":19.232023
        },
        {
            "id":"F03292",
            "name":"Árpádföld, Dezsőfia utca",
            "lat":47.536467,
            "lon":19.200816
        },
        {
            "id":"F03293",
            "name":"Cinkota alsó",
            "lat":47.526787,
            "lon":19.220921
        },
        {
            "id":"F03294",
            "name":"Cinkota alsó",
            "lat":47.525941,
            "lon":19.221051
        },
        {
            "id":"F03295",
            "name":"Állás utca",
            "lat":47.529388,
            "lon":19.194076
        },
        {
            "id":"F03296",
            "name":"Állás utca",
            "lat":47.529171,
            "lon":19.194832
        },
        {
            "id":"F03297",
            "name":"Állás utca",
            "lat":47.529494,
            "lon":19.194966
        },
        {
            "id":"F03298",
            "name":"Menyhért utca",
            "lat":47.531699,
            "lon":19.200975
        },
        {
            "id":"F03299",
            "name":"Árpádföld, Bekecs utca",
            "lat":47.533606,
            "lon":19.20802
        },
        {
            "id":"F03300",
            "name":"Ostoros út 61.",
            "lat":47.523693,
            "lon":19.208176
        },
        {
            "id":"F03301",
            "name":"Ostoros út 40.",
            "lat":47.523187,
            "lon":19.209688
        },
        {
            "id":"F03302",
            "name":"Csókakő utca",
            "lat":47.521966,
            "lon":19.214996
        },
        {
            "id":"F03303",
            "name":"Csókakő utca",
            "lat":47.521794,
            "lon":19.215712
        },
        {
            "id":"F03304",
            "name":"Cinkota H",
            "lat":47.521133,
            "lon":19.218685
        },
        {
            "id":"F03305",
            "name":"Vidámvásár utca",
            "lat":47.520008,
            "lon":19.219212
        },
        {
            "id":"F03306",
            "name":"Vidámvásár utca",
            "lat":47.520116,
            "lon":19.219146
        },
        {
            "id":"F03308",
            "name":"Mátyásföld, repülőtér H",
            "lat":47.511632,
            "lon":19.193615
        },
        {
            "id":"F03309",
            "name":"Mátyásföld, repülőtér H",
            "lat":47.511569,
            "lon":19.193854
        },
        {
            "id":"F03311",
            "name":"Pilóta utca",
            "lat":47.505349,
            "lon":19.197952
        },
        {
            "id":"F03313",
            "name":"Pilóta utca",
            "lat":47.505528,
            "lon":19.198643
        },
        {
            "id":"F03314",
            "name":"Diósy Lajos utca",
            "lat":47.506832,
            "lon":19.204926
        },
        {
            "id":"F03315",
            "name":"Diósy Lajos utca",
            "lat":47.506518,
            "lon":19.204473
        },
        {
            "id":"F03316",
            "name":"Újszász utca",
            "lat":47.509139,
            "lon":19.208291
        },
        {
            "id":"F03317",
            "name":"Újszász utca",
            "lat":47.508905,
            "lon":19.20841
        },
        {
            "id":"F03318",
            "name":"Bökényföldi út",
            "lat":47.508724,
            "lon":19.209352
        },
        {
            "id":"F03319",
            "name":"Bökényföldi út",
            "lat":47.508796,
            "lon":19.209246
        },
        {
            "id":"F03320",
            "name":"Hunyadvár utca",
            "lat":47.512176,
            "lon":19.204251
        },
        {
            "id":"F03321",
            "name":"Hunyadvár utca",
            "lat":47.511879,
            "lon":19.20429
        },
        {
            "id":"F03322",
            "name":"Bökényföldi út",
            "lat":47.514508,
            "lon":19.203036
        },
        {
            "id":"F03323",
            "name":"Veres Péter út",
            "lat":47.514148,
            "lon":19.202956
        },
        {
            "id":"F03324",
            "name":"Bökényföldi út",
            "lat":47.514229,
            "lon":19.202518
        },
        {
            "id":"F03325",
            "name":"Anilin utca",
            "lat":47.513494,
            "lon":19.219868
        },
        {
            "id":"F03326",
            "name":"Anilin utca",
            "lat":47.513262,
            "lon":19.219151
        },
        {
            "id":"F03327",
            "name":"Vidámvásár utca (Georgina utca)",
            "lat":47.518477,
            "lon":19.226059
        },
        {
            "id":"F03328",
            "name":"Georgina utca",
            "lat":47.518295,
            "lon":19.227359
        },
        {
            "id":"F03329",
            "name":"Batthyány Ilona utca",
            "lat":47.519172,
            "lon":19.230283
        },
        {
            "id":"F03330",
            "name":"Cinkota, Lassú utca",
            "lat":47.520832,
            "lon":19.227009
        },
        {
            "id":"F03331",
            "name":"Rózsalevél utca",
            "lat":47.52257,
            "lon":19.231437
        },
        {
            "id":"F03332",
            "name":"Ilonatelep H (Georgina utca)",
            "lat":47.524759,
            "lon":19.229479
        },
        {
            "id":"F03333",
            "name":"Ilonatelep H",
            "lat":47.525893,
            "lon":19.229231
        },
        {
            "id":"F03334",
            "name":"Ilonatelep H",
            "lat":47.525903,
            "lon":19.22854
        },
        {
            "id":"F03335",
            "name":"Simongát utca",
            "lat":47.51722,
            "lon":19.235986
        },
        {
            "id":"F03336",
            "name":"Nagytarcsai út",
            "lat":47.516994,
            "lon":19.236622
        },
        {
            "id":"F03337",
            "name":"Erdei bekötőút",
            "lat":47.507858,
            "lon":19.235249
        },
        {
            "id":"F03338",
            "name":"Erdei bekötőút",
            "lat":47.507597,
            "lon":19.235394
        },
        {
            "id":"F03339",
            "name":"Margit utca",
            "lat":47.517698,
            "lon":19.19087
        },
        {
            "id":"F03340",
            "name":"Margit utca",
            "lat":47.517231,
            "lon":19.190643
        },
        {
            "id":"F03341",
            "name":"Centenáriumi lakótelep",
            "lat":47.516245,
            "lon":19.187985
        },
        {
            "id":"F03342",
            "name":"Szent Korona utca",
            "lat":47.529649,
            "lon":19.178724
        },
        {
            "id":"F03343",
            "name":"Szent Korona utca",
            "lat":47.530261,
            "lon":19.178274
        },
        {
            "id":"F03344",
            "name":"Garat utca",
            "lat":47.505927,
            "lon":19.181268
        },
        {
            "id":"F03345",
            "name":"Garat utca",
            "lat":47.506493,
            "lon":19.18115
        },
        {
            "id":"F03346",
            "name":"Vörösmarty utca",
            "lat":47.532337,
            "lon":19.163125
        },
        {
            "id":"F03347",
            "name":"Péterke utca",
            "lat":47.533149,
            "lon":19.185692
        },
        {
            "id":"F03348",
            "name":"Péterke utca",
            "lat":47.533329,
            "lon":19.185015
        },
        {
            "id":"F03349",
            "name":"Baross utca",
            "lat":47.5335,
            "lon":19.168879
        },
        {
            "id":"F03350",
            "name":"Baross utca",
            "lat":47.532987,
            "lon":19.169555
        },
        {
            "id":"F03351",
            "name":"Szilas-patak",
            "lat":47.530143,
            "lon":19.187012
        },
        {
            "id":"F03352",
            "name":"Ida utca",
            "lat":47.526308,
            "lon":19.182036
        },
        {
            "id":"F03353",
            "name":"Ida utca",
            "lat":47.52602,
            "lon":19.182473
        },
        {
            "id":"F03354",
            "name":"Sasvár utca",
            "lat":47.51816,
            "lon":19.181073
        },
        {
            "id":"F03355",
            "name":"Sasvár utca",
            "lat":47.514336,
            "lon":19.173548
        },
        {
            "id":"F03356",
            "name":"Sasvár utca",
            "lat":47.514616,
            "lon":19.173058
        },
        {
            "id":"F03357",
            "name":"Szent Korona utca",
            "lat":47.526079,
            "lon":19.169273
        },
        {
            "id":"F03358",
            "name":"Diófa utca",
            "lat":47.525109,
            "lon":19.17607
        },
        {
            "id":"F03359",
            "name":"Szent Korona utca",
            "lat":47.523817,
            "lon":19.164528
        },
        {
            "id":"F03360",
            "name":"Szent Korona utca",
            "lat":47.523538,
            "lon":19.164979
        },
        {
            "id":"F03361",
            "name":"Baross utca",
            "lat":47.526651,
            "lon":19.15472
        },
        {
            "id":"F03362",
            "name":"Baross utca",
            "lat":47.526273,
            "lon":19.155264
        },
        {
            "id":"F03363",
            "name":"Szent Korona utca",
            "lat":47.520306,
            "lon":19.158691
        },
        {
            "id":"F03364",
            "name":"Szent Korona utca",
            "lat":47.520603,
            "lon":19.158559
        },
        {
            "id":"F03365",
            "name":"Őrmester utca",
            "lat":47.511995,
            "lon":19.167383
        },
        {
            "id":"F03366",
            "name":"Sasvár utca",
            "lat":47.512067,
            "lon":19.167476
        },
        {
            "id":"F03367",
            "name":"Sashalmi tér",
            "lat":47.509591,
            "lon":19.170457
        },
        {
            "id":"F03368",
            "name":"Sashalmi tér",
            "lat":47.50969,
            "lon":19.170165
        },
        {
            "id":"F03369",
            "name":"Baross utca",
            "lat":47.524101,
            "lon":19.150359
        },
        {
            "id":"F03370",
            "name":"Baross utca",
            "lat":47.524515,
            "lon":19.149789
        },
        {
            "id":"F03371",
            "name":"Szent Korona utcai lakótelep",
            "lat":47.518791,
            "lon":19.153204
        },
        {
            "id":"F03372",
            "name":"Szent Korona utcai lakótelep",
            "lat":47.518179,
            "lon":19.153654
        },
        {
            "id":"F03373",
            "name":"Szabadságtelep H",
            "lat":47.535337,
            "lon":19.204811
        },
        {
            "id":"F03374",
            "name":"Mazsola utca",
            "lat":47.535445,
            "lon":19.198037
        },
        {
            "id":"F03375",
            "name":"Rozsos utca",
            "lat":47.534047,
            "lon":19.194142
        },
        {
            "id":"F03376",
            "name":"Muzsika utca",
            "lat":47.532126,
            "lon":19.204655
        },
        {
            "id":"F03377",
            "name":"Felsőmalom utca",
            "lat":47.526356,
            "lon":19.201305
        },
        {
            "id":"F03378",
            "name":"Felsőmalom utca",
            "lat":47.525968,
            "lon":19.201941
        },
        {
            "id":"F03379",
            "name":"Cinkota H",
            "lat":47.519398,
            "lon":19.21755
        },
        {
            "id":"F03380",
            "name":"Cinkota H",
            "lat":47.518958,
            "lon":19.216925
        },
        {
            "id":"F03382",
            "name":"Papír utca",
            "lat":47.510554,
            "lon":19.213141
        },
        {
            "id":"F03383",
            "name":"Papír utca",
            "lat":47.510347,
            "lon":19.212928
        },
        {
            "id":"F03384",
            "name":"Farkashalom utca",
            "lat":47.512015,
            "lon":19.216558
        },
        {
            "id":"F03385",
            "name":"Farkashalom utca",
            "lat":47.512051,
            "lon":19.216385
        },
        {
            "id":"F03386",
            "name":"Cinke utca",
            "lat":47.51725,
            "lon":19.222881
        },
        {
            "id":"F03387",
            "name":"Cinke utca",
            "lat":47.517007,
            "lon":19.222867
        },
        {
            "id":"F03388",
            "name":"Jókai Mór utca (Újszász utca)",
            "lat":47.504957,
            "lon":19.194553
        },
        {
            "id":"F03389",
            "name":"Jókai Mór utca",
            "lat":47.505038,
            "lon":19.19446
        },
        {
            "id":"F03390",
            "name":"Alsómalom utca",
            "lat":47.524957,
            "lon":19.204501
        },
        {
            "id":"F03391",
            "name":"Alsómalom utca",
            "lat":47.524579,
            "lon":19.205111
        },
        {
            "id":"F03392",
            "name":"Jókai Mór utca (Rendőrség)",
            "lat":47.510801,
            "lon":19.189511
        },
        {
            "id":"F03393",
            "name":"Jókai Mór utca (Rendőrség)",
            "lat":47.510952,
            "lon":19.190985
        },
        {
            "id":"F03394",
            "name":"Csinszka utca",
            "lat":47.515636,
            "lon":19.206678
        },
        {
            "id":"F03395",
            "name":"Csinszka utca",
            "lat":47.515394,
            "lon":19.206252
        },
        {
            "id":"F03396",
            "name":"Mátyásföld, Imre utca H",
            "lat":47.513486,
            "lon":19.20006
        },
        {
            "id":"F03397",
            "name":"Mátyásföld, Imre utca H",
            "lat":47.513755,
            "lon":19.200618
        },
        {
            "id":"F03398",
            "name":"Műkő utca",
            "lat":47.522843,
            "lon":19.223789
        },
        {
            "id":"F03399",
            "name":"Nebántsvirág utca",
            "lat":47.505996,
            "lon":19.211401
        },
        {
            "id":"F03400",
            "name":"Petőfi tér",
            "lat":47.506491,
            "lon":19.211044
        },
        {
            "id":"F03401",
            "name":"Zsemlékes út",
            "lat":47.502888,
            "lon":19.214418
        },
        {
            "id":"F03402",
            "name":"Zsemlékes út",
            "lat":47.503167,
            "lon":19.214313
        },
        {
            "id":"F03403",
            "name":"EGIS Gyógyszergyár",
            "lat":47.497144,
            "lon":19.224394
        },
        {
            "id":"F03404",
            "name":"EGIS Gyógyszergyár",
            "lat":47.496377,
            "lon":19.225878
        },
        {
            "id":"F03405",
            "name":"Cinkotai köztemető",
            "lat":47.530873,
            "lon":19.236552
        },
        {
            "id":"F03406",
            "name":"Cinkotai köztemető",
            "lat":47.530613,
            "lon":19.235901
        },
        {
            "id":"F03407",
            "name":"Gida utca",
            "lat":47.514666,
            "lon":19.191924
        },
        {
            "id":"F03408",
            "name":"Gida utca",
            "lat":47.514945,
            "lon":19.191407
        },
        {
            "id":"F03409",
            "name":"Árpádföld",
            "lat":47.533231,
            "lon":19.212043
        },
        {
            "id":"F03410",
            "name":"Árpádföld",
            "lat":47.532726,
            "lon":19.213064
        },
        {
            "id":"F03411",
            "name":"Szabadságtelep",
            "lat":47.537862,
            "lon":19.206293
        },
        {
            "id":"F03412",
            "name":"Szabadságtelep",
            "lat":47.536945,
            "lon":19.206077
        },
        {
            "id":"F03413",
            "name":"Cinkota",
            "lat":47.519435,
            "lon":19.217338
        },
        {
            "id":"F03414",
            "name":"Cinkota",
            "lat":47.519461,
            "lon":19.217497
        },
        {
            "id":"F03415",
            "name":"Mátyásföld alsó",
            "lat":47.515986,
            "lon":19.207343
        },
        {
            "id":"F03416",
            "name":"Mátyásföld alsó",
            "lat":47.515986,
            "lon":19.207568
        },
        {
            "id":"F03417",
            "name":"Mátyásföld, Imre utca",
            "lat":47.513783,
            "lon":19.20026
        },
        {
            "id":"F03418",
            "name":"Mátyásföld, Imre utca",
            "lat":47.513308,
            "lon":19.198904
        },
        {
            "id":"F03419",
            "name":"Mátyásföld, repülőtér",
            "lat":47.512063,
            "lon":19.194665
        },
        {
            "id":"F03420",
            "name":"Mátyásföld, repülőtér",
            "lat":47.511651,
            "lon":19.193443
        },
        {
            "id":"F03421",
            "name":"Ilonatelep",
            "lat":47.526924,
            "lon":19.229766
        },
        {
            "id":"F03422",
            "name":"Ilonatelep",
            "lat":47.526298,
            "lon":19.229032
        },
        {
            "id":"F03423",
            "name":"Nagyicce",
            "lat":47.50703,
            "lon":19.167597
        },
        {
            "id":"F03424",
            "name":"Nagyicce",
            "lat":47.507003,
            "lon":19.167783
        },
        {
            "id":"F03425",
            "name":"Sashalom",
            "lat":47.509113,
            "lon":19.179404
        },
        {
            "id":"F03426",
            "name":"Sashalom",
            "lat":47.508791,
            "lon":19.17789
        },
        {
            "id":"F03427",
            "name":"Frangepán utca",
            "lat":47.455203,
            "lon":19.199472
        },
        {
            "id":"F03428",
            "name":"Frangepán utca",
            "lat":47.456017,
            "lon":19.201142
        },
        {
            "id":"F03429",
            "name":"Lőrinci út",
            "lat":47.453165,
            "lon":19.220654
        },
        {
            "id":"F03430",
            "name":"Lőrinci út",
            "lat":47.453427,
            "lon":19.219952
        },
        {
            "id":"F03431",
            "name":"Bélatelepi út",
            "lat":47.450738,
            "lon":19.224996
        },
        {
            "id":"F03432",
            "name":"Baross utca",
            "lat":47.450755,
            "lon":19.226044
        },
        {
            "id":"F03433",
            "name":"Ebergény utca",
            "lat":47.490945,
            "lon":19.30246
        },
        {
            "id":"F03434",
            "name":"Ebergény utca",
            "lat":47.490736,
            "lon":19.303308
        },
        {
            "id":"F03435",
            "name":"Pöröly utca",
            "lat":47.491523,
            "lon":19.2973
        },
        {
            "id":"F03436",
            "name":"Pöröly utca",
            "lat":47.491406,
            "lon":19.297406
        },
        {
            "id":"F03437",
            "name":"Sági utca",
            "lat":47.473843,
            "lon":19.273178
        },
        {
            "id":"F03438",
            "name":"Sági utca",
            "lat":47.473572,
            "lon":19.273747
        },
        {
            "id":"F03439",
            "name":"Czeglédi Mihály utca",
            "lat":47.489479,
            "lon":19.289713
        },
        {
            "id":"F03440",
            "name":"Czeglédi Mihály utca",
            "lat":47.489864,
            "lon":19.290803
        },
        {
            "id":"F03441",
            "name":"Rákoscsaba vasútállomás",
            "lat":47.491105,
            "lon":19.281837
        },
        {
            "id":"F03442",
            "name":"Rákoscsaba vasútállomás",
            "lat":47.491744,
            "lon":19.28188
        },
        {
            "id":"F03443",
            "name":"Aranykút utca",
            "lat":47.493901,
            "lon":19.278028
        },
        {
            "id":"F03444",
            "name":"Színes utca",
            "lat":47.490667,
            "lon":19.306068
        },
        {
            "id":"F03445",
            "name":"Színes utca",
            "lat":47.490705,
            "lon":19.305272
        },
        {
            "id":"F03446",
            "name":"Hősök tere",
            "lat":47.489215,
            "lon":19.259429
        },
        {
            "id":"F03447",
            "name":"Hősök tere",
            "lat":47.490006,
            "lon":19.259763
        },
        {
            "id":"F03448",
            "name":"Tura utca",
            "lat":47.489181,
            "lon":19.277025
        },
        {
            "id":"F03449",
            "name":"Vidor utca",
            "lat":47.495346,
            "lon":19.240607
        },
        {
            "id":"F03450",
            "name":"Vidor utca",
            "lat":47.494896,
            "lon":19.240711
        },
        {
            "id":"F03451",
            "name":"Cinkotai út",
            "lat":47.491492,
            "lon":19.243393
        },
        {
            "id":"F03452",
            "name":"Gyöngytyúk utca",
            "lat":47.491043,
            "lon":19.24302
        },
        {
            "id":"F03453",
            "name":"Gyöngytyúk utca",
            "lat":47.490628,
            "lon":19.243416
        },
        {
            "id":"F03454",
            "name":"Liget sor",
            "lat":47.48854,
            "lon":19.244059
        },
        {
            "id":"F03455",
            "name":"Liget sor",
            "lat":47.487632,
            "lon":19.243989
        },
        {
            "id":"F03456",
            "name":"Liszt Ferenc utca",
            "lat":47.487308,
            "lon":19.249429
        },
        {
            "id":"F03457",
            "name":"Rákosliget vasútállomás",
            "lat":47.485196,
            "lon":19.258577
        },
        {
            "id":"F03458",
            "name":"IV. utca",
            "lat":47.487326,
            "lon":19.259089
        },
        {
            "id":"F03459",
            "name":"Rákosliget vasútállomás",
            "lat":47.486545,
            "lon":19.258728
        },
        {
            "id":"F03460",
            "name":"Harsona utca",
            "lat":47.490687,
            "lon":19.270701
        },
        {
            "id":"F03461",
            "name":"Rákoscsaba-Újtelep vasútállomás",
            "lat":47.488136,
            "lon":19.273544
        },
        {
            "id":"F03462",
            "name":"Bártfai utca",
            "lat":47.492832,
            "lon":19.268494
        },
        {
            "id":"F03463",
            "name":"Bártfai utca",
            "lat":47.493163,
            "lon":19.26904
        },
        {
            "id":"F03464",
            "name":"Ároktő út",
            "lat":47.49149,
            "lon":19.264759
        },
        {
            "id":"F03465",
            "name":"Ároktő út",
            "lat":47.491543,
            "lon":19.265184
        },
        {
            "id":"F03466",
            "name":"XVII. utca",
            "lat":47.492191,
            "lon":19.259772
        },
        {
            "id":"F03468",
            "name":"XVIII. utca",
            "lat":47.491983,
            "lon":19.2607
        },
        {
            "id":"F03469",
            "name":"XVIII. utca",
            "lat":47.492541,
            "lon":19.260371
        },
        {
            "id":"F03471",
            "name":"Tarack utca",
            "lat":47.492692,
            "lon":19.251572
        },
        {
            "id":"F03472",
            "name":"Tarack utca",
            "lat":47.492628,
            "lon":19.251838
        },
        {
            "id":"F03473",
            "name":"Egészségház",
            "lat":47.478175,
            "lon":19.255869
        },
        {
            "id":"F03474",
            "name":"Szárny utca",
            "lat":47.480964,
            "lon":19.265353
        },
        {
            "id":"F03475",
            "name":"Szárny utca",
            "lat":47.480552,
            "lon":19.264476
        },
        {
            "id":"F03476",
            "name":"Szabadság sugárút",
            "lat":47.482998,
            "lon":19.274225
        },
        {
            "id":"F03477",
            "name":"Szabadság sugárút",
            "lat":47.482613,
            "lon":19.273228
        },
        {
            "id":"F03478",
            "name":"Lemberg utca",
            "lat":47.483566,
            "lon":19.278314
        },
        {
            "id":"F03479",
            "name":"Péceli út",
            "lat":47.484007,
            "lon":19.278131
        },
        {
            "id":"F03480",
            "name":"Lemberg utca",
            "lat":47.484249,
            "lon":19.27857
        },
        {
            "id":"F03481",
            "name":"Lemberg utca",
            "lat":47.484553,
            "lon":19.279181
        },
        {
            "id":"F03482",
            "name":"Csaba vezér tér",
            "lat":47.486806,
            "lon":19.286317
        },
        {
            "id":"F03483",
            "name":"Csaba vezér tér",
            "lat":47.486869,
            "lon":19.286224
        },
        {
            "id":"F03484",
            "name":"Csaba vezér tér",
            "lat":47.4863,
            "lon":19.287337
        },
        {
            "id":"F03485",
            "name":"Csaba vezér tér",
            "lat":47.487873,
            "lon":19.287742
        },
        {
            "id":"F03486",
            "name":"Lemberg utca",
            "lat":47.480628,
            "lon":19.280849
        },
        {
            "id":"F03487",
            "name":"Csabagyöngye utca",
            "lat":47.480693,
            "lon":19.280239
        },
        {
            "id":"F03488",
            "name":"Alsódabas utca",
            "lat":47.483543,
            "lon":19.28962
        },
        {
            "id":"F03489",
            "name":"Alsódabas utca",
            "lat":47.483013,
            "lon":19.289325
        },
        {
            "id":"F03490",
            "name":"Alsódabas utca",
            "lat":47.482768,
            "lon":19.290041
        },
        {
            "id":"F03491",
            "name":"Óvónő utca",
            "lat":47.485303,
            "lon":19.281984
        },
        {
            "id":"F03492",
            "name":"Óvónő utca",
            "lat":47.485617,
            "lon":19.282583
        },
        {
            "id":"F03493",
            "name":"Regélő utca",
            "lat":47.477492,
            "lon":19.292484
        },
        {
            "id":"F03494",
            "name":"Regélő utca",
            "lat":47.477249,
            "lon":19.292749
        },
        {
            "id":"F03495",
            "name":"Nagyszentmiklósi út",
            "lat":47.472099,
            "lon":19.294808
        },
        {
            "id":"F03496",
            "name":"Nagyszentmiklósi út",
            "lat":47.47182,
            "lon":19.294979
        },
        {
            "id":"F03498",
            "name":"Kucorgó tér",
            "lat":47.469078,
            "lon":19.294144
        },
        {
            "id":"F03499",
            "name":"Kucorgó tér",
            "lat":47.469113,
            "lon":19.294608
        },
        {
            "id":"F03500",
            "name":"Nyomdász utca",
            "lat":47.465584,
            "lon":19.308268
        },
        {
            "id":"F03501",
            "name":"Nyomdász utca",
            "lat":47.465106,
            "lon":19.309074
        },
        {
            "id":"F03502",
            "name":"Pesti út",
            "lat":47.46418,
            "lon":19.312638
        },
        {
            "id":"F03503",
            "name":"Sáránd utca",
            "lat":47.464045,
            "lon":19.312544
        },
        {
            "id":"F03504",
            "name":"Rákoskert sugárút",
            "lat":47.461075,
            "lon":19.313511
        },
        {
            "id":"F03505",
            "name":"Sáránd utca",
            "lat":47.46103,
            "lon":19.313657
        },
        {
            "id":"F03506",
            "name":"Zrínyi utca",
            "lat":47.459648,
            "lon":19.29979
        },
        {
            "id":"F03507",
            "name":"Rákoskert sugárút",
            "lat":47.459629,
            "lon":19.300493
        },
        {
            "id":"F03508",
            "name":"Szabadság sugárút",
            "lat":47.471333,
            "lon":19.286911
        },
        {
            "id":"F03509",
            "name":"Szabadság sugárút",
            "lat":47.47128,
            "lon":19.286353
        },
        {
            "id":"F03510",
            "name":"Tápióbicske utca",
            "lat":47.472367,
            "lon":19.278279
        },
        {
            "id":"F03511",
            "name":"Tápióbicske utca",
            "lat":47.472006,
            "lon":19.279233
        },
        {
            "id":"F03512",
            "name":"Oroszvár utca",
            "lat":47.474468,
            "lon":19.270925
        },
        {
            "id":"F03513",
            "name":"Oroszvár utca",
            "lat":47.474578,
            "lon":19.270183
        },
        {
            "id":"F03514",
            "name":"Mezőtárkány utca",
            "lat":47.477072,
            "lon":19.26417
        },
        {
            "id":"F03515",
            "name":"Mezőtárkány utca",
            "lat":47.477226,
            "lon":19.263467
        },
        {
            "id":"F03516",
            "name":"Széchenyi utca",
            "lat":47.473538,
            "lon":19.253688
        },
        {
            "id":"F03517",
            "name":"Széchenyi utca",
            "lat":47.473888,
            "lon":19.254087
        },
        {
            "id":"F03518",
            "name":"Ferihegyi út",
            "lat":47.467404,
            "lon":19.248398
        },
        {
            "id":"F03519",
            "name":"Szabadság utca",
            "lat":47.467557,
            "lon":19.247961
        },
        {
            "id":"F03520",
            "name":"Kerülő utca",
            "lat":47.463664,
            "lon":19.247058
        },
        {
            "id":"F03521",
            "name":"Rákoshegy, Ferihegyi út",
            "lat":47.460535,
            "lon":19.246303
        },
        {
            "id":"F03522",
            "name":"Baross utca",
            "lat":47.462966,
            "lon":19.239627
        },
        {
            "id":"F03523",
            "name":"Melczer utca",
            "lat":47.462958,
            "lon":19.238977
        },
        {
            "id":"F03524",
            "name":"Melczer utca",
            "lat":47.463425,
            "lon":19.239589
        },
        {
            "id":"F03525",
            "name":"Rákoshegy vasútállomás",
            "lat":47.46769,
            "lon":19.243849
        },
        {
            "id":"F03526",
            "name":"Rákoshegy vasútállomás",
            "lat":47.468051,
            "lon":19.243598
        },
        {
            "id":"F03528",
            "name":"Rákoshegy vasútállomás",
            "lat":47.468354,
            "lon":19.245178
        },
        {
            "id":"F03529",
            "name":"Lőrinci út (Szabadság utca)",
            "lat":47.469986,
            "lon":19.237304
        },
        {
            "id":"F03530",
            "name":"Lőrinci út (Szabadság utca)",
            "lat":47.469534,
            "lon":19.238483
        },
        {
            "id":"F03531",
            "name":"Lőrinci út",
            "lat":47.469456,
            "lon":19.23709
        },
        {
            "id":"F03532",
            "name":"Lőrinci út",
            "lat":47.4696,
            "lon":19.237024
        },
        {
            "id":"F03533",
            "name":"Bánya part",
            "lat":47.471018,
            "lon":19.23898
        },
        {
            "id":"F03534",
            "name":"Bánya part",
            "lat":47.471574,
            "lon":19.239725
        },
        {
            "id":"F03535",
            "name":"Bulyovszky utca",
            "lat":47.473864,
            "lon":19.241802
        },
        {
            "id":"F03536",
            "name":"Bulyovszky utca",
            "lat":47.474125,
            "lon":19.242228
        },
        {
            "id":"F03537",
            "name":"Árpád fejedelem utca",
            "lat":47.476846,
            "lon":19.244745
        },
        {
            "id":"F03538",
            "name":"Árpád fejedelem utca",
            "lat":47.476055,
            "lon":19.244172
        },
        {
            "id":"F03541",
            "name":"Bakancsos utca",
            "lat":47.482262,
            "lon":19.243903
        },
        {
            "id":"F03542",
            "name":"Bakancsos utca",
            "lat":47.482209,
            "lon":19.243544
        },
        {
            "id":"F03543",
            "name":"Rákoskeresztúr, Kis utcai lakótelep",
            "lat":47.482131,
            "lon":19.241395
        },
        {
            "id":"F03544",
            "name":"Kis utca",
            "lat":47.483314,
            "lon":19.238878
        },
        {
            "id":"F03545",
            "name":"Kis utca",
            "lat":47.483297,
            "lon":19.238321
        },
        {
            "id":"F03546",
            "name":"Borsó utca",
            "lat":47.484213,
            "lon":19.233733
        },
        {
            "id":"F03547",
            "name":"Borsó utca",
            "lat":47.484087,
            "lon":19.233825
        },
        {
            "id":"F03549",
            "name":"509. utca",
            "lat":47.48481,
            "lon":19.2258
        },
        {
            "id":"F03550",
            "name":"Pesti út",
            "lat":47.483984,
            "lon":19.230746
        },
        {
            "id":"F03551",
            "name":"501. utca",
            "lat":47.482238,
            "lon":19.219263
        },
        {
            "id":"F03552",
            "name":"Akadémiaújtelep, 525. tér",
            "lat":47.480735,
            "lon":19.219829
        },
        {
            "id":"F03553",
            "name":"513. utca",
            "lat":47.480462,
            "lon":19.227935
        },
        {
            "id":"F03554",
            "name":"Uszoda",
            "lat":47.479355,
            "lon":19.233888
        },
        {
            "id":"F03556",
            "name":"Szürkebegy utca",
            "lat":47.475497,
            "lon":19.238929
        },
        {
            "id":"F03557",
            "name":"Rákoskeresztúr, Aranylúd utca",
            "lat":47.471743,
            "lon":19.235374
        },
        {
            "id":"F03558",
            "name":"Barátka utca",
            "lat":47.473387,
            "lon":19.230869
        },
        {
            "id":"F03559",
            "name":"Vadkacsa utca",
            "lat":47.477072,
            "lon":19.227565
        },
        {
            "id":"F03561",
            "name":"Melczer utca",
            "lat":47.465476,
            "lon":19.234145
        },
        {
            "id":"F03562",
            "name":"Bocskai István utca",
            "lat":47.456385,
            "lon":19.232508
        },
        {
            "id":"F03563",
            "name":"Bocskai István utca",
            "lat":47.456717,
            "lon":19.233
        },
        {
            "id":"F03564",
            "name":"Orgoványi utca",
            "lat":47.45299,
            "lon":19.228876
        },
        {
            "id":"F03565",
            "name":"Orgoványi utca",
            "lat":47.453457,
            "lon":19.229607
        },
        {
            "id":"F03566",
            "name":"Óvónő utca",
            "lat":47.481629,
            "lon":19.284317
        },
        {
            "id":"F03567",
            "name":"Óvónő utca",
            "lat":47.481789,
            "lon":19.28522
        },
        {
            "id":"F03568",
            "name":"Nyomdok utca",
            "lat":47.466769,
            "lon":19.305408
        },
        {
            "id":"F03569",
            "name":"Nyomdok utca",
            "lat":47.466598,
            "lon":19.305566
        },
        {
            "id":"F03570",
            "name":"Erzsébet körút",
            "lat":47.46028,
            "lon":19.307021
        },
        {
            "id":"F03571",
            "name":"Erzsébet körút",
            "lat":47.460155,
            "lon":19.306556
        },
        {
            "id":"F03572",
            "name":"Ároktő út",
            "lat":47.495779,
            "lon":19.260729
        },
        {
            "id":"F03573",
            "name":"Ananász utca",
            "lat":47.495993,
            "lon":19.261234
        },
        {
            "id":"F03574",
            "name":"Olcsva utca",
            "lat":47.468127,
            "lon":19.301661
        },
        {
            "id":"F03575",
            "name":"Olcsva utca",
            "lat":47.467801,
            "lon":19.302296
        },
        {
            "id":"F03576",
            "name":"Bártfai utca",
            "lat":47.497256,
            "lon":19.264093
        },
        {
            "id":"F03577",
            "name":"Bártfai utca",
            "lat":47.497472,
            "lon":19.264359
        },
        {
            "id":"F03578",
            "name":"Rákoscsaba-Újtelep, Naplás út",
            "lat":47.49901,
            "lon":19.269223
        },
        {
            "id":"F03579",
            "name":"Almásháza utca",
            "lat":47.498874,
            "lon":19.269687
        },
        {
            "id":"F03580",
            "name":"Diadal utca",
            "lat":47.495924,
            "lon":19.274347
        },
        {
            "id":"F03581",
            "name":"Jászágó utca",
            "lat":47.496645,
            "lon":19.273407
        },
        {
            "id":"F03582",
            "name":"Gőzös utca",
            "lat":47.494594,
            "lon":19.287082
        },
        {
            "id":"F03583",
            "name":"Gőzös utca",
            "lat":47.494711,
            "lon":19.286936
        },
        {
            "id":"F03584",
            "name":"Rákoscsaba-Újtelep, Tóalmás utca",
            "lat":47.499416,
            "lon":19.286626
        },
        {
            "id":"F03585",
            "name":"Rózsaszál utca",
            "lat":47.463566,
            "lon":19.29762
        },
        {
            "id":"F03586",
            "name":"Rózsaszál utca",
            "lat":47.463926,
            "lon":19.297316
        },
        {
            "id":"F03587",
            "name":"Bulyovszky utca",
            "lat":47.471229,
            "lon":19.251928
        },
        {
            "id":"F03588",
            "name":"Bulyovszky utca",
            "lat":47.470807,
            "lon":19.251767
        },
        {
            "id":"F03589",
            "name":"Ady Endre utca",
            "lat":47.465841,
            "lon":19.241826
        },
        {
            "id":"F03590",
            "name":"Ady Endre utca",
            "lat":47.466074,
            "lon":19.242212
        },
        {
            "id":"F03591",
            "name":"Vörösmarty utca",
            "lat":47.461737,
            "lon":19.237951
        },
        {
            "id":"F03592",
            "name":"Vörösmarty utca",
            "lat":47.461432,
            "lon":19.237499
        },
        {
            "id":"F03593",
            "name":"Szent kereszt tér",
            "lat":47.480739,
            "lon":19.250837
        },
        {
            "id":"F03594",
            "name":"Szent kereszt tér",
            "lat":47.481173,
            "lon":19.249485
        },
        {
            "id":"F03595",
            "name":"Újlak utca, lakótelep",
            "lat":47.482072,
            "lon":19.233407
        },
        {
            "id":"F03596",
            "name":"Rákóczi Ferenc utca",
            "lat":47.458845,
            "lon":19.23493
        },
        {
            "id":"F03597",
            "name":"Rákóczi Ferenc utca",
            "lat":47.459294,
            "lon":19.235516
        },
        {
            "id":"F03598",
            "name":"Kis Károshíd utca",
            "lat":47.497301,
            "lon":19.286922
        },
        {
            "id":"F03599",
            "name":"Harsona utca",
            "lat":47.497059,
            "lon":19.286801
        },
        {
            "id":"F03600",
            "name":"Homokiszőlők",
            "lat":47.455708,
            "lon":19.215875
        },
        {
            "id":"F03601",
            "name":"Homokiszőlők",
            "lat":47.455564,
            "lon":19.215928
        },
        {
            "id":"F03602",
            "name":"Császárfa utca",
            "lat":47.474503,
            "lon":19.293811
        },
        {
            "id":"F03603",
            "name":"Császárfa utca",
            "lat":47.474197,
            "lon":19.294075
        },
        {
            "id":"F03604",
            "name":"Rákosliget vasútállomás",
            "lat":47.486357,
            "lon":19.258103
        },
        {
            "id":"F03605",
            "name":"Városközpont (Ferihegyi út)",
            "lat":47.480117,
            "lon":19.256805
        },
        {
            "id":"F03610",
            "name":"Városközpont (Ferihegyi út)",
            "lat":47.479838,
            "lon":19.256804
        },
        {
            "id":"F03620",
            "name":"Szent Lőrinc-telep",
            "lat":47.433409,
            "lon":19.174378
        },
        {
            "id":"F03621",
            "name":"Szent Lőrinc-telep",
            "lat":47.433103,
            "lon":19.174338
        },
        {
            "id":"F03622",
            "name":"Ipacsfa utca",
            "lat":47.429485,
            "lon":19.167661
        },
        {
            "id":"F03623",
            "name":"Ipacsfa utca",
            "lat":47.430194,
            "lon":19.169108
        },
        {
            "id":"F03624",
            "name":"Ipacsfa utca",
            "lat":47.429987,
            "lon":19.168922
        },
        {
            "id":"F03625",
            "name":"Besence utca",
            "lat":47.428139,
            "lon":19.164875
        },
        {
            "id":"F03626",
            "name":"Besence utca",
            "lat":47.42812,
            "lon":19.16506
        },
        {
            "id":"F03627",
            "name":"Ipacsfa utca (Közdűlő út)",
            "lat":47.425656,
            "lon":19.173485
        },
        {
            "id":"F03628",
            "name":"Közdűlő út",
            "lat":47.4236,
            "lon":19.169835
        },
        {
            "id":"F03629",
            "name":"Szentlőrinci út (gyorsétterem)",
            "lat":47.424601,
            "lon":19.158836
        },
        {
            "id":"F03631",
            "name":"Szentlőrinci út",
            "lat":47.425276,
            "lon":19.158215
        },
        {
            "id":"F03632",
            "name":"Szentlőrinci út",
            "lat":47.425474,
            "lon":19.157804
        },
        {
            "id":"F03633",
            "name":"Varjú utca",
            "lat":47.43375,
            "lon":19.182943
        },
        {
            "id":"F03634",
            "name":"Varjú utca",
            "lat":47.434083,
            "lon":19.182904
        },
        {
            "id":"F03635",
            "name":"Obszervatórium",
            "lat":47.430206,
            "lon":19.182735
        },
        {
            "id":"F03636",
            "name":"Obszervatórium",
            "lat":47.429918,
            "lon":19.182827
        },
        {
            "id":"F03637",
            "name":"Gilice tér",
            "lat":47.432119,
            "lon":19.185073
        },
        {
            "id":"F03638",
            "name":"Gilice tér",
            "lat":47.432101,
            "lon":19.185643
        },
        {
            "id":"F03639",
            "name":"Dalmady Győző utca",
            "lat":47.433529,
            "lon":19.194542
        },
        {
            "id":"F03640",
            "name":"Dalmady Győző utca",
            "lat":47.433385,
            "lon":19.194329
        },
        {
            "id":"F03641",
            "name":"Péterhalmi út",
            "lat":47.423128,
            "lon":19.189609
        },
        {
            "id":"F03642",
            "name":"Péterhalmi út",
            "lat":47.423353,
            "lon":19.189477
        },
        {
            "id":"F03643",
            "name":"Kettős-Körös utca",
            "lat":47.418773,
            "lon":19.182732
        },
        {
            "id":"F03644",
            "name":"Kettős-Körös utca",
            "lat":47.419583,
            "lon":19.18284
        },
        {
            "id":"F03645",
            "name":"Szálfa utca",
            "lat":47.415486,
            "lon":19.186474
        },
        {
            "id":"F03646",
            "name":"Szálfa utca",
            "lat":47.415116,
            "lon":19.186924
        },
        {
            "id":"F03647",
            "name":"Vezér utca",
            "lat":47.411011,
            "lon":19.19016
        },
        {
            "id":"F03648",
            "name":"Vezér utca",
            "lat":47.410723,
            "lon":19.190543
        },
        {
            "id":"F03649",
            "name":"Kisfaludy utca (Nemes utca)",
            "lat":47.408894,
            "lon":19.19295
        },
        {
            "id":"F03650",
            "name":"Kisfaludy utca",
            "lat":47.408991,
            "lon":19.193891
        },
        {
            "id":"F03651",
            "name":"Kisfaludy utca",
            "lat":47.409027,
            "lon":19.194103
        },
        {
            "id":"F03652",
            "name":"Kisfaludy utca",
            "lat":47.408218,
            "lon":19.193677
        },
        {
            "id":"F03653",
            "name":"Damjanich utca",
            "lat":47.411541,
            "lon":19.198019
        },
        {
            "id":"F03654",
            "name":"Damjanich utca",
            "lat":47.411182,
            "lon":19.197263
        },
        {
            "id":"F03655",
            "name":"Szigeti Kálmán utca",
            "lat":47.405073,
            "lon":19.198027
        },
        {
            "id":"F03656",
            "name":"Szigeti Kálmán utca",
            "lat":47.404235,
            "lon":19.198966
        },
        {
            "id":"F03657",
            "name":"Ár utca",
            "lat":47.3969,
            "lon":19.195302
        },
        {
            "id":"F03658",
            "name":"Paula utca",
            "lat":47.39663,
            "lon":19.195871
        },
        {
            "id":"F03659",
            "name":"Pestszentimre, Ültetvény utca",
            "lat":47.396789,
            "lon":19.175112
        },
        {
            "id":"F03661",
            "name":"Vásáros tér",
            "lat":47.410317,
            "lon":19.184076
        },
        {
            "id":"F03662",
            "name":"Törvény utca",
            "lat":47.408881,
            "lon":19.180932
        },
        {
            "id":"F03663",
            "name":"Ady Endre utca",
            "lat":47.405858,
            "lon":19.189046
        },
        {
            "id":"F03664",
            "name":"Ady Endre utca",
            "lat":47.406361,
            "lon":19.189975
        },
        {
            "id":"F03665",
            "name":"Pestszentimre vasútállomás (Vasút utca)",
            "lat":47.404504,
            "lon":19.185823
        },
        {
            "id":"F03672",
            "name":"Pestszentimre vasútállomás (Dózsa Gy.u.)",
            "lat":47.403542,
            "lon":19.185436
        },
        {
            "id":"F03674",
            "name":"Pestszentimre felső vasútállomás",
            "lat":47.41399,
            "lon":19.172622
        },
        {
            "id":"F03675",
            "name":"Pestszentimre felső vasútállomás",
            "lat":47.413099,
            "lon":19.173747
        },
        {
            "id":"F03676",
            "name":"Lajos utca",
            "lat":47.399115,
            "lon":19.178509
        },
        {
            "id":"F03677",
            "name":"Lajos utca",
            "lat":47.398908,
            "lon":19.178482
        },
        {
            "id":"F03678",
            "name":"Besence utca 9.",
            "lat":47.424762,
            "lon":19.168367
        },
        {
            "id":"F03679",
            "name":"Közdűlő út",
            "lat":47.420205,
            "lon":19.1645
        },
        {
            "id":"F03680",
            "name":"Közdűlő út",
            "lat":47.419863,
            "lon":19.165148
        },
        {
            "id":"F03681",
            "name":"Kamiontelep",
            "lat":47.421764,
            "lon":19.162422
        },
        {
            "id":"F03682",
            "name":"Kamiontelep",
            "lat":47.422304,
            "lon":19.161946
        },
        {
            "id":"F03683",
            "name":"Wlassics Gyula utca",
            "lat":47.437446,
            "lon":19.183973
        },
        {
            "id":"F03684",
            "name":"Wlassics Gyula utca",
            "lat":47.438147,
            "lon":19.184001
        },
        {
            "id":"F03685",
            "name":"Dobozi utca",
            "lat":47.435611,
            "lon":19.183464
        },
        {
            "id":"F03686",
            "name":"Dobozi utca",
            "lat":47.435953,
            "lon":19.183412
        },
        {
            "id":"F03687",
            "name":"Törvény utca",
            "lat":47.413163,
            "lon":19.188416
        },
        {
            "id":"F03688",
            "name":"Törvény utca",
            "lat":47.413766,
            "lon":19.18806
        },
        {
            "id":"F03689",
            "name":"Iparvasút",
            "lat":47.436341,
            "lon":19.197042
        },
        {
            "id":"F03690",
            "name":"Iparvasút",
            "lat":47.436431,
            "lon":19.196989
        },
        {
            "id":"F03691",
            "name":"Iparvasút",
            "lat":47.436522,
            "lon":19.196233
        },
        {
            "id":"F03692",
            "name":"Iparvasút",
            "lat":47.43672,
            "lon":19.195942
        },
        {
            "id":"F03693",
            "name":"Csévéző utca",
            "lat":47.452955,
            "lon":19.196743
        },
        {
            "id":"F03694",
            "name":"Gyömrői út",
            "lat":47.453441,
            "lon":19.196373
        },
        {
            "id":"F03695",
            "name":"Csévéző utca",
            "lat":47.453558,
            "lon":19.196798
        },
        {
            "id":"F03696",
            "name":"Csévéző utca",
            "lat":47.452803,
            "lon":19.196279
        },
        {
            "id":"F03697",
            "name":"Fedezék utca",
            "lat":47.452058,
            "lon":19.194845
        },
        {
            "id":"F03698",
            "name":"Fedezék utca",
            "lat":47.452142,
            "lon":19.19509
        },
        {
            "id":"F03699",
            "name":"Pestszentlőrinc, Fedezék utca",
            "lat":47.452165,
            "lon":19.195362
        },
        {
            "id":"F03700",
            "name":"Lőrinci temető",
            "lat":47.44743,
            "lon":19.191636
        },
        {
            "id":"F03701",
            "name":"Lőrinci temető",
            "lat":47.447215,
            "lon":19.190999
        },
        {
            "id":"F03702",
            "name":"Lőrinci temető",
            "lat":47.446629,
            "lon":19.191369
        },
        {
            "id":"F03703",
            "name":"Gárdonyi Géza utca",
            "lat":47.443529,
            "lon":19.189067
        },
        {
            "id":"F03704",
            "name":"Gárdonyi Géza utca",
            "lat":47.443151,
            "lon":19.18896
        },
        {
            "id":"F03705",
            "name":"Regény utca",
            "lat":47.443505,
            "lon":19.186521
        },
        {
            "id":"F03706",
            "name":"Regény utca",
            "lat":47.444152,
            "lon":19.187477
        },
        {
            "id":"F03707",
            "name":"Thököly út",
            "lat":47.443064,
            "lon":19.178776
        },
        {
            "id":"F03708",
            "name":"Thököly út",
            "lat":47.442767,
            "lon":19.179518
        },
        {
            "id":"F03709",
            "name":"Thököly út",
            "lat":47.442776,
            "lon":19.179174
        },
        {
            "id":"F03710",
            "name":"Thököly út",
            "lat":47.442586,
            "lon":19.180061
        },
        {
            "id":"F03711",
            "name":"Pestszentlőrinc, Szarvas csárda tér",
            "lat":47.441626,
            "lon":19.186039
        },
        {
            "id":"F03713",
            "name":"Szarvas csárda tér",
            "lat":47.440259,
            "lon":19.185425
        },
        {
            "id":"F03714",
            "name":"Szarvas csárda tér",
            "lat":47.439483,
            "lon":19.187452
        },
        {
            "id":"F03715",
            "name":"Szarvas csárda tér",
            "lat":47.440455,
            "lon":19.186871
        },
        {
            "id":"F03716",
            "name":"Szarvas csárda tér",
            "lat":47.44033,
            "lon":19.186605
        },
        {
            "id":"F03718",
            "name":"Szarvas csárda tér",
            "lat":47.440313,
            "lon":19.185412
        },
        {
            "id":"F03719",
            "name":"Szarvas csárda tér",
            "lat":47.440006,
            "lon":19.18618
        },
        {
            "id":"F03720",
            "name":"Szarvas csárda tér",
            "lat":47.441016,
            "lon":19.184804
        },
        {
            "id":"F03721",
            "name":"Szarvas csárda tér",
            "lat":47.440997,
            "lon":19.184937
        },
        {
            "id":"F03722",
            "name":"Iker utca",
            "lat":47.435906,
            "lon":19.169161
        },
        {
            "id":"F03723",
            "name":"Iker utca",
            "lat":47.435528,
            "lon":19.168948
        },
        {
            "id":"F03724",
            "name":"Kapocs utca",
            "lat":47.402172,
            "lon":19.201676
        },
        {
            "id":"F03725",
            "name":"Kapocs utca",
            "lat":47.401685,
            "lon":19.202509
        },
        {
            "id":"F03726",
            "name":"Kolozsvár utca (temető)",
            "lat":47.438158,
            "lon":19.157101
        },
        {
            "id":"F03727",
            "name":"Kolozsvár utca (temető)",
            "lat":47.438571,
            "lon":19.157686
        },
        {
            "id":"F03728",
            "name":"Csapó utca",
            "lat":47.441258,
            "lon":19.160475
        },
        {
            "id":"F03729",
            "name":"Csapó utca",
            "lat":47.440907,
            "lon":19.160673
        },
        {
            "id":"F03730",
            "name":"Bozsik Stadion",
            "lat":47.444618,
            "lon":19.155205
        },
        {
            "id":"F03731",
            "name":"Bozsik Stadion",
            "lat":47.444186,
            "lon":19.155324
        },
        {
            "id":"F03732",
            "name":"Kispest vasútállomás",
            "lat":47.447619,
            "lon":19.158566
        },
        {
            "id":"F03733",
            "name":"Kispest vasútállomás",
            "lat":47.447188,
            "lon":19.158234
        },
        {
            "id":"F03734",
            "name":"Lajosmizsei sorompó",
            "lat":47.450594,
            "lon":19.161304
        },
        {
            "id":"F03735",
            "name":"Lajosmizsei sorompó",
            "lat":47.451532,
            "lon":19.15868
        },
        {
            "id":"F03737",
            "name":"Lajosmizsei sorompó",
            "lat":47.451036,
            "lon":19.160098
        },
        {
            "id":"F03738",
            "name":"Tinódi utca",
            "lat":47.449287,
            "lon":19.163953
        },
        {
            "id":"F03739",
            "name":"Tinódi utca",
            "lat":47.449584,
            "lon":19.163516
        },
        {
            "id":"F03740",
            "name":"Tinódi utca",
            "lat":47.449728,
            "lon":19.163145
        },
        {
            "id":"F03741",
            "name":"Tinódi utca",
            "lat":47.449845,
            "lon":19.16304
        },
        {
            "id":"F03742",
            "name":"Hőerőmű",
            "lat":47.456437,
            "lon":19.164314
        },
        {
            "id":"F03743",
            "name":"Hőerőmű",
            "lat":47.455951,
            "lon":19.165135
        },
        {
            "id":"F03744",
            "name":"Csillag utca",
            "lat":47.457258,
            "lon":19.162193
        },
        {
            "id":"F03745",
            "name":"Csillag utca",
            "lat":47.457708,
            "lon":19.161452
        },
        {
            "id":"F03746",
            "name":"Felsőcsatári köz",
            "lat":47.456361,
            "lon":19.176634
        },
        {
            "id":"F03747",
            "name":"Felsőcsatári köz",
            "lat":47.456226,
            "lon":19.176793
        },
        {
            "id":"F03748",
            "name":"Lakatos úti lakótelep",
            "lat":47.452082,
            "lon":19.174343
        },
        {
            "id":"F03749",
            "name":"Lakatos úti lakótelep",
            "lat":47.452271,
            "lon":19.174197
        },
        {
            "id":"F03750",
            "name":"Üllői út",
            "lat":47.447256,
            "lon":19.170181
        },
        {
            "id":"F03751",
            "name":"Lakatos út",
            "lat":47.448123,
            "lon":19.170905
        },
        {
            "id":"F03752",
            "name":"Margó Tivadar utca",
            "lat":47.44815,
            "lon":19.166842
        },
        {
            "id":"F03753",
            "name":"Margó Tivadar utca",
            "lat":47.446692,
            "lon":19.168045
        },
        {
            "id":"F03754",
            "name":"Margó Tivadar utca",
            "lat":47.447267,
            "lon":19.168683
        },
        {
            "id":"F03755",
            "name":"Margó Tivadar utca",
            "lat":47.447943,
            "lon":19.167318
        },
        {
            "id":"F03756",
            "name":"Margó Tivadar utca",
            "lat":47.447898,
            "lon":19.167597
        },
        {
            "id":"F03757",
            "name":"Dembinszky utca",
            "lat":47.443548,
            "lon":19.163424
        },
        {
            "id":"F03758",
            "name":"Havanna utca",
            "lat":47.444352,
            "lon":19.169352
        },
        {
            "id":"F03759",
            "name":"Vörösmarty Mihály utca",
            "lat":47.43968,
            "lon":19.164184
        },
        {
            "id":"F03760",
            "name":"Kondor Béla sétány",
            "lat":47.439156,
            "lon":19.166623
        },
        {
            "id":"F03761",
            "name":"Barta Lajos utca",
            "lat":47.437911,
            "lon":19.16947
        },
        {
            "id":"F03762",
            "name":"Margó Tivadar utca",
            "lat":47.439374,
            "lon":19.172457
        },
        {
            "id":"F03763",
            "name":"Baross utca",
            "lat":47.439501,
            "lon":19.171966
        },
        {
            "id":"F03764",
            "name":"Margó Tivadar utca",
            "lat":47.437775,
            "lon":19.171074
        },
        {
            "id":"F03765",
            "name":"Fiatalság utca",
            "lat":47.436586,
            "lon":19.172649
        },
        {
            "id":"F03766",
            "name":"Kinizsi Pál utca",
            "lat":47.436756,
            "lon":19.173485
        },
        {
            "id":"F03767",
            "name":"Kossuth Lajos utca",
            "lat":47.442924,
            "lon":19.175753
        },
        {
            "id":"F03768",
            "name":"Baross utca",
            "lat":47.444543,
            "lon":19.175306
        },
        {
            "id":"F03769",
            "name":"Baross utca",
            "lat":47.443319,
            "lon":19.175966
        },
        {
            "id":"F03770",
            "name":"Baross utca",
            "lat":47.444075,
            "lon":19.176167
        },
        {
            "id":"F03771",
            "name":"Baross utca",
            "lat":47.444489,
            "lon":19.175584
        },
        {
            "id":"F03772",
            "name":"Baross utca",
            "lat":47.44439,
            "lon":19.175637
        },
        {
            "id":"F03774",
            "name":"Mikszáth Kálmán utca",
            "lat":47.450802,
            "lon":19.177337
        },
        {
            "id":"F03776",
            "name":"Pestszentlőrinc vasútállomás",
            "lat":47.454782,
            "lon":19.18159
        },
        {
            "id":"F03778",
            "name":"Kalász utca",
            "lat":47.393043,
            "lon":19.20055
        },
        {
            "id":"F03779",
            "name":"Kalász utca",
            "lat":47.393098,
            "lon":19.200285
        },
        {
            "id":"F03780",
            "name":"Repülőtéri Rendőr Igazgatóság",
            "lat":47.422865,
            "lon":19.240636
        },
        {
            "id":"F03781",
            "name":"Repülőtéri Rendőr Igazgatóság",
            "lat":47.42328,
            "lon":19.239961
        },
        {
            "id":"F03782",
            "name":"Repülőtér, D porta",
            "lat":47.426551,
            "lon":19.2365
        },
        {
            "id":"F03783",
            "name":"Repülőtér, D porta",
            "lat":47.425956,
            "lon":19.236962
        },
        {
            "id":"F03784",
            "name":"Duna utca",
            "lat":47.433457,
            "lon":19.220683
        },
        {
            "id":"F03785",
            "name":"Duna utca",
            "lat":47.433034,
            "lon":19.220562
        },
        {
            "id":"F03786",
            "name":"Tövishát utca",
            "lat":47.427276,
            "lon":19.172852
        },
        {
            "id":"F03787",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.428881,
            "lon":19.218932
        },
        {
            "id":"F03788",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.429547,
            "lon":19.218338
        },
        {
            "id":"F03789",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.429655,
            "lon":19.218298
        },
        {
            "id":"F03790",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.428755,
            "lon":19.218998
        },
        {
            "id":"F03791",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.429368,
            "lon":19.217873
        },
        {
            "id":"F03792",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.429297,
            "lon":19.217488
        },
        {
            "id":"F03793",
            "name":"Gyergyó utca",
            "lat":47.426108,
            "lon":19.226253
        },
        {
            "id":"F03794",
            "name":"Gyergyó utca",
            "lat":47.426253,
            "lon":19.225617
        },
        {
            "id":"F03795",
            "name":"Ganztelep, Mednyánszky utca",
            "lat":47.423864,
            "lon":19.234635
        },
        {
            "id":"F03796",
            "name":"Kupeczky János utca",
            "lat":47.424816,
            "lon":19.230198
        },
        {
            "id":"F03797",
            "name":"Kupeczky János utca",
            "lat":47.424554,
            "lon":19.230728
        },
        {
            "id":"F03798",
            "name":"Kétújfalu utca",
            "lat":47.419019,
            "lon":19.208536
        },
        {
            "id":"F03799",
            "name":"Alacskai út",
            "lat":47.416971,
            "lon":19.206595
        },
        {
            "id":"F03800",
            "name":"Pestszentimre, Benjámin utca",
            "lat":47.399054,
            "lon":19.205588
        },
        {
            "id":"F03801",
            "name":"Honvéd utca",
            "lat":47.434501,
            "lon":19.200616
        },
        {
            "id":"F03802",
            "name":"Üllői út",
            "lat":47.435273,
            "lon":19.202182
        },
        {
            "id":"F03803",
            "name":"Honvéd utca",
            "lat":47.434833,
            "lon":19.201518
        },
        {
            "id":"F03804",
            "name":"Honvéd utca",
            "lat":47.434346,
            "lon":19.202617
        },
        {
            "id":"F03805",
            "name":"Honvéd utca",
            "lat":47.43477,
            "lon":19.201889
        },
        {
            "id":"F03806",
            "name":"Honvéd utca",
            "lat":47.435026,
            "lon":19.200809
        },
        {
            "id":"F03807",
            "name":"Szent László utca",
            "lat":47.441814,
            "lon":19.207651
        },
        {
            "id":"F03808",
            "name":"Szemeretelep vasútállomás",
            "lat":47.443148,
            "lon":19.212242
        },
        {
            "id":"F03809",
            "name":"Szent László utca",
            "lat":47.439856,
            "lon":19.211861
        },
        {
            "id":"F03810",
            "name":"Ferihegy vasútállomás",
            "lat":47.436809,
            "lon":19.222603
        },
        {
            "id":"F03814",
            "name":"Billentyű utca",
            "lat":47.44758,
            "lon":19.207641
        },
        {
            "id":"F03816",
            "name":"Gyékény tér",
            "lat":47.430909,
            "lon":19.196271
        },
        {
            "id":"F03817",
            "name":"Gyékény tér",
            "lat":47.430972,
            "lon":19.196364
        },
        {
            "id":"F03818",
            "name":"Bethlen Gábor utca",
            "lat":47.410883,
            "lon":19.176696
        },
        {
            "id":"F03819",
            "name":"Arany János utca",
            "lat":47.410549,
            "lon":19.177358
        },
        {
            "id":"F03820",
            "name":"Szélső utca",
            "lat":47.401189,
            "lon":19.181813
        },
        {
            "id":"F03821",
            "name":"Szélső utca",
            "lat":47.400884,
            "lon":19.181495
        },
        {
            "id":"F03822",
            "name":"Madarász utca",
            "lat":47.437858,
            "lon":19.192764
        },
        {
            "id":"F03823",
            "name":"Madarász utca",
            "lat":47.437713,
            "lon":19.193028
        },
        {
            "id":"F03824",
            "name":"Madarász utca",
            "lat":47.43784,
            "lon":19.192591
        },
        {
            "id":"F03825",
            "name":"Madarász utca",
            "lat":47.437813,
            "lon":19.192353
        },
        {
            "id":"F03826",
            "name":"Csaba utca",
            "lat":47.4546,
            "lon":19.190144
        },
        {
            "id":"F03827",
            "name":"Thököly út",
            "lat":47.448651,
            "lon":19.185752
        },
        {
            "id":"F03828",
            "name":"Thököly út",
            "lat":47.448561,
            "lon":19.185592
        },
        {
            "id":"F03829",
            "name":"Kosztolányi Dezső utca",
            "lat":47.449119,
            "lon":19.192967
        },
        {
            "id":"F03830",
            "name":"Kosztolányi Dezső utca",
            "lat":47.449596,
            "lon":19.19314
        },
        {
            "id":"F03831",
            "name":"Csörötnek utca",
            "lat":47.449718,
            "lon":19.181219
        },
        {
            "id":"F03832",
            "name":"Csörötnek utca",
            "lat":47.4496,
            "lon":19.182041
        },
        {
            "id":"F03833",
            "name":"Kemény Zsigmond utca",
            "lat":47.445806,
            "lon":19.172339
        },
        {
            "id":"F03834",
            "name":"Kemény Zsigmond utca",
            "lat":47.446067,
            "lon":19.171902
        },
        {
            "id":"F03835",
            "name":"Kemény Zsigmond utca",
            "lat":47.445427,
            "lon":19.173028
        },
        {
            "id":"F03836",
            "name":"Kemény Zsigmond utca",
            "lat":47.446077,
            "lon":19.171663
        },
        {
            "id":"F03837",
            "name":"Kispesti temető",
            "lat":47.442979,
            "lon":19.157522
        },
        {
            "id":"F03838",
            "name":"Kispesti temető",
            "lat":47.442708,
            "lon":19.158132
        },
        {
            "id":"F03839",
            "name":"Lakatos úti lakótelep",
            "lat":47.451238,
            "lon":19.172816
        },
        {
            "id":"F03840",
            "name":"Lakatos úti lakótelep",
            "lat":47.451688,
            "lon":19.172963
        },
        {
            "id":"F03841",
            "name":"Tinódi utca",
            "lat":47.454673,
            "lon":19.168282
        },
        {
            "id":"F03842",
            "name":"Tinódi utca",
            "lat":47.453832,
            "lon":19.170156
        },
        {
            "id":"F03843",
            "name":"Vajk utca",
            "lat":47.455776,
            "lon":19.185412
        },
        {
            "id":"F03845",
            "name":"Pestszentlőrinc vasútállomás (átjáró)",
            "lat":47.456381,
            "lon":19.182907
        },
        {
            "id":"F03846",
            "name":"Beszterce utca",
            "lat":47.425784,
            "lon":19.21472
        },
        {
            "id":"F03847",
            "name":"Beszterce utca",
            "lat":47.425316,
            "lon":19.21444
        },
        {
            "id":"F03848",
            "name":"Halomi út",
            "lat":47.422774,
            "lon":19.211994
        },
        {
            "id":"F03849",
            "name":"Halomi út",
            "lat":47.4221,
            "lon":19.211528
        },
        {
            "id":"F03850",
            "name":"Királyhágó út",
            "lat":47.422595,
            "lon":19.211304
        },
        {
            "id":"F03851",
            "name":"Selmecbánya utca",
            "lat":47.438409,
            "lon":19.20479
        },
        {
            "id":"F03852",
            "name":"Selmecbánya utca",
            "lat":47.436262,
            "lon":19.209357
        },
        {
            "id":"F03853",
            "name":"Ungvár utca",
            "lat":47.431256,
            "lon":19.212099
        },
        {
            "id":"F03854",
            "name":"Ungvár utca",
            "lat":47.431238,
            "lon":19.212325
        },
        {
            "id":"F03855",
            "name":"Ungvár utca",
            "lat":47.431031,
            "lon":19.212417
        },
        {
            "id":"F03856",
            "name":"Ungvár utca",
            "lat":47.431518,
            "lon":19.211331
        },
        {
            "id":"F03857",
            "name":"Sas utca",
            "lat":47.432716,
            "lon":19.189847
        },
        {
            "id":"F03858",
            "name":"Sas utca",
            "lat":47.432708,
            "lon":19.189104
        },
        {
            "id":"F03859",
            "name":"Alacskai úti lakótelep",
            "lat":47.414198,
            "lon":19.202028
        },
        {
            "id":"F03860",
            "name":"Alacskai úti lakótelep",
            "lat":47.413767,
            "lon":19.201563
        },
        {
            "id":"F03861",
            "name":"Alacskai úti lakótelep",
            "lat":47.4132,
            "lon":19.201482
        },
        {
            "id":"F03862",
            "name":"Alacskai úti lakótelep",
            "lat":47.413047,
            "lon":19.201813
        },
        {
            "id":"F03863",
            "name":"Tarkő utca",
            "lat":47.425102,
            "lon":19.207017
        },
        {
            "id":"F03864",
            "name":"Tarkő utca",
            "lat":47.425093,
            "lon":19.20719
        },
        {
            "id":"F03865",
            "name":"Nagyenyed utca",
            "lat":47.427365,
            "lon":19.203167
        },
        {
            "id":"F03866",
            "name":"Nagyenyed utca",
            "lat":47.427428,
            "lon":19.203233
        },
        {
            "id":"F03867",
            "name":"Rába utca",
            "lat":47.427807,
            "lon":19.22154
        },
        {
            "id":"F03868",
            "name":"Rába utca",
            "lat":47.427797,
            "lon":19.221858
        },
        {
            "id":"F03869",
            "name":"Szemeretelep vasútállomás",
            "lat":47.444055,
            "lon":19.212974
        },
        {
            "id":"F03870",
            "name":"Szemeretelep vasútállomás",
            "lat":47.444244,
            "lon":19.213267
        },
        {
            "id":"F03871",
            "name":"Zöldségpiac",
            "lat":47.416684,
            "lon":19.168971
        },
        {
            "id":"F03872",
            "name":"Zöldségpiac",
            "lat":47.41753,
            "lon":19.168112
        },
        {
            "id":"F03873",
            "name":"Eke utca",
            "lat":47.407856,
            "lon":19.180969
        },
        {
            "id":"F03874",
            "name":"Eke utca",
            "lat":47.406667,
            "lon":19.18237
        },
        {
            "id":"F03875",
            "name":"Csolt utca",
            "lat":47.399666,
            "lon":19.191613
        },
        {
            "id":"F03876",
            "name":"Csolt utca",
            "lat":47.399396,
            "lon":19.192156
        },
        {
            "id":"F03877",
            "name":"Olt utca",
            "lat":47.429952,
            "lon":19.1988
        },
        {
            "id":"F03878",
            "name":"Olt utca",
            "lat":47.429709,
            "lon":19.199369
        },
        {
            "id":"F03879",
            "name":"Goroszló utca",
            "lat":47.428595,
            "lon":19.175401
        },
        {
            "id":"F03880",
            "name":"Pestszentlőrinc vasútállomás (átjáró)",
            "lat":47.456093,
            "lon":19.183013
        },
        {
            "id":"F03881",
            "name":"Vajk utca",
            "lat":47.455316,
            "lon":19.186167
        },
        {
            "id":"F03882",
            "name":"Csaba utca",
            "lat":47.454403,
            "lon":19.189944
        },
        {
            "id":"F03883",
            "name":"Üllői út",
            "lat":47.433179,
            "lon":19.207227
        },
        {
            "id":"F03884",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.433144,
            "lon":19.206697
        },
        {
            "id":"F03885",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.432982,
            "lon":19.206988
        },
        {
            "id":"F03886",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.433153,
            "lon":19.206498
        },
        {
            "id":"F03887",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.432928,
            "lon":19.206815
        },
        {
            "id":"F03888",
            "name":"Autópiac",
            "lat":47.43284,
            "lon":19.148964
        },
        {
            "id":"F03889",
            "name":"Autópiac",
            "lat":47.432084,
            "lon":19.149798
        },
        {
            "id":"F03890",
            "name":"Karton utca",
            "lat":47.434151,
            "lon":19.16164
        },
        {
            "id":"F03891",
            "name":"Karton utca",
            "lat":47.434367,
            "lon":19.160911
        },
        {
            "id":"F03892",
            "name":"Csíky utca",
            "lat":47.432303,
            "lon":19.165534
        },
        {
            "id":"F03893",
            "name":"Csíky utca",
            "lat":47.432005,
            "lon":19.16609
        },
        {
            "id":"F03894",
            "name":"Csíky utca",
            "lat":47.432491,
            "lon":19.165918
        },
        {
            "id":"F03895",
            "name":"Batthyány utca",
            "lat":47.443945,
            "lon":19.130568
        },
        {
            "id":"F03896",
            "name":"Debrecen utca",
            "lat":47.443297,
            "lon":19.131124
        },
        {
            "id":"F03897",
            "name":"Rákóczi utca",
            "lat":47.45276,
            "lon":19.117122
        },
        {
            "id":"F03898",
            "name":"Gomb utca",
            "lat":47.452895,
            "lon":19.117321
        },
        {
            "id":"F03899",
            "name":"Corvin körút",
            "lat":47.462113,
            "lon":19.134125
        },
        {
            "id":"F03900",
            "name":"Corvin körút",
            "lat":47.462004,
            "lon":19.134509
        },
        {
            "id":"F03901",
            "name":"Corvin körút",
            "lat":47.461716,
            "lon":19.134801
        },
        {
            "id":"F03902",
            "name":"Nyáry Pál utca",
            "lat":47.46232,
            "lon":19.133621
        },
        {
            "id":"F03903",
            "name":"Árpád utca",
            "lat":47.454578,
            "lon":19.151791
        },
        {
            "id":"F03904",
            "name":"Árpád utca",
            "lat":47.454804,
            "lon":19.151393
        },
        {
            "id":"F03905",
            "name":"Árpád utca",
            "lat":47.45429,
            "lon":19.152188
        },
        {
            "id":"F03906",
            "name":"Árpád utca",
            "lat":47.454939,
            "lon":19.150916
        },
        {
            "id":"F03907",
            "name":"Naszód utca (Használtcikk piac)",
            "lat":47.435894,
            "lon":19.143734
        },
        {
            "id":"F03908",
            "name":"Használtcikk piac",
            "lat":47.435614,
            "lon":19.145443
        },
        {
            "id":"F03909",
            "name":"Alvinc utca",
            "lat":47.437668,
            "lon":19.140634
        },
        {
            "id":"F03911",
            "name":"Kéreg utca",
            "lat":47.439182,
            "lon":19.13776
        },
        {
            "id":"F03912",
            "name":"Vas Gereben utca",
            "lat":47.439361,
            "lon":19.137946
        },
        {
            "id":"F03913",
            "name":"Zrínyi utca",
            "lat":47.441181,
            "lon":19.134913
        },
        {
            "id":"F03914",
            "name":"Radnó utca",
            "lat":47.440524,
            "lon":19.135442
        },
        {
            "id":"F03915",
            "name":"Nagysándor József utca",
            "lat":47.446197,
            "lon":19.126647
        },
        {
            "id":"F03916",
            "name":"Hunyadi utca",
            "lat":47.446305,
            "lon":19.126899
        },
        {
            "id":"F03917",
            "name":"Kossuth Lajos utca",
            "lat":47.449798,
            "lon":19.121401
        },
        {
            "id":"F03918",
            "name":"Újlaki utca",
            "lat":47.450581,
            "lon":19.120699
        },
        {
            "id":"F03919",
            "name":"Álmos utca",
            "lat":47.455791,
            "lon":19.11763
        },
        {
            "id":"F03920",
            "name":"Hungária út",
            "lat":47.454927,
            "lon":19.118597
        },
        {
            "id":"F03921",
            "name":"Pannónia út",
            "lat":47.454752,
            "lon":19.125532
        },
        {
            "id":"F03922",
            "name":"Kós Károly tér",
            "lat":47.454724,
            "lon":19.12666
        },
        {
            "id":"F03923",
            "name":"Kós Károly tér",
            "lat":47.456488,
            "lon":19.125363
        },
        {
            "id":"F03924",
            "name":"Corvin körút",
            "lat":47.459698,
            "lon":19.126455
        },
        {
            "id":"F03925",
            "name":"Corvin körút",
            "lat":47.459303,
            "lon":19.126547
        },
        {
            "id":"F03926",
            "name":"Corvin körút",
            "lat":47.460294,
            "lon":19.13185
        },
        {
            "id":"F03927",
            "name":"Corvin körút",
            "lat":47.460252,
            "lon":19.132026
        },
        {
            "id":"F03928",
            "name":"Határ út M",
            "lat":47.464753,
            "lon":19.127643
        },
        {
            "id":"F03929",
            "name":"Határ út M",
            "lat":47.46514,
            "lon":19.127219
        },
        {
            "id":"F03930",
            "name":"Határ út M",
            "lat":47.465185,
            "lon":19.127166
        },
        {
            "id":"F03931",
            "name":"Lehel utca",
            "lat":47.459517,
            "lon":19.140261
        },
        {
            "id":"F03932",
            "name":"Lehel utca",
            "lat":47.459364,
            "lon":19.140792
        },
        {
            "id":"F03933",
            "name":"Lehel utca",
            "lat":47.459499,
            "lon":19.140009
        },
        {
            "id":"F03934",
            "name":"Lehel utca",
            "lat":47.459824,
            "lon":19.139493
        },
        {
            "id":"F03940",
            "name":"Kőbánya-Kispest M",
            "lat":47.461345,
            "lon":19.149005
        },
        {
            "id":"F03941",
            "name":"Kőbánya-Kispest M",
            "lat":47.46147,
            "lon":19.149814
        },
        {
            "id":"F03942",
            "name":"Sós utca",
            "lat":47.459177,
            "lon":19.14924
        },
        {
            "id":"F03943",
            "name":"Wesselényi utca",
            "lat":47.46144,
            "lon":19.153037
        },
        {
            "id":"F03944",
            "name":"Wesselényi utca",
            "lat":47.460558,
            "lon":19.154375
        },
        {
            "id":"F03945",
            "name":"Kispest, Kossuth tér",
            "lat":47.458325,
            "lon":19.14575
        },
        {
            "id":"F03946",
            "name":"Kossuth tér",
            "lat":47.457787,
            "lon":19.144436
        },
        {
            "id":"F03947",
            "name":"Kossuth tér",
            "lat":47.457517,
            "lon":19.144913
        },
        {
            "id":"F03948",
            "name":"Kispest, Kossuth tér",
            "lat":47.458139,
            "lon":19.143163
        },
        {
            "id":"F03949",
            "name":"Kossuth tér",
            "lat":47.457841,
            "lon":19.144131
        },
        {
            "id":"F03950",
            "name":"Simonyi Zsigmond utca",
            "lat":47.457488,
            "lon":19.146863
        },
        {
            "id":"F03951",
            "name":"Fő utca",
            "lat":47.45612,
            "lon":19.147881
        },
        {
            "id":"F03952",
            "name":"Fő utca",
            "lat":47.456561,
            "lon":19.1471
        },
        {
            "id":"F03953",
            "name":"Fő utca",
            "lat":47.456354,
            "lon":19.147616
        },
        {
            "id":"F03954",
            "name":"Fő utca",
            "lat":47.456624,
            "lon":19.147166
        },
        {
            "id":"F03955",
            "name":"Kisfaludy utca",
            "lat":47.454155,
            "lon":19.142042
        },
        {
            "id":"F03956",
            "name":"Ady Endre út (Báthory utca)",
            "lat":47.454695,
            "lon":19.140916
        },
        {
            "id":"F03957",
            "name":"Ady Endre út (Hunyadi utca)",
            "lat":47.454562,
            "lon":19.139152
        },
        {
            "id":"F03958",
            "name":"Hungária út",
            "lat":47.456057,
            "lon":19.136675
        },
        {
            "id":"F03959",
            "name":"Ady Endre út (Rendőrség)",
            "lat":47.455934,
            "lon":19.137158
        },
        {
            "id":"F03960",
            "name":"Hungária út",
            "lat":47.45627,
            "lon":19.13753
        },
        {
            "id":"F03961",
            "name":"Hungária út",
            "lat":47.456029,
            "lon":19.137961
        },
        {
            "id":"F03963",
            "name":"Gutenberg körút",
            "lat":47.455916,
            "lon":19.132351
        },
        {
            "id":"F03964",
            "name":"Gutenberg körút",
            "lat":47.455791,
            "lon":19.131223
        },
        {
            "id":"F03965",
            "name":"Zoltán utca",
            "lat":47.451494,
            "lon":19.127623
        },
        {
            "id":"F03966",
            "name":"Zoltán utca",
            "lat":47.451755,
            "lon":19.127066
        },
        {
            "id":"F03967",
            "name":"Thököly utca",
            "lat":47.45327,
            "lon":19.121167
        },
        {
            "id":"F03968",
            "name":"Thököly utca",
            "lat":47.453064,
            "lon":19.121273
        },
        {
            "id":"F03969",
            "name":"Pannónia út",
            "lat":47.450839,
            "lon":19.125606
        },
        {
            "id":"F03970",
            "name":"Zalaegerszeg utca",
            "lat":47.450876,
            "lon":19.124519
        },
        {
            "id":"F03971",
            "name":"Hunyadi tér",
            "lat":47.449306,
            "lon":19.131173
        },
        {
            "id":"F03972",
            "name":"Hunyadi tér",
            "lat":47.449234,
            "lon":19.130749
        },
        {
            "id":"F03973",
            "name":"Hunyadi tér",
            "lat":47.448812,
            "lon":19.130656
        },
        {
            "id":"F03974",
            "name":"Hunyadi tér",
            "lat":47.448766,
            "lon":19.13165
        },
        {
            "id":"F03975",
            "name":"Áchim András utca",
            "lat":47.452181,
            "lon":19.135435
        },
        {
            "id":"F03976",
            "name":"Áchim András utca",
            "lat":47.451723,
            "lon":19.134983
        },
        {
            "id":"F03977",
            "name":"Kossuth Lajos utca",
            "lat":47.449771,
            "lon":19.145787
        },
        {
            "id":"F03978",
            "name":"Ady Endre út",
            "lat":47.449897,
            "lon":19.146146
        },
        {
            "id":"F03979",
            "name":"Kossuth Lajos utca",
            "lat":47.450035,
            "lon":19.146471
        },
        {
            "id":"F03980",
            "name":"Kossuth Lajos utca",
            "lat":47.450152,
            "lon":19.146166
        },
        {
            "id":"F03981",
            "name":"Kossuth Lajos utca",
            "lat":47.444642,
            "lon":19.137517
        },
        {
            "id":"F03982",
            "name":"Nádasdy utca",
            "lat":47.444587,
            "lon":19.138074
        },
        {
            "id":"F03983",
            "name":"Kossuth Lajos utca",
            "lat":47.444129,
            "lon":19.138073
        },
        {
            "id":"F03984",
            "name":"Kossuth Lajos utca",
            "lat":47.444803,
            "lon":19.138565
        },
        {
            "id":"F03985",
            "name":"Zalaegerszeg utca",
            "lat":47.442556,
            "lon":19.135923
        },
        {
            "id":"F03986",
            "name":"Vas Gereben utca",
            "lat":47.440746,
            "lon":19.138532
        },
        {
            "id":"F03989",
            "name":"Vas Gereben utca",
            "lat":47.442463,
            "lon":19.140656
        },
        {
            "id":"F03990",
            "name":"Kispest, Vas Gereben utca",
            "lat":47.441716,
            "lon":19.140933
        },
        {
            "id":"F03991",
            "name":"Pincér utca",
            "lat":47.441436,
            "lon":19.14194
        },
        {
            "id":"F03992",
            "name":"Hofherr Albert utca",
            "lat":47.438464,
            "lon":19.146138
        },
        {
            "id":"F03993",
            "name":"Hofherr Albert utca",
            "lat":47.438571,
            "lon":19.147437
        },
        {
            "id":"F03994",
            "name":"Áchim András utca",
            "lat":47.441258,
            "lon":19.149908
        },
        {
            "id":"F03995",
            "name":"Ajtósi utca",
            "lat":47.4364,
            "lon":19.150946
        },
        {
            "id":"F03996",
            "name":"Ipolyság utca",
            "lat":47.436112,
            "lon":19.151741
        },
        {
            "id":"F03997",
            "name":"Kassa utca",
            "lat":47.436818,
            "lon":19.155998
        },
        {
            "id":"F03998",
            "name":"Kassa utca",
            "lat":47.436351,
            "lon":19.155732
        },
        {
            "id":"F03999",
            "name":"Kassa utca",
            "lat":47.43653,
            "lon":19.156236
        },
        {
            "id":"F04000",
            "name":"Ady Endre út",
            "lat":47.444619,
            "lon":19.153548
        },
        {
            "id":"F04002",
            "name":"Vas Gereben utca (Ady Endre út)",
            "lat":47.447582,
            "lon":19.149364
        },
        {
            "id":"F04003",
            "name":"Vas Gereben utca",
            "lat":47.44781,
            "lon":19.149583
        },
        {
            "id":"F04004",
            "name":"Vas Gereben utca",
            "lat":47.447684,
            "lon":19.149834
        },
        {
            "id":"F04005",
            "name":"Bocskai utca",
            "lat":47.459196,
            "lon":19.15798
        },
        {
            "id":"F04006",
            "name":"Bocskai utca",
            "lat":47.458764,
            "lon":19.158709
        },
        {
            "id":"F04014",
            "name":"Határ út M",
            "lat":47.464582,
            "lon":19.127337
        },
        {
            "id":"F04015",
            "name":"Határ út M",
            "lat":47.464807,
            "lon":19.127139
        },
        {
            "id":"F04017",
            "name":"Határ út M",
            "lat":47.464474,
            "lon":19.126714
        },
        {
            "id":"F04018",
            "name":"Határ út M",
            "lat":47.46424,
            "lon":19.126912
        },
        {
            "id":"F04019",
            "name":"Határ út M",
            "lat":47.464222,
            "lon":19.127748
        },
        {
            "id":"F04020",
            "name":"Templom tér",
            "lat":47.452364,
            "lon":19.143312
        },
        {
            "id":"F04021",
            "name":"Templom tér",
            "lat":47.452835,
            "lon":19.142458
        },
        {
            "id":"F04022",
            "name":"Templom tér",
            "lat":47.452583,
            "lon":19.142736
        },
        {
            "id":"F04024",
            "name":"Batthyány utca",
            "lat":47.44656,
            "lon":19.134763
        },
        {
            "id":"F04025",
            "name":"Batthyány utca",
            "lat":47.446821,
            "lon":19.134206
        },
        {
            "id":"F04026",
            "name":"Áchim András utca",
            "lat":47.447094,
            "lon":19.141977
        },
        {
            "id":"F04027",
            "name":"Áchim András utca",
            "lat":47.447391,
            "lon":19.142256
        },
        {
            "id":"F04028",
            "name":"Villanytelep",
            "lat":47.452568,
            "lon":19.156242
        },
        {
            "id":"F04029",
            "name":"Villanytelep",
            "lat":47.452679,
            "lon":19.156183
        },
        {
            "id":"F04030",
            "name":"Villanytelep",
            "lat":47.452505,
            "lon":19.15668
        },
        {
            "id":"F04031",
            "name":"Villanytelep",
            "lat":47.452622,
            "lon":19.156547
        },
        {
            "id":"F04033",
            "name":"Garázs utca",
            "lat":47.44004,
            "lon":19.1439
        },
        {
            "id":"F04034",
            "name":"Madarassy László utca",
            "lat":47.440418,
            "lon":19.143543
        },
        {
            "id":"F04035",
            "name":"Mészáros Lőrinc utca",
            "lat":47.444043,
            "lon":19.143868
        },
        {
            "id":"F04036",
            "name":"Szegfű utca",
            "lat":47.446001,
            "lon":19.146921
        },
        {
            "id":"F04037",
            "name":"Pannónia út",
            "lat":47.447655,
            "lon":19.124952
        },
        {
            "id":"F04038",
            "name":"Irányi utca",
            "lat":47.44716,
            "lon":19.125243
        },
        {
            "id":"F04039",
            "name":"Kispest, Tulipán utca",
            "lat":47.445676,
            "lon":19.152668
        },
        {
            "id":"F04041",
            "name":"Baross utca",
            "lat":47.43287,
            "lon":19.104118
        },
        {
            "id":"F04042",
            "name":"Nagykőrösi út",
            "lat":47.445128,
            "lon":19.124935
        },
        {
            "id":"F04043",
            "name":"Nagykőrösi út",
            "lat":47.444894,
            "lon":19.124789
        },
        {
            "id":"F04044",
            "name":"Pöltenberg utca",
            "lat":47.433082,
            "lon":19.111688
        },
        {
            "id":"F04045",
            "name":"Pesterzsébet, Ady Endre tér",
            "lat":47.432632,
            "lon":19.127383
        },
        {
            "id":"F04046",
            "name":"Ady Endre tér",
            "lat":47.432246,
            "lon":19.126905
        },
        {
            "id":"F04048",
            "name":"Ady Endre tér",
            "lat":47.432928,
            "lon":19.128404
        },
        {
            "id":"F04049",
            "name":"Szilágyság utca",
            "lat":47.43285,
            "lon":19.136821
        },
        {
            "id":"F04050",
            "name":"Torontál utca H",
            "lat":47.423515,
            "lon":19.104864
        },
        {
            "id":"F04051",
            "name":"Torontál utca H",
            "lat":47.422598,
            "lon":19.105247
        },
        {
            "id":"F04052",
            "name":"Torontál utca",
            "lat":47.42338,
            "lon":19.105036
        },
        {
            "id":"F04053",
            "name":"Torontál utca",
            "lat":47.423002,
            "lon":19.10538
        },
        {
            "id":"F04054",
            "name":"Nagysándor József utca",
            "lat":47.432583,
            "lon":19.103031
        },
        {
            "id":"F04055",
            "name":"Nagysándor József utca",
            "lat":47.432628,
            "lon":19.102805
        },
        {
            "id":"F04056",
            "name":"Tinódi utca",
            "lat":47.429137,
            "lon":19.106089
        },
        {
            "id":"F04057",
            "name":"Tinódi utca",
            "lat":47.42866,
            "lon":19.10642
        },
        {
            "id":"F04058",
            "name":"Klapka utca",
            "lat":47.427301,
            "lon":19.108036
        },
        {
            "id":"F04059",
            "name":"Torontál utca",
            "lat":47.426581,
            "lon":19.108658
        },
        {
            "id":"F04060",
            "name":"Pöltenberg utca",
            "lat":47.43088,
            "lon":19.108822
        },
        {
            "id":"F04061",
            "name":"Székelyhíd utca",
            "lat":47.430679,
            "lon":19.115503
        },
        {
            "id":"F04062",
            "name":"Klapka utca",
            "lat":47.431245,
            "lon":19.116232
        },
        {
            "id":"F04063",
            "name":"Wesselényi utca",
            "lat":47.428023,
            "lon":19.119728
        },
        {
            "id":"F04064",
            "name":"Wesselényi utca",
            "lat":47.428247,
            "lon":19.120033
        },
        {
            "id":"F04065",
            "name":"Jósika utca",
            "lat":47.429172,
            "lon":19.123533
        },
        {
            "id":"F04066",
            "name":"Rózsás utca",
            "lat":47.428667,
            "lon":19.124089
        },
        {
            "id":"F04067",
            "name":"Szalárdi Mór utca",
            "lat":47.429458,
            "lon":19.125641
        },
        {
            "id":"F04068",
            "name":"Wesselényi utca",
            "lat":47.43123,
            "lon":19.125631
        },
        {
            "id":"F04069",
            "name":"Eperjes utca",
            "lat":47.431176,
            "lon":19.124955
        },
        {
            "id":"F04070",
            "name":"Eperjes utca",
            "lat":47.42941,
            "lon":19.130082
        },
        {
            "id":"F04071",
            "name":"Pacsirta utca",
            "lat":47.428486,
            "lon":19.127032
        },
        {
            "id":"F04072",
            "name":"Királyhágó utca",
            "lat":47.42729,
            "lon":19.126049
        },
        {
            "id":"F04073",
            "name":"Előd utca",
            "lat":47.425912,
            "lon":19.128075
        },
        {
            "id":"F04074",
            "name":"Királyhágó utca",
            "lat":47.427254,
            "lon":19.126274
        },
        {
            "id":"F04075",
            "name":"Előd utca",
            "lat":47.425381,
            "lon":19.128923
        },
        {
            "id":"F04077",
            "name":"Vágóhíd utca",
            "lat":47.41929,
            "lon":19.116774
        },
        {
            "id":"F04078",
            "name":"Előd utca",
            "lat":47.420503,
            "lon":19.119439
        },
        {
            "id":"F04080",
            "name":"Ábrahám Géza utca",
            "lat":47.421259,
            "lon":19.119135
        },
        {
            "id":"F04081",
            "name":"Pesterzsébet, Pacsirtatelep",
            "lat":47.422111,
            "lon":19.122596
        },
        {
            "id":"F04082",
            "name":"Jahn Ferenc Kórház",
            "lat":47.424003,
            "lon":19.131094
        },
        {
            "id":"F04083",
            "name":"Jahn Ferenc Kórház",
            "lat":47.423538,
            "lon":19.131817
        },
        {
            "id":"F04084",
            "name":"Jahn Ferenc Kórház",
            "lat":47.423832,
            "lon":19.131014
        },
        {
            "id":"F04085",
            "name":"Írisz utca",
            "lat":47.417241,
            "lon":19.140413
        },
        {
            "id":"F04086",
            "name":"Írisz utca",
            "lat":47.417511,
            "lon":19.140202
        },
        {
            "id":"F04087",
            "name":"Hunyadi János tér",
            "lat":47.435628,
            "lon":19.139106
        },
        {
            "id":"F04088",
            "name":"Udvarhely utca",
            "lat":47.438141,
            "lon":19.134391
        },
        {
            "id":"F04089",
            "name":"Temesvár utca",
            "lat":47.435912,
            "lon":19.131895
        },
        {
            "id":"F04090",
            "name":"Mártírok útja",
            "lat":47.436443,
            "lon":19.131326
        },
        {
            "id":"F04092",
            "name":"Pesterzsébet, Ady Endre tér",
            "lat":47.433289,
            "lon":19.12692
        },
        {
            "id":"F04094",
            "name":"Magyar utca",
            "lat":47.435377,
            "lon":19.124391
        },
        {
            "id":"F04095",
            "name":"Magyar utca",
            "lat":47.435243,
            "lon":19.12439
        },
        {
            "id":"F04096",
            "name":"Magyar utca",
            "lat":47.438433,
            "lon":19.128333
        },
        {
            "id":"F04097",
            "name":"Magyar utca",
            "lat":47.438199,
            "lon":19.128876
        },
        {
            "id":"F04098",
            "name":"Mártírok útja",
            "lat":47.442782,
            "lon":19.121378
        },
        {
            "id":"F04099",
            "name":"Nagyszőlős utca",
            "lat":47.442476,
            "lon":19.122558
        },
        {
            "id":"F04100",
            "name":"Zalán utca",
            "lat":47.443681,
            "lon":19.122984
        },
        {
            "id":"F04101",
            "name":"Nagysándor József utca",
            "lat":47.443349,
            "lon":19.121538
        },
        {
            "id":"F04102",
            "name":"Nagysándor József utca",
            "lat":47.439969,
            "lon":19.117888
        },
        {
            "id":"F04103",
            "name":"Lázár utca",
            "lat":47.440392,
            "lon":19.117981
        },
        {
            "id":"F04104",
            "name":"Jókai Mór utca",
            "lat":47.440608,
            "lon":19.1181
        },
        {
            "id":"F04105",
            "name":"Nagysándor József utca",
            "lat":47.439771,
            "lon":19.11798
        },
        {
            "id":"F04106",
            "name":"Szabótelep",
            "lat":47.440374,
            "lon":19.116695
        },
        {
            "id":"F04107",
            "name":"Vécsey utca",
            "lat":47.438576,
            "lon":19.115274
        },
        {
            "id":"F04108",
            "name":"Szent Imre herceg utca",
            "lat":47.436671,
            "lon":19.112355
        },
        {
            "id":"F04109",
            "name":"Szent Imre herceg utca",
            "lat":47.437112,
            "lon":19.112276
        },
        {
            "id":"F04110",
            "name":"Székelyhíd utca",
            "lat":47.432305,
            "lon":19.119071
        },
        {
            "id":"F04111",
            "name":"Nagysándor József utca",
            "lat":47.436043,
            "lon":19.10953
        },
        {
            "id":"F04112",
            "name":"Nagysándor József utca",
            "lat":47.435512,
            "lon":19.110219
        },
        {
            "id":"F04113",
            "name":"Török Flóris utca",
            "lat":47.435548,
            "lon":19.109517
        },
        {
            "id":"F04114",
            "name":"Nagysándor József utca",
            "lat":47.435018,
            "lon":19.108972
        },
        {
            "id":"F04115",
            "name":"Török Flóris utca",
            "lat":47.435548,
            "lon":19.109145
        },
        {
            "id":"F04116",
            "name":"Vörösmarty utca",
            "lat":47.434344,
            "lon":19.106638
        },
        {
            "id":"F04117",
            "name":"Vörösmarty utca",
            "lat":47.433589,
            "lon":19.105537
        },
        {
            "id":"F04118",
            "name":"Pesterzsébet, Kossuth Lajos utca",
            "lat":47.435301,
            "lon":19.099878
        },
        {
            "id":"F04119",
            "name":"Pesterzsébet, Kossuth Lajos utca",
            "lat":47.435265,
            "lon":19.100077
        },
        {
            "id":"F04120",
            "name":"Pesterzsébet vasútállomás",
            "lat":47.433611,
            "lon":19.097769
        },
        {
            "id":"F04121",
            "name":"Pesterzsébet vasútállomás",
            "lat":47.434016,
            "lon":19.097571
        },
        {
            "id":"F04122",
            "name":"Pesterzsébet, városközpont",
            "lat":47.437576,
            "lon":19.101246
        },
        {
            "id":"F04123",
            "name":"Pesterzsébet, városközpont",
            "lat":47.437666,
            "lon":19.100915
        },
        {
            "id":"F04124",
            "name":"Pesterzsébet, városközpont",
            "lat":47.43781,
            "lon":19.101193
        },
        {
            "id":"F04125",
            "name":"János utca",
            "lat":47.438433,
            "lon":19.096898
        },
        {
            "id":"F04126",
            "name":"János utca",
            "lat":47.439818,
            "lon":19.096568
        },
        {
            "id":"F04127",
            "name":"Ady Endre utca (Topánka utca)",
            "lat":47.438942,
            "lon":19.10321
        },
        {
            "id":"F04128",
            "name":"Ady Endre utca",
            "lat":47.439437,
            "lon":19.103502
        },
        {
            "id":"F04129",
            "name":"Ady Endre utca (Topánka utca)",
            "lat":47.439401,
            "lon":19.104562
        },
        {
            "id":"F04130",
            "name":"Kossuth Lajos utca",
            "lat":47.439382,
            "lon":19.10557
        },
        {
            "id":"F04131",
            "name":"János tér",
            "lat":47.441758,
            "lon":19.102576
        },
        {
            "id":"F04132",
            "name":"János tér",
            "lat":47.441506,
            "lon":19.103
        },
        {
            "id":"F04133",
            "name":"Szent Erzsébet tér",
            "lat":47.440586,
            "lon":19.107905
        },
        {
            "id":"F04134",
            "name":"Szent Erzsébet tér",
            "lat":47.440452,
            "lon":19.107335
        },
        {
            "id":"F04135",
            "name":"Szent Erzsébet tér",
            "lat":47.439641,
            "lon":19.108713
        },
        {
            "id":"F04136",
            "name":"Tátra tér",
            "lat":47.442959,
            "lon":19.111567
        },
        {
            "id":"F04137",
            "name":"Tátra tér",
            "lat":47.442635,
            "lon":19.111301
        },
        {
            "id":"F04138",
            "name":"Kossuth Lajos utca",
            "lat":47.44321,
            "lon":19.112628
        },
        {
            "id":"F04139",
            "name":"Kossuth Lajos utca (Mártírok útja)",
            "lat":47.446599,
            "lon":19.116729
        },
        {
            "id":"F04140",
            "name":"Mártírok útja",
            "lat":47.446185,
            "lon":19.116636
        },
        {
            "id":"F04141",
            "name":"Kossuth Lajos utca",
            "lat":47.446266,
            "lon":19.117379
        },
        {
            "id":"F04142",
            "name":"Pesterzsébet felső H",
            "lat":47.439171,
            "lon":19.094155
        },
        {
            "id":"F04143",
            "name":"Pesterzsébet felső H",
            "lat":47.437696,
            "lon":19.094127
        },
        {
            "id":"F04144",
            "name":"Pesterzsébet, Baross utca",
            "lat":47.436903,
            "lon":19.097454
        },
        {
            "id":"F04145",
            "name":"Pesterzsébet, Baross utca",
            "lat":47.436714,
            "lon":19.097692
        },
        {
            "id":"F04146",
            "name":"Csepeli átjáró",
            "lat":47.436122,
            "lon":19.095027
        },
        {
            "id":"F04147",
            "name":"Csepeli átjáró",
            "lat":47.436574,
            "lon":19.09514
        },
        {
            "id":"F04148",
            "name":"Sósfürdő",
            "lat":47.436393,
            "lon":19.090374
        },
        {
            "id":"F04149",
            "name":"Sósfürdő",
            "lat":47.436243,
            "lon":19.091003
        },
        {
            "id":"F04150",
            "name":"Pesterzsébet felső",
            "lat":47.438416,
            "lon":19.093425
        },
        {
            "id":"F04151",
            "name":"Pesterzsébet felső",
            "lat":47.437903,
            "lon":19.093796
        },
        {
            "id":"F04152",
            "name":"Török Flóris utca",
            "lat":47.444179,
            "lon":19.099635
        },
        {
            "id":"F04153",
            "name":"Török Flóris utca",
            "lat":47.444035,
            "lon":19.09994
        },
        {
            "id":"F04154",
            "name":"Pesterzsébet, Mátyás király tér",
            "lat":47.432745,
            "lon":19.132924
        },
        {
            "id":"F04155",
            "name":"Attila utca",
            "lat":47.431405,
            "lon":19.101638
        },
        {
            "id":"F04156",
            "name":"Attila utca",
            "lat":47.431927,
            "lon":19.102725
        },
        {
            "id":"F04157",
            "name":"Akácfa utca",
            "lat":47.424439,
            "lon":19.111161
        },
        {
            "id":"F04158",
            "name":"Akácfa utca",
            "lat":47.423737,
            "lon":19.111769
        },
        {
            "id":"F04159",
            "name":"Akácfa utca",
            "lat":47.425912,
            "lon":19.114118
        },
        {
            "id":"F04160",
            "name":"Klapka utca",
            "lat":47.428684,
            "lon":19.111179
        },
        {
            "id":"F04161",
            "name":"Bolyai János utca",
            "lat":47.422234,
            "lon":19.113398
        },
        {
            "id":"F04162",
            "name":"Lehel utca",
            "lat":47.421936,
            "lon":19.113888
        },
        {
            "id":"F04163",
            "name":"Károly utca",
            "lat":47.423257,
            "lon":19.117004
        },
        {
            "id":"F04164",
            "name":"Frangepán utca",
            "lat":47.424305,
            "lon":19.123314
        },
        {
            "id":"F04165",
            "name":"Mesgye utca",
            "lat":47.419969,
            "lon":19.136681
        },
        {
            "id":"F04166",
            "name":"Mesgye utca",
            "lat":47.420492,
            "lon":19.13578
        },
        {
            "id":"F04167",
            "name":"Vaskapu utca",
            "lat":47.434386,
            "lon":19.13917
        },
        {
            "id":"F04168",
            "name":"Mézes utca",
            "lat":47.438042,
            "lon":19.120603
        },
        {
            "id":"F04169",
            "name":"Kiss Ernő utca",
            "lat":47.437637,
            "lon":19.120987
        },
        {
            "id":"F04170",
            "name":"Zobor utca",
            "lat":47.440603,
            "lon":19.125446
        },
        {
            "id":"F04171",
            "name":"Mézes utca",
            "lat":47.440846,
            "lon":19.124889
        },
        {
            "id":"F04172",
            "name":"Thököly utca",
            "lat":47.445749,
            "lon":19.109038
        },
        {
            "id":"F04173",
            "name":"Szigligeti utca",
            "lat":47.449192,
            "lon":19.113033
        },
        {
            "id":"F04174",
            "name":"Szigligeti utca",
            "lat":47.44893,
            "lon":19.113576
        },
        {
            "id":"F04175",
            "name":"Jahn Ferenc Kórház",
            "lat":47.423628,
            "lon":19.131948
        },
        {
            "id":"F04177",
            "name":"Karácsony Sándor utca H",
            "lat":47.427207,
            "lon":19.067502
        },
        {
            "id":"F04178",
            "name":"József Attila utca",
            "lat":47.425017,
            "lon":19.084136
        },
        {
            "id":"F04179",
            "name":"József Attila utca",
            "lat":47.424198,
            "lon":19.08391
        },
        {
            "id":"F04180",
            "name":"Csepel, Horgásztanya",
            "lat":47.388058,
            "lon":19.103502
        },
        {
            "id":"F04181",
            "name":"Csepel-Királyerdő",
            "lat":47.3979,
            "lon":19.106631
        },
        {
            "id":"F04182",
            "name":"Károli Gáspár utca",
            "lat":47.42931,
            "lon":19.072354
        },
        {
            "id":"F04183",
            "name":"Karácsony Sándor utca",
            "lat":47.426838,
            "lon":19.06725
        },
        {
            "id":"F04184",
            "name":"Karácsony Sándor utca",
            "lat":47.426766,
            "lon":19.067316
        },
        {
            "id":"F04185",
            "name":"II. Rákóczi Ferenc út",
            "lat":47.422934,
            "lon":19.067593
        },
        {
            "id":"F04186",
            "name":"Kolozsvári utca",
            "lat":47.426179,
            "lon":19.078185
        },
        {
            "id":"F04187",
            "name":"Katona József utca",
            "lat":47.426395,
            "lon":19.078715
        },
        {
            "id":"F04188",
            "name":"Komáromi utca",
            "lat":47.426367,
            "lon":19.081936
        },
        {
            "id":"F04189",
            "name":"Komáromi utca",
            "lat":47.426231,
            "lon":19.083169
        },
        {
            "id":"F04190",
            "name":"Kossuth Lajos utca",
            "lat":47.423077,
            "lon":19.069767
        },
        {
            "id":"F04191",
            "name":"Széchenyi István utca",
            "lat":47.424022,
            "lon":19.069728
        },
        {
            "id":"F04192",
            "name":"Széchenyi István utca",
            "lat":47.423617,
            "lon":19.069754
        },
        {
            "id":"F04193",
            "name":"Szent István út",
            "lat":47.422133,
            "lon":19.068508
        },
        {
            "id":"F04194",
            "name":"Görgey Artúr tér",
            "lat":47.42296,
            "lon":19.072762
        },
        {
            "id":"F04195",
            "name":"Görgey Artúr tér",
            "lat":47.424021,
            "lon":19.071941
        },
        {
            "id":"F04196",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.42278,
            "lon":19.074684
        },
        {
            "id":"F04197",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.422851,
            "lon":19.075307
        },
        {
            "id":"F04198",
            "name":"Kikötő utca",
            "lat":47.422434,
            "lon":19.087089
        },
        {
            "id":"F04199",
            "name":"Kikötő utca",
            "lat":47.422317,
            "lon":19.088083
        },
        {
            "id":"F04200",
            "name":"Völgy utca",
            "lat":47.418769,
            "lon":19.066836
        },
        {
            "id":"F04201",
            "name":"Kölcsey utca",
            "lat":47.412023,
            "lon":19.06804
        },
        {
            "id":"F04202",
            "name":"Kölcsey utca (Erdősor utca)",
            "lat":47.412671,
            "lon":19.067152
        },
        {
            "id":"F04203",
            "name":"Sporttelep",
            "lat":47.420594,
            "lon":19.072735
        },
        {
            "id":"F04204",
            "name":"Sporttelep",
            "lat":47.420108,
            "lon":19.073344
        },
        {
            "id":"F04205",
            "name":"Béke tér",
            "lat":47.417861,
            "lon":19.068824
        },
        {
            "id":"F04206",
            "name":"Bánya utca",
            "lat":47.41742,
            "lon":19.0695
        },
        {
            "id":"F04207",
            "name":"Kölcsey utca",
            "lat":47.416367,
            "lon":19.071646
        },
        {
            "id":"F04208",
            "name":"Völgy utca",
            "lat":47.416583,
            "lon":19.072203
        },
        {
            "id":"F04209",
            "name":"Kölcsey utca",
            "lat":47.416025,
            "lon":19.072494
        },
        {
            "id":"F04210",
            "name":"Völgy utca",
            "lat":47.415503,
            "lon":19.071619
        },
        {
            "id":"F04211",
            "name":"Gombos tér",
            "lat":47.413624,
            "lon":19.069074
        },
        {
            "id":"F04212",
            "name":"Gombos tér",
            "lat":47.414082,
            "lon":19.069816
        },
        {
            "id":"F04213",
            "name":"Szebeni utca",
            "lat":47.420088,
            "lon":19.083576
        },
        {
            "id":"F04214",
            "name":"Kassai utca",
            "lat":47.420241,
            "lon":19.083708
        },
        {
            "id":"F04215",
            "name":"Kikötő utca",
            "lat":47.419709,
            "lon":19.086186
        },
        {
            "id":"F04216",
            "name":"Kikötő utca",
            "lat":47.419772,
            "lon":19.086836
        },
        {
            "id":"F04217",
            "name":"Szebeni utca",
            "lat":47.419213,
            "lon":19.091142
        },
        {
            "id":"F04218",
            "name":"Késmárki utca",
            "lat":47.418808,
            "lon":19.091301
        },
        {
            "id":"F04219",
            "name":"Strandfürdő",
            "lat":47.408073,
            "lon":19.099746
        },
        {
            "id":"F04220",
            "name":"Strandfürdő",
            "lat":47.407452,
            "lon":19.100156
        },
        {
            "id":"F04221",
            "name":"Csepel csónakház",
            "lat":47.404655,
            "lon":19.101107
        },
        {
            "id":"F04222",
            "name":"Csepel csónakház",
            "lat":47.404025,
            "lon":19.101491
        },
        {
            "id":"F04223",
            "name":"Ladik utca",
            "lat":47.401461,
            "lon":19.102866
        },
        {
            "id":"F04224",
            "name":"Ladik utca",
            "lat":47.401289,
            "lon":19.103184
        },
        {
            "id":"F04226",
            "name":"Csepel, Soroksári rév",
            "lat":47.398248,
            "lon":19.105923
        },
        {
            "id":"F04227",
            "name":"Csepel, Soroksári rév",
            "lat":47.397744,
            "lon":19.106545
        },
        {
            "id":"F04228",
            "name":"Csepel, Hollandi út",
            "lat":47.392032,
            "lon":19.105771
        },
        {
            "id":"F04229",
            "name":"Csepel, Hollandi út",
            "lat":47.392158,
            "lon":19.105387
        },
        {
            "id":"F04230",
            "name":"Szent István út",
            "lat":47.391429,
            "lon":19.106181
        },
        {
            "id":"F04231",
            "name":"Szent István út",
            "lat":47.391825,
            "lon":19.10634
        },
        {
            "id":"F04232",
            "name":"Erdősor utca",
            "lat":47.410061,
            "lon":19.072372
        },
        {
            "id":"F04233",
            "name":"Csikó sétány",
            "lat":47.409189,
            "lon":19.072981
        },
        {
            "id":"F04234",
            "name":"Csille utca",
            "lat":47.406651,
            "lon":19.07722
        },
        {
            "id":"F04235",
            "name":"Szent László utcai lakótelep",
            "lat":47.406848,
            "lon":19.080228
        },
        {
            "id":"F04236",
            "name":"Fémmű utca",
            "lat":47.408845,
            "lon":19.078308
        },
        {
            "id":"F04237",
            "name":"Posztó utca",
            "lat":47.410861,
            "lon":19.076149
        },
        {
            "id":"F04238",
            "name":"Festő utca",
            "lat":47.413541,
            "lon":19.0768
        },
        {
            "id":"F04239",
            "name":"Martinász utca",
            "lat":47.413307,
            "lon":19.077436
        },
        {
            "id":"F04240",
            "name":"Varrógép utca",
            "lat":47.408143,
            "lon":19.082216
        },
        {
            "id":"F04241",
            "name":"Varrógép utca",
            "lat":47.407972,
            "lon":19.082229
        },
        {
            "id":"F04242",
            "name":"Tihanyi utca",
            "lat":47.404697,
            "lon":19.085434
        },
        {
            "id":"F04243",
            "name":"Tihanyi utca",
            "lat":47.405155,
            "lon":19.085275
        },
        {
            "id":"F04244",
            "name":"Fátra utca",
            "lat":47.401845,
            "lon":19.08718
        },
        {
            "id":"F04245",
            "name":"Fátra utca",
            "lat":47.401485,
            "lon":19.087617
        },
        {
            "id":"F04247",
            "name":"Csepel, Királyerdő út",
            "lat":47.390669,
            "lon":19.096418
        },
        {
            "id":"F04248",
            "name":"Martinász utca",
            "lat":47.415465,
            "lon":19.079729
        },
        {
            "id":"F04249",
            "name":"Nyárfás utca",
            "lat":47.415267,
            "lon":19.080286
        },
        {
            "id":"F04250",
            "name":"Borz út",
            "lat":47.413107,
            "lon":19.085638
        },
        {
            "id":"F04251",
            "name":"Orgonás utca",
            "lat":47.413017,
            "lon":19.085956
        },
        {
            "id":"F04252",
            "name":"Pinty utca",
            "lat":47.411406,
            "lon":19.087956
        },
        {
            "id":"F04253",
            "name":"Tölgyes út",
            "lat":47.410623,
            "lon":19.088843
        },
        {
            "id":"F04254",
            "name":"Szarka utca",
            "lat":47.40814,
            "lon":19.090643
        },
        {
            "id":"F04255",
            "name":"Iszalag utca",
            "lat":47.407807,
            "lon":19.090762
        },
        {
            "id":"F04256",
            "name":"Repkény út",
            "lat":47.405882,
            "lon":19.090615
        },
        {
            "id":"F04257",
            "name":"Repkény út",
            "lat":47.40501,
            "lon":19.09076
        },
        {
            "id":"F04258",
            "name":"Királyerdei Művelődési Ház",
            "lat":47.401311,
            "lon":19.094082
        },
        {
            "id":"F04259",
            "name":"Királyerdei Művelődési Ház",
            "lat":47.401068,
            "lon":19.094678
        },
        {
            "id":"F04260",
            "name":"Árnyas utca",
            "lat":47.398323,
            "lon":19.098385
        },
        {
            "id":"F04261",
            "name":"Denevér utca",
            "lat":47.39719,
            "lon":19.099073
        },
        {
            "id":"F04262",
            "name":"Sólyom utca",
            "lat":47.395327,
            "lon":19.100436
        },
        {
            "id":"F04263",
            "name":"Sólyom utca",
            "lat":47.395624,
            "lon":19.100078
        },
        {
            "id":"F04264",
            "name":"Sáska utca",
            "lat":47.394418,
            "lon":19.101733
        },
        {
            "id":"F04265",
            "name":"Hárosi Csárda",
            "lat":47.388582,
            "lon":19.028163
        },
        {
            "id":"F04266",
            "name":"Hárosi Csárda",
            "lat":47.387853,
            "lon":19.026653
        },
        {
            "id":"F04267",
            "name":"Karácsony Sándor utca H",
            "lat":47.426208,
            "lon":19.067091
        },
        {
            "id":"F04268",
            "name":"Karácsony Sándor utca H",
            "lat":47.426946,
            "lon":19.066389
        },
        {
            "id":"F04269",
            "name":"Mansfeld Péter utca",
            "lat":47.425624,
            "lon":19.063008
        },
        {
            "id":"F04272",
            "name":"Csepel",
            "lat":47.421171,
            "lon":19.065803
        },
        {
            "id":"F04273",
            "name":"Vas Gereben utca",
            "lat":47.413319,
            "lon":19.058579
        },
        {
            "id":"F04274",
            "name":"Vas Gereben utca",
            "lat":47.412168,
            "lon":19.057373
        },
        {
            "id":"F04276",
            "name":"Csepel, Csillagtelep",
            "lat":47.410162,
            "lon":19.06046
        },
        {
            "id":"F04277",
            "name":"Csepel, Csillagtelep",
            "lat":47.410414,
            "lon":19.060592
        },
        {
            "id":"F04278",
            "name":"Karácsony Sándor utca",
            "lat":47.425965,
            "lon":19.069914
        },
        {
            "id":"F04279",
            "name":"Karácsony Sándor utca",
            "lat":47.427413,
            "lon":19.070193
        },
        {
            "id":"F04280",
            "name":"Kölcsey utca",
            "lat":47.409973,
            "lon":19.062182
        },
        {
            "id":"F04281",
            "name":"Szabadság utca",
            "lat":47.410108,
            "lon":19.062885
        },
        {
            "id":"F04282",
            "name":"Jupiter utca",
            "lat":47.408345,
            "lon":19.062222
        },
        {
            "id":"F04283",
            "name":"Tejút utca",
            "lat":47.410648,
            "lon":19.056167
        },
        {
            "id":"F04284",
            "name":"Tejút utca",
            "lat":47.410027,
            "lon":19.055531
        },
        {
            "id":"F04285",
            "name":"Csepeli temető",
            "lat":47.405764,
            "lon":19.053264
        },
        {
            "id":"F04286",
            "name":"Csepeli temető",
            "lat":47.405989,
            "lon":19.053569
        },
        {
            "id":"F04287",
            "name":"Hárosi iskola",
            "lat":47.399791,
            "lon":19.050945
        },
        {
            "id":"F04288",
            "name":"Hárosi iskola",
            "lat":47.399818,
            "lon":19.051157
        },
        {
            "id":"F04289",
            "name":"Almafa utca",
            "lat":47.393818,
            "lon":19.040255
        },
        {
            "id":"F04290",
            "name":"Almafa utca",
            "lat":47.393764,
            "lon":19.039911
        },
        {
            "id":"F04291",
            "name":"Kossuth Lajos utca (Völgy utca)",
            "lat":47.419111,
            "lon":19.066346
        },
        {
            "id":"F04292",
            "name":"Völgy utca",
            "lat":47.419048,
            "lon":19.065511
        },
        {
            "id":"F04293",
            "name":"Völgy utca",
            "lat":47.419066,
            "lon":19.06571
        },
        {
            "id":"F04294",
            "name":"Csepel H",
            "lat":47.421819,
            "lon":19.065777
        },
        {
            "id":"F04295",
            "name":"Deák tér",
            "lat":47.426414,
            "lon":19.072247
        },
        {
            "id":"F04296",
            "name":"Deák tér",
            "lat":47.426963,
            "lon":19.072154
        },
        {
            "id":"F04297",
            "name":"Csepeli híd",
            "lat":47.460577,
            "lon":19.071904
        },
        {
            "id":"F04298",
            "name":"Csepeli híd",
            "lat":47.460676,
            "lon":19.072249
        },
        {
            "id":"F04299",
            "name":"Szállító utca 6.",
            "lat":47.441972,
            "lon":19.083882
        },
        {
            "id":"F04300",
            "name":"Közterületfenntartó Zrt.",
            "lat":47.441965,
            "lon":19.076656
        },
        {
            "id":"F04301",
            "name":"Közterületfenntartó Zrt.",
            "lat":47.441965,
            "lon":19.076881
        },
        {
            "id":"F04302",
            "name":"Szállító utca",
            "lat":47.441749,
            "lon":19.077809
        },
        {
            "id":"F04303",
            "name":"Szállító utca",
            "lat":47.441758,
            "lon":19.077769
        },
        {
            "id":"F04306",
            "name":"Papírgyár",
            "lat":47.434723,
            "lon":19.081451
        },
        {
            "id":"F04307",
            "name":"Papírgyár",
            "lat":47.435002,
            "lon":19.083148
        },
        {
            "id":"F04311",
            "name":"Corvin-csomópont",
            "lat":47.438872,
            "lon":19.071616
        },
        {
            "id":"F04312",
            "name":"Corvin-csomópont",
            "lat":47.437928,
            "lon":19.071603
        },
        {
            "id":"F04314",
            "name":"Csepel, Kossuth Lajos utca",
            "lat":47.43469,
            "lon":19.07062
        },
        {
            "id":"F04315",
            "name":"Ady Endre út (Kossuth Lajos utca)",
            "lat":47.434294,
            "lon":19.070739
        },
        {
            "id":"F04316",
            "name":"Védgát utca",
            "lat":47.435039,
            "lon":19.076387
        },
        {
            "id":"F04317",
            "name":"Védgát utca",
            "lat":47.434931,
            "lon":19.076679
        },
        {
            "id":"F04318",
            "name":"Szent Imre tér H",
            "lat":47.429824,
            "lon":19.067384
        },
        {
            "id":"F04319",
            "name":"Szent Imre tér",
            "lat":47.431929,
            "lon":19.067756
        },
        {
            "id":"F04320",
            "name":"Szent Imre tér H",
            "lat":47.431164,
            "lon":19.067835
        },
        {
            "id":"F04321",
            "name":"Kiss János altábornagy utca",
            "lat":47.431883,
            "lon":19.071454
        },
        {
            "id":"F04322",
            "name":"Szent Imre tér",
            "lat":47.430691,
            "lon":19.067563
        },
        {
            "id":"F04323",
            "name":"Szent Imre tér",
            "lat":47.431227,
            "lon":19.070327
        },
        {
            "id":"F04324",
            "name":"Szent Imre tér",
            "lat":47.431236,
            "lon":19.070486
        },
        {
            "id":"F04325",
            "name":"Kossuth Lajos utca",
            "lat":47.430345,
            "lon":19.071215
        },
        {
            "id":"F04327",
            "name":"Csepel, Szent Imre tér",
            "lat":47.430795,
            "lon":19.070526
        },
        {
            "id":"F04328",
            "name":"Csepel, Szent Imre tér",
            "lat":47.430795,
            "lon":19.070645
        },
        {
            "id":"F04329",
            "name":"Csepel, Szent Imre tér",
            "lat":47.430795,
            "lon":19.070751
        },
        {
            "id":"F04330",
            "name":"Csepel, Szent Imre tér",
            "lat":47.430795,
            "lon":19.07087
        },
        {
            "id":"F04332",
            "name":"Csepel, Szent Imre tér",
            "lat":47.430795,
            "lon":19.07099
        },
        {
            "id":"F04333",
            "name":"Csepel, Szent Imre tér",
            "lat":47.430795,
            "lon":19.071096
        },
        {
            "id":"F04334",
            "name":"Iskola tér",
            "lat":47.411511,
            "lon":19.065522
        },
        {
            "id":"F04335",
            "name":"Iskola tér",
            "lat":47.41134,
            "lon":19.065416
        },
        {
            "id":"F04336",
            "name":"Csepel H",
            "lat":47.421585,
            "lon":19.065737
        },
        {
            "id":"F04337",
            "name":"Rákóczi tér",
            "lat":47.422661,
            "lon":19.080489
        },
        {
            "id":"F04338",
            "name":"Rákóczi tér",
            "lat":47.422589,
            "lon":19.080105
        },
        {
            "id":"F04339",
            "name":"Csepeli Mátyás utca",
            "lat":47.417868,
            "lon":19.076351
        },
        {
            "id":"F04340",
            "name":"Cseh Mihály utca",
            "lat":47.417598,
            "lon":19.076868
        },
        {
            "id":"F04341",
            "name":"Hollandi csárda",
            "lat":47.411969,
            "lon":19.097828
        },
        {
            "id":"F04342",
            "name":"Hollandi csárda",
            "lat":47.412293,
            "lon":19.097484
        },
        {
            "id":"F04343",
            "name":"Uzsoki utca",
            "lat":47.395771,
            "lon":19.092117
        },
        {
            "id":"F04344",
            "name":"Uzsoki utca",
            "lat":47.39551,
            "lon":19.092501
        },
        {
            "id":"F04345",
            "name":"Csorbatói utca",
            "lat":47.393342,
            "lon":19.094062
        },
        {
            "id":"F04346",
            "name":"Csorbatói utca",
            "lat":47.393171,
            "lon":19.094367
        },
        {
            "id":"F04347",
            "name":"Olt utca",
            "lat":47.398498,
            "lon":19.089894
        },
        {
            "id":"F04348",
            "name":"Orsova utca",
            "lat":47.398147,
            "lon":19.090331
        },
        {
            "id":"F04349",
            "name":"Erdősor utca",
            "lat":47.416674,
            "lon":19.061442
        },
        {
            "id":"F04350",
            "name":"Erdősor utca",
            "lat":47.416872,
            "lon":19.061773
        },
        {
            "id":"F04351",
            "name":"Szilvafa utca",
            "lat":47.395546,
            "lon":19.043553
        },
        {
            "id":"F04352",
            "name":"Szilvafa utca",
            "lat":47.395168,
            "lon":19.043037
        },
        {
            "id":"F04353",
            "name":"Vízművek lakótelep",
            "lat":47.391542,
            "lon":19.035738
        },
        {
            "id":"F04354",
            "name":"Vízművek lakótelep",
            "lat":47.391254,
            "lon":19.035381
        },
        {
            "id":"F04355",
            "name":"Vámhivatal",
            "lat":47.441964,
            "lon":19.080395
        },
        {
            "id":"F04356",
            "name":"Vámhivatal",
            "lat":47.441964,
            "lon":19.080647
        },
        {
            "id":"F04357",
            "name":"Szállító utca 6.",
            "lat":47.441972,
            "lon":19.08363
        },
        {
            "id":"F04358",
            "name":"Szabadkikötő H",
            "lat":47.444845,
            "lon":19.071804
        },
        {
            "id":"F04359",
            "name":"Szabadkikötő H",
            "lat":47.444593,
            "lon":19.07195
        },
        {
            "id":"F04360",
            "name":"Technikus utca",
            "lat":47.414479,
            "lon":19.064079
        },
        {
            "id":"F04361",
            "name":"Technikus utca",
            "lat":47.415325,
            "lon":19.062992
        },
        {
            "id":"F04362",
            "name":"Határ utca",
            "lat":47.41627,
            "lon":19.0933
        },
        {
            "id":"F04363",
            "name":"Határ utca",
            "lat":47.416666,
            "lon":19.092863
        },
        {
            "id":"F04364",
            "name":"Csepel, Határ utca",
            "lat":47.4161,
            "lon":19.093128
        },
        {
            "id":"F04366",
            "name":"Erdősor utca",
            "lat":47.41653,
            "lon":19.062264
        },
        {
            "id":"F04367",
            "name":"Kossuth Lajos utca",
            "lat":47.416953,
            "lon":19.062979
        },
        {
            "id":"F04368",
            "name":"Szabadkikötő",
            "lat":47.444008,
            "lon":19.071592
        },
        {
            "id":"F04369",
            "name":"Szabadkikötő",
            "lat":47.444944,
            "lon":19.071632
        },
        {
            "id":"F04370",
            "name":"Tordai út",
            "lat":47.440623,
            "lon":19.012578
        },
        {
            "id":"F04371",
            "name":"Tordai út",
            "lat":47.439688,
            "lon":19.012764
        },
        {
            "id":"F04373",
            "name":"Szabina út",
            "lat":47.436828,
            "lon":19.014118
        },
        {
            "id":"F04374",
            "name":"Lomnici utca",
            "lat":47.436433,
            "lon":19.020124
        },
        {
            "id":"F04375",
            "name":"Pék utca",
            "lat":47.442307,
            "lon":19.01849
        },
        {
            "id":"F04376",
            "name":"Pék utca",
            "lat":47.442406,
            "lon":19.018066
        },
        {
            "id":"F04377",
            "name":"Rózsavölgy felső",
            "lat":47.441067,
            "lon":19.023065
        },
        {
            "id":"F04378",
            "name":"Rózsavölgy felső",
            "lat":47.441085,
            "lon":19.022879
        },
        {
            "id":"F04379",
            "name":"Rózsavölgy alsó",
            "lat":47.438414,
            "lon":19.030358
        },
        {
            "id":"F04380",
            "name":"Rózsavölgy alsó",
            "lat":47.438244,
            "lon":19.030703
        },
        {
            "id":"F04381",
            "name":"Leányka utcai lakótelep",
            "lat":47.432272,
            "lon":19.037227
        },
        {
            "id":"F04382",
            "name":"Leányka utcai lakótelep",
            "lat":47.432533,
            "lon":19.037253
        },
        {
            "id":"F04383",
            "name":"Leányka utcai lakótelep",
            "lat":47.433198,
            "lon":19.036948
        },
        {
            "id":"F04384",
            "name":"Leányka utcai lakótelep",
            "lat":47.432461,
            "lon":19.037426
        },
        {
            "id":"F04389",
            "name":"Balatoni út / Dózsa György út",
            "lat":47.419229,
            "lon":18.983542
        },
        {
            "id":"F04390",
            "name":"Balatoni út / Dózsa György út",
            "lat":47.419409,
            "lon":18.983436
        },
        {
            "id":"F04391",
            "name":"Dózsa György út / Kamaraerdei út",
            "lat":47.422256,
            "lon":18.975904
        },
        {
            "id":"F04392",
            "name":"Dózsa György út / Kamaraerdei út",
            "lat":47.42231,
            "lon":18.97601
        },
        {
            "id":"F04393",
            "name":"Mechanikai Művek",
            "lat":47.425958,
            "lon":18.969073
        },
        {
            "id":"F04394",
            "name":"Memento Park",
            "lat":47.425939,
            "lon":19.001454
        },
        {
            "id":"F04395",
            "name":"Jégmadár utca",
            "lat":47.430627,
            "lon":19.005493
        },
        {
            "id":"F04396",
            "name":"Savoyai Jenő tér",
            "lat":47.429873,
            "lon":19.037777
        },
        {
            "id":"F04397",
            "name":"Savoyai Jenő tér",
            "lat":47.429618,
            "lon":19.03785
        },
        {
            "id":"F04398",
            "name":"Savoyai Jenő tér",
            "lat":47.4296,
            "lon":19.037771
        },
        {
            "id":"F04400",
            "name":"Savoyai Jenő tér",
            "lat":47.428866,
            "lon":19.037207
        },
        {
            "id":"F04402",
            "name":"Savoyai Jenő tér",
            "lat":47.429097,
            "lon":19.037599
        },
        {
            "id":"F04403",
            "name":"Városház tér",
            "lat":47.426515,
            "lon":19.038275
        },
        {
            "id":"F04404",
            "name":"Városház tér",
            "lat":47.42638,
            "lon":19.039508
        },
        {
            "id":"F04405",
            "name":"Városház tér",
            "lat":47.426758,
            "lon":19.039349
        },
        {
            "id":"F04406",
            "name":"Városház tér",
            "lat":47.426722,
            "lon":19.039256
        },
        {
            "id":"F04407",
            "name":"Tóth József utca",
            "lat":47.42155,
            "lon":19.041563
        },
        {
            "id":"F04408",
            "name":"Tóth József utca",
            "lat":47.42182,
            "lon":19.041086
        },
        {
            "id":"F04409",
            "name":"Tóth József utca",
            "lat":47.421226,
            "lon":19.040834
        },
        {
            "id":"F04410",
            "name":"Komló utca",
            "lat":47.421712,
            "lon":19.035811
        },
        {
            "id":"F04411",
            "name":"Kereszt utca",
            "lat":47.422476,
            "lon":19.03585
        },
        {
            "id":"F04412",
            "name":"Budafoki temető",
            "lat":47.423019,
            "lon":19.034041
        },
        {
            "id":"F04413",
            "name":"Mező utca",
            "lat":47.421837,
            "lon":19.032113
        },
        {
            "id":"F04414",
            "name":"Víg utca (Sporttelep)",
            "lat":47.422898,
            "lon":19.029701
        },
        {
            "id":"F04415",
            "name":"Víg utca (Sporttelep)",
            "lat":47.422943,
            "lon":19.030337
        },
        {
            "id":"F04416",
            "name":"Lőcsei utca",
            "lat":47.42386,
            "lon":19.025048
        },
        {
            "id":"F04417",
            "name":"Lőcsei utca",
            "lat":47.423833,
            "lon":19.024412
        },
        {
            "id":"F04418",
            "name":"Árpád utca",
            "lat":47.426018,
            "lon":19.023218
        },
        {
            "id":"F04419",
            "name":"Árpád utca",
            "lat":47.426648,
            "lon":19.022807
        },
        {
            "id":"F04420",
            "name":"Arany János utca",
            "lat":47.428393,
            "lon":19.02388
        },
        {
            "id":"F04421",
            "name":"Regényes utca",
            "lat":47.429814,
            "lon":19.02144
        },
        {
            "id":"F04422",
            "name":"Kiránduló utca",
            "lat":47.427726,
            "lon":19.020314
        },
        {
            "id":"F04423",
            "name":"Arató utca",
            "lat":47.424425,
            "lon":19.020064
        },
        {
            "id":"F04424",
            "name":"Arató utca",
            "lat":47.424425,
            "lon":19.020555
        },
        {
            "id":"F04425",
            "name":"Kazinczy utca",
            "lat":47.425054,
            "lon":19.016114
        },
        {
            "id":"F04426",
            "name":"Kazinczy utca",
            "lat":47.425027,
            "lon":19.017055
        },
        {
            "id":"F04427",
            "name":"Karácsony utca",
            "lat":47.425664,
            "lon":19.012773
        },
        {
            "id":"F04428",
            "name":"Karácsony utca",
            "lat":47.425664,
            "lon":19.012243
        },
        {
            "id":"F04429",
            "name":"Liszt Ferenc út",
            "lat":47.428218,
            "lon":19.008451
        },
        {
            "id":"F04430",
            "name":"Liszt Ferenc út",
            "lat":47.428532,
            "lon":19.007933
        },
        {
            "id":"F04431",
            "name":"Háros utca",
            "lat":47.411366,
            "lon":19.026193
        },
        {
            "id":"F04432",
            "name":"Háros utca",
            "lat":47.411456,
            "lon":19.025941
        },
        {
            "id":"F04433",
            "name":"Háros vasútállomás",
            "lat":47.412383,
            "lon":19.032686
        },
        {
            "id":"F04434",
            "name":"Háros vasútállomás",
            "lat":47.412458,
            "lon":19.033779
        },
        {
            "id":"F04435",
            "name":"Vágóhíd utca",
            "lat":47.4143,
            "lon":19.038516
        },
        {
            "id":"F04436",
            "name":"Vágóhíd utca",
            "lat":47.414426,
            "lon":19.038542
        },
        {
            "id":"F04437",
            "name":"Brassói utca",
            "lat":47.424492,
            "lon":19.002688
        },
        {
            "id":"F04438",
            "name":"Brassói utca",
            "lat":47.424393,
            "lon":19.002608
        },
        {
            "id":"F04439",
            "name":"Aradi utca",
            "lat":47.41906,
            "lon":19.006735
        },
        {
            "id":"F04440",
            "name":"Aradi utca",
            "lat":47.41906,
            "lon":19.006602
        },
        {
            "id":"F04441",
            "name":"Nyél utca",
            "lat":47.414526,
            "lon":19.004128
        },
        {
            "id":"F04442",
            "name":"Nyél utca",
            "lat":47.414886,
            "lon":19.004194
        },
        {
            "id":"F04443",
            "name":"Park utca",
            "lat":47.412359,
            "lon":19.006806
        },
        {
            "id":"F04444",
            "name":"Park utca",
            "lat":47.412314,
            "lon":19.006488
        },
        {
            "id":"F04445",
            "name":"Aszály utca",
            "lat":47.413547,
            "lon":19.00984
        },
        {
            "id":"F04446",
            "name":"Aszály utca",
            "lat":47.413745,
            "lon":19.010754
        },
        {
            "id":"F04447",
            "name":"Őszibarack utca",
            "lat":47.415356,
            "lon":19.012476
        },
        {
            "id":"F04448",
            "name":"Őszibarack utca",
            "lat":47.415599,
            "lon":19.01286
        },
        {
            "id":"F04449",
            "name":"Rizling utca (Sportpálya)",
            "lat":47.414718,
            "lon":19.015643
        },
        {
            "id":"F04450",
            "name":"Rizling utca (Sportpálya)",
            "lat":47.414889,
            "lon":19.01563
        },
        {
            "id":"F04451",
            "name":"Tűztorony",
            "lat":47.413172,
            "lon":19.018003
        },
        {
            "id":"F04452",
            "name":"Tűztorony",
            "lat":47.413361,
            "lon":19.017592
        },
        {
            "id":"F04453",
            "name":"Jókai Mór utca",
            "lat":47.410096,
            "lon":19.020257
        },
        {
            "id":"F04454",
            "name":"Jókai Mór utca",
            "lat":47.410105,
            "lon":19.020642
        },
        {
            "id":"F04455",
            "name":"Lépcsős utca",
            "lat":47.408359,
            "lon":19.016455
        },
        {
            "id":"F04456",
            "name":"Lépcsős utca",
            "lat":47.408179,
            "lon":19.016018
        },
        {
            "id":"F04457",
            "name":"Budatétényi sorompó",
            "lat":47.403158,
            "lon":19.010179
        },
        {
            "id":"F04458",
            "name":"Budatétényi sorompó",
            "lat":47.403797,
            "lon":19.011066
        },
        {
            "id":"F04459",
            "name":"Tűzliliom utca",
            "lat":47.404371,
            "lon":19.006574
        },
        {
            "id":"F04460",
            "name":"Tűzliliom utca",
            "lat":47.404209,
            "lon":19.006574
        },
        {
            "id":"F04461",
            "name":"Rákóczi út",
            "lat":47.405909,
            "lon":19.005261
        },
        {
            "id":"F04462",
            "name":"Rákóczi út",
            "lat":47.405405,
            "lon":19.005606
        },
        {
            "id":"F04463",
            "name":"Terv utca",
            "lat":47.40804,
            "lon":19.002198
        },
        {
            "id":"F04464",
            "name":"Terv utca",
            "lat":47.40777,
            "lon":19.002477
        },
        {
            "id":"F04466",
            "name":"Dózsa György út",
            "lat":47.399918,
            "lon":19.005001
        },
        {
            "id":"F04467",
            "name":"Dózsa György út",
            "lat":47.399576,
            "lon":19.003875
        },
        {
            "id":"F04468",
            "name":"I. utca",
            "lat":47.401348,
            "lon":19.003807
        },
        {
            "id":"F04469",
            "name":"I. utca",
            "lat":47.401375,
            "lon":19.003609
        },
        {
            "id":"F04470",
            "name":"Szent László utca",
            "lat":47.407057,
            "lon":18.998211
        },
        {
            "id":"F04471",
            "name":"Szent László utca",
            "lat":47.406833,
            "lon":18.998278
        },
        {
            "id":"F04472",
            "name":"Bem tábornok utca",
            "lat":47.409053,
            "lon":18.996076
        },
        {
            "id":"F04473",
            "name":"Bem tábornok utca",
            "lat":47.409215,
            "lon":18.996089
        },
        {
            "id":"F04474",
            "name":"XIII. utca / Dózsa György út",
            "lat":47.411921,
            "lon":18.993052
        },
        {
            "id":"F04475",
            "name":"XIII. utca / Dózsa György út",
            "lat":47.411984,
            "lon":18.993317
        },
        {
            "id":"F04476",
            "name":"Baross Gábor-telep, Ispiláng utca",
            "lat":47.416584,
            "lon":19.001462
        },
        {
            "id":"F04477",
            "name":"Damjanich utca",
            "lat":47.402341,
            "lon":18.990783
        },
        {
            "id":"F04478",
            "name":"Barosstelep vasútállomás",
            "lat":47.399552,
            "lon":18.990839
        },
        {
            "id":"F04479",
            "name":"Bartók Béla út",
            "lat":47.394732,
            "lon":18.992845
        },
        {
            "id":"F04480",
            "name":"Bartók Béla út",
            "lat":47.395254,
            "lon":18.993758
        },
        {
            "id":"F04481",
            "name":"Szerafin-villa",
            "lat":47.407711,
            "lon":18.962687
        },
        {
            "id":"F04482",
            "name":"Szerafin-villa",
            "lat":47.40772,
            "lon":18.96282
        },
        {
            "id":"F04483",
            "name":"Németh-villa",
            "lat":47.404754,
            "lon":18.966481
        },
        {
            "id":"F04484",
            "name":"Németh-villa",
            "lat":47.404755,
            "lon":18.966667
        },
        {
            "id":"F04485",
            "name":"Barackos út / Angeli utca",
            "lat":47.401763,
            "lon":18.971904
        },
        {
            "id":"F04486",
            "name":"Barackos út / Angeli utca",
            "lat":47.400775,
            "lon":18.973933
        },
        {
            "id":"F04487",
            "name":"Szakiskola utca",
            "lat":47.405265,
            "lon":18.975901
        },
        {
            "id":"F04488",
            "name":"Szilvafa utca",
            "lat":47.40517,
            "lon":18.983069
        },
        {
            "id":"F04489",
            "name":"Mátyás király utca",
            "lat":47.404283,
            "lon":18.990648
        },
        {
            "id":"F04490",
            "name":"Nagytétény-Diósd vasútállomás",
            "lat":47.397655,
            "lon":18.976626
        },
        {
            "id":"F04491",
            "name":"Nagytétény-Diósd vasútállomás",
            "lat":47.3977,
            "lon":18.976719
        },
        {
            "id":"F04492",
            "name":"Nagytétényi temető",
            "lat":47.394598,
            "lon":18.978498
        },
        {
            "id":"F04493",
            "name":"Nagytétényi temető",
            "lat":47.394175,
            "lon":18.978896
        },
        {
            "id":"F04494",
            "name":"Petőfi Sándor utca (Kastélymúzeum)",
            "lat":47.393237,
            "lon":18.989336
        },
        {
            "id":"F04495",
            "name":"Petőfi Sándor utca (Kastélymúzeum)",
            "lat":47.393471,
            "lon":18.989653
        },
        {
            "id":"F04496",
            "name":"Szabadság utca",
            "lat":47.392523,
            "lon":18.984131
        },
        {
            "id":"F04497",
            "name":"Szabadság utca",
            "lat":47.392542,
            "lon":18.984594
        },
        {
            "id":"F04498",
            "name":"Angeli utca / Nagytétényi út",
            "lat":47.390957,
            "lon":18.981695
        },
        {
            "id":"F04499",
            "name":"Angeli utca / Nagytétényi út",
            "lat":47.390966,
            "lon":18.981232
        },
        {
            "id":"F04501",
            "name":"Akó utca",
            "lat":47.389596,
            "lon":18.977856
        },
        {
            "id":"F04502",
            "name":"Akó utca",
            "lat":47.38983,
            "lon":18.97824
        },
        {
            "id":"F04503",
            "name":"Nagytétény, Erdélyi utca",
            "lat":47.388271,
            "lon":18.973023
        },
        {
            "id":"F04504",
            "name":"Nagytétény, Erdélyi utca",
            "lat":47.388298,
            "lon":18.972679
        },
        {
            "id":"F04505",
            "name":"Bányalég utca",
            "lat":47.390279,
            "lon":18.963086
        },
        {
            "id":"F04506",
            "name":"Bányalég utca",
            "lat":47.390378,
            "lon":18.963761
        },
        {
            "id":"F04507",
            "name":"Nagytétény, ipartelep",
            "lat":47.388926,
            "lon":18.958519
        },
        {
            "id":"F04508",
            "name":"Nagytétény, ipartelep",
            "lat":47.388917,
            "lon":18.958161
        },
        {
            "id":"F04509",
            "name":"Tenkes utca",
            "lat":47.397388,
            "lon":18.99871
        },
        {
            "id":"F04510",
            "name":"Tenkes utca",
            "lat":47.396947,
            "lon":18.998009
        },
        {
            "id":"F04511",
            "name":"Tátra utca",
            "lat":47.403919,
            "lon":19.001089
        },
        {
            "id":"F04512",
            "name":"Tátra utca",
            "lat":47.403686,
            "lon":19.001487
        },
        {
            "id":"F04513",
            "name":"XVI. utca",
            "lat":47.41392,
            "lon":18.996283
        },
        {
            "id":"F04514",
            "name":"XVI. utca",
            "lat":47.413866,
            "lon":18.996363
        },
        {
            "id":"F04515",
            "name":"Diósdi utca",
            "lat":47.403434,
            "lon":18.968802
        },
        {
            "id":"F04516",
            "name":"Diósdi utca",
            "lat":47.403272,
            "lon":18.969266
        },
        {
            "id":"F04517",
            "name":"DEXTER",
            "lat":47.405176,
            "lon":19.022261
        },
        {
            "id":"F04521",
            "name":"Mátra utca",
            "lat":47.400258,
            "lon":18.99941
        },
        {
            "id":"F04523",
            "name":"Soroksár, központi raktárak",
            "lat":47.378255,
            "lon":19.130467
        },
        {
            "id":"F04524",
            "name":"Dinnyehegyi út",
            "lat":47.416013,
            "lon":19.134408
        },
        {
            "id":"F04525",
            "name":"Dinnyehegyi út",
            "lat":47.417137,
            "lon":19.135828
        },
        {
            "id":"F04526",
            "name":"Soroksár, Molnár-sziget",
            "lat":47.398196,
            "lon":19.108513
        },
        {
            "id":"F04527",
            "name":"Hold utca",
            "lat":47.418368,
            "lon":19.109139
        },
        {
            "id":"F04528",
            "name":"Festékgyár",
            "lat":47.417036,
            "lon":19.109999
        },
        {
            "id":"F04529",
            "name":"Festékgyár",
            "lat":47.41682,
            "lon":19.11029
        },
        {
            "id":"F04530",
            "name":"Soroksár felső H",
            "lat":47.410343,
            "lon":19.111435
        },
        {
            "id":"F04531",
            "name":"Soroksár felső H",
            "lat":47.410289,
            "lon":19.111621
        },
        {
            "id":"F04532",
            "name":"Tárcsás utca",
            "lat":47.406636,
            "lon":19.114399
        },
        {
            "id":"F04533",
            "name":"Tárcsás utca",
            "lat":47.40624,
            "lon":19.11465
        },
        {
            "id":"F04534",
            "name":"Soroksár felső",
            "lat":47.409938,
            "lon":19.111832
        },
        {
            "id":"F04535",
            "name":"Soroksár felső",
            "lat":47.40938,
            "lon":19.112017
        },
        {
            "id":"F04536",
            "name":"Tárcsás utca",
            "lat":47.405152,
            "lon":19.112608
        },
        {
            "id":"F04537",
            "name":"Tárcsás utca",
            "lat":47.405728,
            "lon":19.112636
        },
        {
            "id":"F04538",
            "name":"Soroksár, Hősök tere H",
            "lat":47.39979,
            "lon":19.114496
        },
        {
            "id":"F04539",
            "name":"Soroksár, Hősök tere H",
            "lat":47.398936,
            "lon":19.114601
        },
        {
            "id":"F04540",
            "name":"Soroksár, Hősök tere",
            "lat":47.399538,
            "lon":19.114655
        },
        {
            "id":"F04541",
            "name":"Soroksár, Hősök tere",
            "lat":47.39908,
            "lon":19.114906
        },
        {
            "id":"F04542",
            "name":"Soroksár, Hősök tere H",
            "lat":47.400176,
            "lon":19.116511
        },
        {
            "id":"F04543",
            "name":"Soroksár, Hősök tere H",
            "lat":47.399996,
            "lon":19.116683
        },
        {
            "id":"F04544",
            "name":"Soroksár vasútállomás",
            "lat":47.400947,
            "lon":19.121294
        },
        {
            "id":"F04545",
            "name":"Soroksár vasútállomás",
            "lat":47.400785,
            "lon":19.120565
        },
        {
            "id":"F04546",
            "name":"Szent István utca",
            "lat":47.391812,
            "lon":19.114963
        },
        {
            "id":"F04547",
            "name":"Szent István utca",
            "lat":47.391533,
            "lon":19.114857
        },
        {
            "id":"F04548",
            "name":"Millenniumtelep",
            "lat":47.379898,
            "lon":19.104976
        },
        {
            "id":"F04549",
            "name":"Millenniumtelep",
            "lat":47.379584,
            "lon":19.104817
        },
        {
            "id":"F04550",
            "name":"Zsellér dűlő",
            "lat":47.389905,
            "lon":19.119842
        },
        {
            "id":"F04551",
            "name":"Zsellér dűlő",
            "lat":47.3892,
            "lon":19.120232
        },
        {
            "id":"F04552",
            "name":"Polimer",
            "lat":47.382332,
            "lon":19.12691
        },
        {
            "id":"F04553",
            "name":"Polimer",
            "lat":47.382632,
            "lon":19.126758
        },
        {
            "id":"F04554",
            "name":"Vecsés út, sorompó",
            "lat":47.398722,
            "lon":19.12512
        },
        {
            "id":"F04555",
            "name":"Vecsés út, sorompó",
            "lat":47.39891,
            "lon":19.126538
        },
        {
            "id":"F04556",
            "name":"Szamaránszki dűlő",
            "lat":47.399814,
            "lon":19.133984
        },
        {
            "id":"F04557",
            "name":"Szamaránszki dűlő",
            "lat":47.399921,
            "lon":19.134143
        },
        {
            "id":"F04558",
            "name":"Telefondűlő út",
            "lat":47.401032,
            "lon":19.140134
        },
        {
            "id":"F04559",
            "name":"Telefondűlő út",
            "lat":47.401355,
            "lon":19.140797
        },
        {
            "id":"F04560",
            "name":"Kertészeti Egyetem",
            "lat":47.398686,
            "lon":19.148966
        },
        {
            "id":"F04561",
            "name":"Kertészeti Egyetem",
            "lat":47.398596,
            "lon":19.149257
        },
        {
            "id":"F04562",
            "name":"Víztorony tér",
            "lat":47.389473,
            "lon":19.161386
        },
        {
            "id":"F04563",
            "name":"Víztorony tér",
            "lat":47.389257,
            "lon":19.161531
        },
        {
            "id":"F04564",
            "name":"Erzsébeti temető",
            "lat":47.418675,
            "lon":19.122154
        },
        {
            "id":"F04565",
            "name":"Erzsébeti temető",
            "lat":47.418711,
            "lon":19.122551
        },
        {
            "id":"F04566",
            "name":"Tangazdaság (Óvoda)",
            "lat":47.390734,
            "lon":19.159667
        },
        {
            "id":"F04567",
            "name":"Tangazdaság (Óvoda)",
            "lat":47.390863,
            "lon":19.159302
        },
        {
            "id":"F04568",
            "name":"Erzsébet utca",
            "lat":47.403244,
            "lon":19.115494
        },
        {
            "id":"F04569",
            "name":"Erzsébet utca",
            "lat":47.402749,
            "lon":19.115785
        },
        {
            "id":"F04570",
            "name":"Ócsai úti felüljáró",
            "lat":47.38334,
            "lon":19.125733
        },
        {
            "id":"F04571",
            "name":"Ócsai úti felüljáró",
            "lat":47.383646,
            "lon":19.125707
        },
        {
            "id":"F04572",
            "name":"Szent László utca",
            "lat":47.420769,
            "lon":19.126053
        },
        {
            "id":"F04573",
            "name":"Szent László utca",
            "lat":47.42084,
            "lon":19.126358
        },
        {
            "id":"F04574",
            "name":"Újtelep út",
            "lat":47.415637,
            "lon":19.132883
        },
        {
            "id":"F04575",
            "name":"Szent László utca",
            "lat":47.415699,
            "lon":19.133308
        },
        {
            "id":"F04576",
            "name":"Szentlőrinci úti lakótelep",
            "lat":47.416871,
            "lon":19.130526
        },
        {
            "id":"F04577",
            "name":"Szentlőrinci úti lakótelep",
            "lat":47.4166,
            "lon":19.131056
        },
        {
            "id":"F04578",
            "name":"Pécel, Pesti út 110.",
            "lat":47.491857,
            "lon":19.31693
        },
        {
            "id":"F04579",
            "name":"Pécel, Pesti út 110.",
            "lat":47.491678,
            "lon":19.316464
        },
        {
            "id":"F04580",
            "name":"Orvosi rendelő",
            "lat":47.490139,
            "lon":19.331705
        },
        {
            "id":"F04581",
            "name":"Orvosi rendelő",
            "lat":47.490054,
            "lon":19.333429
        },
        {
            "id":"F04582",
            "name":"Szent Imre körút",
            "lat":47.482664,
            "lon":19.342598
        },
        {
            "id":"F04583",
            "name":"Szent Imre körút",
            "lat":47.484547,
            "lon":19.342376
        },
        {
            "id":"F04584",
            "name":"Kistarcsa, kórház H",
            "lat":47.539805,
            "lon":19.252603
        },
        {
            "id":"F04585",
            "name":"Határ utca",
            "lat":47.491491,
            "lon":19.323112
        },
        {
            "id":"F04586",
            "name":"Határ utca",
            "lat":47.491475,
            "lon":19.322435
        },
        {
            "id":"F04587",
            "name":"Faiskola utcai átjáró",
            "lat":47.490799,
            "lon":19.326692
        },
        {
            "id":"F04588",
            "name":"Faiskola utcai átjáró",
            "lat":47.490782,
            "lon":19.326307
        },
        {
            "id":"F04589",
            "name":"Ráday Gedeon tér",
            "lat":47.491822,
            "lon":19.342331
        },
        {
            "id":"F04590",
            "name":"Ráday Gedeon tér",
            "lat":47.491866,
            "lon":19.342477
        },
        {
            "id":"F04591",
            "name":"Kossuth tér",
            "lat":47.488029,
            "lon":19.340969
        },
        {
            "id":"F04592",
            "name":"Kossuth tér",
            "lat":47.487957,
            "lon":19.341194
        },
        {
            "id":"F04593",
            "name":"Pécel, Kun József utca",
            "lat":47.477653,
            "lon":19.343128
        },
        {
            "id":"F04594",
            "name":"Köztársaság tér",
            "lat":47.490362,
            "lon":19.336244
        },
        {
            "id":"F04595",
            "name":"Köztársaság tér",
            "lat":47.490821,
            "lon":19.336234
        },
        {
            "id":"F04596",
            "name":"Vecsés-nyugat",
            "lat":47.417987,
            "lon":19.254473
        },
        {
            "id":"F04597",
            "name":"Vecsés-nyugat",
            "lat":47.418112,
            "lon":19.253447
        },
        {
            "id":"F04598",
            "name":"Repülőtér, P+R",
            "lat":47.429363,
            "lon":19.26379
        },
        {
            "id":"F04599",
            "name":"Liszt Ferenc Airport 2",
            "lat":47.432768,
            "lon":19.261259
        },
        {
            "id":"F04600",
            "name":"Gyál felső vasútállomás",
            "lat":47.388826,
            "lon":19.206048
        },
        {
            "id":"F04601",
            "name":"Gyál felső vasútállomás",
            "lat":47.388141,
            "lon":19.207476
        },
        {
            "id":"F04602",
            "name":"Széchenyi István utca",
            "lat":47.389267,
            "lon":19.21899
        },
        {
            "id":"F04603",
            "name":"Gyál, Vecsési út",
            "lat":47.380893,
            "lon":19.23022
        },
        {
            "id":"F04604",
            "name":"Kőrösi út",
            "lat":47.376028,
            "lon":19.223384
        },
        {
            "id":"F04605",
            "name":"Ady Endre utca",
            "lat":47.385303,
            "lon":19.210368
        },
        {
            "id":"F04606",
            "name":"Ady Endre utca",
            "lat":47.384384,
            "lon":19.211584
        },
        {
            "id":"F04607",
            "name":"Dunaharaszti felső",
            "lat":47.366411,
            "lon":19.092636
        },
        {
            "id":"F04608",
            "name":"Dunaharaszti felső",
            "lat":47.36633,
            "lon":19.092675
        },
        {
            "id":"F04609",
            "name":"Dunaharaszti külső",
            "lat":47.359892,
            "lon":19.08613
        },
        {
            "id":"F04610",
            "name":"Dunaharaszti külső",
            "lat":47.360647,
            "lon":19.086713
        },
        {
            "id":"F04611",
            "name":"Szigetszentmiklós",
            "lat":47.344292,
            "lon":19.050268
        },
        {
            "id":"F04612",
            "name":"Szigetszentmiklós",
            "lat":47.344121,
            "lon":19.050215
        },
        {
            "id":"F04613",
            "name":"József Attila-telep",
            "lat":47.337122,
            "lon":19.034441
        },
        {
            "id":"F04614",
            "name":"József Attila-telep",
            "lat":47.337068,
            "lon":19.03423
        },
        {
            "id":"F04615",
            "name":"Szigetszentmiklós alsó",
            "lat":47.336453,
            "lon":19.018973
        },
        {
            "id":"F04616",
            "name":"Szigetszentmiklós alsó",
            "lat":47.336435,
            "lon":19.020257
        },
        {
            "id":"F04617",
            "name":"Szigetszentmiklós-Gyártelep",
            "lat":47.33351,
            "lon":19.003249
        },
        {
            "id":"F04618",
            "name":"Szigetszentmiklós-Gyártelep",
            "lat":47.333726,
            "lon":19.004439
        },
        {
            "id":"F04619",
            "name":"Szigethalom",
            "lat":47.330069,
            "lon":18.993884
        },
        {
            "id":"F04620",
            "name":"Szigethalom",
            "lat":47.330012,
            "lon":18.993852
        },
        {
            "id":"F04621",
            "name":"Szigethalom alsó",
            "lat":47.321444,
            "lon":18.983569
        },
        {
            "id":"F04622",
            "name":"Szigethalom alsó",
            "lat":47.321291,
            "lon":18.983489
        },
        {
            "id":"F04623",
            "name":"Tököl",
            "lat":47.313477,
            "lon":18.974254
        },
        {
            "id":"F04624",
            "name":"Tököl",
            "lat":47.313327,
            "lon":18.974207
        },
        {
            "id":"F04627",
            "name":"Szigetcsép",
            "lat":47.26993,
            "lon":18.956149
        },
        {
            "id":"F04628",
            "name":"Szigetcsép",
            "lat":47.270404,
            "lon":18.956287
        },
        {
            "id":"F04631",
            "name":"Szigetszentmárton-Szigetújfalu",
            "lat":47.227365,
            "lon":18.946239
        },
        {
            "id":"F04632",
            "name":"Szigetszentmárton-Szigetújfalu",
            "lat":47.228459,
            "lon":18.945901
        },
        {
            "id":"F04633",
            "name":"Horgásztanyák",
            "lat":47.213029,
            "lon":18.952835
        },
        {
            "id":"F04634",
            "name":"Horgásztanyák",
            "lat":47.214135,
            "lon":18.953071
        },
        {
            "id":"F04635",
            "name":"Angyalisziget",
            "lat":47.19934,
            "lon":18.944796
        },
        {
            "id":"F04636",
            "name":"Angyalisziget",
            "lat":47.200276,
            "lon":18.945335
        },
        {
            "id":"F04638",
            "name":"Ráckeve",
            "lat":47.175502,
            "lon":18.941748
        },
        {
            "id":"F04639",
            "name":"Háros",
            "lat":47.38557,
            "lon":19.020184
        },
        {
            "id":"F04641",
            "name":"Gát utca",
            "lat":47.382986,
            "lon":19.013351
        },
        {
            "id":"F04642",
            "name":"Gát utca",
            "lat":47.382614,
            "lon":19.01271
        },
        {
            "id":"F04643",
            "name":"Árpád utca",
            "lat":47.48009,
            "lon":19.343101
        },
        {
            "id":"F04644",
            "name":"Árpád utca",
            "lat":47.479985,
            "lon":19.343227
        },
        {
            "id":"F04645",
            "name":"Pécel vasútállomás",
            "lat":47.493413,
            "lon":19.339207
        },
        {
            "id":"F04646",
            "name":"Pécel vasútállomás",
            "lat":47.493317,
            "lon":19.338052
        },
        {
            "id":"F04647",
            "name":"Szent István utca",
            "lat":47.378595,
            "lon":19.226941
        },
        {
            "id":"F04648",
            "name":"Rákóczi Ferenc utca",
            "lat":47.387626,
            "lon":19.215448
        },
        {
            "id":"F04649",
            "name":"Bocskai István utca",
            "lat":47.383451,
            "lon":19.228017
        },
        {
            "id":"F04650",
            "name":"Somogyi Béla utca",
            "lat":47.38722,
            "lon":19.222175
        },
        {
            "id":"F04651",
            "name":"Bocskai István utca",
            "lat":47.377868,
            "lon":19.220026
        },
        {
            "id":"F04652",
            "name":"Somogyi Béla utca",
            "lat":47.381673,
            "lon":19.214277
        },
        {
            "id":"F04653",
            "name":"Lakihegy, Cseresznyés utca",
            "lat":47.376945,
            "lon":19.007059
        },
        {
            "id":"F04655",
            "name":"Csömör",
            "lat":47.545025,
            "lon":19.225065
        },
        {
            "id":"F04656",
            "name":"Kistarcsa, kórház",
            "lat":47.539459,
            "lon":19.249613
        },
        {
            "id":"F04657",
            "name":"Kistarcsa, kórház",
            "lat":47.53867,
            "lon":19.248455
        },
        {
            "id":"F04658",
            "name":"Kistarcsa",
            "lat":47.545845,
            "lon":19.259734
        },
        {
            "id":"F04659",
            "name":"Kistarcsa",
            "lat":47.545818,
            "lon":19.259867
        },
        {
            "id":"F04660",
            "name":"Zsófialiget",
            "lat":47.548446,
            "lon":19.264009
        },
        {
            "id":"F04661",
            "name":"Zsófialiget",
            "lat":47.548437,
            "lon":19.264129
        },
        {
            "id":"F04662",
            "name":"Kerepes",
            "lat":47.553433,
            "lon":19.271377
        },
        {
            "id":"F04663",
            "name":"Kerepes",
            "lat":47.552751,
            "lon":19.270417
        },
        {
            "id":"F04664",
            "name":"Szilasliget",
            "lat":47.568896,
            "lon":19.275416
        },
        {
            "id":"F04665",
            "name":"Szilasliget",
            "lat":47.568079,
            "lon":19.274655
        },
        {
            "id":"F04668",
            "name":"Mogyoród",
            "lat":47.597029,
            "lon":19.271853
        },
        {
            "id":"F04669",
            "name":"Mogyoród",
            "lat":47.595986,
            "lon":19.271649
        },
        {
            "id":"F04670",
            "name":"Szentjakab",
            "lat":47.597354,
            "lon":19.290305
        },
        {
            "id":"F04671",
            "name":"Szentjakab",
            "lat":47.597297,
            "lon":19.290405
        },
        {
            "id":"F04672",
            "name":"Gödöllő, Erzsébet park",
            "lat":47.595209,
            "lon":19.341536
        },
        {
            "id":"F04673",
            "name":"Gödöllő, Erzsébet park",
            "lat":47.594934,
            "lon":19.340005
        },
        {
            "id":"F04674",
            "name":"Gödöllő, Szabadság tér",
            "lat":47.597505,
            "lon":19.347599
        },
        {
            "id":"F04675",
            "name":"Gödöllő, Szabadság tér",
            "lat":47.597827,
            "lon":19.348252
        },
        {
            "id":"F04676",
            "name":"Gödöllő, Palotakert",
            "lat":47.598525,
            "lon":19.356661
        },
        {
            "id":"F04677",
            "name":"Gödöllő, Palotakert",
            "lat":47.598453,
            "lon":19.356634
        },
        {
            "id":"F04679",
            "name":"Gödöllő",
            "lat":47.593341,
            "lon":19.357787
        },
        {
            "id":"F04680",
            "name":"Lacházi fogadó",
            "lat":47.379465,
            "lon":19.00907
        },
        {
            "id":"F04681",
            "name":"Lacházi fogadó",
            "lat":47.38005,
            "lon":19.009785
        },
        {
            "id":"F04682",
            "name":"Erkel Ferenc utca",
            "lat":47.517165,
            "lon":18.936313
        },
        {
            "id":"F04683",
            "name":"Erkel Ferenc utca",
            "lat":47.516454,
            "lon":18.935704
        },
        {
            "id":"F04684",
            "name":"Gyógyszertár",
            "lat":47.513483,
            "lon":18.932471
        },
        {
            "id":"F04685",
            "name":"Gyógyszertár",
            "lat":47.513744,
            "lon":18.932948
        },
        {
            "id":"F04688",
            "name":"Pannóniatelep",
            "lat":47.652488,
            "lon":19.065294
        },
        {
            "id":"F04689",
            "name":"Pannóniatelep",
            "lat":47.651894,
            "lon":19.064508
        },
        {
            "id":"F04690",
            "name":"Pomáz",
            "lat":47.643188,
            "lon":19.032032
        },
        {
            "id":"F04691",
            "name":"Pomáz",
            "lat":47.642719,
            "lon":19.032695
        },
        {
            "id":"F04692",
            "name":"Budakalász, Lenfonó",
            "lat":47.621692,
            "lon":19.046912
        },
        {
            "id":"F04693",
            "name":"Budakalász, Lenfonó",
            "lat":47.621863,
            "lon":19.046592
        },
        {
            "id":"F04694",
            "name":"Budakalász",
            "lat":47.616109,
            "lon":19.055019
        },
        {
            "id":"F04695",
            "name":"Budakalász",
            "lat":47.616172,
            "lon":19.054833
        },
        {
            "id":"F04696",
            "name":"Anna kápolna",
            "lat":47.582136,
            "lon":18.939193
        },
        {
            "id":"F04697",
            "name":"Anna kápolna",
            "lat":47.582289,
            "lon":18.939074
        },
        {
            "id":"F04698",
            "name":"Munkás utca",
            "lat":47.587064,
            "lon":18.937162
        },
        {
            "id":"F04699",
            "name":"Munkás utca",
            "lat":47.588044,
            "lon":18.937094
        },
        {
            "id":"F04700",
            "name":"Solymár, községháza",
            "lat":47.592154,
            "lon":18.937099
        },
        {
            "id":"F04701",
            "name":"Solymár, községháza",
            "lat":47.591669,
            "lon":18.937233
        },
        {
            "id":"F04702",
            "name":"Solymár, községháza",
            "lat":47.592524,
            "lon":18.938215
        },
        {
            "id":"F04703",
            "name":"Solymár, PEMÜ",
            "lat":47.597218,
            "lon":18.927753
        },
        {
            "id":"F04704",
            "name":"Dózsa György utca",
            "lat":47.592859,
            "lon":18.931486
        },
        {
            "id":"F04705",
            "name":"József Attila utca",
            "lat":47.592708,
            "lon":18.932577
        },
        {
            "id":"F04706",
            "name":"Solymár, Templom tér",
            "lat":47.591401,
            "lon":18.929721
        },
        {
            "id":"F04707",
            "name":"Templom tér",
            "lat":47.591472,
            "lon":18.929348
        },
        {
            "id":"F04708",
            "name":"Budakeszi, városháza",
            "lat":47.510655,
            "lon":18.929291
        },
        {
            "id":"F04709",
            "name":"Budakeszi, városháza",
            "lat":47.510682,
            "lon":18.92957
        },
        {
            "id":"F04710",
            "name":"Ibolya utca",
            "lat":47.460371,
            "lon":18.926526
        },
        {
            "id":"F04711",
            "name":"Ibolya utca",
            "lat":47.460245,
            "lon":18.926579
        },
        {
            "id":"F04712",
            "name":"Budaörs, Patkó utca",
            "lat":47.458504,
            "lon":18.939342
        },
        {
            "id":"F04713",
            "name":"Budaörs, Patkó utca",
            "lat":47.458999,
            "lon":18.939288
        },
        {
            "id":"F04714",
            "name":"Gimnázium",
            "lat":47.460663,
            "lon":18.940001
        },
        {
            "id":"F04715",
            "name":"Gimnázium",
            "lat":47.460564,
            "lon":18.939802
        },
        {
            "id":"F04716",
            "name":"Budaörs, városháza",
            "lat":47.461254,
            "lon":18.94695
        },
        {
            "id":"F04717",
            "name":"Budaörs, városháza",
            "lat":47.461371,
            "lon":18.946313
        },
        {
            "id":"F04719",
            "name":"Kisfaludy utca",
            "lat":47.460261,
            "lon":18.952814
        },
        {
            "id":"F04720",
            "name":"Kisfaludy utca",
            "lat":47.46028,
            "lon":18.954299
        },
        {
            "id":"F04721",
            "name":"Károly király utca",
            "lat":47.460669,
            "lon":18.956858
        },
        {
            "id":"F04722",
            "name":"Károly király utca",
            "lat":47.460881,
            "lon":18.959796
        },
        {
            "id":"F04724",
            "name":"Budaörsi lakótelep",
            "lat":47.456104,
            "lon":18.94074
        },
        {
            "id":"F04725",
            "name":"Ifjúság utca",
            "lat":47.45667,
            "lon":18.947203
        },
        {
            "id":"F04726",
            "name":"Ifjúság utca",
            "lat":47.456694,
            "lon":18.94668
        },
        {
            "id":"F04727",
            "name":"Csata utca",
            "lat":47.455266,
            "lon":18.960727
        },
        {
            "id":"F04728",
            "name":"Csata utca",
            "lat":47.455653,
            "lon":18.9607
        },
        {
            "id":"F04729",
            "name":"Agip utca",
            "lat":47.449133,
            "lon":18.962739
        },
        {
            "id":"F04730",
            "name":"Agip utca",
            "lat":47.450194,
            "lon":18.962419
        },
        {
            "id":"F04731",
            "name":"Kinizsi utca",
            "lat":47.449705,
            "lon":18.969607
        },
        {
            "id":"F04732",
            "name":"Kinizsi utca",
            "lat":47.449633,
            "lon":18.969846
        },
        {
            "id":"F04733",
            "name":"Erdő utca",
            "lat":47.509168,
            "lon":18.926785
        },
        {
            "id":"F04734",
            "name":"Erdő utca",
            "lat":47.508862,
            "lon":18.926547
        },
        {
            "id":"F04735",
            "name":"Aradi utca",
            "lat":47.461784,
            "lon":18.969298
        },
        {
            "id":"F04736",
            "name":"Aradi utca",
            "lat":47.461577,
            "lon":18.968701
        },
        {
            "id":"F04737",
            "name":"Budaörs, benzinkút",
            "lat":47.451423,
            "lon":18.958479
        },
        {
            "id":"F04738",
            "name":"Budaörs, benzinkút",
            "lat":47.453204,
            "lon":18.958436
        },
        {
            "id":"F04739",
            "name":"Hídépítő Zrt.",
            "lat":47.458333,
            "lon":18.906106
        },
        {
            "id":"F04740",
            "name":"Hídépítő Zrt.",
            "lat":47.458332,
            "lon":18.905576
        },
        {
            "id":"F04741",
            "name":"Légimentők",
            "lat":47.455375,
            "lon":18.907467
        },
        {
            "id":"F04742",
            "name":"Légimentők",
            "lat":47.454899,
            "lon":18.90829
        },
        {
            "id":"F04743",
            "name":"Tó utca - vasútállomás",
            "lat":47.450694,
            "lon":18.90488
        },
        {
            "id":"F04744",
            "name":"Tó utca - vasútállomás",
            "lat":47.450794,
            "lon":18.905012
        },
        {
            "id":"F04745",
            "name":"Kerekdomb utca",
            "lat":47.448176,
            "lon":18.905205
        },
        {
            "id":"F04746",
            "name":"Bajor Gizi utca",
            "lat":47.448491,
            "lon":18.90531
        },
        {
            "id":"F04747",
            "name":"Vasút utca",
            "lat":47.446814,
            "lon":18.909293
        },
        {
            "id":"F04748",
            "name":"Vasút utca",
            "lat":47.447084,
            "lon":18.909266
        },
        {
            "id":"F04749",
            "name":"Deák Ferenc utca",
            "lat":47.440955,
            "lon":18.913604
        },
        {
            "id":"F04750",
            "name":"Deák Ferenc utca",
            "lat":47.440775,
            "lon":18.913923
        },
        {
            "id":"F04752",
            "name":"Baross Gábor utca",
            "lat":47.436046,
            "lon":18.915539
        },
        {
            "id":"F04754",
            "name":"Bartók Béla utca",
            "lat":47.432802,
            "lon":18.918848
        },
        {
            "id":"F04755",
            "name":"Törökbálint, Munkácsy Mihály utca",
            "lat":47.431387,
            "lon":18.91673
        },
        {
            "id":"F04756",
            "name":"Törökbálint, Munkácsy Mihály utca",
            "lat":47.431568,
            "lon":18.916928
        },
        {
            "id":"F04757",
            "name":"Harangláb",
            "lat":47.432752,
            "lon":18.913956
        },
        {
            "id":"F04758",
            "name":"Harangláb",
            "lat":47.432526,
            "lon":18.91332
        },
        {
            "id":"F04759",
            "name":"Őszibarack utca",
            "lat":47.436901,
            "lon":18.901219
        },
        {
            "id":"F04761",
            "name":"Károlyi Mihály utca",
            "lat":47.439365,
            "lon":18.900827
        },
        {
            "id":"F04762",
            "name":"Kazinczy Ferenc utca",
            "lat":47.44246,
            "lon":18.901296
        },
        {
            "id":"F04763",
            "name":"Blaha Lujza utca",
            "lat":47.44237,
            "lon":18.901561
        },
        {
            "id":"F04764",
            "name":"Köztársaság tér",
            "lat":47.445118,
            "lon":18.905213
        },
        {
            "id":"F04765",
            "name":"Blaha Lujza utca",
            "lat":47.445821,
            "lon":18.905941
        },
        {
            "id":"F04767",
            "name":"Diósd, Törökbálinti elágazás",
            "lat":47.410612,
            "lon":18.956322
        },
        {
            "id":"F04768",
            "name":"Diósd, Törökbálinti elágazás",
            "lat":47.410675,
            "lon":18.957329
        },
        {
            "id":"F04769",
            "name":"Diósd, Sashegyi út",
            "lat":47.407379,
            "lon":18.951902
        },
        {
            "id":"F04770",
            "name":"Diósd, Sashegyi út",
            "lat":47.407414,
            "lon":18.95165
        },
        {
            "id":"F04771",
            "name":"Gyár utca",
            "lat":47.402425,
            "lon":18.943975
        },
        {
            "id":"F04772",
            "name":"Diósd, városháza",
            "lat":47.408779,
            "lon":18.948772
        },
        {
            "id":"F04773",
            "name":"Csapágygyár",
            "lat":47.40531,
            "lon":18.942207
        },
        {
            "id":"F04774",
            "name":"Külső Bécsi út 35.",
            "lat":47.590141,
            "lon":18.987441
        },
        {
            "id":"F04775",
            "name":"Külső Bécsi út 35.",
            "lat":47.58988,
            "lon":18.987481
        },
        {
            "id":"F04776",
            "name":"Pilisborosjenő, Téglagyári tér",
            "lat":47.596405,
            "lon":18.978165
        },
        {
            "id":"F04777",
            "name":"Rácski telep",
            "lat":47.554826,
            "lon":18.927013
        },
        {
            "id":"F04778",
            "name":"Rácski telep",
            "lat":47.5547,
            "lon":18.927372
        },
        {
            "id":"F04779",
            "name":"Erdészház",
            "lat":47.560689,
            "lon":18.917883
        },
        {
            "id":"F04780",
            "name":"Erdészház",
            "lat":47.560465,
            "lon":18.918389
        },
        {
            "id":"F04781",
            "name":"13-as kilométerkő",
            "lat":47.567101,
            "lon":18.909322
        },
        {
            "id":"F04782",
            "name":"13-as kilométerkő",
            "lat":47.566994,
            "lon":18.909827
        },
        {
            "id":"F04783",
            "name":"Sebestyéndomb",
            "lat":47.571612,
            "lon":18.898491
        },
        {
            "id":"F04784",
            "name":"Sebestyéndomb",
            "lat":47.571604,
            "lon":18.89885
        },
        {
            "id":"F04785",
            "name":"Ady Endre utca",
            "lat":47.575857,
            "lon":18.891261
        },
        {
            "id":"F04786",
            "name":"Ady Endre utca",
            "lat":47.575338,
            "lon":18.89315
        },
        {
            "id":"F04788",
            "name":"Budakeszi, Dózsa György tér",
            "lat":47.50704,
            "lon":18.921361
        },
        {
            "id":"F04790",
            "name":"Budakeszi, Dózsa György tér",
            "lat":47.507355,
            "lon":18.921665
        },
        {
            "id":"F04791",
            "name":"Tulipán utca",
            "lat":47.462381,
            "lon":18.973939
        },
        {
            "id":"F04792",
            "name":"Tulipán utca",
            "lat":47.46221,
            "lon":18.973422
        },
        {
            "id":"F04793",
            "name":"Szentistvántelep",
            "lat":47.629277,
            "lon":19.043166
        },
        {
            "id":"F04794",
            "name":"Szentistvántelep",
            "lat":47.628303,
            "lon":19.043505
        },
        {
            "id":"F04795",
            "name":"Felsőhatár utca",
            "lat":47.463204,
            "lon":18.980875
        },
        {
            "id":"F04796",
            "name":"Felsőhatár utca",
            "lat":47.463105,
            "lon":18.981087
        },
        {
            "id":"F04797",
            "name":"Bajcsy-Zsilinszky utca",
            "lat":47.589941,
            "lon":18.936106
        },
        {
            "id":"F04798",
            "name":"Bajcsy-Zsilinszky utca",
            "lat":47.590238,
            "lon":18.936398
        },
        {
            "id":"F04799",
            "name":"Pilisvörösvári utca",
            "lat":47.594977,
            "lon":18.935763
        },
        {
            "id":"F04800",
            "name":"Pilisvörösvári utca",
            "lat":47.595103,
            "lon":18.935311
        },
        {
            "id":"F04801",
            "name":"Csíki csárda",
            "lat":47.459889,
            "lon":18.921898
        },
        {
            "id":"F04802",
            "name":"Csíki csárda",
            "lat":47.459475,
            "lon":18.92113
        },
        {
            "id":"F04803",
            "name":"Csíki tanya",
            "lat":47.458765,
            "lon":18.914129
        },
        {
            "id":"F04804",
            "name":"Csíki tanya",
            "lat":47.458595,
            "lon":18.915243
        },
        {
            "id":"F04805",
            "name":"Lévai utca",
            "lat":47.459491,
            "lon":18.946714
        },
        {
            "id":"F04806",
            "name":"Lévai utca",
            "lat":47.458673,
            "lon":18.946955
        },
        {
            "id":"F04807",
            "name":"Kötő utca",
            "lat":47.460897,
            "lon":18.949523
        },
        {
            "id":"F04808",
            "name":"Kötő utca",
            "lat":47.460654,
            "lon":18.950174
        },
        {
            "id":"F04809",
            "name":"Templom tér",
            "lat":47.461709,
            "lon":18.964364
        },
        {
            "id":"F04810",
            "name":"Templom tér",
            "lat":47.461601,
            "lon":18.964483
        },
        {
            "id":"F04811",
            "name":"Baross utca",
            "lat":47.45906,
            "lon":18.958705
        },
        {
            "id":"F04812",
            "name":"Téglagyár",
            "lat":47.443848,
            "lon":18.910918
        },
        {
            "id":"F04813",
            "name":"Téglagyár",
            "lat":47.444064,
            "lon":18.910944
        },
        {
            "id":"F04814",
            "name":"Ady Endre utca",
            "lat":47.434929,
            "lon":18.906885
        },
        {
            "id":"F04815",
            "name":"Zrínyi utca",
            "lat":47.435086,
            "lon":18.910623
        },
        {
            "id":"F04816",
            "name":"Kölcsey Ferenc utca",
            "lat":47.407815,
            "lon":18.946191
        },
        {
            "id":"F04817",
            "name":"Solymár, téglagyári bekötőút",
            "lat":47.587733,
            "lon":18.992841
        },
        {
            "id":"F04818",
            "name":"Solymár, téglagyári bekötőút",
            "lat":47.587257,
            "lon":18.993932
        },
        {
            "id":"F04819",
            "name":"Kövesbérci utca",
            "lat":47.592631,
            "lon":18.983529
        },
        {
            "id":"F04820",
            "name":"Kövesbérci utca",
            "lat":47.59193,
            "lon":18.984473
        },
        {
            "id":"F04821",
            "name":"BM iskola",
            "lat":47.550038,
            "lon":18.933759
        },
        {
            "id":"F04822",
            "name":"BM iskola",
            "lat":47.549688,
            "lon":18.934052
        },
        {
            "id":"F04823",
            "name":"Mészégető",
            "lat":47.558553,
            "lon":18.921715
        },
        {
            "id":"F04824",
            "name":"Mészégető",
            "lat":47.558974,
            "lon":18.920585
        },
        {
            "id":"F04825",
            "name":"Posta",
            "lat":47.576223,
            "lon":18.889399
        },
        {
            "id":"F04826",
            "name":"Posta",
            "lat":47.575842,
            "lon":18.886981
        },
        {
            "id":"F04827",
            "name":"Nagykovácsi, községháza",
            "lat":47.576027,
            "lon":18.884163
        },
        {
            "id":"F04828",
            "name":"Nagykovácsi, községháza",
            "lat":47.57592,
            "lon":18.884482
        },
        {
            "id":"F04829",
            "name":"Alcsíki dűlő",
            "lat":47.460064,
            "lon":18.934007
        },
        {
            "id":"F04830",
            "name":"Alcsíki dűlő",
            "lat":47.460145,
            "lon":18.934511
        },
        {
            "id":"F04831",
            "name":"Váci Mihály utca",
            "lat":47.595658,
            "lon":18.932397
        },
        {
            "id":"F04832",
            "name":"Váci Mihály utca",
            "lat":47.596142,
            "lon":18.931346
        },
        {
            "id":"F04833",
            "name":"Budaörs, Tetra Pak",
            "lat":47.457413,
            "lon":18.90392
        },
        {
            "id":"F04834",
            "name":"Tetra Pak",
            "lat":47.457817,
            "lon":18.903508
        },
        {
            "id":"F04835",
            "name":"Budaörsi lakótelep",
            "lat":47.455996,
            "lon":18.940647
        },
        {
            "id":"F04836",
            "name":"Budaörsi lakótelep",
            "lat":47.45604,
            "lon":18.940355
        },
        {
            "id":"F04837",
            "name":"Lejtő utca",
            "lat":47.459584,
            "lon":18.930613
        },
        {
            "id":"F04838",
            "name":"Lejtő utca",
            "lat":47.459423,
            "lon":18.931701
        },
        {
            "id":"003209",
            "name":"Batthyány tér",
            "lat":47.506776,
            "lon":19.039362
        },
        {
            "id":"007817",
            "name":"Törökbálint, Újligeti lakótelep",
            "lat":47.428685,
            "lon":18.929674
        },
        {
            "id":"007877",
            "name":"Bíróság",
            "lat":47.519564,
            "lon":18.978068
        },
        {
            "id":"007878",
            "name":"Bíróság",
            "lat":47.519456,
            "lon":18.978041
        },
        {
            "id":"007879",
            "name":"Római úti lakótelep, Varsa utca",
            "lat":47.570912,
            "lon":19.057878
        },
        {
            "id":"007881",
            "name":"Váradi utca",
            "lat":47.543771,
            "lon":19.030123
        },
        {
            "id":"007882",
            "name":"Váradi utca",
            "lat":47.542691,
            "lon":19.029977
        },
        {
            "id":"007883",
            "name":"Perényi út",
            "lat":47.545812,
            "lon":19.029591
        },
        {
            "id":"007884",
            "name":"Deák Ferenc tér M",
            "lat":47.497362,
            "lon":19.055097
        },
        {
            "id":"007885",
            "name":"Szende Pál utca",
            "lat":47.497476,
            "lon":19.049623
        },
        {
            "id":"007887",
            "name":"Mester utca",
            "lat":47.482246,
            "lon":19.068716
        },
        {
            "id":"007888",
            "name":"Mester utca",
            "lat":47.48257,
            "lon":19.068477
        },
        {
            "id":"007897",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464597,
            "lon":19.022948
        },
        {
            "id":"007898",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464678,
            "lon":19.022961
        },
        {
            "id":"007899",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464744,
            "lon":19.022994
        },
        {
            "id":"007900",
            "name":"Maros utcai rendelőintézet",
            "lat":47.504057,
            "lon":19.022119
        },
        {
            "id":"007902",
            "name":"Újpest-Városkapu M",
            "lat":47.5586,
            "lon":19.07822
        },
        {
            "id":"007913",
            "name":"526. sor",
            "lat":47.479281,
            "lon":19.211332
        },
        {
            "id":"007914",
            "name":"526. sor",
            "lat":47.479308,
            "lon":19.211558
        },
        {
            "id":"007919",
            "name":"Pólus Center",
            "lat":47.552619,
            "lon":19.143665
        },
        {
            "id":"007923",
            "name":"Kele utca",
            "lat":47.431808,
            "lon":19.173804
        },
        {
            "id":"007924",
            "name":"Ültetvény utca",
            "lat":47.396915,
            "lon":19.175497
        },
        {
            "id":"007927",
            "name":"Ferihegy vasútállomás",
            "lat":47.438446,
            "lon":19.222622
        },
        {
            "id":"007928",
            "name":"Ferihegy vasútállomás",
            "lat":47.437752,
            "lon":19.223441
        },
        {
            "id":"007931",
            "name":"Törley tér",
            "lat":47.430374,
            "lon":19.036551
        },
        {
            "id":"007949",
            "name":"Kocsis Sándor út",
            "lat":47.574268,
            "lon":19.01472
        },
        {
            "id":"007950",
            "name":"Keleti pályaudvar M",
            "lat":47.501159,
            "lon":19.0827
        },
        {
            "id":"007967",
            "name":"Kelenföld vasútállomás M",
            "lat":47.465751,
            "lon":19.021892
        },
        {
            "id":"007968",
            "name":"Mogyoród útja",
            "lat":47.570602,
            "lon":19.128267
        },
        {
            "id":"007972",
            "name":"Hűvösvölgy",
            "lat":47.543166,
            "lon":18.964394
        },
        {
            "id":"007973",
            "name":"Hűvösvölgy",
            "lat":47.542923,
            "lon":18.964567
        },
        {
            "id":"007974",
            "name":"Hűvösvölgy",
            "lat":47.542635,
            "lon":18.964753
        },
        {
            "id":"007975",
            "name":"Hűvösvölgy",
            "lat":47.543247,
            "lon":18.964261
        },
        {
            "id":"007976",
            "name":"Hűvösvölgy",
            "lat":47.543264,
            "lon":18.963995
        },
        {
            "id":"007977",
            "name":"Hűvösvölgy",
            "lat":47.542968,
            "lon":18.964195
        },
        {
            "id":"007978",
            "name":"Hűvösvölgy",
            "lat":47.542707,
            "lon":18.964355
        },
        {
            "id":"007979",
            "name":"Vörösmarty utca M",
            "lat":47.507468,
            "lon":19.066509
        },
        {
            "id":"007980",
            "name":"Vörösmarty utca M",
            "lat":47.507444,
            "lon":19.066767
        },
        {
            "id":"007995",
            "name":"Jókai Mór utca",
            "lat":47.410717,
            "lon":19.020681
        },
        {
            "id":"007996",
            "name":"Budatétény vasútállomás (Campona)",
            "lat":47.405741,
            "lon":19.013781
        },
        {
            "id":"007997",
            "name":"Budatétény vasútállomás (Campona)",
            "lat":47.405948,
            "lon":19.014059
        },
        {
            "id":"007998",
            "name":"Budatétény vasútállomás (Campona)",
            "lat":47.405705,
            "lon":19.014297
        },
        {
            "id":"007999",
            "name":"Budatétény vasútállomás (Campona)",
            "lat":47.405741,
            "lon":19.014191
        },
        {
            "id":"008005",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.47704,
            "lon":19.0475
        },
        {
            "id":"008020",
            "name":"Örs vezér tere M+H",
            "lat":47.501005,
            "lon":19.136378
        },
        {
            "id":"008021",
            "name":"Örs vezér tere M+H",
            "lat":47.501814,
            "lon":19.136233
        },
        {
            "id":"008022",
            "name":"Örs vezér tere M+H",
            "lat":47.501382,
            "lon":19.136339
        },
        {
            "id":"008023",
            "name":"Örs vezér tere M+H",
            "lat":47.501535,
            "lon":19.13618
        },
        {
            "id":"008024",
            "name":"Örs vezér tere M+H",
            "lat":47.50114,
            "lon":19.136285
        },
        {
            "id":"008025",
            "name":"Örs vezér tere M+H",
            "lat":47.501814,
            "lon":19.135915
        },
        {
            "id":"008026",
            "name":"Örs vezér tere M+H",
            "lat":47.501374,
            "lon":19.136007
        },
        {
            "id":"008027",
            "name":"Örs vezér tere M+H",
            "lat":47.501482,
            "lon":19.135861
        },
        {
            "id":"008028",
            "name":"Örs vezér tere M+H",
            "lat":47.501113,
            "lon":19.135953
        },
        {
            "id":"008029",
            "name":"Örs vezér tere M+H",
            "lat":47.502129,
            "lon":19.135703
        },
        {
            "id":"008030",
            "name":"Örs vezér tere M+H",
            "lat":47.501779,
            "lon":19.135622
        },
        {
            "id":"008031",
            "name":"Örs vezér tere M+H",
            "lat":47.501365,
            "lon":19.135688
        },
        {
            "id":"008036",
            "name":"Kőbányai út 31.",
            "lat":47.487478,
            "lon":19.104202
        },
        {
            "id":"008037",
            "name":"Kőbányai út 31.",
            "lat":47.487506,
            "lon":19.103698
        },
        {
            "id":"008040",
            "name":"Tas vezér utca",
            "lat":47.478542,
            "lon":19.040985
        },
        {
            "id":"008041",
            "name":"Tas vezér utca",
            "lat":47.478866,
            "lon":19.040866
        },
        {
            "id":"008047",
            "name":"Lajosmizsei sorompó",
            "lat":47.450468,
            "lon":19.16141
        },
        {
            "id":"008050",
            "name":"Liptó utca",
            "lat":47.486135,
            "lon":19.00708
        },
        {
            "id":"008051",
            "name":"Liptó utca",
            "lat":47.486072,
            "lon":19.007093
        },
        {
            "id":"008054",
            "name":"Mexikói út",
            "lat":47.519658,
            "lon":19.091078
        },
        {
            "id":"008055",
            "name":"Széchenyi fürdő",
            "lat":47.517483,
            "lon":19.08095
        },
        {
            "id":"008056",
            "name":"Hősök tere",
            "lat":47.514259,
            "lon":19.076845
        },
        {
            "id":"008057",
            "name":"Bajza utca",
            "lat":47.511333,
            "lon":19.072468
        },
        {
            "id":"008058",
            "name":"Kodály körönd",
            "lat":47.509232,
            "lon":19.069324
        },
        {
            "id":"008059",
            "name":"Vörösmarty utca",
            "lat":47.507214,
            "lon":19.066305
        },
        {
            "id":"008060",
            "name":"Oktogon",
            "lat":47.505058,
            "lon":19.06307
        },
        {
            "id":"008061",
            "name":"Opera",
            "lat":47.502254,
            "lon":19.058914
        },
        {
            "id":"008062",
            "name":"Bajcsy-Zsilinszky út",
            "lat":47.499828,
            "lon":19.055244
        },
        {
            "id":"008067",
            "name":"Szent Imre tér",
            "lat":47.430948,
            "lon":19.0703
        },
        {
            "id":"008068",
            "name":"Vörösmarty tér",
            "lat":47.496802,
            "lon":19.050523
        },
        {
            "id":"008075",
            "name":"Kőbánya-Kispest",
            "lat":47.463402,
            "lon":19.149185
        },
        {
            "id":"008076",
            "name":"Határ út",
            "lat":47.465443,
            "lon":19.126757
        },
        {
            "id":"008077",
            "name":"Pöttyös utca",
            "lat":47.468548,
            "lon":19.116946
        },
        {
            "id":"008078",
            "name":"Ecseri út",
            "lat":47.47092,
            "lon":19.111329
        },
        {
            "id":"008082",
            "name":"Népliget",
            "lat":47.475441,
            "lon":19.098808
        },
        {
            "id":"008083",
            "name":"Nagyvárad tér",
            "lat":47.478943,
            "lon":19.089796
        },
        {
            "id":"008084",
            "name":"Klinikák",
            "lat":47.482834,
            "lon":19.079176
        },
        {
            "id":"008085",
            "name":"Corvin-negyed",
            "lat":47.485786,
            "lon":19.070152
        },
        {
            "id":"008086",
            "name":"Széll Kálmán tér M",
            "lat":47.50735,
            "lon":19.026352
        },
        {
            "id":"008087",
            "name":"Fény utcai piac",
            "lat":47.50851,
            "lon":19.023683
        },
        {
            "id":"008090",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477256,
            "lon":19.048786
        },
        {
            "id":"008093",
            "name":"Dél-pesti autóbuszgarázs",
            "lat":47.426667,
            "lon":19.161783
        },
        {
            "id":"008094",
            "name":"Dél-pesti autóbuszgarázs",
            "lat":47.426227,
            "lon":19.161
        },
        {
            "id":"008095",
            "name":"Nagykőrösi út",
            "lat":47.425268,
            "lon":19.157088
        },
        {
            "id":"008096",
            "name":"Nagykőrösi út",
            "lat":47.425241,
            "lon":19.157512
        },
        {
            "id":"008098",
            "name":"Szabina út",
            "lat":47.43645,
            "lon":19.013416
        },
        {
            "id":"008099",
            "name":"Pék utca",
            "lat":47.442145,
            "lon":19.018424
        },
        {
            "id":"008100",
            "name":"Pék utca",
            "lat":47.442208,
            "lon":19.018609
        },
        {
            "id":"008101",
            "name":"Rózsavölgy felső",
            "lat":47.440567,
            "lon":19.023426
        },
        {
            "id":"008102",
            "name":"Rózsavölgy felső",
            "lat":47.440584,
            "lon":19.023655
        },
        {
            "id":"008103",
            "name":"Rózsavölgy alsó",
            "lat":47.43828,
            "lon":19.030491
        },
        {
            "id":"008104",
            "name":"Rózsavölgy alsó",
            "lat":47.438247,
            "lon":19.029989
        },
        {
            "id":"008106",
            "name":"Vihar utca",
            "lat":47.434313,
            "lon":19.035689
        },
        {
            "id":"008109",
            "name":"Damjanich utca",
            "lat":47.402557,
            "lon":18.991061
        },
        {
            "id":"008110",
            "name":"Barosstelep vasútállomás",
            "lat":47.399651,
            "lon":18.990905
        },
        {
            "id":"008111",
            "name":"Barackos út / Angeli utca",
            "lat":47.402034,
            "lon":18.974024
        },
        {
            "id":"008112",
            "name":"Szakiskola utca",
            "lat":47.404959,
            "lon":18.975835
        },
        {
            "id":"008113",
            "name":"Szilvafa utca",
            "lat":47.405214,
            "lon":18.982168
        },
        {
            "id":"008114",
            "name":"Mátyás király utca",
            "lat":47.404319,
            "lon":18.990768
        },
        {
            "id":"008115",
            "name":"Szebeni utca",
            "lat":47.430361,
            "lon":19.016058
        },
        {
            "id":"008116",
            "name":"Szebeni utca",
            "lat":47.430199,
            "lon":19.016893
        },
        {
            "id":"008119",
            "name":"Mátra utca",
            "lat":47.400104,
            "lon":18.997714
        },
        {
            "id":"008120",
            "name":"Budatétény vasútállomás (Campona)",
            "lat":47.405651,
            "lon":19.013754
        },
        {
            "id":"008124",
            "name":"Zöldike utca",
            "lat":47.430738,
            "lon":19.012823
        },
        {
            "id":"008125",
            "name":"Zöldike utca",
            "lat":47.431205,
            "lon":19.012359
        },
        {
            "id":"008126",
            "name":"Hír utca",
            "lat":47.432896,
            "lon":19.011523
        },
        {
            "id":"008127",
            "name":"Hír utca",
            "lat":47.432914,
            "lon":19.011403
        },
        {
            "id":"008128",
            "name":"Ady Endre út",
            "lat":47.435906,
            "lon":19.03655
        },
        {
            "id":"008129",
            "name":"Kálvin tér",
            "lat":47.489693,
            "lon":19.061707
        },
        {
            "id":"008130",
            "name":"Ferenciek tere",
            "lat":47.493172,
            "lon":19.05592
        },
        {
            "id":"008132",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.501311,
            "lon":19.107734
        },
        {
            "id":"008136",
            "name":"Arany János utca",
            "lat":47.503063,
            "lon":19.054531
        },
        {
            "id":"008137",
            "name":"Nyugati pályaudvar",
            "lat":47.510571,
            "lon":19.056072
        },
        {
            "id":"008138",
            "name":"Lehel tér",
            "lat":47.51741,
            "lon":19.060192
        },
        {
            "id":"008139",
            "name":"Dózsa György út",
            "lat":47.524653,
            "lon":19.063321
        },
        {
            "id":"008141",
            "name":"Árpád híd",
            "lat":47.532719,
            "lon":19.066755
        },
        {
            "id":"008146",
            "name":"Vajda Péter utca",
            "lat":47.481366,
            "lon":19.103174
        },
        {
            "id":"008147",
            "name":"Vajda Péter utca",
            "lat":47.481776,
            "lon":19.103611
        },
        {
            "id":"008148",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.485765,
            "lon":19.107078
        },
        {
            "id":"008149",
            "name":"Kőbányai út / Könyves Kálmán körút",
            "lat":47.48628,
            "lon":19.107545
        },
        {
            "id":"008150",
            "name":"Zsil utca",
            "lat":47.48294,
            "lon":19.062984
        },
        {
            "id":"008152",
            "name":"Mester utca / Könyves Kálmán körút",
            "lat":47.469578,
            "lon":19.083733
        },
        {
            "id":"008153",
            "name":"Mester utca / Könyves Kálmán körút",
            "lat":47.46971,
            "lon":19.084464
        },
        {
            "id":"008155",
            "name":"Közvágóhíd H",
            "lat":47.468738,
            "lon":19.07267
        },
        {
            "id":"008156",
            "name":"Új köztemető",
            "lat":47.473522,
            "lon":19.178241
        },
        {
            "id":"008159",
            "name":"Forgách utca",
            "lat":47.539383,
            "lon":19.069597
        },
        {
            "id":"008162",
            "name":"Gyöngyösi utca",
            "lat":47.548691,
            "lon":19.073233
        },
        {
            "id":"008163",
            "name":"Újpest-Városkapu",
            "lat":47.558926,
            "lon":19.079229
        },
        {
            "id":"008164",
            "name":"Örs vezér tere M+H",
            "lat":47.501463,
            "lon":19.136578
        },
        {
            "id":"008168",
            "name":"I. utca",
            "lat":47.401015,
            "lon":19.002721
        },
        {
            "id":"008169",
            "name":"I. utca",
            "lat":47.40097,
            "lon":19.003569
        },
        {
            "id":"008170",
            "name":"Angeli utca / Nagytétényi út",
            "lat":47.390642,
            "lon":18.980981
        },
        {
            "id":"008174",
            "name":"Népliget M",
            "lat":47.475904,
            "lon":19.100568
        },
        {
            "id":"008181",
            "name":"Cinkotai autóbuszgarázs",
            "lat":47.498526,
            "lon":19.237725
        },
        {
            "id":"008186",
            "name":"Újpest-Központ",
            "lat":47.560429,
            "lon":19.089916
        },
        {
            "id":"008187",
            "name":"Batthyány tér",
            "lat":47.506768,
            "lon":19.03932
        },
        {
            "id":"008188",
            "name":"Margit híd, budai hídfő",
            "lat":47.515352,
            "lon":19.039387
        },
        {
            "id":"008189",
            "name":"Szépvölgyi út",
            "lat":47.527303,
            "lon":19.040168
        },
        {
            "id":"008190",
            "name":"Tímár utca",
            "lat":47.533952,
            "lon":19.044646
        },
        {
            "id":"008191",
            "name":"Szentlélek tér",
            "lat":47.539666,
            "lon":19.04716
        },
        {
            "id":"008194",
            "name":"Filatorigát",
            "lat":47.551903,
            "lon":19.046243
        },
        {
            "id":"008195",
            "name":"Kaszásdűlő",
            "lat":47.556762,
            "lon":19.045256
        },
        {
            "id":"008196",
            "name":"Aquincum",
            "lat":47.568229,
            "lon":19.048495
        },
        {
            "id":"008197",
            "name":"Rómaifürdő",
            "lat":47.575661,
            "lon":19.048574
        },
        {
            "id":"008198",
            "name":"Csillaghegy",
            "lat":47.58611,
            "lon":19.045005
        },
        {
            "id":"008199",
            "name":"Békásmegyer",
            "lat":47.598091,
            "lon":19.054599
        },
        {
            "id":"008206",
            "name":"Mexikói út M",
            "lat":47.519299,
            "lon":19.091104
        },
        {
            "id":"008209",
            "name":"Nagy Lajos király útja / Czobor utca",
            "lat":47.522226,
            "lon":19.102752
        },
        {
            "id":"008218",
            "name":"Széchenyi István tér",
            "lat":47.499032,
            "lon":19.047008
        },
        {
            "id":"008222",
            "name":"Örs vezér tere M+H",
            "lat":47.503666,
            "lon":19.13647
        },
        {
            "id":"008225",
            "name":"Budakalász",
            "lat":47.616141,
            "lon":19.054926
        },
        {
            "id":"008226",
            "name":"Budakalász, Lenfonó",
            "lat":47.621778,
            "lon":19.046752
        },
        {
            "id":"008227",
            "name":"Szentistvántelep",
            "lat":47.62879,
            "lon":19.043336
        },
        {
            "id":"008238",
            "name":"Széchenyi István tér",
            "lat":47.500588,
            "lon":19.046703
        },
        {
            "id":"008239",
            "name":"Millenniumi Kulturális Központ",
            "lat":47.471308,
            "lon":19.073063
        },
        {
            "id":"008240",
            "name":"Millenniumi Kulturális Központ",
            "lat":47.471335,
            "lon":19.073209
        },
        {
            "id":"008241",
            "name":"Szőnyi út",
            "lat":47.526654,
            "lon":19.096249
        },
        {
            "id":"008242",
            "name":"Teleki Blanka utca",
            "lat":47.523948,
            "lon":19.093763
        },
        {
            "id":"008243",
            "name":"Szántóföld utca",
            "lat":47.572277,
            "lon":19.138862
        },
        {
            "id":"008245",
            "name":"Kolozsvár utcai piac",
            "lat":47.536854,
            "lon":19.11496
        },
        {
            "id":"008246",
            "name":"Rákospalotai köztemető",
            "lat":47.55124,
            "lon":19.13601
        },
        {
            "id":"008249",
            "name":"Pomáz",
            "lat":47.642745,
            "lon":19.032659
        },
        {
            "id":"008250",
            "name":"Pannóniatelep",
            "lat":47.652191,
            "lon":19.064901
        },
        {
            "id":"008260",
            "name":"Nagybányai út",
            "lat":47.528442,
            "lon":18.99617
        },
        {
            "id":"008261",
            "name":"Nagybányai út",
            "lat":47.528352,
            "lon":18.996317
        },
        {
            "id":"008262",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.490692,
            "lon":19.108905
        },
        {
            "id":"008263",
            "name":"Közvágóhíd",
            "lat":47.469089,
            "lon":19.070057
        },
        {
            "id":"008264",
            "name":"Közvágóhíd",
            "lat":47.469995,
            "lon":19.070144
        },
        {
            "id":"008265",
            "name":"Közvágóhíd H",
            "lat":47.46872,
            "lon":19.0734
        },
        {
            "id":"008267",
            "name":"Szentlőrinci út",
            "lat":47.424593,
            "lon":19.157763
        },
        {
            "id":"008269",
            "name":"Delej utca",
            "lat":47.484685,
            "lon":19.096357
        },
        {
            "id":"008270",
            "name":"Delej utca",
            "lat":47.484478,
            "lon":19.096423
        },
        {
            "id":"008271",
            "name":"Szentendre",
            "lat":47.661038,
            "lon":19.075607
        },
        {
            "id":"008272",
            "name":"Közvágóhíd",
            "lat":47.466285,
            "lon":19.07717
        },
        {
            "id":"008273",
            "name":"Beöthy utca",
            "lat":47.460673,
            "lon":19.081819
        },
        {
            "id":"008274",
            "name":"Kén utca",
            "lat":47.454906,
            "lon":19.086556
        },
        {
            "id":"008275",
            "name":"Timót utca",
            "lat":47.447915,
            "lon":19.090463
        },
        {
            "id":"008276",
            "name":"Pesterzsébet felső",
            "lat":47.43816,
            "lon":19.093611
        },
        {
            "id":"008277",
            "name":"Torontál utca",
            "lat":47.423191,
            "lon":19.105208
        },
        {
            "id":"008279",
            "name":"Soroksár felső",
            "lat":47.409659,
            "lon":19.111925
        },
        {
            "id":"008280",
            "name":"Pázmány Péter sétány",
            "lat":47.469216,
            "lon":19.064366
        },
        {
            "id":"008281",
            "name":"Soroksár, Hősök tere",
            "lat":47.399309,
            "lon":19.114781
        },
        {
            "id":"008282",
            "name":"Szent István utca",
            "lat":47.391673,
            "lon":19.11491
        },
        {
            "id":"008283",
            "name":"Óceán-árok utca",
            "lat":47.590056,
            "lon":19.100627
        },
        {
            "id":"008284",
            "name":"Óceán-árok utca",
            "lat":47.590352,
            "lon":19.101585
        },
        {
            "id":"008285",
            "name":"Millenniumtelep",
            "lat":47.379741,
            "lon":19.104897
        },
        {
            "id":"008286",
            "name":"Népliget M",
            "lat":47.476299,
            "lon":19.09928
        },
        {
            "id":"008287",
            "name":"Népliget M",
            "lat":47.476345,
            "lon":19.098937
        },
        {
            "id":"008289",
            "name":"Szilágyi utca",
            "lat":47.570883,
            "lon":19.111334
        },
        {
            "id":"008295",
            "name":"Dunaharaszti felső",
            "lat":47.366371,
            "lon":19.092656
        },
        {
            "id":"008296",
            "name":"Dunaharaszti külső",
            "lat":47.36027,
            "lon":19.086422
        },
        {
            "id":"008318",
            "name":"Raktárváros",
            "lat":47.441547,
            "lon":18.938276
        },
        {
            "id":"008319",
            "name":"Raktárváros",
            "lat":47.441566,
            "lon":18.938608
        },
        {
            "id":"008320",
            "name":"Törökbálint, Munkácsy Mihály utca",
            "lat":47.431811,
            "lon":18.917206
        },
        {
            "id":"008322",
            "name":"Harangláb",
            "lat":47.431924,
            "lon":18.914078
        },
        {
            "id":"008323",
            "name":"Károlyi Mihály utca",
            "lat":47.43769,
            "lon":18.899546
        },
        {
            "id":"008324",
            "name":"Tükörhegy",
            "lat":47.436382,
            "lon":18.927085
        },
        {
            "id":"008325",
            "name":"Tükörhegy",
            "lat":47.436211,
            "lon":18.926992
        },
        {
            "id":"008326",
            "name":"Ady Endre utca",
            "lat":47.435045,
            "lon":18.906261
        },
        {
            "id":"008328",
            "name":"Óvoda utca",
            "lat":47.440051,
            "lon":18.895734
        },
        {
            "id":"008329",
            "name":"Óvoda utca",
            "lat":47.440284,
            "lon":18.895177
        },
        {
            "id":"008330",
            "name":"Határ utca",
            "lat":47.445284,
            "lon":18.8943
        },
        {
            "id":"008331",
            "name":"Határ utca",
            "lat":47.444924,
            "lon":18.894036
        },
        {
            "id":"008332",
            "name":"GLAXO",
            "lat":47.446066,
            "lon":18.881264
        },
        {
            "id":"008333",
            "name":"Törökbálint, bevásárlóközpont",
            "lat":47.443242,
            "lon":18.887398
        },
        {
            "id":"008336",
            "name":"Növény utca",
            "lat":47.402071,
            "lon":19.01581
        },
        {
            "id":"008337",
            "name":"Növény utca",
            "lat":47.402125,
            "lon":19.015254
        },
        {
            "id":"008339",
            "name":"Budaörsi lakótelep",
            "lat":47.456041,
            "lon":18.940912
        },
        {
            "id":"008341",
            "name":"Templom tér",
            "lat":47.542367,
            "lon":19.130057
        },
        {
            "id":"008344",
            "name":"Királyhágó tér",
            "lat":47.495422,
            "lon":19.018752
        },
        {
            "id":"008345",
            "name":"Katona József utca",
            "lat":47.438346,
            "lon":18.906478
        },
        {
            "id":"008346",
            "name":"Szigetszentmiklós",
            "lat":47.344207,
            "lon":19.050242
        },
        {
            "id":"008347",
            "name":"József Attila-telep",
            "lat":47.337095,
            "lon":19.034336
        },
        {
            "id":"008348",
            "name":"Szigetszentmiklós alsó",
            "lat":47.336444,
            "lon":19.019615
        },
        {
            "id":"008349",
            "name":"Szigetszentmiklós-Gyártelep",
            "lat":47.333349,
            "lon":19.003841
        },
        {
            "id":"008350",
            "name":"Szigethalom",
            "lat":47.330041,
            "lon":18.993868
        },
        {
            "id":"008353",
            "name":"Észak-Pesti Kórház",
            "lat":47.539377,
            "lon":19.122388
        },
        {
            "id":"008359",
            "name":"Óbudai autóbuszgarázs",
            "lat":47.568487,
            "lon":19.02719
        },
        {
            "id":"008360",
            "name":"Óbudai autóbuszgarázs",
            "lat":47.568353,
            "lon":19.027323
        },
        {
            "id":"008366",
            "name":"Szigethalom alsó",
            "lat":47.321368,
            "lon":18.983529
        },
        {
            "id":"008367",
            "name":"Tököl",
            "lat":47.313402,
            "lon":18.974231
        },
        {
            "id":"008368",
            "name":"Szigetmajor",
            "lat":47.293735,
            "lon":18.964715
        },
        {
            "id":"008369",
            "name":"Szigetcsép",
            "lat":47.270167,
            "lon":18.956218
        },
        {
            "id":"008370",
            "name":"Egyetemi Tangazdaság",
            "lat":47.258641,
            "lon":18.949556
        },
        {
            "id":"008371",
            "name":"Szigetszentmárton-Szigetújfalu",
            "lat":47.227912,
            "lon":18.94607
        },
        {
            "id":"008372",
            "name":"Horgásztanyák",
            "lat":47.213582,
            "lon":18.952953
        },
        {
            "id":"008374",
            "name":"Angyalisziget",
            "lat":47.199808,
            "lon":18.945066
        },
        {
            "id":"008377",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.45645,
            "lon":19.11466
        },
        {
            "id":"008379",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483885,
            "lon":19.127207
        },
        {
            "id":"008380",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483282,
            "lon":19.128201
        },
        {
            "id":"008381",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483993,
            "lon":19.127685
        },
        {
            "id":"008382",
            "name":"Örs vezér tere M+H",
            "lat":47.502506,
            "lon":19.136818
        },
        {
            "id":"008383",
            "name":"Örs vezér tere M+H",
            "lat":47.502632,
            "lon":19.136712
        },
        {
            "id":"008399",
            "name":"Pestszentimre vasútállomás",
            "lat":47.404251,
            "lon":19.186538
        },
        {
            "id":"008400",
            "name":"Dunakeszi, Auchan áruház",
            "lat":47.608935,
            "lon":19.117644
        },
        {
            "id":"008402",
            "name":"Kert sor",
            "lat":47.591138,
            "lon":19.045357
        },
        {
            "id":"008403",
            "name":"Kert sor",
            "lat":47.591363,
            "lon":19.04537
        },
        {
            "id":"008404",
            "name":"Csillaghegy H",
            "lat":47.584886,
            "lon":19.042047
        },
        {
            "id":"008405",
            "name":"Csillaghegy H",
            "lat":47.584859,
            "lon":19.041901
        },
        {
            "id":"008406",
            "name":"Forrásliget lakópark",
            "lat":47.581153,
            "lon":19.037568
        },
        {
            "id":"008407",
            "name":"Forrásliget lakópark",
            "lat":47.581423,
            "lon":19.037847
        },
        {
            "id":"008408",
            "name":"Ürömhegyi lejtő",
            "lat":47.577645,
            "lon":19.032198
        },
        {
            "id":"008409",
            "name":"Ürömhegyi lejtő",
            "lat":47.577663,
            "lon":19.032065
        },
        {
            "id":"008410",
            "name":"Aranyhegyi lejtő",
            "lat":47.571411,
            "lon":19.029688
        },
        {
            "id":"008411",
            "name":"Aranyhegyi lejtő",
            "lat":47.571717,
            "lon":19.029701
        },
        {
            "id":"008412",
            "name":"Bécsi út / Vörösvári út",
            "lat":47.548475,
            "lon":19.029204
        },
        {
            "id":"008413",
            "name":"Boráros tér",
            "lat":47.479181,
            "lon":19.066496
        },
        {
            "id":"008414",
            "name":"Közvágóhíd",
            "lat":47.469542,
            "lon":19.070101
        },
        {
            "id":"008415",
            "name":"Szabadkikötő",
            "lat":47.444476,
            "lon":19.071612
        },
        {
            "id":"008417",
            "name":"Szent Imre tér",
            "lat":47.43131,
            "lon":19.06766
        },
        {
            "id":"008426",
            "name":"Káposztásmegyer, Szilas-patak",
            "lat":47.577384,
            "lon":19.114891
        },
        {
            "id":"008428",
            "name":"Budakalász, Budai út",
            "lat":47.617114,
            "lon":19.051501
        },
        {
            "id":"008429",
            "name":"Budakalász, Budai út",
            "lat":47.616763,
            "lon":19.051781
        },
        {
            "id":"008430",
            "name":"Budakalász, Lenfonó H",
            "lat":47.620361,
            "lon":19.04634
        },
        {
            "id":"008431",
            "name":"Budakalász, Lenfonó H",
            "lat":47.621755,
            "lon":19.045728
        },
        {
            "id":"008432",
            "name":"Szentistvántelep H",
            "lat":47.628411,
            "lon":19.043412
        },
        {
            "id":"008433",
            "name":"Szentistvántelep H",
            "lat":47.627089,
            "lon":19.043865
        },
        {
            "id":"008434",
            "name":"Pomáz H",
            "lat":47.643907,
            "lon":19.030368
        },
        {
            "id":"008435",
            "name":"Pomáz H",
            "lat":47.642594,
            "lon":19.031459
        },
        {
            "id":"008436",
            "name":"Szentendre, Papírgyár",
            "lat":47.649015,
            "lon":19.069432
        },
        {
            "id":"008437",
            "name":"Papírgyár",
            "lat":47.647801,
            "lon":19.069086
        },
        {
            "id":"008438",
            "name":"Egyetem",
            "lat":47.652352,
            "lon":19.071723
        },
        {
            "id":"008439",
            "name":"Egyetem",
            "lat":47.652082,
            "lon":19.071351
        },
        {
            "id":"008441",
            "name":"Karácsony Sándor utca",
            "lat":47.426802,
            "lon":19.067283
        },
        {
            "id":"008442",
            "name":"Örs vezér tere",
            "lat":47.503563,
            "lon":19.137196
        },
        {
            "id":"008443",
            "name":"Rákosfalva",
            "lat":47.505067,
            "lon":19.151378
        },
        {
            "id":"008445",
            "name":"Nagyicce",
            "lat":47.507017,
            "lon":19.16769
        },
        {
            "id":"008446",
            "name":"Sashalom",
            "lat":47.508952,
            "lon":19.178647
        },
        {
            "id":"008455",
            "name":"Jászai Mari tér",
            "lat":47.512842,
            "lon":19.04793
        },
        {
            "id":"008458",
            "name":"Tisza István tér",
            "lat":47.517295,
            "lon":19.10734
        },
        {
            "id":"008459",
            "name":"Korong utca",
            "lat":47.519842,
            "lon":19.103732
        },
        {
            "id":"008460",
            "name":"Uzsoki Utcai Kórház",
            "lat":47.519671,
            "lon":19.103453
        },
        {
            "id":"008461",
            "name":"Erzsébet királyné útja",
            "lat":47.521615,
            "lon":19.101317
        },
        {
            "id":"008462",
            "name":"Bretzfeld utca",
            "lat":47.460552,
            "lon":18.94593
        },
        {
            "id":"008464",
            "name":"Mátyásföld, repülőtér",
            "lat":47.511857,
            "lon":19.194054
        },
        {
            "id":"008471",
            "name":"Dél-pesti autóbuszgarázs",
            "lat":47.426479,
            "lon":19.160895
        },
        {
            "id":"008472",
            "name":"Dél-pesti autóbuszgarázs",
            "lat":47.426703,
            "lon":19.161134
        },
        {
            "id":"008479",
            "name":"Homokbánya utca",
            "lat":47.399615,
            "lon":18.941
        },
        {
            "id":"008480",
            "name":"Petőfi Sándor utca",
            "lat":47.402428,
            "lon":18.937682
        },
        {
            "id":"008481",
            "name":"Soroksár felső H",
            "lat":47.410028,
            "lon":19.111501
        },
        {
            "id":"008485",
            "name":"Batthyány tér",
            "lat":47.506776,
            "lon":19.039269
        },
        {
            "id":"008486",
            "name":"Csonka János tér",
            "lat":47.470132,
            "lon":19.04478
        },
        {
            "id":"008490",
            "name":"Határ út M",
            "lat":47.4647,
            "lon":19.126104
        },
        {
            "id":"008491",
            "name":"Jászberényi út",
            "lat":47.485549,
            "lon":19.192668
        },
        {
            "id":"008498",
            "name":"Aszódi utca",
            "lat":47.463482,
            "lon":19.101007
        },
        {
            "id":"008499",
            "name":"Közterületfenntartó Zrt.",
            "lat":47.467994,
            "lon":19.106702
        },
        {
            "id":"008500",
            "name":"Ecseri út M",
            "lat":47.47046,
            "lon":19.108811
        },
        {
            "id":"008501",
            "name":"Szakorvosi rendelő",
            "lat":47.476947,
            "lon":19.075454
        },
        {
            "id":"008519",
            "name":"Tímár utca H",
            "lat":47.533311,
            "lon":19.043634
        },
        {
            "id":"008521",
            "name":"Serfőző utca",
            "lat":47.538456,
            "lon":19.046967
        },
        {
            "id":"008527",
            "name":"Mátyásföld, Imre utca",
            "lat":47.513546,
            "lon":19.199582
        },
        {
            "id":"008528",
            "name":"Mátyásföld alsó",
            "lat":47.515986,
            "lon":19.207456
        },
        {
            "id":"008529",
            "name":"Cinkota",
            "lat":47.519606,
            "lon":19.217766
        },
        {
            "id":"008530",
            "name":"Ilonatelep",
            "lat":47.526611,
            "lon":19.229399
        },
        {
            "id":"008532",
            "name":"Kossuth Lajos tér M",
            "lat":47.505913,
            "lon":19.048773
        },
        {
            "id":"008535",
            "name":"Cinkotai autóbuszgarázs",
            "lat":47.498283,
            "lon":19.237565
        },
        {
            "id":"008544",
            "name":"Szépvölgyi út H",
            "lat":47.527482,
            "lon":19.039956
        },
        {
            "id":"008545",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.500124,
            "lon":19.107069
        },
        {
            "id":"008546",
            "name":"Boráros tér H",
            "lat":47.479809,
            "lon":19.067866
        },
        {
            "id":"008548",
            "name":"Gyál, Bem József utca",
            "lat":47.372935,
            "lon":19.216779
        },
        {
            "id":"008549",
            "name":"Kisfaludy Sándor utca",
            "lat":47.375035,
            "lon":19.213621
        },
        {
            "id":"008550",
            "name":"Toldi Miklós utca",
            "lat":47.377325,
            "lon":19.210039
        },
        {
            "id":"008551",
            "name":"Bacsó Béla utca",
            "lat":47.379534,
            "lon":19.206696
        },
        {
            "id":"008552",
            "name":"Erdősor utca",
            "lat":47.383039,
            "lon":19.201912
        },
        {
            "id":"008553",
            "name":"Bajcsy-Zsilinszky utca",
            "lat":47.385653,
            "lon":19.204449
        },
        {
            "id":"008559",
            "name":"Korompai utca",
            "lat":47.484896,
            "lon":19.012508
        },
        {
            "id":"008560",
            "name":"Korompai utca",
            "lat":47.484815,
            "lon":19.012866
        },
        {
            "id":"008562",
            "name":"Kistarcsa, kórház",
            "lat":47.539065,
            "lon":19.249034
        },
        {
            "id":"008567",
            "name":"Gazdagréti tér",
            "lat":47.473321,
            "lon":18.992775
        },
        {
            "id":"008569",
            "name":"Cinkotai autóbuszgarázs",
            "lat":47.498194,
            "lon":19.237086
        },
        {
            "id":"008571",
            "name":"Kistarcsa",
            "lat":47.545832,
            "lon":19.259801
        },
        {
            "id":"008572",
            "name":"Zsófialiget",
            "lat":47.548442,
            "lon":19.264069
        },
        {
            "id":"008573",
            "name":"Kerepes",
            "lat":47.553092,
            "lon":19.270897
        },
        {
            "id":"008575",
            "name":"Távíró utca",
            "lat":47.461151,
            "lon":19.11899
        },
        {
            "id":"008577",
            "name":"Rákoshegy vasútállomás",
            "lat":47.467968,
            "lon":19.244845
        },
        {
            "id":"008587",
            "name":"Gyáli út",
            "lat":47.456515,
            "lon":19.111039
        },
        {
            "id":"008588",
            "name":"Gyáli út",
            "lat":47.456326,
            "lon":19.110349
        },
        {
            "id":"008589",
            "name":"Gyáli út",
            "lat":47.466017,
            "lon":19.103463
        },
        {
            "id":"008590",
            "name":"Szent Gellért tér M",
            "lat":47.48339,
            "lon":19.053152
        },
        {
            "id":"008591",
            "name":"Szent Gellért tér M",
            "lat":47.483651,
            "lon":19.053524
        },
        {
            "id":"008593",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.476834,
            "lon":19.047182
        },
        {
            "id":"008594",
            "name":"Szilasliget",
            "lat":47.568488,
            "lon":19.275036
        },
        {
            "id":"008595",
            "name":"Hungaroring",
            "lat":47.57919,
            "lon":19.275381
        },
        {
            "id":"008596",
            "name":"Mogyoród",
            "lat":47.596508,
            "lon":19.271751
        },
        {
            "id":"008597",
            "name":"Sport utca",
            "lat":47.455912,
            "lon":18.948114
        },
        {
            "id":"008598",
            "name":"Baross utca",
            "lat":47.460328,
            "lon":18.95849
        },
        {
            "id":"008605",
            "name":"Kolosy tér",
            "lat":47.52759,
            "lon":19.036729
        },
        {
            "id":"008610",
            "name":"Szentjakab",
            "lat":47.597326,
            "lon":19.290355
        },
        {
            "id":"008611",
            "name":"Gödöllő, Erzsébet park",
            "lat":47.595072,
            "lon":19.340771
        },
        {
            "id":"008612",
            "name":"Gödöllő, Szabadság tér",
            "lat":47.597666,
            "lon":19.347926
        },
        {
            "id":"008617",
            "name":"Pillangó utca",
            "lat":47.501297,
            "lon":19.119883
        },
        {
            "id":"008618",
            "name":"Puskás Ferenc Stadion",
            "lat":47.500389,
            "lon":19.107113
        },
        {
            "id":"008619",
            "name":"Keleti pályaudvar",
            "lat":47.499798,
            "lon":19.08267
        },
        {
            "id":"008620",
            "name":"Blaha Lujza tér",
            "lat":47.496986,
            "lon":19.070333
        },
        {
            "id":"008621",
            "name":"Astoria",
            "lat":47.494331,
            "lon":19.060097
        },
        {
            "id":"008622",
            "name":"Deák Ferenc tér",
            "lat":47.497716,
            "lon":19.0543
        },
        {
            "id":"008623",
            "name":"Kossuth Lajos tér",
            "lat":47.50552,
            "lon":19.046619
        },
        {
            "id":"008624",
            "name":"Batthyány tér",
            "lat":47.506462,
            "lon":19.03889
        },
        {
            "id":"008625",
            "name":"Széll Kálmán tér",
            "lat":47.506943,
            "lon":19.024803
        },
        {
            "id":"008626",
            "name":"Déli pályaudvar",
            "lat":47.500191,
            "lon":19.024951
        },
        {
            "id":"008642",
            "name":"Székesdűlő",
            "lat":47.611119,
            "lon":19.104279
        },
        {
            "id":"008643",
            "name":"Székesdűlő",
            "lat":47.611164,
            "lon":19.104053
        },
        {
            "id":"008644",
            "name":"Vízművek",
            "lat":47.599539,
            "lon":19.092791
        },
        {
            "id":"008645",
            "name":"Vízművek",
            "lat":47.600375,
            "lon":19.093403
        },
        {
            "id":"008646",
            "name":"Áruházi bekötőút",
            "lat":47.386494,
            "lon":19.022627
        },
        {
            "id":"008647",
            "name":"Áruházi bekötőút",
            "lat":47.386539,
            "lon":19.023091
        },
        {
            "id":"008649",
            "name":"Székesdűlő, ipartelep",
            "lat":47.615164,
            "lon":19.109245
        },
        {
            "id":"008650",
            "name":"Székesdűlő, ipartelep",
            "lat":47.61475,
            "lon":19.108806
        },
        {
            "id":"008651",
            "name":"Auchan Sziget áruház",
            "lat":47.384381,
            "lon":19.025807
        },
        {
            "id":"008652",
            "name":"Auchan Sziget áruház",
            "lat":47.384174,
            "lon":19.025966
        },
        {
            "id":"008670",
            "name":"Auchan Liget",
            "lat":47.54147,
            "lon":19.246606
        },
        {
            "id":"008680",
            "name":"Csepel",
            "lat":47.421164,
            "lon":19.065787
        },
        {
            "id":"008682",
            "name":"Gödöllő, Palotakert",
            "lat":47.598489,
            "lon":19.356648
        },
        {
            "id":"008683",
            "name":"Gödöllő",
            "lat":47.593337,
            "lon":19.357774
        },
        {
            "id":"008690",
            "name":"Budaörs vasútállomás",
            "lat":47.448208,
            "lon":18.964856
        },
        {
            "id":"008691",
            "name":"Angeli utca / Nagytétényi út",
            "lat":47.390944,
            "lon":18.981715
        },
        {
            "id":"008692",
            "name":"Felsőcsatári köz",
            "lat":47.458682,
            "lon":19.177051
        },
        {
            "id":"008694",
            "name":"Köztelek utca",
            "lat":47.487044,
            "lon":19.066933
        },
        {
            "id":"008697",
            "name":"Újpest-Központ M",
            "lat":47.560791,
            "lon":19.090114
        },
        {
            "id":"008702",
            "name":"Szakorvosi rendelő",
            "lat":47.477118,
            "lon":19.075825
        },
        {
            "id":"008708",
            "name":"Vízművek lakótelep",
            "lat":47.597822,
            "lon":19.091606
        },
        {
            "id":"008725",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.4999,
            "lon":19.104879
        },
        {
            "id":"008736",
            "name":"Dániel út",
            "lat":47.512863,
            "lon":18.994978
        },
        {
            "id":"008737",
            "name":"Dániel út",
            "lat":47.512881,
            "lon":18.994739
        },
        {
            "id":"008740",
            "name":"Újbuda-központ M",
            "lat":47.474683,
            "lon":19.046385
        },
        {
            "id":"008750",
            "name":"Batthyány tér M+H",
            "lat":47.505871,
            "lon":19.039355
        },
        {
            "id":"008754",
            "name":"Pestszentimre vasútállomás (Dózsa Gy.u.)",
            "lat":47.403586,
            "lon":19.185688
        },
        {
            "id":"008772",
            "name":"Pestszentlőrinc vasútállomás",
            "lat":47.454646,
            "lon":19.181749
        },
        {
            "id":"008775",
            "name":"Ilonatelep H",
            "lat":47.525831,
            "lon":19.228646
        },
        {
            "id":"008782",
            "name":"Blaha Lujza tér M",
            "lat":47.496881,
            "lon":19.06916
        },
        {
            "id":"008788",
            "name":"Kőérberek",
            "lat":47.445305,
            "lon":18.999567
        },
        {
            "id":"008789",
            "name":"Kőérberek",
            "lat":47.445269,
            "lon":18.999991
        },
        {
            "id":"008792",
            "name":"Normafa",
            "lat":47.502448,
            "lon":18.965905
        },
        {
            "id":"008793",
            "name":"Regényes utca",
            "lat":47.429436,
            "lon":19.020658
        },
        {
            "id":"008802",
            "name":"Savoya Park",
            "lat":47.435861,
            "lon":19.04241
        },
        {
            "id":"008822",
            "name":"Budakalász, Auchan áruház",
            "lat":47.611516,
            "lon":19.062365
        },
        {
            "id":"008823",
            "name":"Szigetszentmárton-Szigetújfalu H",
            "lat":47.228032,
            "lon":18.946351
        },
        {
            "id":"008832",
            "name":"Szakorvosi rendelőintézet",
            "lat":47.443871,
            "lon":19.181125
        },
        {
            "id":"008834",
            "name":"Szigetcsép H",
            "lat":47.270157,
            "lon":18.95675
        },
        {
            "id":"008835",
            "name":"Földváry utca",
            "lat":47.463385,
            "lon":19.08375
        },
        {
            "id":"008841",
            "name":"Íves út",
            "lat":47.592804,
            "lon":19.107611
        },
        {
            "id":"008842",
            "name":"Íves út",
            "lat":47.592598,
            "lon":19.106813
        },
        {
            "id":"008844",
            "name":"Egressy út",
            "lat":47.519325,
            "lon":19.12637
        },
        {
            "id":"008845",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464723,
            "lon":19.023213
        },
        {
            "id":"008846",
            "name":"Méhecske utca",
            "lat":47.448032,
            "lon":18.947797
        },
        {
            "id":"008847",
            "name":"Méhecske utca",
            "lat":47.447979,
            "lon":18.94797
        },
        {
            "id":"008850",
            "name":"Mikszáth Kálmán utca",
            "lat":47.451162,
            "lon":19.176781
        },
        {
            "id":"008863",
            "name":"Gőzmozdony utca",
            "lat":47.470054,
            "lon":19.157193
        },
        {
            "id":"008864",
            "name":"Savoya Park",
            "lat":47.436023,
            "lon":19.041574
        },
        {
            "id":"008873",
            "name":"Földváry utca",
            "lat":47.463133,
            "lon":19.083803
        },
        {
            "id":"008874",
            "name":"Timót utca",
            "lat":47.452112,
            "lon":19.091938
        },
        {
            "id":"008875",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.500142,
            "lon":19.107063
        },
        {
            "id":"008877",
            "name":"Bazsalikom utca",
            "lat":47.453947,
            "lon":19.021653
        },
        {
            "id":"008893",
            "name":"Csepeli átjáró",
            "lat":47.436339,
            "lon":19.092257
        },
        {
            "id":"008894",
            "name":"Vízisport utca",
            "lat":47.434027,
            "lon":19.091287
        },
        {
            "id":"008895",
            "name":"Teremszeg utca",
            "lat":47.432993,
            "lon":19.092307
        },
        {
            "id":"008896",
            "name":"Pesterzsébet vasútállomás",
            "lat":47.433423,
            "lon":19.096417
        },
        {
            "id":"008898",
            "name":"Szakorvosi rendelő",
            "lat":47.440886,
            "lon":19.10178
        },
        {
            "id":"008900",
            "name":"Árpád híd M",
            "lat":47.531934,
            "lon":19.066145
        },
        {
            "id":"008903",
            "name":"Szentmihályi út",
            "lat":47.541396,
            "lon":19.151947
        },
        {
            "id":"008904",
            "name":"Kétújfalu utca",
            "lat":47.419522,
            "lon":19.209134
        },
        {
            "id":"008910",
            "name":"Káposztásmegyer, Mogyoródi-patak",
            "lat":47.598382,
            "lon":19.121434
        },
        {
            "id":"008911",
            "name":"Homoktövis iskola",
            "lat":47.597234,
            "lon":19.117084
        },
        {
            "id":"008912",
            "name":"Hidegkuti Nándor Stadion",
            "lat":47.490246,
            "lon":19.110044
        },
        {
            "id":"008916",
            "name":"Kőbányai garázs",
            "lat":47.490648,
            "lon":19.114424
        },
        {
            "id":"008917",
            "name":"Kőbányai garázs",
            "lat":47.490684,
            "lon":19.113853
        },
        {
            "id":"008918",
            "name":"Budatétény, benzinkút",
            "lat":47.430123,
            "lon":19.003651
        },
        {
            "id":"008919",
            "name":"Pongrátz Gergely tér",
            "lat":47.509771,
            "lon":19.128546
        },
        {
            "id":"008921",
            "name":"Dél-pesti autóbuszgarázs",
            "lat":47.426613,
            "lon":19.161081
        },
        {
            "id":"008922",
            "name":"Gyula vezér út",
            "lat":47.409254,
            "lon":19.00343
        },
        {
            "id":"008923",
            "name":"Kabai utca",
            "lat":47.495749,
            "lon":19.160431
        },
        {
            "id":"008924",
            "name":"Kabai utca",
            "lat":47.495605,
            "lon":19.160418
        },
        {
            "id":"008939",
            "name":"Békásmegyer H",
            "lat":47.598408,
            "lon":19.054259
        },
        {
            "id":"008940",
            "name":"Békásmegyer H",
            "lat":47.598633,
            "lon":19.054086
        },
        {
            "id":"008941",
            "name":"Váci út",
            "lat":47.561245,
            "lon":19.079377
        },
        {
            "id":"008942",
            "name":"Örs vezér tere M+H",
            "lat":47.503279,
            "lon":19.137603
        },
        {
            "id":"008943",
            "name":"Budatétény, benzinkút",
            "lat":47.431086,
            "lon":19.004419
        },
        {
            "id":"008944",
            "name":"Újpest-Városkapu M (Váci út)",
            "lat":47.556577,
            "lon":19.076558
        },
        {
            "id":"008945",
            "name":"Újpest-Városkapu M (Váci út)",
            "lat":47.558115,
            "lon":19.076904
        },
        {
            "id":"008946",
            "name":"Szénás utca",
            "lat":47.527604,
            "lon":19.181627
        },
        {
            "id":"008947",
            "name":"Szlovák út",
            "lat":47.531165,
            "lon":19.189578
        },
        {
            "id":"008948",
            "name":"Kucorgó tér",
            "lat":47.469328,
            "lon":19.295153
        },
        {
            "id":"008949",
            "name":"Pestszentimre vasútáll. (Nagykőrösi út)",
            "lat":47.403423,
            "lon":19.186602
        },
        {
            "id":"008950",
            "name":"Pestszentimre vasútáll. (Nagykőrösi út)",
            "lat":47.404315,
            "lon":19.185664
        },
        {
            "id":"008951",
            "name":"Béke tér",
            "lat":47.430019,
            "lon":19.215675
        },
        {
            "id":"008952",
            "name":"Terv utca",
            "lat":47.408012,
            "lon":19.001509
        },
        {
            "id":"008953",
            "name":"Csillag utca",
            "lat":47.409214,
            "lon":19.119
        },
        {
            "id":"008954",
            "name":"Csillag utca",
            "lat":47.409565,
            "lon":19.119053
        },
        {
            "id":"008955",
            "name":"Gombosszeg köz",
            "lat":47.41302,
            "lon":19.118396
        },
        {
            "id":"008956",
            "name":"Gombosszeg köz",
            "lat":47.412723,
            "lon":19.118475
        },
        {
            "id":"008957",
            "name":"Előd utca",
            "lat":47.418651,
            "lon":19.117329
        },
        {
            "id":"008958",
            "name":"Alsó határút",
            "lat":47.416313,
            "lon":19.116399
        },
        {
            "id":"008959",
            "name":"Templom utca 6.",
            "lat":47.408876,
            "lon":19.11362
        },
        {
            "id":"008961",
            "name":"Soroksár, Hősök tere H",
            "lat":47.399339,
            "lon":19.116483
        },
        {
            "id":"008962",
            "name":"Szent István utca H",
            "lat":47.392297,
            "lon":19.115202
        },
        {
            "id":"008964",
            "name":"Tartsay utca",
            "lat":47.421343,
            "lon":19.127194
        },
        {
            "id":"008965",
            "name":"Szent László utca",
            "lat":47.421272,
            "lon":19.126902
        },
        {
            "id":"008966",
            "name":"Mesgye utca",
            "lat":47.417248,
            "lon":19.13107
        },
        {
            "id":"008967",
            "name":"Mesgye utca (Szentlőrinci úti lakótelep)",
            "lat":47.416978,
            "lon":19.131216
        },
        {
            "id":"008971",
            "name":"Gyula vezér út",
            "lat":47.409902,
            "lon":19.004383
        },
        {
            "id":"009000",
            "name":"Kistarcsa H",
            "lat":47.545503,
            "lon":19.259839
        },
        {
            "id":"009001",
            "name":"Kistarcsa H",
            "lat":47.545584,
            "lon":19.259693
        },
        {
            "id":"009002",
            "name":"Kerepes H",
            "lat":47.552463,
            "lon":19.270562
        },
        {
            "id":"009003",
            "name":"Kerepes H",
            "lat":47.551324,
            "lon":19.268897
        },
        {
            "id":"009004",
            "name":"Szilasligeti elágazás",
            "lat":47.560201,
            "lon":19.283112
        },
        {
            "id":"009005",
            "name":"Kerepes, Szabadság útja",
            "lat":47.560786,
            "lon":19.282783
        },
        {
            "id":"009006",
            "name":"Szilasligeti elágazás",
            "lat":47.560766,
            "lon":19.2837
        },
        {
            "id":"009007",
            "name":"Szilasliget, Posta",
            "lat":47.56955,
            "lon":19.272176
        },
        {
            "id":"009008",
            "name":"Szilasliget, Posta",
            "lat":47.569882,
            "lon":19.27243
        },
        {
            "id":"009009",
            "name":"Szilasliget, Wesselényi utca",
            "lat":47.573117,
            "lon":19.269227
        },
        {
            "id":"009010",
            "name":"Szilasliget, Wesselényi utca",
            "lat":47.572955,
            "lon":19.26924
        },
        {
            "id":"009011",
            "name":"Szilasliget, Szondi utca",
            "lat":47.575273,
            "lon":19.266059
        },
        {
            "id":"009012",
            "name":"Szilasliget, Szondi utca",
            "lat":47.575382,
            "lon":19.265687
        },
        {
            "id":"009013",
            "name":"Szilasliget, Kemping",
            "lat":47.578226,
            "lon":19.261133
        },
        {
            "id":"009014",
            "name":"Szentjakab H",
            "lat":47.592911,
            "lon":19.284773
        },
        {
            "id":"009015",
            "name":"Szentjakab H",
            "lat":47.592495,
            "lon":19.285583
        },
        {
            "id":"009016",
            "name":"Gödöllő, Szökőkút",
            "lat":47.599126,
            "lon":19.346731
        },
        {
            "id":"009017",
            "name":"Gödöllő, Szabadság tér H",
            "lat":47.599243,
            "lon":19.346771
        },
        {
            "id":"009018",
            "name":"Gödöllő, Szabadság tér H",
            "lat":47.59805,
            "lon":19.349038
        },
        {
            "id":"009019",
            "name":"Gödöllő, Palotakert H",
            "lat":47.598734,
            "lon":19.355678
        },
        {
            "id":"009020",
            "name":"Gödöllő, Palotakert H",
            "lat":47.598679,
            "lon":19.356116
        },
        {
            "id":"009021",
            "name":"Gödöllő H",
            "lat":47.592368,
            "lon":19.358154
        },
        {
            "id":"009022",
            "name":"Mogyoród H",
            "lat":47.595563,
            "lon":19.271528
        },
        {
            "id":"009025",
            "name":"Zichy Jenő utca",
            "lat":47.505211,
            "lon":19.05792
        },
        {
            "id":"009026",
            "name":"Zichy Jenő utca",
            "lat":47.505265,
            "lon":19.057627
        },
        {
            "id":"009031",
            "name":"Margit híd, budai hídfő H",
            "lat":47.514258,
            "lon":19.035499
        },
        {
            "id":"009039",
            "name":"Lehel tér M (Csanády utca)",
            "lat":47.515897,
            "lon":19.05893
        },
        {
            "id":"009041",
            "name":"Haller utca / Soroksári út",
            "lat":47.475041,
            "lon":19.069881
        },
        {
            "id":"009042",
            "name":"Haller utca",
            "lat":47.474816,
            "lon":19.070199
        },
        {
            "id":"009047",
            "name":"Homoktövis utca",
            "lat":47.594582,
            "lon":19.113184
        },
        {
            "id":"009065",
            "name":"Solymár, Szarvas",
            "lat":47.596321,
            "lon":18.973591
        },
        {
            "id":"009066",
            "name":"Solymár, Szarvas",
            "lat":47.596178,
            "lon":18.974455
        },
        {
            "id":"009067",
            "name":"Solymár, Auchan áruház",
            "lat":47.597798,
            "lon":18.963376
        },
        {
            "id":"009072",
            "name":"AsiaCenter",
            "lat":47.548434,
            "lon":19.146925
        },
        {
            "id":"009094",
            "name":"Petőfi Sándor utca",
            "lat":47.402454,
            "lon":18.937006
        },
        {
            "id":"009095",
            "name":"Pacsirta utca",
            "lat":47.40461,
            "lon":18.933941
        },
        {
            "id":"009096",
            "name":"Pacsirta utca",
            "lat":47.404637,
            "lon":18.933742
        },
        {
            "id":"009097",
            "name":"Nóra utca",
            "lat":47.407368,
            "lon":18.930795
        },
        {
            "id":"009098",
            "name":"Nóra utca",
            "lat":47.407278,
            "lon":18.930716
        },
        {
            "id":"009099",
            "name":"Katinka utca",
            "lat":47.410333,
            "lon":18.927025
        },
        {
            "id":"009100",
            "name":"Katinka utca",
            "lat":47.410135,
            "lon":18.927145
        },
        {
            "id":"009101",
            "name":"Tátika utca",
            "lat":47.4129,
            "lon":18.930319
        },
        {
            "id":"009102",
            "name":"Tátika utca",
            "lat":47.412836,
            "lon":18.930001
        },
        {
            "id":"009103",
            "name":"Valéria utca",
            "lat":47.414044,
            "lon":18.932675
        },
        {
            "id":"009104",
            "name":"Valéria utca",
            "lat":47.414107,
            "lon":18.932595
        },
        {
            "id":"009105",
            "name":"Diósd, Búzavirág utca",
            "lat":47.416609,
            "lon":18.934233
        },
        {
            "id":"009119",
            "name":"Szentendre H",
            "lat":47.659595,
            "lon":19.074529
        },
        {
            "id":"009137",
            "name":"Újmajori utca",
            "lat":47.471731,
            "lon":19.220038
        },
        {
            "id":"009138",
            "name":"Csillagmotor köz",
            "lat":47.471018,
            "lon":19.221893
        },
        {
            "id":"009139",
            "name":"Dedics Ferenc utca",
            "lat":47.469113,
            "lon":19.226092
        },
        {
            "id":"009140",
            "name":"Ősrepülő utca",
            "lat":47.469552,
            "lon":19.227168
        },
        {
            "id":"009145",
            "name":"Haller utca",
            "lat":47.475966,
            "lon":19.077802
        },
        {
            "id":"009146",
            "name":"Mester utca",
            "lat":47.473699,
            "lon":19.079631
        },
        {
            "id":"009147",
            "name":"Vörösmarty utca",
            "lat":47.4199,
            "lon":19.1203
        },
        {
            "id":"009148",
            "name":"Szusza Ferenc stadion",
            "lat":47.575797,
            "lon":19.083759
        },
        {
            "id":"009161",
            "name":"Keleti pályaudvar M",
            "lat":47.499477,
            "lon":19.083854
        },
        {
            "id":"009162",
            "name":"Keleti pályaudvar M",
            "lat":47.499998,
            "lon":19.08323
        },
        {
            "id":"009163",
            "name":"Keleti pályaudvar M",
            "lat":47.499998,
            "lon":19.083748
        },
        {
            "id":"009170",
            "name":"Pomáz, Dózsa György utca",
            "lat":47.64557,
            "lon":19.027226
        },
        {
            "id":"009171",
            "name":"Pomáz, Dózsa György utca",
            "lat":47.645597,
            "lon":19.027013
        },
        {
            "id":"009176",
            "name":"Kossuth Lajos tér M",
            "lat":47.505194,
            "lon":19.04807
        },
        {
            "id":"009179",
            "name":"Petőfi híd, budai hídfő",
            "lat":47.476365,
            "lon":19.057941
        },
        {
            "id":"009192",
            "name":"Kacsóh Pongrác utca",
            "lat":47.396486,
            "lon":19.208733
        },
        {
            "id":"009193",
            "name":"Kacsóh Pongrác utca",
            "lat":47.396873,
            "lon":19.208748
        },
        {
            "id":"009194",
            "name":"Gyál, Ady Endre utca",
            "lat":47.389907,
            "lon":19.217972
        },
        {
            "id":"009195",
            "name":"Gyál, Ady Endre utca",
            "lat":47.390177,
            "lon":19.217708
        },
        {
            "id":"009196",
            "name":"Széchenyi István utca",
            "lat":47.381846,
            "lon":19.230727
        },
        {
            "id":"009197",
            "name":"Bocskai István utca",
            "lat":47.383397,
            "lon":19.228295
        },
        {
            "id":"009198",
            "name":"Dobó Katica utca",
            "lat":47.386832,
            "lon":19.222956
        },
        {
            "id":"009199",
            "name":"Mátyás király utca",
            "lat":47.394694,
            "lon":19.210516
        },
        {
            "id":"009200",
            "name":"Mátyás király utca",
            "lat":47.394883,
            "lon":19.210398
        },
        {
            "id":"009201",
            "name":"Tulipán utca",
            "lat":47.392296,
            "lon":19.214271
        },
        {
            "id":"009202",
            "name":"Tulipán utca",
            "lat":47.392314,
            "lon":19.214417
        },
        {
            "id":"009203",
            "name":"Gyál, Deák Ferenc utca",
            "lat":47.385265,
            "lon":19.235533
        },
        {
            "id":"009204",
            "name":"Árpád utca",
            "lat":47.388079,
            "lon":19.231106
        },
        {
            "id":"009205",
            "name":"Dobó Katica utca",
            "lat":47.389747,
            "lon":19.228502
        },
        {
            "id":"009206",
            "name":"Táncsics Mihály utca",
            "lat":47.392091,
            "lon":19.224894
        },
        {
            "id":"009207",
            "name":"Kossuth Lajos utca",
            "lat":47.391701,
            "lon":19.22121
        },
        {
            "id":"009208",
            "name":"Pestszentlőrinc, Szarvas csárda tér",
            "lat":47.441357,
            "lon":19.18511
        },
        {
            "id":"009220",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477499,
            "lon":19.048349
        },
        {
            "id":"009225",
            "name":"Noszlopy utca",
            "lat":47.471959,
            "lon":19.148362
        },
        {
            "id":"009230",
            "name":"Deák Ferenc tér M",
            "lat":47.497692,
            "lon":19.053273
        },
        {
            "id":"009234",
            "name":"Pestszentimre vasútállomás (Nemes utca)",
            "lat":47.404493,
            "lon":19.187068
        },
        {
            "id":"009238",
            "name":"Szent Korona utca",
            "lat":47.525692,
            "lon":19.169817
        },
        {
            "id":"009239",
            "name":"Csömöri út",
            "lat":47.528249,
            "lon":19.167313
        },
        {
            "id":"009240",
            "name":"Sasvár utca, korlátozott forg.mh.",
            "lat":47.51834,
            "lon":19.180675
        },
        {
            "id":"009241",
            "name":"Margit utca",
            "lat":47.515079,
            "lon":19.185207
        },
        {
            "id":"009243",
            "name":"Alsó határút",
            "lat":47.416223,
            "lon":19.116187
        },
        {
            "id":"009272",
            "name":"Szentendre",
            "lat":47.661048,
            "lon":19.075575
        },
        {
            "id":"009273",
            "name":"Szentendre",
            "lat":47.661069,
            "lon":19.075488
        },
        {
            "id":"009276",
            "name":"Szentendre",
            "lat":47.660976,
            "lon":19.075668
        },
        {
            "id":"009289",
            "name":"Gergely utca",
            "lat":47.468734,
            "lon":19.154524
        },
        {
            "id":"009290",
            "name":"Közvágóhíd H",
            "lat":47.466702,
            "lon":19.076032
        },
        {
            "id":"009292",
            "name":"Szigetszentmiklós, városháza",
            "lat":47.348591,
            "lon":19.044709
        },
        {
            "id":"009295",
            "name":"Serfőző utca",
            "lat":47.539095,
            "lon":19.045373
        },
        {
            "id":"009301",
            "name":"Gárdonyi Géza utca",
            "lat":47.405396,
            "lon":18.947745
        },
        {
            "id":"009303",
            "name":"Újbuda, Függetlenségi park",
            "lat":47.476754,
            "lon":19.034079
        },
        {
            "id":"009309",
            "name":"Deák Ferenc tér M",
            "lat":47.497431,
            "lon":19.055755
        },
        {
            "id":"009310",
            "name":"Millenniumi Kulturális Központ",
            "lat":47.47039,
            "lon":19.074044
        },
        {
            "id":"009311",
            "name":"BILK, bekötőút",
            "lat":47.378957,
            "lon":19.12917
        },
        {
            "id":"009312",
            "name":"MNB",
            "lat":47.376865,
            "lon":19.12428
        },
        {
            "id":"009314",
            "name":"BILK. DF épület",
            "lat":47.375197,
            "lon":19.120908
        },
        {
            "id":"009315",
            "name":"MNB",
            "lat":47.376667,
            "lon":19.124426
        },
        {
            "id":"009322",
            "name":"Örs vezér tere M+H (Kerepesi út)",
            "lat":47.503306,
            "lon":19.137868
        },
        {
            "id":"009337",
            "name":"Orbánhegyi dűlő",
            "lat":47.386327,
            "lon":19.110228
        },
        {
            "id":"009338",
            "name":"Orbánhegyi dűlő",
            "lat":47.38639,
            "lon":19.11048
        },
        {
            "id":"009339",
            "name":"Szent István utca H",
            "lat":47.391083,
            "lon":19.114168
        },
        {
            "id":"009349",
            "name":"Budaörsi repülőtér",
            "lat":47.447079,
            "lon":18.98673
        },
        {
            "id":"009350",
            "name":"Budaörsi repülőtér",
            "lat":47.447007,
            "lon":18.986584
        },
        {
            "id":"009351",
            "name":"Kőérberek",
            "lat":47.446339,
            "lon":18.998545
        },
        {
            "id":"009352",
            "name":"Kőérberek",
            "lat":47.446231,
            "lon":18.998784
        },
        {
            "id":"009353",
            "name":"Tippan utca",
            "lat":47.447968,
            "lon":19.000851
        },
        {
            "id":"009354",
            "name":"Tippan utca",
            "lat":47.447788,
            "lon":19.000374
        },
        {
            "id":"009355",
            "name":"Régi vám (Kánai út)",
            "lat":47.446377,
            "lon":19.003968
        },
        {
            "id":"009356",
            "name":"Régi vám (Kánai út)",
            "lat":47.446278,
            "lon":19.004075
        },
        {
            "id":"009358",
            "name":"Soroksár, Millenniumtelep",
            "lat":47.37962,
            "lon":19.104287
        },
        {
            "id":"009359",
            "name":"Boráros tér H",
            "lat":47.479755,
            "lon":19.066473
        },
        {
            "id":"009365",
            "name":"Zsil utca",
            "lat":47.482787,
            "lon":19.063024
        },
        {
            "id":"009369",
            "name":"Csepel, Horgásztanya",
            "lat":47.38839,
            "lon":19.103502
        },
        {
            "id":"009373",
            "name":"Hunyadvár utca",
            "lat":47.508234,
            "lon":19.192106
        },
        {
            "id":"009375",
            "name":"Szilas-patak",
            "lat":47.529748,
            "lon":19.186427
        },
        {
            "id":"009376",
            "name":"Újpalota, Nyírpalota út",
            "lat":47.547011,
            "lon":19.141987
        },
        {
            "id":"009377",
            "name":"Jókai Mór utca (Rendőrség)",
            "lat":47.510368,
            "lon":19.190492
        },
        {
            "id":"009379",
            "name":"József utca",
            "lat":47.532065,
            "lon":19.15582
        },
        {
            "id":"009381",
            "name":"Rózsa utca",
            "lat":47.515812,
            "lon":19.155721
        },
        {
            "id":"009382",
            "name":"Jávorfa utca",
            "lat":47.526052,
            "lon":19.177918
        },
        {
            "id":"009383",
            "name":"János utca",
            "lat":47.523557,
            "lon":19.172309
        },
        {
            "id":"009390",
            "name":"Szent László utca",
            "lat":47.407022,
            "lon":18.999576
        },
        {
            "id":"009412",
            "name":"Karolina út",
            "lat":47.47354,
            "lon":19.034432
        },
        {
            "id":"009413",
            "name":"Ezredes utca",
            "lat":47.510057,
            "lon":19.021771
        },
        {
            "id":"009415",
            "name":"Sárfű utca",
            "lat":47.55006,
            "lon":19.138067
        },
        {
            "id":"009420",
            "name":"Honvédkórház",
            "lat":47.531456,
            "lon":19.070767
        },
        {
            "id":"009421",
            "name":"Ezred utca",
            "lat":47.606004,
            "lon":19.097598
        },
        {
            "id":"009422",
            "name":"Ezred utca",
            "lat":47.606849,
            "lon":19.098223
        },
        {
            "id":"009425",
            "name":"Csonka János tér",
            "lat":47.470555,
            "lon":19.045271
        },
        {
            "id":"009426",
            "name":"Zugló vasútállomás",
            "lat":47.51182,
            "lon":19.099528
        },
        {
            "id":"009427",
            "name":"Kelenföldi autóbuszgarázs",
            "lat":47.473243,
            "lon":19.02959
        },
        {
            "id":"009430",
            "name":"Keserűvíztelep (Bobpálya)",
            "lat":47.45388,
            "lon":19.007516
        },
        {
            "id":"009431",
            "name":"Régi vám",
            "lat":47.446818,
            "lon":19.006063
        },
        {
            "id":"009438",
            "name":"Budakeszi, Honfoglalás sétány",
            "lat":47.517899,
            "lon":18.92411
        },
        {
            "id":"009439",
            "name":"Zichy Péter utca",
            "lat":47.516612,
            "lon":18.922997
        },
        {
            "id":"009440",
            "name":"Zichy Péter utca",
            "lat":47.516162,
            "lon":18.92256
        },
        {
            "id":"009441",
            "name":"Temető utca",
            "lat":47.514938,
            "lon":18.92182
        },
        {
            "id":"009442",
            "name":"Gimnázium",
            "lat":47.512067,
            "lon":18.928677
        },
        {
            "id":"009443",
            "name":"Gimnázium",
            "lat":47.512056,
            "lon":18.927509
        },
        {
            "id":"009445",
            "name":"Tatárka utca",
            "lat":47.434041,
            "lon":19.021173
        },
        {
            "id":"009446",
            "name":"Botond utca",
            "lat":47.403953,
            "lon":18.995789
        },
        {
            "id":"009447",
            "name":"Mátyás király utca",
            "lat":47.404446,
            "lon":18.991589
        },
        {
            "id":"009448",
            "name":"Görgey utca",
            "lat":47.406802,
            "lon":18.991613
        },
        {
            "id":"009449",
            "name":"Török utca",
            "lat":47.411614,
            "lon":18.989898
        },
        {
            "id":"009451",
            "name":"Gyűszű utca",
            "lat":47.417266,
            "lon":19.0224
        },
        {
            "id":"009452",
            "name":"Húr utca",
            "lat":47.416159,
            "lon":19.020426
        },
        {
            "id":"009453",
            "name":"Dévény utca",
            "lat":47.415224,
            "lon":19.022189
        },
        {
            "id":"009454",
            "name":"Wesselényi utca",
            "lat":47.415917,
            "lon":19.026059
        },
        {
            "id":"009455",
            "name":"Ostor utca",
            "lat":47.416665,
            "lon":19.029941
        },
        {
            "id":"009456",
            "name":"Római utca",
            "lat":47.41793,
            "lon":19.017589
        },
        {
            "id":"009457",
            "name":"Római utca",
            "lat":47.417175,
            "lon":19.018319
        },
        {
            "id":"009458",
            "name":"Hűség utca",
            "lat":47.421203,
            "lon":19.013519
        },
        {
            "id":"009459",
            "name":"Hűség utca",
            "lat":47.420529,
            "lon":19.014023
        },
        {
            "id":"009460",
            "name":"Komáromi út",
            "lat":47.424593,
            "lon":19.010866
        },
        {
            "id":"009461",
            "name":"Komáromi út",
            "lat":47.423955,
            "lon":19.011131
        },
        {
            "id":"009462",
            "name":"Tanító utca",
            "lat":47.435306,
            "lon":19.008724
        },
        {
            "id":"009463",
            "name":"Tanító utca",
            "lat":47.435297,
            "lon":19.009784
        },
        {
            "id":"009465",
            "name":"Plébánia utca",
            "lat":47.429726,
            "lon":19.032323
        },
        {
            "id":"009466",
            "name":"Plébánia utca",
            "lat":47.42969,
            "lon":19.032217
        },
        {
            "id":"009467",
            "name":"Galamb utca",
            "lat":47.432765,
            "lon":19.028517
        },
        {
            "id":"009468",
            "name":"Galamb utca",
            "lat":47.432711,
            "lon":19.028438
        },
        {
            "id":"009469",
            "name":"Alkotmány utca",
            "lat":47.43343,
            "lon":19.025932
        },
        {
            "id":"009470",
            "name":"Alkotmány utca",
            "lat":47.433385,
            "lon":19.025919
        },
        {
            "id":"009471",
            "name":"Széchenyi utca",
            "lat":47.418185,
            "lon":19.032578
        },
        {
            "id":"009472",
            "name":"Promontor utca",
            "lat":47.418094,
            "lon":19.027012
        },
        {
            "id":"009473",
            "name":"Széchenyi utca",
            "lat":47.418464,
            "lon":19.032657
        },
        {
            "id":"009474",
            "name":"Komló utca",
            "lat":47.421361,
            "lon":19.035215
        },
        {
            "id":"009475",
            "name":"Méhész utca",
            "lat":47.438577,
            "lon":19.034667
        },
        {
            "id":"009480",
            "name":"Margó Tivadar utca",
            "lat":47.43327,
            "lon":19.177559
        },
        {
            "id":"009481",
            "name":"Kerékgyártó utca",
            "lat":47.521397,
            "lon":19.105645
        },
        {
            "id":"009482",
            "name":"Kucorgó tér",
            "lat":47.469074,
            "lon":19.295974
        },
        {
            "id":"009483",
            "name":"Rákoscsaba vasútállomás",
            "lat":47.491124,
            "lon":19.281625
        },
        {
            "id":"009484",
            "name":"Tura utca",
            "lat":47.4892,
            "lon":19.2768
        },
        {
            "id":"009485",
            "name":"Rákoscsaba-Újtelep vasútállomás",
            "lat":47.488181,
            "lon":19.273358
        },
        {
            "id":"009486",
            "name":"II. utca",
            "lat":47.486369,
            "lon":19.265893
        },
        {
            "id":"009487",
            "name":"Rákosliget vasútállomás",
            "lat":47.486328,
            "lon":19.259099
        },
        {
            "id":"009491",
            "name":"Füstifecske utca",
            "lat":47.478927,
            "lon":19.236991
        },
        {
            "id":"009492",
            "name":"Füstifecske utca",
            "lat":47.478783,
            "lon":19.237269
        },
        {
            "id":"009493",
            "name":"Uszoda",
            "lat":47.479663,
            "lon":19.232974
        },
        {
            "id":"009494",
            "name":"Újlak utca, lakótelep",
            "lat":47.482324,
            "lon":19.233686
        },
        {
            "id":"009495",
            "name":"Rákospatak utca",
            "lat":47.531725,
            "lon":19.100875
        },
        {
            "id":"009498",
            "name":"Csertő utca",
            "lat":47.511107,
            "lon":19.146099
        },
        {
            "id":"009499",
            "name":"Csertő utca",
            "lat":47.511591,
            "lon":19.147375
        },
        {
            "id":"009500",
            "name":"Körvasút sor",
            "lat":47.513666,
            "lon":19.15103
        },
        {
            "id":"009501",
            "name":"Körvasút sor",
            "lat":47.514609,
            "lon":19.152837
        },
        {
            "id":"009503",
            "name":"Kovácsi Kálmán tér",
            "lat":47.573171,
            "lon":19.12112
        },
        {
            "id":"009504",
            "name":"Kovácsi Kálmán tér",
            "lat":47.573431,
            "lon":19.1212
        },
        {
            "id":"009508",
            "name":"Orló utca",
            "lat":47.518283,
            "lon":19.007506
        },
        {
            "id":"009509",
            "name":"Orló utca",
            "lat":47.518121,
            "lon":19.0074
        },
        {
            "id":"009510",
            "name":"Pasaréti út",
            "lat":47.516231,
            "lon":19.003989
        },
        {
            "id":"009511",
            "name":"Pasaréti út",
            "lat":47.516393,
            "lon":19.003896
        },
        {
            "id":"009512",
            "name":"Endrődi Sándor utca",
            "lat":47.521361,
            "lon":19.01255
        },
        {
            "id":"009513",
            "name":"Bimbó út",
            "lat":47.519354,
            "lon":19.008979
        },
        {
            "id":"009514",
            "name":"Bimbó út",
            "lat":47.519966,
            "lon":19.010572
        },
        {
            "id":"009515",
            "name":"Rákospalota-Újpest vasútállomás",
            "lat":47.566421,
            "lon":19.111621
        },
        {
            "id":"009516",
            "name":"Rákospalota-Újpest vasútállomás",
            "lat":47.566286,
            "lon":19.111661
        },
        {
            "id":"009520",
            "name":"Csörsz utca",
            "lat":47.49017,
            "lon":19.023466
        },
        {
            "id":"009521",
            "name":"Csörsz utca",
            "lat":47.490044,
            "lon":19.023665
        },
        {
            "id":"009522",
            "name":"Sirály utca",
            "lat":47.490555,
            "lon":19.018489
        },
        {
            "id":"009524",
            "name":"Albertfalva vasútállomás",
            "lat":47.441923,
            "lon":19.032186
        },
        {
            "id":"009526",
            "name":"Cinkota alsó",
            "lat":47.526364,
            "lon":19.220986
        },
        {
            "id":"009527",
            "name":"Árpádföld",
            "lat":47.532979,
            "lon":19.212554
        },
        {
            "id":"009528",
            "name":"Szabadságtelep",
            "lat":47.537404,
            "lon":19.206185
        },
        {
            "id":"009534",
            "name":"XIII. utca / Dózsa György út",
            "lat":47.411121,
            "lon":18.993728
        },
        {
            "id":"009536",
            "name":"Káposztásmegyer, Mogyoródi-patak",
            "lat":47.598751,
            "lon":19.121328
        },
        {
            "id":"009537",
            "name":"Március 15. tér",
            "lat":47.491821,
            "lon":19.052151
        },
        {
            "id":"009538",
            "name":"Irány utca",
            "lat":47.540503,
            "lon":19.10979
        },
        {
            "id":"009539",
            "name":"Boglár utca",
            "lat":47.594753,
            "lon":19.060954
        },
        {
            "id":"009540",
            "name":"Szilágyi Erzsébet fasor",
            "lat":47.51525,
            "lon":19.002105
        },
        {
            "id":"009541",
            "name":"Ady Endre út",
            "lat":47.43652,
            "lon":19.034037
        },
        {
            "id":"009543",
            "name":"513. utca",
            "lat":47.484389,
            "lon":19.230204
        },
        {
            "id":"009544",
            "name":"Robogó utca",
            "lat":47.487305,
            "lon":19.270329
        },
        {
            "id":"009546",
            "name":"Memento Park",
            "lat":47.425687,
            "lon":19.001282
        },
        {
            "id":"009548",
            "name":"Tatárka utca",
            "lat":47.433933,
            "lon":19.02108
        },
        {
            "id":"009549",
            "name":"Madárdomb köz",
            "lat":47.478138,
            "lon":19.241221
        },
        {
            "id":"009550",
            "name":"Madárdomb köz",
            "lat":47.478048,
            "lon":19.241168
        },
        {
            "id":"009551",
            "name":"Margó Tivadar utca",
            "lat":47.433199,
            "lon":19.176737
        },
        {
            "id":"009553",
            "name":"Óbudai autóbuszgarázs",
            "lat":47.568209,
            "lon":19.027244
        },
        {
            "id":"009554",
            "name":"Óbuda, Bogdáni út",
            "lat":47.550032,
            "lon":19.041214
        },
        {
            "id":"009555",
            "name":"Szilágyi utca",
            "lat":47.570576,
            "lon":19.11265
        },
        {
            "id":"009557",
            "name":"Vécsey Károly utca",
            "lat":47.572023,
            "lon":19.096037
        },
        {
            "id":"009558",
            "name":"Szent János Kórház",
            "lat":47.509973,
            "lon":19.009982
        },
        {
            "id":"009563",
            "name":"Mészkő utca",
            "lat":47.579237,
            "lon":19.034843
        },
        {
            "id":"009564",
            "name":"Mészkő utca",
            "lat":47.579129,
            "lon":19.034311
        },
        {
            "id":"009568",
            "name":"Sósmocsár út",
            "lat":47.414781,
            "lon":19.134154
        },
        {
            "id":"009569",
            "name":"Thököly út",
            "lat":47.442019,
            "lon":19.180948
        },
        {
            "id":"009570",
            "name":"Újbuda-központ M",
            "lat":47.474129,
            "lon":19.047135
        },
        {
            "id":"009572",
            "name":"Bagaria utca",
            "lat":47.590242,
            "lon":19.08313
        },
        {
            "id":"009573",
            "name":"Bagaria utca",
            "lat":47.590485,
            "lon":19.083689
        },
        {
            "id":"009574",
            "name":"Ungvári utca",
            "lat":47.587511,
            "lon":19.082244
        },
        {
            "id":"009575",
            "name":"Ungvári utca",
            "lat":47.587265,
            "lon":19.082038
        },
        {
            "id":"009576",
            "name":"Rév utca",
            "lat":47.58481,
            "lon":19.081824
        },
        {
            "id":"009577",
            "name":"Savoya Park",
            "lat":47.436554,
            "lon":19.039692
        },
        {
            "id":"009578",
            "name":"Savoya Park",
            "lat":47.436634,
            "lon":19.039254
        },
        {
            "id":"009580",
            "name":"Szarvas csárda tér",
            "lat":47.441168,
            "lon":19.185003
        },
        {
            "id":"009581",
            "name":"Gábor Áron utca",
            "lat":47.515016,
            "lon":19.002132
        },
        {
            "id":"009582",
            "name":"János tér",
            "lat":47.442019,
            "lon":19.102563
        },
        {
            "id":"009584",
            "name":"Békásmegyer H",
            "lat":47.597461,
            "lon":19.055516
        },
        {
            "id":"009585",
            "name":"Nagytétény, Erdélyi utca",
            "lat":47.388125,
            "lon":18.970427
        },
        {
            "id":"009586",
            "name":"Baross utca",
            "lat":47.436417,
            "lon":19.098832
        },
        {
            "id":"009587",
            "name":"Gogol utca",
            "lat":47.52052,
            "lon":19.05674
        },
        {
            "id":"009588",
            "name":"Kuruclesi út",
            "lat":47.518021,
            "lon":18.985213
        },
        {
            "id":"009592",
            "name":"Kőbánya-Kispest P+R",
            "lat":47.464163,
            "lon":19.146225
        },
        {
            "id":"009620",
            "name":"Angeli utca / Nagytétényi út",
            "lat":47.39093,
            "lon":18.981735
        },
        {
            "id":"009625",
            "name":"Szigetcsép utca",
            "lat":47.464432,
            "lon":19.312705
        },
        {
            "id":"009630",
            "name":"Budakalász, Auchan áruház",
            "lat":47.611518,
            "lon":19.062395
        },
        {
            "id":"009631",
            "name":"Gergely utca 80.",
            "lat":47.474086,
            "lon":19.144346
        },
        {
            "id":"009632",
            "name":"Nagykőrösi út / Határ út",
            "lat":47.456405,
            "lon":19.114262
        },
        {
            "id":"009633",
            "name":"Budakalász, Auchan áruház",
            "lat":47.611513,
            "lon":19.062334
        },
        {
            "id":"009638",
            "name":"Kőbányai garázs (Salgótarjáni kapu)",
            "lat":47.491008,
            "lon":19.114239
        },
        {
            "id":"009642",
            "name":"Száva kocsiszín",
            "lat":47.466429,
            "lon":19.122671
        },
        {
            "id":"009652",
            "name":"Széchenyi út",
            "lat":47.545688,
            "lon":19.112314
        },
        {
            "id":"009659",
            "name":"Mélyfúró utca",
            "lat":47.57759,
            "lon":19.129699
        },
        {
            "id":"009667",
            "name":"Újbuda-központ M",
            "lat":47.474036,
            "lon":19.048229
        },
        {
            "id":"009675",
            "name":"Clark Ádám tér",
            "lat":47.497692,
            "lon":19.041553
        },
        {
            "id":"009676",
            "name":"Clark Ádám tér",
            "lat":47.497386,
            "lon":19.041633
        },
        {
            "id":"009684",
            "name":"Városközpont, Posta",
            "lat":47.478975,
            "lon":19.25619
        },
        {
            "id":"009685",
            "name":"Akácvirág utca",
            "lat":47.477439,
            "lon":19.255335
        },
        {
            "id":"009691",
            "name":"Flórián tér",
            "lat":47.539949,
            "lon":19.042052
        },
        {
            "id":"009692",
            "name":"Szentlélek tér H",
            "lat":47.539949,
            "lon":19.046781
        },
        {
            "id":"009693",
            "name":"Kolosy tér",
            "lat":47.52771,
            "lon":19.036894
        },
        {
            "id":"009698",
            "name":"Galántai utca",
            "lat":47.498452,
            "lon":19.014888
        },
        {
            "id":"009699",
            "name":"Galántai utca",
            "lat":47.498254,
            "lon":19.015499
        },
        {
            "id":"009700",
            "name":"Városház tér",
            "lat":47.426866,
            "lon":19.039481
        },
        {
            "id":"009704",
            "name":"Jászivány utca",
            "lat":47.495436,
            "lon":19.275393
        },
        {
            "id":"009705",
            "name":"Diadal utca (Tura utca)",
            "lat":47.494425,
            "lon":19.272296
        },
        {
            "id":"009706",
            "name":"XVII. utca",
            "lat":47.49184,
            "lon":19.260036
        },
        {
            "id":"009707",
            "name":"Aranykút utca",
            "lat":47.493794,
            "lon":19.278001
        },
        {
            "id":"009708",
            "name":"Rákoscsaba vasútállomás",
            "lat":47.491582,
            "lon":19.281932
        },
        {
            "id":"009715",
            "name":"Zodony utca",
            "lat":47.430372,
            "lon":19.099913
        },
        {
            "id":"009716",
            "name":"Pesterzsébet vasútállomás",
            "lat":47.433495,
            "lon":19.09594
        },
        {
            "id":"009717",
            "name":"Zamárdi utca",
            "lat":47.434224,
            "lon":19.093302
        },
        {
            "id":"009718",
            "name":"Vízisport utca",
            "lat":47.43454,
            "lon":19.091446
        },
        {
            "id":"009719",
            "name":"Csepeli átjáró",
            "lat":47.436365,
            "lon":19.093238
        },
        {
            "id":"009728",
            "name":"Zsigmond utca",
            "lat":47.464014,
            "lon":19.318341
        },
        {
            "id":"009729",
            "name":"Zsigmond utca",
            "lat":47.464016,
            "lon":19.317704
        },
        {
            "id":"009730",
            "name":"Széll Kálmán tér M",
            "lat":47.506918,
            "lon":19.023618
        },
        {
            "id":"009743",
            "name":"Sirály utca",
            "lat":47.490376,
            "lon":19.019617
        },
        {
            "id":"009747",
            "name":"Ezred utca, lakótelep",
            "lat":47.609052,
            "lon":19.101471
        },
        {
            "id":"009748",
            "name":"Európa Center",
            "lat":47.60521,
            "lon":19.103768
        },
        {
            "id":"009753",
            "name":"Blaha Lujza tér M (Népszínház utca)",
            "lat":47.495999,
            "lon":19.071283
        },
        {
            "id":"011313",
            "name":"Szent László utca",
            "lat":47.405915,
            "lon":18.999166
        },
        {
            "id":"011316",
            "name":"Atlétikai stadion",
            "lat":47.572374,
            "lon":19.113875
        },
        {
            "id":"011317",
            "name":"Atlétikai stadion",
            "lat":47.572527,
            "lon":19.114088
        },
        {
            "id":"011319",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.477553,
            "lon":19.048747
        },
        {
            "id":"011320",
            "name":"Búza utca",
            "lat":47.553063,
            "lon":19.040191
        },
        {
            "id":"011321",
            "name":"Búza utca",
            "lat":47.552209,
            "lon":19.039752
        },
        {
            "id":"011322",
            "name":"Óbuda, Bogdáni út",
            "lat":47.549924,
            "lon":19.04136
        },
        {
            "id":"011327",
            "name":"Budaörsi Ipari és Technológiai Park",
            "lat":47.46331,
            "lon":18.894407
        },
        {
            "id":"011495",
            "name":"Kék Golyó utca",
            "lat":47.497904,
            "lon":19.020038
        },
        {
            "id":"011583",
            "name":"Puskás Ferenc Stadion M",
            "lat":47.50016,
            "lon":19.107056
        },
        {
            "id":"011715",
            "name":"509. utca",
            "lat":47.484963,
            "lon":19.225442
        },
        {
            "id":"011722",
            "name":"Rákoskeresztúr, városközpont",
            "lat":47.479742,
            "lon":19.255012
        },
        {
            "id":"011723",
            "name":"Rákoskeresztúr, városközpont",
            "lat":47.479597,
            "lon":19.255489
        },
        {
            "id":"011724",
            "name":"Rákoskeresztúr, városközpont",
            "lat":47.479416,
            "lon":19.256086
        },
        {
            "id":"011725",
            "name":"Rákoskeresztúr, városközpont",
            "lat":47.479805,
            "lon":19.255265
        },
        {
            "id":"011726",
            "name":"Rákoskeresztúr, városközpont",
            "lat":47.479923,
            "lon":19.254708
        },
        {
            "id":"011762",
            "name":"Újpest-Városkapu M",
            "lat":47.559059,
            "lon":19.078791
        },
        {
            "id":"011765",
            "name":"Boráros tér H",
            "lat":47.479209,
            "lon":19.067846
        },
        {
            "id":"011768",
            "name":"Rákoscsaba-Újtelep, Tóalmás utca",
            "lat":47.499281,
            "lon":19.286785
        },
        {
            "id":"011773",
            "name":"Keresztúri út",
            "lat":47.484645,
            "lon":19.22775
        },
        {
            "id":"016725",
            "name":"Rózsaliget",
            "lat":47.466769,
            "lon":19.158155
        },
        {
            "id":"016727",
            "name":"Újbuda-központ M",
            "lat":47.474692,
            "lon":19.04677
        },
        {
            "id":"016729",
            "name":"Naphegy tér",
            "lat":47.493526,
            "lon":19.032755
        },
        {
            "id":"016754",
            "name":"Pető Intézet (Villányi út)",
            "lat":47.481725,
            "lon":19.033249
        },
        {
            "id":"019313",
            "name":"Rákoskert vasútállomás",
            "lat":47.457347,
            "lon":19.295124
        },
        {
            "id":"019314",
            "name":"Rákoskert sugárút",
            "lat":47.459829,
            "lon":19.29934
        },
        {
            "id":"019316",
            "name":"Rákoscsaba vasútállomás",
            "lat":47.491068,
            "lon":19.282567
        },
        {
            "id":"022005",
            "name":"Tölgy utca",
            "lat":47.41637,
            "lon":19.205427
        },
        {
            "id":"022006",
            "name":"Rezső tér",
            "lat":47.47999,
            "lon":19.095703
        },
        {
            "id":"022814",
            "name":"Móricz Zsigmond körtér M",
            "lat":47.478245,
            "lon":19.044355
        },
        {
            "id":"031884",
            "name":"Nagykovácsi, Tisza István tér",
            "lat":47.575795,
            "lon":18.879471
        },
        {
            "id":"036236",
            "name":"Szigetszentmiklós H",
            "lat":47.345437,
            "lon":19.048262
        },
        {
            "id":"037379",
            "name":"Batthyány tér M+H",
            "lat":47.506569,
            "lon":19.038406
        },
        {
            "id":"037747",
            "name":"Lakihegy, Cseresznyés utca",
            "lat":47.377314,
            "lon":19.007284
        },
        {
            "id":"037748",
            "name":"Lakihegy, Cseresznyés utca",
            "lat":47.376792,
            "lon":19.006384
        },
        {
            "id":"038670",
            "name":"Kőbánya-Kispest M",
            "lat":47.462373,
            "lon":19.148444
        },
        {
            "id":"038671",
            "name":"Kőbánya-Kispest M",
            "lat":47.462319,
            "lon":19.148338
        },
        {
            "id":"038673",
            "name":"Kőbánya-Kispest M",
            "lat":47.462669,
            "lon":19.149015
        },
        {
            "id":"038674",
            "name":"Kőbánya-Kispest M",
            "lat":47.46295,
            "lon":19.147556
        },
        {
            "id":"038675",
            "name":"Kőbánya-Kispest M",
            "lat":47.463166,
            "lon":19.146973
        },
        {
            "id":"038678",
            "name":"Kőbánya-Kispest M",
            "lat":47.463012,
            "lon":19.147742
        },
        {
            "id":"038680",
            "name":"Kőbánya-Kispest M",
            "lat":47.462904,
            "lon":19.148246
        },
        {
            "id":"038681",
            "name":"Kőbánya-Kispest M",
            "lat":47.462802,
            "lon":19.1488
        },
        {
            "id":"038682",
            "name":"Kőbánya-Kispest M",
            "lat":47.462921,
            "lon":19.149108
        },
        {
            "id":"038683",
            "name":"Kőbánya-Kispest M",
            "lat":47.463066,
            "lon":19.148472
        },
        {
            "id":"038686",
            "name":"Kőbánya-Kispest M",
            "lat":47.463436,
            "lon":19.147239
        },
        {
            "id":"038687",
            "name":"Kőbánya-Kispest M",
            "lat":47.463282,
            "lon":19.147915
        },
        {
            "id":"038688",
            "name":"Kőbánya-Kispest M",
            "lat":47.463208,
            "lon":19.14827
        },
        {
            "id":"038690",
            "name":"Kőbánya-Kispest M",
            "lat":47.463056,
            "lon":19.148936
        },
        {
            "id":"038717",
            "name":"Deák Ferenc tér M",
            "lat":47.499104,
            "lon":19.053844
        },
        {
            "id":"038791",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483138,
            "lon":19.128307
        },
        {
            "id":"040525",
            "name":"Hentes utca",
            "lat":47.462328,
            "lon":19.084545
        },
        {
            "id":"040526",
            "name":"Hentes utca",
            "lat":47.462517,
            "lon":19.084479
        },
        {
            "id":"040608",
            "name":"Zsivora park",
            "lat":47.50918,
            "lon":19.148817
        },
        {
            "id":"040609",
            "name":"Szent Imre tér H",
            "lat":47.43183,
            "lon":19.067888
        },
        {
            "id":"040612",
            "name":"Bányató utca",
            "lat":47.466331,
            "lon":19.165078
        },
        {
            "id":"040789",
            "name":"Kerékgyártó utca",
            "lat":47.521082,
            "lon":19.106375
        },
        {
            "id":"041092",
            "name":"Csepeli Kórház",
            "lat":47.42405,
            "lon":19.059654
        },
        {
            "id":"041093",
            "name":"Duna utca",
            "lat":47.428215,
            "lon":19.059125
        },
        {
            "id":"041094",
            "name":"Színesfém utca",
            "lat":47.430535,
            "lon":19.0646
        },
        {
            "id":"041095",
            "name":"Szent Imre tér H",
            "lat":47.432046,
            "lon":19.067318
        },
        {
            "id":"041207",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.56796,
            "lon":19.125671
        },
        {
            "id":"042797",
            "name":"Bányató utca",
            "lat":47.465434,
            "lon":19.162927
        },
        {
            "id":"042934",
            "name":"Soroksár, BILK",
            "lat":47.378261,
            "lon":19.121263
        },
        {
            "id":"043176",
            "name":"Kőbánya-Kispest M",
            "lat":47.461905,
            "lon":19.148496
        },
        {
            "id":"043192",
            "name":"Kisvárda utca",
            "lat":47.471603,
            "lon":19.28268
        },
        {
            "id":"043193",
            "name":"Kisvárda utca",
            "lat":47.471403,
            "lon":19.283449
        },
        {
            "id":"043333",
            "name":"Szent Orbán tér",
            "lat":47.498557,
            "lon":19.008132
        },
        {
            "id":"043341",
            "name":"György utca",
            "lat":47.530988,
            "lon":19.171569
        },
        {
            "id":"043342",
            "name":"Régi Fóti út",
            "lat":47.559192,
            "lon":19.122482
        },
        {
            "id":"043481",
            "name":"Káposztásmegyer, Aquaworld",
            "lat":47.599656,
            "lon":19.112712
        },
        {
            "id":"043548",
            "name":"Csaba vezér tér",
            "lat":47.487309,
            "lon":19.286545
        },
        {
            "id":"043554",
            "name":"Enying utca",
            "lat":47.475511,
            "lon":19.297848
        },
        {
            "id":"043555",
            "name":"Sport tér",
            "lat":47.477071,
            "lon":19.295866
        },
        {
            "id":"043556",
            "name":"Rés utca",
            "lat":47.480228,
            "lon":19.29194
        },
        {
            "id":"043571",
            "name":"Dukát utca",
            "lat":47.408304,
            "lon":18.991015
        },
        {
            "id":"044029",
            "name":"Fenyőgyöngye",
            "lat":47.540338,
            "lon":19.006599
        },
        {
            "id":"044032",
            "name":"Szigetszentmiklós, városháza",
            "lat":47.347971,
            "lon":19.044934
        },
        {
            "id":"044033",
            "name":"József Attila utca",
            "lat":47.338022,
            "lon":19.039575
        },
        {
            "id":"044034",
            "name":"József Attila utca",
            "lat":47.338085,
            "lon":19.038292
        },
        {
            "id":"044076",
            "name":"Déli utca",
            "lat":47.423043,
            "lon":19.061391
        },
        {
            "id":"044115",
            "name":"Pöttyös utca",
            "lat":47.468484,
            "lon":19.116055
        },
        {
            "id":"044125",
            "name":"Cinkota H",
            "lat":47.520032,
            "lon":19.22058
        },
        {
            "id":"044126",
            "name":"Száva kocsiszín",
            "lat":47.466789,
            "lon":19.123016
        },
        {
            "id":"044127",
            "name":"Száva kocsiszín",
            "lat":47.46642,
            "lon":19.123095
        },
        {
            "id":"044128",
            "name":"Dési Huber utca",
            "lat":47.46566,
            "lon":19.115414
        },
        {
            "id":"044129",
            "name":"Napfény utca",
            "lat":47.458582,
            "lon":19.11445
        },
        {
            "id":"044130",
            "name":"Madzsar József utca / Pünkösdfürdő utca",
            "lat":47.595572,
            "lon":19.054226
        },
        {
            "id":"044131",
            "name":"Madzsar József utca / Pünkösdfürdő utca",
            "lat":47.595527,
            "lon":19.054026
        },
        {
            "id":"044135",
            "name":"Íves út",
            "lat":47.593111,
            "lon":19.106973
        },
        {
            "id":"044178",
            "name":"Szent Gellért-templom",
            "lat":47.469401,
            "lon":19.025877
        },
        {
            "id":"044192",
            "name":"Békásmegyer H",
            "lat":47.597856,
            "lon":19.053867
        },
        {
            "id":"044301",
            "name":"Orczy tér",
            "lat":47.489508,
            "lon":19.090907
        },
        {
            "id":"044368",
            "name":"Örs vezér tere",
            "lat":47.502847,
            "lon":19.1356
        },
        {
            "id":"044369",
            "name":"Ráckeve",
            "lat":47.175605,
            "lon":18.941796
        },
        {
            "id":"044370",
            "name":"Csömör",
            "lat":47.544963,
            "lon":19.225434
        },
        {
            "id":"044371",
            "name":"Budakeszi, Tesco-Parkcenter",
            "lat":47.500252,
            "lon":18.916838
        },
        {
            "id":"044372",
            "name":"Solymár, Kerekhegy",
            "lat":47.581449,
            "lon":18.92642
        },
        {
            "id":"044375",
            "name":"Budaliget, Géza fejedelem útja",
            "lat":47.567607,
            "lon":18.936286
        },
        {
            "id":"044380",
            "name":"Dózsa György tér",
            "lat":47.507157,
            "lon":18.92221
        },
        {
            "id":"044381",
            "name":"Dózsa György tér",
            "lat":47.507044,
            "lon":18.922323
        },
        {
            "id":"044382",
            "name":"Budakeszi, lakótelep",
            "lat":47.503867,
            "lon":18.921003
        },
        {
            "id":"044383",
            "name":"Budakeszi, lakótelep",
            "lat":47.503621,
            "lon":18.921157
        },
        {
            "id":"044386",
            "name":"Solymár vasútállomás",
            "lat":47.595938,
            "lon":18.94937
        },
        {
            "id":"044387",
            "name":"Solymár vasútállomás",
            "lat":47.596042,
            "lon":18.948965
        },
        {
            "id":"044388",
            "name":"Soroksár, Auchan áruház",
            "lat":47.419683,
            "lon":19.155606
        },
        {
            "id":"044511",
            "name":"Solymár, PEMÜ",
            "lat":47.597443,
            "lon":18.928231
        },
        {
            "id":"044513",
            "name":"Kelenföld kocsiszín (Thallóczy kapu)",
            "lat":47.469485,
            "lon":19.025578
        },
        {
            "id":"044557",
            "name":"Újpest, Árpád út hajóállomás",
            "lat":47.562378,
            "lon":19.078142
        },
        {
            "id":"044571",
            "name":"Solymár, községháza",
            "lat":47.59219,
            "lon":18.937112
        },
        {
            "id":"044572",
            "name":"Dózsa György utca",
            "lat":47.592895,
            "lon":18.931486
        },
        {
            "id":"044573",
            "name":"József Attila utca",
            "lat":47.592672,
            "lon":18.932563
        },
        {
            "id":"044576",
            "name":"Újpest, Árpád út",
            "lat":47.561947,
            "lon":19.07757
        },
        {
            "id":"044581",
            "name":"Meder utca",
            "lat":47.550133,
            "lon":19.067327
        },
        {
            "id":"044583",
            "name":"Népfürdő utca (Árpád híd)",
            "lat":47.537308,
            "lon":19.057998
        },
        {
            "id":"044589",
            "name":"Jászai Mari tér (Margit híd)",
            "lat":47.515214,
            "lon":19.047061
        },
        {
            "id":"044590",
            "name":"Batthyány tér M+H",
            "lat":47.504666,
            "lon":19.039899
        },
        {
            "id":"044591",
            "name":"Petőfi tér (Erzsébet híd)",
            "lat":47.493566,
            "lon":19.049311
        },
        {
            "id":"044592",
            "name":"Szent Gellért tér M (Szabadság híd)",
            "lat":47.484661,
            "lon":19.053649
        },
        {
            "id":"044593",
            "name":"Boráros tér H (Petőfi híd)",
            "lat":47.479983,
            "lon":19.065073
        },
        {
            "id":"044594",
            "name":"Egyetemváros - A38",
            "lat":47.476511,
            "lon":19.062564
        },
        {
            "id":"044595",
            "name":"Haller utca",
            "lat":47.474721,
            "lon":19.068613
        },
        {
            "id":"044602",
            "name":"Solymár, temető",
            "lat":47.594946,
            "lon":18.940975
        },
        {
            "id":"044603",
            "name":"Solymár, temető",
            "lat":47.595027,
            "lon":18.940164
        },
        {
            "id":"044637",
            "name":"Görögkatolikus templom",
            "lat":47.423175,
            "lon":19.078064
        },
        {
            "id":"044638",
            "name":"Görögkatolikus templom",
            "lat":47.424083,
            "lon":19.077958
        },
        {
            "id":"045755",
            "name":"Maros utca",
            "lat":47.418142,
            "lon":19.137857
        },
        {
            "id":"045883",
            "name":"Fót, Auchan áruház",
            "lat":47.580981,
            "lon":19.161503
        },
        {
            "id":"047985",
            "name":"Szőlőskert utca",
            "lat":47.502123,
            "lon":18.916488
        },
        {
            "id":"048009",
            "name":"Újpalota, Szentmihályi út",
            "lat":47.541981,
            "lon":19.151443
        },
        {
            "id":"048277",
            "name":"Kőbánya alsó vasútállomás",
            "lat":47.483147,
            "lon":19.127803
        },
        {
            "id":"048302",
            "name":"Törökbálint, Diósdi út",
            "lat":47.433951,
            "lon":18.924598
        },
        {
            "id":"048303",
            "name":"Törökbálint, Diósdi út",
            "lat":47.434301,
            "lon":18.923948
        },
        {
            "id":"048304",
            "name":"Törökbálint, Liliom utca",
            "lat":47.431489,
            "lon":18.927706
        },
        {
            "id":"048305",
            "name":"Törökbálint, Liliom utca",
            "lat":47.430968,
            "lon":18.928304
        },
        {
            "id":"048471",
            "name":"Pasaréti tér",
            "lat":47.52362,
            "lon":18.994064
        },
        {
            "id":"048505",
            "name":"Szent István Bazilika",
            "lat":47.500543,
            "lon":19.054707
        },
        {
            "id":"048506",
            "name":"Szent István Bazilika",
            "lat":47.500336,
            "lon":19.054879
        },
        {
            "id":"048519",
            "name":"Rákospalota, Kossuth utca",
            "lat":47.568509,
            "lon":19.125605
        },
        {
            "id":"048536",
            "name":"Lehel tér M",
            "lat":47.517759,
            "lon":19.060445
        },
        {
            "id":"049170",
            "name":"Szent István utca H",
            "lat":47.391218,
            "lon":19.114446
        },
        {
            "id":"049171",
            "name":"Zsellér dűlő",
            "lat":47.390703,
            "lon":19.119134
        },
        {
            "id":"049174",
            "name":"Soroksár, Kertvárosi körút",
            "lat":47.413026,
            "lon":19.136152
        },
        {
            "id":"049177",
            "name":"Kárpát utca",
            "lat":47.527563,
            "lon":19.058455
        },
        {
            "id":"049178",
            "name":"Révész utca",
            "lat":47.526807,
            "lon":19.061695
        },
        {
            "id":"049180",
            "name":"Dagály fürdő",
            "lat":47.539058,
            "lon":19.061671
        },
        {
            "id":"049182",
            "name":"Úszódaru utca",
            "lat":47.546064,
            "lon":19.068993
        },
        {
            "id":"049183",
            "name":"Úszódaru utca",
            "lat":47.545902,
            "lon":19.06878
        },
        {
            "id":"049185",
            "name":"Szántóföld utca",
            "lat":47.572636,
            "lon":19.139461
        },
        {
            "id":"049187",
            "name":"Pető Intézet (Villányi út)",
            "lat":47.481968,
            "lon":19.031975
        },
        {
            "id":"049597",
            "name":"Infopark",
            "lat":47.468449,
            "lon":19.057197
        },
        {
            "id":"049784",
            "name":"Clark Ádám tér",
            "lat":47.499059,
            "lon":19.040119
        },
        {
            "id":"049785",
            "name":"Clark Ádám tér",
            "lat":47.499248,
            "lon":19.040199
        },
        {
            "id":"049787",
            "name":"Nagytétény, Erdélyi utca",
            "lat":47.387982,
            "lon":18.970812
        },
        {
            "id":"049843",
            "name":"Kossuth Lajos tér M (Kozma Ferenc utca)",
            "lat":47.506138,
            "lon":19.048959
        },
        {
            "id":"049903",
            "name":"Mansfeld Péter park",
            "lat":47.517075,
            "lon":19.033226
        },
        {
            "id":"050003",
            "name":"Cinkota H",
            "lat":47.520006,
            "lon":19.220341
        },
        {
            "id":"050173",
            "name":"Lincoln út",
            "lat":47.416015,
            "lon":19.2435
        },
        {
            "id":"050174",
            "name":"Lőrinci utca",
            "lat":47.416612,
            "lon":19.241461
        },
        {
            "id":"050175",
            "name":"Pestszentlőrinc, sorompó",
            "lat":47.421906,
            "lon":19.238604
        },
        {
            "id":"050176",
            "name":"Pestszentlőrinc, sorompó",
            "lat":47.422104,
            "lon":19.238366
        },
        {
            "id":"050177",
            "name":"Ganztelep, Mednyánszky utca",
            "lat":47.423198,
            "lon":19.234845
        },
        {
            "id":"050178",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.429529,
            "lon":19.21839
        },
        {
            "id":"050180",
            "name":"Duna utca",
            "lat":47.433016,
            "lon":19.220602
        },
        {
            "id":"050181",
            "name":"Ferihegy vasútállomás",
            "lat":47.436818,
            "lon":19.22255
        },
        {
            "id":"050182",
            "name":"Duna utca",
            "lat":47.433475,
            "lon":19.22063
        },
        {
            "id":"050183",
            "name":"Pestszentlőrinc, Béke tér",
            "lat":47.429673,
            "lon":19.218245
        },
        {
            "id":"050184",
            "name":"Lőrinci piac",
            "lat":47.44313,
            "lon":19.184332
        },
        {
            "id":"050185",
            "name":"Vecsés, Market Central Ferihegy",
            "lat":47.416747,
            "lon":19.251865
        },
        {
            "id":"050186",
            "name":"Vecsés, Market Central Ferihegy",
            "lat":47.416783,
            "lon":19.251878
        },
        {
            "id":"050187",
            "name":"Vecsés, Fő út",
            "lat":47.418379,
            "lon":19.249419
        },
        {
            "id":"050189",
            "name":"Ganztelep, Mednyánszky utca",
            "lat":47.423855,
            "lon":19.234688
        },
        {
            "id":"050223",
            "name":"Margit híd, budai hídfő H",
            "lat":47.514647,
            "lon":19.037993
        },
        {
            "id":"050274",
            "name":"Batthyány-örökmécses",
            "lat":47.506345,
            "lon":19.05099
        },
        {
            "id":"050279",
            "name":"Lomnici utca",
            "lat":47.436478,
            "lon":19.019514
        },
        {
            "id":"056123",
            "name":"Vadóc utca",
            "lat":47.572081,
            "lon":19.009884
        },
        {
            "id":"056124",
            "name":"Virágosnyereg út",
            "lat":47.572331,
            "lon":19.004766
        },
        {
            "id":"056125",
            "name":"Keled út",
            "lat":47.569423,
            "lon":19.027934
        },
        {
            "id":"056161",
            "name":"Csillaghegy H [1]",
            "lat":47.586065,
            "lon":19.043762
        },
        {
            "id":"056162",
            "name":"Mészkő utca [2]",
            "lat":47.579552,
            "lon":19.034245
        },
        {
            "id":"056163",
            "name":"Mészkő utca [2]",
            "lat":47.579444,
            "lon":19.034258
        },
        {
            "id":"056164",
            "name":"Csikóvár utca [3]",
            "lat":47.583059,
            "lon":19.031412
        },
        {
            "id":"056165",
            "name":"Öregbükk utca [4]",
            "lat":47.581359,
            "lon":19.029605
        },
        {
            "id":"056166",
            "name":"Öregbükk utca [4]",
            "lat":47.58126,
            "lon":19.029591
        },
        {
            "id":"056167",
            "name":"Lepence utca [5]",
            "lat":47.583661,
            "lon":19.027517
        },
        {
            "id":"056168",
            "name":"Cserszömörce utca [6]",
            "lat":47.582501,
            "lon":19.026135
        },
        {
            "id":"056169",
            "name":"Cserszömörce utca [6]",
            "lat":47.582492,
            "lon":19.026068
        },
        {
            "id":"056170",
            "name":"Muzsla utca [7]",
            "lat":47.581043,
            "lon":19.024075
        },
        {
            "id":"056171",
            "name":"Muzsla utca [7]",
            "lat":47.581061,
            "lon":19.024247
        },
        {
            "id":"056172",
            "name":"Óarany utca [8]",
            "lat":47.579523,
            "lon":19.023557
        },
        {
            "id":"056173",
            "name":"Mácsonya utca [9]",
            "lat":47.583777,
            "lon":19.023595
        },
        {
            "id":"056174",
            "name":"Mácsonya utca [9]",
            "lat":47.583768,
            "lon":19.023528
        },
        {
            "id":"056175",
            "name":"Saroglya utca [10]",
            "lat":47.584973,
            "lon":19.021161
        },
        {
            "id":"056176",
            "name":"Saroglya utca [10]",
            "lat":47.584928,
            "lon":19.021135
        },
        {
            "id":"056177",
            "name":"Kőpor utca [11]",
            "lat":47.582715,
            "lon":19.019514
        },
        {
            "id":"056178",
            "name":"Csillaghegy H [1]",
            "lat":47.586074,
            "lon":19.043722
        },
        {
            "id":"056184",
            "name":"Csikóvár utca [3]",
            "lat":47.58305,
            "lon":19.031452
        },
        {
            "id":"056185",
            "name":"Lepence utca [5]",
            "lat":47.583643,
            "lon":19.02757
        },
        {
            "id":"056186",
            "name":"Muzsla utca [7]",
            "lat":47.581061,
            "lon":19.024021
        },
        {
            "id":"056187",
            "name":"Muzsla utca [7]",
            "lat":47.581034,
            "lon":19.024287
        },
        {
            "id":"056188",
            "name":"Óarany utca [8]",
            "lat":47.579541,
            "lon":19.023504
        },
        {
            "id":"056189",
            "name":"Ipacsfa utca",
            "lat":47.429484,
            "lon":19.168656
        },
        {
            "id":"056202",
            "name":"Kelenföld vasútállomás",
            "lat":47.464403,
            "lon":19.020674
        },
        {
            "id":"056204",
            "name":"Szent Gellért tér",
            "lat":47.483441,
            "lon":19.053806
        },
        {
            "id":"056206",
            "name":"Keleti pályaudvar",
            "lat":47.500301,
            "lon":19.081213
        },
        {
            "id":"056207",
            "name":"Bikás park",
            "lat":47.464773,
            "lon":19.033395
        },
        {
            "id":"056209",
            "name":"Újbuda-központ",
            "lat":47.473991,
            "lon":19.046348
        },
        {
            "id":"056210",
            "name":"Móricz Zsigmond körtér",
            "lat":47.477416,
            "lon":19.047473
        },
        {
            "id":"056211",
            "name":"Fővám tér",
            "lat":47.486713,
            "lon":19.057096
        },
        {
            "id":"056212",
            "name":"Kálvin tér",
            "lat":47.489074,
            "lon":19.06148
        },
        {
            "id":"056213",
            "name":"Rákóczi tér",
            "lat":47.492722,
            "lon":19.071817
        },
        {
            "id":"056214",
            "name":"II. János Pál pápa tér",
            "lat":47.4953,
            "lon":19.077244
        },
        {
            "id":"056215",
            "name":"Kelenföld vasútállomás",
            "lat":47.464515,
            "lon":19.019618
        },
        {
            "id":"056216",
            "name":"Kelenföld vasútállomás",
            "lat":47.464255,
            "lon":19.020587
        },
        {
            "id":"056217",
            "name":"Bikás park",
            "lat":47.464881,
            "lon":19.032345
        },
        {
            "id":"056218",
            "name":"Bikás park",
            "lat":47.465022,
            "lon":19.033386
        },
        {
            "id":"056219",
            "name":"Újbuda-központ",
            "lat":47.47286,
            "lon":19.045954
        },
        {
            "id":"056220",
            "name":"Újbuda-központ",
            "lat":47.473559,
            "lon":19.046266
        },
        {
            "id":"056221",
            "name":"Móricz Zsigmond körtér",
            "lat":47.476629,
            "lon":19.047227
        },
        {
            "id":"056222",
            "name":"Móricz Zsigmond körtér",
            "lat":47.47731,
            "lon":19.047645
        },
        {
            "id":"056223",
            "name":"Szent Gellért tér",
            "lat":47.482635,
            "lon":19.054014
        },
        {
            "id":"056224",
            "name":"Szent Gellért tér",
            "lat":47.483039,
            "lon":19.055036
        },
        {
            "id":"056225",
            "name":"Fővám tér",
            "lat":47.485792,
            "lon":19.057571
        },
        {
            "id":"056226",
            "name":"Fővám tér",
            "lat":47.486169,
            "lon":19.058009
        },
        {
            "id":"056227",
            "name":"Kálvin tér",
            "lat":47.488903,
            "lon":19.061022
        },
        {
            "id":"056228",
            "name":"Kálvin tér",
            "lat":47.489245,
            "lon":19.061938
        },
        {
            "id":"056229",
            "name":"Rákóczi tér",
            "lat":47.492725,
            "lon":19.071361
        },
        {
            "id":"056230",
            "name":"Rákóczi tér",
            "lat":47.49276,
            "lon":19.072489
        },
        {
            "id":"056231",
            "name":"II. János Pál pápa tér",
            "lat":47.495593,
            "lon":19.077229
        },
        {
            "id":"056232",
            "name":"II. János Pál pápa tér",
            "lat":47.496078,
            "lon":19.077707
        },
        {
            "id":"056233",
            "name":"Keleti pályaudvar",
            "lat":47.500116,
            "lon":19.080722
        },
        {
            "id":"056234",
            "name":"Keleti pályaudvar",
            "lat":47.500485,
            "lon":19.081704
        },
        {
            "id":"061136",
            "name":"Rákosszeg park",
            "lat":47.534261,
            "lon":19.103428
        },
        {
            "id":"061188",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464093,
            "lon":19.018809
        },
        {
            "id":"061221",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464281,
            "lon":19.018836
        },
        {
            "id":"061222",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464452,
            "lon":19.018862
        },
        {
            "id":"061223",
            "name":"Neszmélyi út",
            "lat":47.460215,
            "lon":19.01523
        },
        {
            "id":"061224",
            "name":"Péterhegyi út / Neszmélyi út",
            "lat":47.458534,
            "lon":19.019025
        },
        {
            "id":"061225",
            "name":"Hajtány sor",
            "lat":47.455342,
            "lon":19.024398
        },
        {
            "id":"061226",
            "name":"Péterhegyi út (Menyecske utca)",
            "lat":47.461907,
            "lon":19.01889
        },
        {
            "id":"061227",
            "name":"Péterhegyi út (Menyecske utca)",
            "lat":47.462015,
            "lon":19.018824
        },
        {
            "id":"061228",
            "name":"Bazsalikom utca",
            "lat":47.454244,
            "lon":19.021149
        },
        {
            "id":"061231",
            "name":"Pajkos utca",
            "lat":47.456926,
            "lon":19.030352
        },
        {
            "id":"061232",
            "name":"Pajkos utca",
            "lat":47.457088,
            "lon":19.029768
        },
        {
            "id":"061233",
            "name":"Antalháza",
            "lat":47.436223,
            "lon":19.007092
        },
        {
            "id":"061234",
            "name":"Antalháza",
            "lat":47.436726,
            "lon":19.007132
        },
        {
            "id":"061238",
            "name":"Nyéki Imre Uszoda",
            "lat":47.450954,
            "lon":19.036666
        },
        {
            "id":"061239",
            "name":"Nyéki Imre Uszoda",
            "lat":47.450415,
            "lon":19.038098
        },
        {
            "id":"061271",
            "name":"Igmándi utca",
            "lat":47.457248,
            "lon":19.019994
        },
        {
            "id":"061272",
            "name":"Bolygó utca",
            "lat":47.451139,
            "lon":19.016244
        },
        {
            "id":"061273",
            "name":"Bolygó utca",
            "lat":47.450752,
            "lon":19.016218
        },
        {
            "id":"061274",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464128,
            "lon":19.018557
        },
        {
            "id":"061275",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464461,
            "lon":19.01861
        },
        {
            "id":"061276",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464704,
            "lon":19.018557
        },
        {
            "id":"061277",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464794,
            "lon":19.018305
        },
        {
            "id":"061278",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464749,
            "lon":19.017761
        },
        {
            "id":"061279",
            "name":"Kelenföld vasútállomás M",
            "lat":47.46465,
            "lon":19.018
        },
        {
            "id":"061280",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464488,
            "lon":19.018252
        },
        {
            "id":"061286",
            "name":"Szabina út",
            "lat":47.437241,
            "lon":19.013747
        },
        {
            "id":"061287",
            "name":"Várkert Bazár",
            "lat":47.494511,
            "lon":19.04367
        },
        {
            "id":"061350",
            "name":"Keleti pályaudvar M",
            "lat":47.499795,
            "lon":19.08317
        },
        {
            "id":"061351",
            "name":"Keleti pályaudvar M",
            "lat":47.499785,
            "lon":19.083741
        },
        {
            "id":"061352",
            "name":"Keleti pályaudvar M",
            "lat":47.499818,
            "lon":19.084067
        },
        {
            "id":"061368",
            "name":"Munkás utca",
            "lat":47.500099,
            "lon":19.078903
        },
        {
            "id":"061377",
            "name":"Sasadi út",
            "lat":47.466035,
            "lon":19.0165
        },
        {
            "id":"061378",
            "name":"Szőlőskert utca",
            "lat":47.502285,
            "lon":18.916726
        },
        {
            "id":"061379",
            "name":"Maglód, Auchan áruház",
            "lat":47.459205,
            "lon":19.332057
        },
        {
            "id":"062511",
            "name":"Than Károly utca",
            "lat":47.461081,
            "lon":19.025231
        },
        {
            "id":"062512",
            "name":"Borszéki utca",
            "lat":47.458535,
            "lon":19.023574
        },
        {
            "id":"062513",
            "name":"Jégmadár utca",
            "lat":47.430762,
            "lon":19.005851
        },
        {
            "id":"062514",
            "name":"Jégmadár utca",
            "lat":47.430753,
            "lon":19.005665
        },
        {
            "id":"062515",
            "name":"Török utca",
            "lat":47.412738,
            "lon":18.989274
        },
        {
            "id":"062516",
            "name":"Török utca",
            "lat":47.412918,
            "lon":18.988757
        },
        {
            "id":"062517",
            "name":"Rózsák tere",
            "lat":47.501871,
            "lon":19.075626
        },
        {
            "id":"062518",
            "name":"Március 15. tér",
            "lat":47.491908,
            "lon":19.051799
        },
        {
            "id":"062519",
            "name":"Gazdagréti út",
            "lat":47.462811,
            "lon":19.005122
        },
        {
            "id":"062522",
            "name":"XIII. utca / Dózsa György út",
            "lat":47.41113,
            "lon":18.993901
        },
        {
            "id":"062602",
            "name":"Kőérpataki dűlő",
            "lat":47.452432,
            "lon":19.007531
        },
        {
            "id":"062604",
            "name":"Nyár utca",
            "lat":47.435473,
            "lon":18.918642
        },
        {
            "id":"062607",
            "name":"Neumann János utca",
            "lat":47.470383,
            "lon":19.062596
        },
        {
            "id":"062608",
            "name":"Magyar tudósok körútja",
            "lat":47.471498,
            "lon":19.063724
        },
        {
            "id":"062620",
            "name":"Egyetemváros - A38 hajóállomás",
            "lat":47.473576,
            "lon":19.063446
        },
        {
            "id":"062621",
            "name":"Egyetemváros - A38 hajóállomás",
            "lat":47.473675,
            "lon":19.063592
        },
        {
            "id":"062622",
            "name":"Magyar tudósok körútja",
            "lat":47.471741,
            "lon":19.063989
        },
        {
            "id":"062726",
            "name":"Régi vám",
            "lat":47.445631,
            "lon":19.005613
        },
        {
            "id":"062756",
            "name":"Dagály fürdő",
            "lat":47.537691,
            "lon":19.06284
        },
        {
            "id":"062757",
            "name":"Karikás Frigyes utca",
            "lat":47.536767,
            "lon":19.067269
        },
        {
            "id":"062815",
            "name":"Szent László utca",
            "lat":47.40525,
            "lon":18.998663
        },
        {
            "id":"062861",
            "name":"Dagály fürdő",
            "lat":47.537898,
            "lon":19.062441
        },
        {
            "id":"062942",
            "name":"Péterfy Sándor utca",
            "lat":47.501682,
            "lon":19.077816
        },
        {
            "id":"063399",
            "name":"Hulladékhasznosító Mű",
            "lat":47.584164,
            "lon":19.131198
        },
        {
            "id":"064067",
            "name":"Massányi úti lakópark",
            "lat":47.359933,
            "lon":19.028822
        },
        {
            "id":"064074",
            "name":"Massányi úti lakópark",
            "lat":47.360751,
            "lon":19.027856
        },
        {
            "id":"064075",
            "name":"Szigetszentmiklós, Szabadság utca",
            "lat":47.358296,
            "lon":19.031921
        },
        {
            "id":"064085",
            "name":"Kölcsey Ferenc utca",
            "lat":47.355247,
            "lon":19.034874
        },
        {
            "id":"064087",
            "name":"Lehel utca",
            "lat":47.352882,
            "lon":19.038541
        },
        {
            "id":"064088",
            "name":"Városi Könyvtár",
            "lat":47.344795,
            "lon":19.042274
        },
        {
            "id":"064089",
            "name":"Miklós Pláza",
            "lat":47.341638,
            "lon":19.040925
        },
        {
            "id":"064090",
            "name":"Nap utca (óvoda)",
            "lat":47.349537,
            "lon":19.025749
        },
        {
            "id":"064091",
            "name":"Váci Mihály utca (József Attila-telep H)",
            "lat":47.338471,
            "lon":19.03591
        },
        {
            "id":"064092",
            "name":"Jókai utca",
            "lat":47.34126,
            "lon":19.036028
        },
        {
            "id":"064093",
            "name":"Akácfa körút",
            "lat":47.344228,
            "lon":19.033301
        },
        {
            "id":"064103",
            "name":"Tamási Áron utca",
            "lat":47.345045,
            "lon":19.028206
        },
        {
            "id":"064104",
            "name":"Miklós tér",
            "lat":47.346933,
            "lon":19.023282
        },
        {
            "id":"064105",
            "name":"Szebeni utca",
            "lat":47.350614,
            "lon":19.016271
        },
        {
            "id":"064106",
            "name":"Nap utca (óvoda)",
            "lat":47.34975,
            "lon":19.0261
        },
        {
            "id":"064107",
            "name":"Ősz utca",
            "lat":47.352907,
            "lon":19.024828
        },
        {
            "id":"064108",
            "name":"Ady Endre utca",
            "lat":47.355057,
            "lon":19.025886
        },
        {
            "id":"064170",
            "name":"Ady Endre utca",
            "lat":47.355848,
            "lon":19.02709
        },
        {
            "id":"064175",
            "name":"Ősz utca",
            "lat":47.352394,
            "lon":19.025291
        },
        {
            "id":"064181",
            "name":"Miklós tér",
            "lat":47.347356,
            "lon":19.023163
        },
        {
            "id":"064182",
            "name":"Tamási Áron utca",
            "lat":47.34501,
            "lon":19.028841
        },
        {
            "id":"064183",
            "name":"Akácfa körút",
            "lat":47.343832,
            "lon":19.034294
        },
        {
            "id":"064184",
            "name":"Jókai utca",
            "lat":47.34108,
            "lon":19.035843
        },
        {
            "id":"064185",
            "name":"Váci Mihály utca (József Attila-telep H)",
            "lat":47.338561,
            "lon":19.035764
        },
        {
            "id":"064186",
            "name":"Kisfaludy utca",
            "lat":47.342349,
            "lon":19.045001
        },
        {
            "id":"064187",
            "name":"Lehel utca",
            "lat":47.352873,
            "lon":19.038739
        },
        {
            "id":"064188",
            "name":"Kölcsey Ferenc utca",
            "lat":47.354959,
            "lon":19.035403
        },
        {
            "id":"064208",
            "name":"Szépvölgyi köz",
            "lat":47.541136,
            "lon":19.002003
        },
        {
            "id":"064209",
            "name":"Szépvölgyi köz",
            "lat":47.541109,
            "lon":19.001644
        },
        {
            "id":"064210",
            "name":"Fenyőgyöngye",
            "lat":47.540427,
            "lon":19.005563
        },
        {
            "id":"064212",
            "name":"Selyemakác utca",
            "lat":47.543149,
            "lon":18.996382
        },
        {
            "id":"064214",
            "name":"Selyemakác utca",
            "lat":47.54305,
            "lon":18.996382
        },
        {
            "id":"064215",
            "name":"Szépvölgyi dűlő",
            "lat":47.545881,
            "lon":18.992141
        },
        {
            "id":"064239",
            "name":"Leshegy utca",
            "lat":47.376961,
            "lon":19.032246
        },
        {
            "id":"064240",
            "name":"Leshegy utca",
            "lat":47.377069,
            "lon":19.031955
        },
        {
            "id":"064241",
            "name":"Leshegy Ipari Park",
            "lat":47.376044,
            "lon":19.042085
        },
        {
            "id":"064242",
            "name":"Leshegy Ipari Park",
            "lat":47.375571,
            "lon":19.041999
        },
        {
            "id":"064243",
            "name":"Temető utca",
            "lat":47.35621,
            "lon":19.046946
        },
        {
            "id":"064244",
            "name":"Wesselényi utca",
            "lat":47.35111,
            "lon":19.045357
        },
        {
            "id":"064245",
            "name":"Bánki Donát utca",
            "lat":47.360366,
            "lon":19.047581
        },
        {
            "id":"064246",
            "name":"Bányató út",
            "lat":47.36767,
            "lon":19.048415
        },
        {
            "id":"064316",
            "name":"Bányató út",
            "lat":47.366761,
            "lon":19.048071
        },
        {
            "id":"064318",
            "name":"Temető utca",
            "lat":47.355383,
            "lon":19.0459
        },
        {
            "id":"064319",
            "name":"Wesselényi utca",
            "lat":47.352063,
            "lon":19.045357
        },
        {
            "id":"066668",
            "name":"Kelenföld vasútállomás M",
            "lat":47.464175,
            "lon":19.023253
        },
        {
            "id":"066697",
            "name":"Rés utca",
            "lat":47.480138,
            "lon":19.291886
        },
        {
            "id":"066698",
            "name":"Sport tér",
            "lat":47.476891,
            "lon":19.295905
        },
        {
            "id":"066699",
            "name":"Enying utca",
            "lat":47.475006,
            "lon":19.298297
        },
        {
            "id":"066700",
            "name":"Szárazhegy köz",
            "lat":47.473184,
            "lon":19.300716
        },
        {
            "id":"066711",
            "name":"Rákoscsaba-Újtelep vasútállomás",
            "lat":47.486513,
            "lon":19.270724
        },
        {
            "id":"066712",
            "name":"Szabadság sugárút / Péceli út",
            "lat":47.483054,
            "lon":19.273283
        },
        {
            "id":"066713",
            "name":"Szabadság sugárút / Péceli út",
            "lat":47.482666,
            "lon":19.274051
        },
        {
            "id":"066714",
            "name":"Nyitány utca",
            "lat":47.480827,
            "lon":19.275941
        },
        {
            "id":"066715",
            "name":"Nyitány utca",
            "lat":47.481115,
            "lon":19.27577
        },
        {
            "id":"066716",
            "name":"Öntöző utca",
            "lat":47.478754,
            "lon":19.278174
        },
        {
            "id":"066717",
            "name":"Öntöző utca",
            "lat":47.478826,
            "lon":19.278267
        },
        {
            "id":"066718",
            "name":"Pestvidéki utca",
            "lat":47.47696,
            "lon":19.280223
        },
        {
            "id":"066719",
            "name":"Pestvidéki utca",
            "lat":47.477059,
            "lon":19.280276
        },
        {
            "id":"066720",
            "name":"Derkovits tér",
            "lat":47.474921,
            "lon":19.283
        },
        {
            "id":"066722",
            "name":"Nyeremény utca",
            "lat":47.474416,
            "lon":19.283966
        },
        {
            "id":"066740",
            "name":"Grassalkovich út",
            "lat":47.390559,
            "lon":19.119041
        },
        {
            "id":"066826",
            "name":"Napfény utca",
            "lat":47.458509,
            "lon":19.11453
        },
        {
            "id":"066828",
            "name":"Árpád híd M",
            "lat":47.532728,
            "lon":19.066059
        },
        {
            "id":"066856",
            "name":"Pagony utca",
            "lat":47.49512,
            "lon":19.002813
        },
        {
            "id":"066969",
            "name":"Zimonyi utca",
            "lat":47.471997,
            "lon":19.300299
        },
        {
            "id":"067215",
            "name":"Kápolna utca",
            "lat":47.481869,
            "lon":19.131777
        },
        {
            "id":"067266",
            "name":"Kossuth Lajos tér M",
            "lat":47.505644,
            "lon":19.044573
        },
        {
            "id":"067589",
            "name":"Bem József tér",
            "lat":47.511741,
            "lon":19.038007
        },
        {
            "id":"067592",
            "name":"Batthyány tér M+H",
            "lat":47.506255,
            "lon":19.038432
        },
        {
            "id":"067610",
            "name":"Bem József tér",
            "lat":47.510824,
            "lon":19.038418
        },
        {
            "id":"067622",
            "name":"Csepel, Csillagtelep",
            "lat":47.409955,
            "lon":19.060354
        },
        {
            "id":"069388",
            "name":"Széll Kálmán tér M",
            "lat":47.506112,
            "lon":19.024642
        },
        {
            "id":"069391",
            "name":"Jósika utca",
            "lat":47.567967,
            "lon":19.104151
        },
        {
            "id":"069392",
            "name":"Dessewffy utca",
            "lat":47.566453,
            "lon":19.108079
        },
        {
            "id":"069398",
            "name":"Széll Kálmán tér M",
            "lat":47.508126,
            "lon":19.021221
        },
        {
            "id":"069403",
            "name":"Jahn Ferenc Kórház",
            "lat":47.423214,
            "lon":19.132014
        },
        {
            "id":"069428",
            "name":"Mátray utca",
            "lat":47.506068,
            "lon":19.028934
        },
        {
            "id":"069506",
            "name":"Királyhágó tér",
            "lat":47.495523,
            "lon":19.018453
        },
        {
            "id":"069659",
            "name":"Kőtörő utca",
            "lat":47.407327,
            "lon":18.991354
        },
        {
            "id":"069660",
            "name":"Görgey utca",
            "lat":47.408301,
            "lon":18.996772
        },
        {
            "id":"069661",
            "name":"Újpest-Központ M",
            "lat":47.560355,
            "lon":19.09055
        },
        {
            "id":"069663",
            "name":"Újpest-Központ M (Munkásotthon utca)",
            "lat":47.557764,
            "lon":19.08867
        },
        {
            "id":"069664",
            "name":"Káposztásmegyer, Mogyoródi-patak",
            "lat":47.598548,
            "lon":19.120749
        },
        {
            "id":"069708",
            "name":"Vécsey Károly utca",
            "lat":47.569606,
            "lon":19.100418
        },
        {
            "id":"070129",
            "name":"Káposztásmegyer, Mogyoródi-patak",
            "lat":47.598629,
            "lon":19.12027
        },
        {
            "id":"070139",
            "name":"Széll Kálmán tér M",
            "lat":47.507207,
            "lon":19.02572
        },
        {
            "id":"070140",
            "name":"Széll Kálmán tér M",
            "lat":47.507582,
            "lon":19.0263
        },
        {
            "id":"070144",
            "name":"Dembinszky utca",
            "lat":47.441761,
            "lon":19.16442
        },
        {
            "id":"070169",
            "name":"Margó Tivadar utca",
            "lat":47.446081,
            "lon":19.1696
        },
        {
            "id":"071005",
            "name":"Dukát utca",
            "lat":47.408343,
            "lon":18.990876
        },
        {
            "id":"071006",
            "name":"Thököly utca",
            "lat":47.406095,
            "lon":18.991832
        }
    ];

    var getStopsInBoundingBox = function (minLon, maxLon, minLat, maxLat) {
        var i, stopsInBox = [];
        for (i in stops) {
            if (minLon <= stops[i]['lon'] && maxLon >= stops[i]['lon']) {
                if (minLat <= stops[i]['lat'] && maxLat >= stops[i]['lat']) {
                    stopsInBox.push(stops[i]);
                }
            }
        }
        return stopsInBox;
    };

    return {
        getStopsInBoundingBox : getStopsInBoundingBox
    };
}
