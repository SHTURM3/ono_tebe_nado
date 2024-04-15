module.exports = {
  rules: {
    'color-no-invalid-hex': true, // нельзя использовать шестнадцатеричный формат цвета
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }], // css св-ва пишутся в нижнем регистре, а св-ва для cvg в camelCase
    'property-no-unknown': true, // можно использовать только изестные css св-ва, определенные спецификацией
    'declaration-block-no-duplicate-properties': true, // нельзя использовать повторяющиеся css св-ва в одном элементе
    'declaration-block-no-shorthand-property-overrides': true, // нельзя использовать сокращенные св-ва css, которые переопределяют связанные свойства (если есть padding-left: 20px;, то нельзя следом определить padding: 20px;, т.к. послденее переопределит первое)
    'media-feature-name-no-unknown': true, // можно использовать имена функций мультимедиа, которые определенны в спецификациях CSS, вплоть до черновиков редактора, как известные
    'comment-no-empty': true, // нельзя плодить пустые комментарии
    'no-descending-specificity': true, // нельзя b a{} определьть раньше чем a{}
    'no-duplicate-selectors': true, // нельзя дублировать селекторы
    'no-invalid-position-at-import-rule': true, // нельзя прописывать @import после других стилей
    'alpha-value-notation': 'number', // нельзя - a { opacity: 50% }, можно - a { opacity: 0.5 }
    'color-function-notation': 'modern', // нельзя - a { color: rgba(12, 122, 231, 0.2) }, можно - a { color: rgb(12 122 231 / 0.2) }
    'color-hex-length': 'short', // нельзя - a { color: #ffffff; }, можно - a { color: #fff; }
    'length-zero-no-unit': true, // нельзя - a { top: 0px }, можно - a { top: 0 }
    'font-family-name-quotes': 'always-where-required', // нельзя - a { font-family: Arial, sans-serif; }, можно - a { font-family: 'Arial', sans-serif; }
    'function-url-quotes': 'never', // нельзя - @import url(foo.css), можно - @import url("foo.css")
    'import-notation': 'url', // нельзя - @import url(foo.css), можно - @import "foo.css"
    'shorthand-property-no-redundant-values': true, // нельзя - a { margin: 1px 1px 1px 1px; }, можно - a { margin: 1px 1px 1px 2px; }
    'declaration-no-important': true, // нельзя - a { color: pink !important; }, можно - a { color: pink; }
    'declaration-block-single-line-max-declarations': 1,
    /* 
      нельзя - a,b { color: pink; top: 3px; }, 
      можно - 
      a {
        color: pink;
        top: 3px;
        }
      */
    'no-unknown-animations': true,
    /* 
      нельзя - a { animation-name: fancy-slide; }, 
      можно - a { animation-name: fancy-slide; } @keyframes fancy-slide {}
      */
    'selector-type-case': 'lower', // нельзя - LI {}, можно - li {}
    'rule-empty-line-before': 'always',
    /* 
      нельзя - 
        a {} b {} 
        или
        a {}
        b {}, 
      можно -
        a {}

        b {} 
      */
    'at-rule-empty-line-before': 'always',
    /* 
      нельзя - 
        a {} @media {}
        или
        a {}
        @media {}
      , 
      можно - 
        a {}
        
        @media {}
      */
    'selector-class-pattern': null, // конфигурация предназначена для того, чтобы помочь людям писать CSS, который выглядит так, как вы найдете в примерах спецификаций. На данный момент он отключен, потому что будет только мешать
    'font-family-name-quotes': 'always-where-recommended', // в спецификации always-where-recommended использовать кавычки с «названиями семейств шрифтов, содержащими пробелы, цифры или знаки препинания, отличные от дефисов
  },
};
