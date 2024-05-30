/**
 *
 * @param target of the `event.target`.
 * @param datasetname ofthe  `(event.target as HTMLButtonElement).dataset.name`
 * @param tagname of the `event.target.tagName`
 * @returns boolean
 */
export default function relevantButton(target: HTMLElement | undefined, datasetname: string | boolean = false, tagname: string): boolean {
  if (target === null || target === undefined) {
    return false;
  }

  if (!((target as HTMLButtonElement).tagName).includes(tagname)) {
    return false;
  }

  // Check if the button has no dataset attribute or dataset attribute includes 'data'
  // if ((target as HTMLButtonElement).dataset.name === undefined) {
  //   return false;
  // }

  if ((datasetname !== false) &&
    (((target as HTMLButtonElement).dataset.name !== undefined) &&
      (!((target as HTMLButtonElement).dataset.name as string).includes(datasetname)))) {
    return false;
  }
  return true;
}
