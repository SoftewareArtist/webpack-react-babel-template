export const host = 'localhost:8081';
export const apiRoot = 'http://'+host+'/api/v1';
export const apiUrls = {
	GET_ETH_STATS: apiRoot + '/explorer/getEthStats',
	GET_BLOCK: apiRoot + '/explorer/getBlock'
};