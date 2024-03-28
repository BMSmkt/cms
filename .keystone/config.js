"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core6 = require("@keystone-6/core");

// schema/usuarios.ts
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");

// schema/access.ts
var permissions = {
  canManageUsers: ({ session: session2 }) => {
    return !!session2?.data.cargo?.podeAdministrarUsuarios;
  },
  canManageContent: ({ session: session2 }) => {
    return !!session2?.data.cargo?.podeAdministrarConteudo;
  },
  canManageRole: ({ session: session2 }) => {
    return !!session2?.data.cargo?.admin;
  },
  canManageBasicInfo: ({ session: session2 }) => {
    return !!session2?.data.cargo?.podeAdministrarDadosBasicos;
  }
};

// schema/usuarios.ts
var Usuario = (0, import_core.list)({
  access: {
    operation: {
      query: permissions.canManageUsers,
      create: permissions.canManageUsers,
      update: permissions.canManageUsers,
      delete: permissions.canManageUsers
    }
  },
  fields: {
    nome: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    senha: (0, import_fields.password)({ validation: { isRequired: true } }),
    cargo: (0, import_fields.relationship)({ ref: "Cargo.usuarios" }),
    criadoEm: (0, import_fields.timestamp)({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" }
    })
  }
});
var Cargo = (0, import_core.list)({
  access: {
    operation: {
      query: permissions.canManageUsers,
      create: permissions.canManageRole,
      update: permissions.canManageRole,
      delete: permissions.canManageRole
    },
    filter: {
      query: permissions.canManageUsers,
      update: permissions.canManageRole,
      delete: permissions.canManageRole
    }
  },
  fields: {
    nome: (0, import_fields.text)({ validation: { isRequired: true } }),
    admin: (0, import_fields.checkbox)({
      defaultValue: false,
      access: {
        // create: ({ context, inputData }) => {
        // verify if user is admin if they want to add another user as admin
        // }
      }
    }),
    podeAdministrarUsuarios: (0, import_fields.checkbox)(),
    podeAdministrarConteudo: (0, import_fields.checkbox)(),
    podeAdministrarDadosBasicos: (0, import_fields.checkbox)(),
    usuarios: (0, import_fields.relationship)({ ref: "Usuario.cargo", many: true })
  },
  ui: {
    isHidden: (context) => !permissions.canManageUsers(context)
  }
});

// schema/modulos.ts
var import_core2 = require("@keystone-6/core");
var import_fields2 = require("@keystone-6/core/fields");
var import_access2 = require("@keystone-6/core/access");
var DadoBasico = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    telefone: (0, import_fields2.text)({ validation: { isRequired: true } }),
    logo: (0, import_fields2.image)({ storage: "my_local_images" })
  },
  isSingleton: true
});
var MainBanner = (0, import_core2.list)({
  // access: {
  //     operation: {
  //         ...allOperations(denyAll),
  //         query: () => true,
  //         update: () => true
  //     }
  // },
  access: import_access2.allowAll,
  fields: {
    texto: (0, import_fields2.text)({ validation: { isRequired: true } }),
    link: (0, import_fields2.text)({ validation: { isRequired: true } })
  },
  isSingleton: true
});
var MainHeader = (0, import_core2.list)({
  // access: {
  //     operation: {
  //         ...allOperations(denyAll),
  //         query: () => true,
  //         update: () => true
  //     }
  // },
  access: import_access2.allowAll,
  fields: {
    itens: (0, import_fields2.relationship)({ ref: "HeaderItem", many: true })
  },
  isSingleton: true
});
var HeaderItem = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    texto: (0, import_fields2.text)({ validation: { isRequired: true } }),
    link: (0, import_fields2.text)({}),
    subItens: (0, import_fields2.relationship)({ ref: "HeaderSubItem", many: true })
  }
  // ui: {
  //     isHidden: true
  // }
});
var HeaderSubItem = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    texto: (0, import_fields2.text)({ validation: { isRequired: true } }),
    link: (0, import_fields2.text)({ validation: { isRequired: true } })
  }
  // ui: {
  //     isHidden: true
  // }
});
var Footer = (0, import_core2.list)({
  // access: {
  //     operation: {
  //         ...allOperations(denyAll),
  //         query: () => true,
  //         update: () => true
  //     }
  // },
  access: import_access2.allowAll,
  fields: {
    texto: (0, import_fields2.text)()
  }
});

// schema/paginas/index/pagina-inicial.ts
var import_core5 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields_document = require("@keystone-6/fields-document");

// schema/fields/content/component-blocks/carousel.tsx
var import_core3 = require("@keystone-ui/core");
var import_component_blocks = require("@keystone-6/fields-document/component-blocks");
var carousel = (0, import_component_blocks.component)({
  label: "Carrossel",
  preview: function Preview(props) {
    return /* @__PURE__ */ (0, import_core3.jsx)(import_component_blocks.NotEditable, null, /* @__PURE__ */ (0, import_core3.jsx)(
      "div",
      {
        css: {
          overflowY: "scroll",
          display: "flex",
          scrollSnapType: "y mandatory"
        }
      },
      props.fields.items.elements.map((item) => {
        return /* @__PURE__ */ (0, import_core3.jsx)(
          import_core3.Box,
          {
            key: item.key,
            margin: "xsmall",
            css: {
              minWidth: "61.8%",
              scrollSnapAlign: "center",
              scrollSnapStop: "always",
              margin: 4,
              padding: 8,
              boxSizing: "border-box",
              borderRadius: 6,
              background: "#eff3f6"
            }
          },
          /* @__PURE__ */ (0, import_core3.jsx)(
            "img",
            {
              role: "presentation",
              src: item.fields.imageSrc.value,
              css: {
                objectFit: "cover",
                objectPosition: "center center",
                height: 240,
                width: "100%",
                borderRadius: 4
              }
            }
          ),
          /* @__PURE__ */ (0, import_core3.jsx)(
            "h1",
            {
              css: {
                "&&": {
                  fontSize: "1.25rem",
                  lineHeight: "unset",
                  marginTop: 8
                }
              }
            },
            item.fields.title.value
          )
        );
      })
    ));
  },
  schema: {
    items: import_component_blocks.fields.array(
      import_component_blocks.fields.object({
        title: import_component_blocks.fields.text({ label: "Title" }),
        imageSrc: import_component_blocks.fields.url({
          label: "Image URL",
          defaultValue: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
        })
      })
    )
  }
});

// schema/fields/content/component-blocks/youtube-video.tsx
var import_core4 = require("@keystone-ui/core");
var import_component_blocks2 = require("@keystone-6/fields-document/component-blocks");
var youtubeVideo = (0, import_component_blocks2.component)({
  label: "YouTube Video",
  schema: {
    url: import_component_blocks2.fields.url({
      label: "URL V\xEDdeo do YouTube",
      defaultValue: ""
    }),
    altText: import_component_blocks2.fields.text({
      label: "Texto alternativo",
      defaultValue: "V\xEDdeo do youtube inserido na p\xE1gina"
    })
  },
  preview: function YouTubeVideo(props) {
    const url = props.fields.url.value;
    let embedId = "";
    const parsedUrl = (url || "").replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (parsedUrl[2] !== void 0) {
      const parsedId = parsedUrl[2].split(/[^0-9a-z_\-]/i);
      embedId = parsedId[0];
    } else {
      embedId = url;
    }
    return /* @__PURE__ */ (0, import_core4.jsx)(import_component_blocks2.NotEditable, null, /* @__PURE__ */ (0, import_core4.jsx)(
      "div",
      {
        css: {
          overflow: "hidden",
          paddingBottom: "56.25%",
          position: "relative",
          height: 0,
          " iframe": { left: 0, top: 0, height: "100%", width: "100%", position: "absolute" }
        }
      },
      /* @__PURE__ */ (0, import_core4.jsx)(
        "iframe",
        {
          width: "853",
          height: "480",
          src: `https://www.youtube.com/embed/${embedId}`,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          title: props.fields.altText.value
        }
      )
    ));
  }
});

// schema/paginas/index/component-blocks.tsx
var componentBlocks = {
  carousel,
  youtubeVideo
};

// schema/paginas/index/pagina-inicial.ts
var PaginaInicial = (0, import_core5.list)({
  access: import_access3.allowAll,
  fields: {
    conteudo: (0, import_fields_document.document)({
      formatting: {
        inlineMarks: {
          bold: true,
          italic: true
        },
        alignment: {
          center: true,
          end: true
        },
        headingLevels: [1, 2, 3, 4, 5, 6],
        softBreaks: true
      },
      componentBlocks,
      ui: {
        views: "./schema/paginas/index/component-blocks"
      }
    })
  },
  ui: {
    label: "P\xE1gina Inicial",
    isHidden: !permissions.canManageContent
  }
});

// schema.ts
var lists = {
  MainBanner,
  MainHeader,
  HeaderItem,
  HeaderSubItem,
  Usuario,
  Cargo,
  DadoBasico,
  PaginaInicial
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "Usuario",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: `id nome cargo {
              admin,
              podeAdministrarUsuarios,
              podeAdministrarConteudo,
              podeAdministrarDadosBasicos
          }`,
  secretField: "senha",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["nome", "email", "senha"],
    itemData: {
      cargo: {
        create: {
          nome: "Admin",
          admin: true,
          podeAdministrarUsuarios: true,
          podeAdministrarConteudo: true,
          podeAdministrarDadosBasicos: true
        }
      }
    }
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core6.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    storage: {
      my_local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `http://localhost:3000/images${path}`,
        serverRoute: {
          path: "/images"
        },
        storagePath: "public/images"
      }
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
