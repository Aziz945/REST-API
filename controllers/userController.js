const Contact =require('../models/User');

exports.postUser =async(req,res)=>{
    try {
      
        const newUser = new User(req.body);
        if(!req.body.email){
            res.status(400).send({msg:"email is required check again"});
            return
        }
        
        const user = await User.findOne({email:req.body.email})
        if(user){
            res.status(400).send({msg:"user already exist"});
            return;
        }

        const response = await newUser.save();
        res.status(200).send({msg:"user is saved",response:response})
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'can not save it...'})
    }
}