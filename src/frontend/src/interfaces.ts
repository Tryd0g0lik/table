export interface F {
  name: string
  job: string
  company: string
  location: string
  lastlogin: string
}

// Request Fetch
export interface LoacalLocalHead {
  'Content-Type': string
  'X-CSRFToken'?: string
  cache?: string
  mode?: string
}

export interface RequestHeaders {
  contentType?: string
  caches?: string
  modes?: string
  context?: string
}
