 class LocalStorageService{
static service =new LocalStorageService()
  keys ={
      TOKEN:'token',
  }
saveToken(accessToken) {
      localStorage.setItem(this.keys.TOKEN, accessToken)
}

getAccessToken() {
      localStorage.getItem(this.keys.TOKEN);
}
}
export default LocalStorageService.service;