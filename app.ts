
type Vajina = {
    renk: 'Pembe' | 'Kara' | 'Beyaz' | string;
    aciklik: string;
}
type Cinsel = {
    meme?: string;
    popo?: string;
    vajina?: Vajina;
    sex?: chooseSexPos;
}

type chooseSexPos = {
    s8?: 'çok iyi' | 'iyi' | 'ortalama' | 'kötü';
    sexting?: 'çok iyi' | 'iyi' | 'ortalama' | 'kötü';
    nude?: string | string[] ;
    nudeTuru?: 'meme'| 'vajina'| 'popo';
    sexTuru?: 'ileri s2ş'| 's2ş'| 'sevişme' | 'ön sevişme' | 'yiyişme';
    gerekliAciklama?: string;
    puan?: number;
}
interface body {
    boy?: number;
    kilo?: number;
    fizik?: string;
    sac?: string;
    cinsel?: Cinsel;
}

interface darling extends body {
    firstName?: string;
    lastName?: string;
    age?: number;
    date?: string;
    social_media?: string;
    phone?: string;
    other?: string;
}

let darl1 : darling;

darl1 = {
    firstName: "Y. M.",
    lastName: "?",
    age: 20,

    cinsel: {
        vajina: {
            aciklik: '300px',
            renk: "Kara"

        },
        sex:{
            gerekliAciklama: "?",
            sexTuru: "ön sevişme",
            sexting: "ortalama",
            s8: "ortalama",
            nudeTuru: "vajina",
            nude: ['1.jpg', '2.jpg', '3.jpg'],
            puan: 10,
        }
    },

    
    
}

console.log(darl1)