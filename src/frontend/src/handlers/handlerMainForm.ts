import { F, RequestHeaders } from '@Interfaces';
import relevantForm from '@relevant/relevantForm';
import Postman from '@ObjectDevelopment/requests';
import React from 'react';
const APP_TABLE_URL = ((typeof process.env.APP_TABLE_URL).includes('string')) ? process.env.APP_TABLE_URL : 'http://localhost:7070';
const APP_TABLE_PATHNAME = ((typeof process.env.APP_TABLE_PATHNAME).includes('string')) ? process.env.APP_TABLE_PATHNAME : '';

let datas: F = {
  name: '',
  job: '',
  company: '',
  location: '',
  lastlogin: ''
};
const keysArr = Array.from(Object.keys(datas));

export default async function handlerButtonCick(e: React.MouseEvent<HTMLDivElement>): Promise<boolean> {
  e.preventDefault();
  if (!((e.target as HTMLElement).tagName).includes('BUTTON')) {
    return false;
  }

  const relatedTarget = e.currentTarget as HTMLElement;
  const inputAll = relatedTarget.querySelectorAll('input');
  if ((inputAll.length === null)) {
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
  const postman = new Postman(tableAll[0]);
  postman.urls = url;
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

  const tbody = relatedTarget.querySelector('table.main tbody');
  if (tbody === null) {
    const err = new Error('What something wrong, tbody not found was.');
    err.name = '[handlerButtonCick]';
    throw err;
  }

  // tbod
  return true;
}
