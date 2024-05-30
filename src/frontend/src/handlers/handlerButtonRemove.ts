import Postman from '@ObjectDevelopment/requests';
import relevantButton from '@relevant/relevantButton';
import { APP_TABLE_URL } from '@Service/env';
const handlerClickRemove = async (e: React.MouseEvent): Promise<boolean> => {
  e.preventDefault();
  const target = e.target as HTMLElement;
  const truefalseFirst = relevantButton(target, 'remove', 'BUTTON');
  if (!truefalseFirst) {
    return false;
  }

  const currentTarget = e.currentTarget;
  const truefalseSecond = relevantButton(currentTarget as HTMLElement, 'ind', 'TR');
  if (!truefalseSecond) {
    return false;
  }

  const ind = (currentTarget as HTMLTableRowElement).dataset.ind;
  const url = new URL(APP_TABLE_URL + '/api/v1/remove/');
  url.searchParams.set('id', ind as string);
  const result = new Postman(url);
  await result.delete();
  const ev = new Event('update');
  currentTarget.dispatchEvent(ev);
  return true;

};
export default handlerClickRemove;
