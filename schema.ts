import { list } from '@keystone-6/core';
import { allowAll, denyAll, allOperations } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';
import { Usuario, Cargo } from './schema/usuarios';
import { MainBanner, MainHeader, HeaderItem, HeaderSubItem, DadoBasico } from './schema/modulos';
import { PaginaInicial } from './schema/paginas/index/pagina-inicial';

export const lists: Lists = {
  MainBanner, MainHeader, HeaderItem, HeaderSubItem, Usuario, Cargo, DadoBasico, PaginaInicial
};
