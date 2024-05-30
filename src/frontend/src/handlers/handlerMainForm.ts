import { F, RequestHeaders } from '@Interfaces';
import relevantForm from '@relevant/relevantForm';
import Postman from '@ObjectDevelopment/requests';
import React from 'react';
import { APP_TABLE_PATHNAME, APP_TABLE_URL } from '@Service/env';
// const APP_TABLE_PATHNAME = ((typeof process.env.APP_TABLE_PATHNAME).includes('string')) ? process.env.APP_TABLE_PATHNAME : '';

const datas: F = {
  name: '',
  job: '',
  company: '',
  location: '',
  lastlogin: ''
};
const keysArr = Array.from(Object.keys(datas));
let ind_ = 0;
export default async function handlerButtonCickAdd(e: MouseEvent): Promise<boolean | object> {
  e.preventDefault();
  if (!((e.target as HTMLElement).tagName).includes('BUTTON')) {
    return false;
  }
  if (ind_ !== 0) {
    return false;
  }
  ind_ += 1;
  const relatedTarget = e.currentTarget as HTMLElement;
  const inputAll = relatedTarget.querySelectorAll('input');
  if ((inputAll.length === 0)) {
    return false;
  }

  for (let i = 0; i < keysArr.length; i++) {
    const ind = keysArr.indexOf(keysArr[i]);
    datas[keysArr[ind]] = inputAll[ind].value;
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

  let url = new URL(APP_TABLE_PATHNAME as string + '/api/v1/add/line', APP_TABLE_URL);
  const postman = new Postman(url);

  const jsonStr = JSON.stringify(datas);
  let response = await postman.post({ context: jsonStr });
  if (response === false) {
    return false;
  }

  /* ------ Below get update's datas ------ */
  url = new URL(APP_TABLE_PATHNAME as string + '/api/v1/all', APP_TABLE_URL);
  postman.urls = url;
  response = await postman.get({ contentType: 'application/json; charset=utf-8' });
  if (response === false) {
    return false;
  }
  // tbod
  return response;
}
