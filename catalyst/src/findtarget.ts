const createSelector = (receiver: Element, key: string) => `[data-target*="${receiver.tagName.toLowerCase()}.${key}"]`

/**
 * findTarget will run `querySelectorAll` against the given controller,
 * returning any the first child that:
 *
 *  - Matches the selector of `[data-target*="tag.name"]` where tag is the
 *  tagName of the given HTMLElement, and `name` is the given `name` argument.
 *
 *  - Closest ascendant of the element, that matches the tagname of the
 *  controller, is the specific instance of the controller itself - in other
 *  words it is not nested in other controllers of the same type.
 *
 */
export function findTarget(controller: HTMLElement, name: string) {
  const tag = controller.tagName.toLowerCase()
  for (const el of controller.querySelectorAll(`[data-target*="${tag}.${name}"]`)) {
    if (el.closest(tag) === controller) return el
  }
}

export function findTargets(controller: HTMLElement, name: string) {
  const tag = controller.tagName.toLowerCase()
  const targets = []
  for (const el of controller.querySelectorAll(`[data-target*="${tag}.${name}"]`)) {
    if (el.closest(tag) === controller) targets.push(el)
  }
  return targets
}
