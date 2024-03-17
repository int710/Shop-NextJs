import { cookies } from "next/headers";
import envConfig from "../../../config";

async function MeProfile() {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('sessionToken');

    const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken?.value}`
        }
    }).then(async (res) => {
        const payload = await res.json()
        const data = {
            status: res.status,
            payload
        }
        if (!res.ok) {
            throw data
        }
        return data
    })
    console.log(result)
    return (<div>
        Xin chào {result.payload?.data.name}
    </div>);
}

export default MeProfile;