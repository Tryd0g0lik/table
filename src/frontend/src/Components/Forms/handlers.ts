import { F, RequestHeaders } from '@Interfaces';
import relevantForm from '@relevant/relevantForm';
import Postman from '@ObjectDevelopment/requests';

const APP_TABLE_URL = ((typeof process.env.APP_TABLE_URL).includes('string')) ? process.env.APP_TABLE_URL : '';
const APP_TABLE_PATHNAME = ((typeof process.env.APP_TABLE_PATHNAME).includes('string')) ? process.env.APP_TABLE_PATHNAME : '';

const datas: F = {
  name: '',
  job: '',
  company: '',
  location: '',
  lastlogin: ''
};
const keysArr = Array.from(Object.keys(datas));

// relevantForm
export default async function handlerButtonCick(e: MouseEvent): Promise<boolean> {
  e.preventDefault();
  const relatedTarget = e.relatedTarget as HTMLElement;
  const inputAll = relatedTarget.querySelectorAll('input');
  if ((inputAll.length === null)) {
    return false;
  }

  for (let i = 0; i < keysArr.length; i++) {
    if (inputAll[i].getAttribute(keysArr[i]) !== null) {
      datas.keysArr[i] = inputAll[i].getAttribute(keysArr[i]);
    }
  }
  const valeuArr = Array.from(Object.values(datas));
  const truefalse = relevantForm(valeuArr);
  if (!truefalse) {
    alert('Please, check  the form!');
    return false;
  }

  const tableAll = relatedTarget.querySelectorAll('table');
  if ((Array.from(tableAll).length !== 2) && (!(tableAll[0].className.includes('main')))) {
    const err = new Error('What something wrong');
    err.name = '[handlerButtonCick]';
    throw err;
  }

  const url = new URL(APP_TABLE_PATHNAME as string, APP_TABLE_URL);
  const postman = new Postman(tableAll[0]);
  postman.urls = url;
  const jsonStr = JSON.stringify(datas);
  const response = await postman.post({ context: jsonStr });
  if (response === false) {
    return false;
  }
  return true;
}
