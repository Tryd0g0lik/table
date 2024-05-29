import { F } from '@Interfaces';
import handlerButtonCick from './handlerMainForm';

const handlerRequest = async (e: MouseEvent): Promise<F | F[] | boolean> => {
  const result = await handlerButtonCick(e);
  if ((typeof result).includes('boolean')) {
    return false;
  };

  return result as F[];
};
export default handlerRequest;
