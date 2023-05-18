import axios from 'axios'
async function getUser() {
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
export {
	getUser,
	updateUser
}