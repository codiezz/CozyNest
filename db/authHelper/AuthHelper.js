const bcrypt =require('bcrypt');


const hashPass = async(password)=>{
    try{
        const saltRounds = 10;
        const hashedpass = await bcrypt.hash(password,saltRounds);
        return hashedpass;
    }
   
    catch(err){
        console.log (`error hashing pasword`);
    }
   
}
module.exports = { hashPass };
// exports.comparepassword = async(password,hashedpass) => {
//     return bcrypt.compare(password,hashedpass)
// }cdkxmnc