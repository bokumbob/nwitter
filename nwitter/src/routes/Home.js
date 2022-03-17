import React, {useState, useEffect} from 'react';
import { dbService } from 'fbase';

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        // console.log(dbNweets)
        dbNweets.forEach((document) => {
            // console.log(document.data())
            const nweetObject = {...document.data(), id: document.id}
            setNweets((prev) => [nweetObject, ...prev])
            // 일케 prev보다 새 데이터를 앞에 써두면 최신 트윗을 먼저 보여줄 수 있다
        })
    }

    useEffect(()=>{
        getNweets();
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("nweets").add({
            // dbService.collection("nweets").add(...)는  promise를 반환하므로 async await문을 사용한다
            // dbService.collection("nweets")은 컬렉션을 생성한다. 
            // .add(...)는 해당 컬렉션에 문서를 생성한다.
            // 지금의 경우 nweet 상태의 값을 문서에 text 필드로 저장한 것
            text:nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        })
        setNweet("");
    };

    const onChange = (e) => {
        e.preventDefault();
        const {target : {value}} = e;
        setNweet(value);
    };

    return (
        <>
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="submit" value="nweet" />
        </form>
        <div>
            {nweets.map(nweet => (
                <div key={nweet.id}>
                    <h4>{nweet.text}</h4>
                </div>
            ))}
        </div>
        </>
    );
};

export default Home;