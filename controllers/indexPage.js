const path = require('path');

const indexPage = async(req, res)=>{
    try {
        const filePath = path.join(__dirname + "/assets/index.html")
        res.sendFile(filePath, {root: '.'})   
    } catch (error) {
        console.log(error);
    }
}

module.exports = {indexPage}