declare module '*.vue' {
  import { ComponentOptions, DefineComponent, FunctionalComponent } from 'vue'
  const ComponentOptions:
    | FunctionalComponent
    | ComponentOptions
    | DefineComponent
  export default ComponentOptions
}
