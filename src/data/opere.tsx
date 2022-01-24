import {Opera} from "../mds_models/models";

export const opera: Opera = {
    id: '1',
    title: {
        textIT: 'Romeo e Giulietta',
        textEN: 'Romeo and Juliet'
    },
    composer: 'Vincenzo Bellini',
    detail1: {
        textIT: 'Opera in due atti',
        textEN: 'Two acts opera'
    },
    detail2: {
        textIT: 'Libretto di Felice Romani',
        textEN: 'Felice Romani\'s Libretto'
    },
    detail3: {
        textIT: 'Nuova produzione Mds',
        textEN: 'Mds New Production'
    },
    description: {
        textIT: `La tragedia di Romeo e Giulietta e del loro amore contrastato dalle famiglie ha ispirato innumerevoli versioni, dall’opera al cinema. Una delle più suggestive porta la firma di Vincenzo Bellini, il meno rappresentato dei compositori del belcanto. Alla Mds I Capuleti e i Montecchi torna in una nuova produzione diretta da Evelino Pidò che segna il debutto di Adrian Noble, per tredici anni direttore della Royal Shakespeare Company. Il cast schiera alcune delle voci belliniane di riferimento del nostro tempo.`,
        textEN: `Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers.`
    },
    duration: 150,
    cast: [
        {
            title: {
                textIT: 'Romeo',
                textEN: 'Romeo',
            },
            name: 'Vittorio Grigolo'
        },
        {
            title: {
                textIT: 'Giulietta',
                textEN: 'Juliet',
            },
            name: 'Diana Damrau'
        }
    ],
    entities: [
        {
            title: {
                textIT: 'Direttore',
                textEN: 'Director',
            },
            name: 'Lorenzo Viotti'
        },
        {
            title: {
                textIT: 'Scene',
                textEN: 'Scene',
            },
            name: 'Alessandro Zilotti'
        },        {
            title: {
                textIT: 'Costumi',
                textEN: 'Costums',
            },
            name: 'Yuri Cozzolino'
        },        {
            title: {
                textIT: 'Luci',
                textEN: 'Lights',
            },
            name: 'Mario Rossi'
        },        {
            title: {
                textIT: 'Coreografia',
                textEN: 'Choreography',
            },
            name: 'Claudia Verdi'
        },
    ],
    mainImg: 'https://static.teatroallascala.org/static/upload/syl/sylvia---martina-arduino-claudio-coviello---ph-brescia-e-amisano--teatro-alla-scala.jpg'
}