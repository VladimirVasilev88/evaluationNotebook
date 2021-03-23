const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(
        {
            "schoolclasses":[
                {
                    "id": "111",
                    "classname": "A",

                },
                {
                    "id": "222",
                    "classname": "B",
                    
                }

            ]

        }
    );

});
app.listen(5000, console.log.bind(console, "Conslole listening on port 5000.."));