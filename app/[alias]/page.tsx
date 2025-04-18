import {redirect} from "next/navigation";
import getUrl from "@/lib/getUrl";

export default async function Redirect({params,}: {params: Promise<{ alias: string}>; }) {
    const { alias } = await params;
    const result = await getUrl(alias);

    if (result) {
        redirect(result.url);
    }

    return (
        <div className="p-6 text-red-600 text-center">Alias not found</div>
    );}