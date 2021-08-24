const db = require('../db/db');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()
class UserService{
    async createUser(userData){
        try{
            const {username,password,first_name,last_name,phone_number} = userData
            const hash = bcryptjs.hash(password,10)
            let success = false;
            await db.transaction(async(t)=>{
                await db('users').transacting(t).insert({
                    username:username,
                    password:password
                })

                await db('user_profiles').transacting(t).insert({
                    first_name:first_name,
                    last_name:last_name,
                    phone_number:phone_number
                })
                success = true;
            })
            if(success){
                return "USER_CREATED"
            }
        }catch(err){
            throw(err)
        }
    }

    async editUser(userData){
        try{const {id,first_name,last_name,phone_number} = userData;
        let success = false;
        await db.transaction(async (t)=>{
            await db('user_profiles').where('user_id','=',id).update({
                first_name:first_name,
                last_name:last_name,
                phone_number:phone_number
            })

            success = true;
        })

        if(success){
            return "USER_EDITED"
        }
    }catch(err){
        throw(err)
    }
    }
}

module.exports = new UserService();