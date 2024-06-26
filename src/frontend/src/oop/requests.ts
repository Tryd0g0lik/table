import { LoacalLocalHead, RequestHeaders } from '@Interfaces';
import getCookie from '@Service/cookies';

/**
 * `ContentType` That is basice proporties of the fetch.  Exemple this is `{Content-Type: 'application/json'}`/
 * `caches?` That is basice proporties of the fetch. Exemple this is 'no-caches' /
 * `modes?` That is basice proporties of the fetch. Exemple this is `cors` /
 * MEthods:
 *  - `get` Entrypoints is`fGet(props: RequestHeaders)` where \
 * `{ContentType: string, caches: string|undefined,  modes: string| undefined}`
}`
 */
class Postman {

  urls: string | object;

  constructor(url: string | object) {
    this.urls = url;
  }

  async post(props: RequestHeaders): Promise<object | boolean> {
    const { caches = 'no-cache', contentType = 'application/json; charset=utf-8', ...data } = { ...props };

    const url = this.urls;
    if (url === undefined) {
      const err = new Error(url);
      err.name = '[Postman > post] url:';
      throw err;
    }

    const h = {
      'X-CSRFToken': getCookie('csrftoken'),
      'Content-Type': contentType
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: h,
      body: data.context
    });

    if (!response.ok) {
      console.log('[Postman > post] POST: Not Found');
      return false;
    }

    return true;
  }

  /**
     * That is a Fetch request. \
     * Evently point is `{ contentType, caches = undefined, modes = undefined }` by default.
     * All params insert into the URL `\?searcher = < your word/phrases for a serch >`. 
     * @param `props` of `fGet` is \
     * `{ContentType: string, caches: string|undefined,  modes: string| undefined}`
     * @param `props.caches` by default is `undefined`
     * @param `props.modes` by default is `'application/json;charset=utf-8'`
     * @returns  Promise< JSON  > or Error;
     */
  async get<T>(props: RequestHeaders): Promise<T | boolean> {
    const { contentType, caches = undefined, modes = undefined } = { ...props };
    /* ------ */
    const url = this.urls;
    if (url === undefined) {
      const err = new Error(url);
      err.name = '[EInput > get] GET:';
      throw err;
      // console.log('[FRequeres > fGet]:  Something that wrong with URL -> ', url);
      // return undefined;
    }

    /* ------ */
    const h: LoacalLocalHead = {
      'Content-Type': contentType as string,
      'X-CSRFToken': getCookie('csrftoken') as string
    };

    if (caches !== undefined) {
      h.cache = caches;
    }
    if (modes !== undefined) {
      h.mode = modes;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: h
    });
    if (!response.ok) {
      console.log('[EInput > get] GET: Not Found');
      return false;
    }
    const responseJson = await response.json();
    return responseJson;
  }

  /**
  * `id` for a remove through URL \
  * `/api/v1/remove/:id` - for a remove row
  * */
  async delete(): Promise<string> {
    const url = this.urls;
    const response = await fetch(url, {
      method: 'DELETE',
      'X-CSRFToken': getCookie('csrftoken'),
      'Content-Type': 'application/json',
      Accept: 'application/json',
      cache: 'no-cache',
      mode: 'cors'
    });
    /*   */
    if (!response.ok as boolean) {
      const err = new Error(String(response.ok));
      err.name = '[Postman > dalete]';
      throw err;
    };
    return 'Ok';
  }
}

export default Postman;
