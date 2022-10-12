import { withRouter } from './with-router'

export const withProviders = composeHoc(withRouter)

function composeHoc<T>(...fns: ((node: T) => T)[]) {
  return (node: T) => {
    return fns.reduceRight((acc, next) => {
      acc = next(acc)
      return acc
    }, node)
  }
}
