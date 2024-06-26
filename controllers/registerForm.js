const nodemailer = require('nodemailer');
const pool = require('./dataController');
const query = require("../module/sqlQueries")

const userRegister = async(req, res)=>{
    try {
        const userName = req.body.username
        const emailAddress = req.body.email
        const validationRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const validEmail = validationRegex.test(emailAddress);

        /**
         * This function checks if the user already exists in the database.
         * It does this by making an asyncronous call to the database.
         * If the user exists, it returns true.
         * If the user does not exist, it returns false.
         * @returns True or False
         */
        const userExists = async ()=>{
            const result = await pool.query(query.getUser, [emailAddress]);
            if(result.rowCount>0){
                return true;
            }
            return false
        }
        
        if(validEmail && userName){
            /**
             * Checking if a user already exists.
             * If he does, we respond to the client telling them they already exist.
             * We do not create a new record for them in the database.
             */
            if(await userExists()){
                const result = await pool.query(query.getUser, [emailAddress]);
                return res.status(409).json({
                    message: `${result.rows[0].username}... You're already subscribed. There's entertaining and educational content on our channels. Please, share it among close friends`
                })
            }

            /**
             * If the user does not exist, We create a new record in the database and
             * send the response to the client telling them they were
             * successfully added to the database.
             */
            const result = await pool.query(query.insertUser, [userName, emailAddress]);
            return res.status(201).json({
                message: `Thanks for joining our waiting list.
                Keep up with us on these social platforms`
            })
        }
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }

}

module.exports = {
    userRegister
}