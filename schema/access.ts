type SessionContext = {
    session?: {
        data: {
            nome: string;
            cargo: {
                admin: boolean,
                podeAdministrarUsuarios: boolean,
                podeAdministrarConteudo: boolean,
                podeAdministrarDadosBasicos: boolean
            };
        };
        itemId: string;
        listKey: string;
    };
};

type ItemContext = { item: any } & SessionContext;

export const isSignedIn = ({ session }: SessionContext) => {
    return !!session
}

export const permissions = {
    canManageUsers: ({ session }: SessionContext) => {
        return !!session?.data.cargo?.podeAdministrarUsuarios
    },
    canManageContent: ({ session }: SessionContext) => {
        return !!session?.data.cargo?.podeAdministrarConteudo
    },
    canManageRole: ({ session }: SessionContext) => {
        return !!session?.data.cargo?.admin
    },
    canManageBasicInfo: ({ session }: SessionContext) => {
        return !!session?.data.cargo?.podeAdministrarDadosBasicos
    }
}