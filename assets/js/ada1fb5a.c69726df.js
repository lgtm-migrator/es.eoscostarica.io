"use strict";
(self["webpackChunkes_eoscostarica_io"] = self["webpackChunkes_eoscostarica_io"] || []).push([[6640],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 6193:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={slug:'proyectos-open-source',title:'¿Por qué involucrarse en proyectos open source?',image:'/img/blog/open-source/open-source-cover.jpg',author:'Luis Diego Rojas',author_title:'Content Strategist',author_url:'https://twitter.com/ldrojas',author_image_url:'https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4',tags:['eosio','blockchain'],metaTitle:'EOS Costa Rica Blog: ¿Por qué involucrarse en proyectos open source?',metaDescription:'Involucrarse en un proyecto open source podría traerle varios beneficios, a pesar de no siempre representar un ingreso económico inmediato. Lea más aquí.',langPost:'https://eoscostarica.io/blog/open-source'};var contentTitle=undefined;var metadata={"permalink":"/blog/proyectos-open-source","editUrl":"https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/blog/2020-12-10-proyectos-open-source.md","source":"@site/blog/2020-12-10-proyectos-open-source.md","title":"¿Por qué involucrarse en proyectos open source?","description":"Poryectos open-source","date":"2020-12-10T00:00:00.000Z","formattedDate":"December 10, 2020","tags":[{"label":"eosio","permalink":"/blog/tags/eosio"},{"label":"blockchain","permalink":"/blog/tags/blockchain"}],"readingTime":4.35,"truncated":true,"authors":[{"name":"Luis Diego Rojas","title":"Content Strategist","url":"https://twitter.com/ldrojas","imageURL":"https://avatars0.githubusercontent.com/u/29232417?s=400&u=032f18555bd97e3d90f3ddfb5b2dc72dfcf0d11b&v=4"}],"prevItem":{"title":"InmuTrust: EOSIO Blockchain para la distribución de vacunas","permalink":"/blog/inmutrust-anuncio"},"nextItem":{"title":"¿Por qué implementar blockchain en el sector agrícola?","permalink":"/blog/blockchain-en-el-sector-agricola"}};var assets={"authorsImageUrls":[undefined]};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'<strong>¿Qué es open-source?</strong>',id:'qué-es-open-source',children:[],level:2},{value:'<strong>Involúcrese en nuestro proyecto open-source</strong>',id:'involúcrese-en-nuestro-proyecto-open-source',children:[],level:2},{value:'<strong>¿Por qué es importante calificar Block Producers de EOSIO?</strong>',id:'por-qué-es-importante-calificar-block-producers-de-eosio',children:[],level:2},{value:'<strong>Contáctenos para aprender más sobre blockchain.</strong>',id:'contáctenos-para-aprender-más-sobre-blockchain',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Poryectos open-source",src:(__webpack_require__(71076)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"qué-es-open-source"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"\xBFQu\xE9 es open-source?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Involucrarse en un proyecto open source podr\xEDa traerle varios beneficios, a pesar de no siempre representar un ingreso econ\xF3mico inmediato. Un proyecto open source o \u201Cde c\xF3digo abierto\u201D es creado por la comunidad y para la comunidad, lo que quiere decir que existe permiso para usar el c\xF3digo fuente, documentos de dise\xF1o y el contenido en el producto."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El rango de talento que puede involucrarse en proyectos open source es muy variado, incluyendo desarrolladores de software, dise\xF1adores de experiencia y visuales, profesionales en comunicaci\xF3n y otros. Son varias las razones por las cuales la gente elige unirse a un proyecto open source, entre las cuales destacan:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"1. Quiero apoyar un proyecto en el que creo:")," Para muchas personas, el simple hecho de apoyar una causa les es suficiente para involucrarse en un proyecto open source. Esto puede ser por motivaciones altru\xEDsticas o incluso porque quieren devolver a una comunidad que les ayud\xF3 en alg\xFAn momento."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"2. Quiero hacer networking:")," Involucarse en un proyecto open source es ingresar a una comunidad de profesionales en varios campos. Esta puede ser una fuente invaluable de \u201Cnetworking\u201D o interconexi\xF3n con la comunidad. Mantener una red activa de personas podr\xEDa llegar incluso a convertirse en nuevas oportunidades de negocio en un futuro."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"3. Quiero hacer networking:")," Involucarse en un proyecto open source es ingresar a una comunidad de profesionales en varios campos. Esta puede ser una fuente invaluable de \u201Cnetworking\u201D o interconexi\xF3n con la comunidad. Mantener una red activa de personas podr\xEDa llegar incluso a convertirse en nuevas oportunidades de negocio en un futuro."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"4. Quiero participar en algo relevante:")," Ser parte del lanzamiento de un proyecto open source puede ser satisfactorio y una buena forma de involucrarse con una comunidad con intereses similares a los suyos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"5. Quiero participar en algo relevante:")," Ser parte del lanzamiento de un proyecto open source puede ser satisfactorio y una buena forma de involucrarse con una comunidad con intereses similares a los suyos."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"6. Busco recompensas externas:")," En muchas ocasiones, quienes contribuyen en proyectos open source buscan otro tipo de recompensas en lugar de percibir remuneraci\xF3n directa. Por ejemplo, cuando requieren alg\xFAn software o herramienta espec\xEDfica a la que podr\xEDan tener acceso dentro de la comunidad o la posibilidad de recibir alg\xFAn retorno en el futuro. La idea es jugar bien las cartas."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"7."),"  Finalmente, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\xA1contribuir a proyectos open source es divertido!")," Para las personas que les gusta escribir c\xF3digo, esta podr\xEDa ser una oportunidad de pasar el rato. Adem\xE1s, existen comunidades open source que invitan a sus colaboradores a participar de eventos o iniciativas grupales."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"involúcrese-en-nuestro-proyecto-open-source"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Invol\xFAcrese en nuestro proyecto open-source")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Actualmente tenemos abierto un proyecto open source en el \xE1rea de blockchain en nuestro Github. EOS Rate es una aplicaci\xF3n descentralizada que permitir\xE1 a los tenedores de tokens EOS calificar a los Block Producers de manera sencilla. La finalidad de estas calificaciones o \u201Cratings\u201D es ayudar a mantener transparencia y confianza en la red de EOSIO. \xC9chele un vistazo a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/eoscostarica/eos-rate/projects/1"},"nuestro Github aqu\xED.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Si ha estado interesado en querer involucrarse en un proyecto relacionado a la tecnolog\xEDa blockchain, esta podr\xEDa ser una oportunidad. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3"},"Lea sobre blockchain aqu\xED.")," Actualmente, estamos buscando desarrolladores que manejen lenguajes como Javascript y C++ para la programaci\xF3n de ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/qu%C3%A9-es-un-smart-contract-793d2042c65d"},"smart contracts.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Aprenda c\xF3mo ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/c%C3%B3mo-crear-un-hello-world-contract-en-eos-73f3e787c23f"},"programar su primer smart contract aqu\xED"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"El ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://medium.com/@eoscostarica/que-es-eosio-178e21ac2ebb"},"protocolo de EOSIO")," naci\xF3 de una tercera generaci\xF3n de la tecnolog\xEDa blockchain luego de un \u201Cwhite paper\u201D publicado por la empresa Block.one. EOSIO es una infraestructura de blockchain descentralizada que emula los atributos de un hardware de computadora, incluyendo CPUs, RAM y almacenamiento. Esto quiere decir que la plataforma puede ser personalizada para varios usos, incluyendo negocios privados y sector p\xFAblico, liderando el procesamiento de aplicaciones de manera r\xE1pida y segura."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Block.one ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.coindesk.com/information/what-is-eos"},"complet\xF3 una oferta inicial de moneda")," o ICO por sus siglas en ingl\xE9s (\u201Cinitial coin offering\u201D) en junio de 2018, levantando m\xE1s de 4 billones de d\xF3lares (US$4b) con la venta de un bill\xF3n de tokens. Esto es muestra del potencial de la red para generar gran impacto y disrupci\xF3n en el ambiente de blockchain."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"por-qué-es-importante-calificar-block-producers-de-eosio"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"\xBFPor qu\xE9 es importante calificar Block Producers de EOSIO?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Una particularidad del protocolo EOSIO es su mecanismo de consenso conocido como \u201CDelegated Proof of Stake\u201D (DPoS). Este requiere la elecci\xF3n de 21 nodos que ser\xE1n los Block Producers\u201D o productores de bloques. Estos Block Producers fungen como ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eos.io/faq/what-are-block-producers/"},"custodios de la red de EOSIO al validar y verificar las transacciones")," y son elegidos mediante votaciones entre los tenedores de tokens EOS."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Consideramos importante que se pueda calificar estos Block Producers y los candidatos para medir si el sentimiento de la comunidad se ve reflejado en los resultados de los votos, con el fin de mantener transparencia en c\xF3mo se maneja la red."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"contáctenos-para-aprender-más-sobre-blockchain"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h2"},"Cont\xE1ctenos para aprender m\xE1s sobre blockchain.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"EOS Costa Rica")," opera desde 2018. Nuestro equipo desarrolla soluciones basadas en blockchain con gran atenci\xF3n al detalle para crear aplicaciones centradas en el usuario para uso empresarial. Adem\xE1s, ofrecemos recursos a la infraestructura EOSIO y promovemos el ecosistema EOSIO local. Conversemos sobre c\xF3mo usted puede implementar esta tecnolog\xEDa en su negocio agr\xEDcola. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://eoscostarica.io/"},"Cont\xE1ctenos")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\xA0S\xEDganos en redes sociales:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://eoscostarica.io"},"Website")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://twitter.com/eoscostarica"},"Twitter")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://t.me/eoscr"},"Telegram")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.facebook.com/costaricaeos/"},"Facebook")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.linkedin.com/company/eoscostarica/"},"LinkedIn")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@eoscostarica"},"Medium"))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 71076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/open-source-cover-4e47c5990f162104b9e336cfa274d4d0.jpg");

/***/ })

}]);