module.exports = app=>{
    const {router,controller} = app
    router.post('/user/imgFn',controller.user.imgFn)
}