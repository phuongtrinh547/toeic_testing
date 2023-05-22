import axios from "axios"

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
async function addExercise(exercise) {
	try {
		const { data } = await axios.post(`http://localhost:9000/exercise/create`, exercise)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function getExercise() {
	try {
		const { data } = await axios.get(`http://localhost:9000/exercise/get-all`)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
async function deleteExercise(idExercise) {
	try {
		const { data } = await axios.delete(`http://localhost:9000/exercise/delete/` + idExercise)
		if (!data) throw new Error()
		return data.data
	} catch (error) {
		return null
	}
}
export {
	addExercise,
	getExerciseByCategory,
	getExerciseById,
	getExercise
}