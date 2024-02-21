import type { Schema, Attribute } from '@strapi/strapi';

export interface CarrosselCarrosselAnimacaoImagens extends Schema.Component {
  collectionName: 'components_reutilizaveis_carrossel_animacao_imagens';
  info: {
    displayName: 'Imagens anima\u00E7\u00E3o';
    description: '';
  };
  attributes: {
    imagens: Attribute.Media;
  };
}

export interface CarrosselCarrossel extends Schema.Component {
  collectionName: 'components_reutilizaveis_carrossels';
  info: {
    displayName: 'Container';
    description: '';
  };
  attributes: {
    carrossel_animacao: Attribute.Component<
      'carrossel.carrossel-animacao-imagens',
      true
    >;
    carrossel_texto: Attribute.Component<'carrossel.texto', true>;
  };
}

export interface CarrosselTexto extends Schema.Component {
  collectionName: 'components_carrossel_textos';
  info: {
    displayName: 'Texto';
  };
  attributes: {
    texto: Attribute.String;
  };
}

export interface DepoimentosContainer extends Schema.Component {
  collectionName: 'components_depoimentos_containers';
  info: {
    displayName: 'Container';
  };
  attributes: {
    titulo_da_area: Attribute.String;
    depoimento: Attribute.Component<'depoimentos.depoimento', true>;
  };
}

export interface DepoimentosDepoimento extends Schema.Component {
  collectionName: 'components_depoimentos_depoimentos';
  info: {
    displayName: 'Depoimento';
  };
  attributes: {
    Conteudo: Attribute.Text;
    Identificacao: Attribute.String;
    logo_empresa: Attribute.Media;
  };
}

export interface EbooksContainer extends Schema.Component {
  collectionName: 'components_ebooks_containers';
  info: {
    displayName: 'Container';
  };
  attributes: {
    Livro: Attribute.Component<'ebooks.livro', true>;
    Titulo_da_area: Attribute.String;
  };
}

export interface EbooksLivro extends Schema.Component {
  collectionName: 'components_ebooks_livros';
  info: {
    displayName: 'Livro';
  };
  attributes: {
    Nome: Attribute.String;
    Hubspot_Form_Id: Attribute.String;
  };
}

export interface GeraisBotao extends Schema.Component {
  collectionName: 'components_gerais_botaos';
  info: {
    displayName: 'Bot\u00E3o';
    description: '';
  };
  attributes: {
    Texto: Attribute.String;
  };
}

export interface GeraisCallToAction extends Schema.Component {
  collectionName: 'components_gerais_call_to_actions';
  info: {
    displayName: 'Call to Action';
  };
  attributes: {
    botao: Attribute.Component<'gerais.botao', true>;
  };
}

export interface GeraisSeloComTexto extends Schema.Component {
  collectionName: 'components_gerais_selo_com_textos';
  info: {
    displayName: 'Selo com texto';
  };
  attributes: {
    Texto: Attribute.String;
    Selo: Attribute.Media;
  };
}

export interface HeaderDropdownMenuItem extends Schema.Component {
  collectionName: 'components_header_dropdown_menu_items';
  info: {
    displayName: 'Dropdown Menu Item';
  };
  attributes: {
    item_label: Attribute.String;
    item_link: Attribute.String;
  };
}

export interface HeaderDropdownMenu extends Schema.Component {
  collectionName: 'components_header_dropdown_menus';
  info: {
    displayName: 'Dropdown Menu';
    description: '';
  };
  attributes: {
    dropdown_label: Attribute.String;
    dropdown_item: Attribute.Component<'header.menu-item', true>;
  };
}

export interface HeaderMenuItem extends Schema.Component {
  collectionName: 'components_header_menu_items';
  info: {
    displayName: 'Menu Item';
  };
  attributes: {
    item_label: Attribute.String;
    item_link: Attribute.String;
  };
}

export interface ServicosContainer extends Schema.Component {
  collectionName: 'components_servicos_containers';
  info: {
    displayName: 'Container';
    description: '';
  };
  attributes: {
    servico: Attribute.Component<'servicos.servico', true>;
    titulo_da_area: Attribute.String;
  };
}

export interface ServicosServico extends Schema.Component {
  collectionName: 'components_servicos_servicos';
  info: {
    displayName: 'Servi\u00E7o';
    description: '';
  };
  attributes: {
    Nome: Attribute.String;
    icone: Attribute.Media;
    Descricao: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carrossel.carrossel-animacao-imagens': CarrosselCarrosselAnimacaoImagens;
      'carrossel.carrossel': CarrosselCarrossel;
      'carrossel.texto': CarrosselTexto;
      'depoimentos.container': DepoimentosContainer;
      'depoimentos.depoimento': DepoimentosDepoimento;
      'ebooks.container': EbooksContainer;
      'ebooks.livro': EbooksLivro;
      'gerais.botao': GeraisBotao;
      'gerais.call-to-action': GeraisCallToAction;
      'gerais.selo-com-texto': GeraisSeloComTexto;
      'header.dropdown-menu-item': HeaderDropdownMenuItem;
      'header.dropdown-menu': HeaderDropdownMenu;
      'header.menu-item': HeaderMenuItem;
      'servicos.container': ServicosContainer;
      'servicos.servico': ServicosServico;
    }
  }
}
