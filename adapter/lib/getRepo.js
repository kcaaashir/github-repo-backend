const { githubProxy } = require('../src/proxy');
const Github = require('../api/github');

module.exports = class Uploader {
	constructor(req, res) {
		this.req = req;
		this.res = res;
		this.github = new Github(process.env.GITHUB_URL);
	}

	async getGithubRepo() {
		this.req.url = this.github.listRepositaries(this.req.query);
		const  data = await githubProxy({ req: this.req, res: this.res });
		return data;
        
	}

	
};
