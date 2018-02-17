
var StateDataStore = function(){
    var Data = {
        Users: {}
    }
    return {
        setState: function(state, Context) {
            return new Promise(function(resolve, reject) {
                Data.Users[Context.deviceProfile.id] = state
                console.log(Data)
                resolve(Data)
            })
        },
        getState: function(Context) {
            return new Promise(function(resolve, reject) {
                if (!Data.Users[Context.deviceProfile.id]) {
                    Data.Users[Context.deviceProfile.id] = 'welcome'
                    resolve('welcome')
                } else {
                    resolve(Data.Users[Context.deviceProfile.id])
                }
            })
        }
    }
}()

module.exports = StateDataStore