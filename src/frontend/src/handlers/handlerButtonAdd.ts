import { F } from '@Interfaces';
import handlerButtonCickAdd from './handlerMainForm';

const handlerRequest = async (e: MouseEvent): Promise<F | F[] | boolean> => {
  console.log('handlerRequest');
  const result = await handlerButtonCickAdd(e);
  if ((typeof result).includes('boolean')) {
    return false;
  };

  return result as F[];
};
export default handlerRequest;
