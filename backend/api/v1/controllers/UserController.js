const userServices = require('../services/UserServices');

class UserController {
    async createUser(req,res,next){
        try{
            const result = await userServices.createUser(req.body)

            if(result == 'USER_CREATED'){
                res.status(201).send({
                    'status':'USER_CREATED',
                    'message':'User has been created'
                })
            }
            
        }catch(err){
            if (err.code == "ER_DUP_ENTRY") {
                res.status(500).send({
                  'status': 'REGISTER_FAILED',
                  'msg': 'Failed to register a new account, account already exists',
                  'err': err
                })
              } else {
                res.status(500).send({
                  'status': 'REGISTER_FAILED',
                  'msg': 'Failed to register a new account.',
                  'err': err
                })
              }
        }
    }

    async editUser(req,res,next){
        try{
            const result = await userServices.editUser(req.body);

            if(result == "USER_EDITED"){
                res.status(201).send({
                    'status':'USER_EDITED',
                    'message':'User has been edited'
                })
            }
        }catch(err){
            res.status(500).send({
                'status': 'EDIT_FAILED',
                'msg': 'Edit failed, server error.',
              })
        }
    }

}

module.exports= new UserController();