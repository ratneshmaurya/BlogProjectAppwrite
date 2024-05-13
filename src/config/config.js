//here writing all the environment variable accessing so that we don't write whole access line again and again in our project
// for eg- now to access appwriteUrl we dont have to write whole line, we simple now can access using the key(appwriteUrl, appwriteProjectId etc.).
//using String function becoz we are specifying that env varibale values must be in string format
//here import.meta.env.<> is format to access the env variable in VITE project

const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default config