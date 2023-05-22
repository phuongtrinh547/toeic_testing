import axios from "axios"

async function getTopicById(id) {
	try {
		const { data } = await axios.get(`http://localhost:9000/topic/get-by-id/${id}`)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function addTopic(topic) {
	try {
		const { data } = await axios.post(`http://localhost:9000/topic/create`, topic)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}

async function submitTest(payload) {
	try {
		const { data } = await axios.post(`http://localhost:9000/result/submit`, payload)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function getTopic() {
	try {
		const { data } = await axios.get(`http://localhost:9000/topic/get-all`)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function deleteTopic(idTopic) {
	try {
		const { data } = await axios.delete(`http://localhost:9000/topic/delete/` + idTopic)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
export {
	addTopic,
	getTopicById,
	getTopic,
	submitTest,
	deleteTopic
}