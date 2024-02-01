import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:8087"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "multipart/form-data"
	}
}

/* This function adds a new room room to the database */
export async function addRoom(photo, roomType, roomPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)

	const response = await api.post("/rooms/add/new-room", formData,{
		headers: getHeader()
	})
	if (response.status === 201) {
		return true;
	  } else {
		console.error("Unexpected response status:", response.status);
		return false;
	} 
}	

/* This function gets all room types from the database */
export async function getRoomTypes() {
	try {
		const response = await api.get("/rooms/room/types")
		return response.data
	} catch (error) {
		throw new Error("Error fetching room types")
	}
}
/* This function deletes a room by the Id */
export async function deleteRoom(roomId) {
	try {
		const result = await api.delete(`/rooms/delete/room/${roomId}`, {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error deleting room ${error.message}`)
	}
}

//this function gets all rooms from the database
export async function getAllRooms() {
	try{
		const result = await api.get("/rooms/all-rooms")
		return result.data

	}catch(error){
		throw new Error("Error fetching rooms")
	}
}