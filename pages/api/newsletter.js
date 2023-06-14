const { MongoClient } = require('mongodb');

async function handler(req,res){

    if(req.method ==='POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message:'Invalid email adress'});
            return;
        }


        const client=await MongoClient.connect('mongodb://127.0.0.1:27017/events');
        
            const db = client.db();
            await db.collection('newsletter').insertOne({email:userEmail});

            client.close();

            res.status(201).json({message:'Signed Up !'})
    }

}
export default handler;