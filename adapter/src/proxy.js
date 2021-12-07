const httpProxy = require('http-proxy');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf-8');
const options = {
	target: 'https://api.github.com',
	secure: false,
	autoRewrite: true,
	changeOrigin: true,
	protocolRewrite: 'https',
};

const proxy = httpProxy.createServer(options);

const githubProxy = ({ req, res, method = 'GET' }) => new Promise((resolve, reject) => {
	{
		req.method = method.toUpperCase();
		proxy.web(req, res);
		proxy.on('error', (e) => {
			reject(e);
		});
		proxy.on('proxyRes', (proxyRes, req, res) => {
			let body = '';
			proxyRes.on('data', (chunk) => {
				body += chunk
			});
			proxyRes.on('end', () => {
				resolve(body);
			});
		});
	}
});

module.exports = { githubProxy };
