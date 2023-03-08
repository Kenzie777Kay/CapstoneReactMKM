let token = '198edb74b9d092a1c38c508896f6f9e36d7aaf399e416508';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://tiny-navy-dust.glitch.me/api/cannings`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) =>{
        const response = await fetch(`https://tiny-navy-dust.glitch.me/api/cannings`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
       
        })
        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },


    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://tiny-navy-dust.glitch.me/api/cannings/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        

    },
    delete: async(id:string) => {
        const response = await fetch(`https://tiny-navy-dust.glitch.me/api/cannings/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}