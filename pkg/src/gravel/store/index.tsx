class Store {
  constructor() {
  }
  protected state: {
    [key: string]: any
  } = {}

  public receiverMap: {[key: string]: Array<any>} = {}
  
  setReceiver = (key: string, callback: any) => {
    if (!this.receiverMap[key]) {
      this.receiverMap[key] = []
    }
    this.receiverMap[key].push(callback)
  }

  getState = (key: string) => {
    return this.state[key]
  }

  setState = (key: string, value: any) => {
    this.state[key] = value
    
    this.receiverMap?.[key]?.forEach(callback => {
      callback(value)
    })
  }

}

export default Store