class HaikuApi {
	static getAllHaikus() {
		return fetch('https://haiku-api-rails.sashabajzek.com/api/v1/haikus')
			.then(response => {
				return response.json();
			})
			.catch(error => {
				return error;
			});
	}
	
	static createHaiku(haiku) {
		const headers = Object.assign({'Content-Type': 'application/json'});
		const request = new Request('https://haiku-api-rails.sashabajzek.com/api/v1/haikus', {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(haiku)
		});
		
		return fetch(request)
			.then(response => {
				return response.json();
			})
			.catch(error => {
				return error;
			});
	}
	
	
	static deleteHaiku(haikuId) {
		const headers = Object.assign({'Content-Type': 'application/json'});
		const request = new Request(`https://haiku-api-rails.sashabajzek.com/api/v1/haikus/${haikuId}`, {
			method: 'DELETE',
			headers: headers
		});
		
		return fetch(request)
			.then(response => {
				return response.json();
			})
			.catch(error => {
				return error;
			});	
	}
	
	
	
}

export default HaikuApi;