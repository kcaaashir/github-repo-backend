module.exports = class GithubApi {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    listRepositaries({ userName, perPage}){
        return `${this.baseUrl}/users/${userName}/repos?per_page=${perPage}`
    }
}