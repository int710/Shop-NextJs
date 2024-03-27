import { cookies } from "next/headers";
import accountApiRequest from "../apiRequest/account";

async function MeProfile() {
    const cookieStore = cookies();
    const sessionToken = cookieStore.get('sessionToken');

    const result = await accountApiRequest.me(sessionToken?.value ?? '')

    return (<div>
        {result.payload.data.name}
    </div>);
}

export default MeProfile;