const colors = {
    transparent: 'transparent',
    current:     'currentColor',
    black:       '#121417',
    white:       '#FFFFFF',

    semantic: {
        active:    '#0077FF',
        activeD:   '#4A85FF',
        positive:  '#00D422',
        positiveD: '#49DA44',
        notice:    '#FFB800',
        noticeD:   '#FFC038',
        negative:  '#FF001A',
        negativeD: '#FF4332'
    },

    whiteAlpha: {
        50:  'rgba(255, 255, 255, 0.04)',
        100: 'rgba(255, 255, 255, 0.06)',
        200: 'rgba(255, 255, 255, 0.08)',
        300: 'rgba(255, 255, 255, 0.16)',
        400: 'rgba(255, 255, 255, 0.24)',
        500: 'rgba(255, 255, 255, 0.36)',
        600: 'rgba(255, 255, 255, 0.48)',
        700: 'rgba(255, 255, 255, 0.64)',
        800: 'rgba(255, 255, 255, 0.80)',
        900: 'rgba(255, 255, 255, 0.92)',
    },

    blackAlpha: {
        50:  'rgba(18, 20, 23, 0.04)',
        100: 'rgba(18, 20, 23, 0.06)',
        200: 'rgba(18, 20, 23, 0.08)',
        300: 'rgba(18, 20, 23, 0.16)',
        400: 'rgba(18, 20, 23, 0.24)',
        500: 'rgba(18, 20, 23, 0.36)',
        600: 'rgba(18, 20, 23, 0.48)',
        700: 'rgba(18, 20, 23, 0.64)',
        800: 'rgba(18, 20, 23, 0.80)',
        900: 'rgba(18, 20, 23, 0.92)',
    },

    gling: {
        50:  '#E0F7FA',
        100: '#B2EBF2',
        200: '#80DEEA',
        300: '#4DCFE1',
        500: '#00BCD4',
        600: '#00ABC1',
        700: '#0096A7',
        800: '#00828F',
        900: '#005F64',
    },

    glingD: {
        50:  '#005F64',
        100: '#00828F',
        200: '#0096A7',
        300: '#00ABC1',
        400: '#00BCD4',
        500: '#26C5DA',
        600: '#4DCFE1',
        700: '#80DEEA',
        800: '#B2EBF2',
        900: '#E0F7FA',
    },

    gray: {
        50:  '#F8F9FA',
        100: '#F1F3F5',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#868E96',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
    },

    red: {
        50:  '#FFECEF',
        100: '#FFCED4',
        200: '#F99C9D',
        300: '#F37476',
        400: '#FF5252',
        500: '#FF3E36',
        600: '#F73536',
        700: '#E42930',
        800: '#D72028',
        900: '#C8111C',
    },

    pink: {
        50:  '#FFF0F6',
        100: '#FFDEEB',
        200: '#FCC2D7',
        300: '#FAA2C1',
        400: '#F783AC',
        500: '#F06595',
        600: '#E64980',
        700: '#D6336C',
        800: '#C2255C',
        900: '#A61E4D',
    },

    orange: {
        50:  '#FFF4E6',
        100: '#FFE8CC',
        200: '#FFD8A8',
        300: '#FFC078',
        400: '#FFA94D',
        500: '#FF922B',
        600: '#FD7E14',
        700: '#F76707',
        800: '#E8590C',
        900: '#D9480F',
    },

    yellow: {
        50:  '#FFF9DB',
        100: '#FFF3BF',
        200: '#FFEC99',
        300: '#FFE066',
        400: '#FFD43B',
        500: '#FCC419',
        600: '#FAB005',
        700: '#F59F00',
        800: '#F08C00',
        900: '#E67700',
    },

    lime: {
        50:  '#F4FCE3',
        100: '#E9FAC8',
        200: '#D8F5A2',
        300: '#C0EB75',
        400: '#A9E34B',
        500: '#94D82D',
        600: '#82C91E',
        700: '#74B816',
        800: '#66A80F',
        900: '#5C940D',
    },

    green: {
        50:  '#EBFBEE',
        100: '#D3F9D8',
        200: '#B2F2BB',
        300: '#8CE99A',
        400: '#69DB7C',
        500: '#51CF66',
        600: '#40C057',
        700: '#37B24D',
        800: '#2F9E44',
        900: '#2B8A3E',
    },

    teal: {
        50:  '#E6FCF5',
        100: '#C3FAE8',
        200: '#96F2D7',
        300: '#63E6BE',
        400: '#38D9A9',
        500: '#20C997',
        600: '#12B886',
        700: '#0CA678',
        800: '#099268',
        900: '#087F5B',
    },

    cyan: {
        50:  '#E3FAFC',
        100: '#C5F6FA',
        200: '#99E9F2',
        300: '#66D9E8',
        400: '#3BC9DB',
        500: '#22B8CF',
        600: '#15AABF',
        700: '#1098AD',
        800: '#0C8599',
        900: '#0B7285',
    },

    blue: {
        50:  '#E7F5FF',
        100: '#D0EBFF',
        200: '#A5D8FF',
        300: '#74C0FC',
        400: '#4DABF7',
        500: '#339AF0',
        600: '#228BE6',
        700: '#1C7ED6',
        800: '#1971C2',
        900: '#1864AB',
    },

    indigo: {
        50:  '#EDF2FF',
        100: '#DBE4FF',
        200: '#BAC8FF',
        300: '#91A7FF',
        400: '#748FFC',
        500: '#5C7CFA',
        600: '#4C6EF5',
        700: '#4263EB',
        800: '#3B5BDB',
        900: '#364FC7',
    },

    violet: {
        50:  '#F3F0FF',
        100: '#E5DBFF',
        200: '#D0BFFF',
        300: '#B197FC',
        400: '#9775FA',
        500: '#845EF7',
        600: '#7950F2',
        700: '#7048E8',
        800: '#6741D9',
        900: '#5F3DC4',
    },

    grape: {
        50:  '#F8F0FC',
        100: '#F3D9FA',
        200: '#EEBEFA',
        300: '#E599F7',
        400: '#DA77F2',
        500: '#CC5DE8',
        600: '#BE4BDB',
        700: '#AE3EC9',
        800: '#9C36B5',
        900: '#862E9C',
    },

}

export default colors
