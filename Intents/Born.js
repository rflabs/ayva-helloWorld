
var Born = function(Context){
    Context.assistant.say("I was born in Boston, where my creators orginally met. This concludes the tutorial but please check out the Refresh Labs website to learn more about what I can do")
    
    if(Context.deviceProfile.isMobile())
    {
        Context.assistant.card({
            "basicCard": {
                "title": "Refresh Labs",
                "subtitle": "",
                "formattedText": "",
                "image": {
                    "url": "https://i.imgur.com/qkybs3w.png",
                    "accessibilityText": "Refresh Labs"
                },
                "buttons": [{
                    "title": "Visit refreshlabs.co",
                    "openUrlAction": {
                        "url":  "https://www.refreshlabs.co"
                    }
                }]
            }
        })
    }

    Context.assistant.finish({exit:true})
}

module.exports = Born;