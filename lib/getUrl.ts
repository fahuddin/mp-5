// lib/getAliasByKey.ts
import getCollection, { ALIAS_COLLECTION } from "@/db";
import { AliasProps } from "@/types";

export default async function getUrl(
    alias: string,
  ): Promise<AliasProps | null> {

  const collection = await getCollection(ALIAS_COLLECTION);
const data = await collection.findOne({ alias });

 



  
  if (data === null) {
    return null;
  }

   return {
    alias: data.alias,
    url: data.url,
  };
  }