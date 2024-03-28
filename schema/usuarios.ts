import { list } from "@keystone-6/core";
import {
    text,
    relationship,
    password,
    timestamp,
    select,
    checkbox,
} from '@keystone-6/core/fields';

import { allowAll, denyAll, allOperations } from '@keystone-6/core/access';
import { permissions } from "./access";

export const Usuario = list({
    access: {
        operation: {
            query: permissions.canManageUsers,
            create: permissions.canManageUsers,
            update: permissions.canManageUsers,
            delete: permissions.canManageUsers
        },
    },
    fields: {
        nome: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
        senha: password({ validation: { isRequired: true } }),
        cargo: relationship({ ref: "Cargo.usuarios" }),
        criadoEm: timestamp({
            // this sets the timestamp to Date.now() when the user is first created
            defaultValue: { kind: 'now' },
        }),
    }
})

export const Cargo = list({
    access: {
        operation: {
            query: permissions.canManageUsers,
            create: permissions.canManageRole,
            update: permissions.canManageRole,
            delete: permissions.canManageRole,
        },
        filter: {
            query: permissions.canManageUsers,
            update: permissions.canManageRole,
            delete: permissions.canManageRole,
        },
    },
    fields: {
        nome: text({ validation: { isRequired: true } }),
        admin: checkbox({
            defaultValue: false,
            access: {
                // create: ({ context, inputData }) => {
                    // verify if user is admin if they want to add another user as admin
                // }
            }
        }),
        podeAdministrarUsuarios: checkbox(),
        podeAdministrarConteudo: checkbox(),
        podeAdministrarDadosBasicos: checkbox(),
        usuarios: relationship({ ref: "Usuario.cargo", many: true })
    },
    ui: {
        isHidden: context => !permissions.canManageUsers(context)
    }
})