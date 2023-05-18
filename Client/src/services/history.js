import axios from 'axios'
async function getUserResult(history) {
	try {
		const { data } = await axios.get(`http://localhost:9000/result/get-by-user`, history)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
export {
	getUserResult
}