const mongo_id = process.env.MLABUSER;
const mongo_pwd = process.env.MLABPWD;
let mongoURI = '';

if(process.env.NODE_ENV === 'production'){
		mongoURI = ''
}
else
{	
		mongoURI = 'mongodb://localhost:27017/votingDapp'
}


module.exports = {
    abi : {
        factoryABI: '',
        pollABI: ''        
    },
    contractAddresses : {
        storeAddress: '',
        voterFactoryAddress: ''
    },
    db : {
        mongoURI: mongoURI
    } 
}

