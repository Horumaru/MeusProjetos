/*
The Hubspot chat is bases in an iframe.The good thing is that this iframe messages the main website when requested.The following code trigger these messages.To convert it to Analytics or Ads, I set it up with the events most requested by Account Managers: chat opened, chat closed and chat started.

The first below return events for dataLayer.Add into Custom HTML(with DOM Ready as trigger).To fire the conversion, add as trigger the events with the names chatOpened, chatClosed e chatStarted.
*/
< script type="text/javascript" >
    window.addEventListener('message', function (event) {
        try {
            var data = JSON.parse(event.data);
            //Chat Window
            if (data.type === "open-change") {
                //Opened
                if (data.data == true) {
                    console.log("Chat opened");
                    dataLayer.push({
                        'event': 'chatOpened'
                    });
                }
                //Closed
                if (data.data == false) {
                    console.log("Chat closed");
                    dataLayer.push({
                        'event': 'chatClosed'
                    });
                }
            }
            //Chat Started
            if (data.data.eventType == "conversationStarted") {
                console.log("Chat started");
                dataLayer.push({
                    'event': 'chatStarted'
                });
            }
        } catch (err) {}
    }, false);
</script>

//Below, find the same code version as Global Site Tag(gtag.js):

<script type="text/javascript">
    window.addEventListener('message', function(event) {
        try {
            var data = JSON.parse(event.data);
            //Chat Window
            if(data.type === "open-change") {
                //Opened
                if(data.data == true) {
                    console.log("Chat opened");
                    gtag('event', 'chatOpened', {
                    'event_category': 'Hubspot'
                    });
                }
                //Closed
                if(data.data == false) {
                    console.log("Chat closed");
                    gtag('event', 'chatClosed', {
                    'event_category': 'Hubspot'
                    });
                }
            }
            //Chat Started
            if(data.data.eventType == "conversationStarted") {
                console.log("Chat started");
                gtag('event', 'chatStarted', {
                'event_category': 'Hubspot'
                });
            }
        }catch(err){}
    }, false);
</script>