const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    const originalJson = res.json.bind(res);
    res.json = function (data) {
        data.customField = 'Added by middleware';
        return originalJson(data);
    };
    next();
});

app.get('/', (req, res)=>{
    res.json({ message: 'Hello, World!' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});