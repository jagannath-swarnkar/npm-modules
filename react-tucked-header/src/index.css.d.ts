declare namespace StylesCssNamespace {
    export interface IStylesCss {
      "headerIn": string;
      "headerOut": string;
      "tucked-header": string;
      tucked_header: string;
      tucked_header_in: string;
      tucked_header_out: string;
    }
  }
  
  declare const StylesCssModule: StylesCssNamespace.IStylesCss & {
    /* WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StylesCssNamespace.IStylesCss;
  };
  
  export = StylesCssModule;