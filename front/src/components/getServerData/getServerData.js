const getServerData = {
    
    createNewBike: async (name, type, price) => {
        const res = await fetch("/create-new-bike", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({name, type, price})
        })
        if (!res.ok) return {msg: 'ERROR'};
        else return await res.json();
    },

    getFreeBikes: async () => {
        const res = await fetch("/free-bikes")
        if (!res.ok) return {msg: 'ERROR'};
        else return await res.json();
    },

    deleteBike: async (_id) => {
        const res = await fetch("/delete-bike/" + _id, { method: "DELETE" })
        if (!res.ok) return {msg: 'ERROR'};
        else return await res.json();
    },
}

export default getServerData;