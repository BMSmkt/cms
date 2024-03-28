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
import { permissions } from "../../access";
import { document } from "@keystone-6/fields-document";
import { componentBlocks } from "./component-blocks";

export const PaginaInicial = list({
    access: allowAll,
    fields: {
        conteudo: document({
            formatting: {
              inlineMarks: {
                bold: true,
                italic: true,
              },
              alignment: {
                center: true,
                end: true,
              },
              headingLevels: [1, 2, 3, 4, 5, 6],
              softBreaks: true,
            },
            componentBlocks: componentBlocks,
            ui: {
                views: "./schema/paginas/index/component-blocks"
            }
          }),
    },
    ui: {
        label: "Página Inicial",
        isHidden: !permissions.canManageContent
    },
})