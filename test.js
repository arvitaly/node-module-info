function a(){
    console.log(this)
}
a.call({b:1})