// @ts-ignore
const files = require.context('.', false, /\.ts$/)
let modules: any = {}

files.keys().forEach((key: string) => {
  if (key === './index.ts') return
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

export default modules
