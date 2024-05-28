import { F } from '@Interfaces';
import { relevantForm } from '@relevant/relevantForm';

const datas: F = {
  name: '',
  job: '',
  company: '',
  location: '',
  lastlogin: ''
};
const keysArr = Array.from(Object.keys(datas));
const valeuArr = Array.from(Object.values(datas));

// relevantForm
export default function handlerButtonCick(e: MouseEvent): boolean {
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
  const truefalse = relevantForm(datas);
  if (truefalse === false) {
    alert('Please, check  the form!');
    return false;
  }


  return true;
}
