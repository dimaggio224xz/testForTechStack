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
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    getFreeBikes: async () => {
        const res = await fetch("/free-bikes")
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    getFullPrice: async () => {
        const res = await fetch("/full-price");
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    getFreeBikes: async () => {
        const res = await fetch("/free-bikes")
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    getRentedBikes: async () => {
        const res = await fetch("/rented-bikes")
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    deleteBike: async (_id) => {
        const res = await fetch("/delete-bike/" + _id, { method: "DELETE" })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    moveToRent: async (_id, time) => {
        const res = await fetch("/move-to-rent", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({_id, time})
        })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    moveToFree: async (_id) => {
        const res = await fetch("/move-to-free/" + _id, { method: "PUT" })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    }

}

export default getServerData;