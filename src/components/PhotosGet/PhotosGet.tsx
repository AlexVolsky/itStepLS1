import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { IPhotos } from './interfacePhotos';
import http from '../../http';



const PhotosGet = () => {
    const [photos, setPhotos] = useState<IPhotos[]>([]);


    useEffect(() => { getPhotos()}, []);
    const getPhotos = async () => {
        // ASYNC AWAIT
        try {
            const responseData = await http.get('/photos?albumId=1');
                setPhotos(responseData.data); 
            
        } catch (err) {
            alert(err);
        }
    };
    return (
        <>

            
            <button onClick={() => getPhotos()}>get photos</button>
            <div>
                {photos.map(photo => <img src={`${photo.url}`} key={`${photo.id}`} className="img-fluid" alt={`${photo.title}`}/>)}
            </div>

            
        </>
    );
};

export default PhotosGet;