const mongoose = require('mongoose');
// mongodb+srv://nayem:16june1998@cluster0.grp6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_CONNECTION)
    // eslint-disable-next-line no-console
    .then(() => console.log("Database Connection Successfully"))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err))