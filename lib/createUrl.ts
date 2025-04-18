"use server";
import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function createUrl(alias: string, url: string): Promise<{ alias: string; url: string }> {

    if (!alias || alias.trim() === "") {
        throw new Error("Alias cannot be empty");
    }

    try {
        new URL(url);
    } catch {
        throw new Error("Invalid URL format");
    }

    try {
        const urlRes = await fetch(`${url}`);

    if (urlRes.status == 404) {
            console.log("URL fails", urlRes.status);
            throw new Error("URL fails ");
            
    }

    } catch (error) {
        console.log(error);
        throw new Error("URL fails ");
    }

    const aliasCollection = await getCollection(ALIAS_COLLECTION);
    const existing = await aliasCollection.findOne({alias});

    if (existing) {
        throw new Error("alias already exists");}

    const res = await aliasCollection.insertOne({alias, url});

    if (!res) {
        throw new Error("insert failed");
    }

    return { alias, url };

}