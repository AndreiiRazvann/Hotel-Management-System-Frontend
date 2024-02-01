import React, { useState } from 'react'

const RoomFilter = ({ data, setFilteredData }) => {
	const [filter, setFilter] = useState("")

	const handleSelectChange = (e) => {
		const selectedType = e.target.value //custom select control to filter rooms
		setFilter(selectedType)

		const filteredRooms = data.filter((room) =>
			room.roomType.toLowerCase().includes(selectedType.toLowerCase())
		)
		setFilteredData(filteredRooms)
	}

	const clearFilter = () => {
		setFilter("")
		setFilteredData(data)
	}

    const roomTypes = ["", ...new Set(data.map((room) => room.roomType))] //extract all the room type in a unique manner from the room db

    //creating the UI of the form
    return (
		<div className="input-group mb-3">
			<span className="input-group-text" id="room-type-filter">
				FIlter rooms by type
			</span>
			<select
				className="form-select"
				aria-label="romm type filter"
				value={filter}
				onChange={handleSelectChange}>
				<option value="">Select a Room Type to Filter....</option>
				{roomTypes.map((type, index) => (
					<option key={index} value={String(type)}>
						{String(type)}
					</option>
				))}
			</select>
			<button className="btn btn-hotel" type="button" onClick={clearFilter}>
				Clear Filter
			</button>
		</div>
	)
}
export default RoomFilter