const {GetRepo} = require('../adapter')
exports.readRepo = async(req, res) => {
    try{
        console.log('here')
        const getRepo = new GetRepo(req, res);
        let data = await getRepo.getGithubRepo();
        res.send(data)
    }catch(ex){
        console.log(ex)
    }
}