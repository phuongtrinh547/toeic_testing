import axios from 'axios'

async function login(username, password) {
	try {
		const { data, error } = await axios.post("http://localhost:9000/auth/login", { username, password })

		if (!data || error) throw new Error()

		return {
			access_token: data.accessToken,
			refresh_token: data.refreshToken
		}
	} catch (error) {
		return {
			access_token: null
		}
	}
}

async function refreshToken(token) {
	try {
		const { data, error } = await axios.get("http://localhost:9000/auth/refresh-token?token=" + token)

		if (!data || error) throw new Error()

		return {
			access_token: data.accessToken
		}
	} catch (error) {
		return {
			access_token: null
		}
	}
}

async function getUser(fullname, email, gender, phoneNumber, username) {
	try {
		const { data, error } = await axios.get("http://localhost:9000/user/get-profile")
		if (!data || error) throw new Error()

		return data.data
	} catch (error) {
		return null
	}
}
async function updateUser(fullname, email, gender, phoneNumber, username) {
	try {
		const { data, error } = await axios.put("http://localhost:9000/user/update-profile", { fullname, email, gender, phoneNumber, username })
		if (!data || error) throw new Error()

		return data.data
	} catch (error) {
		return null
	}
}

async function signUp(newUser) {
	try {
		const { data } = await axios.post(`http://localhost:9000/auth/register`, newUser)

		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function getExerciseByCategory(category) {
	try {
		const { data } = await axios.get(`http://localhost:9000/exercise/get-by-category?category=` + category)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function getExerciseById(id) {
	try {
		const { data } = await axios.get(`http://localhost:9000/exercise/get-by-id/` + id)
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
async function addExercise(exercise) {
	try {
		const { data } = await axios.post(`http://localhost:9000/exercise/create`, exercise)
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

export {
	login,
	signUp,
	refreshToken,
	getExerciseByCategory,
	getExerciseById,
	getTopic,
	addTopic,
	addExercise,
	getTopicById,
	submitTest
}