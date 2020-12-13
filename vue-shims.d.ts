declare module '*.vue' {
  import { ComponentOptions, FunctionalComponent } from 'vue'
  const ComponentOptions: FunctionalComponent|ComponentOptions
  export default ComponentOptions
}
