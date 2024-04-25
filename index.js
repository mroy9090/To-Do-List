const app=require('./app')

app.listen(process.env.PORT || 5050, function(){
    console.log('Server is running on port 5050')
})