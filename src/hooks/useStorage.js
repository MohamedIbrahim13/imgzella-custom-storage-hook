import {useState,useEffect} from 'react';
import {projectStorage,projectFirestore,timestamp} from '../firebase/config';

const useStorage = (image)=>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);
    
    useEffect(()=>{
        const storageRef = projectStorage.ref(image.name);
        const collectionRef = projectFirestore.collection('images');
        storageRef.put(image).on('state_changed',(snap)=>{
            let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(precentage);
        },(err)=>{
            setError(err);
        },async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url,createdAt});
            setUrl(url);
        })

    },[image]);

    return {progress,error,url};
};

export default useStorage;