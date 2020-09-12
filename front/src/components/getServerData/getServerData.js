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
    }
}

export default getServerData;