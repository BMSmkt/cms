import { list } from "@keystone-6/core"
import {
    text,
    relationship,
    password,
    timestamp,
    select,
    checkbox,
    image,
} from '@keystone-6/core/fields';

import { allowAll, denyAll, allOperations } from '@keystone-6/core/access';
import { permissions } from "./access";

export const DadoBasico = list({
    access: allowAll,
    fields: {
        telefone: text({ validation: { isRequired: true } }),
        logo: image({ storage: "my_local_images" })
    },
    isSingleton: true
})

export const MainBanner = list({
    // access: {
    //     operation: {
    //         ...allOperations(denyAll),
    //         query: () => true,
    //         update: () => true
    //     }
    // },
    access: allowAll,
    fields: {
        texto: text({ validation: { isRequired: true } }),
        link: text({ validation: { isRequired: true } })
    },
    isSingleton: true
})

export const MainHeader = list({
    // access: {
    //     operation: {
    //         ...allOperations(denyAll),
    //         query: () => true,
    //         update: () => true
    //     }
    // },
    access: allowAll,
    fields: {
        itens: relationship({ ref: "HeaderItem", many: true })
    },
    isSingleton: true
})

export const HeaderItem = list({
    access: allowAll,
    fields: {
        texto: text({ validation: { isRequired: true } }),
        link: text({  }),
        subItens: relationship({ ref: "HeaderSubItem", many: true })
    },
    // ui: {
    //     isHidden: true
    // }
})

export const HeaderSubItem = list({
    access: allowAll,
    fields: {
        texto: text({ validation: { isRequired: true } }),
        link: text({ validation: { isRequired: true } })
    },
    // ui: {
    //     isHidden: true
    // }
})

export const Footer = list({
    // access: {
    //     operation: {
    //         ...allOperations(denyAll),
    //         query: () => true,
    //         update: () => true
    //     }
    // },
    access: allowAll,
    fields: {
        texto: text()
    }
})

// export const Depoimentos = list({})

// export const LigueJames = list({})

// export const FraseComSelo = list({})

